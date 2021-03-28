import { ForceData } from "@serge/custom-types"

export const forces: ForceData[] = [
  {
    "color": "#FCFBEE",
    "dirty": false,
    "icon": "default_img/umpireDefault.png",
    "name": "White",
    "overview": "Umpire force.",
    "roles": [
      {
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
            "route": ["AG26"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 0
          },
          {
            "route": ["AF26"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 1
          },
          {
            "route": ["AE26"],
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
              "AI25"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AJ24"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "task-group",
        "position": "AH26",
        "status": {
          "speedKts": 20,
          "state": "Transiting"
        },
        "uniqid": "a0pra5431"
      },
      {
        "condition": "Full capability",
        "contactId": "C043",
        "history": [
          {
            "route": ["AJ25"],
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
              "AK26"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AL26"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "frigate",
        "position": "AJ26",
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
        "position": "AG31",
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
            "route": ["AE31"],
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
              "AG29"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AH28"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "AI28"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          }
        ],
        "platformType": "merchant-vessel",
        "position": "AF30",
        "status": {
          "speedKts": 20,
          "state": "Transiting"
        },
        "uniqid": "a0pra00003"
      }
    ],
    "color": "#00F",
    "dirty": false,
    "icon": "default_img/umpireDefault.png",
    "name": "Blue",
    "overview": "Blue force.",
    "roles": [
      {
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
            "route": ["AU08"],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 0
          },
          {
            "route": [
              "AT09"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 1
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
              "AR11"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "AQ12"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          }
        ],
        "platformType": "fishing-vessel",
        "position": "AS10",
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
              "AM27"
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
              "AM25"
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
          },
          {
            "route": [
              "AN24"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "AO23"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 7
          }
        ],
        "platformType": "fishing-vessel",
        "position": "AM26",
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
            "route": ["BB21"],
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
              "AZ22"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "AX25"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AW26"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "fishing-vessel",
        "position": "BA21",
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
        "position": "AX17",
        "status": {
          "state": "Inactive"
        },
        "uniqid": "a0pra000103"
      }
    ],
    "color": "#F00",
    "dirty": false,
    "icon": "default_img/umpireDefault.png",
    "name": "Red",
    "overview": "Red force.",
    "roles": [
      {
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
            "route": ["AU33"],
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
              "AS33"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "AR33"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AQ33"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "AP33"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "AO33"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 7
          },
          {
            "route": [
              "AN33"
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
        "position": "AT33",
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
            "route": ["AW25"],
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
              "AU27"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "AT28"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "AS29"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "AR30"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "AQ30"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 7
          },
          {
            "route": [
              "AP30"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "AO30"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 9
          },
          {
            "route": [
              "AN30"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 10
          },
          {
            "route": [
              "AM30"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "merchant-vessel",
        "position": "AV25",
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
            "route": ["S26"],
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
              "U26"
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
              "V27"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "W27"
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
              "X27"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "Y26"
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
              "Y27"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "fishing-vessel",
        "position": "T26",
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
            "route": ["N31"],
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
              "P29"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "P28"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "P27"
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
              "P26"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "P25"
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
        "position": "O29",
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
            "route": ["AU16"],
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
              "AU18"
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
              "AU19"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "AV18"
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
              "AV17"
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
              "AV15"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "fishing-vessel",
        "position": "AU17",
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
    "icon": "default_img/umpireDefault.png",
    "name": "Green",
    "overview": "Green Shipping",
    "roles": [
      {
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
