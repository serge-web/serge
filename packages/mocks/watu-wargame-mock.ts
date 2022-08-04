import { Wargame } from "@serge/custom-types";

const wargame: Wargame = {
    "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
    "data": {
        "annotationIcons": {
            "markers": [
                {
                    "icon": "marker_unknown.svg",
                    "name": "Unknown",
                    "uniqid": "unk"
                },
                {
                    "icon": "marker_audio_visual.svg",
                    "name": "Audio-Visual",
                    "uniqid": "a/v"
                },
                {
                    "icon": "marker_audio.svg",
                    "name": "Audio",
                    "uniqid": "aud"
                },
                {
                    "icon": "marker_flash.svg",
                    "name": "Flash",
                    "uniqid": "flsh"
                },
                {
                    "icon": "marker_general.svg",
                    "name": "General",
                    "uniqid": "gen"
                },
                {
                    "icon": "marker_periscope.svg",
                    "name": "Periscope",
                    "uniqid": "peri"
                },
                {
                    "icon": "marker_plume.svg",
                    "name": "Plume",
                    "uniqid": "plum"
                }
            ]
        },
        "annotations": {
            "annotations": [
                {
                    "color": "#f00",
                    "description": "description for the annotation",
                    "iconId": "unk",
                    "label": "first marker",
                    "location": "8918aab76abffff",
                    "shadeRadius": 2,
                    "uniqid": "marker-one",
                    "visibleTo": [
                        "Blue-1"
                    ]
                },
                {
                    "color": "#099",
                    "description": "description for the second annotation",
                    "iconId": "gen",
                    "label": "second marker",
                    "location": "8918a84db3bffff",
                    "shadeRadius": 5,
                    "uniqid": "marker-two",
                    "visibleTo": [
                        "Blue-1",
                        "Red-1"
                    ]
                },
                {
                    "color": "#909",
                    "description": "description for the third annotation",
                    "iconId": "aud",
                    "label": "third marker",
                    "location": "8918aab2b0bffff",
                    "shadeRadius": 0,
                    "uniqid": "marker-three",
                    "visibleTo": [
                        "Red-1"
                    ]
                }
            ]
        },
        "channels": {
            "channels": [
                {
                    "channelType": "ChannelChat",
                    "name": "Blue Chat",
                    "participants": [
                        {
                            "force": "White Force",
                            "forceUniqid": "umpire",
                            "pType": "ParticipantChat",
                            "roles": [],
                            "subscriptionId": "lg34"
                        }
                    ],
                    "uniqid": "l6f4q0fy"
                },
                {
                    "channelType": "mapping",
                    "constraints": {
                        "bounds": [
                            [
                                60,
                                -10
                            ],
                            [
                                50,
                                0
                            ]
                        ],
                        "cellLabelsStyle": "x_y_labels",
                        "h3res": 6,
                        "maxNativeZoom": 8,
                        "maxZoom": 10,
                        "minZoom": 3
                    },
                    "name": "mapping",
                    "participants": [
                        {
                            "force": "White Force",
                            "forceUniqid": "umpire",
                            "pType": "ParticipantMapping",
                            "roles": [],
                            "subscriptionId": "hk2qc"
                        },
                        {
                            "controls": [
                                "control-all:Blue-1"
                            ],
                            "force": "Blue-1 Force",
                            "forceUniqid": "Blue-1",
                            "pType": "ParticipantMapping",
                            "roles": [
                                "blueCO"
                            ],
                            "subscriptionId": "7i9bq"
                        },
                        {
                            "controls": [
                                "nortID"
                            ],
                            "force": "Blue-1 Force",
                            "forceUniqid": "Blue-1",
                            "pType": "ParticipantMapping",
                            "roles": [
                                "nortCO"
                            ],
                            "subscriptionId": "ewhs"
                        }
                    ],
                    "uniqid": "l6f4pk6e"
                }
            ],
            "dirty": false,
            "name": "Channels",
            "selectedChannel": ""
        },
        "forces": {
            "dirty": false,
            "forces": [
                {
                    "color": "#FCFBEE",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/umpireDefault.png",
                    "name": "White Force",
                    "overview": "Umpire force.",
                    "roles": [
                        {
                            "isGameControl": true,
                            "isInsightViewer": true,
                            "isObserver": true,
                            "isRFIManager": false,
                            "name": "Game Control",
                            "roleId": "umpire-GC"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": true,
                            "isObserver": false,
                            "isRFIManager": true,
                            "name": "RFI Mgr",
                            "roleId": "rks5zfzd3"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Blue HHQ",
                            "roleId": "umpire-blue-hq"
                        },
                        {
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
                            "attributeValues": [
                                {
                                    "attrId": "asdic-dir",
                                    "attrType": "AttributeValueNumber",
                                    "value": 150
                                },
                                {
                                    "attrId": "att-torpedoes",
                                    "attrType": "AttributeValueNumber",
                                    "value": 25
                                }
                            ],
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
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "turn": 2
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
                            "hosting": [
                                {
                                    "condition": "Full capability",
                                    "contactId": "C572",
                                    "history": [],
                                    "name": "Merlin",
                                    "perceptions": [
                                        {
                                            "by": "Red-1",
                                            "force": "Blue-1",
                                            "typeId": "a8"
                                        }
                                    ],
                                    "plannedTurns": [],
                                    "platformType": "helicopter",
                                    "platformTypeId": "a8",
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "uniqid": "nort-merlin"
                                },
                                {
                                    "condition": "Full capability",
                                    "contactId": "C591",
                                    "history": [],
                                    "name": "Dart 42",
                                    "perceptions": [],
                                    "plannedTurns": [],
                                    "platformType": "Unmanned-Airborne-Vehicle",
                                    "platformTypeId": "a10",
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "uniqid": "nort-dart"
                                }
                            ],
                            "name": "NORT",
                            "perceptions": [
                                {
                                    "by": "Red-1",
                                    "force": "Blue-1",
                                    "typeId": "a4"
                                }
                            ],
                            "plannedTurns": [
                                {
                                    "route": [
                                        "8918a84db3bffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 1
                                },
                                {
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "turn": 2
                                }
                            ],
                            "platformTypeId": "a6",
                            "position": "8918aab7003ffff",
                            "uniqid": "nortID"
                        },
                        {
                            "attributeValues": [
                                {
                                    "attrId": "comm-battery",
                                    "attrType": "AttributeValueNumber",
                                    "value": 100
                                },
                                {
                                    "attrId": "attrl5w7ogaw",
                                    "attrType": "AttributeValueEnum",
                                    "value": "Deep"
                                }
                            ],
                            "condition": "Working",
                            "contactId": "C164",
                            "history": [
                                {
                                    "route": [
                                        "8918aab604bffff"
                                    ],
                                    "status": {
                                        "speedKts": 6,
                                        "state": "Transiting"
                                    },
                                    "turn": 1
                                },
                                {
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "turn": 2
                                },
                                {
                                    "route": [
                                        "8918aab6283ffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting"
                                    },
                                    "turn": 3
                                }
                            ],
                            "name": "TALN",
                            "perceptions": [
                                {
                                    "by": "Red-1",
                                    "force": "Blue-1",
                                    "name": "Blue Warship",
                                    "typeId": "a3"
                                },
                                {
                                    "by": "Red-2",
                                    "force": "Blue-1",
                                    "typeId": "a4"
                                }
                            ],
                            "platformTypeId": "a8",
                            "position": "8918aab7547ffff",
                            "uniqid": "talnID"
                        },
                        {
                            "attributeValues": [
                                {
                                    "attrId": "comm-battery",
                                    "attrType": "AttributeValueNumber",
                                    "value": 100
                                },
                                {
                                    "attrId": "attrl5w7ogaw",
                                    "attrType": "AttributeValueEnum",
                                    "value": "Deep"
                                }
                            ],
                            "condition": "Working",
                            "contactId": "C866",
                            "history": [
                                {
                                    "route": [
                                        "8918aab648bffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting a"
                                    },
                                    "turn": 1
                                },
                                {
                                    "route": [
                                        "8918aab6447ffff"
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
                            "platformTypeId": "a8",
                            "position": "8918aab66bbffff",
                            "uniqid": "a0a975y4221"
                        },
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
                                                    "by": "Red-1",
                                                    "force": "Blue-1",
                                                    "name": "Unknown UAV",
                                                    "typeId": "a10"
                                                }
                                            ],
                                            "plannedTurns": [],
                                            "platformType": "Unmanned-Airborne-Vehicle",
                                            "platformTypeId": "a10",
                                            "status": {
                                                "state": "Landed"
                                            },
                                            "uniqid": "tg-frig-uav1"
                                        },
                                        {
                                            "condition": "Full capability",
                                            "contactId": "C932",
                                            "history": [],
                                            "name": "Dart 46",
                                            "perceptions": [],
                                            "plannedTurns": [],
                                            "platformType": "Unmanned-Airborne-Vehicle",
                                            "platformTypeId": "a10",
                                            "status": {
                                                "state": "Landed"
                                            },
                                            "uniqid": "a0pra17943"
                                        }
                                    ],
                                    "name": "Frigate A",
                                    "perceptions": [
                                        {
                                            "by": "Red-1",
                                            "force": "Blue-1",
                                            "name": "Frigate A Perceived Name",
                                            "typeId": "a3"
                                        }
                                    ],
                                    "platformType": "frigate",
                                    "platformTypeId": "a3",
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "uniqid": "tg-frigate"
                                },
                                {
                                    "condition": "Full capability",
                                    "contactId": "C653",
                                    "history": [],
                                    "name": "MCM Delta",
                                    "perceptions": [
                                        {
                                            "by": "Red-1",
                                            "force": "Blue-1",
                                            "name": "Blue MCM",
                                            "typeId": "a9"
                                        }
                                    ],
                                    "platformType": "MCMV",
                                    "platformTypeId": "a9",
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "uniqid": "tg-mcm"
                                }
                            ],
                            "condition": "Full capability",
                            "contactId": "C713",
                            "history": [
                                {
                                    "route": [
                                        "8918aab0c2fffff"
                                    ],
                                    "status": {
                                        "speedKts": 10,
                                        "state": "Transiting"
                                    },
                                    "turn": 0
                                },
                                {
                                    "route": [
                                        "8918aab08b3ffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 1
                                },
                                {
                                    "route": [
                                        "8918aab0d63ffff"
                                    ],
                                    "status": {
                                        "speedKts": 30,
                                        "state": "Transiting"
                                    },
                                    "turn": 2
                                }
                            ],
                            "name": "CTF 511",
                            "perceptions": [
                                {
                                    "by": "Red",
                                    "force": "Blue-1",
                                    "name": "BRIT",
                                    "typeId": "a11"
                                }
                            ],
                            "plannedTurns": [
                                {
                                    "route": [
                                        "8918aab0dafffff",
                                        "8918aab0db7ffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 4
                                },
                                {
                                    "route": [
                                        "8918aab766fffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 5
                                }
                            ],
                            "platformType": "task-group",
                            "platformTypeId": "a16",
                            "position": "8918aab0d07ffff",
                            "status": {
                                "speedKts": 20,
                                "state": "Transiting"
                            },
                            "uniqid": "a0pra5431"
                        }
                    ],
                    "color": "#00aaff",
                    "cssClass": "blue-1",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
                    "name": "Blue-1 Force",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "blueCO"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "NORT CO",
                            "roleId": "nortCO"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Comms",
                            "roleId": "blue-comms"
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
                            "history": [
                                {
                                    "status": {
                                        "state": "Moored 1"
                                    },
                                    "turn": 1
                                },
                                {
                                    "status": {
                                        "state": "Scanning 1"
                                    },
                                    "turn": 2
                                }
                            ],
                            "name": "AGI",
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
                            "plannedTurns": [
                                {
                                    "route": [
                                        "8918a84db47ffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting a"
                                    },
                                    "turn": 3
                                },
                                {
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "turn": 4
                                }
                            ],
                            "platformType": "agi",
                            "platformTypeId": "a15",
                            "position": "8918a84db3bffff",
                            "uniqid": "red-AGI"
                        },
                        {
                            "condition": "Working",
                            "contactId": "C442",
                            "history": [
                                {
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "turn": 1
                                },
                                {
                                    "status": {
                                        "state": "Refueling"
                                    },
                                    "turn": 2
                                }
                            ],
                            "name": "MPA 2",
                            "perceptions": [
                                {
                                    "by": "Blue-1",
                                    "force": "Red-1",
                                    "typeId": "a12"
                                },
                                {
                                    "by": "Blue-2",
                                    "force": "Red-1"
                                }
                            ],
                            "plannedTurns": [
                                {
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "turn": 2
                                }
                            ],
                            "platformTypeId": "a11",
                            "position": "8918a84db33ffff",
                            "uniqid": "red-mpa-2"
                        }
                    ],
                    "color": "#f00",
                    "cssClass": "red-1",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
                    "name": "Red-1 Force",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "red-CO"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y1",
                            "roleId": "rks5zfzdj"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y2",
                            "roleId": "rks5zfzdk"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y3",
                            "roleId": "rks5zfzdl"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y4",
                            "roleId": "rks5zfzdm"
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
                }
            ],
            "name": "Forces",
            "selectedForce": ""
        },
        "overview": {
            "dirty": false,
            "gameDate": "2021-05-13T16:12",
            "gameDescription": "",
            "gameTurnTime": {
                "millis": 240000,
                "unit": "millis"
            },
            "name": "Overview - settings",
            "realtimeTurnTime": 300000,
            "showAccessCodes": true,
            "timeWarning": 60000,
            "turnPresentation": "Turn-Pairs"
        },
        "platformTypes": {
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
                    "travelMode": "sea",
                    "uniqid": "a1"
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
                    "travelMode": "sea",
                    "uniqid": "a2"
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
                    "travelMode": "air",
                    "uniqid": "a3"
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
                    "travelMode": "sea",
                    "uniqid": "a4"
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
                    "travelMode": "sea",
                    "uniqid": "a5"
                },
                {
                    "attributeTypes": [
                        {
                            "attrId": "asdic-dir",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 0,
                            "description": "ASDIC orientation (absolute)",
                            "editableByPlayer": true,
                            "name": "ASDIC"
                        },
                        {
                            "attrId": "att-torpedoes",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 20,
                            "description": "Number of torpedoes remaining",
                            "editableByPlayer": false,
                            "name": "Torpedoes"
                        }
                    ],
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "destroyer.svg",
                    "name": "Destroyer",
                    "orientation": [
                        {
                            "attribute": "asdic-dir",
                            "origin": "absolute"
                        },
                        {}
                    ],
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30,
                        36
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
                    "travelMode": "sea",
                    "turningCircle": 500,
                    "uniqid": "a6"
                },
                {
                    "attributeTypes": [
                        {
                            "attrId": "attrl5w88pq6",
                            "attrType": "AttributeTypeEnum",
                            "description": "Platform Depth",
                            "editableByPlayer": true,
                            "name": "Depth",
                            "values": [
                                "Deep",
                                "PD",
                                "Shallow"
                            ]
                        }
                    ],
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
                            "name": "Deep"
                        },
                        {
                            "mobile": true,
                            "name": "PD"
                        },
                        {
                            "mobile": true,
                            "name": "Shallow"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a7"
                },
                {
                    "attributeTypes": [
                        {
                            "attrId": "comm-battery",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Charge remaining",
                            "editableByPlayer": true,
                            "name": "Battery Level",
                            "units": "%"
                        },
                        {
                            "attrId": "attrl5w7ogaw",
                            "attrType": "AttributeTypeEnum",
                            "description": "Platform Depth",
                            "editableByPlayer": true,
                            "name": "Depth",
                            "values": [
                                "Deep",
                                "PD",
                                "Shallow"
                            ]
                        }
                    ],
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "ssn.svg",
                    "name": "SSN",
                    "orientation": [
                        {}
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
                            "name": "PD"
                        },
                        {
                            "mobile": true,
                            "name": "Shallow"
                        },
                        {
                            "mobile": true,
                            "name": "Deep"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a8"
                },
                {
                    "conditions": [
                        "Clearing",
                        "Transiting",
                        "Inactive"
                    ],
                    "icon": "mcmv.svg",
                    "name": "MCMV",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a9"
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
                    "travelMode": "air",
                    "uniqid": "a10"
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
                    "travelMode": "air",
                    "uniqid": "a11"
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
                    "travelMode": "air",
                    "uniqid": "a12"
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
                    "travelMode": "sea",
                    "uniqid": "a13"
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
                    "travelMode": "sea",
                    "uniqid": "a14"
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
                    "travelMode": "sea",
                    "uniqid": "a15"
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
                    "travelMode": "sea",
                    "uniqid": "a16"
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
    "wargameList": [],
    "wargameTitle": "Small wargame"
}

export default wargame