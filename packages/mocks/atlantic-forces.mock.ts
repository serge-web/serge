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
            "route": ["46029"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 0
          },
          {
            "route": ["46028"],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 1
          },
          {
            "route": ["45027"],
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
              "46031",
              "47032"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "47033",
              "48034"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "task-group",
        "position": "46030",
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
            "route": ["45030"],
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
              "46032",
              "46033"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "46034",
              "45035"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "frigate",
        "position": "45031",
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
        "position": "54032",
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
            "route": ["44027"],
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
              "45029"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "46030"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "N16",
              "M16"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          }
        ],
        "platformType": "merchant-vessel",
        "position": "45028",
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
            "route": ["61047"],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 0
          },
          {
            "route": [
              "61046",
              "60046"
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
              "62049",
              "62050"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "62051",
              "62052"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          }
        ],
        "platformType": "fishing-vessel",
        "position": "62048",
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
              "61053"
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
              "L09"
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
              "K09"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "J09"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 7
          }
        ],
        "platformType": "fishing-vessel",
        "position": "62052",
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
            "route": ["Q18"],
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
              "P16"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "O16"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "N15"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          }
        ],
        "platformType": "fishing-vessel",
        "position": "P17",
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
            "route": ["Q12"],
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
        "position": "Q12",
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
            "route": ["H00"],
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
              "I04",
              "I05",
              "I06",
              "I06"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "I07",
              "I08",
              "I09",
              "I10"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "I11",
              "J11",
              "J12",
              "J13"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "K14",
              "L14",
              "M15",
              "M16"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "M17",
              "M18",
              "N18",
              "N19"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 7
          },
          {
            "route": [
              "O20",
              "O21",
              "P21",
              "Q22"
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
        "position": "H03",
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
            "route": ["C00"],
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
              "C00",
              "C01",
              "C02",
              "C03"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 3
          },
          {
            "route": [
              "C04",
              "C05",
              "C06",
              "C07"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "D07",
              "E08",
              "F08",
              "G08"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "H08",
              "H09",
              "I09",
              "I10"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 6
          },
          {
            "route": [
              "I11",
              "J11",
              "J12",
              "J13"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 7
          },
          {
            "route": [
              "K14",
              "L14",
              "M15",
              "M16"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "M17",
              "M18",
              "N18",
              "N19"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 9
          },
          {
            "route": [
              "O20",
              "O21",
              "P21",
              "Q22"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 10
          },
          {
            "route": [
              "R22",
              "S22",
              "T22",
              "U23"
            ],
            "status": {
              "speedKts": 20,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "merchant-vessel",
        "position": "C00",
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
            "route": ["M02"],
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
              "J03",
              "I04"
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
              "I05",
              "I06"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "I07",
              "I08"
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
              "J07",
              "K07"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "L06",
              "M06"
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
              "M05",
              "M04"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "fishing-vessel",
        "position": "K03",
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
            "route": ["N08"],
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
              "K10",
              "K09"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 4
          },
          {
            "route": [
              "K08",
              "K07"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "K06",
              "M06"
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
              "N06",
              "N07"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "M08",
              "L08"
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
        "position": "L09",
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
            "route": ["N11"],
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
              "K10",
              "J09"
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
              "K08",
              "K07"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 5
          },
          {
            "route": [
              "K06",
              "M06"
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
              "N06",
              "N07"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 8
          },
          {
            "route": [
              "M08",
              "L08"
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
              "M09",
              "N08"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting"
            },
            "turn": 11
          }
        ],
        "platformType": "fishing-vessel",
        "position": "L10",
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
