import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as ActionConstants from '@serge/config'
import { createMessageExportItem } from '../../../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators'
import { exportItems } from '../../../ActionsAndReducers/ExportItems/ExportItems_Reducer'
import { expect, describe, it } from '@jest/globals'
import { ADJUDICATION_PHASE } from '@serge/config'

const mockStore = configureStore([thunk])
// wargame backup

const wargame = {
  name: '',
  phase: ADJUDICATION_PHASE,
  gameTurn: 1,
  isLoading: false,
  wargameList: [
    {
      name: 'https://serge-dev.herokuapp.com/db/wargame-k26c53lc'
    },
    {
      name: 'https://serge-dev.herokuapp.com/db/wargame-k16fadm4',
      title: 'Monday',
      initiated: true
    }
  ],
  currentWargame: 'wargame-k16fadm4',
  exportMessagelist: [
    {
      details: {
        channel: 'Blue Chat',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          role: 'Comms',
          icon: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:47:38.806Z',
        gameTurn: 2
      },
      message: {
        content: 'Last message. turn 2 started!'
      },
      _id: '2019-12-04T10:47:38.810Z',
      _rev: '1-df67bb8710ba37127a5b9a1fb0f7b10d'
    },
    {
      details: {
        channel: 'Blue HQ',
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          role: 'Game Control',
          icon: 'http://localhost:8080/default_img/umpireDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:46:44.588Z',
        privateMessage: '',
        gameTurn: 2
      },
      message: {
        content: 'Already ended * ^__^'
      },
      _id: '2019-12-04T10:46:44.589Z',
      _rev: '1-3b7a6f950ff8f669bc20e5e3fe851b3e'
    },
    {
      details: {
        channel: 'Blue HQ',
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          role: 'Game Control',
          icon: 'http://localhost:8080/default_img/umpireDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:46:13.211Z',
        privateMessage: '',
        gameTurn: 2
      },
      message: {
        content: 'I am going to end turn'
      },
      _id: '2019-12-04T10:46:13.213Z',
      _rev: '1-abe31adf1e6fcfd150439be0c35be96e'
    },
    {
      infoType: true,
      name: 'wargame-k16fadm4',
      wargameTitle: 'Monday',
      data: {
        overview: {
          name: 'Overview - settings',
          gameDescription: '',
          gameTurnTime: { unit: 'millis', millis: 432000 },
          realtimeTurnTime: 300000,
          timeWarning: 60000,
          gameDate: '2019-10-01T14:02',
          showAccessCodes: true,
          dirty: false
        },
        forces: {
          name: 'Forces',
          forces: [
            {
              name: 'White',
              uniqid: 'umpire',
              overview: 'Umpire force.',
              roles: [
                {
                  name: 'Game Control',
                  isGameControl: true,
                  isObserver: true,
                  isInsightViewer: true,
                  isRFIManager: true
                }
              ],
              icon: 'http://localhost:8080/default_img/umpireDefault.png',
              color: '#FCFBEE',
              umpire: true,
              dirty: false
            },
            {
              name: 'Blue',
              uniqid: 'force-k16fdykj',
              overview: 'An overview written here..',
              roles: [
                {
                  name: 'CO',
                  isGameControl: false,
                  isObserver: false,
                  isInsightViewer: false
                },
                {
                  name: 'Comms',
                  isObserver: false,
                  isInsightViewer: false,
                  isGameControl: false
                }
              ],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              color: '#3dd0ff',
              umpire: false,
              dirty: false
            }
          ],
          selectedForce: '',
          dirty: false
        },
        channels: {
          name: 'Channels',
          channels: [
            {
              name: 'Blue Chat',
              uniqid: 'channel-k16fgs63',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fh4xo'
                }
              ]
            },
            {
              name: 'Blue HQ',
              uniqid: 'channel-k16fheej',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [
                    {
                      value: 'CO',
                      label: 'CO'
                    }
                  ],
                  templates: [
                    {
                      label: 'PG19 Weekly Orders',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'PG19 Weekly Orders',
                        details: {
                          type: 'object',
                          properties: {
                            CommandersIntent: {
                              title: 'Commanders Intent',
                              type: 'string',
                              format: 'textarea'
                            },
                            Orders: {
                              items: {
                                properties: {
                                  Unit: {
                                    title: 'Unit',
                                    type: 'string',
                                    format: 'text'
                                  },
                                  Orders: {
                                    title: 'Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  },
                                  ContingencyOrders: {
                                    title: 'Contingency Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  }
                                },
                                type: 'object'
                              },
                              title: 'Orders',
                              type: 'array',
                              format: 'table',
                              minItems: 1
                            },
                            PxTasking: {
                              title: 'Px Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            AlliedUnitTasking: {
                              title: 'Allied Unit Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnContact: {
                              title: 'Force action on contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnLossOfContact: {
                              title: 'Force action on loss of contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            SupportingLogisticsActivity: {
                              title: 'Supporting logistics activity',
                              type: 'string',
                              format: 'textarea'
                            }
                          },
                          title: 'PG19 Weekly Orders',
                          required: [
                            'CommandersIntent',
                            'Orders',
                            'PxTasking',
                            'AlliedUnitTasking',
                            'ForceActionOnContact',
                            'ForceActionOnLossOfContact',
                            'SupportingLogisticsActivity'
                          ]
                        },
                        completed: false,
                        _id: 'k16eedko',
                        _rev: '1-9682b67e15ded61bd4f8d863179d5c04'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fhq4b'
                },
                {
                  force: 'White',
                  forceUniqid: 'umpire',
                  roles: [
                    {
                      value: 'Game Control',
                      label: 'Game Control'
                    }
                  ],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/umpireDefault.png',
                  subscriptionId: 'k16fhy24'
                }
              ]
            }
          ],
          selectedChannel: '',
          dirty: false
        }
      },
      gameTurn: 2,
      phase: 'planning',
      adjudicationStartTime: '2019-09-30T14:13:22+01:00',
      turnEndTime: '2019-12-04T14:50:53+04:00',
      wargameInitiated: true,
      _id: '2019-12-04T10:45:53.372Z',
      _rev: '1-d9be52d84ce91822d65b29db07798a55'
    },
    {
      details: {
        channel: 'Blue HQ',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          role: 'CO',
          icon: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'PG19 Weekly Orders',
        timestamp: '2019-12-04T10:44:55.754Z',
        gameTurn: 1
      },
      message: {
        CommandersIntent: 'Test message Commanders Intent',
        Orders: [
          {
            Unit: 'Unit 1',
            Orders: 'First order',
            ContingencyOrders: ''
          }
        ],
        PxTasking: 'Tasking',
        AlliedUnitTasking: 'unit tasking',
        ForceActionOnContact: '',
        ForceActionOnLossOfContact: '',
        SupportingLogisticsActivity: ''
      },
      _id: '2019-12-04T10:44:55.754Z',
      _rev: '1-5aac5f7ed2d08b2844cfd8a62bedf66d'
    },
    {
      details: {
        channel: 'Blue Chat',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          role: 'CO',
          icon: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:44:11.017Z',
        gameTurn: 1
      },
      message: {
        content: 'Test message (chat) 2'
      },
      _id: '2019-12-04T10:44:11.017Z',
      _rev: '1-70a3539a935743ba03e2b6181877c9ae'
    },
    {
      details: {
        channel: 'Blue Chat',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          role: 'CO',
          icon: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:43:57.065Z',
        gameTurn: 1
      },
      message: {
        content: 'Test message (chat) 1'
      },
      _id: '2019-12-04T10:43:57.067Z',
      _rev: '1-7903abe9663e43b0c2bdf292d2abe1d6'
    },
    {
      infoType: true,
      name: 'wargame-k16fadm4',
      wargameTitle: 'Monday',
      data: {
        overview: {
          name: 'Overview - settings',
          gameDescription: '',
          gameTurnTime: { unit: 'millis', millis: 43200 },
          realtimeTurnTime: 300000,
          timeWarning: 60000,
          gameDate: '2019-10-01T02:02',
          showAccessCodes: true,
          dirty: false
        },
        forces: {
          name: 'Forces',
          forces: [
            {
              name: 'White',
              uniqid: 'umpire',
              overview: 'Umpire force.',
              roles: [
                {
                  name: 'Game Control',
                  isGameControl: true,
                  isObserver: true,
                  isInsightViewer: true,
                  isRFIManager: true
                }
              ],
              icon: 'http://localhost:8080/default_img/umpireDefault.png',
              color: '#FCFBEE',
              umpire: true,
              dirty: false
            },
            {
              name: 'Blue',
              uniqid: 'force-k16fdykj',
              overview: 'An overview written here..',
              roles: [
                {
                  name: 'CO',
                  isGameControl: false,
                  isObserver: false,
                  isInsightViewer: false
                },
                {
                  name: 'Comms',
                  isObserver: false,
                  isInsightViewer: false,
                  isGameControl: false
                }
              ],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              color: '#3dd0ff',
              umpire: false,
              dirty: false
            }
          ],
          selectedForce: '',
          dirty: false
        },
        channels: {
          name: 'Channels',
          channels: [
            {
              name: 'Blue Chat',
              uniqid: 'channel-k16fgs63',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fh4xo'
                }
              ]
            },
            {
              name: 'Blue HQ',
              uniqid: 'channel-k16fheej',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [
                    {
                      value: 'CO',
                      label: 'CO'
                    }
                  ],
                  templates: [
                    {
                      label: 'PG19 Weekly Orders',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'PG19 Weekly Orders',
                        details: {
                          type: 'object',
                          properties: {
                            CommandersIntent: {
                              title: 'Commanders Intent',
                              type: 'string',
                              format: 'textarea'
                            },
                            Orders: {
                              items: {
                                properties: {
                                  Unit: {
                                    title: 'Unit',
                                    type: 'string',
                                    format: 'text'
                                  },
                                  Orders: {
                                    title: 'Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  },
                                  ContingencyOrders: {
                                    title: 'Contingency Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  }
                                },
                                type: 'object'
                              },
                              title: 'Orders',
                              type: 'array',
                              format: 'table',
                              minItems: 1
                            },
                            PxTasking: {
                              title: 'Px Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            AlliedUnitTasking: {
                              title: 'Allied Unit Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnContact: {
                              title: 'Force action on contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnLossOfContact: {
                              title: 'Force action on loss of contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            SupportingLogisticsActivity: {
                              title: 'Supporting logistics activity',
                              type: 'string',
                              format: 'textarea'
                            }
                          },
                          title: 'PG19 Weekly Orders',
                          required: [
                            'CommandersIntent',
                            'Orders',
                            'PxTasking',
                            'AlliedUnitTasking',
                            'ForceActionOnContact',
                            'ForceActionOnLossOfContact',
                            'SupportingLogisticsActivity'
                          ]
                        },
                        completed: false,
                        _id: 'k16eedko',
                        _rev: '1-9682b67e15ded61bd4f8d863179d5c04'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fhq4b'
                },
                {
                  force: 'White',
                  forceUniqid: 'umpire',
                  roles: [
                    {
                      value: 'Game Control',
                      label: 'Game Control'
                    }
                  ],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/umpireDefault.png',
                  subscriptionId: 'k16fhy24'
                }
              ]
            }
          ],
          selectedChannel: '',
          dirty: false
        }
      },
      gameTurn: 1,
      phase: 'adjudication',
      adjudicationStartTime: '2019-09-30T14:13:22+01:00',
      turnEndTime: 0,
      wargameInitiated: true,
      _id: '2019-09-30T13:13:22.683Z',
      _rev: '1-871bf770d3a6a827e71b457bf763bb55'
    },
    {
      infoType: true,
      name: 'wargame-k16fadm4',
      wargameTitle: 'Monday',
      data: {
        overview: {
          name: 'Overview - settings',
          gameDescription: '',
          gameTurnTime: { unit: 'millis', millis: 432000 },
          realtimeTurnTime: 300000,
          timeWarning: 60000,
          gameDate: '2019-10-01T02:02',
          showAccessCodes: true,
          dirty: false
        },
        forces: {
          name: 'Forces',
          forces: [
            {
              name: 'White',
              uniqid: 'umpire',
              overview: 'Umpire force.',
              roles: [
                {
                  name: 'Game Control',
                  isGameControl: true,
                  isObserver: true,
                  isInsightViewer: true,
                  isRFIManager: true
                }
              ],
              icon: 'http://localhost:8080/default_img/umpireDefault.png',
              color: '#FCFBEE',
              umpire: true,
              dirty: false
            },
            {
              name: 'Blue',
              uniqid: 'force-k16fdykj',
              overview: 'An overview written here..',
              roles: [
                {
                  name: 'CO',
                  isGameControl: false,
                  isObserver: false,
                  isInsightViewer: false
                },
                {
                  name: 'Comms',
                  isObserver: false,
                  isInsightViewer: false,
                  isGameControl: false
                }
              ],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              color: '#3dd0ff',
              umpire: false,
              dirty: false
            }
          ],
          selectedForce: '',
          dirty: false
        },
        channels: {
          name: 'Channels',
          channels: [
            {
              name: 'Blue Chat',
              uniqid: 'channel-k16fgs63',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fh4xo'
                }
              ]
            },
            {
              name: 'Blue HQ',
              uniqid: 'channel-k16fheej',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [
                    {
                      value: 'CO',
                      label: 'CO'
                    }
                  ],
                  templates: [
                    {
                      label: 'PG19 Weekly Orders',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'PG19 Weekly Orders',
                        details: {
                          type: 'object',
                          properties: {
                            CommandersIntent: {
                              title: 'Commanders Intent',
                              type: 'string',
                              format: 'textarea'
                            },
                            Orders: {
                              items: {
                                properties: {
                                  Unit: {
                                    title: 'Unit',
                                    type: 'string',
                                    format: 'text'
                                  },
                                  Orders: {
                                    title: 'Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  },
                                  ContingencyOrders: {
                                    title: 'Contingency Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  }
                                },
                                type: 'object'
                              },
                              title: 'Orders',
                              type: 'array',
                              format: 'table',
                              minItems: 1
                            },
                            PxTasking: {
                              title: 'Px Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            AlliedUnitTasking: {
                              title: 'Allied Unit Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnContact: {
                              title: 'Force action on contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnLossOfContact: {
                              title: 'Force action on loss of contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            SupportingLogisticsActivity: {
                              title: 'Supporting logistics activity',
                              type: 'string',
                              format: 'textarea'
                            }
                          },
                          title: 'PG19 Weekly Orders',
                          required: [
                            'CommandersIntent',
                            'Orders',
                            'PxTasking',
                            'AlliedUnitTasking',
                            'ForceActionOnContact',
                            'ForceActionOnLossOfContact',
                            'SupportingLogisticsActivity'
                          ]
                        },
                        completed: false,
                        _id: 'k16eedko',
                        _rev: '1-9682b67e15ded61bd4f8d863179d5c04'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fhq4b'
                },
                {
                  force: 'White',
                  forceUniqid: 'umpire',
                  roles: [
                    {
                      value: 'Game Control',
                      label: 'Game Control'
                    }
                  ],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/umpireDefault.png',
                  subscriptionId: 'k16fhy24'
                }
              ]
            }
          ],
          selectedChannel: '',
          dirty: false
        }
      },
      gameTurn: 1,
      phase: 'planning',
      adjudicationStartTime: '2019-09-30T14:09:14+01:00',
      turnEndTime: '2019-09-30T14:18:13+01:00',
      wargameInitiated: true,
      _id: '2019-09-30T13:13:13.553Z',
      _rev: '1-363401124e46aec94c378af196ba4ce2'
    },
    {
      infoType: true,
      name: 'wargame-k16fadm4',
      wargameTitle: 'Monday',
      data: {
        overview: {
          name: 'Overview - settings',
          gameDescription: '',
          gameTurnTime: { unit: 'millis', millis: 432000 },
          realtimeTurnTime: 300000,
          timeWarning: 60000,
          gameDate: '2019-09-30T14:02:13+01:00',
          showAccessCodes: true,
          dirty: false
        },
        forces: {
          name: 'Forces',
          forces: [
            {
              name: 'White',
              uniqid: 'umpire',
              overview: 'Umpire force.',
              roles: [
                {
                  name: 'Game Control',
                  isGameControl: true,
                  isObserver: true,
                  isInsightViewer: true,
                  isRFIManager: true
                }
              ],
              icon: 'http://localhost:8080/default_img/umpireDefault.png',
              color: '#FCFBEE',
              umpire: true,
              dirty: false
            },
            {
              name: 'Blue',
              uniqid: 'force-k16fdykj',
              overview: 'An overview written here..',
              roles: [
                {
                  name: 'CO',
                  isGameControl: false,
                  isObserver: false,
                  isInsightViewer: false
                },
                {
                  name: 'Comms',
                  isObserver: false,
                  isInsightViewer: false,
                  isGameControl: false
                }
              ],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              color: '#3dd0ff',
              umpire: false,
              dirty: false
            }
          ],
          selectedForce: '',
          dirty: false
        },
        channels: {
          name: 'Channels',
          channels: [
            {
              name: 'Blue Chat',
              uniqid: 'channel-k16fgs63',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fh4xo'
                }
              ]
            },
            {
              name: 'Blue HQ',
              uniqid: 'channel-k16fheej',
              participants: [
                {
                  force: 'Blue',
                  forceUniqid: 'force-k16fdykj',
                  roles: [
                    {
                      value: 'CO',
                      label: 'CO'
                    }
                  ],
                  templates: [
                    {
                      label: 'PG19 Weekly Orders',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'PG19 Weekly Orders',
                        details: {
                          type: 'object',
                          properties: {
                            CommandersIntent: {
                              title: 'Commanders Intent',
                              type: 'string',
                              format: 'textarea'
                            },
                            Orders: {
                              items: {
                                properties: {
                                  Unit: {
                                    title: 'Unit',
                                    type: 'string',
                                    format: 'text'
                                  },
                                  Orders: {
                                    title: 'Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  },
                                  ContingencyOrders: {
                                    title: 'Contingency Orders',
                                    type: 'string',
                                    format: 'textarea'
                                  }
                                },
                                type: 'object'
                              },
                              title: 'Orders',
                              type: 'array',
                              format: 'table',
                              minItems: 1
                            },
                            PxTasking: {
                              title: 'Px Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            AlliedUnitTasking: {
                              title: 'Allied Unit Tasking',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnContact: {
                              title: 'Force action on contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            ForceActionOnLossOfContact: {
                              title: 'Force action on loss of contact',
                              type: 'string',
                              format: 'textarea'
                            },
                            SupportingLogisticsActivity: {
                              title: 'Supporting logistics activity',
                              type: 'string',
                              format: 'textarea'
                            }
                          },
                          title: 'PG19 Weekly Orders',
                          required: [
                            'CommandersIntent',
                            'Orders',
                            'PxTasking',
                            'AlliedUnitTasking',
                            'ForceActionOnContact',
                            'ForceActionOnLossOfContact',
                            'SupportingLogisticsActivity'
                          ]
                        },
                        completed: false,
                        _id: 'k16eedko',
                        _rev: '1-9682b67e15ded61bd4f8d863179d5c04'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/forceDefault.png',
                  subscriptionId: 'k16fhq4b'
                },
                {
                  force: 'White',
                  forceUniqid: 'umpire',
                  roles: [
                    {
                      value: 'Game Control',
                      label: 'Game Control'
                    }
                  ],
                  templates: [
                    {
                      label: 'Chat',
                      value: {
                        lastUpdated: '2019-09-30T12:37:26.705Z',
                        title: 'Chat',
                        details: {
                          type: 'object',
                          properties: {
                            content: {
                              type: 'string',
                              format: 'textarea',
                              options: {
                                inputAttributes: {
                                  placeholder: 'type the text'
                                }
                              }
                            }
                          },
                          title: 'Chat',
                          format: 'grid'
                        },
                        completed: false,
                        _id: 'k16eedkl',
                        _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                      }
                    }
                  ],
                  icon: 'http://localhost:8080/default_img/umpireDefault.png',
                  subscriptionId: 'k16fhy24'
                }
              ]
            }
          ],
          selectedChannel: '',
          dirty: false
        }
      },
      gameTurn: 0,
      phase: 'adjudication',
      adjudicationStartTime: '2019-09-30T14:09:14+01:00',
      turnEndTime: '2019-09-30T14:14:14+01:00',
      wargameInitiated: true,
      _id: '2019-09-30T13:09:14.446Z',
      _rev: '1-2a9e6a357535cd715ea84ca25de94b77'
    }
  ],
  wargameTitle: 'Monday',
  data: {
    overview: {
      name: 'Overview - settings',
      gameDescription: '',
      gameTurnTime: { unit: 'millis', millis: 43200 },
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      gameDate: '2019-10-01T14:02',
      showAccessCodes: true,
      dirty: false
    },
    forces: {
      name: 'Forces',
      forces: [
        {
          name: 'White',
          uniqid: 'umpire',
          overview: 'Umpire force.',
          roles: [
            {
              name: 'Game Control',
              isGameControl: true,
              isObserver: true,
              isInsightViewer: true,
              isRFIManager: true
            }
          ],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          color: '#FCFBEE',
          umpire: true,
          dirty: false
        },
        {
          name: 'Blue',
          uniqid: 'force-k16fdykj',
          overview: 'An overview written here..',
          roles: [
            {
              name: 'CO',
              isGameControl: false,
              isObserver: false,
              isInsightViewer: false
            },
            {
              name: 'Comms',
              isObserver: false,
              isInsightViewer: false,
              isGameControl: false
            }
          ],
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          color: '#3dd0ff',
          umpire: false,
          dirty: false
        }
      ],
      selectedForce: '',
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: [
        {
          name: 'Blue Chat',
          uniqid: 'channel-k16fgs63',
          participants: [
            {
              force: 'Blue',
              forceUniqid: 'force-k16fdykj',
              roles: [],
              templates: [
                {
                  label: 'Chat',
                  value: {
                    lastUpdated: '2019-09-30T12:37:26.705Z',
                    title: 'Chat',
                    details: {
                      type: 'object',
                      properties: {
                        content: {
                          type: 'string',
                          format: 'textarea',
                          options: {
                            inputAttributes: {
                              placeholder: 'type the text'
                            }
                          }
                        }
                      },
                      title: 'Chat',
                      format: 'grid'
                    },
                    completed: false,
                    _id: 'k16eedkl',
                    _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                  }
                }
              ],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              subscriptionId: 'k16fh4xo'
            }
          ]
        },
        {
          name: 'Blue HQ',
          uniqid: 'channel-k16fheej',
          participants: [
            {
              force: 'Blue',
              forceUniqid: 'force-k16fdykj',
              roles: [
                {
                  value: 'CO',
                  label: 'CO'
                }
              ],
              templates: [
                {
                  label: 'PG19 Weekly Orders',
                  value: {
                    lastUpdated: '2019-09-30T12:37:26.705Z',
                    title: 'PG19 Weekly Orders',
                    details: {
                      type: 'object',
                      properties: {
                        CommandersIntent: {
                          title: 'Commanders Intent',
                          type: 'string',
                          format: 'textarea'
                        },
                        Orders: {
                          items: {
                            properties: {
                              Unit: {
                                title: 'Unit',
                                type: 'string',
                                format: 'text'
                              },
                              Orders: {
                                title: 'Orders',
                                type: 'string',
                                format: 'textarea'
                              },
                              ContingencyOrders: {
                                title: 'Contingency Orders',
                                type: 'string',
                                format: 'textarea'
                              }
                            },
                            type: 'object'
                          },
                          title: 'Orders',
                          type: 'array',
                          format: 'table',
                          minItems: 1
                        },
                        PxTasking: {
                          title: 'Px Tasking',
                          type: 'string',
                          format: 'textarea'
                        },
                        AlliedUnitTasking: {
                          title: 'Allied Unit Tasking',
                          type: 'string',
                          format: 'textarea'
                        },
                        ForceActionOnContact: {
                          title: 'Force action on contact',
                          type: 'string',
                          format: 'textarea'
                        },
                        ForceActionOnLossOfContact: {
                          title: 'Force action on loss of contact',
                          type: 'string',
                          format: 'textarea'
                        },
                        SupportingLogisticsActivity: {
                          title: 'Supporting logistics activity',
                          type: 'string',
                          format: 'textarea'
                        }
                      },
                      title: 'PG19 Weekly Orders',
                      required: [
                        'CommandersIntent',
                        'Orders',
                        'PxTasking',
                        'AlliedUnitTasking',
                        'ForceActionOnContact',
                        'ForceActionOnLossOfContact',
                        'SupportingLogisticsActivity'
                      ]
                    },
                    completed: false,
                    _id: 'k16eedko',
                    _rev: '1-9682b67e15ded61bd4f8d863179d5c04'
                  }
                }
              ],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              subscriptionId: 'k16fhq4b'
            },
            {
              force: 'White',
              forceUniqid: 'umpire',
              roles: [
                {
                  value: 'Game Control',
                  label: 'Game Control'
                }
              ],
              templates: [
                {
                  label: 'Chat',
                  value: {
                    lastUpdated: '2019-09-30T12:37:26.705Z',
                    title: 'Chat',
                    details: {
                      type: 'object',
                      properties: {
                        content: {
                          type: 'string',
                          format: 'textarea',
                          options: {
                            inputAttributes: {
                              placeholder: 'type the text'
                            }
                          }
                        }
                      },
                      title: 'Chat',
                      format: 'grid'
                    },
                    completed: false,
                    _id: 'k16eedkl',
                    _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
                  }
                }
              ],
              icon: 'http://localhost:8080/default_img/umpireDefault.png',
              subscriptionId: 'k16fhy24'
            }
          ]
        }
      ],
      selectedChannel: '',
      dirty: false
    }
  },
  currentTab: 'overview',
  wargameInitiated: true,
  adminNotLoggedIn: false
}

const exportItem = [
  {
    type: 'messages',
    title: 'Export 2019-12-04 10:48:10',
    wargame: 'wargame-k16fadm4',
    data: []
  },
  {
    type: 'messages',
    title: 'Export 2019-12-04 10:51:31',
    wargame: 'wargame-k16fadm4',
    data: []
  },
  {
    type: 'messages',
    title: 'Export 2019-12-04 10:51:43',
    wargame: 'wargame-k16fadm4',
    data: [
      {
        title: 'Chat',
        items: [
          [
            'CHANNEL',
            'FORCE',
            'FORCECOLOR',
            'ROLE',
            'ICON',
            'MESSAGETYPE',
            'TIMESTAMP',
            'GAMETURN',
            'CONTENT',
            '_ID',
            '_REV',
            'PRIVATEMESSAGE'
          ],
          [
            'Blue Chat',
            'Blue',
            '#3dd0ff',
            'Comms',
            'http://localhost:8080/default_img/forceDefault.png',
            'Chat',
            '2019-12-04T10:47:38.806Z',
            2,
            'Last message. turn 2 started!',
            '2019-12-04T10:47:38.810Z',
            '1-df67bb8710ba37127a5b9a1fb0f7b10d'
          ],
          [
            'Blue HQ',
            'White',
            '#FCFBEE',
            'Game Control',
            'http://localhost:8080/default_img/umpireDefault.png',
            'Chat',
            '2019-12-04T10:46:44.588Z',
            2,
            'Already ended * ^__^',
            '2019-12-04T10:46:44.589Z',
            '1-3b7a6f950ff8f669bc20e5e3fe851b3e',
            ''
          ],
          [
            'Blue HQ',
            'White',
            '#FCFBEE',
            'Game Control',
            'http://localhost:8080/default_img/umpireDefault.png',
            'Chat',
            '2019-12-04T10:46:13.211Z',
            2,
            'I am going to end turn',
            '2019-12-04T10:46:13.213Z',
            '1-abe31adf1e6fcfd150439be0c35be96e',
            ''
          ],
          [
            'Blue Chat',
            'Blue',
            '#3dd0ff',
            'CO',
            'http://localhost:8080/default_img/forceDefault.png',
            'Chat',
            '2019-12-04T10:44:11.017Z',
            1,
            'Test message (chat) 2',
            '2019-12-04T10:44:11.017Z',
            '1-70a3539a935743ba03e2b6181877c9ae',
            ''
          ],
          [
            'Blue Chat',
            'Blue',
            '#3dd0ff',
            'CO',
            'http://localhost:8080/default_img/forceDefault.png',
            'Chat',
            '2019-12-04T10:43:57.065Z',
            1,
            'Test message (chat) 1',
            '2019-12-04T10:43:57.067Z',
            '1-7903abe9663e43b0c2bdf292d2abe1d6',
            ''
          ]
        ]
      },
      {
        title: 'PG19 Weekly Orders',
        items: [
          [
            'CHANNEL',
            'FORCE',
            'FORCECOLOR',
            'ROLE',
            'ICON',
            'MESSAGETYPE',
            'TIMESTAMP',
            'GAMETURN',
            'COMMANDERSINTENT',
            'ORDERS_0 UNIT',
            'ORDERS_0 ORDERS',
            'ORDERS_0 CONTINGENCYORDERS',
            'PXTASKING',
            'ALLIEDUNITTASKING',
            'FORCEACTIONONCONTACT',
            'FORCEACTIONONLOSSOFCONTACT',
            'SUPPORTINGLOGISTICSACTIVITY',
            '_ID',
            '_REV'
          ],
          [
            'Blue HQ',
            'Blue',
            '#3dd0ff',
            'CO',
            'http://localhost:8080/default_img/forceDefault.png',
            'PG19 Weekly Orders',
            '2019-12-04T10:44:55.754Z',
            1,
            'Test message Commanders Intent',
            'Unit 1',
            'First order',
            '',
            'Tasking',
            'unit tasking',
            '',
            '',
            '',
            '2019-12-04T10:44:55.754Z',
            '1-5aac5f7ed2d08b2844cfd8a62bedf66d'
          ]
        ]
      }
    ]
  }
]

describe('exportItems actions', () => {
  it('gets wargame and ActionConstant.CREATE_EXPORT_ITEM after successful mapping', async () => {
    const store = mockStore({})

    // @ts-ignore
    store.dispatch(createMessageExportItem(wargame))

    const [action] = store.getActions()

    // check type
    expect(action.type).toEqual(ActionConstants.CREATE_EXPORT_ITEM)
    // check payload object
    expect(typeof action.payload).toEqual('object')
    expect(typeof action.payload.type).toEqual('string')
    expect(typeof action.payload.title).toEqual('string')
    expect(typeof action.payload.wargame).toEqual('string')
    expect(Array.isArray(action.payload.data)).toBeTruthy()
    // if have items check items object props
    if (action.payload.data.length) {
      expect(action.payload.data.filter((tab: any) => (
        !tab.title || !Array.isArray(tab.items))
      ).length).toEqual(0)
    }
  })
})

describe('exportItems reducer', () => {
  it('should save export item data', () => {
    const exportItemAction = {
      type: ActionConstants.CREATE_EXPORT_ITEM,
      payload: exportItem
    }
    // @ts-ignore
    expect(exportItems({ data: [] }, exportItemAction)).toEqual({ data: [exportItem], loader: false })
  })
})
