import reducer from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'

import { actionSetWargameMessages } from '@serge/mocks'
import { setWargameMessages } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import setAllMessagesData from './data/set_all_messages.json'
import { PlayerUi } from '@serge/custom-types'

const playerUi: PlayerUi = {
  "isGameControl": true,
  "isRFIManager": false,
  "rfiMessages": [],
  "nextMsgReference": 0,
  "selectedForce": {
    "name": "Blue",
    "uniqid": "force-k16fdykj",
    "overview": "An overview written here..",
    "roles": [
      {
        "name": "CO",
        "password": "pk16fdykk",
        "isGameControl":false,
        "isObserver": false,
        "isInsightViewer": false
      },
      {
        "name": "Comms",
        "password": "pk16ffhn3",
        "isObserver": false,
        "isInsightViewer": false,
        "isGameControl":false
      }
    ],
    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
    "color": "#3dd0ff",
    "umpire": false,
    "dirty": false
  },
  "selectedRole": "CO",
  "isObserver": false,
  "canSubmitPlans": false,
  "currentTurn": 57,
  "phase": "adjudication",
  "gameDate": "2019-10-29T02:02",
  "gameTurnTime": 43200000,
  "realtimeTurnTime": 300000,
  "turnEndTime": "",
  "adjudicationStartTime": "2020-09-30T09:17:56+07:00",
  "gameDescription": "",
  "currentWargame": "wargame-k16fadm4",
  "wargameTitle": "Monday",
  "chatChannel": {
    "name": "game-admin",
    "template": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "format": "textarea",
          "options": {
            "inputAttributes": {
              "placeholder": "type the text"
            }
          }
        }
      },
      "title": "Chat",
      "format": "grid"
    },
    "messages": []
  },
  "channels": {},
  "allChannels": [
    {
      "name": "Blue Chat",
      "uniqid": "channel-k16fgs63",
      "participants": [
        {
          "force": "Blue",
          "forceUniqid": "force-k16fdykj",
          "roles": [],
          "templates": [
            {
              "label": "Chat",
              "value": {
                "lastUpdated": "2019-09-30T12:37:26.705Z",
                "title": "Chat",
                "details": {
                  "type": "object",
                  "properties": {
                    "content": {
                      "type": "string",
                      "format": "textarea",
                      "options": {
                        "inputAttributes": {
                          "placeholder": "type the text"
                        }
                      }
                    }
                  },
                  "title": "Chat",
                  "format": "grid"
                },
                "completed": false,
                "_id": "k16eedkl",
                "_rev": "1-09ab7a18ff677cec5d9a56f02a45788d"
              }
            }
          ],
          "icon": "http://localhost:8080/default_img/forceDefault.png",
          "subscriptionId": "k16fh4xo"
        }
      ]
    },
    {
      "name": "Blue HQ",
      "uniqid": "channel-k16fheej",
      "participants": [
        {
          "force": "Blue",
          "forceUniqid": "force-k16fdykj",
          "roles": [],
          "templates": [
            {
              "label": "PG19 Weekly Orders",
              "value": {
                "lastUpdated": "2019-09-30T12:37:26.705Z",
                "title": "PG19 Weekly Orders",
                "details": {
                  "type": "object",
                  "properties": {
                    "CommandersIntent": {
                      "title": "Commanders Intent",
                      "type": "string",
                      "format": "textarea"
                    },
                    "Orders": {
                      "items": {
                        "properties": {
                          "Unit": {
                            "title": "Unit",
                            "type": "string",
                            "format": "text"
                          },
                          "Orders": {
                            "title": "Orders",
                            "type": "string",
                            "format": "textarea"
                          },
                          "ContingencyOrders": {
                            "title": "Contingency Orders",
                            "type": "string",
                            "format": "textarea"
                          }
                        },
                        "type": "object"
                      },
                      "title": "Orders",
                      "type": "array",
                      "format": "table",
                      "minItems": 1
                    },
                    "PxTasking": {
                      "title": "Px Tasking",
                      "type": "string",
                      "format": "textarea"
                    },
                    "AlliedUnitTasking": {
                      "title": "Allied Unit Tasking",
                      "type": "string",
                      "format": "textarea"
                    },
                    "ForceActionOnContact": {
                      "title": "Force action on contact",
                      "type": "string",
                      "format": "textarea"
                    },
                    "ForceActionOnLossOfContact": {
                      "title": "Force action on loss of contact",
                      "type": "string",
                      "format": "textarea"
                    },
                    "SupportingLogisticsActivity": {
                      "title": "Supporting logistics activity",
                      "type": "string",
                      "format": "textarea"
                    }
                  },
                  "title": "PG19 Weekly Orders",
                  "required": [
                    "CommandersIntent",
                    "Orders",
                    "PxTasking",
                    "AlliedUnitTasking",
                    "ForceActionOnContact",
                    "ForceActionOnLossOfContact",
                    "SupportingLogisticsActivity"
                  ]
                },
                "completed": false,
                "_id": "k16eedko",
                "_rev": "1-9682b67e15ded61bd4f8d863179d5c04"
              }
            }
          ],
          "icon": "http://localhost:8080/default_img/forceDefault.png",
          "subscriptionId": "k16fhq4b"
        },
        {
          "force": "White",
          "forceUniqid": "umpire",
          "roles": [
            {
              "name": "Game Control",
              isGameControl: true,
              isObserver: true,
              isInsightViewer: true,
              isRFIManager: true,
              password: 'test'
            }
          ],
          "templates": [
            {
              "label": "Chat",
              "value": {
                "lastUpdated": "2019-09-30T12:37:26.705Z",
                "title": "Chat",
                "details": {
                  "type": "object",
                  "properties": {
                    "content": {
                      "type": "string",
                      "format": "textarea",
                      "options": {
                        "inputAttributes": {
                          "placeholder": "type the text"
                        }
                      }
                    }
                  },
                  "title": "Chat",
                  "format": "grid"
                },
                "completed": false,
                "_id": "k16eedkl",
                "_rev": "1-09ab7a18ff677cec5d9a56f02a45788d"
              }
            }
          ],
          "icon": "http://localhost:8080/default_img/umpireDefault.png",
          "subscriptionId": "k16fhy24"
        }
      ]
    },
    {
      "name": "Mapping",
      "uniqid": "channel-k4cnw3nr",
      "participants": [
        {
          "force": "White",
          "forceUniqid": "umpire",
          "roles": [],
          "templates": [],
          "icon": "http://localhost:8080/default_img/umpireDefault.png",
          "subscriptionId": "k4cnwg1q"
        },
        {
          "force": "Blue",
          "forceUniqid": "force-k16fdykj",
          "roles": [],
          "templates": [],
          "icon": "http://localhost:8080/default_img/forceDefault.png",
          "subscriptionId": "k4cnwjfx"
        }
      ]
    }
  ],
  "allForces": [
    {
      "name": "White",
      "uniqid": "umpire",
      "overview": "Umpire force.",
      "roles": [
        {
          "name": "Game Control",
          "password": "pk16fa8oa",
          "isGameControl":true,
          "isObserver": true,
          "isInsightViewer": true,
          "isRFIManager": true
        }
      ],
      "iconURL": "http://localhost:8080/default_img/umpireDefault.png",
      "color": "#FCFBEE",
      "umpire": true,
      "dirty": false
    },
    {
      "name": "Blue",
      "uniqid": "force-k16fdykj",
      "overview": "An overview written here..",
      "roles": [
        {
          "name": "CO",
          "password": "pk16fdykk",
          "isGameControl":false,
          "isObserver": false,
          "isInsightViewer": false
        },
        {
          "name": "Comms",
          "password": "pk16ffhn3",
          "isObserver": false,
          "isInsightViewer": false,
          "isGameControl":false
        }
      ],
      "iconURL": "http://localhost:8080/default_img/forceDefault.png",
      "color": "#3dd0ff",
      "umpire": false,
      "dirty": false
    }
  ],
  "allTemplates": [
    {
      "completed": false,
      "details": {
        "properties": {
          "Forces": {
            "format": "table",
            "items": {
              "minItems": 1,
              "properties": {
                "assets": {
                  "format": "table",
                  "items": {
                    "properties": {
                      "location": {
                        "maxLength": 3,
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "visibleTo": {
                        "format": "table",
                        "items": {
                          "properties": {
                            "Force": {
                              "enum": [
                                "Blue",
                                "Red",
                                "Green"
                              ],
                              "type": "string"
                            }
                          }
                        },
                        "type": "array"
                      }
                    }
                  },
                  "minItems": 1,
                  "type": "array"
                },
                "force": {
                  "enum": [
                    "Blue",
                    "Red",
                    "Green"
                  ],
                  "propertyOrder": 100,
                  "type": "string"
                }
              }
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "title": "State of World (laydown 2)",
        "type": "object"
      },
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "State of World L",
      "_id": "k16eedkp",
      "_rev": "1-612d7dc5d10fc81bc7459b2801c66816"
    },
    {
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "Daily intentions",
      "details": {
        "type": "object",
        "properties": {
          "TurnNumber": {
            "title": "Turn",
            "type": "string",
            "format": "number"
          },
          "OverallIntentions": {
            "title": "Overall intentions",
            "type": "string",
            "format": "textarea"
          },
          "Orders": {
            "items": {
              "properties": {
                "Unit": {
                  "title": "Unit",
                  "type": "string",
                  "format": "text"
                },
                "Tasking": {
                  "title": "Tasking",
                  "type": "string",
                  "format": "textarea"
                },
                "SearchPolicy": {
                  "title": "Search Policy",
                  "type": "string",
                  "format": "textarea"
                },
                "ActionOnContact": {
                  "title": "Action on Contact",
                  "type": "string",
                  "enum": [
                    "Ignore",
                    "Evade",
                    "Covert Trail",
                    "Overt Trail",
                    "Harass"
                  ]
                },
                "AnyOtherComments": {
                  "title": "Any other comments",
                  "type": "string",
                  "format": "textarea"
                }
              },
              "type": "object"
            },
            "title": "Orders",
            "type": "array",
            "format": "table",
            "minItems": 1
          }
        },
        "title": "Daily Intent",
        "required": [
          "OverallIntentions",
          "Orders"
        ]
      },
      "completed": false,
      "_id": "k16eedkn",
      "_rev": "1-cc8e8cdb01447959c266761066448382"
    },
    {
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "Link",
      "details": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "format": "text"
          },
          "URL": {
            "type": "string",
            "format": "url"
          }
        },
        "title": "Link",
        "format": "grid"
      },
      "completed": false,
      "_id": "k16eedkm",
      "_rev": "1-7fa1e6dd6b4ac5b6afc45b596ee7af61"
    },
    {
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "Chat",
      "details": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string",
            "format": "textarea",
            "options": {
              "inputAttributes": {
                "placeholder": "type the text"
              }
            }
          }
        },
        "title": "Chat",
        "format": "grid"
      },
      "completed": false,
      "_id": "k16eedkl",
      "_rev": "1-09ab7a18ff677cec5d9a56f02a45788d"
    },
    {
      "completed": false,
      "details": {
        "properties": {
          "Assets": {
            "format": "table",
            "items": {
              "properties": {
                "Name": {
                  "propertyOrder": 100,
                  "type": "string"
                },
                "Route": {
                  "format": "table",
                  "items": {
                    "properties": {
                      "Location": {
                        "maxLength": 3,
                        "type": "string"
                      }
                    }
                  },
                  "minItems": 1,
                  "propertyOrder": 400,
                  "type": "array"
                },
                "Speed": {
                  "propertyOrder": 300,
                  "type": "number"
                },
                "State": {
                  "propertyOrder": 200,
                  "type": "string"
                }
              }
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "title": "Orders (m2c)",
        "type": "object"
      },
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "Orders (M2)",
      "_id": "k16eedkk",
      "_rev": "1-4c3969d57f8cf470858dd1819ee5c2e8"
    },
    {
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "Request for Information",
      "details": {
        "type": "object",
        "properties": {
          "Addressee": {
            "type": "string"
          },
          "Request": {
            "type": "string",
            "format": "textarea"
          }
        },
        "title": "Request for Information",
        "format": "grid"
      },
      "completed": false,
      "_id": "k16eedkj",
      "_rev": "1-683379b9418a2ba688eb4a8dfec4de11"
    },
    {
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "Message",
      "details": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "content": {
            "type": "string",
            "format": "textarea"
          }
        },
        "title": "Message",
        "format": "grid"
      },
      "completed": false,
      "_id": "k16eedki",
      "_rev": "1-7de33e447b392eeaf7164f4ec331bc57"
    },
    {
      "lastUpdated": "2019-09-30T12:37:26.705Z",
      "title": "Weather forecast",
      "details": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title"
          },
          "Location": {
            "type": "object",
            "properties": {
              "Lat": {
                "type": "number"
              },
              "Lat Hemi": {
                "type": "string",
                "enum": [
                  "N",
                  "S"
                ]
              },
              "Long": {
                "type": "number"
              },
              "Long Hemi": {
                "type": "string",
                "enum": [
                  "E",
                  "W"
                ]
              }
            },
            "format": "grid"
          },
          "Valid from": {
            "type": "string",
            "format": "datetime-local",
            "options": {
              "flatpickr": {
                "wrap": true,
                "time_24hr": true,
                "allowInput": true
              }
            }
          },
          "Valid until": {
            "type": "string",
            "format": "datetime-local",
            "options": {
              "flatpickr": {
                "wrap": true,
                "time_24hr": true,
                "allowInput": true
              }
            }
          },
          "Forecast": {
            "type": "string",
            "format": "textarea"
          }
        },
        "title": "Weather Forecast"
      },
      "completed": false,
      "_id": "k16eedkh",
      "_rev": "1-f332e0104a371b590346b66dc8e9fa2b"
    },
    {
      "lastUpdated": "2019-09-30T12:37:26.704Z",
      "title": "Machinery failure",
      "details": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "Title": "Title"
          },
          "Date": {
            "type": "string",
            "format": "datetime-local",
            "options": {
              "flatpickr": {
                "wrap": true,
                "time_24hr": true,
                "allowInput": true
              }
            }
          },
          "Status": {
            "type": "string",
            "enum": [
              "Minor",
              "Major",
              "Critical"
            ]
          },
          "Description": {
            "type": "string",
            "format": "textarea"
          }
        },
        "title": "Machinery Failure"
      },
      "completed": false,
      "_id": "k16eedkg",
      "_rev": "1-80fc0c1feca8eb6d812d3fa2068ffe89"
    },
    {
      "completed": false,
      "details": {
        "properties": {
          "Forces": {
            "format": "table",
            "items": {
              "minItems": 1,
              "properties": {
                "assets": {
                  "format": "table",
                  "items": {
                    "properties": {
                      "history": {
                        "format": "table",
                        "items": {
                          "properties": {
                            "Route": {
                              "format": "table",
                              "items": {
                                "properties": {
                                  "Location": {
                                    "maxLength": 3,
                                    "type": "string"
                                  }
                                }
                              },
                              "minItems": 1,
                              "propertyOrder": 400,
                              "type": "array"
                            },
                            "Speed": {
                              "propertyOrder": 300,
                              "type": "number"
                            },
                            "State": {
                              "propertyOrder": 200,
                              "type": "string"
                            },
                            "Turn": {
                              "propertyOrder": 100,
                              "type": "string"
                            }
                          }
                        },
                        "minItems": 1,
                        "type": "array"
                      },
                      "name": {
                        "propertyOrder": 100,
                        "type": "string"
                      },
                      "planned": {
                        "format": "table",
                        "items": {
                          "properties": {
                            "Route": {
                              "format": "table",
                              "items": {
                                "properties": {
                                  "Location": {
                                    "maxLength": 3,
                                    "type": "string"
                                  }
                                }
                              },
                              "minItems": 1,
                              "propertyOrder": 400,
                              "type": "array"
                            },
                            "Speed": {
                              "propertyOrder": 300,
                              "type": "number"
                            },
                            "State": {
                              "propertyOrder": 200,
                              "type": "string"
                            },
                            "Turn": {
                              "propertyOrder": 100,
                              "type": "string"
                            }
                          }
                        },
                        "minItems": 1,
                        "propertyOrder": 2000,
                        "type": "array"
                      },
                      "visibleTo": {
                        "format": "table",
                        "items": {
                          "properties": {
                            "Force": {
                              "enum": [
                                "Blue",
                                "Red",
                                "Green"
                              ],
                              "type": "string"
                            }
                          }
                        },
                        "propertyOrder": 300,
                        "type": "array"
                      }
                    }
                  },
                  "minItems": 1,
                  "type": "array"
                },
                "force": {
                  "enum": [
                    "Blue",
                    "Red",
                    "Green"
                  ],
                  "propertyOrder": 100,
                  "type": "string"
                }
              }
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "title": "State of World (Full 2)",
        "type": "object"
      },
      "lastUpdated": "2019-12-20T15:57:11.519Z",
      "title": "State of world (full 2)",
      "_id": "2019-12-20T15:57:11.519Z",
      "_rev": "1-4bd7b0b5488182f39f10d5203bb1fad8"
    },
    {
      "completed": false,
      "details": {
        "properties": {
          "Initial Locations": {
            "format": "table",
            "items": {
              "properties": {
                "location": {
                  "maxLength": 3,
                  "type": "string"
                },
                "name": {
                  "propertyOrder": 100,
                  "type": "string"
                }
              },
              "type": "object"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "title": "laydown",
        "type": "object"
      },
      "lastUpdated": "2019-12-20T14:28:22.999Z",
      "title": "Laydown",
      "_id": "2019-12-20T14:28:22.999Z",
      "_rev": "1-741dde8c87e0a0fcbe335c234b1619a3"
    }
  ],
  "allPlatformTypes": [],
  "showObjective": false,
  "wargameInitiated": true,
  "feedbackMessages": [],
  "tourIsOpen": false,
  "showAccessCodes": true,
  "isInsightViewer": false,
  "timeWarning": 60000
}

describe('PlayerUi Message Actions', () => {
  it('Should set all messages gained from db to state', () => {
    expect(setWargameMessages(actionSetWargameMessages.payload)).toEqual(actionSetWargameMessages)
  })
})

describe('PlayerUi Message Reducers', () => {
  it('Should convert and set SET_ALL_MESSAGES gained from db to state', () => {

    expect(reducer(playerUi, actionSetWargameMessages))
      .toEqual({
        ...playerUi,
        chatChannel: {
          ...playerUi.chatChannel,
          messages: setAllMessagesData.newState.chatChannel.messages
        },
        channels: setAllMessagesData.newState.channels
      })
  })
})
