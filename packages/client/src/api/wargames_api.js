import uniqid from "uniqid";
import _ from "lodash";
import {fetch} from "whatwg-fetch";
import deepCopy from "../Helpers/copyStateHelper";

import calcComplete from "../Helpers/calcComplete";

import PouchDB from "pouchdb";
import {
  databasePath,
  serverPath,
  dbDefaultSettings,
  MSG_STORE,
  MSG_TYPE_STORE,
  PLANNING_PHASE,
  ADJUDICATION_PHASE,
  MAX_LISTENERS,
  SERGE_INFO,
} from "../consts";

import {
  setLatestFeedbackMessage,
  setCurrentWargame,
  setLatestWargameMessage,
} from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";

import moment from "moment";
import {addNotification} from "../ActionsAndReducers/Notification/Notification_ActionCreators";

var wargameDbStore = [];

const listenNewMessage = ({db, name, dispatch}) => {

  db.changes({since: 'now', live: true, timeout: false, heartbeat: false, include_docs: true})
    .on('change', function (changes) {
      (async () => {

        if (changes.doc.hasOwnProperty("infoType")) {
          dispatch(setCurrentWargame(changes.doc));
          dispatch(setLatestWargameMessage(changes.doc));
          return;
        }

        if (changes.doc.hasOwnProperty("feedback")) {
          dispatch(setLatestFeedbackMessage(changes.doc));
        } else {
          dispatch(setLatestWargameMessage(changes.doc));
        }
      })();
    })
    .on('error', function (err) {
      // if (err) {
        // dispatch(addNotification("Serge disconnected.", "error"));
      // }
      listenNewMessage({db, name, dispatch});
    });
};


export const listenForWargameChanges = (name, dispatch) => {
  let wargame = wargameDbStore.find((item) => item.name === name);
  let db = wargame.db;
  listenNewMessage({db, name, dispatch});
};


export const populateWargame = (dispatch) => {
  return fetch(serverPath+'allDbs')
    .then((response) => {
      return response.json();
    })
    .then((dbs) => {
      const wargameNames = wargameDbStore.map((db) => db.name);
      let toCreate = _.difference(dbs, wargameNames);
      toCreate = _.pull(toCreate, MSG_STORE, MSG_TYPE_STORE, SERGE_INFO, "_replicator", "_users");

      toCreate.forEach((name) => {
        const db = new PouchDB(databasePath+name);
        db.setMaxListeners(MAX_LISTENERS);

        wargameDbStore.unshift({name, db});
      });

      const promises = wargameDbStore.map((game) => {
        return getLatestWargameRevision(game.name)
          .then(function (res) {
            return {
              name: game.db.name,
              title: res.wargameTitle,
              initiated: res.wargameInitiated,
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
      return Promise.all(promises);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const clearWargames = () => {
  fetch(serverPath+'clearAll')
    .then(() => {
      window.location.reload(true);
    });
};

export const getIpAddress = () => {
  return fetch(serverPath+'getIp')
    .then((res) => res.json());
};

export const saveIcon = (file) => {
  return fetch(serverPath+'saveIcon', {
    method: 'POST',
    "Content-Type": "image/png",
    body: file,
  })
    .then((res) => res.json());
};

export const deleteWargame = (wargamePath) => {

  const name = getNameFromPath(wargamePath);

  let wargame = wargameDbStore.find((item) => item.name === name);
  wargame.db.destroy();
  // .then(() => {
  //   return fetch(serverPath+'deleteDb?db='+name);
  // })
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });


  const index = wargameDbStore.findIndex((item) => item.name === name);
  wargameDbStore.splice(index, 1);
};

export const createWargame = (dispatch) => {
  const uniqId = uniqid.time();

  const name = `wargame-${uniqId}`;

  return new Promise((resolve, reject) => {

    const db = new PouchDB(databasePath+name);

    db.setMaxListeners(15);

    wargameDbStore.unshift({name, db});

    const settings = {...dbDefaultSettings, name: name, wargameTitle: name};

    db.put(settings)
      .then(() => {
        return db.get(dbDefaultSettings._id);
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      })
  });
};

export const checkIfWargameStarted = (dbName) => {
  return getAllMessages(dbName)
    .then((messages) => {
      const latestWargame = messages.find((message) => message.infoType);
      return !!latestWargame;
    })
};

export const getLatestWargameRevision = (dbName) => {
  return getAllMessages(dbName)
    .then((messages) => {
      const latestWargame = messages.find((message) => message.infoType);
      if (latestWargame) return latestWargame;
      return getWargameLocalFromName(dbName);
    })
    .catch(err => err);
};

export const editWargame = (dbPath) => {

  const dbName = getNameFromPath(dbPath);

  return new Promise((resolve, reject) => {

    resolve(getLatestWargameRevision(dbName));

  });
};

export const exportWargame = dbPath => {
  const dbName = getNameFromPath(dbPath);

  return getAllMessages(dbName).then(messages => {
    const latestWargame = messages.find(message => message.infoType);

    if(latestWargame) {
      return {...latestWargame, exportMessagelist: messages};
    }
    else {
      const db = wargameDbStore.find(db => db.name === dbName).db;

      return db.get(dbDefaultSettings._id).then(res => {
        return {...res, exportMessagelist: messages};
      });
    }
  });
};

export const initiateGame = (dbName) => {

  const game = wargameDbStore.find((wargame) => dbName === wargame.name);

  return new Promise((resolve, reject) => {

    return game.db.get(dbDefaultSettings._id)

      .then((res) => {
        return game.db.put({
          _id: dbDefaultSettings._id,
          _rev: res._rev,
          name: res.name,
          wargameTitle: res.wargameTitle,
          data: res.data,
          gameTurn: 0,
          phase: ADJUDICATION_PHASE,
          adjudicationStartTime: moment().format(),
          turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
          wargameInitiated: true,
        })
      })
      .then(() => {
        return game.db.get(dbDefaultSettings._id)
      })
      .then((res) => {
        return game.db.put({
          _id: new Date().toISOString(),
          infoType: true,
          name: res.name,
          wargameTitle: res.wargameTitle,
          data: res.data,
          gameTurn: res.gameTurn,
          phase: res.phase,
          adjudicationStartTime: res.adjudicationStartTime,
          turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
          wargameInitiated: res.wargameInitiated,
        })
      })
      .then(() => {
        return game.db.get(dbDefaultSettings._id)
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  })
};

export const updateWargameTitle = (dbName, title) => {

  return getAllWargames()
    .then(function (games) {
      if (games.some((game) => game.title === title && getNameFromPath(game.name) !== dbName)) return 'Name already in use.';

      const db = wargameDbStore.find((db) => db.name === dbName).db;

      return new Promise((resolve, reject) => {

        return getLatestWargameRevision(dbName)
          .then(function (doc) {

            if (doc.wargameInitiated) {
              doc.wargameTitle = title;
              resolve(createLatestWargameRevision(dbName, doc));
            } else {
              return db.put({
                _id: dbDefaultSettings._id,
                _rev: doc._rev,
                name: doc.name,
                wargameTitle: title,
                data: doc.data,
                gameTurn: doc.gameTurn,
                phase: doc.phase,
                timeWarning: doc.timeWarning,
                adjudicationStartTime: doc.adjudicationStartTime,
                turnEndTime: moment().add(doc.data.overview.realtimeTurnTime, 'ms').format(),
                wargameInitiated: doc.wargameInitiated,
              })
                .then(() => {
                  resolve(db.get(dbDefaultSettings._id));
                })
                .catch((err) => {
                  reject(err);
                })
            }
          });
      });
    });
};

export const saveSettings = (dbName, data) => {

  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db;

  return getLatestWargameRevision(dbName)
    .then(function (res) {
      let newDoc = deepCopy(res);
      newDoc.data.overview = data;
      newDoc.data.overview.complete = calcComplete(data);

      return new Promise((resolve, reject) => {
        if (newDoc.wargameInitiated) {
          resolve(createLatestWargameRevision(dbName, newDoc));
        } else {
          return db.put({
            _id: dbDefaultSettings._id,
            _rev: newDoc._rev,
            name: newDoc.name,
            wargameTitle: newDoc.wargameTitle,
            data: newDoc.data,
            gameTurn: newDoc.gameTurn,
            phase: newDoc.phase,
            adjudicationStartTime: newDoc.adjudicationStartTime,
            turnEndTime: moment().add(newDoc.data.overview.realtimeTurnTime, 'ms').format(),
            wargameInitiated: newDoc.wargameInitiated,
          })
            .then(() => {
              resolve(db.get(dbDefaultSettings._id));
            })
        }
      });
    });
};

export const saveForce = (dbName, newName, newData, oldName) => {

  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db;

  return getLatestWargameRevision(dbName)
    .then(function (res) {

      let newDoc = deepCopy(res);

      let updatedData = newDoc.data;

      let forces = updatedData.forces.forces;

      let forceNew = forces.every((force) => force.name !== oldName);

      if (forceNew) {
        forces.push({...newData, name: newName});
      } else {
        let forceIndex = forces.findIndex((force) => force.name === oldName);
        // forces.forceName = newName;
        forces.splice(forceIndex, 1, {...newData, name: newName});
      }

      updatedData.forces.forces = forces;

      // remove default before calc

      let forceCheck = deepCopy(forces);
      let umpireIndex = forceCheck.findIndex((force) => force.umpire);
      forceCheck.splice(umpireIndex, 1);

      updatedData.forces.complete = calcComplete(forceCheck);

      return new Promise((resolve, reject) => {
        if (newDoc.wargameInitiated) {
          resolve(createLatestWargameRevision(dbName, newDoc));
        } else {
          return db.put({
            _id: dbDefaultSettings._id,
            _rev: res._rev,
            name: res.name,
            wargameTitle: res.wargameTitle,
            data: updatedData,
            gameTurn: res.gameTurn,
            phase: res.phase,
            adjudicationStartTime: res.adjudicationStartTime,
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            wargameInitiated: res.wargameInitiated,
          })
            .then(() => {
              resolve(db.get(dbDefaultSettings._id));
            })
        }
      });
    });
};



export const saveChannel = (dbName, newName, newData, oldName) => {

  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db;

  return getLatestWargameRevision(dbName)
    .then(function (res) {

      let newDoc = deepCopy(res);

      let updatedData = newDoc.data;

      let channels = updatedData.channels.channels;

      let channelNew = channels.every((channel) => channel.name !== oldName);

      if (channelNew) {
        channels.push({...newData, name: newName});
      } else {
        let channelIndex = channels.findIndex((channel) => channel.name === oldName);
        channels.splice(channelIndex, 1, {...newData, name: newName});
      }

      updatedData.channels.channels = channels;
      updatedData.channels.complete = calcComplete(channels);

      return new Promise((resolve, reject) => {
        if (res.wargameInitiated) {
          let data = res;
          data.data = updatedData;
          resolve(createLatestWargameRevision(dbName, data))
        } else {
          db.put({
            _id: dbDefaultSettings._id,
            _rev: res._rev,
            name: res.name,
            wargameTitle: res.wargameTitle,
            data: updatedData,
            gameTurn: res.gameTurn,
            phase: res.phase,
            adjudicationStartTime: res.adjudicationStartTime,
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            wargameInitiated: res.wargameInitiated,
          })
            .then(() => {
              resolve(db.get(dbDefaultSettings._id));
            })
            .catch((err) => {
              reject(err);
            })
        }
      });
    })
};

export const duplicateChannel = (dbName, channelUniqid) => {

  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db;

  return getLatestWargameRevision(dbName)
    .then(function (res) {

      let newDoc = deepCopy(res);

      let updatedData = newDoc.data;

      let channels = updatedData.channels.channels;

      let channelIndex = channels.findIndex((channel) => channel.uniqid === channelUniqid);

      let duplicateChannel = deepCopy(channels[channelIndex]);

      let uniq = uniqid.time();

      duplicateChannel.name = duplicateChannel.name + `-${uniq}`;
      duplicateChannel.uniqid = `channel-${uniq}`;

      channels.splice(channelIndex, 0, duplicateChannel);

      updatedData.channels.channels = channels;
      updatedData.channels.complete = calcComplete(channels) && channels.length !== 0;

      return new Promise((resolve, reject) => {
        if (res.wargameInitiated) {
          let data = res;
          data.data = updatedData;
          createLatestWargameRevision(dbName, data)
            .then((res) => {
              resolve(res);
            })
        } else {
          db.put({
            _id: dbDefaultSettings._id,
            _rev: res._rev,
            name: res.name,
            wargameTitle: res.wargameTitle,
            data: updatedData,
            gameTurn: res.gameTurn,
            phase: res.phase,
            adjudicationStartTime: res.adjudicationStartTime,
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            wargameInitiated: res.wargameInitiated,
          })
            .then(() => {
              resolve(db.get(dbDefaultSettings._id));
            })
            .catch((err) => {
              reject(err);
            })
        }
      });
    });
};

export const deleteChannel = (dbName, channelUniqid) => {

  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db;
  //
  return getLatestWargameRevision(dbName)
    .then(function (res) {

      let newDoc = deepCopy(res);

      let updatedData = newDoc.data;

      let channels = updatedData.channels.channels;

      let channelIndex = channels.findIndex((channel) => channel.uniqid === channelUniqid);

      channels.splice(channelIndex, 1);

      updatedData.channels.channels = channels;
      updatedData.channels.complete = calcComplete(channels) && channels.length !== 0;

      return new Promise((resolve, reject) => {

        if (res.wargameInitiated) {
          let data = res;
          data.data = updatedData;
          createLatestWargameRevision(dbName, data)
            .then((res) => {
              resolve(res);
            })
        } else {
          db.put({
            _id: dbDefaultSettings._id,
            _rev: res._rev,
            name: res.name,
            wargameTitle: res.wargameTitle,
            data: updatedData,
            gameTurn: res.gameTurn,
            phase: res.phase,
            adjudicationStartTime: res.adjudicationStartTime,
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            wargameInitiated: res.wargameInitiated,
          })
          .then(() => {
            resolve(db.get(dbDefaultSettings._id));
          })
          .catch((err) => {
            reject(err);
          })
        }
      });
    })
};

export const deleteForce = (dbName, forceName) => {

  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db;
  //
  return getLatestWargameRevision(dbName)
    .then(function (res) {

      let newDoc = deepCopy(res);

      let updatedData = newDoc.data;

      let forces = updatedData.forces.forces;

      let forceIndex = forces.findIndex((force) => force.name === forceName);

      forces.splice(forceIndex, 1);

      updatedData.forces.forces = forces;
      updatedData.channels.complete = calcComplete(forces);

      return new Promise((resolve, reject) => {

        if (res.wargameInitiated) {
          let data = res;
          data.data = updatedData;
          createLatestWargameRevision(dbName, data)
            .then((res) => {
              resolve(res);
            })
        } else {
          db.put({
            _id: dbDefaultSettings._id,
            _rev: res._rev,
            name: res.name,
            wargameTitle: res.wargameTitle,
            data: updatedData,
            gameTurn: res.gameTurn,
            phase: res.phase,
            adjudicationStartTime: res.adjudicationStartTime,
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            wargameInitiated: res.wargameInitiated,
          })
          .then(() => {
            resolve(db.get(dbDefaultSettings._id));
          })
          .catch((err) => {
            reject(err);
          })
        }
      });
    })
};


export const cleanWargame = (dbPath) => {

  const dbName = getNameFromPath(dbPath);

  const db = wargameDbStore.find((db) => db.name === dbName).db;
  const uniqId = uniqid.time();

  return new Promise((resolve, reject) => {

    var newDb;
    var newDbName = `wargame-${uniqId}`;

    db.get(dbDefaultSettings._id)
      .then((res) => {
        newDb = new PouchDB(databasePath+newDbName);
        return res;
      })
      .then((res) => {
        return newDb.put({
          _id: dbDefaultSettings._id,
          name: newDbName,
          wargameTitle: `${res.wargameTitle}-${uniqId}`,
          data: res.data,
          gameTurn: res.gameTurn,
          phase: res.phase,
          adjudicationStartTime: res.adjudicationStartTime,
          turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
          wargameInitiated: false,
        })
      })
      .then(() => {
        wargameDbStore.unshift({name: newDbName, db: newDb});
        return getAllWargames();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      })
  });
};

export const duplicateWargame = (dbPath) => {

  const dbName = getNameFromPath(dbPath);

  const dbInStore = wargameDbStore.find((db) => db.name === dbName);
  const uniqId = uniqid.time();

  return new Promise((resolve, reject) => {

    var newDbName = `wargame-${uniqId}`;
    var newDb = new PouchDB(databasePath+newDbName);

    return dbInStore.db.replicate.to(newDb)
      .then(() => {
        return wargameDbStore.unshift({name: newDbName, db: newDb});
      })
      .then(() => {
        return getLatestWargameRevision(dbName)
      })
      .then((res) => {
        return newDb.put({
          _id: dbDefaultSettings._id,
          name: newDbName,
          wargameTitle: `${res.wargameTitle}-${uniqId}`,
          data: res.data,
          gameTurn: res.gameTurn,
          phase: res.phase,
          adjudicationStartTime: res.adjudicationStartTime,
          turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
          wargameInitiated: res.wargameInitiated,
        })
      })
      .then(() => {
        return newDb.get(dbDefaultSettings._id);
      })
      .then((res) => {
        return createLatestWargameRevision(newDbName, res);
      })
      .then(() => {
        return getAllWargames();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      })
  });
};

export const getWargameLocalFromName = (dbName) => {

  const game = wargameDbStore.find((wargame) => dbName === wargame.name);

  return new Promise((resolve, reject) => {
    game.db.get(dbDefaultSettings._id)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  });
};

export const getWargame = (gamePath) => {

  return (async () => {

    const name = getNameFromPath(gamePath);

    const wargame = await getLatestWargameRevision(name);

    return wargame;

  })();
};


export const createLatestWargameRevision = (dbName, wargameData) => {

  let copiedData = deepCopy(wargameData);
  delete copiedData._id;
  delete copiedData._rev;

  const game = wargameDbStore.find((wargame) => dbName === wargame.name);

  return new Promise((resolve, reject) => {
    game.db.put({
      _id: new Date().toISOString(),
      infoType: true,
      ...copiedData,
    })
      .then((res) => {
        resolve(getLatestWargameRevision(dbName));
      })
      .catch((err) => {
        reject(err);
        throw new Error(err);
      })
  });
};

export const getAllWargameRevisions = (dbName) => {

  return new Promise((resolve, reject) => {
    getAllMessages(dbName)
      .then((messages) => {
        let revisions = messages.filter((message) => message.hasOwnProperty('infoType'));
        resolve(revisions);
      })
      .catch((err) => {
        reject(err);
      })
  });
};

export const nextGameTurn = (dbName) => {

  return new Promise((resolve, reject) => {
    getLatestWargameRevision(dbName)
      .then((res) => {

        switch (res.phase) {
          case PLANNING_PHASE:
            res.phase = ADJUDICATION_PHASE;
            res.turnEndTime = 0;
            res.adjudicationStartTime = moment().format();
            break;
          case ADJUDICATION_PHASE:
            res.phase = PLANNING_PHASE;
            res.gameTurn += 1;
            res.data.overview.gameDate = moment(res.data.overview.gameDate).add(res.data.overview.gameTurnTime, 'ms').format("YYYY-MM-DDTHH:mm");
            res.turnEndTime = moment().add(res.data.overview.realtimeTurnTime, 'ms').format();
            break;
          default:
            break;
        }
        return createLatestWargameRevision(dbName, res);
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  });
};

export const postFeedback = (dbName, fromDetails, message) => {

  const db = wargameDbStore.find((db) => db.name === dbName).db;

  return new Promise((resolve, reject) => {
    db.put({
      _id: new Date().toISOString(),
      details: {
        channel: "Feedback",
        from: fromDetails,
        messageType: "Chat",
        timestamp: new Date().toISOString(),
      },
      message: {
        content: message,
      },
      feedback: true,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  });
};

export const postNewMessage = (dbName, details, message) => {

  const db = wargameDbStore.find((db) => db.name === dbName).db;

  return new Promise((resolve, reject) => {

    db.put({
      _id: new Date().toISOString(),
      details,
      message,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  });
};

export const getAllMessages = dbName => {

  const db = wargameDbStore.find(db => db.name === dbName).db;

  return db.allDocs({include_docs: true, descending: true})
    .then(res => res.rows.map(a => a.doc))
    .catch(() => {
      throw new Error("Serge disconnected");
    });
};


export const getAllWargames = function () {

  const promises = wargameDbStore.map((game) => {
    return getLatestWargameRevision(game.name)
      .then(function (res) {
        return {
          name: game.db.name,
          title: res.wargameTitle,
          initiated: res.wargameInitiated,
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return Promise.all(promises);
};

const getNameFromPath = function (dbPath) {
  let path = new URL(dbPath).pathname;
  let index = path.lastIndexOf('/');
  return path.substring(index + 1);
};
