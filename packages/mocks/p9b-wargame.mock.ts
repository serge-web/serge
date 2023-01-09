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
            "gameDate": "2022-11-14T00:00:00+00:00",
            "showAccessCodes": true,
            "logPlayerActivity": false,
            "dirty": false
        },
        "forces": {
            "selectedForce": "f-blue",
            "name": "Forces",
            "forces": [
                {
                    "color": "#000000",
                    "dirty": false,
                    "iconURL": "default_img/forceDefault.png",
                    "name": "Umpire",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "isGameControl": true,
                            "isInsightViewer": true,
                            "isObserver": true,
                            "name": "Game Designer",
                            "roleId": "umpire"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": true,
                            "isRFIManager": false,
                            "name": "Adjudicator 1",
                            "roleId": "adjud-1"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": true,
                            "isRFIManager": false,
                            "name": "Adjudicator 2",
                            "roleId": "adjud-2"
                        }
                    ],
                    "umpire": true,
                    "uniqid": "umpire"
                },
                {
                    "assets": [
                        {
                            "uniqid": "a1",
                            "contactId": "CA913",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:0",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:0",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:0",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                43.2322,
                                48.8223
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_49"
                            },
                            "comprising": []
                        },
                        {
                            "uniqid": "a5",
                            "contactId": "CA3143",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:4",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:4",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:4",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                48.4452,
                                25.2375
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_16",
                                "a_Range": 100,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a6",
                            "contactId": "CA1555",
                            "name": "Blue:5",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:5",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:5",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:5",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                29.9917,
                                44.645
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "a7",
                            "contactId": "CA513",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:6",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:6",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:6",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                37.8153,
                                53.4219
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_16"
                            }
                        },
                        {
                            "uniqid": "a8",
                            "contactId": "CA1891",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:7",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:7",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:7",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                44.4351,
                                53.2611
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a9",
                            "contactId": "CA212",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:8",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:8",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:8",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                28.764,
                                22.1556
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_15",
                                "a_Range": 100,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a10",
                            "contactId": "CA2909",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:9",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:9",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:9",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                30.0125,
                                80.5363
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a11",
                            "contactId": "CA518",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                29.2456,
                                75.1631
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a12",
                            "contactId": "CA2135",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:11",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:11",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:11",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                31.9085,
                                50.1571
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a13",
                            "contactId": "CA787",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                52.8233,
                                83.2344
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a14",
                            "contactId": "CA2043",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:13",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:13",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:13",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                46.5838,
                                34.9494
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a15",
                            "contactId": "CA3102",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:14",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:14",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:14",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                38.8471,
                                24.8511
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a16",
                            "contactId": "CA3181",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:15",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:15",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:15",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                48.4589,
                                44.9572
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a17",
                            "contactId": "CA1550",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:16",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:16",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:16",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                39.1761,
                                42.2225
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_10"
                            }
                        },
                        {
                            "uniqid": "a18",
                            "contactId": "CA2248",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:17",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:17",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:17",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                29.7162,
                                51.6084
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_46",
                                "a_Range": 100,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a19",
                            "contactId": "CA1840",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                47.039,
                                74.5841
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_39",
                                "a_Range": 100,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a20",
                            "contactId": "CA3293",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:19",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:19",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:19",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                44.0536,
                                62.7729
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_3"
                            }
                        },
                        {
                            "uniqid": "a21",
                            "contactId": "CA356",
                            "name": "Blue:20",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:20",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:20",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:20",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                44.6023,
                                43.7369
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a22",
                            "contactId": "CA462",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:21",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:21",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:21",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                40.1827,
                                45.5865
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "a23",
                            "contactId": "CA2712",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:22",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:22",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:22",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                39.2237,
                                49.1607
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a24",
                            "contactId": "CA1730",
                            "name": "Blue:23",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:23",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:23",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:23",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                30.1768,
                                43.3613
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a25",
                            "contactId": "CA2727",
                            "name": "Blue:24",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:24",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:24",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:24",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                47.9796,
                                59.9782
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "a26",
                            "contactId": "CA964",
                            "name": "Blue:25",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:25",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:25",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:25",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                49.8316,
                                61.6938
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a27",
                            "contactId": "CA2166",
                            "name": "Blue:26",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:26",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:26",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:26",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                49.1608,
                                72.5424
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a28",
                            "contactId": "CA1028",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                46.6821,
                                62.8572
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a29",
                            "contactId": "CA776",
                            "name": "Blue:28",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:28",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:28",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:28",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                52.724,
                                30.0967
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a30",
                            "contactId": "CA450",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:29",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:29",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:29",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                33.6611,
                                36.4944
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_20",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a31",
                            "contactId": "CA3301",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:30",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:30",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:30",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                45.5999,
                                55.8244
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a32",
                            "contactId": "CA662",
                            "name": "Blue:31",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:31",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:31",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:31",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                42.8271,
                                63.9769
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_6",
                                "a_Range": 100,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a33",
                            "contactId": "CA466",
                            "name": "Blue:32",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:32",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:32",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:32",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                45.7655,
                                41.3132
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_18"
                            }
                        },
                        {
                            "uniqid": "a34",
                            "contactId": "CA137",
                            "name": "Blue:33",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:33",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:33",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:33",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                52.9185,
                                35.9982
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a35",
                            "contactId": "CA1316",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:34",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:34",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:34",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                36.8923,
                                32.3083
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_10"
                            }
                        },
                        {
                            "uniqid": "a36",
                            "contactId": "CA2200",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:35",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:35",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:35",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                32.4012,
                                35.1576
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a37",
                            "contactId": "CA491",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:36",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:36",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:36",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                51.7056,
                                22.0543
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a38",
                            "contactId": "CA1976",
                            "name": "Blue:37",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:37",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:37",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:37",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                31.0283,
                                75.1808
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_33",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a39",
                            "contactId": "CA380",
                            "name": "Blue:38",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:38",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:38",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:38",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                38.8699,
                                80.7048
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_15",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a40",
                            "contactId": "CA2959",
                            "name": "Blue:39",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:39",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:39",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:39",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                46.9404,
                                60.3062
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Size": "Size of military unit18",
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a41",
                            "contactId": "CA3390",
                            "name": "Blue:40",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:40",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:40",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:40",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                44.9461,
                                45.558
                            ],
                            "attributes": {
                                "a_Units": "_11",
                                "a_Building_Type": "B-Type-C"
                            }
                        },
                        {
                            "uniqid": "a42",
                            "contactId": "CA1264",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                39.4662,
                                59.5249
                            ],
                            "attributes": {
                                "a_Connections": "_7",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a43",
                            "contactId": "CA835",
                            "name": "Blue:42",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                32.0945,
                                42.8583
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a44",
                            "contactId": "CA335",
                            "name": "Blue:43",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                47.2282,
                                34.0339
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_0",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a45",
                            "contactId": "CA2369",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                42.6802,
                                75.3836
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a46",
                            "contactId": "CA1074",
                            "name": "Blue:45",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:45",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:45",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:45",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                32.4075,
                                61.5624
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_26",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a47",
                            "contactId": "CA3198",
                            "name": "Blue:46",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:46",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:46",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:46",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                36.8923,
                                71.8966
                            ],
                            "attributes": {
                                "a_Connections": "_32",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a48",
                            "contactId": "CA423",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:47",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:47",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:47",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                46.6572,
                                46.4957
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a49",
                            "contactId": "CA1276",
                            "name": "Blue:48",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:48",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:48",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:48",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                30.1276,
                                52.2249
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a50",
                            "contactId": "CA1409",
                            "name": "Blue:49",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:49",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:49",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:49",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                32.9425,
                                53.8105
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a51",
                            "contactId": "CA1488",
                            "name": "Blue:50",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                41.9922,
                                37.4866
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_8",
                                "a_Range": 100,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a52",
                            "contactId": "CA2002",
                            "name": "Blue:51",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:51",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:51",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:51",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                47.2388,
                                35.3611
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "a53",
                            "contactId": "CA639",
                            "name": "Blue:52",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:52",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:52",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:52",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                35.1437,
                                40.8463
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Size": "Size of military unit45",
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "a54",
                            "contactId": "CA3072",
                            "name": "Blue:53",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                33.0055,
                                39.3788
                            ],
                            "attributes": {
                                "a_Connections": "_13",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a55",
                            "contactId": "CA413",
                            "name": "Blue:54",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:54",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:54",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:54",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                35.2189,
                                77.3652
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Size": "Size of military unit9",
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a56",
                            "contactId": "CA2557",
                            "name": "Blue:55",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:55",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:55",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:55",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                44.1285,
                                61.383
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a57",
                            "contactId": "CA433",
                            "name": "Blue:56",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:56",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:56",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:56",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                52.3468,
                                58.8611
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "a58",
                            "contactId": "CA1580",
                            "name": "Blue:57",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:57",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:57",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:57",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.6425,
                                41.3393
                            ],
                            "attributes": {
                                "a_Units": "_11",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a59",
                            "contactId": "CA799",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:58",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:58",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:58",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                42.218,
                                68.5311
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a60",
                            "contactId": "CA514",
                            "name": "Blue:59",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:59",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:59",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:59",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.3309,
                                48.6568
                            ],
                            "attributes": {
                                "a_Units": "_8",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a61",
                            "contactId": "CA1959",
                            "name": "Blue:60",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:60",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:60",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:60",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                35.8624,
                                58.1214
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a62",
                            "contactId": "CA136",
                            "name": "Blue:61",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:61",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:61",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:61",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.867,
                                34.4607
                            ],
                            "attributes": {
                                "a_Units": "_34",
                                "a_Building_Type": "B-Type-A"
                            }
                        },
                        {
                            "uniqid": "a63",
                            "contactId": "CA2995",
                            "name": "Blue:62",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:62",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:62",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:62",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                52.555,
                                77.7227
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_16"
                            }
                        },
                        {
                            "uniqid": "a64",
                            "contactId": "CA424",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.0495,
                                43.1878
                            ],
                            "attributes": {
                                "a_Units": "_46",
                                "a_Building_Type": "B-Type-A"
                            }
                        },
                        {
                            "uniqid": "a65",
                            "contactId": "CA3039",
                            "name": "Blue:64",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:64",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:64",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:64",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                36.5875,
                                51.1599
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a66",
                            "contactId": "CA464",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:65",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:65",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:65",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                44.3011,
                                56.1378
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a67",
                            "contactId": "CA1725",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:66",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:66",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:66",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                29.7416,
                                78.4772
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "a68",
                            "contactId": "CA1742",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                53.6888,
                                76.0781
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a69",
                            "contactId": "CA3104",
                            "name": "Blue:68",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                34.322,
                                68.6616
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_37"
                            }
                        },
                        {
                            "uniqid": "a70",
                            "contactId": "CA2129",
                            "name": "Blue:69",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:69",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:69",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:69",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                28.8899,
                                39.5444
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "a71",
                            "contactId": "CA1290",
                            "name": "Blue:70",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:70",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:70",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:70",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                43.5747,
                                38.0234
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a72",
                            "contactId": "CA1824",
                            "name": "Blue:71",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:71",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:71",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:71",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                51.6559,
                                28.2397
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a73",
                            "contactId": "CA279",
                            "name": "Blue:72",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:72",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:72",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:72",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                38.5205,
                                30.1401
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_18",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a74",
                            "contactId": "CA916",
                            "name": "Blue:73",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:73",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:73",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:73",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                33.1019,
                                25.9212
                            ],
                            "attributes": {
                                "a_Connections": "_29",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a75",
                            "contactId": "CA1962",
                            "name": "Blue:74",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:74",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:74",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:74",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                35.9252,
                                64.9164
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a76",
                            "contactId": "CA1313",
                            "name": "Blue:75",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:75",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:75",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:75",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                37.6154,
                                49.0604
                            ],
                            "attributes": {
                                "a_Connections": "_15",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a77",
                            "contactId": "CA2620",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                51.9713,
                                24.1641
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "a78",
                            "contactId": "CA1469",
                            "name": "Blue:77",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:77",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:77",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:77",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                34.6334,
                                51.8959
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a79",
                            "contactId": "CA2925",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:78",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:78",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:78",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.2567,
                                35.6912
                            ],
                            "attributes": {
                                "a_Units": "_21",
                                "a_Building_Type": "B-Type-C"
                            }
                        },
                        {
                            "uniqid": "a80",
                            "contactId": "CA2433",
                            "name": "Blue:79",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:79",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:79",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:79",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                34.747,
                                63.3062
                            ],
                            "attributes": {
                                "a_Units": "_11",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a81",
                            "contactId": "CA2983",
                            "name": "Blue:80",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:80",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:80",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:80",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                29.0889,
                                25.1226
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a82",
                            "contactId": "CA144",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:81",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:81",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:81",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                53.6636,
                                43.6702
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a83",
                            "contactId": "CA2567",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:82",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:82",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:82",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                49.1411,
                                60.077
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a84",
                            "contactId": "CA2135",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:83",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:83",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:83",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                54.3258,
                                83.8345
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Size": "Size of military unit44",
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a85",
                            "contactId": "CA2064",
                            "name": "Blue:84",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:84",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:84",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:84",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                46.9834,
                                55.7994
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a86",
                            "contactId": "CA379",
                            "name": "Blue:85",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                50.1652,
                                34.7858
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Size": "Size of military unit2",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a87",
                            "contactId": "CA158",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                48.7648,
                                45.9136
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_45"
                            }
                        },
                        {
                            "uniqid": "a88",
                            "contactId": "CA1899",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:87",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:87",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:87",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                35.0988,
                                75.9346
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_13",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a89",
                            "contactId": "CA1351",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:88",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:88",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:88",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                44.6736,
                                61.7725
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Size": "Size of military unit3",
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a90",
                            "contactId": "CA1837",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:89",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:89",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:89",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                49.8275,
                                35.5143
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a91",
                            "contactId": "CA683",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                32.6561,
                                65.8297
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_24"
                            }
                        },
                        {
                            "uniqid": "a92",
                            "contactId": "CA20",
                            "name": "Blue:91",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:91",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:91",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:91",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                53.6317,
                                69.0894
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a93",
                            "contactId": "CA2300",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:92",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:92",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:92",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                53.9423,
                                83.7984
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a94",
                            "contactId": "CA1678",
                            "name": "Blue:93",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                41.6003,
                                75.9685
                            ],
                            "attributes": {
                                "a_Connections": "_31",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a95",
                            "contactId": "CA3328",
                            "name": "Blue:94",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:94",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:94",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:94",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                34.7189,
                                53.7992
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_36",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a96",
                            "contactId": "CA2142",
                            "name": "Blue:95",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:95",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:95",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:95",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                40.0086,
                                72.6809
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a97",
                            "contactId": "CA1810",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:96",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:96",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:96",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                45.3138,
                                43.6759
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a98",
                            "contactId": "CA1747",
                            "name": "Blue:97",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:97",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:97",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:97",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                37.9422,
                                39.6615
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Equipment": "_45"
                            }
                        },
                        {
                            "uniqid": "a99",
                            "contactId": "CA1397",
                            "name": "Blue:98",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:98",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:98",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:98",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                52.5939,
                                33.2221
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_45"
                            }
                        },
                        {
                            "uniqid": "a100",
                            "contactId": "CA3363",
                            "name": "Blue:99",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:99",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:99",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:99",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                48.2226,
                                72.0848
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        }
                    ],
                    "color": "#3dd0ff",
                    "dirty": false,
                    "iconURL": "default_img/forceDefault.png",
                    "name": "Blue",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "MTG 1",
                            "roleId": "blue-mtg-1"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "MTG 2",
                            "roleId": "blue-mtg-2"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "MTG 3",
                            "roleId": "blue-mtg-3"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Sub-Surface",
                            "roleId": "blue-sub"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "AEW 1",
                            "roleId": "blue-aew-1"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "AEW 2",
                            "roleId": "blue-aew-2"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "f-blue"
                },
                {
                    "assets": [
                        {
                            "uniqid": "a101",
                            "contactId": "CA2533",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:0",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:0",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:0",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                23.7277,
                                30.2644
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Yes"
                            },
                            "comprising": []
                        },
                        {
                            "uniqid": "a105",
                            "contactId": "CA71",
                            "name": "Red:4",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:4",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:4",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:4",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                27.6253,
                                50.9175
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a106",
                            "contactId": "CA998",
                            "name": "Red:5",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:5",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:5",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:5",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                8.6014,
                                42.261
                            ],
                            "attributes": {
                                "a_Units": "_12",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a107",
                            "contactId": "CA3365",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:6",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:6",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:6",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                23.8229,
                                82.0294
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_45",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a108",
                            "contactId": "CA510",
                            "name": "Red:7",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:7",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:7",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:7",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                12.03,
                                79.3119
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_7",
                                "a_Range": 100,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a109",
                            "contactId": "CA847",
                            "name": "Red:8",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:8",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:8",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:8",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                5.2767,
                                47.797
                            ],
                            "attributes": {
                                "a_Connections": "_34",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a110",
                            "contactId": "CA1196",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:9",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:9",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:9",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                5.7845,
                                38.1271
                            ],
                            "attributes": {
                                "a_Units": "_13",
                                "a_Building_Type": "B-Type-A"
                            }
                        },
                        {
                            "uniqid": "a111",
                            "contactId": "CA1160",
                            "name": "Red:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:10",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:10",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:10",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                8.1381,
                                76.0073
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_30"
                            }
                        },
                        {
                            "uniqid": "a112",
                            "contactId": "CA1009",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                10.1519,
                                84.1248
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a113",
                            "contactId": "CA1671",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:12",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:12",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:12",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                23.7472,
                                74.4119
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit3",
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "a114",
                            "contactId": "CA2256",
                            "name": "Red:13",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:13",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:13",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:13",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                4.9598,
                                72.6169
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit28",
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a115",
                            "contactId": "CA192",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:14",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:14",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:14",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                24.1759,
                                46.5539
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a116",
                            "contactId": "CA1723",
                            "name": "Red:15",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:15",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:15",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:15",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                11.2872,
                                34.6672
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a117",
                            "contactId": "CA2500",
                            "name": "Red:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:16",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:16",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:16",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                11.9663,
                                78.6349
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a118",
                            "contactId": "CA3185",
                            "name": "Red:17",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:17",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:17",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:17",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                23.6333,
                                85.8099
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_49",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a119",
                            "contactId": "CA3105",
                            "name": "Red:18",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                20.8267,
                                62.422
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a120",
                            "contactId": "CA1063",
                            "name": "Red:19",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:19",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:19",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:19",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                7.5562,
                                68.76
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit16",
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "a121",
                            "contactId": "CA573",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:20",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:20",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:20",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                21.5557,
                                38.7858
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a122",
                            "contactId": "CA2572",
                            "name": "Red:21",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:21",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:21",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:21",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                26.2476,
                                36.3493
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a123",
                            "contactId": "CA2280",
                            "name": "Red:22",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:22",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:22",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:22",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                12.0777,
                                33.0211
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a124",
                            "contactId": "CA2562",
                            "name": "Red:23",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:23",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:23",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:23",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                10.309,
                                78.9187
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a125",
                            "contactId": "CA2150",
                            "name": "Red:24",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                11.1449,
                                53.4637
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a126",
                            "contactId": "CA469",
                            "name": "Red:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:25",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:25",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:25",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                24.4289,
                                25.9255
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "a127",
                            "contactId": "CA646",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                15.8118,
                                37.4333
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a128",
                            "contactId": "CA2546",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:27",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:27",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:27",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                10.2765,
                                42.779
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a129",
                            "contactId": "CA551",
                            "name": "Red:28",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:28",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:28",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:28",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.5754,
                                53.1024
                            ],
                            "attributes": {
                                "a_Units": "_7",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a130",
                            "contactId": "CA102",
                            "name": "Red:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                5.4289,
                                62.9004
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a131",
                            "contactId": "CA2966",
                            "name": "Red:30",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:30",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:30",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:30",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                10.222,
                                61.871
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_10"
                            }
                        },
                        {
                            "uniqid": "a132",
                            "contactId": "CA536",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:31",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:31",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:31",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                3.7402,
                                49.7944
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_7",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a133",
                            "contactId": "CA92",
                            "name": "Red:32",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:32",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:32",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:32",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                6.4508,
                                82.0093
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_5"
                            }
                        },
                        {
                            "uniqid": "a134",
                            "contactId": "CA2061",
                            "name": "Red:33",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:33",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:33",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:33",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                22.7423,
                                57.4557
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "a135",
                            "contactId": "CA2276",
                            "name": "Red:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:34",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:34",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:34",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                21.6743,
                                78.5697
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a136",
                            "contactId": "CA3131",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:35",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:35",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:35",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                20.6161,
                                68.9623
                            ],
                            "attributes": {
                                "a_Connections": "_5",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a137",
                            "contactId": "CA671",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:36",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:36",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:36",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                3.9846,
                                53.4007
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_12",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a138",
                            "contactId": "CA877",
                            "name": "Red:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:37",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:37",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:37",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                15.3666,
                                23.9731
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a139",
                            "contactId": "CA3078",
                            "name": "Red:38",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:38",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:38",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:38",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                10.755,
                                29.6036
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "a140",
                            "contactId": "CA2987",
                            "name": "Red:39",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:39",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:39",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:39",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.8906,
                                48.4964
                            ],
                            "attributes": {
                                "a_Units": "_37",
                                "a_Building_Type": "B-Type-A"
                            }
                        },
                        {
                            "uniqid": "a141",
                            "contactId": "CA1569",
                            "name": "Red:40",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:40",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:40",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:40",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                17.2056,
                                74.2572
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a142",
                            "contactId": "CA397",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:41",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:41",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:41",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                16.8565,
                                73.1123
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a143",
                            "contactId": "CA2397",
                            "name": "Red:42",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:42",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:42",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:42",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                20.4321,
                                33.6663
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a144",
                            "contactId": "CA2180",
                            "name": "Red:43",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:43",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:43",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:43",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                17.5814,
                                64.6111
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a145",
                            "contactId": "CA203",
                            "name": "Red:44",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:44",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:44",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:44",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                12.7839,
                                27.7223
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_37",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a146",
                            "contactId": "CA2173",
                            "name": "Red:45",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:45",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:45",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:45",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                4.6663,
                                32.2743
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_42",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a147",
                            "contactId": "CA512",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                9.193,
                                24.9431
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a148",
                            "contactId": "CA20",
                            "name": "Red:47",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:47",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:47",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:47",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                8.9579,
                                73.7921
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit41",
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a149",
                            "contactId": "CA2842",
                            "name": "Red:48",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:48",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:48",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:48",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                6.8957,
                                80.1217
                            ],
                            "attributes": {
                                "a_Units": "_22",
                                "a_Building_Type": "B-Type-C"
                            }
                        },
                        {
                            "uniqid": "a150",
                            "contactId": "CA3106",
                            "name": "Red:49",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:49",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:49",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:49",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                20.9729,
                                85.548
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a151",
                            "contactId": "CA464",
                            "name": "Red:50",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:50",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:50",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:50",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                16.2453,
                                76.5279
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a152",
                            "contactId": "CA1614",
                            "name": "Red:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:51",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:51",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:51",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                24.8222,
                                74.4443
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a153",
                            "contactId": "CA989",
                            "name": "Red:52",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                9.6361,
                                84.8789
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a154",
                            "contactId": "CA236",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:53",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:53",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:53",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                7.4991,
                                22.5968
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a155",
                            "contactId": "CA2905",
                            "name": "Red:54",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:54",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:54",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:54",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                18.2556,
                                53.0148
                            ],
                            "attributes": {
                                "a_Connections": "_22",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a156",
                            "contactId": "CA2865",
                            "name": "Red:55",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:55",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:55",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:55",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                27.6014,
                                63.5445
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit27",
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a157",
                            "contactId": "CA2450",
                            "name": "Red:56",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:56",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:56",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:56",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                18.0587,
                                33.887
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_17"
                            }
                        },
                        {
                            "uniqid": "a158",
                            "contactId": "CA3371",
                            "name": "Red:57",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:57",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:57",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:57",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                28.4689,
                                34.6763
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit45",
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a159",
                            "contactId": "CA1379",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:58",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:58",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:58",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                24.3104,
                                48.8343
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a160",
                            "contactId": "CA184",
                            "name": "Red:59",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:59",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:59",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:59",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                11.4869,
                                75.265
                            ],
                            "attributes": {
                                "a_Connections": "_46",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a161",
                            "contactId": "CA2026",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:60",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:60",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:60",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                26.811,
                                23.6248
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a162",
                            "contactId": "CA1035",
                            "name": "Red:61",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:61",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:61",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:61",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.4325,
                                65.5802
                            ],
                            "attributes": {
                                "a_Units": "_10",
                                "a_Building_Type": "B-Type-C"
                            }
                        },
                        {
                            "uniqid": "a163",
                            "contactId": "CA930",
                            "name": "Red:62",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:62",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:62",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:62",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                2.3264,
                                61.6238
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_40"
                            }
                        },
                        {
                            "uniqid": "a164",
                            "contactId": "CA2686",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:63",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:63",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:63",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                9.5227,
                                65.8734
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a165",
                            "contactId": "CA25",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:64",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:64",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:64",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.2279,
                                73.1358
                            ],
                            "attributes": {
                                "a_Units": "_2",
                                "a_Building_Type": "B-Type-C"
                            }
                        },
                        {
                            "uniqid": "a166",
                            "contactId": "CA3280",
                            "name": "Red:65",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:65",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:65",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:65",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                28.0434,
                                27.7392
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_2",
                                "a_Range": 100,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a167",
                            "contactId": "CA2511",
                            "name": "Red:66",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:66",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:66",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:66",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                25.6097,
                                84.921
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a168",
                            "contactId": "CA1889",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:67",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:67",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:67",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                20.955,
                                75.4147
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit42",
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a169",
                            "contactId": "CA292",
                            "name": "Red:68",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:68",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:68",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:68",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                8.817,
                                62.5734
                            ],
                            "attributes": {
                                "a_Units": "_9",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a170",
                            "contactId": "CA153",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:69",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:69",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:69",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                15.7441,
                                43.744
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_20",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a171",
                            "contactId": "CA371",
                            "name": "Red:70",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:70",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:70",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:70",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                8.776,
                                84.0781
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a172",
                            "contactId": "CA2526",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:71",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:71",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:71",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                28.405,
                                78.6768
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a173",
                            "contactId": "CA1114",
                            "name": "Red:72",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:72",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:72",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:72",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                12.8262,
                                54.4894
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_4",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a174",
                            "contactId": "CA3192",
                            "name": "Red:73",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:73",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:73",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:73",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                18.8761,
                                66.8628
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit37",
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "a175",
                            "contactId": "CA2748",
                            "name": "Red:74",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:74",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:74",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:74",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                23.3077,
                                74.8654
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a176",
                            "contactId": "CA2593",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:75",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:75",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:75",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                18.8227,
                                46.3894
                            ],
                            "attributes": {
                                "a_Units": "_2",
                                "a_Building_Type": "B-Type-C"
                            }
                        },
                        {
                            "uniqid": "a177",
                            "contactId": "CA2843",
                            "name": "Red:76",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:76",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:76",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:76",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                27.6038,
                                82.0479
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Equipment": "_3"
                            }
                        },
                        {
                            "uniqid": "a178",
                            "contactId": "CA985",
                            "name": "Red:77",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:77",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:77",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:77",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                8.7577,
                                30.7051
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a179",
                            "contactId": "CA1435",
                            "name": "Red:78",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:78",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:78",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:78",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                18.7797,
                                83.6369
                            ],
                            "attributes": {
                                "a_Units": "_20",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a180",
                            "contactId": "CA269",
                            "name": "Red:79",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:79",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:79",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:79",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                10.8558,
                                50.73
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a181",
                            "contactId": "CA2066",
                            "name": "Red:80",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:80",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:80",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:80",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                26.4279,
                                23.7424
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_28",
                                "a_Mez_Range": 100,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a182",
                            "contactId": "CA2357",
                            "name": "Red:81",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:81",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:81",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:81",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                25.4633,
                                54.9734
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a183",
                            "contactId": "CA1458",
                            "name": "Red:82",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:82",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:82",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:82",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                10.4511,
                                72.6218
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a184",
                            "contactId": "CA40",
                            "name": "Red:83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:83",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:83",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:83",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                26.9469,
                                51.6081
                            ],
                            "attributes": {
                                "a_Connections": "_5",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a185",
                            "contactId": "CA2810",
                            "name": "Red:84",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:84",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:84",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:84",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.9699,
                                38.3702
                            ],
                            "attributes": {
                                "a_Units": "_5",
                                "a_Building_Type": "B-Type-A"
                            }
                        },
                        {
                            "uniqid": "a186",
                            "contactId": "CA1532",
                            "name": "Red:85",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:85",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:85",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:85",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                23.8524,
                                30.2117
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_40"
                            }
                        },
                        {
                            "uniqid": "a187",
                            "contactId": "CA2557",
                            "name": "Red:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:86",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:86",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:86",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.7711,
                                48.8742
                            ],
                            "attributes": {
                                "a_Units": "_3",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a188",
                            "contactId": "CA342",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:87",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:87",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:87",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                5.7717,
                                77.2612
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a189",
                            "contactId": "CA2089",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:88",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:88",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:88",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                14.8693,
                                74.9739
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_49",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a190",
                            "contactId": "CA3112",
                            "name": "Red:89",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:89",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:89",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:89",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                22.648,
                                39.3907
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Equipment": "_42"
                            }
                        },
                        {
                            "uniqid": "a191",
                            "contactId": "CA3210",
                            "name": "Red:90",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:90",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:90",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:90",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                24.2877,
                                64.0048
                            ],
                            "attributes": {
                                "a_Units": "_31",
                                "a_Building_Type": "B-Type-A"
                            }
                        },
                        {
                            "uniqid": "a192",
                            "contactId": "CA2755",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                22.1183,
                                40.2478
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a193",
                            "contactId": "CA798",
                            "name": "Red:92",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:92",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:92",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:92",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                16.8769,
                                78.6289
                            ],
                            "attributes": {
                                "a_Connections": "_7",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a194",
                            "contactId": "CA1940",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:93",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:93",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:93",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                25.2486,
                                58.2358
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a195",
                            "contactId": "CA616",
                            "name": "Red:94",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:94",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:94",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:94",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                17.69,
                                81.3482
                            ],
                            "attributes": {
                                "a_Connections": "_28",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a196",
                            "contactId": "CA2073",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:95",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:95",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:95",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                2.883,
                                47.9358
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_15",
                                "a_Range": 100,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a197",
                            "contactId": "CA823",
                            "name": "Red:96",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:96",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:96",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:96",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                10.4371,
                                38.1299
                            ],
                            "attributes": {
                                "a_Units": "_4",
                                "a_Building_Type": "B-Type-C"
                            }
                        },
                        {
                            "uniqid": "a198",
                            "contactId": "CA338",
                            "name": "Red:97",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:97",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:97",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:97",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                23.7644,
                                67.9297
                            ],
                            "attributes": {
                                "a_Connections": "_18",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a199",
                            "contactId": "CA1658",
                            "name": "Red:98",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:98",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:98",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:98",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                28.4737,
                                52.4463
                            ],
                            "attributes": {
                                "a_Units": "_4",
                                "a_Building_Type": "B-Type-B"
                            }
                        },
                        {
                            "uniqid": "a200",
                            "contactId": "CA2935",
                            "name": "Red:99",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:99",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:99",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:99",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                16.6616,
                                45.4264
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Equipment": "_33"
                            }
                        }
                    ],
                    "color": "#ff3d43",
                    "dirty": false,
                    "iconURL": "default_img/forceDefault.png",
                    "name": "Red",
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
                            "name": "MAR",
                            "roleId": "red-mar"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Land & Fires",
                            "roleId": "red-land"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Air & AD",
                            "roleId": "red-air"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Direct Action",
                            "roleId": "red-direct"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Threat Network",
                            "roleId": "red-threat"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "f-red"
                },
                {
                    "color": "#7ed321",
                    "dirty": false,
                    "iconURL": "default_img/forceDefault.png",
                    "name": "Green",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "green-co"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "f-green"
                },
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
                            "name": "CO",
                            "roleId": "white-co"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "f-white"
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
                        "maxZoom": 7,
                        "minZoom": 3,
                        "tileLayer": {
                            "attribution": "Generated by QTiles https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ",
                            "url": "./arabian_sea/{z}/{x}/{y}.png",
                            "maxNativeZoom": 7
                        }
                    },
                    "participants": [
                        {
                            "forceUniqid": "f-blue",
                            "pType": "ParticipantPlanning",
                            "roles": [],
                            "subscriptionId": "huk3qr",
                            "templates": []
                        },
                        {
                            "forceUniqid": "f-red",
                            "pType": "ParticipantPlanning",
                            "roles": [],
                            "subscriptionId": "h123qr",
                            "templates": []
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
                    "name": "Fast Jet Squadron (blue)",
                    "icon": "n_blue_air_fighter.svg",
                    "conditions": [],
                    "states": [],                    
                    "uniqid": "blue_air_fighter",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_Equipment"
                    ],
                    "travelMode": "air"
                },
                {
                    "name": "Bomber Squadron (blue)",
                    "icon": "n_blue_air_bomber.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_bomber",
                    "travelMode": "air"
                },
                {
                    "name": "SAM (blue)",
                    "icon": "n_blue_land_sam.svg",
                    "attributeTypeIds": [
                        "a_Number_Missiles",
                        "a_Equipment",
                        "a_Mez_Range",
                        "a_C2_Status"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "MTG (blue)",
                    "icon": "n_blue_maritime_task_force.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mtg",
                    "travelMode": "sea"
                },
                {
                    "name": "Ship (blue)",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_ship",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine (blue)",
                    "icon": "n_blue_maritime_submarine.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit (blue)",
                    "icon": "n_blue_land_armed_inf.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Size",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_unit",
                    "travelMode": "land"
                },
                {
                    "name": "Fixed Asset (blue)",
                    "icon": "n_blue_land_asset.svg",
                    "attributeTypeIds": [
                        "a_Units",
                        "a_Building_Type"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_asset",
                    "travelMode": "land"
                },
                {
                    "name": "SSM (blue)",
                    "icon": "n_blue_land_ssm.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Missiles",
                        "a_Equipment",
                        "a_Range",
                        "a_C2_Status"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_ssm",
                    "travelMode": "land"
                },
                {
                    "name": "ISTAR (blue)",
                    "icon": "n_blue_air_recce.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_Equipment",
                        "a_Detection Range"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_istar",
                    "travelMode": "air"
                },
                {
                    "name": "Air LOGS (blue)",
                    "icon": "n_blue_air_utility.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_logs",
                    "travelMode": "air"
                },
                {
                    "name": "C2 Node (blue)",
                    "icon": "n_blue_hq.svg",
                    "attributeTypeIds": [
                        "a_Connections",
                        "a_C2_Status"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC (blue)",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_FIACs"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Maritime Minefield (blue)",
                    "icon": "n_blue_maritime_minefield.svg",
                    "attributeTypeIds": [
                        "a_Density",
                        "a_Minefield_Passable"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mine",
                    "travelMode": "sea"
                },
                {
                    "name": "Fast Jet Squadron (red)",
                    "icon": "n_red_air_fighter.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_fighter",
                    "travelMode": "air",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "SAM (red)",
                    "icon": "n_red_land_sam.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_sam",
                    "travelMode": "air",
                    "attributeTypeIds": [
                        "a_Number_Missiles",
                        "a_Equipment",
                        "a_Mez_Range",
                        "a_C2_Status"
                    ]
                },
                {
                    "name": "MTG (red)",
                    "icon": "n_red_maritime_task_force.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mtg",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "Submarine (red)",
                    "icon": "n_red_maritime_submarine.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_submarine",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "Land Unit (red)",
                    "icon": "n_red_land_armed_inf.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_unit",
                    "travelMode": "land",
                    "attributeTypeIds": [
                        "a_Size",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "Fixed Asset (red)",
                    "icon": "n_red_land_asset.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_asset",
                    "travelMode": "land",
                    "attributeTypeIds": [
                        "a_Units",
                        "a_Building_Type"
                    ]
                },
                {
                    "name": "SSM (red)",
                    "icon": "n_red_land_ssm.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_ssm",
                    "travelMode": "land",
                    "attributeTypeIds": [
                        "a_Number_Missiles",
                        "a_Equipment",
                        "a_Range",
                        "a_C2_Status"
                    ]
                },
                {
                    "name": "ISTAR (red)",
                    "icon": "n_red_air_recce.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_istar",
                    "travelMode": "air",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_Equipment",
                        "a_Detection Range"
                    ]
                },
                {
                    "name": "Air LOGS (red)",
                    "icon": "n_red_air_utility.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_logs",
                    "travelMode": "air",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "C2 Node (red)",
                    "icon": "n_red_hq.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_c2",
                    "travelMode": "land",
                    "attributeTypeIds": [
                        "a_Connections",
                        "a_C2_Status"
                    ]
                },
                {
                    "name": "FIAC (red)",
                    "icon": "n_red_maritime_missile_boat.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_fiac",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_FIACs"
                    ]
                },
                {
                    "name": "Maritime Minefield (red)",
                    "icon": "n_red_maritime_minefield.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mine",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Density",
                        "a_Minefield_Passable"
                    ]
                }
            ],
            "selectedType": ""
        },
        "attributeTypes": {
            "attributes": [
                {
                    "attrId": "a_Number_Aircraft",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 10,
                    "description": "Number of aircraftt",
                    "editableByPlayer": false,
                    "name": "Number"
                }, {
                    "attrId": "a_Number_Missiles",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Number of missiles",
                    "editableByPlayer": false,
                    "name": "Number"
                }, {
                    "attrId": "a_Number_FIACs",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Number of FIAC assets",
                    "editableByPlayer": false,
                    "name": "Number"
                }, {
                    "attrId": "a_Mez_Range",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "MEZ Range (km)",
                    "editableByPlayer": false,
                    "name": "MEZ Range",
                    "units": "km"
                }, {
                    "attrId": "a_Speed",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 10,
                    "description": "Default Speed (kts)",
                    "editableByPlayer": false,
                    "name": "Speed (kts)"
                },
                {
                    "attrId": "a_Size",
                    "attrType": "AttributeTypeString",
                    "defaultValue": "Size of military unit",
                    "description": "Equipment carried on asset",
                    "editableByPlayer": false,
                    "name": "Size"
                }, {
                    "attrId": "a_C2_Status",
                    "attrType": "AttributeTypeEnum",
                    "defaultValue": "Operational",
                    "description": "C2 Status",
                    "values": ["None", "Degraded", "Operational"],
                    "editableByPlayer": false,
                    "name": "C2 Status"
                }, {
                    "attrId": "a_Minefield_Passable",
                    "attrType": "AttributeTypeEnum",
                    "defaultValue": "Operational",
                    "description": "If minefield is passable",
                    "values": ["No", "Limited", "Yes"],
                    "editableByPlayer": false,
                    "name": "C2 Status"
                },                
                {
                    "attrId": "a_Building_Type",
                    "attrType": "AttributeTypeEnum",
                    "description": "Type of fixed land asset",
                    "values": ["B-Type-A", "B-Type-B", "B-Type-C"],
                    "editableByPlayer": false,
                    "name": "Building Type"
                },
                {
                    "attrId": "a_Range",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Range of weapon (km)",
                    "editableByPlayer": false,
                    "name": "Range",
                    "units": "km"
                },
                {
                    "attrId": "a_Detection Range",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 50,
                    "description": "Detection Range of asset (km)",
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
                                    "actId": "BMD-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "ISTAR",
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Patrol",
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SAM-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "Strike",
                                    "actId": "STRIKE",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Land-Strike",
                                    "template": "Land--MissileStrike",
                                    "shortCircuits": [
                                        "inter-at-end"
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Land-Transit",
                                    "template": "Land--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Maritime",
                            "activities": [
                                {
                                    "name": "ASW Barrier",
                                    "actId": "ASW-B",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT"
                                    ],
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
                                    "actId": "BMD-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "FIAC EZ",
                                    "actId": "FIAC",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "M-Clr",
                                        "M-Lay"
                                    ],
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
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Mine Clearance",
                                    "actId": "M-Clr",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "FIAC"
                                    ],
                                    "uniqid": "f-blue-Maritime-Mine Clearance",
                                    "template": "Maritime--Standard",
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Mine Laying",
                                    "actId": "M-Lay",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "FIAC"
                                    ],
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Patrol",
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SAM-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "Strike",
                                    "actId": "STRIKE",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Maritime-Strike",
                                    "template": "Maritime--MissileStrike",
                                    "shortCircuits": [
                                        "inter-at-end"
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Maritime-Transit",
                                    "template": "Maritime--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Air",
                            "activities": [
                                {
                                    "name": "Defensive Counter Air",
                                    "actId": "DCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-blue-Air-Defensive Counter Air",
                                    "template": "Air--Standard",
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
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "ISTAR",
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "actId": "OCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-blue-Air-Offensive Counter Air",
                                    "template": "Air--Standard",
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
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SoffS",
                                    "interactsWith": [
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Air-Stand Off Strike",
                                    "template": "Air--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Launch Location",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Suppression of Air Defences (SEAD)",
                                    "actId": "SEAD",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Air-Suppression of Air Defences (SEAD)",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "SEAD Area",
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
                                    "actId": "TST",
                                    "interactsWith": [
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Air-Transit",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Other",
                            "activities": [
                                {
                                    "name": "Cyber/Space Activity",
                                    "actId": "CYB/SPA",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-blue-Other-Cyber/Space Activity",
                                    "template": "Other--Cyber"
                                },
                                {
                                    "name": "SOF Activity",
                                    "actId": "SOF",
                                    "interactsWith": [
                                        "EW"
                                    ],
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
                                            "name": "Effect Location",
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
                                    "actId": "BMD-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "ISTAR",
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Patrol",
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SAM-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "Strike",
                                    "actId": "STRIKE",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Land-Strike",
                                    "template": "Land--MissileStrike",
                                    "shortCircuits": [
                                        "inter-at-end"
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Land-Transit",
                                    "template": "Land--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Maritime",
                            "activities": [
                                {
                                    "name": "ASW Barrier",
                                    "actId": "ASW-B",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT"
                                    ],
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
                                    "actId": "BMD-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "FIAC EZ",
                                    "actId": "FIAC",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "M-Clr",
                                        "M-Lay"
                                    ],
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
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Mine Clearance",
                                    "actId": "M-Clr",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "FIAC"
                                    ],
                                    "uniqid": "f-red-Maritime-Mine Clearance",
                                    "template": "Maritime--Standard",
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Mine Laying",
                                    "actId": "M-Lay",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "FIAC"
                                    ],
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Patrol",
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SAM-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "Sea Denial",
                                    "actId": "Sea Denial",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-red-Maritime-Sea Denial",
                                    "template": "Maritime--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Sea Denial Area",
                                            "optional": false,
                                            "uniqid": "Sea Denial-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Strike",
                                    "actId": "STRIKE",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Maritime-Strike",
                                    "template": "Maritime--MissileStrike",
                                    "shortCircuits": [
                                        "inter-at-end"
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Maritime-Transit",
                                    "template": "Maritime--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Air",
                            "activities": [
                                {
                                    "name": "Defensive Counter Air",
                                    "actId": "DCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-red-Air-Defensive Counter Air",
                                    "template": "Air--Standard",
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
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "ISTAR",
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "actId": "OCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-red-Air-Offensive Counter Air",
                                    "template": "Air--Standard",
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
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SoffS",
                                    "interactsWith": [
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Air-Stand Off Strike",
                                    "template": "Air--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Launch Location",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Suppression of Air Defences (SEAD)",
                                    "actId": "SEAD",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Air-Suppression of Air Defences (SEAD)",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "SEAD Area",
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
                                    "actId": "TST",
                                    "interactsWith": [
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Air-Transit",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Other",
                            "activities": [
                                {
                                    "name": "Cyber/Space Activity",
                                    "actId": "CYB/SPA",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-red-Other-Cyber/Space Activity",
                                    "template": "Other--Cyber"
                                },
                                {
                                    "name": "SOF Activity",
                                    "actId": "SOF",
                                    "interactsWith": [
                                        "EW"
                                    ],
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
                                            "name": "Effect Location",
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
                                    "actId": "BMD-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "ISTAR",
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Patrol",
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SAM-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "Strike",
                                    "actId": "STRIKE",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-green-Land-Strike",
                                    "template": "Land--MissileStrike",
                                    "shortCircuits": [
                                        "inter-at-end"
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-green-Land-Transit",
                                    "template": "Land--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Maritime",
                            "activities": [
                                {
                                    "name": "ASW Barrier",
                                    "actId": "ASW-B",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT"
                                    ],
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
                                    "actId": "BMD-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "FIAC EZ",
                                    "actId": "FIAC",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "M-Clr",
                                        "M-Lay"
                                    ],
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
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Mine Clearance",
                                    "actId": "M-Clr",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "FIAC"
                                    ],
                                    "uniqid": "f-green-Maritime-Mine Clearance",
                                    "template": "Maritime--Standard",
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Mine Laying",
                                    "actId": "M-Lay",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "FIAC"
                                    ],
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Patrol",
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SAM-MEZ",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "SEAD"
                                    ],
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
                                    "name": "Strike",
                                    "actId": "STRIKE",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-green-Maritime-Strike",
                                    "template": "Maritime--MissileStrike",
                                    "shortCircuits": [
                                        "inter-at-end"
                                    ]
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-green-Maritime-Transit",
                                    "template": "Maritime--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Air",
                            "activities": [
                                {
                                    "name": "Defensive Counter Air",
                                    "actId": "DCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-green-Air-Defensive Counter Air",
                                    "template": "Air--Standard",
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
                                    "actId": "EW",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST",
                                        "CYB/SPA",
                                        "SOF"
                                    ],
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
                                            "name": "EW Area of Effect",
                                            "optional": false,
                                            "uniqid": "EW Attack-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "EW Attack-2"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "ISTAR",
                                    "actId": "ISTAR",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Patrol Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-1"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Observation Area",
                                            "optional": false,
                                            "uniqid": "ISTAR-2"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "ISTAR-3"
                                        }
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "actId": "OCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-green-Air-Offensive Counter Air",
                                    "template": "Air--Standard",
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
                                    "actId": "PATRL",
                                    "interactsWith": [
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "TRANSIT",
                                        "ASW-B",
                                        "FIAC",
                                        "M-Clr",
                                        "M-Lay",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    "name": "Resupply",
                                    "actId": "RESUPP",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                            "name": "Resupply at this location",
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
                                    "actId": "SoffS",
                                    "interactsWith": [
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-green-Air-Stand Off Strike",
                                    "template": "Air--MissileStrike",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Launch Location",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Stand Off Strike-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Suppression of Air Defences (SEAD)",
                                    "actId": "SEAD",
                                    "interactsWith": [
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-green-Air-Suppression of Air Defences (SEAD)",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Suppression of Air Defences (SEAD)-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "SEAD Area",
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
                                    "actId": "TST",
                                    "interactsWith": [
                                        "EW",
                                        "DCA",
                                        "OCA"
                                    ],
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
                                    ],
                                    "provideSpatialAssets": true
                                },
                                {
                                    "name": "Transit",
                                    "actId": "TRANSIT",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "ASW-B",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-green-Air-Transit",
                                    "template": "Air--Transit",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Transit-0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Other",
                            "activities": [
                                {
                                    "name": "Cyber/Space Activity",
                                    "actId": "CYB/SPA",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-green-Other-Cyber/Space Activity",
                                    "template": "Other--Cyber"
                                },
                                {
                                    "name": "SOF Activity",
                                    "actId": "SOF",
                                    "interactsWith": [
                                        "EW"
                                    ],
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
                                            "name": "Effect Location",
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
                    "lastUpdated": "2019-09-30T12:37:26.705Z",
                    "title": "Adjudication Feedback",
                    "details": {
                        "$id": "https://example.com/arrays.schema.json",
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "description": "Outcomes from a set of orders",
                        "type": "object",
                        "title": "Adjudication Outcomes",
                        "format": "grid",
                        "required": [
                            "narrative"
                        ],
                        "properties": {
                            "Reference": {
                                "title": "Reference",
                                "propertyOrder": 10,
                                "readonly": true,
                                "type": "string"
                            },
                            "messageType": {
                                "options": {
                                    "hidden": true
                                },
                                "type": "string"
                            },
                            "narrative": {
                                "title": "General Feedback",
                                "propertyOrder": 20,
                                "type": "string",
                                "format": "textarea"
                            },
                            "perceptionOutcomes": {
                                "type": "array",
                                "title": "Perception Outcomes",
                                "propertyOrder": 40,
                                "format": "table",
                                "additionalProperties": false,
                                "items": {
                                    "title": "Perception Outcome",
                                    "type": "object",
                                    "required": [
                                        "force",
                                        "asset"
                                    ],
                                    "properties": {
                                        "force": {
                                            "title": "By",
                                            "propertyOrder": 10,
                                            "type": "string",
                                            "enum": [
                                                "f-a",
                                                "f-b",
                                                "f-c",
                                                "f-d"
                                            ],
                                            "options": {
                                                "enum_titles": [
                                                    "Red",
                                                    "Blue",
                                                    "White",
                                                    "Green"
                                                ],
                                                "grid_columns": 3
                                            }
                                        },
                                        "asset": {
                                            "title": "Asset",
                                            "propertyOrder": 20,
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ],
                                                "grid_columns": 3
                                            }
                                        },
                                        "perceivedForce": {
                                            "title": "Force",
                                            "propertyOrder": 30,
                                            "type": "string",
                                            "enum": [
                                                "Unknown",
                                                "Blue",
                                                "Red",
                                                "Green",
                                                "White"
                                            ],
                                            "options": {
                                                "grid_columns": 3
                                            }
                                        },
                                        "perceivedType": {
                                            "title": "Platform Type",
                                            "propertyOrder": 40,
                                            "type": "string",
                                            "enum": [
                                                "Unknown",
                                                "Tank",
                                                "Frigate",
                                                "Fighter",
                                                "Destroyer"
                                            ],
                                            "options": {
                                                "grid_columns": 3
                                            }
                                        },
                                        "health": {
                                            "title": "Health",
                                            "propertyOrder": 50,
                                            "type": "string",
                                            "enum": [
                                                "Unknown",
                                                "100",
                                                "75",
                                                "50",
                                                "25",
                                                "0"
                                            ],
                                            "options": {
                                                "grid_columns": 3
                                            }
                                        },
                                        "perceivedName": {
                                            "title": "Name",
                                            "propertyOrder": 60,
                                            "type": "string"
                                        },
                                        "narrative": {
                                            "title": "Comment",
                                            "propertyOrder": 70,
                                            "type": "string",
                                            "format": "textarea"
                                        },
                                        "private": {
                                            "title": "Private",
                                            "propertyOrder": 80,
                                            "type": "string",
                                            "format": "textarea"
                                        }
                                    }
                                }
                            },
                            "healthOutcomes": {
                                "type": "array",
                                "format": "table",
                                "propertyOrder": 50,
                                "title": "Health Outcomes",
                                "additionalProperties": false,
                                "items": {
                                    "title": "Health Outcome",
                                    "type": "object",
                                    "required": [
                                        "asset",
                                        "health"
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
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ],
                                                "grid_columns": 3
                                            }
                                        },
                                        "health": {
                                            "title": "Condition",
                                            "type": "string",
                                            "enum": [
                                                "100",
                                                "75",
                                                "50",
                                                "25",
                                                "0"
                                            ],
                                            "options": {
                                                "grid_columns": 3
                                            }
                                        },
                                        "narrative": {
                                            "title": "Comment",
                                            "type": "string",
                                            "format": "textarea"
                                        },
                                        "private": {
                                            "title": "Private",
                                            "type": "string",
                                            "format": "textarea"
                                        }
                                    }
                                }
                            },
                            "locationOutcomes": {
                                "type": "array",
                                "format": "table",
                                "propertyOrder": 60,
                                "title": "Movement Outcomes",
                                "additionalProperties": false,
                                "items": {
                                    "title": "Movement Outcome",
                                    "type": "object",
                                    "required": [
                                        "asset",
                                        "location"
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
                                                "enum_titles": [
                                                    "Tank A",
                                                    "Tank B",
                                                    "Tank C",
                                                    "Plane A"
                                                ],
                                                "grid_columns": 3
                                            }
                                        },
                                        "location": {
                                            "title": "Location [2.4, 4.2]",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 3
                                            }
                                        },
                                        "narrative": {
                                            "title": "Comment",
                                            "type": "string",
                                            "format": "textarea"
                                        },
                                        "private": {
                                            "title": "Private",
                                            "type": "string",
                                            "format": "textarea"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "completed": false,
                    "_id": "p9adjudicate",
                    "_rev": "1-7fa1e6dd6b4ac5b6afc45b596ee7af61"
                },
                {
                    "lastUpdated": "2019-09-30T12:37:26.705Z",
                    "title": "Chat",
                    "details": {
                        "type": "object",
                        "properties": {
                            "content": {
                                "type": "string",
                                "format": "textarea",
                                "options": {
                                    "inputAttributes": {
                                        "placeholder": "type the text"
                                    }
                                }
                            }
                        },
                        "title": "Chat",
                        "format": "grid"
                    },
                    "completed": false,
                    "_id": "k16eedkl",
                    "_rev": "1-09ab7a18ff677cec5d9a56f02a45788d"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "rulesOfEngagement",
                            "emconState",
                            "targetType",
                            "ownAssets",
                            "otherAssets"
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
                                },
                                "type": "string"
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "targetType": {
                                "type": "string",
                                "title": "Target Type",
                                "propertyOrder": 303,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Launchers",
                                "options": {
                                    "grid_columns": 7,
                                    "enable_array_copy": true,
                                    "disable_array_reorder": true
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
                                            "title": "Launcher",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Battery A",
                                                    "Battery B",
                                                    "Battery C",
                                                    "Battery D"
                                                ]
                                            }
                                        },
                                        "missileType": {
                                            "title": "Missile Type",
                                            "type": "string",
                                            "enum": [
                                                "###Ballistic",
                                                "SRBM",
                                                "MRBM",
                                                "IRBM",
                                                "###Cruise",
                                                "Standard Cruise",
                                                "Low Obs Cruise",
                                                "###UAV",
                                                "Propellor OWA UAV",
                                                "Jet OWA UAV"
                                            ],
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 1
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 75,
                                "title": "Targets",
                                "options": {
                                    "grid_columns": 7,
                                    "enable_array_copy": true,
                                    "disable_array_reorder": true
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
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Site A",
                                                    "Opp Site B",
                                                    "Opp Site C",
                                                    "Opp Site D"
                                                ]
                                            }
                                        },
                                        "missileType": {
                                            "title": "Missile Type",
                                            "type": "string",
                                            "enum": [
                                                "SRBM",
                                                "MRBM",
                                                "IRBM",
                                                "Standard Cruise",
                                                "Low Obs Cruise",
                                                "Propellor OWA UAV",
                                                "Jet OWA UAV"
                                            ],
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 1
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            }
                        },
                        "title": "Land--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--MissileStrike",
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "targetType",
                            "ownAssets",
                            "otherAssets"
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
                                },
                                "type": "string"
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "targetType": {
                                "type": "string",
                                "title": "Target Type",
                                "propertyOrder": 303,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Launchers",
                                "options": {
                                    "grid_columns": 7,
                                    "enable_array_copy": true,
                                    "disable_array_reorder": true
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
                                            "title": "Launcher",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Battery A",
                                                    "Battery B",
                                                    "Battery C",
                                                    "Battery D"
                                                ]
                                            }
                                        },
                                        "missileType": {
                                            "title": "Missile Type",
                                            "type": "string",
                                            "enum": [
                                                "###Ballistic",
                                                "SRBM",
                                                "MRBM",
                                                "IRBM",
                                                "###Cruise",
                                                "Standard Cruise",
                                                "Low Obs Cruise",
                                                "###UAV",
                                                "Propellor OWA UAV",
                                                "Jet OWA UAV"
                                            ],
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 1
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 75,
                                "title": "Targets",
                                "options": {
                                    "grid_columns": 7,
                                    "enable_array_copy": true,
                                    "disable_array_reorder": true
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
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Site A",
                                                    "Opp Site B",
                                                    "Opp Site C",
                                                    "Opp Site D"
                                                ]
                                            }
                                        },
                                        "missileType": {
                                            "title": "Missile Type",
                                            "type": "string",
                                            "enum": [
                                                "SRBM",
                                                "MRBM",
                                                "IRBM",
                                                "Standard Cruise",
                                                "Low Obs Cruise",
                                                "Propellor OWA UAV",
                                                "Jet OWA UAV"
                                            ],
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 1
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            }
                        },
                        "title": "Maritime--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--MissileStrike",
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "effect": {
                                "type": "string",
                                "title": "Effect Type",
                                "propertyOrder": 313,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "effect": {
                                "type": "string",
                                "title": "Effect Type",
                                "propertyOrder": 313,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "requiresAirToAir",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "type": "string",
                                "title": "Posture",
                                "format": "textarea",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "requiresAirToAir": {
                                "type": "boolean",
                                "title": "Requires A to A",
                                "format": "checkbox",
                                "propertyOrder": 230,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "effect": {
                                "type": "string",
                                "title": "Effect Type",
                                "propertyOrder": 313,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "domain",
                            "covert",
                            "method",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "domain": {
                                "type": "array",
                                "uniqueItems": true,
                                "title": "Target Domain",
                                "propertyOrder": 305,
                                "options": {
                                    "grid_columns": 2
                                },
                                "items": {
                                    "type": "string",
                                    "enum": [
                                        "Maritime",
                                        "Air",
                                        "Land"
                                    ]
                                }
                            },
                            "covert": {
                                "type": "boolean",
                                "title": "Covert",
                                "format": "checkbox",
                                "propertyOrder": 306,
                                "options": {
                                    "grid_columns": 1
                                }
                            },
                            "method": {
                                "type": "string",
                                "title": "Observation Method",
                                "propertyOrder": 307,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "domain",
                            "covert",
                            "method",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "domain": {
                                "type": "array",
                                "uniqueItems": true,
                                "title": "Target Domain",
                                "propertyOrder": 305,
                                "options": {
                                    "grid_columns": 2
                                },
                                "items": {
                                    "type": "string",
                                    "enum": [
                                        "Maritime",
                                        "Air",
                                        "Land"
                                    ]
                                }
                            },
                            "covert": {
                                "type": "boolean",
                                "title": "Covert",
                                "format": "checkbox",
                                "propertyOrder": 306,
                                "options": {
                                    "grid_columns": 1
                                }
                            },
                            "method": {
                                "type": "string",
                                "title": "Observation Method",
                                "propertyOrder": 307,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.496Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "requiresAirToAir",
                            "domain",
                            "covert",
                            "method",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "type": "string",
                                "title": "Posture",
                                "format": "textarea",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "requiresAirToAir": {
                                "type": "boolean",
                                "title": "Requires A to A",
                                "format": "checkbox",
                                "propertyOrder": 230,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "domain": {
                                "type": "array",
                                "uniqueItems": true,
                                "title": "Target Domain",
                                "propertyOrder": 305,
                                "options": {
                                    "grid_columns": 2
                                },
                                "items": {
                                    "type": "string",
                                    "enum": [
                                        "Maritime",
                                        "Air",
                                        "Land"
                                    ]
                                }
                            },
                            "covert": {
                                "type": "boolean",
                                "title": "Covert",
                                "format": "checkbox",
                                "propertyOrder": 306,
                                "options": {
                                    "grid_columns": 1
                                }
                            },
                            "method": {
                                "type": "string",
                                "title": "Observation Method",
                                "propertyOrder": 307,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.496Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "patrolType": {
                                "type": "string",
                                "title": "Patrol Type",
                                "propertyOrder": 304,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "patrolType": {
                                "type": "string",
                                "title": "Patrol Type",
                                "propertyOrder": 304,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "requiresAirToAir",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "type": "string",
                                "title": "Posture",
                                "format": "textarea",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "requiresAirToAir": {
                                "type": "boolean",
                                "title": "Requires A to A",
                                "format": "checkbox",
                                "propertyOrder": 230,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "patrolType": {
                                "type": "string",
                                "title": "Patrol Type",
                                "propertyOrder": 304,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "requiresAirToAir",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "type": "string",
                                "title": "Posture",
                                "format": "textarea",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "requiresAirToAir": {
                                "type": "boolean",
                                "title": "Requires A to A",
                                "format": "checkbox",
                                "propertyOrder": 230,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "transitSpeed",
                            "transitDuration",
                            "transitPosture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 6
                                }
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
                            "transitPosture": {
                                "enum": [
                                    "Rapid",
                                    "Standard",
                                    "Slow"
                                ],
                                "title": "Transit Posture",
                                "type": "string",
                                "propertyOrder": 302,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "transitSpeed",
                            "transitDuration",
                            "transitPosture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
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
                            "transitPosture": {
                                "enum": [
                                    "Rapid",
                                    "Standard",
                                    "Slow"
                                ],
                                "title": "Transit Posture",
                                "type": "string",
                                "propertyOrder": 302,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "requiresAirToAir",
                            "transitSpeed",
                            "transitDuration",
                            "transitPosture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "type": "string",
                                "title": "Posture",
                                "format": "textarea",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "requiresAirToAir": {
                                "type": "boolean",
                                "title": "Requires A to A",
                                "format": "checkbox",
                                "propertyOrder": 230,
                                "options": {
                                    "grid_columns": 4
                                }
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
                            "transitPosture": {
                                "enum": [
                                    "Rapid",
                                    "Standard",
                                    "Slow"
                                ],
                                "title": "Transit Posture",
                                "type": "string",
                                "propertyOrder": 302,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "active": {
                                "type": "boolean",
                                "title": "Active?",
                                "format": "checkbox",
                                "propertyOrder": 312,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "enum": [
                                    "ASW focus",
                                    "ASuW focus",
                                    "AAW focus"
                                ],
                                "title": "Posture",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "density": {
                                "type": "integer",
                                "title": "Minefield Density",
                                "propertyOrder": 310,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "covert": {
                                "type": "boolean",
                                "title": "Covert",
                                "format": "checkbox",
                                "propertyOrder": 311,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.497Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.497Z",
                    "title": "Air--MissileStrike",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "intent",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "activityDescription",
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "requiresAirToAir",
                            "targetType",
                            "ownAssets",
                            "otherAssets",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
                                },
                                "type": "string"
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "type": "string",
                                "title": "Posture",
                                "format": "textarea",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "requiresAirToAir": {
                                "type": "boolean",
                                "title": "Requires A to A",
                                "format": "checkbox",
                                "propertyOrder": 230,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "targetType": {
                                "type": "string",
                                "title": "Target Type",
                                "propertyOrder": 303,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Launchers",
                                "options": {
                                    "grid_columns": 7,
                                    "enable_array_copy": true,
                                    "disable_array_reorder": true
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
                                            "title": "Launcher",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Battery A",
                                                    "Battery B",
                                                    "Battery C",
                                                    "Battery D"
                                                ]
                                            }
                                        },
                                        "missileType": {
                                            "title": "Missile Type",
                                            "type": "string",
                                            "enum": [
                                                "###Ballistic",
                                                "SRBM",
                                                "MRBM",
                                                "IRBM",
                                                "###Cruise",
                                                "Standard Cruise",
                                                "Low Obs Cruise",
                                                "###UAV",
                                                "Propellor OWA UAV",
                                                "Jet OWA UAV"
                                            ],
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 1
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "otherAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 75,
                                "title": "Targets",
                                "options": {
                                    "grid_columns": 7,
                                    "enable_array_copy": true,
                                    "disable_array_reorder": true
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
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Site A",
                                                    "Opp Site B",
                                                    "Opp Site C",
                                                    "Opp Site D"
                                                ]
                                            }
                                        },
                                        "missileType": {
                                            "title": "Missile Type",
                                            "type": "string",
                                            "enum": [
                                                "SRBM",
                                                "MRBM",
                                                "IRBM",
                                                "Standard Cruise",
                                                "Low Obs Cruise",
                                                "Propellor OWA UAV",
                                                "Jet OWA UAV"
                                            ],
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "number": {
                                            "title": "Quantity",
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 1
                                            },
                                            "format": "number"
                                        }
                                    }
                                }
                            },
                            "location": {
                                "format": "location",
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
                        "title": "Air--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--MissileStrike",
                    "_rev": "2023-01-04T17:49:42.498Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.498Z",
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
                            "rulesOfEngagement",
                            "emconState",
                            "posture",
                            "requiresAirToAir",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "rulesOfEngagement": {
                                "type": "string",
                                "title": "Rules of Engagement",
                                "format": "textarea",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "emconState": {
                                "type": "string",
                                "title": "Emcon State",
                                "format": "textarea",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "posture": {
                                "type": "string",
                                "title": "Posture",
                                "format": "textarea",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "requiresAirToAir": {
                                "type": "boolean",
                                "title": "Requires A to A",
                                "format": "checkbox",
                                "propertyOrder": 230,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "targetPriority": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Target Type Priority",
                                "propertyOrder": 309,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.498Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.498Z",
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
                            "discussedWithSMEs",
                            "isPreadjudicated",
                            "standaloneActivity",
                            "requiresAS",
                            "supportsOther",
                            "activityDesc",
                            "effectDesc",
                            "activityType",
                            "intendedEffect"
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "discussedWithSMEs": {
                                "type": "boolean",
                                "title": "Has this been discussed with SMEs?",
                                "format": "checkbox",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "isPreadjudicated": {
                                "type": "boolean",
                                "title": "Is this pre-adjudicated?",
                                "format": "checkbox",
                                "propertyOrder": 201,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "standaloneActivity": {
                                "type": "boolean",
                                "title": "Stand-Alone Activity?",
                                "format": "checkbox",
                                "propertyOrder": 202,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "requiresAS": {
                                "type": "boolean",
                                "title": "Does this require AS Discussion?",
                                "format": "checkbox",
                                "propertyOrder": 203,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "supportsOther": {
                                "type": "array",
                                "propertyOrder": 204,
                                "format": "table",
                                "minItems": 0,
                                "title": "Supports another activity",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
                            },
                            "activityDesc": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 205,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "effectDesc": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Effect Description",
                                "propertyOrder": 206,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "activityType": {
                                "type": "string",
                                "title": "Activity Type",
                                "propertyOrder": 316,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "intendedEffect": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Intended Effect",
                                "propertyOrder": 317,
                                "options": {
                                    "grid_columns": 4
                                }
                            }
                        },
                        "title": "Other--Cyber",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Other--Cyber",
                    "_rev": "2023-01-04T17:49:42.498Z"
                },
                {
                    "lastUpdated": "2023-01-04T17:49:42.498Z",
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
                            "discussedWithSMEs",
                            "isPreadjudicated",
                            "standaloneActivity",
                            "requiresAS",
                            "supportsOther",
                            "activityDesc",
                            "effectDesc",
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
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "Start Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 40,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "dateFormat": "Z",
                                        "enableTime": true
                                    }
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
                                    "grid_columns": 6
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
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
                                                "grid_columns": 2,
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
                                    "grid_columns": 5,
                                    "disable_array_reorder": true
                                },
                                "items": {
                                    "type": "object",
                                    "format": "grid",
                                    "title": "Asset",
                                    "required": [
                                        "asset"
                                    ],
                                    "properties": {
                                        "asset": {
                                            "title": "Target",
                                            "type": "string",
                                            "enum": [
                                                "ta",
                                                "tb",
                                                "tc",
                                                "pa"
                                            ],
                                            "options": {
                                                "grid_columns": 2,
                                                "enum_titles": [
                                                    "Opp Tank A",
                                                    "Opp Tank B",
                                                    "Opp Tank C",
                                                    "Opp Plane A"
                                                ]
                                            }
                                        }
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
                                "type": "array",
                                "propertyOrder": 100,
                                "format": "table",
                                "minItems": 0,
                                "title": "Synchronised with",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
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
                            "discussedWithSMEs": {
                                "type": "boolean",
                                "title": "Has this been discussed with SMEs?",
                                "format": "checkbox",
                                "propertyOrder": 200,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "isPreadjudicated": {
                                "type": "boolean",
                                "title": "Is this pre-adjudicated?",
                                "format": "checkbox",
                                "propertyOrder": 201,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "standaloneActivity": {
                                "type": "boolean",
                                "title": "Stand-Alone Activity?",
                                "format": "checkbox",
                                "propertyOrder": 202,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "requiresAS": {
                                "type": "boolean",
                                "title": "Does this require AS Discussion?",
                                "format": "checkbox",
                                "propertyOrder": 203,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "supportsOther": {
                                "type": "array",
                                "propertyOrder": 204,
                                "format": "table",
                                "minItems": 0,
                                "title": "Supports another activity",
                                "options": {
                                    "grid_columns": 6
                                },
                                "items": {
                                    "title": "Order",
                                    "type": "string",
                                    "enum": [
                                        "o-a",
                                        "o-b",
                                        "o-c",
                                        "o-d"
                                    ],
                                    "options": {
                                        "enum_titles": [
                                            "Orders A",
                                            "Orders B",
                                            "Orders C",
                                            "Orders D"
                                        ]
                                    }
                                }
                            },
                            "activityDesc": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 205,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "effectDesc": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Effect Description",
                                "propertyOrder": 206,
                                "options": {
                                    "grid_columns": 6
                                }
                            },
                            "activityType": {
                                "enum": [
                                    "Raid",
                                    "Capture/Kill",
                                    "Gather Int",
                                    "Deliver Effect"
                                ],
                                "title": "Activity Type",
                                "type": "string",
                                "propertyOrder": 314,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "intendedEffect": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Intended Effect",
                                "propertyOrder": 315,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "location": {
                                "format": "location",
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
                    "_rev": "2023-01-04T17:49:42.498Z"
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