import { Wargame } from "@serge/custom-types";

const game: Wargame = {
    "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
    "wargameList": [],
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
                },
                {
                    "icon": "marker_wake.svg",
                    "name": "Wake",
                    "uniqid": "wak"
                },
                {
                    "icon": "marker_visual.svg",
                    "name": "Visual",
                    "uniqid": "vis"
                }
            ]
        },
        "channels": {
            "channels": [
                {
                    "channelType": "ChannelPlanning",
                    "name": "Planning",
                    "constraints": {
                        "bounds": [
                            [
                                55,
                                22
                            ],
                            [
                                2,
                                86
                            ]
                        ],
                        "maxNativeZoom": 7,
                        "maxZoom": 7,
                        "minZoom": 3,
                        "tileLayer": {
                            "attribution": '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                            "url": 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        }
                    },
                    "participants": [
                        {
                            "forceUniqid": "F-Blue",
                            "pType": "ParticipantPlanning",
                            "roles": [],
                            "subscriptionId": "huk3qr",
                            "templates": [
                                {
                                    "_id": "k16e-maritime",
                                    "title": "Maritime Activity"
                                },
                                {
                                    "_id": "k16e-land",
                                    "title": "Land Activity"
                                },
                                {
                                    "_id": "k16e-air",
                                    "title": "Air Activity"
                                },
                                {
                                    "_id": "k16e-other",
                                    "title": "Other Activity"
                                }
                            ]
                        },
                        {
                            "forceUniqid": "F-Red",
                            "pType": "ParticipantPlanning",
                            "roles": [],
                            "subscriptionId": "h123qr",
                            "templates": [
                                {
                                    "_id": "k16e-maritime",
                                    "title": "Maritime Activity"
                                },
                                {
                                    "_id": "k16e-land",
                                    "title": "Land Activity"
                                },
                                {
                                    "_id": "k16e-air",
                                    "title": "Air Activity"
                                },
                                {
                                    "_id": "k16e-other",
                                    "title": "Other Activity"
                                }
                            ]
                        },
                        {
                            "forceUniqid": "umpire",
                            "pType": "ParticipantPlanning",
                            "roles": [
                                "rkrlw6f5f"
                            ],
                            "subscriptionId": "r4y1p",
                            "templates": []
                        }
                    ],
                    "uniqid": "channel-blue-planning"
                },
                {
                    "channelType": "ChannelChat",
                    "name": "Red",
                    "participants": [
                        {
                            "forceUniqid": "F-Red",
                            "pType": "ParticipantChat",
                            "roles": [],
                            "subscriptionId": "7bayi"
                        },
                        {
                            "forceUniqid": "umpire",
                            "pType": "ParticipantChat",
                            "roles": [
                                "rkrlw6f5f"
                            ],
                            "subscriptionId": "h2my2k"
                        }
                    ],
                    "uniqid": "channel-koirfxsx"
                },
                {
                    "channelType": "ChannelChat",
                    "name": "Blue",
                    "participants": [
                        {
                            "forceUniqid": "F-Blue",
                            "pType": "ParticipantChat",
                            "roles": [],
                            "subscriptionId": "7basdfyi"
                        },
                        {
                            "forceUniqid": "umpire",
                            "pType": "ParticipantChat",
                            "roles": [
                                "rkrlw6f5f"
                            ],
                            "subscriptionId": "h2my2k"
                        }
                    ],
                    "uniqid": "channel-koirf123"
                },
                {
                    "channelType": "ChannelCustom",
                    "name": "Blue RFI",
                    "participants": [
                        {
                            "forceUniqid": "F-Blue",
                            "pType": "ParticipantCustom",
                            "roles": [],
                            "subscriptionId": "etkkn",
                            "templates": [
                                {
                                    "_id": "2021-08-23T07:58:43.425Z",
                                    "title": "RFI"
                                },
                                {
                                    "_id": "2021-08-23T07:58:16.202Z",
                                    "title": "Request Infra"
                                },
                                {
                                    "_id": "k16eedki",
                                    "title": "Message"
                                }
                            ]
                        },
                        {
                            "forceUniqid": "umpire",
                            "pType": "ParticipantCustom",
                            "roles": [],
                            "subscriptionId": "qhnqr",
                            "templates": [
                                {
                                    "_id": "k16eedkj",
                                    "title": "SME Comment"
                                },
                                {
                                    "_id": "k16eedki",
                                    "title": "Message"
                                }
                            ]
                        }
                    ],
                    "uniqid": "channel-koirh7ok"
                },
                {
                    "channelType": "ChannelCustom",
                    "name": "Red RFI",
                    "participants": [
                        {
                            "forceUniqid": "umpire",
                            "pType": "ParticipantCustom",
                            "roles": [],
                            "subscriptionId": "lity",
                            "templates": [
                                {
                                    "_id": "k16eedkj",
                                    "title": "SME Comment"
                                }
                            ]
                        },
                        {
                            "forceUniqid": "F-Red",
                            "pType": "ParticipantCustom",
                            "roles": [],
                            "subscriptionId": "3b3ww",
                            "templates": [
                                {
                                    "_id": "2021-08-23T07:58:43.425Z",
                                    "title": "RFI"
                                },
                                {
                                    "_id": "k16eedkl",
                                    "title": "Chat"
                                }
                            ]
                        }
                    ],
                    "uniqid": "channel-koirji8u"
                },
                {
                    "channelType": "mapping",
                    "constraints": {
                        "bounds": [
                            [
                                -3,
                                115
                            ],
                            [
                                -22,
                                150
                            ]
                        ],
                        "cellLabelsStyle": "x_y_labels",
                        "h3res": 5,
                        "maxNativeZoom": 17,
                        "maxZoom": 17,
                        "minZoom": 2,
                        "tileLayer": {
                            "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                            "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    },
                    "name": "mapping",
                    "participants": [
                        {
                            "controls": [],
                            "forceUniqid": "umpire",
                            "pType": "ParticipantMapping",
                            "roles": [
                                "pl63jl7so"
                            ],
                            "subscriptionId": "qdaad"
                        },
                        {
                            "controls": [],
                            "forceUniqid": "F-Blue",
                            "pType": "ParticipantMapping",
                            "roles": [
                                "pl65060rb"
                            ],
                            "subscriptionId": "k6co"
                        }
                    ],
                    "uniqid": "l650fqoy"
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
                    "iconURL": "default_img/umpireDefault.png",
                    "name": "White",
                    "overview": "Umpire force.",
                    "roles": [
                        {
                            "isGameControl": true,
                            "isInsightViewer": true,
                            "isObserver": true,
                            "name": "Game Control",
                            "roleId": "rkrlw6f5f"
                        }
                    ],
                    "umpire": true,
                    "uniqid": "umpire"
                },
                {
                    "assets": [
                        {
                            "uniqid": "a161",
                            "contactId": "CA2817",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Blue:0",
                                    "typeId": "id-task-group",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "id-task-group",
                            "condition": "working",
                            "status": {
                                "state": "Evasive"
                            },
                            "position": "8572f36bfffffff",
                            "location": [
                                -2.7755,
                                140.9611
                            ],
                            "owner": "3rk116f53",
                            "comprising": [
                                {
                                    "uniqid": "a162",
                                    "contactId": "CA3371",
                                    "name": "Blue:1",
                                    "perceptions": [
                                        {
                                            "by": "F-Red",
                                            "name": "CA3371",
                                            "force": "F-Blue"
                                        }
                                    ],
                                    "platformTypeId": "id-helo",
                                    "condition": "working",
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "position": "857281a3fffffff",
                                    "location": [
                                        -2.6019,
                                        136.5223
                                    ],
                                    "owner": "rk116f53"
                                },
                                {
                                    "uniqid": "a163",
                                    "contactId": "CA705",
                                    "name": "Blue:2",
                                    "perceptions": [
                                        {
                                            "by": "F-Red",
                                            "name": "CA705",
                                            "force": "F-Blue"
                                        }
                                    ],
                                    "platformTypeId": "id-task-group",
                                    "condition": "working",
                                    "status": {
                                        "state": "Transiting"
                                    },
                                    "position": "859cd3a3fffffff",
                                    "location": [
                                        -6.5183,
                                        141.1908
                                    ],
                                    "owner": "rk116f53"
                                },
                                {
                                    "uniqid": "a164",
                                    "contactId": "CA1161",
                                    "name": "Blue:3",
                                    "perceptions": [
                                        {
                                            "by": "F-Green",
                                            "name": "CA1161",
                                            "force": "F-Blue"
                                        }
                                    ],
                                    "platformTypeId": "id-mcm",
                                    "condition": "working",
                                    "status": {
                                        "state": "Transiting"
                                    },
                                    "position": "859c832bfffffff",
                                    "location": [
                                        -6.9061,
                                        147.0898
                                    ],
                                    "owner": "rk116f53"
                                }
                            ]
                        },
                        {
                            "uniqid": "a165",
                            "contactId": "CA2203",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2203",
                                    "typeId": "id-missile"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "859c99affffffff",
                            "location": [
                                -5.607,
                                145.7545
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a166",
                            "contactId": "CA3142",
                            "name": "Blue:5",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA3142",
                                    "typeId": "id-mpa",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "status": {
                                "state": "Active"
                            },
                            "position": "859cae1bfffffff",
                            "location": [
                                -9.9158,
                                147.5427
                            ],
                            "owner": "1rk116f53"
                        },
                        {
                            "uniqid": "a167",
                            "contactId": "CA2120",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA2120",
                                    "typeId": "id-merchant",
                                    "force": "F-Green"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Blue:6",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "859cc363fffffff",
                            "location": [
                                -8.0633,
                                139.3171
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a168",
                            "contactId": "CA2830",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:7",
                                    "typeId": "id-fisher"
                                }
                            ],
                            "platformTypeId": "id-fisher",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "85728c1bfffffff",
                            "location": [
                                -2.7856,
                                137.2844
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a169",
                            "contactId": "CA2767",
                            "name": "Blue:8",
                            "perceptions": [],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859ca313fffffff",
                            "location": [
                                -9.9615,
                                148.5793
                            ],
                            "owner": "rk116f51"
                        },
                        {
                            "uniqid": "a170",
                            "contactId": "CA2499",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA2499",
                                    "typeId": "id-mpa",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "id-mpa",
                            "condition": "working",
                            "status": {
                                "state": "Active"
                            },
                            "position": "859c8c17fffffff",
                            "location": [
                                -8.4283,
                                145.878
                            ],
                            "owner": "rk116f53"
                        },
                        {
                            "uniqid": "a171",
                            "contactId": "CA24",
                            "name": "Blue:10",
                            "perceptions": [],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "status": {
                                "state": "Loitering"
                            },
                            "position": "859c8113fffffff",
                            "location": [
                                -8.2398,
                                147.171
                            ],
                            "owner": "rk116f51"
                        },
                        {
                            "uniqid": "a172",
                            "contactId": "CA944",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA944",
                                    "typeId": "id-carrier"
                                }
                            ],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Air Ops"
                            },
                            "position": "859ca04ffffffff",
                            "location": [
                                -10.1887,
                                149.2994
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a173",
                            "contactId": "CA2746",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:12",
                                    "typeId": "id-frigate"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859c8bbbfffffff",
                            "location": [
                                -6.8859,
                                144.4062
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a174",
                            "contactId": "CA155",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA155",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA155",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-mpa",
                            "condition": "working",
                            "status": {
                                "state": "Active"
                            },
                            "position": "859c8e93fffffff",
                            "location": [
                                -7.7565,
                                146.6751
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a175",
                            "contactId": "CA1555",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA1555",
                                    "typeId": "id-mcm"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "859cc2cffffffff",
                            "location": [
                                -8.1733,
                                140.9793
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a176",
                            "contactId": "CA1941",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1941"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "status": {
                                "state": "Aggressove"
                            },
                            "position": "8572d4cbfffffff",
                            "location": [
                                -3.3935,
                                139.9287
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a177",
                            "contactId": "CA540",
                            "name": "Blue:16",
                            "perceptions": [],
                            "platformTypeId": "id-uav",
                            "condition": "working",
                            "status": {
                                "state": "Landed"
                            },
                            "position": "8572d25bfffffff",
                            "location": [
                                -5.6573,
                                140.2438
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a178",
                            "contactId": "CA846",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:17",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "status": {
                                "state": "Stopped"
                            },
                            "position": "859ca047fffffff",
                            "location": [
                                -10.3237,
                                149.3719
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a179",
                            "contactId": "CA2611",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2611",
                                    "typeId": "id-mpa"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "status": {
                                "state": "Landed"
                            },
                            "position": "859cd82ffffffff",
                            "location": [
                                -6.3233,
                                138.5853
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a180",
                            "contactId": "CA1907",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1907",
                                    "typeId": "id-missile"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "status": {
                                "state": "Deployed"
                            },
                            "position": "859cd5bbfffffff",
                            "location": [
                                -8.4284,
                                141.6774
                            ],
                            "owner": "blue-logs"
                        },
                        {
                            "uniqid": "a181",
                            "contactId": "CA2869",
                            "name": "Blue:20",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "85729d1bfffffff",
                            "location": [
                                -5.0168,
                                136.4064
                            ],
                            "owner": "2rk116f53",
                            "comprising": []
                        }
                    ],
                    "color": "#00F",
                    "dirty": false,
                    "iconURL": "default_img/umpireDefault.png",
                    "name": "Blue",
                    "overview": "Blue force.",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Mar-1",
                            "roleId": "rk116f5e"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Mar-2",
                            "roleId": "rk116f51"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Mar-3",
                            "roleId": "rk116f52"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Mar-4",
                            "roleId": "rk116f53"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Air-1",
                            "roleId": "1rk116f53"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Air-2",
                            "roleId": "2rk116f53"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Air-3",
                            "roleId": "3rk116f53"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Logs",
                            "roleId": "blue-logs"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "F-Blue"
                },
                {
                    "assets": [
                        {
                            "uniqid": "a101",
                            "contactId": "CA1340",
                            "name": "Red Force:0",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:0",
                                    "typeId": "id-task-group"
                                }
                            ],
                            "platformTypeId": "id-task-group",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "8594e6d3fffffff",
                            "location": [
                                -14.6533,
                                126.839
                            ],
                            "owner": "rkr226f5a",
                            "comprising": [
                                {
                                    "uniqid": "a102",
                                    "contactId": "CA410",
                                    "name": "Red Force:1",
                                    "perceptions": [
                                        {
                                            "by": "F-Blue",
                                            "name": "Red Force:1",
                                            "typeId": "id-ssk"
                                        }
                                    ],
                                    "platformTypeId": "id-ssk",
                                    "condition": "working",
                                    "status": {
                                        "state": "Aggressove"
                                    },
                                    "position": "8594a92bfffffff",
                                    "location": [
                                        -16.1924,
                                        125.1881
                                    ],
                                    "owner": "rkr226f5e"
                                },
                                {
                                    "uniqid": "a103",
                                    "contactId": "CA1336",
                                    "name": "Red Force:2",
                                    "perceptions": [
                                        {
                                            "by": "F-Blue",
                                            "name": "CA1336"
                                        },
                                        {
                                            "by": "F-Green",
                                            "name": "CA1336"
                                        }
                                    ],
                                    "platformTypeId": "id-helo",
                                    "condition": "working",
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "position": "8594c66bfffffff",
                                    "location": [
                                        -17.9772,
                                        128.4718
                                    ],
                                    "owner": "rkr226f5c"
                                },
                                {
                                    "uniqid": "a104",
                                    "contactId": "CA981",
                                    "name": "Red Force:3",
                                    "perceptions": [
                                        {
                                            "by": "F-Blue",
                                            "name": "Red Force:3",
                                            "force": "F-Red"
                                        },
                                        {
                                            "by": "F-Green",
                                            "name": "Red Force:3",
                                            "typeId": "id-merchant",
                                            "force": "F-Red"
                                        }
                                    ],
                                    "platformTypeId": "id-merchant",
                                    "condition": "working",
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "position": "859d5453fffffff",
                                    "location": [
                                        -20.4815,
                                        145.4981
                                    ],
                                    "owner": "rkr226f5b"
                                }
                            ]
                        },
                        {
                            "uniqid": "a105",
                            "contactId": "CA1127",
                            "name": "Red Force:4",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1127",
                                    "typeId": "id-agi",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-agi",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "859c4867fffffff",
                            "location": [
                                -15.5391,
                                134.0721
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a106",
                            "contactId": "CA2949",
                            "name": "Red Force:5",
                            "perceptions": [],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Mixed"
                            },
                            "position": "859d424bfffffff",
                            "location": [
                                -20.6632,
                                143.0661
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a107",
                            "contactId": "CA1222",
                            "name": "Red Force:6",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1222",
                                    "typeId": "id-missile"
                                }
                            ],
                            "platformTypeId": "id-missile",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "85948d17fffffff",
                            "location": [
                                -17.6467,
                                125.2749
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a108",
                            "contactId": "CA478",
                            "name": "Red Force:7",
                            "perceptions": [],
                            "platformTypeId": "id-frigate",
                            "condition": "working",
                            "status": {
                                "state": "Mixed"
                            },
                            "position": "859483a3fffffff",
                            "location": [
                                -18.5925,
                                122.8959
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a109",
                            "contactId": "CA1147",
                            "name": "Red Force:8",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:8",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-ssn",
                            "condition": "working",
                            "status": {
                                "state": "Aggressove"
                            },
                            "position": "859d5e33fffffff",
                            "location": [
                                -19.3355,
                                142.1253
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a110",
                            "contactId": "CA517",
                            "name": "Red Force:9",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA517",
                                    "typeId": "id-uav"
                                }
                            ],
                            "platformTypeId": "id-uav",
                            "condition": "working",
                            "status": {
                                "state": "Airborne"
                            },
                            "position": "8594c69bfffffff",
                            "location": [
                                -17.0936,
                                128.1529
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a111",
                            "contactId": "CA670",
                            "name": "Red Force:10",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA670"
                                }
                            ],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Active"
                            },
                            "position": "859c6817fffffff",
                            "location": [
                                -18.5329,
                                135.4363
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a112",
                            "contactId": "CA523",
                            "name": "Red Force:11",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA523"
                                }
                            ],
                            "platformTypeId": "id-destroyer",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859d424bfffffff",
                            "location": [
                                -20.6715,
                                142.9809
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a113",
                            "contactId": "CA994",
                            "name": "Red Force:12",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA994",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-mpa",
                            "condition": "working",
                            "status": {
                                "state": "Active"
                            },
                            "position": "859c64d3fffffff",
                            "location": [
                                -20.0229,
                                139.4415
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a114",
                            "contactId": "CA847",
                            "name": "Red Force:13",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA847",
                                    "typeId": "id-boghammer",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA847"
                                }
                            ],
                            "platformTypeId": "id-boghammer",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "8594f077fffffff",
                            "location": [
                                -17.0157,
                                126.8957
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a115",
                            "contactId": "CA1763",
                            "name": "Red Force:14",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1763",
                                    "typeId": "id-missile",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1763",
                                    "typeId": "id-missile"
                                }
                            ],
                            "platformTypeId": "id-missile",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "85a79bb3fffffff",
                            "location": [
                                -21.0232,
                                117.7434
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a116",
                            "contactId": "CA1764",
                            "name": "Red Force:15",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1764",
                                    "typeId": "id-ssk"
                                }
                            ],
                            "platformTypeId": "id-ssk",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "8594c5d3fffffff",
                            "location": [
                                -16.1699,
                                129.3162
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a117",
                            "contactId": "CA864",
                            "name": "Red Force:16",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:16",
                                    "typeId": "id-mcm",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "id-mcm",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "85b8d96ffffffff",
                            "location": [
                                -20.6765,
                                124.4507
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a118",
                            "contactId": "CA1326",
                            "name": "Red Force:17",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1326",
                                    "typeId": "id-task-group",
                                    "force": "F-Green"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1326",
                                    "typeId": "id-task-group",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-task-group",
                            "condition": "working",
                            "status": {
                                "state": "Stopped"
                            },
                            "position": "859d4c6ffffffff",
                            "location": [
                                -21.941,
                                139.571
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a119",
                            "contactId": "CA1782",
                            "name": "Red Force:18",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:18",
                                    "typeId": "id-carrier",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "85b89123fffffff",
                            "location": [
                                -21.138,
                                134.6604
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a120",
                            "contactId": "CA3126",
                            "name": "Red Force:19",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA3126",
                                    "typeId": "id-fixed-wing"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA3126",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-fixed-wing",
                            "condition": "working",
                            "status": {
                                "state": "Active"
                            },
                            "position": "8594d953fffffff",
                            "location": [
                                -19.8426,
                                131.2525
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a121",
                            "contactId": "CA1528",
                            "name": "Red Force:20",
                            "perceptions": [],
                            "platformTypeId": "id-task-group",
                            "condition": "working",
                            "status": {
                                "state": "Loitering"
                            },
                            "position": "85a6a613fffffff",
                            "location": [
                                -20.7848,
                                117.0214
                            ],
                            "owner": "rkr226f5c",
                            "comprising": [
                                {
                                    "uniqid": "a122",
                                    "contactId": "CA622",
                                    "name": "Red Force:21",
                                    "perceptions": [
                                        {
                                            "by": "F-Blue",
                                            "name": "CA622"
                                        },
                                        {
                                            "by": "F-Green",
                                            "name": "CA622",
                                            "typeId": "id-frigate-ta",
                                            "force": "F-Red"
                                        }
                                    ],
                                    "platformTypeId": "id-frigate-ta",
                                    "condition": "working",
                                    "status": {
                                        "state": "Passive"
                                    },
                                    "position": "859480d7fffffff",
                                    "location": [
                                        -17.7941,
                                        121.6408
                                    ],
                                    "owner": "rkr226f5b"
                                },
                                {
                                    "uniqid": "a123",
                                    "contactId": "CA2476",
                                    "name": "Red Force:22",
                                    "perceptions": [
                                        {
                                            "by": "F-Blue",
                                            "name": "Red Force:2",
                                            "typeId": "id-mcm"
                                        },
                                        {
                                            "by": "F-Green",
                                            "name": "CA2476"
                                        }
                                    ],
                                    "platformTypeId": "id-mcm",
                                    "condition": "working",
                                    "status": {
                                        "state": "Transiting"
                                    },
                                    "position": "8594aa83fffffff",
                                    "location": [
                                        -16.6241,
                                        123.3038
                                    ],
                                    "owner": "rkr226f5c"
                                },
                                {
                                    "uniqid": "a124",
                                    "contactId": "CA2830",
                                    "name": "Red Force:23",
                                    "perceptions": [],
                                    "platformTypeId": "id-frigate-ta",
                                    "condition": "working",
                                    "status": {
                                        "state": "Active"
                                    },
                                    "position": "859c4653fffffff",
                                    "location": [
                                        -16.0486,
                                        138.873
                                    ],
                                    "owner": "rkr226f5a"
                                }
                            ]
                        },
                        {
                            "uniqid": "a125",
                            "contactId": "CA470",
                            "name": "Red Force:24",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA470",
                                    "typeId": "id-frigate-ta",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA470"
                                }
                            ],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "85949683fffffff",
                            "location": [
                                -19.4518,
                                119.0578
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a126",
                            "contactId": "CA755",
                            "name": "Red Force:25",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA755"
                                }
                            ],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "85948017fffffff",
                            "location": [
                                -17.8384,
                                122.0714
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a127",
                            "contactId": "CA1355",
                            "name": "Red Force:26",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:6",
                                    "typeId": "id-missile",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-missile",
                            "condition": "working",
                            "status": {
                                "state": "Deployed"
                            },
                            "position": "859c29bbfffffff",
                            "location": [
                                -17.7937,
                                142.0832
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a128",
                            "contactId": "CA2880",
                            "name": "Red Force:27",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2880",
                                    "typeId": "id-auxiliary",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859c744ffffffff",
                            "location": [
                                -17.1496,
                                141.2905
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a129",
                            "contactId": "CA699",
                            "name": "Red Force:28",
                            "perceptions": [],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Air Ops"
                            },
                            "position": "8594aab7fffffff",
                            "location": [
                                -16.579,
                                123.6516
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a130",
                            "contactId": "CA1739",
                            "name": "Red Force:29",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1739",
                                    "force": "F-Green"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859c4657fffffff",
                            "location": [
                                -15.9904,
                                138.7422
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a131",
                            "contactId": "CA2227",
                            "name": "Red Force:30",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2227",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:10",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-destroyer",
                            "condition": "working",
                            "status": {
                                "state": "Loitering"
                            },
                            "position": "859c5d47fffffff",
                            "location": [
                                -14.4905,
                                136.121
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a132",
                            "contactId": "CA1312",
                            "name": "Red Force:31",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1312",
                                    "typeId": "id-auxiliary",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1312",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Supporting"
                            },
                            "position": "859c2997fffffff",
                            "location": [
                                -18.0243,
                                142.2515
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a133",
                            "contactId": "CA2665",
                            "name": "Red Force:32",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2665",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2665"
                                }
                            ],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Active"
                            },
                            "position": "859c746bfffffff",
                            "location": [
                                -17.0411,
                                140.9707
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a134",
                            "contactId": "CA2132",
                            "name": "Red Force:33",
                            "perceptions": [],
                            "platformTypeId": "id-mcm",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859450d7fffffff",
                            "location": [
                                -12.5154,
                                129.9751
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a135",
                            "contactId": "CA2864",
                            "name": "Red Force:34",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2864"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2864",
                                    "typeId": "id-auxiliary"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Supporting"
                            },
                            "position": "85949407fffffff",
                            "location": [
                                -18.9116,
                                119.7138
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a136",
                            "contactId": "CA1736",
                            "name": "Red Force:35",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1736",
                                    "typeId": "id-missile"
                                }
                            ],
                            "platformTypeId": "id-missile",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "85941bb7fffffff",
                            "location": [
                                -14.574,
                                126.579
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a137",
                            "contactId": "CA1417",
                            "name": "Red Force:36",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1417"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1417",
                                    "typeId": "id-carrier"
                                }
                            ],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "85941bb3fffffff",
                            "location": [
                                -14.6078,
                                126.3983
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a138",
                            "contactId": "CA215",
                            "name": "Red Force:37",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:17",
                                    "typeId": "id-auxiliary",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859480cffffffff",
                            "location": [
                                -18.0415,
                                121.6797
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a139",
                            "contactId": "CA1230",
                            "name": "Red Force:38",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1230",
                                    "typeId": "id-missile"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1230",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-missile",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "8594958bfffffff",
                            "location": [
                                -18.6674,
                                120.4755
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a140",
                            "contactId": "CA1405",
                            "name": "Red Force:39",
                            "perceptions": [],
                            "platformTypeId": "id-mcm",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "8594855bfffffff",
                            "location": [
                                -17.4033,
                                122.0081
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a141",
                            "contactId": "CA477",
                            "name": "Red Force:40",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA477",
                                    "typeId": "id-carrier",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA477",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859d0943fffffff",
                            "location": [
                                -20.2695,
                                146.5324
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a142",
                            "contactId": "CA1807",
                            "name": "Red Force:41",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1807",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Mixed"
                            },
                            "position": "85945573fffffff",
                            "location": [
                                -11.9046,
                                130.7986
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a143",
                            "contactId": "CA2747",
                            "name": "Red Force:42",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2747",
                                    "typeId": "id-auxiliary",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Supporting"
                            },
                            "position": "85945117fffffff",
                            "location": [
                                -12.4334,
                                131.5532
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a144",
                            "contactId": "CA2849",
                            "name": "Red Force:43",
                            "perceptions": [],
                            "platformTypeId": "id-destroyer",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859c5d77fffffff",
                            "location": [
                                -14.5464,
                                135.6686
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a145",
                            "contactId": "CA1256",
                            "name": "Red Force:44",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1256",
                                    "typeId": "id-carrier",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Air Ops"
                            },
                            "position": "859c2d13fffffff",
                            "location": [
                                -18.4403,
                                142.9303
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a146",
                            "contactId": "CA2705",
                            "name": "Red Force:45",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2705",
                                    "typeId": "id-mcm"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2705",
                                    "typeId": "id-mcm",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-mcm",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "8594e437fffffff",
                            "location": [
                                -13.8618,
                                128.2265
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a147",
                            "contactId": "CA2294",
                            "name": "Red Force:46",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2294",
                                    "typeId": "id-carrier"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2294",
                                    "typeId": "id-carrier",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "id-carrier",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859458cffffffff",
                            "location": [
                                -13.2215,
                                132.9811
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a148",
                            "contactId": "CA3367",
                            "name": "Red Force:47",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:27",
                                    "force": "F-Green"
                                }
                            ],
                            "platformTypeId": "id-missile",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "859c70affffffff",
                            "location": [
                                -17.0574,
                                140.0406
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a149",
                            "contactId": "CA425",
                            "name": "Red Force:48",
                            "perceptions": [],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "85945563fffffff",
                            "location": [
                                -12.0462,
                                130.8443
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a150",
                            "contactId": "CA3135",
                            "name": "Red Force:49",
                            "perceptions": [],
                            "platformTypeId": "id-mcm",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "85945813fffffff",
                            "location": [
                                -13.1681,
                                133.185
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a151",
                            "contactId": "CA2759",
                            "name": "Red Force:50",
                            "perceptions": [],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "8594863bfffffff",
                            "location": [
                                -18.1747,
                                121.1967
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a152",
                            "contactId": "CA2000",
                            "name": "Red Force:51",
                            "perceptions": [],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Supporting"
                            },
                            "position": "859c43cffffffff",
                            "location": [
                                -15.4829,
                                137.0301
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a153",
                            "contactId": "CA3258",
                            "name": "Red Force:52",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA3258",
                                    "typeId": "id-auxiliary"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859d0963fffffff",
                            "location": [
                                -20.2046,
                                146.1087
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a154",
                            "contactId": "CA855",
                            "name": "Red Force:53",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA855",
                                    "typeId": "id-auxiliary",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:33",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-auxiliary",
                            "condition": "working",
                            "status": {
                                "state": "Supporting"
                            },
                            "position": "8594508bfffffff",
                            "location": [
                                -12.4965,
                                130.0699
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a155",
                            "contactId": "CA2779",
                            "name": "Red Force:54",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:34",
                                    "typeId": "id-frigate-ta",
                                    "force": "F-Green"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2779"
                                }
                            ],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859450dbfffffff",
                            "location": [
                                -12.6383,
                                129.7416
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a156",
                            "contactId": "CA2533",
                            "name": "Red Force:55",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2533",
                                    "typeId": "id-mcm",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-mcm",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "85a6a6a3fffffff",
                            "location": [
                                -20.9262,
                                116.7521
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a157",
                            "contactId": "CA1989",
                            "name": "Red Force:56",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:36",
                                    "typeId": "id-frigate-ta",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:36",
                                    "typeId": "id-frigate-ta"
                                }
                            ],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Mixed"
                            },
                            "position": "85a6a40ffffffff",
                            "location": [
                                -21.3267,
                                116.4863
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a158",
                            "contactId": "CA2635",
                            "name": "Red Force:57",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2635",
                                    "typeId": "id-mcm",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:37",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "id-mcm",
                            "condition": "working",
                            "status": {
                                "state": "Moored"
                            },
                            "position": "859c2d57fffffff",
                            "location": [
                                -18.0959,
                                143.0924
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a159",
                            "contactId": "CA3087",
                            "name": "Red Force:58",
                            "perceptions": [],
                            "platformTypeId": "id-frigate-ta",
                            "condition": "working",
                            "status": {
                                "state": "Transiting"
                            },
                            "position": "859d0bb3fffffff",
                            "location": [
                                -19.9708,
                                146.4245
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a160",
                            "contactId": "CA653",
                            "name": "Red Force:59",
                            "perceptions": [],
                            "platformTypeId": "id-missile",
                            "condition": "working",
                            "status": {
                                "state": "Inactive"
                            },
                            "position": "8594588ffffffff",
                            "location": [
                                -13.013,
                                133.3442
                            ],
                            "owner": "rkr226f5d"
                        }
                    ],
                    "color": "#F00",
                    "dirty": false,
                    "iconURL": "default_img/umpireDefault.png",
                    "name": "Red Force",
                    "overview": "Red force.",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "rkr226f5e"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Logs",
                            "roleId": "rkr226f5a"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Comms",
                            "roleId": "rkr226f5b"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "White Goods",
                            "roleId": "rkr226f5c"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "Furnishing",
                            "roleId": "rkr226f5d"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "F-Red"
                },
                {
                    "assets": [
                        {
                            "condition": "Full capability",
                            "contactId": "C015",
                            "name": "Tanker-1",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "force": "F-Green",
                                    "name": "OSAKA",
                                    "typeId": "id-merchant"
                                }
                            ],
                            "platformTypeId": "id-merchant",
                            "position": "831b21fffffffff",
                            "uniqid": "a0pra000200"
                        },
                        {
                            "condition": "Full capability",
                            "contactId": "C081",
                            "name": "Tanker-2",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "force": "F-Green",
                                    "name": "ARUNA 12",
                                    "typeId": "id-merchant"
                                },
                                {
                                    "by": "F-Red",
                                    "force": "F-Green",
                                    "name": "BARLAY",
                                    "typeId": "id-merchant"
                                }
                            ],
                            "platformTypeId": "id-merchant",
                            "position": "831b31fffffffff",
                            "status": {
                                "state": "Moored"
                            },
                            "uniqid": "a0pra000201"
                        },
                        {
                            "condition": "Full capability",
                            "contactId": "C116",
                            "name": "Fisher-A",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "force": "F-Green",
                                    "name": "JALIBUT",
                                    "typeId": "id-merchant"
                                }
                            ],
                            "platformTypeId": "id-fisher",
                            "uniqid": "a0pra000202"
                        },
                        {
                            "condition": "Full capability",
                            "contactId": "C026",
                            "name": "Fisher-B",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "force": "F-Green",
                                    "typeId": "id-merchant"
                                }
                            ],
                            "platformTypeId": "id-fisher",
                            "position": "83064bfffffffff",
                            "status": {
                                "speedKts": 10,
                                "state": "Transiting"
                            },
                            "uniqid": "a0pra000203"
                        },
                        {
                            "condition": "Full capability",
                            "contactId": "C115",
                            "name": "Fisher-C",
                            "position": "83064bfffffffff",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "force": "F-Green",
                                    "name": "BOUM 3",
                                    "typeId": "id-merchant"
                                },
                                {
                                    "by": "F-Red",
                                    "force": "F-Green",
                                    "name": "BOUM 3",
                                    "typeId": "id-merchant"
                                }
                            ],
                            "platformTypeId": "id-fisher",
                            "uniqid": "a0pra000204"
                        }
                    ],
                    "color": "#0F0",
                    "dirty": false,
                    "iconURL": "default_img/umpireDefault.png",
                    "name": "Green Force",
                    "overview": "Green Shipping",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "rkrlw6f33"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "F-Green"
                },
                {
                    "color": "#0FF",
                    "dirty": false,
                    "iconURL": "default_img/umpireDefault.png",
                    "name": "Rainbow",
                    "overview": "Rainbow Umpires",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": true,
                            "name": "Lead Analyst",
                            "roleId": "rainbow-LA"
                        }
                    ],
                    "umpire": true,
                    "uniqid": "F-Rainbow"
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
                "unit": "millis",
                "millis": 259200000
            },
            "name": "Overview - settings",
            "realtimeTurnTime": 300000,
            "showAccessCodes": true,
            "timeWarning": 60000,
            "turnPresentation": "Natural",
            "logPlayerActivity": true
        },
        "platformTypes": {
            "dirty": false,
            "name": "Platform Types",
            "platformTypes": [

            

                {
                    "name": "Fighter",
                    "icon": "n_blue_air_fighter.svg",
                    conditions: [],
                    states: [],
                    uniqid: "blue_air_fighter",
                    attributeTypes: [
                        {
                            "attrId": "b_fighter_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    travelMode: 'air'
                },
                {
                    "name": "Bomber",
                    "icon": "n_blue_air_bomber.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_bomber_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_air_bomber",
                    travelMode: 'air'
                },
                {
                    "name": "SAM",
                    "icon": "n_blue_land_sam.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_sam_mez",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "MEZ Range",
                            "editableByPlayer": false,
                            "name": "MEZ"
                        },
                        {
                            "attrId": "b_sam_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_land_sam",
                    travelMode: 'land'
                },
                {
                    "name": "MTG",
                    "icon": "n_blue_maritime_task_force.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_mtg_units",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Members of Task Group",
                            "editableByPlayer": false,
                            "name": "Units"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_maritime_mtg",
                    travelMode: 'sea'
                },
                {
                    "name": "Ship",
                    "icon": "n_blue_maritime_destroyer.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_ship_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_maritime_ship",
                    travelMode: 'sea'
                },
                {
                    "name": "Submarine",
                    "icon": "n_blue_maritime_submarine.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_sub_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_maritime_submarine",
                    travelMode: 'sea'
                },
                {
                    "name": "Land Unit",
                    "icon": "n_blue_land_armed_inf.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_land_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_land_unit",
                    travelMode: 'sea'
                },
                {
                    "name": "Fixed Asset",
                    "icon": "blue_land_asset.png",
                    attributeTypes: [
                        {
                            "attrId": "b_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_land_asset",
                    travelMode: 'sea'
                },
                {
                    "name": "SSM",
                    "icon": "n_blue_land_ssm.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_ssm_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Range of asset",
                            "editableByPlayer": false,
                            "name": "range",
                            "units": "km"
                        },
                        {
                            "attrId": "b_ssm_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "b_ssm_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_land_ssm",
                    travelMode: 'sea'
                },
                {
                    "name": "ISTAR",
                    "icon": "n_blue_air_recce.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_istar_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 50,
                            "description": "Detection Range of asset",
                            "editableByPlayer": false,
                            "name": "Detection Range",
                            "units": "km"
                        },
                        {
                            "attrId": "b_istar_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "b_istar_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_air_istar",
                    travelMode: 'sea'
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_blue_air_utility.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_air_logs_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "b_air_logs_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_air_logs",
                    travelMode: 'sea'
                },
                {
                    "name": "C2 Node",
                    "icon": "n_blue_hq.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_c2_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "C2 Connections for asset",
                            "editableByPlayer": false,
                            "name": "Connections"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_land_c2",
                    travelMode: 'land'
                },
                {
                    "name": "FIAC",
                    "icon": "n_blue_maritime_destroyer.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_fiac_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_maritime_fiac",
                    travelMode: 'sea'
                },
                {
                    "name": "Minefield",
                    "icon": "n_blue_maritime_minefield.svg",
                    attributeTypes: [
                        {
                            "attrId": "b_mine_density",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Density of minefield",
                            "editableByPlayer": false,
                            "name": "density",
                            "units": "per km2"
                        },
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "blue_maritime_mine",
                    travelMode: 'sea'
                },


                {
                    "name": "Fighter",
                    "icon": "n_red_air_fighter.svg",
                    conditions: [],
                    states: [],
                    uniqid: "red_air_fighter",
                    attributeTypes: [
                        {
                            "attrId": "r_fighter_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    travelMode: 'air'
                },
                {
                    "name": "SAM",
                    "icon": "n_red_land_sam.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_sam_mez",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "MEZ Range",
                            "editableByPlayer": false,
                            "name": "MEZ"
                        },
                        {
                            "attrId": "r_sam_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_land_sam",
                    travelMode: 'land'
                },
                {
                    "name": "MTG",
                    "icon": "n_red_maritime_task_force.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_mtg_units",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Members of Task Group",
                            "editableByPlayer": false,
                            "name": "Units"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_maritime_mtg",
                    travelMode: 'sea'
                },
                {
                    "name": "Submarine",
                    "icon": "n_red_maritime_submarine.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_sub_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_maritime_submarine",
                    travelMode: 'sea'
                },
                {
                    "name": "Land Unit",
                    "icon": "n_red_land_armed_inf.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_land_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_land_unit",
                    travelMode: 'sea'
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_red_land_sam.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_land_asset",
                    travelMode: 'sea'
                },
                {
                    "name": "SSM",
                    "icon": "n_red_land_ssm.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_ssm_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Range of asset",
                            "editableByPlayer": false,
                            "name": "range",
                            "units": "km"
                        },
                        {
                            "attrId": "r_ssm_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "r_ssm_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_land_ssm",
                    travelMode: 'sea'
                },
                {
                    "name": "ISTAR",
                    "icon": "n_red_air_recce.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_istar_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 50,
                            "description": "Detection Range of asset",
                            "editableByPlayer": false,
                            "name": "Detection Range",
                            "units": "km"
                        },
                        {
                            "attrId": "r_istar_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "r_istar_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_air_istar",
                    travelMode: 'sea'
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_red_air_utility.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_air_logs_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "r_air_logs_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_air_logs",
                    travelMode: 'sea'
                },
                {
                    "name": "C2 Node",
                    "icon": "n_red_hq.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_c2_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "C2 Connections for asset",
                            "editableByPlayer": false,
                            "name": "Connections"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_land_c2",
                    travelMode: 'land'
                },
                {
                    "name": "FIAC",
                    "icon": "n_red_maritime_missile_boat.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_fiac_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_maritime_fiac",
                    travelMode: 'sea'
                },
                {
                    "name": "Minefield",
                    "icon": "n_red_maritime_minefield.svg",
                    attributeTypes: [
                        {
                            "attrId": "r_mine_density",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Density of minefield",
                            "editableByPlayer": false,
                            "name": "density",
                            "units": "per km2"
                        },
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_maritime_mine",
                    travelMode: 'sea'
                },

                {
                    "name": "Fixed Asset",
                    "icon": "re_land_asset.png",
                    attributeTypes: [
                        {
                            "attrId": "r_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": '',
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    conditions: [],
                    states: [],
                    uniqid: "red_land_asset",
                    travelMode: 'sea'
                }
            ],
            "selectedType": ""
        }
    },
    "gameTurn": 6,
    "infoType": true,
    "messageType": "InfoMessage",
    "name": "wargame-l6nngxlk",
    "phase": "planning",
    "turnEndTime": "2021-08-10T16:17:26+01:00",
    "wargameInitiated": true,
    "wargameTitle": "P9 Test"
}

export default game;
