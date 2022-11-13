import { Wargame } from "@serge/custom-types";

const game: Wargame = {
    "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
    "wargameList": [],
    "data": {
        "overview": {
            "name": "Overview - settings",
            "gameDescription": "",
            "gameTurnTime": { "unit": "millis", "millis": 259200000 },
            "realtimeTurnTime": 300000,
            "timeWarning": 60000,
            "turnPresentation": "Natural",
            "gameDate": "2022-11-11T00:00:00+00:00",
            "showAccessCodes": true,
            "logPlayerActivity": false,
            "dirty": false
        },
        "forces": {
            "selectedForce": "f-blue",
            "name": "Forces",
            "forces": [
                {
                    "name": "Umpire",
                    "uniqid": "umpire",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "Game Designer",
                            "roleId": "umpire",
                            "isGameControl": true,
                            "isObserver": true,
                            "isInsightViewer": true
                        },
                        {
                            "roleId": "adjud-1",
                            "name": "Adjudicator 1",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": true
                        },
                        {
                            "roleId": "adjud-2",
                            "name": "Adjudicator 2",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": true
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#000000",
                    "umpire": true,
                    "dirty": false
                },
                {
                    "name": "Blue",
                    "uniqid": "f-blue",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "MTG 1",
                            "roleId": "blue-mtg-1",
                            "isGameControl": false,
                            "isObserver": false,
                            "isInsightViewer": false
                        },
                        {
                            "roleId": "blue-mtg-2",
                            "name": "MTG 2",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-mtg-3",
                            "name": "MTG 3",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-sub",
                            "name": "Sub-Surface",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-aew-1",
                            "name": "AEW 1",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-aew-2",
                            "name": "AEW 2",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#3dd0ff",
                    "umpire": false,
                    "dirty": false,
                    "assets": [
                        {
                            "uniqid": "a1003",
                            "contactId": "CA2986",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:0",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                40.4652,
                                48.3297
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ],
                            "comprising": []
                        },
                        {
                            "uniqid": "a1007",
                            "contactId": "CA1394",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1394"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1394",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1394",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                53.6592,
                                32.0337
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit33"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_37"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1008",
                            "contactId": "CA884",
                            "name": "Blue:5",
                            "perceptions": [],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                43.4625,
                                40.156
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Connections",
                                    "value": "_1"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1009",
                            "contactId": "CA2644",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2644",
                                    "typeId": "blue_land_asset"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2644",
                                    "typeId": "blue_land_asset"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                35.7984,
                                37.266
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_49"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1010",
                            "contactId": "CA162",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:7",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA162",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                52.778,
                                61.0773
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_35"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1011",
                            "contactId": "CA1014",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:8",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1014",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                32.85,
                                57.3068
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1012",
                            "contactId": "CA2565",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2565",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                37.9075,
                                44.0435
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit32"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_10"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1013",
                            "contactId": "CA291",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA291"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                48.9989,
                                74.0449
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_7"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1014",
                            "contactId": "CA3382",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3382",
                                    "typeId": "blue_maritime_mtg"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3382",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:11",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                45.2723,
                                83.6848
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_35"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1015",
                            "contactId": "CA3012",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:12",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3012",
                                    "typeId": "blue_land_asset"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                33.7266,
                                74.7957
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_40"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1016",
                            "contactId": "CA738",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:13"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA738"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                50.9161,
                                48.1087
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_8"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1017",
                            "contactId": "CA2980",
                            "name": "Blue:14",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                36.9091,
                                61.4422
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_3"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1018",
                            "contactId": "CA2143",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2143",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:15"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                31.2635,
                                73.2222
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1019",
                            "contactId": "CA1318",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:16",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1318",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                52.768,
                                58.7429
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Connections",
                                    "value": "_2"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1020",
                            "contactId": "CA873",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:17",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:17",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA873",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                45.8862,
                                75.6862
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_13"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1021",
                            "contactId": "CA2376",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2376",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                42.8519,
                                78.6788
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_5"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1022",
                            "contactId": "CA3090",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:19",
                                    "typeId": "blue_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:19"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                49.9355,
                                34.3353
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Connections",
                                    "value": "_9"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1023",
                            "contactId": "CA1162",
                            "name": "Blue:20",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1162",
                                    "typeId": "blue_air_bomber"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1162",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                51.9565,
                                49.4502
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_4"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1024",
                            "contactId": "CA2550",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2550"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2550",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                47.734,
                                30.3313
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1025",
                            "contactId": "CA246",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA246",
                                    "typeId": "blue_air_istar"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:22"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:22"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                54.3846,
                                40.3006
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_43"
                                },
                                {
                                    "attrId": "a_Detection Range",
                                    "value": 50
                                }
                            ]
                        },
                        {
                            "uniqid": "a1026",
                            "contactId": "CA2904",
                            "name": "Blue:23",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2904",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2904",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2904"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                36.3453,
                                78.2127
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_23"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1027",
                            "contactId": "CA1008",
                            "name": "Blue:24",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1008",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:24",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1008",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                41.9775,
                                70.047
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_3"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1028",
                            "contactId": "CA1827",
                            "name": "Blue:25",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1827",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                36.9596,
                                41.632
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_39"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1029",
                            "contactId": "CA2420",
                            "name": "Blue:26",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:26",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:26",
                                    "typeId": "blue_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:26",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                45.4119,
                                56.7386
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_25"
                                },
                                {
                                    "attrId": "a_Detection Range",
                                    "value": 50
                                }
                            ]
                        },
                        {
                            "uniqid": "a1030",
                            "contactId": "CA2567",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2567",
                                    "typeId": "blue_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                32.8352,
                                44.709
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_22"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1031",
                            "contactId": "CA438",
                            "name": "Blue:28",
                            "perceptions": [],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                53.2799,
                                46.9059
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_28"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1032",
                            "contactId": "CA2209",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2209",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:29",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                30.4214,
                                27.874
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_32"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1033",
                            "contactId": "CA1766",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:30",
                                    "typeId": "blue_air_istar"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:30",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                45.5705,
                                35.2513
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_2"
                                },
                                {
                                    "attrId": "a_Detection Range",
                                    "value": 50
                                }
                            ]
                        },
                        {
                            "uniqid": "a1034",
                            "contactId": "CA3014",
                            "name": "Blue:31",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:31",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3014"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                30.2727,
                                62.0847
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_13"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1035",
                            "contactId": "CA130",
                            "name": "Blue:32",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:32",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:32",
                                    "typeId": "blue_land_sam",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                38.7791,
                                72.01
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_9"
                                },
                                {
                                    "attrId": "a_Mez Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1036",
                            "contactId": "CA786",
                            "name": "Blue:33",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA786",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA786"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA786",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                41.5472,
                                38.0374
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_10"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1037",
                            "contactId": "CA602",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA602",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA602",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA602",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                45.2402,
                                48.5077
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1038",
                            "contactId": "CA3380",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3380"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:35"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                32.6792,
                                49.1807
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1039",
                            "contactId": "CA1086",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1086",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                37.5598,
                                40.0676
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_2"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1040",
                            "contactId": "CA2333",
                            "name": "Blue:37",
                            "perceptions": [],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                30.6146,
                                78.8306
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_36"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1041",
                            "contactId": "CA420",
                            "name": "Blue:38",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA420",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA420"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:38"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                32.3436,
                                71.4223
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1042",
                            "contactId": "CA1432",
                            "name": "Blue:39",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1432",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1432",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1432"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                31.5977,
                                55.8094
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1043",
                            "contactId": "CA336",
                            "name": "Blue:40",
                            "perceptions": [],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                51.6974,
                                55.5048
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_29"
                                },
                                {
                                    "attrId": "a_Mez Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1044",
                            "contactId": "CA1138",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1138",
                                    "typeId": "blue_land_ssm"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                41.4004,
                                43.4885
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_3"
                                },
                                {
                                    "attrId": "a_Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1045",
                            "contactId": "CA563",
                            "name": "Blue:42",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA563",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA563",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                35.7739,
                                48.5676
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_29"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1046",
                            "contactId": "CA2103",
                            "name": "Blue:43",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:43",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:43",
                                    "typeId": "blue_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                47.2523,
                                55.3328
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_10"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1047",
                            "contactId": "CA3122",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3122",
                                    "typeId": "blue_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3122",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:44"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                43.0926,
                                51.675
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_28"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1048",
                            "contactId": "CA1063",
                            "name": "Blue:45",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1063",
                                    "typeId": "blue_land_unit"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1063",
                                    "typeId": "blue_land_unit"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                43.851,
                                46.3078
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit32"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_3"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1049",
                            "contactId": "CA2799",
                            "name": "Blue:46",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2799",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2799",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                29.1149,
                                82.8963
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1050",
                            "contactId": "CA2200",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2200",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2200",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:47",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                35.8427,
                                47.9011
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1051",
                            "contactId": "CA2971",
                            "name": "Blue:48",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2971",
                                    "typeId": "blue_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:48",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2971"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                49.776,
                                35.7766
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_38"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1052",
                            "contactId": "CA1463",
                            "name": "Blue:49",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1463",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:49",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:49",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                48.239,
                                77.5085
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_46"
                                },
                                {
                                    "attrId": "a_Detection Range",
                                    "value": 50
                                }
                            ]
                        },
                        {
                            "uniqid": "a1053",
                            "contactId": "CA2370",
                            "name": "Blue:50",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2370",
                                    "typeId": "blue_land_unit"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                47.6749,
                                34.0563
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit24"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_30"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1054",
                            "contactId": "CA2632",
                            "name": "Blue:51",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2632",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:51",
                                    "typeId": "blue_land_c2"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                52.1008,
                                49.48
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Connections",
                                    "value": "_37"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1055",
                            "contactId": "CA1335",
                            "name": "Blue:52",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1335",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1335",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                43.3292,
                                45.505
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1056",
                            "contactId": "CA3042",
                            "name": "Blue:53",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA3042"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                48.967,
                                25.8956
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_20"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1057",
                            "contactId": "CA3158",
                            "name": "Blue:54",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                33.5107,
                                48.3127
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1058",
                            "contactId": "CA3176",
                            "name": "Blue:55",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA3176",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                51.0539,
                                49.4624
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1059",
                            "contactId": "CA1129",
                            "name": "Blue:56",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1129",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:56",
                                    "typeId": "blue_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                41.833,
                                22.544
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1060",
                            "contactId": "CA3201",
                            "name": "Blue:57",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3201",
                                    "typeId": "blue_land_unit",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                43.657,
                                22.1245
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit48"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_25"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1061",
                            "contactId": "CA582",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:58",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                44.1199,
                                74.3552
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_40"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1062",
                            "contactId": "CA276",
                            "name": "Blue:59",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA276",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA276"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:59"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                45.3915,
                                48.9796
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_26"
                                },
                                {
                                    "attrId": "a_Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1063",
                            "contactId": "CA1054",
                            "name": "Blue:60",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1054",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1054"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                41.8111,
                                78.8981
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_20"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1064",
                            "contactId": "CA1123",
                            "name": "Blue:61",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1123",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                41.996,
                                29.9693
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_2"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1065",
                            "contactId": "CA1150",
                            "name": "Blue:62",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1150",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:62",
                                    "typeId": "blue_air_istar",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                50.4091,
                                85.5352
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_7"
                                },
                                {
                                    "attrId": "a_Detection Range",
                                    "value": 50
                                }
                            ]
                        },
                        {
                            "uniqid": "a1066",
                            "contactId": "CA1362",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1362",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                51.0559,
                                22.7937
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Connections",
                                    "value": "_32"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1067",
                            "contactId": "CA479",
                            "name": "Blue:64",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA479",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:64"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                40.5031,
                                76.1078
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_3"
                                },
                                {
                                    "attrId": "a_Mez Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1068",
                            "contactId": "CA25",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA25",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA25"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                53.4648,
                                82.9922
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_34"
                                },
                                {
                                    "attrId": "a_Mez Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1069",
                            "contactId": "CA1699",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1699",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                42.2124,
                                29.4624
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_20"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1070",
                            "contactId": "CA1602",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1602",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                45.6511,
                                85.2424
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1071",
                            "contactId": "CA1211",
                            "name": "Blue:68",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                42.8189,
                                51.527
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1072",
                            "contactId": "CA1337",
                            "name": "Blue:69",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:69",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1337"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                44.6476,
                                51.4425
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Connections",
                                    "value": "_14"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1073",
                            "contactId": "CA945",
                            "name": "Blue:70",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA945",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA945",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                36.6258,
                                43.0279
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1074",
                            "contactId": "CA3316",
                            "name": "Blue:71",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3316",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                40.1729,
                                22.482
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_42"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1075",
                            "contactId": "CA2102",
                            "name": "Blue:72",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:72",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2102",
                                    "typeId": "blue_land_ssm"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                44.1351,
                                22.8965
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_2"
                                },
                                {
                                    "attrId": "a_Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1076",
                            "contactId": "CA302",
                            "name": "Blue:73",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA302",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA302",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                52.5172,
                                24.7799
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit14"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1077",
                            "contactId": "CA960",
                            "name": "Blue:74",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:74",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA960",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                37.2372,
                                24.4823
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_5"
                                },
                                {
                                    "attrId": "a_Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1078",
                            "contactId": "CA1902",
                            "name": "Blue:75",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1902",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:75",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                39.9928,
                                27.4354
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1079",
                            "contactId": "CA419",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA419",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:76",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                52.8708,
                                45.9499
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_11"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1080",
                            "contactId": "CA308",
                            "name": "Blue:77",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA308",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA308",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                42.6292,
                                67.8042
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_19"
                                },
                                {
                                    "attrId": "a_Mez Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1081",
                            "contactId": "CA2480",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2480",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                36.1884,
                                24.4091
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1082",
                            "contactId": "CA2665",
                            "name": "Blue:79",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:79",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                48.6723,
                                77.9399
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit49"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_43"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1083",
                            "contactId": "CA957",
                            "name": "Blue:80",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:80",
                                    "typeId": "blue_air_bomber"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA957"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                48.605,
                                59.7386
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_40"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1084",
                            "contactId": "CA3297",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:81",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                28.8114,
                                43.934
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_1"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1085",
                            "contactId": "CA1901",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1901",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1901",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                28.7684,
                                61.5673
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1086",
                            "contactId": "CA1008",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1008",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1008",
                                    "typeId": "blue_air_istar",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:83",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                49.0895,
                                78.2142
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_37"
                                },
                                {
                                    "attrId": "a_Detection Range",
                                    "value": 50
                                }
                            ]
                        },
                        {
                            "uniqid": "a1087",
                            "contactId": "CA2517",
                            "name": "Blue:84",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2517",
                                    "typeId": "blue_land_asset"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                50.3752,
                                45.2069
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_23"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1088",
                            "contactId": "CA2139",
                            "name": "Blue:85",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2139",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2139"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_sam"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                44.2583,
                                73.3476
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_22"
                                },
                                {
                                    "attrId": "a_Mez Range",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1089",
                            "contactId": "CA643",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA643",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                52.9523,
                                64.5561
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_23"
                                },
                                {
                                    "attrId": "a_Detection Range",
                                    "value": 50
                                }
                            ]
                        },
                        {
                            "uniqid": "a1090",
                            "contactId": "CA2800",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2800",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:87",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                28.8402,
                                60.901
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_24"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1091",
                            "contactId": "CA878",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA878",
                                    "typeId": "blue_land_asset"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA878",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                38.2463,
                                42.5706
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_39"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1092",
                            "contactId": "CA1799",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1799",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                35.5135,
                                36.3218
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Connections",
                                    "value": "_27"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1093",
                            "contactId": "CA929",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA929",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                36.5243,
                                33.7796
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_16"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1094",
                            "contactId": "CA2687",
                            "name": "Blue:91",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                42.8877,
                                40.6993
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1095",
                            "contactId": "CA1996",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1996",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                51.7468,
                                51.6343
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1096",
                            "contactId": "CA3201",
                            "name": "Blue:93",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3201"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3201",
                                    "typeId": "blue_air_bomber"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                46.1877,
                                64.28
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_8"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1097",
                            "contactId": "CA3001",
                            "name": "Blue:94",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3001",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3001",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                47.8761,
                                42.0565
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_22"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1098",
                            "contactId": "CA2104",
                            "name": "Blue:95",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2104",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2104",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2104",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                29.3382,
                                82.3356
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_19"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1099",
                            "contactId": "CA2754",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2754",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                29.6841,
                                30.5025
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Units",
                                    "value": "_12"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1100",
                            "contactId": "CA2850",
                            "name": "Blue:97",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:97",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:97",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                49.8195,
                                83.1221
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_40"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1101",
                            "contactId": "CA1542",
                            "name": "Blue:98",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:98",
                                    "typeId": "blue_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1542",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                51.6309,
                                70.7031
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Size",
                                    "value": "Size of military unit24"
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_3"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1102",
                            "contactId": "CA3205",
                            "name": "Blue:99",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3205",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:99",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                30.2695,
                                38.4138
                            ],
                            "attributes": [
                                {
                                    "attrId": "a_Number",
                                    "value": 100
                                },
                                {
                                    "attrId": "a_Equipment",
                                    "value": "_13"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Red",
                    "uniqid": "f-red",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "CO",
                            "roleId": "red-CO",
                            "isGameControl": false,
                            "isObserver": false,
                            "isInsightViewer": false
                        },
                        {
                            "roleId": "red-mar",
                            "name": "MAR",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-land",
                            "name": "Land & Fires",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-air",
                            "name": "Air & AD",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-direct",
                            "name": "Direct Action",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-threat",
                            "name": "Threat Network",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#ff3d43",
                    "umpire": false,
                    "dirty": false,
                    "assets": [
                        {
                            "uniqid": "a1103",
                            "contactId": "CA2536",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2536",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2536",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2536"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                12.8821,
                                69.0615
                            ],
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
                                    "value": "_15"
                                }
                            ],
                            "comprising": []
                        },
                        {
                            "uniqid": "a1107",
                            "contactId": "CA1568",
                            "name": "Red:4",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1568",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1568",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                28.1412,
                                43.3702
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_25"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1108",
                            "contactId": "CA657",
                            "name": "Red:5",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA657",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA657"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                11.5024,
                                60.4067
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_25"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1109",
                            "contactId": "CA2511",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2511"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:6"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                16.1374,
                                58.6933
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_0"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1110",
                            "contactId": "CA3160",
                            "name": "Red:7",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3160",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3160",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                12.9588,
                                43.5015
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1111",
                            "contactId": "CA3020",
                            "name": "Red:8",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3020",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                11.1092,
                                34.0549
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_28"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1112",
                            "contactId": "CA2232",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:9",
                                    "typeId": "red_air_logs",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2232",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                12.4807,
                                58.5068
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_35"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1113",
                            "contactId": "CA2841",
                            "name": "Red:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:10"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:10",
                                    "typeId": "red_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                17.988,
                                29.0435
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_42"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1114",
                            "contactId": "CA3369",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3369"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                15.8303,
                                76.872
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1115",
                            "contactId": "CA326",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA326",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                12.2432,
                                69.5126
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_31"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1116",
                            "contactId": "CA2510",
                            "name": "Red:13",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2510",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2510",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2510",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                8.934,
                                33.9936
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1117",
                            "contactId": "CA561",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:14",
                                    "typeId": "red_land_ssm"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA561",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                12.1901,
                                53.2887
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_ssm_equipment",
                                    "value": "_41"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1118",
                            "contactId": "CA3309",
                            "name": "Red:15",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:15"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:15",
                                    "typeId": "red_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                18.0351,
                                41.9679
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_15"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1119",
                            "contactId": "CA1317",
                            "name": "Red:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:16",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:16",
                                    "typeId": "red_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1317"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                4.6702,
                                27.4313
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1120",
                            "contactId": "CA3017",
                            "name": "Red:17",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3017"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3017",
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                24.9734,
                                62.1483
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_2"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1121",
                            "contactId": "CA3280",
                            "name": "Red:18",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                10.308,
                                75.8406
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1122",
                            "contactId": "CA532",
                            "name": "Red:19",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:19",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                19.3191,
                                51.46
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_28"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1123",
                            "contactId": "CA805",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:20",
                                    "typeId": "red_air_istar",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                6.7671,
                                46.2626
                            ],
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
                                    "value": "_21"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1124",
                            "contactId": "CA383",
                            "name": "Red:21",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA383",
                                    "typeId": "red_air_fighter",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA383",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:21",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                22.0942,
                                78.948
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_2"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1125",
                            "contactId": "CA1701",
                            "name": "Red:22",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:22",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                9.8703,
                                36.7524
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_26"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1126",
                            "contactId": "CA1430",
                            "name": "Red:23",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:23"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1430",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1430",
                                    "typeId": "red_land_c2"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                5.7494,
                                66.4099
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_7"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1127",
                            "contactId": "CA998",
                            "name": "Red:24",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA998",
                                    "typeId": "red_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                23.9833,
                                26.0866
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_40"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1128",
                            "contactId": "CA1046",
                            "name": "Red:25",
                            "perceptions": [],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.965,
                                38.1795
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_38"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1129",
                            "contactId": "CA716",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:26",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:26",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                28.2931,
                                37.7767
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_9"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1130",
                            "contactId": "CA410",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA410",
                                    "typeId": "red_land_asset",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA410",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                11.2464,
                                29.2041
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_41"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1131",
                            "contactId": "CA466",
                            "name": "Red:28",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA466",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:28",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                8.7186,
                                49.0649
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1132",
                            "contactId": "CA903",
                            "name": "Red:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:29"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:29",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                23.1228,
                                84.4385
                            ],
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
                                    "value": "_22"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1133",
                            "contactId": "CA2105",
                            "name": "Red:30",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2105"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:30",
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                22.8215,
                                63.6366
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_41"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1134",
                            "contactId": "CA1791",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1791",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1791",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                16.1755,
                                61.0408
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1135",
                            "contactId": "CA308",
                            "name": "Red:32",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA308"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA308",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA308",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                27.2426,
                                34.5638
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_25"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1136",
                            "contactId": "CA284",
                            "name": "Red:33",
                            "perceptions": [],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                22.4934,
                                73.7654
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_13"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1137",
                            "contactId": "CA1664",
                            "name": "Red:34",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:34"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1664",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                7.5556,
                                72.7895
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_ssm_equipment",
                                    "value": "_5"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1138",
                            "contactId": "CA1332",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:35",
                                    "typeId": "red_air_logs",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1332",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:35"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                25.4502,
                                54.5914
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1139",
                            "contactId": "CA1531",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1531",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                11.7743,
                                28.8114
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_21"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1140",
                            "contactId": "CA1198",
                            "name": "Red:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1198"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1198",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:37",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                24.3767,
                                44.6166
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_18"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1141",
                            "contactId": "CA890",
                            "name": "Red:38",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA890",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:38"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.7134,
                                75.7985
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_2"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1142",
                            "contactId": "CA194",
                            "name": "Red:39",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA194",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                11.6152,
                                67.8945
                            ],
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
                                    "value": "_9"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1143",
                            "contactId": "CA1027",
                            "name": "Red:40",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:40",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1027"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                22.4723,
                                46.9578
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_ssm_equipment",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1144",
                            "contactId": "CA830",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:41"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA830",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                5.7111,
                                79.6806
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_29"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1145",
                            "contactId": "CA401",
                            "name": "Red:42",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA401",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA401"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA401",
                                    "typeId": "red_land_c2"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                11.9371,
                                57.8808
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_45"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1146",
                            "contactId": "CA1705",
                            "name": "Red:43",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1705",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                17.3515,
                                36.1633
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_41"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1147",
                            "contactId": "CA1594",
                            "name": "Red:44",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1594",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:44",
                                    "typeId": "red_land_ssm",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                13.2894,
                                73.008
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_ssm_equipment",
                                    "value": "_25"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1148",
                            "contactId": "CA1570",
                            "name": "Red:45",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:45",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:45",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                11.2211,
                                31.5333
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_9"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1149",
                            "contactId": "CA3355",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3355",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3355",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                18.0384,
                                61.017
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_28"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1150",
                            "contactId": "CA347",
                            "name": "Red:47",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA347",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                21.5062,
                                73.5286
                            ],
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
                                    "value": "_21"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1151",
                            "contactId": "CA149",
                            "name": "Red:48",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA149",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA149"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                10.5287,
                                46.7462
                            ],
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
                                    "value": "_37"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1152",
                            "contactId": "CA1425",
                            "name": "Red:49",
                            "perceptions": [],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                3.938,
                                55.5978
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_28"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1153",
                            "contactId": "CA1673",
                            "name": "Red:50",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1673",
                                    "typeId": "red_land_sam"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                15.2578,
                                26.6546
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_3"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1154",
                            "contactId": "CA539",
                            "name": "Red:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:51"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA539",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                24.0609,
                                55.2006
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_7"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1155",
                            "contactId": "CA1447",
                            "name": "Red:52",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_mtg"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                5.225,
                                85.6194
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_39"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1156",
                            "contactId": "CA2911",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2911",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                19.4395,
                                32.36
                            ],
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
                                    "value": "_42"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1157",
                            "contactId": "CA340",
                            "name": "Red:54",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA340",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:54",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                18.6004,
                                43.4124
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_30"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1158",
                            "contactId": "CA513",
                            "name": "Red:55",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:55",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:55",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA513",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.7048,
                                41.8151
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_18"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1159",
                            "contactId": "CA1136",
                            "name": "Red:56",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1136",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                6.1586,
                                59.4881
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_20"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1160",
                            "contactId": "CA40",
                            "name": "Red:57",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA40",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                28.2336,
                                65.9443
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_47"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1161",
                            "contactId": "CA108",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:58",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:58",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                25.9224,
                                80.5487
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_ssm_equipment",
                                    "value": "_27"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1162",
                            "contactId": "CA1863",
                            "name": "Red:59",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1863",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:59",
                                    "typeId": "red_air_logs"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                21.2712,
                                53.8323
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_7"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1163",
                            "contactId": "CA1619",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1619",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1619",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1619",
                                    "typeId": "red_air_logs",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                11.7746,
                                34.713
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_15"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1164",
                            "contactId": "CA2874",
                            "name": "Red:61",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2874",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                14.038,
                                60.953
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1165",
                            "contactId": "CA759",
                            "name": "Red:62",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA759",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:62"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                24.9493,
                                79.9526
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1166",
                            "contactId": "CA1267",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1267",
                                    "typeId": "red_land_ssm",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:63"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                20.7122,
                                79.7787
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_ssm_equipment",
                                    "value": "_18"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1167",
                            "contactId": "CA1620",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:64"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1620",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1620",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                26.8514,
                                67.1817
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1168",
                            "contactId": "CA916",
                            "name": "Red:65",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:65",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:65",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                26.035,
                                65.0776
                            ],
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
                                    "value": "_2"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1169",
                            "contactId": "CA357",
                            "name": "Red:66",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA357"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:66",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                19.5568,
                                61.5581
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_47"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1170",
                            "contactId": "CA977",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA977",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                13.721,
                                23.7553
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_36"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1171",
                            "contactId": "CA2355",
                            "name": "Red:68",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2355",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                13.1539,
                                41.2506
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_36"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1172",
                            "contactId": "CA2097",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2097"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:69",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                3.8406,
                                26.621
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_46"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1173",
                            "contactId": "CA2129",
                            "name": "Red:70",
                            "perceptions": [],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                11.3066,
                                44.2618
                            ],
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
                                    "value": "_9"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1174",
                            "contactId": "CA3254",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3254",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3254",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:71",
                                    "typeId": "red_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                16.4527,
                                52.361
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_16"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1175",
                            "contactId": "CA228",
                            "name": "Red:72",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:72",
                                    "typeId": "red_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA228"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                26.8124,
                                30.5575
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1176",
                            "contactId": "CA741",
                            "name": "Red:73",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:73",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                22.6553,
                                27.8619
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_38"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1177",
                            "contactId": "CA1315",
                            "name": "Red:74",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1315"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1315",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                27.553,
                                64.2691
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_34"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1178",
                            "contactId": "CA1577",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1577"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                7.4803,
                                80.0119
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_48"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1179",
                            "contactId": "CA1982",
                            "name": "Red:76",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:76",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:76",
                                    "typeId": "red_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                21.1526,
                                77.311
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1180",
                            "contactId": "CA79",
                            "name": "Red:77",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:77",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                27.685,
                                49.6421
                            ],
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
                                    "value": "_4"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1181",
                            "contactId": "CA2482",
                            "name": "Red:78",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2482",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2482",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                14.5164,
                                32.8935
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_24"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1182",
                            "contactId": "CA1052",
                            "name": "Red:79",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1052",
                                    "typeId": "red_maritime_fiac"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1052",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                18.2047,
                                62.1004
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1183",
                            "contactId": "CA3108",
                            "name": "Red:80",
                            "perceptions": [],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                15.7985,
                                44.7777
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_33"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1184",
                            "contactId": "CA3394",
                            "name": "Red:81",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:81",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                16.4273,
                                73.8536
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_30"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1185",
                            "contactId": "CA322",
                            "name": "Red:82",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:82",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA322",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA322",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                10.9422,
                                72.0646
                            ],
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
                            ]
                        },
                        {
                            "uniqid": "a1186",
                            "contactId": "CA3169",
                            "name": "Red:83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:83",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:83",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                26.4284,
                                44.5474
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1187",
                            "contactId": "CA867",
                            "name": "Red:84",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA867",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                4.0232,
                                36.2015
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_range",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_ssm_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_ssm_equipment",
                                    "value": "_28"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1188",
                            "contactId": "CA916",
                            "name": "Red:85",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA916",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                25.9948,
                                63.3736
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_3"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1189",
                            "contactId": "CA528",
                            "name": "Red:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA528",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                19.0741,
                                25.4275
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1190",
                            "contactId": "CA1811",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1811",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:87",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                3.2162,
                                74.3292
                            ],
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
                                    "value": "_47"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1191",
                            "contactId": "CA1547",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1547",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:88"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                4.6915,
                                33.5569
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_13"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1192",
                            "contactId": "CA250",
                            "name": "Red:89",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA250",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA250",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                21.2464,
                                51.2056
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1193",
                            "contactId": "CA2010",
                            "name": "Red:90",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2010",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:90"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                4.8574,
                                28.7112
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_13"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1194",
                            "contactId": "CA392",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:91",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                20.6496,
                                63.278
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_12"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1195",
                            "contactId": "CA1626",
                            "name": "Red:92",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:92",
                                    "typeId": "red_land_sam",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1626",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                13.1216,
                                30.995
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_7"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1196",
                            "contactId": "CA2519",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2519",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:93",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                20.611,
                                30.6244
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1197",
                            "contactId": "CA1691",
                            "name": "Red:94",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:94"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1691",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                24.7228,
                                81.0946
                            ],
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
                                    "value": "_46"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1198",
                            "contactId": "CA1592",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1592",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                5.7634,
                                59.8908
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_10"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1199",
                            "contactId": "CA2280",
                            "name": "Red:96",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                21.4275,
                                30.9463
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ]
                        },
                        {
                            "uniqid": "a1200",
                            "contactId": "CA98",
                            "name": "Red:97",
                            "perceptions": [],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.0128,
                                30.1444
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_46"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1201",
                            "contactId": "CA746",
                            "name": "Red:98",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA746",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:98",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                18.4216,
                                64.851
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_15"
                                }
                            ]
                        },
                        {
                            "uniqid": "a1202",
                            "contactId": "CA262",
                            "name": "Red:99",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA262"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:99",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA262"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                13.4246,
                                76.8599
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_15"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Green",
                    "uniqid": "f-green",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "CO",
                            "roleId": "green-co",
                            "isGameControl": false,
                            "isObserver": false,
                            "isInsightViewer": false
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#7ed321",
                    "umpire": false,
                    "dirty": false
                },
                {
                    "name": "White",
                    "uniqid": "f-white",
                    "overview": "Umpire force.",
                    "roles": [
                        {
                            "name": "CO",
                            "roleId": "white-co",
                            "isGameControl": true,
                            "isObserver": true,
                            "isInsightViewer": true
                        }
                    ],
                    "iconURL": "default_img/umpireDefault.png",
                    "color": "#FCFBEE",
                    "umpire": false,
                    "dirty": false
                }
            ],
            "dirty": false
        },
        "channels": {
            "name": "Channels",
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
                            "attribution": "Generated by QTiles ./arabian_sea/{z}/{x}/{y}.png ",
                            "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    },
                    "participants": [
                        {
                            "forceUniqid": "f-blue",
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
                            "forceUniqid": "f-red",
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
                    "uniqid": "channel-planning"
                },

                {
                    "uniqid": "red-sme",
                    "name": "Red & SME",
                    "channelType": "ChannelChat",
                    "participants": [
                        {
                            "forceUniqid": "f-green",
                            "roles": [],
                            "subscriptionId": "hndha",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "f-red",
                            "roles": [],
                            "subscriptionId": "",
                            "pType": "ParticipantChat"
                        }
                    ]
                },
                {
                    "uniqid": "blue-sme",
                    "name": "Blue & SME",
                    "channelType": "ChannelChat",
                    "participants": [
                        {
                            "forceUniqid": "f-green",
                            "roles": [],
                            "subscriptionId": "vk8l",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "umpire",
                            "roles": [],
                            "subscriptionId": "asdf",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "umpire",
                            "roles": [
                                "adjud-1",
                                "adjud-2"
                            ],
                            "subscriptionId": "gfda",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "f-blue",
                            "roles": [],
                            "subscriptionId": "dsfg",
                            "pType": "ParticipantChat"
                        }
                    ]
                },
                {
                    "uniqid": "red-chat",
                    "name": "Red Chat",
                    "channelType": "ChannelChat",
                    "participants": [
                        {

                            "forceUniqid": "f-red",
                            "roles": [],
                            "subscriptionId": "asfes",
                            "pType": "ParticipantChat"
                        }
                    ]
                },
                {
                    "uniqid": "blue-chat",
                    "name": "Blue Chat",
                    "channelType": "ChannelChat",
                    "participants": [
                        {

                            "forceUniqid": "f-blue",
                            "roles": [],
                            "subscriptionId": "adst",
                            "pType": "ParticipantChat"
                        }
                    ]
                }
            ],
            "selectedChannel": "",
            "dirty": false
        },
        "platformTypes": {
            "dirty": false,
            "name": "Platform Types",
            "platformTypes": [
                {
                    "name": "Fighter",
                    "icon": "n_blue_air_fighter.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_fighter",
                    "attributeTypeIds": ["a_Number", "a_Equipment"],
                    "travelMode": "air"
                },
                {
                    "name": "Bomber",
                    "icon": "n_blue_air_bomber.svg",
                    "attributeTypeIds": ["a_Number", "a_Equipment"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_bomber",
                    "travelMode": "air"
                },
                {
                    "name": "SAM",
                    "icon": "n_blue_land_sam.svg",
                    "attributeTypeIds": ["a_Number", "a_Equipment", "a_Mez Range"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "MTG",
                    "icon": "n_blue_maritime_task_force.svg",
                    "attributeTypeIds": ["a_Equipment"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mtg",
                    "travelMode": "sea"
                },
                {
                    "name": "Ship",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypeIds": ["a_Equipment"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_ship",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine",
                    "icon": "n_blue_maritime_submarine.svg",
                    "attributeTypeIds": ["a_Equipment"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit",
                    "icon": "n_blue_land_armed_inf.svg",
                    "attributeTypeIds": ["a_Size", "a_Equipment"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_unit",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_blue_land_asset.svg",
                    "attributeTypeIds": ["a_Units"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_asset",
                    "travelMode": "sea"
                },
                {
                    "name": "SSM",
                    "icon": "n_blue_land_ssm.svg",
                    "attributeTypeIds": ["a_Number", "a_Equipment", "a_Range"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_ssm",
                    "travelMode": "sea"
                },
                {
                    "name": "ISTAR",
                    "icon": "n_blue_air_recce.svg",
                    "attributeTypeIds": ["a_Number", "a_Equipment", "a_Detection Range"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_istar",
                    "travelMode": "sea"
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_blue_air_utility.svg",
                    "attributeTypeIds": ["a_Number", "a_Equipment"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_logs",
                    "travelMode": "sea"
                },
                {
                    "name": "C2 Node",
                    "icon": "n_blue_hq.svg",
                    "attributeTypeIds": ["a_Connections"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypeIds": ["a_Number"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Minefield",
                    "icon": "n_blue_maritime_minefield.svg",
                    "attributeTypeIds": ["a_Density"],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mine",
                    "travelMode": "sea"
                },
                {
                    "name": "Fighter",
                    "icon": "n_red_air_fighter.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_fighter",
                    "attributeTypes": [
                        {
                            "attrId": "r_fighter_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "name": "SAM",
                    "icon": "n_red_land_sam.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "MTG",
                    "icon": "n_red_maritime_task_force.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_mtg_units",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Members of Task Group",
                            "editableByPlayer": false,
                            "name": "Units"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mtg",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine",
                    "icon": "n_red_maritime_submarine.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_sub_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit",
                    "icon": "n_red_land_armed_inf.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_land_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_unit",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_red_land_sam.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_asset",
                    "travelMode": "sea"
                },
                {
                    "name": "SSM",
                    "icon": "n_red_land_ssm.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_ssm",
                    "travelMode": "sea"
                },
                {
                    "name": "ISTAR",
                    "icon": "n_red_air_recce.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_istar",
                    "travelMode": "sea"
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_red_air_utility.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_logs",
                    "travelMode": "sea"
                },
                {
                    "name": "C2 Node",
                    "icon": "n_red_hq.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_c2_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "C2 Connections for asset",
                            "editableByPlayer": false,
                            "name": "Connections"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC",
                    "icon": "n_red_maritime_missile_boat.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_fiac_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Minefield",
                    "icon": "n_red_maritime_minefield.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_mine_density",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Density of minefield",
                            "editableByPlayer": false,
                            "name": "density",
                            "units": "per km2"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mine",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_red_land_asset.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_asset",
                    "travelMode": "sea"
                }
            ],
            "selectedType": ""
        },
        "attributeTypes": {
            "attributes": [
                {
                    "attrId": "a_Number",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Number of units",
                    "editableByPlayer": false,
                    "name": "Number"
                }, {
                    "attrId": "a_Mez Range",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "MEZ Range",
                    "editableByPlayer": false,
                    "name": "MEZ Range"
                },
                {
                    "attrId": "a_Size",
                    "attrType": "AttributeTypeString",
                    "defaultValue": "Size of military unit",
                    "description": "Equipment carried on asset",
                    "editableByPlayer": false,
                    "name": "Size"
                },
                {
                    "attrId": "a_Range",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Range of weapon",
                    "editableByPlayer": false,
                    "name": "Range",
                    "units": "km"
                },
                {
                    "attrId": "a_Detection Range",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 50,
                    "description": "Detection Range of asset",
                    "editableByPlayer": false,
                    "name": "Detection Range",
                    "units": "km"
                },
                {
                    "attrId": "a_Connections",
                    "attrType": "AttributeTypeString",
                    "defaultValue": "",
                    "description": "C2 Connections for asset",
                    "editableByPlayer": false,
                    "name": "Connections"
                },
                {
                    "attrId": "a_Density",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Density of minefield",
                    "editableByPlayer": false,
                    "name": "Density",
                    "units": "per km2"
                },
                {
                    "attrId": "a_Equipment",
                    "attrType": "AttributeTypeString",
                    "defaultValue": "",
                    "description": "Equipment carried on asset",
                    "editableByPlayer": false,
                    "name": "Equipment"
                },
                {
                    "attrId": "a_Units",
                    "attrType": "AttributeTypeString",
                    "defaultValue": "",
                    "description": "Child units",
                    "editableByPlayer": false,
                    "name": "Units"
                }
            ]
        },
         "activities": {
            "activities": [
                {
                    "force": "f-blue",
                    "groupedActivities": [
                        {
                            "category": "Land",
                            "activities": [
                                {
                                    "name": "BMD MEZ",
                                    "uniqid": "f-blue-Land-BMD MEZ",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "BMD MEZ Location",
                                            "optional": false,
                                            "uniqid": "BMD MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-blue-Land-Ballistic Missile Strike",
                                    "template": "Land--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Cruise Missile Strike",
                                    "uniqid": "f-blue-Land-Cruise Missile Strike",
                                    "template": "Land--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-blue-Land-EW Attack",
                                    "template": "Land--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-blue-Land-ISTAR",
                                    "template": "Land--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-blue-Land-Patrol",
                                    "template": "Land--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-blue-Land-Provide Logistics",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-blue-Land-Resupply",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SAM MEZ",
                                    "uniqid": "f-blue-Land-SAM MEZ",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "SAM MEZ Location",
                                            "optional": false,
                                            "uniqid": "SAM MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-blue-Land-Transit",
                                    "template": "Land--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Maritime",
                            "activities": [
                                {
                                    "name": "ASW Barrier",
                                    "uniqid": "f-blue-Maritime-ASW Barrier",
                                    "template": "Maritime--ASWBarrier",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "ASW Area",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "BMD MEZ",
                                    "uniqid": "f-blue-Maritime-BMD MEZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "BMD MEZ Location",
                                            "optional": false,
                                            "uniqid": "BMD MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-blue-Maritime-Ballistic Missile Strike",
                                    "template": "Maritime--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Cruise Missile Strike",
                                    "uniqid": "f-blue-Maritime-Cruise Missile Strike",
                                    "template": "Maritime--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-blue-Maritime-EW Attack",
                                    "template": "Maritime--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "FIAC EZ",
                                    "uniqid": "f-blue-Maritime-FIAC EZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "FIAC EZ Location",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-blue-Maritime-ISTAR",
                                    "template": "Maritime--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mine Clearance",
                                    "uniqid": "f-blue-Maritime-Mine Clearance",
                                    "template": "Maritime--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Mine Clearance Area Area",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mine Laying",
                                    "uniqid": "f-blue-Maritime-Mine Laying",
                                    "template": "Maritime--MineLaying",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Mine Laying-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Mine Area",
                                            "optional": false,
                                            "uniqid": "Mine Laying-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Mine Laying-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-blue-Maritime-Patrol",
                                    "template": "Maritime--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-blue-Maritime-Provide Logistics",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-blue-Maritime-Resupply",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SAM MEZ",
                                    "uniqid": "f-blue-Maritime-SAM MEZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "SAM MEZ Location",
                                            "optional": false,
                                            "uniqid": "SAM MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-blue-Maritime-Transit",
                                    "template": "Maritime--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Air",
                            "activities": [
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-blue-Air-Ballistic Missile Strike",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Defensive Counter Air",
                                    "uniqid": "f-blue-Air-Defensive Counter Air",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "DCA Area",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-blue-Air-EW Attack",
                                    "template": "Air--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-blue-Air-ISTAR",
                                    "template": "Air--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "uniqid": "f-blue-Air-Offensive Counter Air",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "OCA Area",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-blue-Air-Patrol",
                                    "template": "Air--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-blue-Air-Provide Logistics",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-blue-Air-Resupply",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Stand Off Strike",
                                    "uniqid": "f-blue-Air-Stand Off Strike",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-3"
                                        }
                                    ]
                                },
                                {
                                    "name": "Suppression of Air Defences (SEAD)",
                                    "uniqid": "f-blue-Air-Suppression of Air Defences (SEAD)",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "TST Area",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Time Sensitive Targeting (TST)",
                                    "uniqid": "f-blue-Air-Time Sensitive Targeting (TST)",
                                    "template": "Air--TST",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "TST Area",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-blue-Air-Transit",
                                    "template": "Air--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Other",
                            "activities": [
                                {
                                    "name": "Cyber/Space Activity",
                                    "uniqid": "f-blue-Other-Cyber/Space Activity",
                                    "template": "Other--Cyber",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Activity Location",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SOF Activity",
                                    "uniqid": "f-blue-Other-SOF Activity",
                                    "template": "Other--SOFAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "SOF Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Activity Location",
                                            "optional": false,
                                            "uniqid": "SOF Activity-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Efect Location",
                                            "optional": false,
                                            "uniqid": "SOF Activity-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "SOF Activity-3"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "force": "f-red",
                    "groupedActivities": [
                        {
                            "category": "Land",
                            "activities": [
                                {
                                    "name": "BMD MEZ",
                                    "uniqid": "f-red-Land-BMD MEZ",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "BMD MEZ Location",
                                            "optional": false,
                                            "uniqid": "BMD MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-red-Land-Ballistic Missile Strike",
                                    "template": "Land--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Cruise Missile Strike",
                                    "uniqid": "f-red-Land-Cruise Missile Strike",
                                    "template": "Land--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-red-Land-EW Attack",
                                    "template": "Land--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-red-Land-ISTAR",
                                    "template": "Land--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-red-Land-Patrol",
                                    "template": "Land--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-red-Land-Provide Logistics",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-red-Land-Resupply",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SAM MEZ",
                                    "uniqid": "f-red-Land-SAM MEZ",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "SAM MEZ Location",
                                            "optional": false,
                                            "uniqid": "SAM MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-red-Land-Transit",
                                    "template": "Land--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Maritime",
                            "activities": [
                                {
                                    "name": "ASW Barrier",
                                    "uniqid": "f-red-Maritime-ASW Barrier",
                                    "template": "Maritime--ASWBarrier",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "ASW Area",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "BMD MEZ",
                                    "uniqid": "f-red-Maritime-BMD MEZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "BMD MEZ Location",
                                            "optional": false,
                                            "uniqid": "BMD MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-red-Maritime-Ballistic Missile Strike",
                                    "template": "Maritime--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Cruise Missile Strike",
                                    "uniqid": "f-red-Maritime-Cruise Missile Strike",
                                    "template": "Maritime--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-red-Maritime-EW Attack",
                                    "template": "Maritime--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "FIAC EZ",
                                    "uniqid": "f-red-Maritime-FIAC EZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "FIAC EZ Location",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-red-Maritime-ISTAR",
                                    "template": "Maritime--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mine Clearance",
                                    "uniqid": "f-red-Maritime-Mine Clearance",
                                    "template": "Maritime--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Mine Clearance Area Area",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mine Laying",
                                    "uniqid": "f-red-Maritime-Mine Laying",
                                    "template": "Maritime--MineLaying",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Mine Laying-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Mine Area",
                                            "optional": false,
                                            "uniqid": "Mine Laying-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Mine Laying-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-red-Maritime-Patrol",
                                    "template": "Maritime--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-red-Maritime-Provide Logistics",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-red-Maritime-Resupply",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SAM MEZ",
                                    "uniqid": "f-red-Maritime-SAM MEZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "SAM MEZ Location",
                                            "optional": false,
                                            "uniqid": "SAM MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-red-Maritime-Transit",
                                    "template": "Maritime--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Air",
                            "activities": [
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-red-Air-Ballistic Missile Strike",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Defensive Counter Air",
                                    "uniqid": "f-red-Air-Defensive Counter Air",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "DCA Area",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-red-Air-EW Attack",
                                    "template": "Air--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-red-Air-ISTAR",
                                    "template": "Air--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "uniqid": "f-red-Air-Offensive Counter Air",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "OCA Area",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-red-Air-Patrol",
                                    "template": "Air--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-red-Air-Provide Logistics",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-red-Air-Resupply",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Stand Off Strike",
                                    "uniqid": "f-red-Air-Stand Off Strike",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-3"
                                        }
                                    ]
                                },
                                {
                                    "name": "Suppression of Air Defences (SEAD)",
                                    "uniqid": "f-red-Air-Suppression of Air Defences (SEAD)",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "TST Area",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Time Sensitive Targeting (TST)",
                                    "uniqid": "f-red-Air-Time Sensitive Targeting (TST)",
                                    "template": "Air--TST",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "TST Area",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-red-Air-Transit",
                                    "template": "Air--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Other",
                            "activities": [
                                {
                                    "name": "Cyber/Space Activity",
                                    "uniqid": "f-red-Other-Cyber/Space Activity",
                                    "template": "Other--Cyber",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Activity Location",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SOF Activity",
                                    "uniqid": "f-red-Other-SOF Activity",
                                    "template": "Other--SOFAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "SOF Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Activity Location",
                                            "optional": false,
                                            "uniqid": "SOF Activity-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Efect Location",
                                            "optional": false,
                                            "uniqid": "SOF Activity-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "SOF Activity-3"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "force": "f-green",
                    "groupedActivities": [
                        {
                            "category": "Land",
                            "activities": [
                                {
                                    "name": "BMD MEZ",
                                    "uniqid": "f-green-Land-BMD MEZ",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "BMD MEZ Location",
                                            "optional": false,
                                            "uniqid": "BMD MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-green-Land-Ballistic Missile Strike",
                                    "template": "Land--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Cruise Missile Strike",
                                    "uniqid": "f-green-Land-Cruise Missile Strike",
                                    "template": "Land--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-green-Land-EW Attack",
                                    "template": "Land--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-green-Land-ISTAR",
                                    "template": "Land--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-green-Land-Patrol",
                                    "template": "Land--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-green-Land-Provide Logistics",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-green-Land-Resupply",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SAM MEZ",
                                    "uniqid": "f-green-Land-SAM MEZ",
                                    "template": "Land--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "SAM MEZ Location",
                                            "optional": false,
                                            "uniqid": "SAM MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-green-Land-Transit",
                                    "template": "Land--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Maritime",
                            "activities": [
                                {
                                    "name": "ASW Barrier",
                                    "uniqid": "f-green-Maritime-ASW Barrier",
                                    "template": "Maritime--ASWBarrier",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "ASW Area",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ASW Barrier-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "BMD MEZ",
                                    "uniqid": "f-green-Maritime-BMD MEZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "BMD MEZ Location",
                                            "optional": false,
                                            "uniqid": "BMD MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-green-Maritime-Ballistic Missile Strike",
                                    "template": "Maritime--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Cruise Missile Strike",
                                    "uniqid": "f-green-Maritime-Cruise Missile Strike",
                                    "template": "Maritime--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Cruise Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-green-Maritime-EW Attack",
                                    "template": "Maritime--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "FIAC EZ",
                                    "uniqid": "f-green-Maritime-FIAC EZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "FIAC EZ Location",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "FIAC EZ-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-green-Maritime-ISTAR",
                                    "template": "Maritime--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mine Clearance",
                                    "uniqid": "f-green-Maritime-Mine Clearance",
                                    "template": "Maritime--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Mine Clearance Area Area",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Mine Clearance-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Mine Laying",
                                    "uniqid": "f-green-Maritime-Mine Laying",
                                    "template": "Maritime--MineLaying",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Mine Laying-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Mine Area",
                                            "optional": false,
                                            "uniqid": "Mine Laying-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Mine Laying-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-green-Maritime-Patrol",
                                    "template": "Maritime--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-green-Maritime-Provide Logistics",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-green-Maritime-Resupply",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SAM MEZ",
                                    "uniqid": "f-green-Maritime-SAM MEZ",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Point",
                                            "name": "SAM MEZ Location",
                                            "optional": false,
                                            "uniqid": "SAM MEZ-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-green-Maritime-Transit",
                                    "template": "Maritime--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Air",
                            "activities": [
                                {
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-green-Air-Ballistic Missile Strike",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Ballistic Missile Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Defensive Counter Air",
                                    "uniqid": "f-green-Air-Defensive Counter Air",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "DCA Area",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Defensive Counter Air-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "EW Attack",
                                    "uniqid": "f-green-Air-EW Attack",
                                    "template": "Air--EWAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "EW Attack-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "EW Target",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "ISTAR",
                                    "uniqid": "f-green-Air-ISTAR",
                                    "template": "Air--ISTAR",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "ISTAR-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "uniqid": "f-green-Air-Offensive Counter Air",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "OCA Area",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Offensive Counter Air-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Patrol",
                                    "uniqid": "f-green-Air-Patrol",
                                    "template": "Air--Patrol",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Patrol-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Provide Logistics",
                                    "uniqid": "f-green-Air-Provide Logistics",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "LOGS Destination",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Provide Logistics-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Resupply",
                                    "uniqid": "f-green-Air-Resupply",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Resupply-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Resupply Destingation",
                                            "optional": false,
                                            "uniqid": "Resupply-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Resupply-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Stand Off Strike",
                                    "uniqid": "f-green-Air-Stand Off Strike",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Asset Location",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Strike Target",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-3"
                                        }
                                    ]
                                },
                                {
                                    "name": "Suppression of Air Defences (SEAD)",
                                    "uniqid": "f-green-Air-Suppression of Air Defences (SEAD)",
                                    "template": "Air--Duration",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "TST Area",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Time Sensitive Targeting (TST)",
                                    "uniqid": "f-green-Air-Time Sensitive Targeting (TST)",
                                    "template": "Air--TST",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "TST Area",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Time Sensitive Targeting (TST)-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "uniqid": "f-green-Air-Transit",
                                    "template": "Air--Transit"
                                }
                            ]
                        },
                        {
                            "category": "Other",
                            "activities": [
                                {
                                    "name": "Cyber/Space Activity",
                                    "uniqid": "f-green-Other-Cyber/Space Activity",
                                    "template": "Other--Cyber",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Activity Location",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Cyber/Space Activity-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "SOF Activity",
                                    "uniqid": "f-green-Other-SOF Activity",
                                    "template": "Other--SOFAttack",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "SOF Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Activity Location",
                                            "optional": false,
                                            "uniqid": "SOF Activity-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Efect Location",
                                            "optional": false,
                                            "uniqid": "SOF Activity-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "SOF Activity-3"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
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
