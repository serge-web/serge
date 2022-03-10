import { Wargame } from "@serge/custom-types";

const wargame: Wargame = {
    "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
    "wargameList": [],
    "data": {
        "channels": {
            "channels": [
                {
                    "name": "VHF C16",
                    "channelType": "ChannelCustom",
                    "participants": [
                        {
                            "force": "White",
                            "forceUniqid": "umpire",
                            "roles": [],
                            "subscriptionId": "8qsze9",
                            "templates": [],
                            "pType": "ParticipantCustom"
                        },
                        {
                            "force": "CTF B",
                            "forceUniqid": "Blue-1",
                            "roles": [],
                            "subscriptionId": "hzrzp",
                            "templates": [],
                            "pType": "ParticipantCustom"
                        },
                        {
                            "force": "CTF Y",
                            "forceUniqid": "Red-1",
                            "roles": [],
                            "subscriptionId": "icrx",
                            "templates": [],
                            "pType": "ParticipantCustom"
                        }
                    ],
                    "uniqid": "channel-koirdijk"
                },
                {
                    "name": "mapping",
                    "channelType": "mapping",
                    "participants": [
                        {
                            "force": "White",
                            "pType": "ParticipantMapping",
                            "forceUniqid": "umpire",
                            "roles": [],
                            "subscriptionId": "zit48h"
                        },
                        {
                            "force": "CTF B",
                            "forceUniqid": "Blue-1",
                            "roles": [],
                            "subscriptionId": "w9lmf",
                            "pType": "ParticipantMapping"
                        },
                        {
                            "force": "CTF Y",
                            "forceUniqid": "Red-1",
                            "roles": [],
                            "subscriptionId": "x0kbe",
                            "pType": "ParticipantMapping"
                        }
                    ],
                    "uniqid": "channel-koirldxk"
                }
            ],
            "complete": false,
            "dirty": false,
            "name": "Channels",
            "selectedChannel": ""
        },
        "forces": {
            "complete": true,
            "dirty": false,
            "forces": [
                {
                    "color": "#FCFBEE",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/umpireDefault.png",
                    "name": "White",
                    "overview": "Umpire force.",
                    "roles": [
                        {
                            "canSubmitPlans": true,
                            "isGameControl": true,
                            "isInsightViewer": true,
                            "isObserver": true,
                            "isRFIManager": false,
                            "name": "Game Control",
                            "roleId": "rks5zfzd2"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": true,
                            "isObserver": false,
                            "isRFIManager": true,
                            "name": "RFI Mgr",
                            "roleId": "rks5zfzd3"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Blue HHQ",
                            "roleId": "rks5zfzd4"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Red HHQ",
                            "roleId": "rks5zfzd5"
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
                                        "8918aab725bffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting a"
                                    },
                                    "turn": 1
                                },
                                {
                                    "route": [
                                        "8918aab7203ffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting b"
                                    },
                                    "turn": 2
                                }
                            ],
                            "locationPending": true,
                            "name": "NORT",
                            "perceptions": [],
                            "plannedTurns": [
                                {
                                    "route": [
                                        "8918aab709bffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 1
                                }
                            ],
                            "platformType": "destroyer",
                            "attributeValues": [
                                {
                                    "attrId": "asdic-dir",
                                    "attrType": "AttributeValueNumber",
                                    "value": 150
                                },
                                {
                                    "attrId": "att-torpedoes",
                                    "value": 25,
                                    "attrType": "AttributeValueNumber"
                                }
                            ],
                            "position": "8918aab7003ffff",
                            "uniqid": "a034a22t5431"
                        }/*,
                        {
                            "condition": "Working",
                            "contactId": "C164",
                            "history": [{
                                "route": [
                                    "8718aab55ffffff"
                                ],
                                "status": {
                                    "speedKts": 12,
                                    "state": "Transiting"
                                },
                                "turn": 1
                            }],
                            "locationPending": true,
                            "name": "TALN",
                            "attributeValues": [
                                {
                                    "attrId": "comm-battery",
                                    "value": 100,
                                    "attrType": "AttributeValueNumber"
                                }
                            ],
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
                            "platformType": "ssn",
                            "position": "8718aab60ffffff",
                            "uniqid": "a0prbr1141"
                        },
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
                            "locationPending": true,
                            "name": "SSN-2",
                            "perceptions": [],
                            "platformType": "ssn",
                            "position": "8318f2fffffffff",
                            "uniqid": "a0a975y4221"
                        }*/
                    ],
                    "color": "#00aaff",
                    "cssClass": "blue-1",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
                    "name": "Blue-1",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "canSubmitPlans": true,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "rks5zfzd6"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF B5",
                            "roleId": "rks5zfzdb"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "Blue-1",
                    "visibleTo": []
                },
                {
                    "assets": [
                        {
                            "condition": "Working",
                            "contactId": "C122",
                            "history": [],
                            "locationPending": true,
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
                            "locationPending": true,
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
                            "canSubmitPlans": true,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "rks5zfzdi"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y1",
                            "roleId": "rks5zfzdj"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y2",
                            "roleId": "rks5zfzdk"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y3",
                            "roleId": "rks5zfzdl"
                        },
                        {
                            "canSubmitPlans": false,
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y4",
                            "roleId": "rks5zfzdm"
                        },
                        {
                            "canSubmitPlans": false,
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
                }
            ],
            "name": "Forces",
            "selectedForce": ""
        },
        "overview": {
            "complete": false,
            "dirty": false,
            "gameDate": "2021-05-13T16:12",
            "gameDescription": "",
            "gameTurnTime": {
                "millis": 120000,
                "unit": "millis"
            },
            "mapConstraints": {
                "bounds": [[50.26, -19.6], [50.21, -19.40]],
                "cellLabelsStyle": "x_y_labels",
                //"gridCellsURL": "cells/atlantic-cells-6k.json",
                "h3res": 9,
                "maxNativeZoom": 7,
                "maxZoom": 16,
                "minZoom": 5,
                "minZoomHexes": 6,
                //"polygonAreasURL": "cells/atlantic-polygons.json",
                "targetDataset": "Atlantic",
                //"tileLayer": {
                //    "attribution": "Generated by QTiles",
                //    "url": "./atlantic_tiles/{z}/{x}/{y}.png"
                // },
                "tileDiameterMins": 64
            },
            "name": "Overview - settings",
            "realtimeTurnTime": 300000,
            "showAccessCodes": true,
            "timeWarning": 60000,
            "turnPresentation": "Turn-Pairs"
        },
        "platformTypes": {
            "complete": false,
            "dirty": false,
            "name": "Platform Types",
            "platformTypes": [
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "frigate.svg",
                    "name": "frigate",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Mixed"
                        },
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": true,
                            "name": "Passive"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "frigate-ta.svg",
                    "name": "frigate-ta",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Mixed"
                        },
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": true,
                            "name": "Passive"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "missile.svg",
                    "name": "Missile",
                    "states": [
                        {
                            "mobile": false,
                            "name": "Inactive"
                        },
                        {
                            "mobile": true,
                            "name": "Deployed"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "carrier.svg",
                    "name": "Carrier",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Air Ops"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "auxiliary.svg",
                    "name": "Auxiliary",
                    "speedKts": [
                        6,
                        12
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Supporting"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "destroyer.svg",
                    "orientation": [{
                        "attribute": "asdic-dir",
                        "origin": "absolute"
                    }, {}],
                    "name": "Destroyer",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Loitering"
                        }
                    ],
                    "turningCircle": 500,
                    "attributeTypes": [
                        {
                            "name": "ASDIC",
                            "attrId": "asdic-dir",
                            "description": "ASDIC orientation (absolute)",
                            "defaultValue": 0,
                            "editableByPlayer": true,
                            "attrType": "AttributeTypeNumber"
                        },
                        {
                            "name": "Torpedoes",
                            "attrId": "att-torpedoes",
                            "description": "Number of torpedoes remaining",
                            "defaultValue": 20,
                            "editableByPlayer": false,
                            "attrType": "AttributeTypeNumber"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "ssk.svg",
                    "name": "SSK",
                    "speedKts": [
                        6,
                        12,
                        18
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Aggressove"
                        },
                        {
                            "mobile": true,
                            "name": "Evasive"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "ssn.svg",
                    "name": "SSN",
                    "orientation": [{
                    }],
                    "attributeTypes": [
                        {
                            "name": "Battery Level",
                            "units": "%",
                            "description": "Charge remaining",
                            "attrId": "comm-battery",
                            "defaultValue": 100,
                            "editableByPlayer": false,
                            "attrType": "AttributeTypeNumber"
                        }
                    ],
                    "speedKts": [
                        6,
                        12,
                        18,
                        24
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Aggressove"
                        },
                        {
                            "mobile": true,
                            "name": "Evasive"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Inactive"
                    ],
                    "icon": "datum.svg",
                    "name": "datum",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "helicopter.svg",
                    "name": "Helicopter",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": false,
                            "name": "Landed"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "mpa.svg",
                    "name": "mpa",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": false,
                            "name": "Landed"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "fixed-wing-aircraft.svg",
                    "name": "Fixed Wing Aircraft",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": false,
                            "name": "Landed"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "merchant-vessel.svg",
                    "name": "Merchant vessel",
                    "speedKts": [
                        6,
                        12
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "boghammer.svg",
                    "name": "Boghammer",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "agi.svg",
                    "name": "AGI",
                    "speedKts": [
                        6,
                        12,
                        18
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "task-group.svg",
                    "name": "Task Group",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Stopped"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea"
                }
            ],
            "selectedType": ""
        }
    },
    "gameTurn": 3,
    "infoType": true,
    "messageType": "InfoMessage",
    "name": "wargame-kzod28lc",
    "phase": "planning",
    "turnEndTime": "2022-02-15T16:55:11+00:00",
    "wargameInitiated": false,
    "wargameTitle": "Small wargame"
}

export default wargame