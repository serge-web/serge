import { ForceData } from "@serge/custom-types"

export const forces: ForceData[] = [
  {
    "color": "#FCFBEE",
    "dirty": false,
    "iconURL": "default_img/umpireDefault.png",
    "name": "White",
    "overview": "Umpire force.",
    "roles": [
      {
        "roleId": "rkrlw6f5f",
        "isGameControl": true,
        "isInsightViewer": true,
        "isObserver": true,
        "name": "Game Control",
        "password": "p2311"
      }
    ],
    "umpire": true,
    "uniqid": "umpire"
  },
  {
    "assets": [
      {
        "comprising": [
          {
            "condition": "Full capability",
            "contactId": "C964",
            "history": [],
            "hosting": [
              {
                "condition": "Full capability",
                "contactId": "C721",
                "history": [],
                "name": "Dart 45",
                "perceptions": [
                  {
                    "by": "Red",
                    "force": "Blue",
                    "name": "Unknown UAV",
                    "type": "Unmanned-Airborne-Vehicle"
                  }
                ],
                "plannedTurns": [],
                "platformType": "Unmanned-Airborne-Vehicle",
                "status": {
                  "state": "Landed"
                },
                "uniqid": "a0pra43302"
              },
              {
                "condition": "Full capability",
                "contactId": "C932",
                "history": [],
                "name": "Dart 46",
                "perceptions": [],
                "plannedTurns": [],
                "platformType": "Unmanned-Airborne-Vehicle",
                "status": {
                  "state": "Landed"
                },
                "uniqid": "a0pra17943"
              }
            ],
            "name": "Frigate A",
            "perceptions": [
              {
                "by": "Red",
                "force": "Blue",
                "name": "Frigate A Perceived Name"
              }
            ],
            "platformType": "frigate",
            "uniqid": "a0prbr6441"
          },
          {
            "condition": "Full capability",
            "contactId": "C653",
            "history": [],
            "name": "MCM Delta",
            "perceptions": [],
            "platformType": "MCMV",
            "uniqid": "a0traa6790"
          }
        ],
        "condition": "Full capability",
        "contactId": "C713",
        "history": [
          {
            "route": ["BD78"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 0
          },
          {
            "route": ["BC81"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 1
          },
          {
            "route": ["BD83"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "name": "CTF 511",
        "perceptions": [
          {
            "by": "Red",
            "force": "Blue",
            "name": "BRIT",
            "type": "task-group"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "BA88"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AW91"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "task-group",
        "position": "BD85",
        "status": {
          "speedKts": 10,
          "state": "Transiting"
        },
        "uniqid": "a0pra5431"
      },
      {
        "condition": "Full capability",
        "contactId": "C043",
        "history": [
          {
            "route": ["Q45"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "hosting": [
          {
            "condition": "Full capability",
            "contactId": "C572",
            "history": [],
            "name": "Merlin",
            "perceptions": [
              {
                "by": "Red",
                "force": "Blue",
                "type": "helicopter"
              }
            ],
            "plannedTurns": [],
            "platformType": "helicopter",
            "status": {
              "state": "Landed"
            },
            "uniqid": "a0pra11002"
          },
          {
            "condition": "Full capability",
            "contactId": "C591",
            "history": [],
            "name": "Dart 42",
            "perceptions": [],
            "plannedTurns": [],
            "platformType": "Unmanned-Airborne-Vehicle",
            "status": {
              "state": "Landed"
            },
            "uniqid": "a0pra18702"
          }
        ],
        "name": "Frigate",
        "perceptions": [
          {
            "by": "Red",
            "force": "Blue",
            "name": "Frigate Perceived Name",
            "type": "frigate"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "Q49"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "O52"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "frigate",
        "position": "Q47",
        "status": {
          "speedKts": 20,
          "state": "Transiting"
        },
        "uniqid": "a0pra00001"
      },
      {
        "condition": "Full capability",
        "contactId": "C072",
        "history": [],
        "name": "MPA",
        "perceptions": [],
        "plannedTurns": [],
        "platformType": "fixed-wing-aircraft",
        "position": "AA44",
        "status": {
          "state": "Landed"
        },
        "uniqid": "a0pra00002"
      },
      {
        "condition": "Full capability",
        "contactId": "C012",
        "history": [
          {
            "route": ["X35"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "name": "Tanker",
        "perceptions": [
          {
            "by": "Red",
            "force": "Blue",
            "type": ""
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "V40"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "V41"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "merchant-vessel",
        "position": "V39",
        "status": {
          "speedKts": 20,
          "state": "Transiting"
        },
        "uniqid": "a0pra00003"
      }
    ],
    "color": "#00F",
    "dirty": false,
    "iconURL": "default_img/umpireDefault.png",
    "name": "Blue",
    "overview": "Blue force.",
    "roles": [
      {
        "roleId": "rk116f5e",
        "canSubmitPlans": true,
        "isGameControl": false,
        "isInsightViewer": false,
        "isObserver": false,
        "name": "CO",
        "password": "p5543"
      }
    ],
    "umpire": false,
    "uniqid": "Blue"
  },
  {
    "assets": [
      {
        "condition": "Full capability",
        "contactId": "C065",
        "history": [
          {
            "route": ["AJ49"],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 0
          }
        ],
        "locationPending": true,
        "name": "Dhow-A",
        "perceptions": [
          {
            "by": "Blue"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "AG48"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "AF47"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          }
        ],
        "platformType": "fishing-vessel",
        "position": "AH49",
        "status": {
          "speedKts": 10,
          "state": "Transiting"
        },
        "uniqid": "a0pra000100"
      },
      {
        "condition": "Full capability",
        "contactId": "C105",
        "history": [
          {
            "route": [
              "AD56"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "hosting": [
          {
            "condition": "Full capability",
            "contactId": "C158",
            "history": [],
            "name": "Bog Draft",
            "perceptions": [],
            "plannedTurns": [],
            "platformType": "boghammer",
            "status": {
              "state": "Landed"
            },
            "uniqid": "a0pra153102"
          }
        ],
        "locationPending": true,
        "name": "Dhow-B",
        "perceptions": [
          {
            "by": "Blue",
            "force": "Green",
            "name": "SHU’AI",
            "type": "fishing-vessel"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "AA55"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 4
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 5
          }
        ],
        "platformType": "fishing-vessel",
        "position": "AB56",
        "status": {
          "speedKts": 10,
          "state": "Transiting"
        },
        "uniqid": "a0pra000101"
      },
      {
        "condition": "Full capability",
        "contactId": "C008",
        "history": [
          {
            "route": ["V57"],
            "status": {
              "state": "Moored"
            },
            "turn": 2
          }
        ],
        "locationPending": true,
        "name": "Dhow-C",
        "perceptions": [],
        "plannedTurns": [
          {
            "route": [
              "S56"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "R55"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "Q56"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "fishing-vessel",
        "position": "T57",
        "status": {
          "speedKts": 10,
          "state": "Transiting"
        },
        "uniqid": "a0pra000102"
      },
      {
        "condition": "Full capability",
        "contactId": "C076",
        "history": [
          {
            "status": {
              "state": "Inactive"
            },
            "turn": 2
          }
        ],
        "locationPending": true,
        "name": "Missile-A",
        "perceptions": [],
        "plannedTurns": [],
        "platformType": "coastal-radar-site",
        "position": "AK45",
        "status": {
          "state": "Inactive"
        },
        "uniqid": "a0pra000103"
      }
    ],
    "color": "#F00",
    "dirty": false,
    "iconURL": "default_img/umpireDefault.png",
    "name": "Red",
    "overview": "Red force.",
    "roles": [
      {
        "roleId": "rkr226f5e",
        "isGameControl": false,
        "isInsightViewer": false,
        "isObserver": false,
        "name": "CO",
        "password": "p3244"
      }
    ],
    "umpire": false,
    "uniqid": "Red"
  },
  {
    "assets": [
      {
        "condition": "Full capability",
        "contactId": "C015",
        "history": [
          {
            "route": ["AI53"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "name": "Tanker-1",
        "perceptions": [
          {
            "by": "Blue",
            "force": "Green",
            "name": "OSAKA",
            "type": "merchant-vessel"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "AE53"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "AC53"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AA53"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "Z52"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "X52"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 7
          },
          {
            "route": [
              "V53"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "status": {
              "state": "Moored"
            },
            "turn": 9
          },
          {
            "status": {
              "state": "Moored"
            },
            "turn": 10
          },
          {
            "status": {
              "state": "Moored"
            },
            "turn": 11
          }
        ],
        "platformType": "merchant-vessel",
        "position": "AG53",
        "status": {
          "speedKts": 20,
          "state": "Transiting"
        },
        "uniqid": "a0pra000200"
      },
      {
        "condition": "Full capability",
        "contactId": "C081",
        "history": [
          {
            "route": ["AI56"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "name": "Tanker-2",
        "perceptions": [
          {
            "by": "Blue",
            "force": "Green",
            "name": "ARUNA 12",
            "type": "merchant-vessel"
          },
          {
            "by": "Red",
            "force": "Green",
            "name": "BARLAY",
            "type": "merchant-vessel"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "AF55"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "AE55"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AC55"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "AA55"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "Y55"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 7
          },
          {
            "route": [
              "Y54"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "status": {
              "state": "Moored"
            },
            "turn": 9
          },
          {
            "route": [
              "Z54"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 10
          },
          {
            "route": [
              "AB54"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "merchant-vessel",
        "position": "AG56",
        "status": {
          "state": "Moored"
        },
        "uniqid": "a0pra000201"
      },
      {
        "condition": "Full capability",
        "contactId": "C116",
        "history": [
          {
            "route": ["O31"],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "name": "Fisher-A",
        "perceptions": [
          {
            "by": "Blue",
            "force": "Green",
            "name": "JALIBUT",
            "type": "merchant-vessel"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "K33"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 4
          },
          {
            "route": [
              "L34"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "N34"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 7
          },
          {
            "route": [
              "M36"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "K36"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 9
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 10
          },
          {
            "route": [
              "J35"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "fishing-vessel",
        "position": "M31",
        "status": {
          "speedKts": 10,
          "state": "Transiting"
        },
        "uniqid": "a0pra000202"
      },
      {
        "condition": "Full capability",
        "contactId": "C026",
        "history": [
          {
            "route": ["AU12"],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "name": "Fisher-B",
        "perceptions": [
          {
            "by": "Blue",
            "force": "Green",
            "type": "merchant-vessel"
          }
        ],
        "plannedTurns": [
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 3
          },
          {
            "route": [
              "AP15"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AN17"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "AL18"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 7
          },
          {
            "route": [
              "AL17"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "AL16"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 9
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 10
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 11
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 12
          }
        ],
        "platformType": "fishing-vessel",
        "position": "AR13",
        "status": {
          "speedKts": 10,
          "state": "Transiting"
        },
        "uniqid": "a0pra000203"
      },
      {
        "condition": "Full capability",
        "contactId": "C115",
        "history": [
          {
            "route": ["AC25"],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 2
          }
        ],
        "name": "Fisher-C",
        "perceptions": [
          {
            "by": "Blue",
            "force": "Green",
            "name": "BOUM 3",
            "type": "merchant-vessel"
          },
          {
            "by": "Red",
            "force": "Green",
            "name": "BOUM 3",
            "type": "merchant-vessel"
          }
        ],
        "plannedTurns": [
          {
            "route": [
              "X27"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 4
          },
          {
            "route": [
              "U28"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "S29"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 7
          },
          {
            "route": [
              "U28"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "AV16"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 9
          },
          {
            "status": {
              "state": "Fishing"
            },
            "turn": 10
          },
          {
            "route": [
              "W27"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "fishing-vessel",
        "position": "AA26",
        "status": {
          "speedKts": 10,
          "state": "Transiting"
        },
        "uniqid": "a0pra000204"
      }
    ],
    "color": "#0F0",
    "controlledBy": [
      "umpire"
    ],
    "dirty": false,
    "iconURL": "default_img/umpireDefault.png",
    "name": "Green",
    "overview": "Green Shipping",
    "roles": [
      {
        "roleId": "rkrlw6f33",
        "isGameControl": false,
        "isInsightViewer": false,
        "isObserver": false,
        "name": "CO",
        "password": "P9454"
      }
    ],
    "umpire": false,
    "uniqid": "Green"
  }
]

export default forces
