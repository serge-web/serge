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
                            "uniqid": "a421",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_36"
                                }
                            ],
                            "contactId": "CA1800",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:0",
                                    "typeId": "blue_maritime_ship",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1800",
                                    "typeId": "blue_maritime_ship",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                44.8998,
                                63.0884
                            ],
                            "owner": "rk116f52",
                            "comprising": []
                        },
                        {
                            "uniqid": "a425",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2656",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:4",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                53.8705,
                                82.9657
                            ],
                            "owner": "2rk116f53"
                        },
                        {
                            "uniqid": "a426",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA3053",
                            "name": "Blue:5",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                45.8304,
                                32.106
                            ],
                            "owner": "1rk116f53"
                        },
                        {
                            "uniqid": "a427",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_35"
                                }
                            ],
                            "contactId": "CA1282",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA1282",
                                    "typeId": "blue_land_sam"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                53.4044,
                                35.9549
                            ],
                            "owner": "rk116f51"
                        },
                        {
                            "uniqid": "a428",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ssm_equipment",
                                    "value": "_6"
                                }
                            ],
                            "contactId": "CA518",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA518"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                32.8544,
                                77.0366
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a429",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_45"
                                }
                            ],
                            "contactId": "CA3247",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Blue:8",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                38.5321,
                                49.4029
                            ],
                            "owner": "blue-logs"
                        },
                        {
                            "uniqid": "a430",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1835",
                            "name": "Blue:9",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                41.7685,
                                60.4694
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a431",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_istar_range",
                                    "value": 50
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_istar_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_istar_equipment",
                                    "value": "_9"
                                }
                            ],
                            "contactId": "CA1315",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:10",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                32.5963,
                                22.0544
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a432",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_13"
                                }
                            ],
                            "contactId": "CA1143",
                            "name": "Blue:11",
                            "perceptions": [],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.7995,
                                63.9669
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a433",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_21"
                                }
                            ],
                            "contactId": "CA1474",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1474",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                36.495,
                                38.4879
                            ],
                            "owner": "2rk116f53"
                        },
                        {
                            "uniqid": "a434",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_31"
                                }
                            ],
                            "contactId": "CA617",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA617",
                                    "typeId": "blue_air_bomber",
                                    "force": "F-Blue"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA617",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                40.7126,
                                28.7497
                            ],
                            "owner": "blue-logs"
                        },
                        {
                            "uniqid": "a435",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_istar_range",
                                    "value": 50
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_istar_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_istar_equipment",
                                    "value": "_42"
                                }
                            ],
                            "contactId": "CA78",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA78",
                                    "typeId": "blue_air_istar",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                54.6854,
                                76.7978
                            ],
                            "owner": "3rk116f53"
                        },
                        {
                            "uniqid": "a436",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_17"
                                }
                            ],
                            "contactId": "CA2985",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2985",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                46.8817,
                                37.442
                            ],
                            "owner": "blue-logs"
                        },
                        {
                            "uniqid": "a437",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_istar_range",
                                    "value": 50
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_istar_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_istar_equipment",
                                    "value": "_41"
                                }
                            ],
                            "contactId": "CA674",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA674",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                47.4702,
                                57.6849
                            ],
                            "owner": "rk116f5e"
                        },
                        {
                            "uniqid": "a438",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_39"
                                }
                            ],
                            "contactId": "CA2757",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "F-Red",
                                    "name": "CA2757",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2757",
                                    "typeId": "blue_air_fighter",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                43.2109,
                                45.5986
                            ],
                            "owner": "rk116f52"
                        },
                        {
                            "uniqid": "a439",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_c2_equipment",
                                    "value": "_38"
                                }
                            ],
                            "contactId": "CA2809",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2809",
                                    "typeId": "blue_land_c2",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                48.0445,
                                31.8489
                            ],
                            "owner": "rk116f53"
                        },
                        {
                            "uniqid": "a440",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2478",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA2478",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                29.86,
                                84.3474
                            ],
                            "owner": "3rk116f53"
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
                            "uniqid": "a401",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_7"
                                }
                            ],
                            "contactId": "CA1885",
                            "name": "Red Force:0",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1885",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                14.5274,
                                53.1911
                            ],
                            "owner": "rkr226f5a",
                            "comprising": []
                        },
                        {
                            "uniqid": "a405",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_47"
                                }
                            ],
                            "contactId": "CA493",
                            "name": "Red Force:4",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA493",
                                    "typeId": "red_land_sam",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                6.4055,
                                28.6323
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a406",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2821",
                            "name": "Red Force:5",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:5",
                                    "typeId": "red_maritime_fiac",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                24.2457,
                                62.5837
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a407",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA722",
                            "name": "Red Force:6",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA722",
                                    "typeId": "red_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                17.3908,
                                85.4489
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a408",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_48"
                                }
                            ],
                            "contactId": "CA3209",
                            "name": "Red Force:7",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA3209",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA3209",
                                    "typeId": "red_maritime_mtg",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                19.1569,
                                41.3792
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a409",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_istar_range",
                                    "value": 50
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_istar_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_istar_equipment",
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA1173",
                            "name": "Red Force:8",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA1173",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA1173"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                13.0939,
                                56.9826
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a410",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_41"
                                }
                            ],
                            "contactId": "CA2378",
                            "name": "Red Force:9",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:9",
                                    "typeId": "red_land_sam",
                                    "force": "F-Red"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2378",
                                    "typeId": "red_land_sam"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                18.9666,
                                22.3757
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a411",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_47"
                                }
                            ],
                            "contactId": "CA83",
                            "name": "Red Force:10",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA83",
                                    "typeId": "red_maritime_submarine",
                                    "force": "F-Green"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:10",
                                    "typeId": "red_maritime_submarine",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                8.7822,
                                33.3618
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a412",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_48"
                                }
                            ],
                            "contactId": "CA89",
                            "name": "Red Force:11",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:11",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                25.8074,
                                26.25
                            ],
                            "owner": "rkr226f5e"
                        },
                        {
                            "uniqid": "a413",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA399",
                            "name": "Red Force:12",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                9.2578,
                                62.6617
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a414",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_45"
                                }
                            ],
                            "contactId": "CA121",
                            "name": "Red Force:13",
                            "perceptions": [],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                20.5444,
                                62.7285
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a415",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_16"
                                }
                            ],
                            "contactId": "CA1400",
                            "name": "Red Force:14",
                            "perceptions": [],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.3081,
                                80.1819
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a416",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_42"
                                }
                            ],
                            "contactId": "CA1440",
                            "name": "Red Force:15",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "CA1440",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                28.374,
                                75.7906
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a417",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_6"
                                }
                            ],
                            "contactId": "CA547",
                            "name": "Red Force:16",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:16",
                                    "typeId": "red_land_asset"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA547",
                                    "typeId": "red_land_asset",
                                    "force": "F-Blue"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.315,
                                85.4999
                            ],
                            "owner": "rkr226f5d"
                        },
                        {
                            "uniqid": "a418",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_42"
                                }
                            ],
                            "contactId": "CA2009",
                            "name": "Red Force:17",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "CA2009"
                                },
                                {
                                    "by": "F-Green",
                                    "name": "CA2009"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                22.4181,
                                35.4304
                            ],
                            "owner": "rkr226f5b"
                        },
                        {
                            "uniqid": "a419",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1273",
                            "name": "Red Force:18",
                            "perceptions": [
                                {
                                    "by": "F-Blue",
                                    "name": "Red Force:18",
                                    "force": "F-Green"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                15.1664,
                                76.9269
                            ],
                            "owner": "rkr226f5c"
                        },
                        {
                            "uniqid": "a420",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_istar_range",
                                    "value": 50
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_istar_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_istar_equipment",
                                    "value": "_3"
                                }
                            ],
                            "contactId": "CA202",
                            "name": "Red Force:19",
                            "perceptions": [
                                {
                                    "by": "F-Green",
                                    "name": "Red Force:19",
                                    "force": "F-Red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                4.4695,
                                61.8368
                            ],
                            "owner": "rkr226f5c"
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
