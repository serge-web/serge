import { CHANNEL_CUSTOM, CHANNEL_MAPPING, PARTICIPANT_CUSTOM, PARTICIPANT_MAPPING } from '@serge/config'
import { PlayerUi } from '@serge/custom-types'

const testState: PlayerUi = {
  selectedRole: 'CO',
  selectedRoleName: 'CO',
  updateMessageState: true,
  logPlayerActivity: false,
  playerMessageLog: {
  },
  isRFIManager: false,
  infoMarkers: [],
  attributeTypes: [],
  perForceActivities: [],
  markerIcons: [],
  isGameControl: true,
  isUmpire: true,
  isObserver: false,
  currentTurn: 57,
  phase: 'adjudication',
  gameDate: '2019-10-29T02:02',
  gameTurnTime: {
    unit: 'millis',
    millis: 43200000
  },
  realtimeTurnTime: 300000,
  turnEndTime: '',
  adjudicationStartTime: '2020-09-30T09:17:56+07:00',
  gameDescription: '',
  currentWargame: 'wargame-k16fadm4',
  wargameTitle: 'Monday',
  chatChannel: {
    name: 'game-admin',
    template: {
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
    messages: [
      {
        details: {
          channel: 'game-admin',
          turnNumber: 3,
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            forceId: 'blue',
            roleId: 'CO',
            roleName: 'CO',
            iconURL: 'http://localhost:8080/default_img/forceDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2020-12-06T11:06:19.602Z'
        },
        message: {
          content: 'My Second Test Message'
        },
        _id: '2020-12-06T11:06:19.602Z',
        _rev: '1-e17592723c22372813d53a52782f9b50',
        hasBeenRead: false,
        isOpen: false,
        messageType: 'CustomMessage'
      },
      {
        details: {
          channel: 'game-admin',
          turnNumber: 4,
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            forceId: 'blue',
            roleId: 'CO',
            roleName: 'CO',
            iconURL: 'http://localhost:8080/default_img/forceDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2020-12-06T11:06:12.434Z'
        },
        message: {
          content: 'My test Message'
        },
        _id: '2020-12-06T11:06:12.434Z',
        _rev: '1-f70b71621c42d3b94ad94ebc09cea9a0',
        hasBeenRead: false,
        isOpen: false,
        messageType: 'CustomMessage'
      },
      {
        details: {
          channel: 'game-admin',
          turnNumber: 4,
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            roleId: 'CO',
            forceId: 'blue',
            roleName: 'CO',
            iconURL: 'http://localhost:8080/default_img/forceDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2020-12-06T11:05:07.490Z'
        },
        message: {
          content: 'ddaw'
        },
        _id: '2020-12-06T11:05:07.491Z',
        _rev: '1-99a75cd848ce35b580fc41e50bdf51f3',
        hasBeenRead: false,
        isOpen: false,
        messageType: 'CustomMessage'
      }
    ]
  },
  channels: {
    'channel-k16fgs63': {
      name: 'Blue Chat',
      forceColors: [                                                  
        '#3dd0ff'                                                            
      ],                                                                      
      forceIcons: [                                                   
        'http://localhost:8080/default_img/forceDefault.png'                 
      ],                                                                      
      forceNames: [                                                   
        'Blue'                                                               
      ],                                                                      
      messages: [                                                     
        {                                                              
          _id: '2020-12-06T11:07:18.374Z',                                  
          _rev: '1-b0787ec1a69761adbd14ebe5186265fa',                       
          details: {                                                 
            channel: 'channel-k16fgs63',                                    
            from: {                                                  
              force: 'Blue',                                                
              forceColor: '#3dd0ff',                                        
              iconURL: 'http://localhost:8080/default_img/forceDefault.png',
              roleId: 'rkrlw445e',                                          
              roleName: 'CO'                                               
            },                                                                
            messageType: 'Chat',                                            
            timestamp: '2020-12-06T11:07:18.374Z',                          
            turnNumber: 1                                                  
          },                                                                  
          hasBeenRead: false,                                               
          isOpen: false,                                                    
          message: {                                                 
            content: 'My second test mesage bluechat'                      
          },                                                                  
          messageType: 'CustomMessage'                                     
        },                                                                    
        {                                                              
          _id: '2020-12-06T11:07:08.130Z',                                  
          _rev: '1-22eb14479c475bdf0bd31fb08ea029c6',                       
          details: {                                                 
            channel: 'channel-k16fgs63',                                    
            from: {                                                  
              force: 'Blue',                                                
              forceColor: '#3dd0ff',                                        
              iconURL: 'http://localhost:8080/default_img/forceDefault.png',
              roleId: 'rkrlw445e',                                          
              roleName: 'CO'                                               
            },                                                                
            messageType: 'Chat',                                            
            timestamp: '2020-12-06T11:07:08.130Z',                          
            turnNumber: 1                                                  
          },                                                                  
          hasBeenRead: false,                                               
          isOpen: false,                                                    
          message: {                                                 
            content: 'My test mesage bluechat'                        
          },                                                             
          messageType: 'CustomMessage'                                 
        }                                                                    
      ],                                                                      
      unreadMessageCount: 2,
      observing: false,
      templates: [                             
        {                                       
          _id: 'k16eedkp',                           
          _rev: '1-612d7dc5d10fc81bc7459b2801c66816',
          completed: false,                          
          details: {                          
            properties: {                     
              Forces: {                       
                format: 'table',  
                items: {                      
                  minItems: 1,                       
                  properties: {               
                    assets: {                 
                      format: 'table',               
                      items: {                
                        properties: {         
                          location: {         
                            maxLength: 3,            
                            type: 'string'          
                          },                           
                          name: {             
                            type: 'string'          
                          },                           
                          visibleTo: {        
                            format: 'table',         
                            items: {          
                              properties: {   
                                Force: {      
                                  enum: [      
                                    'Blue',            
                                    'Red',             
                                    'Green'           
                                  ],                   
                                  type: 'string'    
                                }       
                              }                      
                            },                        
                            type: 'array'           
                          }                           
                        }                             
                      },                               
                      minItems: 1,                   
                      type: 'array'                 
                    },                                 
                    force: {                  
                      enum: [                  
                        'Blue',                        
                        'Red',                         
                        'Green'                       
                      ],                               
                      propertyOrder: 100,            
                      type: 'string'                
                    }                   
                  }                                  
                },                                     
                minItems: 1,                         
                type: 'array'                       
              }                                       
            },                                         
            title: 'State of World (laydown 2)',     
            type: 'object'                          
          },                                           
          lastUpdated: '2019-09-30T12:37:26.705Z',   
          title: 'State of World L'                 
        }                                            
      ],                                               
      uniqid: 'channel-k16fgs63',
      cData: {
        name: 'Blue Chat',
        participants: [
          {
            forceUniqid: 'force-k16fdykj',
            icon: 'http://localhost:8080/default_img/forceDefault.png',
            pType: 'ParticipantCustom',
            roles: [],
            subscriptionId: 'k16fh4xo',
            templates: [
              {
                _id: 'State of World L',
                title: 'Chat'
              }                                            
            ]
          }
        ],
        channelType: CHANNEL_CUSTOM,
        uniqid: 'channel-k16fgs63'  
      }
    },
    'channel-k16fheej': {
      name: 'Blue HQ',
      forceColors: [                                                   
        '#3dd0ff',                                                             
        '#FCFBEE'                                                             
      ],
      templates: [],                                                                       
      forceIcons: [                                                    
        'http://localhost:8080/default_img/forceDefault.png',
        'http://localhost:8080/default_img/umpireDefault.png'
      ],                                                                       
      forceNames: [                                                    
        'Blue',                                                                
        'White'                                                               
      ],                                                                       
      messages: [                                                      
        {                                                               
          _id: '2020-12-06T11:06:51.596Z',                                   
          _rev: '1-011c35315375d64dab2a7de520613875',                        
          details: {                                                  
            channel: 'channel-k16fheej',                                     
            from: {                                                   
              force: 'Blue',                                                 
              forceColor: '#3dd0ff',                                         
              iconURL: 'http://localhost:8080/default_img/forceDefault.png', 
              roleId: 'rkrlw445e',                                           
              roleName: 'CO'                                                
            },                                                                 
            messageType: 'PG19 Weekly Orders',                               
            timestamp: '2020-12-06T11:06:51.596Z',                           
            turnNumber: 1                                                   
          },                                                                   
          hasBeenRead: false,                                                
          isOpen: false,                                                     
          message: {                                                  
            AlliedUnitTasking: 'Px Tasking\n',                  
            CommandersIntent: 'Commanders Intent\n',                          
            ForceActionOnContact: 'Px Tasking\n',                           
            ForceActionOnLossOfContact: '',                                  
            Orders: [                                                  
              {                                                         
                ContingencyOrders: 'Contingency Orders',                     
                Orders: 'Orders',                                            
                Unit: 'Unit'                                                
              }                                                               
            ],                                                                 
            PxTasking: 'Px Tasking\n',                                                 
            SupportingLogisticsActivity: ''                                
          },                                                                   
          messageType: 'CustomMessage'                                      
        }
      ],                                                                    
      observing: false,
      cData: {
        name: 'Blue HQ',
        participants: [                                             
          {                                                          
            forceUniqid: 'force-k16fdykj',                                
            icon: 'http://localhost:8080/default_img/forceDefault.png',   
            pType: 'ParticipantCustom',                                   
            roles: [],                                              
            subscriptionId: 'k16fhq4b',                                   
            templates: [                                            
              {                                                      
                _id: 'State of World L',                                  
                title: 'PG19 Weekly Orders'                              
              }                                                            
            ]                                                              
          },                                                                
          {                                                          
            forceUniqid: 'umpire',                                        
            icon: 'http://localhost:8080/default_img/umpireDefault.png',  
            pType: 'ParticipantCustom',                                   
            roles: [                                                
              'rk16ffhn2'                                                  
            ],                                                              
            subscriptionId: 'k16fhy24',                                   
            templates: [                                            
              {                                                      
                _id: 'State of World L',                                  
                title: 'Chat'                                            
              }                                                            
            ]                                                             
          }                                                               
        ],                                                                  
        channelType: CHANNEL_CUSTOM,
        uniqid: 'channel-k16fheej'  
      },
      uniqid: 'channel-k16fheej',
      unreadMessageCount: 1
    },
    'channel-k4cnw3nr': {
      name: 'Mapping',
      messages: [],
      unreadMessageCount: 0,
      observing: false,
      uniqid: 'channel-k4cnw3nr',
      cData: {
        channelType: CHANNEL_MAPPING,
        name: 'Mapping',
        uniqid: 'channel-k4cnw3nr',
        participants: [],
        constraints: {
          bounds: [[1, 2], [3, 4]],
          minZoom: 3,
          h3res: 3
        }
      }
    }
  },
  allChannels: [
    {
      name: 'Blue Chat',
      uniqid: 'channel-k16fgs63',
      channelType: CHANNEL_CUSTOM,
      participants: [
        {
          forceUniqid: 'force-k16fdykj',
          pType: PARTICIPANT_CUSTOM,
          roles: [],
          templates: [
            {
              _id: 'k16eedkl',
              title: '1-09ab7a18ff677cec5d9a56f02a45788d'
            }
          ],
          subscriptionId: 'k16fh4xo'
        }
      ]
    },
    {
      name: 'Blue HQ',
      uniqid: 'channel-k16fheej',
      channelType: CHANNEL_CUSTOM,
      participants: [
        {
          forceUniqid: 'force-k16fdykj',
          pType: PARTICIPANT_CUSTOM,
          roles: ['CO'],
          templates: [
            {
              _id: 'k16eedko',
              title: '1-9682b67e15ded61bd4f8d863179d5c04'
            }
          ],
          subscriptionId: 'k16fhq4b'
        },
        {
          forceUniqid: 'umpire',
          pType: PARTICIPANT_CUSTOM,
          roles: ['Game Control'],
          templates: [
            {
              _id: 'k16eedkl',
              title: '1-09ab7a18ff677cec5d9a56f02a45788d'
            }
          ],
          subscriptionId: 'k16fhy24'
        }
      ]
    },
    {
      name: 'Mapping',
      uniqid: 'channel-k4cnw3nr',
      constraints: {
        bounds: [[2, 3], [4, 5]],
        h3res: 3,
        minZoom: 5
      },
      channelType: CHANNEL_MAPPING,
      participants: [
        {
          forceUniqid: 'umpire',
          pType: PARTICIPANT_MAPPING,
          roles: [],
          subscriptionId: 'k4cnwg1q'
        },
        {
          pType: PARTICIPANT_MAPPING,
          forceUniqid: 'force-k16fdykj',
          roles: [],
          subscriptionId: 'k4cnwjfx'
        }
      ]
    }
  ],
  allPeriods: [
    {
      gameDate: '2022-05-25T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 1
    },
    {
      gameDate: '2022-05-28T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 1
    },
    {
      gameDate: '2022-05-04T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 2
    },
    {
      gameDate: '2022-05-04T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 2
    }
  ],
  allForces: [
    {
      name: 'White',
      uniqid: 'umpire',
      overview: 'Umpire force.',
      roles: [
        {
          name: 'Game Control',
          roleId: 'aa',
          isGameControl: true,
          isObserver: true,
          isInsightViewer: true,
          isRFIManager: true
        }
      ],
      iconURL: 'http://localhost:8080/default_img/umpireDefault.png',
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
          roleId: 'aa',
          isObserver: false,
          isInsightViewer: false
        },
        {
          name: 'Comms',
          roleId: 'aa',
          isObserver: false,
          isInsightViewer: false,
          isGameControl: false
        }
      ],
      iconURL: 'http://localhost:8080/default_img/forceDefault.png',
      color: '#3dd0ff',
      umpire: false,
      dirty: false
    }
  ],
  allPlatformTypes: [],
  showObjective: false,
  wargameInitiated: true,
  feedbackMessages: [],
  tourIsOpen: false,
  showAccessCodes: true,
  isInsightViewer: false,
  timeWarning: 60000,
  allTemplatesByKey: {
    aa: {
      completed: false,
      details: {
        properties: {
          Forces: {
            format: 'table',
            items: {
              minItems: 1,
              properties: {
                assets: {
                  format: 'table',
                  items: {
                    properties: {
                      location: {
                        maxLength: 3,
                        type: 'string'
                      },
                      name: {
                        type: 'string'
                      },
                      visibleTo: {
                        format: 'table',
                        items: {
                          properties: {
                            Force: {
                              enum: [
                                'Blue',
                                'Red',
                                'Green'
                              ],
                              type: 'string'
                            }
                          }
                        },
                        type: 'array'
                      }
                    }
                  },
                  minItems: 1,
                  type: 'array'
                },
                force: {
                  enum: [
                    'Blue',
                    'Red',
                    'Green'
                  ],
                  propertyOrder: 100,
                  type: 'string'
                }
              }
            },
            minItems: 1,
            type: 'array'
          }
        },
        title: 'State of World (laydown 2)',
        type: 'object'
      },
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'State of World L',
      _id: 'k16eedkp',
      _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
    },
    bb: {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Daily intentions',
      details: {
        type: 'object',
        properties: {
          TurnNumber: {
            title: 'Turn',
            type: 'string',
            format: 'number'
          },
          OverallIntentions: {
            title: 'Overall intentions',
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
                Tasking: {
                  title: 'Tasking',
                  type: 'string',
                  format: 'textarea'
                },
                SearchPolicy: {
                  title: 'Search Policy',
                  type: 'string',
                  format: 'textarea'
                },
                ActionOnContact: {
                  title: 'Action on Contact',
                  type: 'string',
                  enum: [
                    'Ignore',
                    'Evade',
                    'Covert Trail',
                    'Overt Trail',
                    'Harass'
                  ]
                },
                AnyOtherComments: {
                  title: 'Any other comments',
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
          }
        },
        title: 'Daily Intent',
        required: [
          'OverallIntentions',
          'Orders'
        ]
      },
      completed: false,
      _id: 'k16eedkn',
      _rev: '1-cc8e8cdb01447959c266761066448382'
    },
    cc: {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Link',
      details: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            format: 'text'
          },
          URL: {
            type: 'string',
            format: 'url'
          }
        },
        title: 'Link',
        format: 'grid'
      },
      completed: false,
      _id: 'k16eedkm',
      _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
    }
  }
}
export default testState
