const listeners = {}
let addListenersQueue = []
const { localSettings, COUNTER_MESSAGE } = require('../consts')
const Cloudant = require('@cloudant/cloudant')

const cloudant = Cloudant({
  url: 'https://27d57343-a838-4b42-887d-8f947628c2b5-bluemix.cloudantnosqldb.appdomain.cloud',
  plugins: {
    iamauth: {
      iamApiKey: 'cYnqoe0qRNIHaLndXakpgnfsjFF0nsM-HFEZOWnY3VMb'
    }
  }
})

const ibmDb = (app, io) => {
  // changesListener
  const initChangesListener = (dbName) => {
    const db = cloudant.db.use(dbName)
      db.follow({
        since: 'now',
        live: true,
        include_docs: true
      }, (err, change) => {
        if (!err) {
          db.get(change.id).then(data => io.emit('changes', data))
        }
     })
  }

  // check listeners queue to add a new listenr
  setInterval(() => {
    if (addListenersQueue.length) {
      for (const dbName of addListenersQueue) {
        initChangesListener(dbName)
      }
      // clean queue
      addListenersQueue = []
    }
  }, 5000)

  cloudant.db.list().then(dbs => {
    dbs.forEach(db => initChangesListener(db))
  }).catch(err => console.log('Error on load alldbs', err))

  // get all wargame names
  app.get('/allDbs', async (req, res) => {
    const dbList = await cloudant.db.list()
    res.send({ msg: 'ok', data: dbList || [] })
  })

  app.put('/:wargame', async (req, res) => {
    const putData = req.body
    const databaseName = req.params.wargame

    if (!listeners[databaseName]) {
      addListenersQueue.push(databaseName)
    }

    const allDbs = await cloudant.db.list()

    if (!allDbs.includes(databaseName)) {
      await cloudant.db.create(databaseName)
    }

    const retryUntilWritten = (doc) => {
      const db = cloudant.use(databaseName)
      return db.get(doc._id).then((origDoc) => {
        doc._rev = origDoc._rev
        return db.insert(doc)
          .then(() => res.send({ msg: 'Updated', data: doc }))
      }).catch((err) => {
        if (err.status === 409) {
          return retryUntilWritten(doc)
        } else { // new doc
          return db.insert(doc)
            .then(() => res.send({ msg: 'Create', data: doc }))
        }
      })
    }

    retryUntilWritten(putData)
  })

  app.get('/replicate/:replicate/:dbname', (req, res) => {
    const newDbName = req.params.replicate // new db name
    const existingDatabase = req.params.dbname // copy data from
    cloudant.db.use(existingDatabase).list({ include_docs: true, descending: true }).then((data) => {
      if (data.rows.length === 0) {
        return res.status(200).send()
      }
      cloudant.db.create(newDbName).then(async () => {
        const allData = data.rows.map(v => v.doc)
        await cloudant.db.use(newDbName).insert({ docs: allData })
        res.send('Replicated')
      })
    }).catch(err => res.status(400).send({ msg: 'Error on replication', data: err }))
  })

  app.delete('/delete/:dbName', (req, res) => {
    const dbName = req.params.dbName
    cloudant.db.destroy(dbName).then(() => {
      res.send({ msg: 'ok', data: dbName })
    }).catch((err) => res.status(400).send({ msg: 'error', data: err }))
  })

  app.delete('/clearAll', async (req, res) => {
    cloudant.db.list()
      .then((result) => {
        result.forEach(dbName => cloudant.db.destroy(dbName))
        res.send([])
      })
      .catch(err => res.status(500).send(`Error on clearAll ${err}`))
  })

  // get all documents for wargame
  app.get('/:wargame', async (req, res) => {
    const databaseName = req.params.wargame

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    const allDbs = await cloudant.db.list()

    if (!allDbs.includes(databaseName)) {
      await cloudant.db.create(databaseName)
    }

    const db = cloudant.db.use(databaseName)

    db.list({ include_docs: true, attachments: true }).then(result => {
      const messagesList = result.rows.reduce((messages, { doc }) => {
        const isNotSystem = doc._id !== localSettings
        if (doc.messageType !== COUNTER_MESSAGE && isNotSystem) messages.push(doc)
        return messages
      }, [])
      res.send({ msg: 'ok', data: messagesList })
    }).catch(() => res.send([]))
  })

  // get document for wargame
  app.get('/:wargame/:id/:idp2', async (req, res) => {
    const databaseName = req.params.wargame
    const db = cloudant.db.use(databaseName)
    let id = `${req.params.id}`

    if (req.params.idp2) {
      id += '/' + req.params.idp2
    }

    if (!id || !databaseName) {
      res.status(404).send({ msg: 'Wrong Id or Wargame', data: null })
    }

    db.get(id)
      .then(data => res.send({ msg: 'ok', data: data || [] }))
      .catch(() => res.send([]))
  })
}

module.exports = ibmDb
