import { ForceData } from "@serge/custom-types"

export const forces: ForceData[] = [
  {
    "color": "#FCFBEE",
    "dirty": false,
    "iconURL": "http://localhost:8080/default_img/umpireDefault.png",
    "name": "White",
    "overview": "Umpire force.",
    "roles": [
      {
        "isGameControl": true,
        "isInsightViewer": true,
        "isObserver": true,
        "isRFIManager": false,
        "name": "Game Control",
        "roleId": "rks5zfzd2"
      },
      {
        "isGameControl": false,
        "isInsightViewer": true,
        "isObserver": false,
        "isRFIManager": true,
        "name": "RFI Mgr",
        "roleId": "rks5zfzd3"
      }
    ],
    "umpire": true,
    "uniqid": "umpire"
  },
  {
    "assets": [
      {
        "condition": "Working",
        "contactId": "C426",
        "history": [
          {
            "route": [
              "8718aab18ffffff"
            ],
            "status": {
              "speedKts": 12,
              "state": "Transiting a"
            },
            "turn": 1
          },
          {
            "route": [
              "8718aaa24ffffff"
            ],
            "status": {
              "speedKts": 12,
              "state": "Transiting a"
            },
            "turn": 1
          },
          {
            "route": [
              "8718aab09ffffff"
            ],
            "status": {
              "speedKts": 12,
              "state": "Transiting a"
            },
            "turn": 1
          }
        ],
        "name": "SSN-1",
        "attributeValues": [
          {
            attrId: 'asdic-dir',
            attrType: "AttributeValueEnum",
            value: '120'
          },
          {
            attrId: 'comm-battery',
            attrType: "AttributeValueNumber",
            value: 90
          },
          {
            attrId: 'comm-fwd-torpedoes',
            attrType: "AttributeValueNumber",
            value: 10
          },
          {
            attrId: 'comm-aft-torpedoes',
            attrType: "AttributeValueNumber",
            value: 2
          },
          {
            attrId: 'ss-depth',
            attrType: "AttributeValueEnum",
            value: 'Shallow'
          }
        ],
        "perceptions": [],
        "platformTypeId" : "a2",
        "plannedTurns": [
          {
            "turn": 1,
            "route": [
              "8718a84daffffff"
            ],
            "status": {
            "speedKts": 20,
            "state": "Transiting"}
          },
          {
            "turn": 2,
            "route": [
              "8718a84c2ffffff"
            ],
            "status" : {
              "speedKts": 20,
              "state": "Transiting"  
            }
          }
        ],
        "position": "8718aab70ffffff",
        "uniqid": "a034a22t5431"
      },
      {
        "condition": "Working",
        "contactId": "C164",
        "history": [
          {
            "route": [
              "8718aab6affffff"
            ],
            "status": {
              "speedKts": 12,
              "state": "Transiting a"
            },
            "turn": 1
          }
        ],
        "name": "NORTH",
        "perceptions": [
          {
            "by": "Red-1",
            "force": "Blue-1"
          },
          {
            "by": "Red-2",
            "force": "Blue-1"
          }
        ],
        "platformTypeId" : "a3",
        "position": "8718aab6cffffff",
        "uniqid": "a0prbr1141"
      } /* ,
      {
        "condition": "Working",
        "contactId": "C866",
        "history": [
          {
            "route": [
              "8318d2fffffffff"
            ],
            "status": {
              "speedKts": 12,
              "state": "Transiting a"
            },
            "turn": 1
          },
          {
            "route": [
              "8318d4fffffffff"
            ],
            "status": {
              "speedKts": 10,
              "state": "Transiting b"
            },
            "turn": 2
          }
        ],
        "name": "SSN-2",
        "perceptions": [],
        "platformType": "ssn",
        "position": "8318f2fffffffff",
        "uniqid": "a0a975y4221"
      } */
    ],
    "color": "#00aaff",
    "cssClass": "blue-1",
    "dirty": false,
    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
    "name": "Blue-1",
    "overview": "An overview written here..",
    "roles": [
      {
        "isGameControl": false,
        "isInsightViewer": false,
        "isObserver": false,
        "name": "CO",
        "roleId": "rks5zfzd6"
      },
      {
        "isGameControl": false,
        "isInsightViewer": false,
        "isObserver": false,
        "isRFIManager": false,
        "name": "CTF B5",
        "roleId": "rks5zfzdb"
      }
    ],
    "umpire": false,
    "uniqid": "Blue",
    "visibleTo": []
  } /*,
  {
    "assets": [
      {
        "condition": "Working",
        "contactId": "C122",
        "history": [],
        "name": "AGI",
        "perceptions": [],
        "platformType": "agi",
        "position": "831965fffffffff",
        "uniqid": "a0a45988ty54351"
      },
      {
        "condition": "Working",
        "contactId": "C442",
        "history": [],
        "name": "MPA 2",
        "perceptions": [
          {
            "by": "Blue-1",
            "force": "Red-1"
          },
          {
            "by": "Blue-2",
            "force": "Red-1"
          }
        ],
        "platformType": "mpa",
        "position": "8308d4fffffffff",
        "uniqid": "a03322ty344331"
      }
    ],
    "color": "#f00",
    "cssClass": "red-1",
    "dirty": false,
    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
    "name": "Red-1",
    "overview": "An overview written here..",
    "roles": [
      {
        "isGameControl": false,
        "isInsightViewer": false,
        "isObserver": false,
        "name": "CO",
        "roleId": "rks5zfzdi"
      },
      {
        "isGameControl": false,
        "isInsightViewer": false,
        "isObserver": false,
        "isRFIManager": false,
        "name": "CTF Y5",
        "roleId": "rks5zfzdn"
      }
    ],
    "umpire": false,
    "uniqid": "Red-1",
    "visibleTo": []
  } */
]
export default forces
