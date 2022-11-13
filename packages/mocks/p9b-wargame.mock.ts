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
                            "uniqid": "a2201",
                            "contactId": "CA1860",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1860"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1860",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                47.6436,
                                25.4143
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_25",
                                "a_Range": 100
                            },
                            "comprising": []
                        },
                        {
                            "uniqid": "a2205",
                            "contactId": "CA468",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA468"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                53.4817,
                                27.5445
                            ],
                            "attributes": {
                                "a_Units": "_43"
                            }
                        },
                        {
                            "uniqid": "a2206",
                            "contactId": "CA3034",
                            "name": "Blue:5",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:5",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3034",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                33.3353,
                                62.8241
                            ],
                            "attributes": {
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a2207",
                            "contactId": "CA2255",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2255",
                                    "typeId": "blue_maritime_mtg"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2255"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                45.104,
                                65.4753
                            ],
                            "attributes": {
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a2208",
                            "contactId": "CA2327",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:7",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                43.9116,
                                84.5394
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2209",
                            "contactId": "CA2019",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:8",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:8",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                36.2261,
                                24.5069
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_14",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2210",
                            "contactId": "CA2757",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2757",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                35.2657,
                                53.6582
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a2211",
                            "contactId": "CA1504",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:10"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1504",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                50.4955,
                                25.5656
                            ],
                            "attributes": {
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a2212",
                            "contactId": "CA316",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA316",
                                    "typeId": "blue_land_asset"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA316",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                41.3063,
                                70.1738
                            ],
                            "attributes": {
                                "a_Units": "_37"
                            }
                        },
                        {
                            "uniqid": "a2213",
                            "contactId": "CA140",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA140",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA140",
                                    "typeId": "blue_land_c2"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                36.5023,
                                81.436
                            ],
                            "attributes": {
                                "a_Connections": "_4"
                            }
                        },
                        {
                            "uniqid": "a2214",
                            "contactId": "CA1409",
                            "name": "Blue:13",
                            "perceptions": [],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                42.7871,
                                38.3912
                            ],
                            "attributes": {
                                "a_Connections": "_36"
                            }
                        },
                        {
                            "uniqid": "a2215",
                            "contactId": "CA162",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:14",
                                    "typeId": "blue_land_ssm"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA162"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                54.4579,
                                74.8272
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_44",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2216",
                            "contactId": "CA1649",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:15"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:15",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                31.7212,
                                38.6731
                            ],
                            "attributes": {
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a2217",
                            "contactId": "CA2961",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2961",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:16",
                                    "typeId": "blue_land_asset"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                44.5693,
                                61.8754
                            ],
                            "attributes": {
                                "a_Units": "_5"
                            }
                        },
                        {
                            "uniqid": "a2218",
                            "contactId": "CA737",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA737",
                                    "typeId": "blue_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:17",
                                    "typeId": "blue_land_c2"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA737",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                29.8111,
                                74.0762
                            ],
                            "attributes": {
                                "a_Connections": "_40"
                            }
                        },
                        {
                            "uniqid": "a2219",
                            "contactId": "CA1460",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1460",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_sam"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                33.0721,
                                69.4203
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_16",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a2220",
                            "contactId": "CA1929",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1929",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:19",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                38.6532,
                                81.8569
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_23",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a2221",
                            "contactId": "CA610",
                            "name": "Blue:20",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA610",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA610",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                53.9132,
                                59.0374
                            ],
                            "attributes": {
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "a2222",
                            "contactId": "CA822",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:21",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                47.0744,
                                81.3624
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_24"
                            }
                        },
                        {
                            "uniqid": "a2223",
                            "contactId": "CA1222",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1222",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1222",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                53.5514,
                                38.0738
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a2224",
                            "contactId": "CA59",
                            "name": "Blue:23",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:23",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:23"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                35.9873,
                                40.2419
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a2225",
                            "contactId": "CA1745",
                            "name": "Blue:24",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1745"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                54.8574,
                                30.6349
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a2226",
                            "contactId": "CA2746",
                            "name": "Blue:25",
                            "perceptions": [],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                29.6837,
                                40.2526
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit19",
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a2227",
                            "contactId": "CA323",
                            "name": "Blue:26",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:26"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA323"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:26",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                50.8632,
                                54.635
                            ],
                            "attributes": {
                                "a_Connections": "_38"
                            }
                        },
                        {
                            "uniqid": "a2228",
                            "contactId": "CA1888",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1888",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                38.5373,
                                70.9842
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_42",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2229",
                            "contactId": "CA41",
                            "name": "Blue:28",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:28",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA41",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                36.8122,
                                38.6071
                            ],
                            "attributes": {
                                "a_Equipment": "_20"
                            }
                        },
                        {
                            "uniqid": "a2230",
                            "contactId": "CA2149",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2149"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2149",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                28.6298,
                                35.3705
                            ],
                            "attributes": {
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "a2231",
                            "contactId": "CA1610",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:30",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1610"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                44.7647,
                                67.3966
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2232",
                            "contactId": "CA1490",
                            "name": "Blue:31",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1490",
                                    "typeId": "blue_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1490"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1490",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                38.9751,
                                30.1729
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit17",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a2233",
                            "contactId": "CA3279",
                            "name": "Blue:32",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:32",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                48.4262,
                                50.0148
                            ],
                            "attributes": {
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "a2234",
                            "contactId": "CA37",
                            "name": "Blue:33",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA37",
                                    "typeId": "blue_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:33",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                46.0134,
                                52.6099
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit43",
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a2235",
                            "contactId": "CA1763",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:34",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1763"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                50.0605,
                                79.6798
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "a2236",
                            "contactId": "CA816",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA816",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA816",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:35",
                                    "typeId": "blue_land_ssm"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                30.1645,
                                40.8469
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_40",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2237",
                            "contactId": "CA3278",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3278",
                                    "typeId": "blue_land_unit"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                35.8331,
                                74.1675
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit43",
                                "a_Equipment": "_40"
                            }
                        },
                        {
                            "uniqid": "a2238",
                            "contactId": "CA2531",
                            "name": "Blue:37",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2531",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                29.1929,
                                78.2069
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_26",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a2239",
                            "contactId": "CA386",
                            "name": "Blue:38",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                40.6083,
                                38.8993
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a2240",
                            "contactId": "CA1361",
                            "name": "Blue:39",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:39",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:39",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                48.3124,
                                77.7821
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a2241",
                            "contactId": "CA2843",
                            "name": "Blue:40",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:40",
                                    "typeId": "blue_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                54.7895,
                                42.662
                            ],
                            "attributes": {
                                "a_Equipment": "_18"
                            }
                        },
                        {
                            "uniqid": "a2242",
                            "contactId": "CA347",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:41",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:41",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                35.1769,
                                83.1879
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a2243",
                            "contactId": "CA358",
                            "name": "Blue:42",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA358",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:42",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                32.8932,
                                69.0776
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_40",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a2244",
                            "contactId": "CA2618",
                            "name": "Blue:43",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2618",
                                    "typeId": "blue_land_asset"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2618",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                33.3221,
                                79.0633
                            ],
                            "attributes": {
                                "a_Units": "_12"
                            }
                        },
                        {
                            "uniqid": "a2245",
                            "contactId": "CA3035",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3035",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                38.0274,
                                38.7391
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a2246",
                            "contactId": "CA3195",
                            "name": "Blue:45",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3195",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:45",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                53.8595,
                                59.4285
                            ],
                            "attributes": {
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a2247",
                            "contactId": "CA548",
                            "name": "Blue:46",
                            "perceptions": [],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                44.1934,
                                74.1385
                            ],
                            "attributes": {
                                "a_Units": "_24"
                            }
                        },
                        {
                            "uniqid": "a2248",
                            "contactId": "CA905",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:47",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA905",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                47.8582,
                                62.7628
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2249",
                            "contactId": "CA386",
                            "name": "Blue:48",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA386",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA386",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                42.0009,
                                67.5301
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_38",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2250",
                            "contactId": "CA3001",
                            "name": "Blue:49",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3001",
                                    "typeId": "blue_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3001",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                45.5302,
                                54.6094
                            ],
                            "attributes": {
                                "a_Connections": "_0"
                            }
                        },
                        {
                            "uniqid": "a2251",
                            "contactId": "CA154",
                            "name": "Blue:50",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA154",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:50",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA154",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                51.1013,
                                71.5142
                            ],
                            "attributes": {
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a2252",
                            "contactId": "CA1405",
                            "name": "Blue:51",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1405",
                                    "typeId": "blue_land_sam",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:51"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                41.3324,
                                59.053
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_25",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a2253",
                            "contactId": "CA2347",
                            "name": "Blue:52",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:52",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2347",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:52",
                                    "typeId": "blue_land_c2"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                45.5592,
                                73.7788
                            ],
                            "attributes": {
                                "a_Connections": "_13"
                            }
                        },
                        {
                            "uniqid": "a2254",
                            "contactId": "CA1785",
                            "name": "Blue:53",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1785",
                                    "typeId": "blue_air_bomber"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:53",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                44.5983,
                                26.2458
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a2255",
                            "contactId": "CA1592",
                            "name": "Blue:54",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1592",
                                    "typeId": "blue_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1592",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                42.2042,
                                42.4656
                            ],
                            "attributes": {
                                "a_Connections": "_21"
                            }
                        },
                        {
                            "uniqid": "a2256",
                            "contactId": "CA989",
                            "name": "Blue:55",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:55",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA989"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA989",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                54.6021,
                                65.8287
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_12",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a2257",
                            "contactId": "CA106",
                            "name": "Blue:56",
                            "perceptions": [],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                28.5853,
                                57.8101
                            ],
                            "attributes": {
                                "a_Connections": "_34"
                            }
                        },
                        {
                            "uniqid": "a2258",
                            "contactId": "CA369",
                            "name": "Blue:57",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA369",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:57"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA369",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                31.9187,
                                73.7876
                            ],
                            "attributes": {
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a2259",
                            "contactId": "CA2246",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2246",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2246",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                29.1886,
                                22.0276
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_13",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a2260",
                            "contactId": "CA1094",
                            "name": "Blue:59",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:59",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                39.2963,
                                76.2847
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a2261",
                            "contactId": "CA3087",
                            "name": "Blue:60",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3087",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3087",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                54.5183,
                                83.9688
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a2262",
                            "contactId": "CA1495",
                            "name": "Blue:61",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1495",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                50.3853,
                                81.8315
                            ],
                            "attributes": {
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a2263",
                            "contactId": "CA543",
                            "name": "Blue:62",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:62",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA543",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:62"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                36.4234,
                                65.4946
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2264",
                            "contactId": "CA925",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA925",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                29.2465,
                                55.4095
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a2265",
                            "contactId": "CA636",
                            "name": "Blue:64",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA636",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                37.9892,
                                29.4913
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a2266",
                            "contactId": "CA3192",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3192",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                52.0171,
                                34.8188
                            ],
                            "attributes": {
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a2267",
                            "contactId": "CA2669",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2669",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2669",
                                    "typeId": "blue_land_ssm"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                38.175,
                                27.9521
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_5",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2268",
                            "contactId": "CA940",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA940",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA940"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                47.3127,
                                65.5199
                            ],
                            "attributes": {
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a2269",
                            "contactId": "CA1493",
                            "name": "Blue:68",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1493"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1493",
                                    "typeId": "blue_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                38.7638,
                                51.7599
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_13",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a2270",
                            "contactId": "CA813",
                            "name": "Blue:69",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:69",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA813",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:69",
                                    "typeId": "blue_land_sam"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                47.2279,
                                52.2624
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_22",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a2271",
                            "contactId": "CA1224",
                            "name": "Blue:70",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                39.7904,
                                25.338
                            ],
                            "attributes": {
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a2272",
                            "contactId": "CA1145",
                            "name": "Blue:71",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1145",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1145"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:71"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                28.5557,
                                66.1328
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a2273",
                            "contactId": "CA2014",
                            "name": "Blue:72",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:72",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:72"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                38.705,
                                66.0269
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_33",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a2274",
                            "contactId": "CA1686",
                            "name": "Blue:73",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:73",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1686",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                33.2516,
                                50.6638
                            ],
                            "attributes": {
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a2275",
                            "contactId": "CA1118",
                            "name": "Blue:74",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:74",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                32.3366,
                                70.5781
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a2276",
                            "contactId": "CA314",
                            "name": "Blue:75",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:75",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:75",
                                    "typeId": "blue_land_c2",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                54.2411,
                                26.0874
                            ],
                            "attributes": {
                                "a_Connections": "_11"
                            }
                        },
                        {
                            "uniqid": "a2277",
                            "contactId": "CA350",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:76"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.7916,
                                68.2882
                            ],
                            "attributes": {
                                "a_Units": "_42"
                            }
                        },
                        {
                            "uniqid": "a2278",
                            "contactId": "CA3302",
                            "name": "Blue:77",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3302",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3302",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3302",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                52.6922,
                                82.0491
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a2279",
                            "contactId": "CA993",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA993",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA993",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                47.7364,
                                46.8449
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a2280",
                            "contactId": "CA1033",
                            "name": "Blue:79",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1033",
                                    "typeId": "blue_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                46.0813,
                                78.8303
                            ],
                            "attributes": {
                                "a_Equipment": "_8"
                            }
                        },
                        {
                            "uniqid": "a2281",
                            "contactId": "CA2549",
                            "name": "Blue:80",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2549"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2549",
                                    "typeId": "blue_air_bomber"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                33.3148,
                                67.2863
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_17"
                            }
                        },
                        {
                            "uniqid": "a2282",
                            "contactId": "CA1748",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:81",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1748"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1748",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                48.8344,
                                72.9385
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a2283",
                            "contactId": "CA1627",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1627",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:82",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                48.9557,
                                30.0604
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a2284",
                            "contactId": "CA3375",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3375",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                45.6283,
                                65.9101
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit45",
                                "a_Equipment": "_17"
                            }
                        },
                        {
                            "uniqid": "a2285",
                            "contactId": "CA3034",
                            "name": "Blue:84",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:84",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                35.4782,
                                33.6459
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_21",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2286",
                            "contactId": "CA318",
                            "name": "Blue:85",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA318",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                38.2325,
                                44.1486
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2287",
                            "contactId": "CA728",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA728",
                                    "typeId": "blue_land_unit",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                29.9891,
                                23.0211
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit21",
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a2288",
                            "contactId": "CA295",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA295"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                37.0377,
                                70.8962
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_33",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a2289",
                            "contactId": "CA1078",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1078",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                28.6765,
                                71.4869
                            ],
                            "attributes": {
                                "a_Units": "_49"
                            }
                        },
                        {
                            "uniqid": "a2290",
                            "contactId": "CA2955",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2955",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:89",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                50.6272,
                                36.1368
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a2291",
                            "contactId": "CA2379",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                34.8146,
                                51.187
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a2292",
                            "contactId": "CA743",
                            "name": "Blue:91",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA743",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.7374,
                                36.8922
                            ],
                            "attributes": {
                                "a_Units": "_3"
                            }
                        },
                        {
                            "uniqid": "a2293",
                            "contactId": "CA1209",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1209",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1209",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                29.7076,
                                55.4453
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_19",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a2294",
                            "contactId": "CA51",
                            "name": "Blue:93",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA51",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                45.5529,
                                31.1534
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_43",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a2295",
                            "contactId": "CA2165",
                            "name": "Blue:94",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2165",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                41.3157,
                                44.1871
                            ],
                            "attributes": {
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a2296",
                            "contactId": "CA3004",
                            "name": "Blue:95",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA3004",
                                    "typeId": "blue_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                50.8262,
                                73.206
                            ],
                            "attributes": {
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "a2297",
                            "contactId": "CA2917",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2917",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:96",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                28.9053,
                                75.2181
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2298",
                            "contactId": "CA1362",
                            "name": "Blue:97",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1362",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1362",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:97",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                35.3689,
                                35.0387
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2299",
                            "contactId": "CA1774",
                            "name": "Blue:98",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:98",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1774",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                32.2932,
                                25.2308
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a2300",
                            "contactId": "CA663",
                            "name": "Blue:99",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:99",
                                    "typeId": "blue_land_unit",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                32.5891,
                                36.9273
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit47",
                                "a_Equipment": "_33"
                            }
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
                            "uniqid": "a2301",
                            "contactId": "CA777",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA777",
                                    "typeId": "red_air_fighter",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                7.933,
                                38.0603
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_1"
                                }
                            ],
                            "attributes": {},
                            "comprising": []
                        },
                        {
                            "uniqid": "a2305",
                            "contactId": "CA1259",
                            "name": "Red:4",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:4",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:4"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                23.8304,
                                31.1386
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_35"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2306",
                            "contactId": "CA1590",
                            "name": "Red:5",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:5",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                11.7949,
                                31.9358
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_4"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2307",
                            "contactId": "CA1125",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:6",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1125",
                                    "typeId": "red_air_logs"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                10.9751,
                                44.2032
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
                                    "value": "_18"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2308",
                            "contactId": "CA1445",
                            "name": "Red:7",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:7",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:7",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1445",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                9.7722,
                                56.7041
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_2"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2309",
                            "contactId": "CA1756",
                            "name": "Red:8",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1756",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1756",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.7804,
                                28.4802
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_4"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2310",
                            "contactId": "CA979",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA979",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:9",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                14.0515,
                                63.4936
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2311",
                            "contactId": "CA1336",
                            "name": "Red:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1336",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:10",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                11.1307,
                                54.1647
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_7"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2312",
                            "contactId": "CA2014",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:11",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2014"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:11",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                28.2811,
                                61.4585
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_30"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2313",
                            "contactId": "CA743",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:12",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                17.467,
                                50.4823
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
                                    "value": "_19"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2314",
                            "contactId": "CA284",
                            "name": "Red:13",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA284",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                6.1577,
                                38.7236
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
                                    "value": "_6"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2315",
                            "contactId": "CA1681",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:14",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1681"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1681",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                19.8024,
                                56.5986
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
                                    "value": "_44"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2316",
                            "contactId": "CA1957",
                            "name": "Red:15",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1957",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1957",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                11.3821,
                                49.1161
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2317",
                            "contactId": "CA234",
                            "name": "Red:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:16",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:16"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                18.3557,
                                48.5865
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_17"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2318",
                            "contactId": "CA2496",
                            "name": "Red:17",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:17",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:17",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                5.7427,
                                66.9151
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2319",
                            "contactId": "CA433",
                            "name": "Red:18",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA433",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:18",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA433",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                12.1239,
                                81.2268
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
                                    "value": "_19"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2320",
                            "contactId": "CA2372",
                            "name": "Red:19",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:19"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:19",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                13.3774,
                                58.3146
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2321",
                            "contactId": "CA194",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA194",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:20"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                26.9803,
                                80.5287
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
                                    "value": "_11"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2322",
                            "contactId": "CA2366",
                            "name": "Red:21",
                            "perceptions": [],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                21.2727,
                                83.0966
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
                                    "value": "_34"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2323",
                            "contactId": "CA2935",
                            "name": "Red:22",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:22",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2935",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                6.5136,
                                76.6428
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2324",
                            "contactId": "CA1185",
                            "name": "Red:23",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1185",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                28.3583,
                                48.1504
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_3"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2325",
                            "contactId": "CA1010",
                            "name": "Red:24",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1010",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:24"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                18.0477,
                                76.7292
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_20"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2326",
                            "contactId": "CA2345",
                            "name": "Red:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:25"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:25",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                6.4721,
                                29.806
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2327",
                            "contactId": "CA1228",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:26",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1228",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                22.9211,
                                82.7848
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_15"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2328",
                            "contactId": "CA261",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA261",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                22.4941,
                                61.5926
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_27"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2329",
                            "contactId": "CA3132",
                            "name": "Red:28",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3132",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:28"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                8.979,
                                84.7191
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
                                    "value": "_29"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2330",
                            "contactId": "CA897",
                            "name": "Red:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA897",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                2.0722,
                                40.1217
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
                                    "value": "_33"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2331",
                            "contactId": "CA3257",
                            "name": "Red:30",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:30"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3257",
                                    "typeId": "red_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                15.4774,
                                53.9999
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
                                    "value": "_33"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2332",
                            "contactId": "CA340",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA340",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA340",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                10.5759,
                                30.2612
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_0"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2333",
                            "contactId": "CA1127",
                            "name": "Red:32",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:32"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:32",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                3.8414,
                                64.9529
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_4"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2334",
                            "contactId": "CA878",
                            "name": "Red:33",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA878",
                                    "typeId": "red_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                22.8448,
                                80.5808
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2335",
                            "contactId": "CA1510",
                            "name": "Red:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:34",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1510",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1510",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                2.8275,
                                37.0716
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
                                    "value": "_10"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2336",
                            "contactId": "CA10",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA10",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:35",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:35",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                9.1686,
                                60.1066
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
                                    "value": "_45"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2337",
                            "contactId": "CA377",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:36",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA377",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                16.3653,
                                58.9805
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_2"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2338",
                            "contactId": "CA2945",
                            "name": "Red:37",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                2.8272,
                                50.1127
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2339",
                            "contactId": "CA2711",
                            "name": "Red:38",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:38",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2711",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                23.8063,
                                27.6141
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_13"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2340",
                            "contactId": "CA1587",
                            "name": "Red:39",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:39",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1587"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                13.4295,
                                63.546
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
                                    "value": "_23"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2341",
                            "contactId": "CA446",
                            "name": "Red:40",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:40",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:40",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:40",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                4.0177,
                                47.8429
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
                                    "value": "_39"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2342",
                            "contactId": "CA1085",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:41",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1085",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                27.9406,
                                43.0531
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_41"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2343",
                            "contactId": "CA3121",
                            "name": "Red:42",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:42",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:42"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                4.4775,
                                78.273
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_0"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2344",
                            "contactId": "CA1988",
                            "name": "Red:43",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:43",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                24.7615,
                                76.3238
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_31"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2345",
                            "contactId": "CA990",
                            "name": "Red:44",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA990",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA990"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA990",
                                    "typeId": "red_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                28.4124,
                                83.1865
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_40"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2346",
                            "contactId": "CA3180",
                            "name": "Red:45",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:45"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:45",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3180"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                8.3132,
                                69.3464
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2347",
                            "contactId": "CA2551",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:46",
                                    "typeId": "red_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2551"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                27.9835,
                                66.6679
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_13"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2348",
                            "contactId": "CA1485",
                            "name": "Red:47",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:47",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                4.4819,
                                24.8
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_21"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2349",
                            "contactId": "CA58",
                            "name": "Red:48",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA58",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                7.3835,
                                83.4825
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_8"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2350",
                            "contactId": "CA1454",
                            "name": "Red:49",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:49",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:49",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1454",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                7.8034,
                                69.8611
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
                                    "value": "_33"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2351",
                            "contactId": "CA2547",
                            "name": "Red:50",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2547",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2547"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                10.1028,
                                29.1955
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_29"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2352",
                            "contactId": "CA2098",
                            "name": "Red:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2098",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2098"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2098",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                11.8212,
                                61.5332
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_42"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2353",
                            "contactId": "CA3121",
                            "name": "Red:52",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3121",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3121"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3121",
                                    "typeId": "red_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                24.8704,
                                65.3843
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_45"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2354",
                            "contactId": "CA142",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA142",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA142"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                12.8054,
                                82.5858
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
                                    "value": "_3"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2355",
                            "contactId": "CA538",
                            "name": "Red:54",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA538",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA538"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                4.0154,
                                33.7486
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_17"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2356",
                            "contactId": "CA2966",
                            "name": "Red:55",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2966",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                9.5967,
                                29.4055
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
                                    "value": "_5"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2357",
                            "contactId": "CA1650",
                            "name": "Red:56",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:56"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1650",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                12.0241,
                                59.7362
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
                                    "value": "_6"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2358",
                            "contactId": "CA696",
                            "name": "Red:57",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA696",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                9.5983,
                                32.2703
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
                                    "value": "_34"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2359",
                            "contactId": "CA840",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:58",
                                    "typeId": "red_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                14.8874,
                                71.2097
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2360",
                            "contactId": "CA2622",
                            "name": "Red:59",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2622",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:59",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                2.3058,
                                69.0142
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_5"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2361",
                            "contactId": "CA2214",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:60",
                                    "typeId": "red_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2214",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                22.1562,
                                49.7227
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_26"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2362",
                            "contactId": "CA2452",
                            "name": "Red:61",
                            "perceptions": [],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                15.5771,
                                51.6683
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_2"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2363",
                            "contactId": "CA2434",
                            "name": "Red:62",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:62",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:62",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                2.2845,
                                69.0902
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_6"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2364",
                            "contactId": "CA298",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:63",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                15.1319,
                                52.7852
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2365",
                            "contactId": "CA603",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:64",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                14.7376,
                                58.188
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
                                    "value": "_19"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2366",
                            "contactId": "CA2780",
                            "name": "Red:65",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:65",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                13.3462,
                                66.4503
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_30"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2367",
                            "contactId": "CA1504",
                            "name": "Red:66",
                            "perceptions": [],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                2.6297,
                                40.3071
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_49"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2368",
                            "contactId": "CA535",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:67",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA535",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                27.4553,
                                44.4486
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_31"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2369",
                            "contactId": "CA2251",
                            "name": "Red:68",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2251",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:68",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                10.1354,
                                45.8935
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_34"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2370",
                            "contactId": "CA1348",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1348",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                21.5733,
                                82.2516
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
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2371",
                            "contactId": "CA847",
                            "name": "Red:70",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:70"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:70",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                6.7616,
                                44.2589
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
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2372",
                            "contactId": "CA1971",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1971"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                7.272,
                                27.1516
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
                                    "value": "_31"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2373",
                            "contactId": "CA2396",
                            "name": "Red:72",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2396",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2396",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2396",
                                    "typeId": "red_air_istar",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                28.0185,
                                63.468
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
                                    "value": "_28"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2374",
                            "contactId": "CA2491",
                            "name": "Red:73",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2491",
                                    "typeId": "red_maritime_mtg"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:73",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2491",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                11.1663,
                                79.5595
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_21"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2375",
                            "contactId": "CA1896",
                            "name": "Red:74",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1896",
                                    "typeId": "red_maritime_mtg"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1896",
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                16.0716,
                                65.695
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_0"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2376",
                            "contactId": "CA496",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA496",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA496",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.0242,
                                61.4813
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_32"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2377",
                            "contactId": "CA1144",
                            "name": "Red:76",
                            "perceptions": [],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                27.8518,
                                82.8259
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
                                    "value": "_18"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2378",
                            "contactId": "CA21",
                            "name": "Red:77",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA21",
                                    "typeId": "red_land_ssm",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                25.0668,
                                31.5517
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
                                    "value": "_7"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2379",
                            "contactId": "CA290",
                            "name": "Red:78",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:78",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                12.7209,
                                72.3423
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
                                    "value": "_27"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2380",
                            "contactId": "CA1378",
                            "name": "Red:79",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:79"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1378",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                19.169,
                                30.5625
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_9"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2381",
                            "contactId": "CA967",
                            "name": "Red:80",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA967",
                                    "typeId": "red_land_unit",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA967",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                9.735,
                                51.8045
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_8"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2382",
                            "contactId": "CA633",
                            "name": "Red:81",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:81",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA633",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA633",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                17.0125,
                                24.697
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
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2383",
                            "contactId": "CA48",
                            "name": "Red:82",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:82",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA48",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                12.2288,
                                39.3691
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
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2384",
                            "contactId": "CA1936",
                            "name": "Red:83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1936",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1936",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1936",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                15.6109,
                                71.0623
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_23"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2385",
                            "contactId": "CA1821",
                            "name": "Red:84",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1821",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                15.018,
                                23.3314
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
                                    "value": "_47"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2386",
                            "contactId": "CA2899",
                            "name": "Red:85",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2899",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:85",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                21.9643,
                                25.3332
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
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2387",
                            "contactId": "CA1017",
                            "name": "Red:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:86",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1017"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                23.9975,
                                76.2359
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_2"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2388",
                            "contactId": "CA2256",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:87",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:87",
                                    "typeId": "red_air_logs"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                14.0959,
                                27.8201
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
                                    "value": "_4"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2389",
                            "contactId": "CA3325",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3325"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.0893,
                                62.4821
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_24"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2390",
                            "contactId": "CA2470",
                            "name": "Red:89",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:89"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                7.5026,
                                22.4981
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_9"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2391",
                            "contactId": "CA2671",
                            "name": "Red:90",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2671",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2671",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:90",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                22.9543,
                                41.0823
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_34"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2392",
                            "contactId": "CA792",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA792",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                15.8042,
                                67.6588
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
                                    "value": "_0"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2393",
                            "contactId": "CA507",
                            "name": "Red:92",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA507"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:92"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA507"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                22.96,
                                37.4395
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_39"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2394",
                            "contactId": "CA419",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA419",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA419",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                20.2486,
                                35.5092
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_31"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2395",
                            "contactId": "CA2088",
                            "name": "Red:94",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2088"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                5.3448,
                                47.767
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2396",
                            "contactId": "CA2982",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2982",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:95",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                8.0108,
                                58.7506
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
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2397",
                            "contactId": "CA2516",
                            "name": "Red:96",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:96",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2516",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2516",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                21.9867,
                                83.2085
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
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2398",
                            "contactId": "CA70",
                            "name": "Red:97",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:97",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                18.8415,
                                36.5707
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2399",
                            "contactId": "CA2039",
                            "name": "Red:98",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:98",
                                    "typeId": "red_land_sam"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                20.0397,
                                84.6075
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
                                    "value": "_35"
                                }
                            ],
                            "attributes": {}
                        },
                        {
                            "uniqid": "a2400",
                            "contactId": "CA2035",
                            "name": "Red:99",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2035",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                24.0575,
                                53.1334
                            ],
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_42"
                                }
                            ],
                            "attributes": {}
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
                            "templates": [ ]
                        },
                        {
                            "forceUniqid": "f-red",
                            "pType": "ParticipantPlanning",
                            "roles": [],
                            "subscriptionId": "h123qr",
                            "templates": [ ]
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
         },
         "templates": {
          "templates": [
                {
                    "lastUpdated": "2022-11-12T19:56:51.409Z",
                    "title": "Land--Transit",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "transitSpeed",
                            "transitDuration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "transitSpeed": {
                                "type": "integer",
                                "title": "Transit Speed",
                                "propertyOrder": 300,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "transitDuration": {
                                "type": "string",
                                "title": "Transit Duration",
                                "propertyOrder": 301,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Land--Transit",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--Transit",
                    "_rev": "2022-11-12T19:56:51.409Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.409Z",
                    "title": "Maritime--Transit",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "transitSpeed",
                            "transitDuration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "transitSpeed": {
                                "type": "integer",
                                "title": "Transit Speed",
                                "propertyOrder": 300,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "transitDuration": {
                                "type": "string",
                                "title": "Transit Duration",
                                "propertyOrder": 301,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--Transit",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--Transit",
                    "_rev": "2022-11-12T19:56:51.409Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.409Z",
                    "title": "Air--Transit",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "transitSpeed",
                            "transitDuration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "transitSpeed": {
                                "type": "integer",
                                "title": "Transit Speed",
                                "propertyOrder": 300,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "transitDuration": {
                                "type": "string",
                                "title": "Transit Duration",
                                "propertyOrder": 301,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Air--Transit",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--Transit",
                    "_rev": "2022-11-12T19:56:51.409Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.410Z",
                    "title": "Land--MissileStrike",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "missileType",
                            "missilesFired",
                            "targetType",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "missileType": {
                                "type": "string",
                                "title": "Missile Type",
                                "propertyOrder": 302,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "missilesFired": {
                                "type": "integer",
                                "title": "Missiles Fired",
                                "propertyOrder": 303,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "targetType": {
                                "type": "string",
                                "title": "Target Type",
                                "propertyOrder": 304,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Land--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--MissileStrike",
                    "_rev": "2022-11-12T19:56:51.410Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.411Z",
                    "title": "Maritime--MissileStrike",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "missileType",
                            "missilesFired",
                            "targetType",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "missileType": {
                                "type": "string",
                                "title": "Missile Type",
                                "propertyOrder": 302,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "missilesFired": {
                                "type": "integer",
                                "title": "Missiles Fired",
                                "propertyOrder": 303,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "targetType": {
                                "type": "string",
                                "title": "Target Type",
                                "propertyOrder": 304,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--MissileStrike",
                    "_rev": "2022-11-12T19:56:51.411Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.412Z",
                    "title": "Land--Patrol",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "patrolType",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "patrolType": {
                                "type": "string",
                                "title": "Patrol Type",
                                "propertyOrder": 305,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Land--Patrol",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--Patrol",
                    "_rev": "2022-11-12T19:56:51.412Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.412Z",
                    "title": "Maritime--Patrol",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "patrolType",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "patrolType": {
                                "type": "string",
                                "title": "Patrol Type",
                                "propertyOrder": 305,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--Patrol",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--Patrol",
                    "_rev": "2022-11-12T19:56:51.412Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.412Z",
                    "title": "Air--Patrol",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "patrolType",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "patrolType": {
                                "type": "string",
                                "title": "Patrol Type",
                                "propertyOrder": 305,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Air--Patrol",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--Patrol",
                    "_rev": "2022-11-12T19:56:51.412Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.415Z",
                    "title": "Land--Standard",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Land--Standard",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--Standard",
                    "_rev": "2022-11-12T19:56:51.415Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.415Z",
                    "title": "Maritime--Standard",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--Standard",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--Standard",
                    "_rev": "2022-11-12T19:56:51.415Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.417Z",
                    "title": "Land--ISTAR",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "method",
                            "duration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "method": {
                                "type": "string",
                                "title": "Observation Method",
                                "propertyOrder": 306,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 307,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Land--ISTAR",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--ISTAR",
                    "_rev": "2022-11-12T19:56:51.417Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.417Z",
                    "title": "Maritime--ISTAR",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "method",
                            "duration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "method": {
                                "type": "string",
                                "title": "Observation Method",
                                "propertyOrder": 306,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 307,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--ISTAR",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--ISTAR",
                    "_rev": "2022-11-12T19:56:51.417Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.417Z",
                    "title": "Air--ISTAR",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "method",
                            "duration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "method": {
                                "type": "string",
                                "title": "Observation Method",
                                "propertyOrder": 306,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 307,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Air--ISTAR",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--ISTAR",
                    "_rev": "2022-11-12T19:56:51.417Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.418Z",
                    "title": "Air--Duration",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "duration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 308,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Air--Duration",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--Duration",
                    "_rev": "2022-11-12T19:56:51.418Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.419Z",
                    "title": "Air--TST",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "duration",
                            "targetPriority",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 309,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "targetPriority": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Target Type Priority",
                                "propertyOrder": 310,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Air--TST",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--TST",
                    "_rev": "2022-11-12T19:56:51.419Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.420Z",
                    "title": "Maritime--MineLaying",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "duration",
                            "density",
                            "covert",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 311,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "density": {
                                "type": "integer",
                                "title": "Minefield Priority",
                                "propertyOrder": 312,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "covert": {
                                "type": "boolean",
                                "title": "Covert",
                                "format": "checkbox",
                                "propertyOrder": 313,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--MineLaying",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--MineLaying",
                    "_rev": "2022-11-12T19:56:51.420Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.420Z",
                    "title": "Maritime--Duration",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "duration",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 308,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--Duration",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--Duration",
                    "_rev": "2022-11-12T19:56:51.420Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.421Z",
                    "title": "Maritime--ASWBarrier",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "duration",
                            "active",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "duration": {
                                "type": "integer",
                                "title": "Duration (hrs)",
                                "propertyOrder": 314,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "active": {
                                "type": "boolean",
                                "title": "Active?",
                                "format": "checkbox",
                                "propertyOrder": 315,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--ASWBarrier",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--ASWBarrier",
                    "_rev": "2022-11-12T19:56:51.421Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.421Z",
                    "title": "Air--Standard",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Air--Standard",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--Standard",
                    "_rev": "2022-11-12T19:56:51.421Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.423Z",
                    "title": "Land--EWAttack",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "effect",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "effect": {
                                "type": "string",
                                "title": "Effect Type",
                                "propertyOrder": 316,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Land--EWAttack",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--EWAttack",
                    "_rev": "2022-11-12T19:56:51.423Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.423Z",
                    "title": "Maritime--EWAttack",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "effect",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "effect": {
                                "type": "string",
                                "title": "Effect Type",
                                "propertyOrder": 316,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Maritime--EWAttack",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--EWAttack",
                    "_rev": "2022-11-12T19:56:51.423Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.423Z",
                    "title": "Air--EWAttack",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "effect",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "effect": {
                                "type": "string",
                                "title": "Effect Type",
                                "propertyOrder": 316,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Air--EWAttack",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--EWAttack",
                    "_rev": "2022-11-12T19:56:51.423Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.425Z",
                    "title": "Other--SOFAttack",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "activityType",
                            "intendedEffect",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "activityType": {
                                "enum": [
                                    "Raid",
                                    "Capture/Kill",
                                    "Gather Int",
                                    "Deliver Errect"
                                ],
                                "title": "Activity Type",
                                "type": "string",
                                "propertyOrder": 317,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "intendedEffect": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Intended Effect",
                                "propertyOrder": 318,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Other--SOFAttack",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Other--SOFAttack",
                    "_rev": "2022-11-12T19:56:51.425Z"
                },
                {
                    "lastUpdated": "2022-11-12T19:56:51.425Z",
                    "title": "Other--Cyber",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "ownAssets",
                            "otherAssets",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "activityType",
                            "intendedEffect",
                            "location"
                        ],
                        "properties": {
                            "Reference": {
                                "type": "string",
                                "title": "Reference (locked)",
                                "readonly": "readonly",
                                "propertyOrder": 10,
                                "options": {
                                    "grid_columns": 2
                                }
                            },
                            "title": {
                                "type": "string",
                                "title": "Title",
                                "propertyOrder": 20,
                                "options": {
                                    "grid_columns": 10
                                }
                            },
                            "startDate": {
                                "format": "serge-date",
                                "type": "string",
                                "title": "Start date",
                                "propertyOrder": 30,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "endDate": {
                                "format": "serge-date",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End date",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "activity": {
                                "title": "Activity",
                                "propertyOrder": 50,
                                "readonly": "readonly",
                                "type": "string",
                                "enum": [
                                    "transit",
                                    "kinetic",
                                    "asymmetric"
                                ],
                                "options": {
                                    "grid_columns": 6,
                                    "enum_titles": [
                                        "Transit1",
                                        "Kinetic1",
                                        "Asymmetric1"
                                    ]
                                }
                            },
                            "intent": {
                                "format": "textarea",
                                "title": "Intent",
                                "propertyOrder": 60,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset",
                                        "number"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Asset",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 3,
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ]
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 2
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "propertyOrder": 80,
                                "format": "table",
                                "minItems": 0,
                                "title": "Subject(s) of orders",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Asset",
                                    "type": "string",
                                    "enum": [
                                        "ra",
                                        "rb",
                                        "rc",
                                        "da"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Boat A",
                                            "Bike B",
                                            "Band C",
                                            "Plane A"
                                        ]
                                    }
                                }
                            },
                            "actionsOn": {
                                "format": "textarea",
                                "title": "Actions on",
                                "propertyOrder": 90,
                                "options": {
                                    "grid_columns": 12
                                },
                                "type": "string"
                            },
                            "synchronisedWith": {
                                "format": "text",
                                "title": "Sync with",
                                "propertyOrder": 68,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "supports": {
                                "format": "textarea",
                                "title": "Supports High-Level",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "format": "text",
                                "title": "Activity Card",
                                "propertyOrder": 120,
                                "options": {
                                    "grid_columns": 4
                                },
                                "type": "string"
                            },
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 130,
                                "options": {
                                    "grid_columns": 8
                                },
                                "type": "string"
                            },
                            "activityType": {
                                "type": "string",
                                "title": "Activity Type",
                                "propertyOrder": 319,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "intendedEffect": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Intended Effect",
                                "propertyOrder": 320,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "textarea",
                                "title": "Location",
                                "id": "locationArea",
                                "type": "string",
                                "readonly": "readonly",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                }
                            }
                        },
                        "title": "Other--Cyber",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Other--Cyber",
                    "_rev": "2022-11-12T19:56:51.425Z"
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
