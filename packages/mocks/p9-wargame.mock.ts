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
                            "uniqid": "a301",
                            "contactId": "CA2962",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA2962",
                                    "typeId": "blue_land_c2"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Blue:0",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                33.9623,
                                63.9778
                            ],
                            "owner": "1rk116f53",
                            "comprising": []
                        },
                        {
                            "uniqid": "a305",
                            "contactId": "CA2604",
                            "name": "Blue:4",
                            "perceptions": [],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                50.6407,
                                80.5012
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a306",
                            "contactId": "CA450",
                            "name": "Blue:5",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA450",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                35.9375,
                                84.3081
                            ],
                            "owner": "blue-logs"
                        },
                        {
                            "uniqid": "a307",
                            "contactId": "CA484",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA484",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA484",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                54.7478,
                                49.6774
                            ],
                            "owner": "rk116f51"
                        },
                        {
                            "uniqid": "a308",
                            "contactId": "CA647",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA647",
                                    "typeId": "blue_maritime_mine",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA647",
                                    "typeId": "blue_maritime_mine",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                45.1944,
                                47.6515
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a309",
                            "contactId": "CA2264",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2264",
                                    "typeId": "blue_land_unit"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                30.0691,
                                23.0908
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a310",
                            "contactId": "CA1856",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA1856"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                40.3416,
                                39.8594
                            ],
                            "owner": "blue-logs"
                        },
                        {
                            "uniqid": "a311",
                            "contactId": "CA375",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:10",
                                    "typeId": "blue_land_sam",
                                    "force": "F-Green"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA375",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                50.6284,
                                46.4497
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a312",
                            "contactId": "CA2068",
                            "name": "Blue:11",
                            "perceptions": [],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                54.7843,
                                74.8112
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a313",
                            "contactId": "CA2170",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:12",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2170",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                44.2747,
                                54.8852
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a314",
                            "contactId": "CA1280",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA1280",
                                    "typeId": "blue_air_istar",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1280",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                54.8443,
                                84.3235
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a315",
                            "contactId": "CA3137",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:14",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Blue:14",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                49.5213,
                                41.3225
                            ],
                            "owner": "2rk116f53"
                        },
                        {
                            "uniqid": "a316",
                            "contactId": "CA961",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA961",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                36.6528,
                                47.935
                            ],
                            "owner": "blue-logs"
                        },
                        {
                            "uniqid": "a317",
                            "contactId": "CA1834",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:16",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                33.9778,
                                34.4319
                            ],
                            "owner": "2rk116f53"
                        },
                        {
                            "uniqid": "a318",
                            "contactId": "CA2996",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Blue:17",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                50.9292,
                                83.7298
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a319",
                            "contactId": "CA3108",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA3108",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                31.6138,
                                36.1539
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a320",
                            "contactId": "CA203",
                            "name": "Blue:19",
                            "perceptions": [],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                37.4608,
                                30.5169
                            ],
                            "owner": "1rk116f53"
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
                            "uniqid": "a281",
                            "contactId": "CA2016",
                            "name": "Red Force:0",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2016",
                                    "typeId": "red_air_logs",
                                    "force": "F-Green"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:0"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                21.6411,
                                50.8972
                            ],
                            "owner": "rkr226f5e",
                            "comprising": []
                        },
                        {
                            "uniqid": "a285",
                            "contactId": "CA141",
                            "name": "Red Force:4",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:4",
                                    "typeId": "red_land_asset",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                22.4978,
                                51.4828
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a286",
                            "contactId": "CA1942",
                            "name": "Red Force:5",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1942",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                26.3325,
                                69.7253
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a287",
                            "contactId": "CA1738",
                            "name": "Red Force:6",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1738"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                11.529,
                                67.348
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a288",
                            "contactId": "CA3000",
                            "name": "Red Force:7",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA3000",
                                    "typeId": "red_land_ssm"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:7"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                4.2134,
                                70.1314
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a289",
                            "contactId": "CA41",
                            "name": "Red Force:8",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:8",
                                    "typeId": "red_land_sam",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                28.1396,
                                74.4283
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a290",
                            "contactId": "CA185",
                            "name": "Red Force:9",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA185",
                                    "typeId": "red_maritime_submarine",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA185",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                13.5391,
                                68.3281
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a291",
                            "contactId": "CA555",
                            "name": "Red Force:10",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA555",
                                    "typeId": "red_air_fighter",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA555",
                                    "typeId": "red_air_fighter",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                13.669,
                                26.5484
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a292",
                            "contactId": "CA3068",
                            "name": "Red Force:11",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                20.5105,
                                59.8524
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a293",
                            "contactId": "CA1965",
                            "name": "Red Force:12",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1965",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                23.455,
                                33.2841
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a294",
                            "contactId": "CA1463",
                            "name": "Red Force:13",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:13"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:13",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                19.6701,
                                22.6265
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a295",
                            "contactId": "CA1168",
                            "name": "Red Force:14",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1168",
                                    "typeId": "red_land_sam",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:14",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                22.5155,
                                79.9429
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a296",
                            "contactId": "CA2320",
                            "name": "Red Force:15",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2320",
                                    "typeId": "red_land_asset",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:15",
                                    "typeId": "red_land_asset",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.1452,
                                37.6425
                            ],
                            "owner": "rkr226f5a"
                        },
                        {
                            "uniqid": "a297",
                            "contactId": "CA2029",
                            "name": "Red Force:16",
                            "perceptions": [],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                18.1354,
                                50.5137
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a298",
                            "contactId": "CA1869",
                            "name": "Red Force:17",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:17",
                                    "typeId": "red_land_ssm"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:17",
                                    "typeId": "red_land_ssm",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                26.3932,
                                54.1303
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a299",
                            "contactId": "CA383",
                            "name": "Red Force:18",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA383",
                                    "typeId": "red_maritime_mtg",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                28.1459,
                                60.8643
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a300",
                            "contactId": "CA1562",
                            "name": "Red Force:19",
                            "perceptions": [],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                12.744,
                                65.6439
                            ],
                            "owner": "rkr226f5a"
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
