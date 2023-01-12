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
                            "uniqid": "a3001",
                            "contactId": "CA393",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:0",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:0",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:0",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                41.4038,
                                49.2312
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine (blue)_3",
                                "a_Equipment": "_13"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a3002",
                                    "contactId": "CA2316",
                                    "name": "Blue:1",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:1",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:1",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:1",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 80,
                                    "platformTypeId": "blue_maritime_ship",
                                    "condition": "working",
                                    "location": [
                                        30.7359,
                                        58.8171
                                    ],
                                    "attributes": {
                                        "a_Speed": 15,
                                        "a_Type": "Ship (blue)_3",
                                        "a_Equipment": "_34"
                                    }
                                },
                                {
                                    "uniqid": "a3003",
                                    "contactId": "CA2310",
                                    "name": "Blue:2",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:2",
                                            "typeId": "blue_land_c2",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:2",
                                            "typeId": "blue_land_c2",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:2",
                                            "typeId": "blue_land_c2",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 65,
                                    "platformTypeId": "blue_land_c2",
                                    "condition": "working",
                                    "location": [
                                        46.6221,
                                        85.4999
                                    ],
                                    "attributes": {
                                        "a_Type": "C2 Node (blue)_5",
                                        "a_Connections": "_23",
                                        "a_C2_Status": "None"
                                    }
                                },
                                {
                                    "uniqid": "a3004",
                                    "contactId": "CA1633",
                                    "name": "Blue:3",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:3",
                                            "typeId": "blue_land_asset",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:3",
                                            "typeId": "blue_land_asset",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:3",
                                            "typeId": "blue_land_asset",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 65,
                                    "platformTypeId": "blue_land_asset",
                                    "condition": "working",
                                    "location": [
                                        45.9328,
                                        35.0351
                                    ],
                                    "attributes": {
                                        "a_Type": "Fixed Asset (blue)_5"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a3005",
                            "contactId": "CA3321",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:4",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:4",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:4",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                37.3561,
                                40.0045
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a3006",
                            "contactId": "CA1053",
                            "name": "Blue:5",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:5",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:5",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:5",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                48.71327782814227,
                                51.97637739394608
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Fast Jet Squadron (blue)_6",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3096",
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a3007",
                            "contactId": "CA891",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:6",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:6",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:6",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                44.2079,
                                82.6248
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Ship (blue)_6",
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a3008",
                            "contactId": "CA2775",
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
                                    "name": "Blue:7",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:7",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                47.5034,
                                62.18
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a3009",
                            "contactId": "CA892",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:8",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:8",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:8",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                48.0679,
                                26.4125
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Ship (blue)_2",
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a3010",
                            "contactId": "CA1109",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:9",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:9",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:9",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                32.9382,
                                26.4401
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_4",
                                "a_Equipment": "_1",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3011",
                            "contactId": "CA2156",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                48.44054123867719,
                                52.21168730973854
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (blue)_4",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3096",
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a3012",
                            "contactId": "CA3250",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:11",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:11",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:11",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                52.099889849348344,
                                52.550291595599035
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_6",
                                "a_Speed": 200,
                                "a_Airfield": "a3041",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a3013",
                            "contactId": "CA546",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:12",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:12",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:12",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                52.130569200671204,
                                52.680552784742524
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Fast Jet Squadron (blue)_2",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3041",
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a3014",
                            "contactId": "CA2283",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:13",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:13",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:13",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                44.80141324739462,
                                78.07012832510902
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_6",
                                "a_Equipment": "_9",
                                "a_Airfield": "a3081"
                            }
                        },
                        {
                            "uniqid": "a3015",
                            "contactId": "CA61",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:14",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:14",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:14",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                51.78522617852784,
                                52.82559190318179
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (blue)_6",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3041",
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a3016",
                            "contactId": "CA1763",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                53.2024,
                                36.5667
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a3017",
                            "contactId": "CA2820",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:16",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:16",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:16",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                44.6976097596115,
                                78.54871986274047
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Fast Jet Squadron (blue)_3",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3081",
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a3018",
                            "contactId": "CA88",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:17",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:17",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:17",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                34.9067,
                                27.7393
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_6",
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3019",
                            "contactId": "CA718",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:18",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:18",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:18",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                48.664126395601784,
                                51.94555776554388
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_4",
                                "a_Speed": 200,
                                "a_Airfield": "a3096",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_24"
                            }
                        },
                        {
                            "uniqid": "a3020",
                            "contactId": "CA1175",
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
                            "health": 90,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                34.1026,
                                43.4211
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Ship (blue)_1",
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a3021",
                            "contactId": "CA1735",
                            "name": "Blue:20",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:20",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:20",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:20",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                39.4965,
                                33.7889
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a3022",
                            "contactId": "CA14",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:21",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:21",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:21",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                35.2785,
                                24.9681
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine (blue)_2",
                                "a_Equipment": "_18"
                            }
                        },
                        {
                            "uniqid": "a3023",
                            "contactId": "CA2530",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:22",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:22",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:22",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                54.6321,
                                57.3682
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Ship (blue)_3",
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a3024",
                            "contactId": "CA3227",
                            "name": "Blue:23",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:23",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:23",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:23",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                34.915,
                                36.5209
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_1",
                                "a_Equipment": "_1",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3025",
                            "contactId": "CA3302",
                            "name": "Blue:24",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:24",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:24",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:24",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                29.955,
                                72.9982
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a3026",
                            "contactId": "CA16",
                            "name": "Blue:25",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:25",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:25",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:25",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                43.6857,
                                35.0933
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a3027",
                            "contactId": "CA2070",
                            "name": "Blue:26",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:26",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:26",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:26",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                52.2764,
                                42.7538
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_6",
                                "a_Speed": 20,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3028",
                            "contactId": "CA1476",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                52.087909779103,
                                52.52526875193154
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_5",
                                "a_Speed": 200,
                                "a_Airfield": "a3041",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a3029",
                            "contactId": "CA171",
                            "name": "Blue:28",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                48.7241,
                                31.7566
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Land Unit (blue)_4",
                                "a_Size": "Unit size_11",
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a3030",
                            "contactId": "CA1694",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:29",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:29",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:29",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                51.848092994099346,
                                52.479079297139116
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_1",
                                "a_Speed": 240,
                                "a_Airfield": "a3041",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "a3031",
                            "contactId": "CA225",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:30",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:30",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:30",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                51.4123,
                                22.2788
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a3032",
                            "contactId": "CA1651",
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
                            "health": 70,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                35.171,
                                66.7885
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_2",
                                "a_Equipment": "_17",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3033",
                            "contactId": "CA1456",
                            "name": "Blue:32",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:32",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:32",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:32",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                30.9007,
                                56.5512
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_3",
                                "a_Equipment": "_37",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3034",
                            "contactId": "CA1568",
                            "name": "Blue:33",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:33",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:33",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:33",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                47.0194,
                                53.2931
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a3035",
                            "contactId": "CA726",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:34",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:34",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:34",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                38.3043,
                                49.9217
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_2",
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3036",
                            "contactId": "CA2714",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                51.816312231551194,
                                52.90799284254577
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_4",
                                "a_Equipment": "_33",
                                "a_Airfield": "a3041"
                            }
                        },
                        {
                            "uniqid": "a3037",
                            "contactId": "CA2935",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                36.3052,
                                28.9474
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_2",
                                "a_Equipment": "_35",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3038",
                            "contactId": "CA609",
                            "name": "Blue:37",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:37",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:37",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:37",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.7335,
                                49.6029
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3039",
                            "contactId": "CA2043",
                            "name": "Blue:38",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:38",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:38",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:38",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                42.8401,
                                81.5474
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a3040",
                            "contactId": "CA376",
                            "name": "Blue:39",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:39",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:39",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:39",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                44.60418364505265,
                                78.24810928446863
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_1",
                                "a_Speed": 260,
                                "a_Airfield": "a3081",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a3041",
                            "contactId": "CA385",
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
                            "health": 95,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.9521,
                                52.7169
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3042",
                            "contactId": "CA1149",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:41",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:41",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:41",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                48.913301875760006,
                                49.610083848894575
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron (blue)_3",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3038",
                                "a_Equipment": "_16"
                            }
                        },
                        {
                            "uniqid": "a3043",
                            "contactId": "CA1354",
                            "name": "Blue:42",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                48.3147,
                                48.8883
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship (blue)_6",
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a3044",
                            "contactId": "CA1565",
                            "name": "Blue:43",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                39.7077,
                                58.744
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Type": "Land Unit (blue)_3",
                                "a_Size": "Unit size_23",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a3045",
                            "contactId": "CA932",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:44",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:44",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:44",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.4685,
                                69.0699
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a3046",
                            "contactId": "CA51",
                            "name": "Blue:45",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                34.0869,
                                65.8652
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_6",
                                "a_Connections": "_1",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3047",
                            "contactId": "CA1001",
                            "name": "Blue:46",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:46",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:46",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:46",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                30.7286,
                                33.1662
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (blue)_4",
                                "a_Equipment": "_10"
                            }
                        },
                        {
                            "uniqid": "a3048",
                            "contactId": "CA2999",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:47",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:47",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:47",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                42.6087,
                                81.0791
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_3",
                                "a_Equipment": "_5",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3049",
                            "contactId": "CA76",
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
                            "health": 95,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                52.7465,
                                68.886
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_1",
                                "a_Speed": 30,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3050",
                            "contactId": "CA607",
                            "name": "Blue:49",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:49",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:49",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:49",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                42.5251,
                                41.2932
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_4",
                                "a_Equipment": "_22",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3051",
                            "contactId": "CA647",
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
                                37.1905,
                                53.4244
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_2",
                                "a_Equipment": "_36",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3052",
                            "contactId": "CA2398",
                            "name": "Blue:51",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:51",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:51",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:51",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                51.6045,
                                82.8088
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Land Unit (blue)_6",
                                "a_Size": "Unit size_42",
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a3053",
                            "contactId": "CA1508",
                            "name": "Blue:52",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:52",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:52",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:52",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                33.8618,
                                57.8754
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a3054",
                            "contactId": "CA717",
                            "name": "Blue:53",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                35.5195,
                                73.3991
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_6",
                                "a_Equipment": "_16",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3055",
                            "contactId": "CA3245",
                            "name": "Blue:54",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:54",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:54",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:54",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                42.9044,
                                83.2987
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_4",
                                "a_Connections": "_46",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3056",
                            "contactId": "CA1504",
                            "name": "Blue:55",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:55",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:55",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:55",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.5888,
                                59.9855
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a3057",
                            "contactId": "CA892",
                            "name": "Blue:56",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:56",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:56",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:56",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.1182,
                                24.0456
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a3058",
                            "contactId": "CA1548",
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
                            "health": 5,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                43.8935,
                                27.4592
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a3059",
                            "contactId": "CA466",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:58",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:58",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:58",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                51.93789625197971,
                                52.426021751397144
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_6",
                                "a_Speed": 220,
                                "a_Airfield": "a3041",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a3060",
                            "contactId": "CA1330",
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
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.9502,
                                63.967
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a3061",
                            "contactId": "CA2611",
                            "name": "Blue:60",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:60",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:60",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:60",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                30.6528,
                                74.8706
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_2",
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3062",
                            "contactId": "CA2099",
                            "name": "Blue:61",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:61",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:61",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:61",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                44.73338412836513,
                                78.07516503099669
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (blue)_5",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3081",
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a3063",
                            "contactId": "CA3398",
                            "name": "Blue:62",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:62",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:62",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:62",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                32.6999,
                                49.4736
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_3",
                                "a_Connections": "_39",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3064",
                            "contactId": "CA1804",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                37.7382,
                                76.5819
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Type": "Land Unit (blue)_6",
                                "a_Size": "Unit size_6",
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a3065",
                            "contactId": "CA2919",
                            "name": "Blue:64",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:64",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:64",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:64",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                48.470957272289006,
                                52.360787998102296
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_1",
                                "a_Equipment": "_33",
                                "a_Airfield": "a3096"
                            }
                        },
                        {
                            "uniqid": "a3066",
                            "contactId": "CA1000",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:65",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:65",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:65",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                51.6187,
                                45.7722
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship (blue)_4",
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a3067",
                            "contactId": "CA2047",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:66",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:66",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:66",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                53.7493,
                                26.529
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a3068",
                            "contactId": "CA277",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                52.4765,
                                29.7879
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_3",
                                "a_Speed": 20,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3069",
                            "contactId": "CA730",
                            "name": "Blue:68",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                36.0114,
                                34.0272
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Submarine (blue)_4",
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a3070",
                            "contactId": "CA1884",
                            "name": "Blue:69",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:69",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:69",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:69",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                35.4641,
                                34.6944
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine (blue)_2",
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a3071",
                            "contactId": "CA144",
                            "name": "Blue:70",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:70",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:70",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:70",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                37.1283,
                                56.9531
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_3",
                                "a_Connections": "_35",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3072",
                            "contactId": "CA2905",
                            "name": "Blue:71",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                47.2944,
                                61.3407
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a3073",
                            "contactId": "CA1841",
                            "name": "Blue:72",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:72",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:72",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:72",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                52.13101421335534,
                                52.74691271512646
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Fast Jet Squadron (blue)_6",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3041",
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a3074",
                            "contactId": "CA1648",
                            "name": "Blue:73",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:73",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:73",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:73",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                48.907721474026324,
                                49.670787892598625
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_2",
                                "a_Speed": 260,
                                "a_Airfield": "a3038",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a3075",
                            "contactId": "CA517",
                            "name": "Blue:74",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:74",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:74",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:74",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                39.6466,
                                36.9097
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_6",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a3076",
                            "contactId": "CA1591",
                            "name": "Blue:75",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:75",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:75",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:75",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                49.0099,
                                68.8869
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a3077",
                            "contactId": "CA902",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:76",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:76",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:76",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                51.9133597583331,
                                52.43203700307364
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_5",
                                "a_Speed": 220,
                                "a_Airfield": "a3041",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "a3078",
                            "contactId": "CA1663",
                            "name": "Blue:77",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:77",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:77",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:77",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                43.5029,
                                43.2508
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_4",
                                "a_Equipment": "_20",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3079",
                            "contactId": "CA1762",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:78",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:78",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:78",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                53.3354,
                                81.3787
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_2",
                                "a_Equipment": "_11",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3080",
                            "contactId": "CA3214",
                            "name": "Blue:79",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:79",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:79",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:79",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                41.1946,
                                58.1517
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Ship (blue)_4",
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "a3081",
                            "contactId": "CA327",
                            "name": "Blue:80",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:80",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:80",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:80",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                44.7764,
                                78.3211
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3082",
                            "contactId": "CA1287",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:81",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:81",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:81",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                38.9364,
                                68.59
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_1",
                                "a_Equipment": "_14",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3083",
                            "contactId": "CA1078",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:82",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:82",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:82",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                48.79988175406309,
                                52.19183715975075
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_1",
                                "a_Speed": 200,
                                "a_Airfield": "a3096",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a3084",
                            "contactId": "CA3012",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:83",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:83",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:83",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                29.5608,
                                45.2205
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a3085",
                            "contactId": "CA2864",
                            "name": "Blue:84",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:84",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:84",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:84",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                40.3558,
                                39.1132
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_3",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a3086",
                            "contactId": "CA1518",
                            "name": "Blue:85",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                48.979,
                                40.4677
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_3",
                                "a_Equipment": "_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3087",
                            "contactId": "CA518",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                48.547450202397584,
                                52.45812732646946
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_2",
                                "a_Speed": 200,
                                "a_Airfield": "a3096",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a3088",
                            "contactId": "CA2997",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:87",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:87",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:87",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                36.8637,
                                25.6898
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Ship (blue)_1",
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "a3089",
                            "contactId": "CA927",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:88",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:88",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:88",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.2866,
                                27.3758
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a3090",
                            "contactId": "CA516",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:89",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:89",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:89",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                51.784746265083896,
                                52.61016153216547
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_2",
                                "a_Equipment": "_28",
                                "a_Airfield": "a3041"
                            }
                        },
                        {
                            "uniqid": "a3091",
                            "contactId": "CA2504",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:90",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:90",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:90",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                45.2172,
                                83.2135
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_1",
                                "a_Equipment": "_16",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3092",
                            "contactId": "CA371",
                            "name": "Blue:91",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:91",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:91",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:91",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                48.9245,
                                25.55
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_3",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a3093",
                            "contactId": "CA3151",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:92",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:92",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:92",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                41.8615,
                                44.2727
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a3094",
                            "contactId": "CA1274",
                            "name": "Blue:93",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                34.0096,
                                45.3158
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a3095",
                            "contactId": "CA199",
                            "name": "Blue:94",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:94",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:94",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:94",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.6794,
                                60.3007
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a3096",
                            "contactId": "CA3036",
                            "name": "Blue:95",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:95",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:95",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:95",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.6204,
                                52.2096
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3097",
                            "contactId": "CA2604",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:96",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:96",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:96",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                45.7417,
                                50.6608
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_1",
                                "a_Equipment": "_9",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3098",
                            "contactId": "CA1113",
                            "name": "Blue:97",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:97",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:97",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:97",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                32.6101,
                                42.8608
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_4",
                                "a_Connections": "_39",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3099",
                            "contactId": "CA831",
                            "name": "Blue:98",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:98",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:98",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:98",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                48.652147673003746,
                                49.84591755561085
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (blue)_1",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3038",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a3100",
                            "contactId": "CA2223",
                            "name": "Blue:99",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:99",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:99",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:99",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                45.794,
                                74.2828
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_3",
                                "a_Minefield_Passable": "Limited"
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
                            "uniqid": "a3101",
                            "contactId": "CA819",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:0",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:0",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:0",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                21.4963,
                                59.201
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "FIAC (red)_3",
                                "a_Number_FIACs": 100
                            },
                            "comprising": [
                                {
                                    "uniqid": "a3102",
                                    "contactId": "CA609",
                                    "name": "Red:1",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:1",
                                            "typeId": "red_air_istar",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:1",
                                            "typeId": "red_air_istar",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:1",
                                            "typeId": "red_air_istar",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 20,
                                    "platformTypeId": "red_air_istar",
                                    "condition": "working",
                                    "location": [
                                        2.256,
                                        30.4273
                                    ],
                                    "attributes": {
                                        "a_Speed": 220,
                                        "a_Number_Aircraft": 10,
                                        "a_Airfield": "_26",
                                        "a_Equipment": "_26",
                                        "a_Type": "ISTAR (red)_1"
                                    }
                                },
                                {
                                    "uniqid": "a3103",
                                    "contactId": "CA2418",
                                    "name": "Red:2",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:2",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:2",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:2",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 65,
                                    "platformTypeId": "red_maritime_fiac",
                                    "condition": "working",
                                    "location": [
                                        9.0555,
                                        84.802
                                    ],
                                    "attributes": {
                                        "a_Speed": 20,
                                        "a_Type": "FIAC (red)_3",
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a3104",
                                    "contactId": "CA617",
                                    "name": "Red:3",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 95,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "location": [
                                        26.1082,
                                        72.3537
                                    ],
                                    "attributes": {
                                        "a_Speed": 15,
                                        "a_Type": "Submarine (red)_3",
                                        "a_Equipment": "_14"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a3105",
                            "contactId": "CA379",
                            "name": "Red:4",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:4",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:4",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:4",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                13.043,
                                75.0698
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_1",
                                "a_Connections": "_44",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3106",
                            "contactId": "CA2159",
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
                            "health": 70,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                7.592,
                                49.4741
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3107",
                            "contactId": "CA2069",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:6",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:6",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:6",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                6.3826,
                                64.5312
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_1",
                                "a_Connections": "_21",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3108",
                            "contactId": "CA1509",
                            "name": "Red:7",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:7",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:7",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:7",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                23.1647,
                                60.8862
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a3109",
                            "contactId": "CA1848",
                            "name": "Red:8",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:8",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:8",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:8",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                23.5817,
                                22.5779
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a3110",
                            "contactId": "CA1538",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:9",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:9",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:9",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                25.8987,
                                47.4306
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_1"
                            }
                        },
                        {
                            "uniqid": "a3111",
                            "contactId": "CA1545",
                            "name": "Red:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:10",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:10",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:10",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                6.8682,
                                60.0589
                            ],
                            "attributes": {
                                "a_Size": "Unit size_31",
                                "a_Type": "Land Unit (red)_5",
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a3112",
                            "contactId": "CA106",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                18.7952,
                                63.9895
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (red)_5",
                                "a_Equipment": "_37"
                            }
                        },
                        {
                            "uniqid": "a3113",
                            "contactId": "CA3314",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:12",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:12",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:12",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                11.9088,
                                66.2178
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3114",
                            "contactId": "CA1749",
                            "name": "Red:13",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:13",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:13",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:13",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                26.7065,
                                55.8532
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_4",
                                "a_Connections": "_1",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3115",
                            "contactId": "CA1017",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:14",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:14",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:14",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                19.9007,
                                37.2825
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_5",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a3116",
                            "contactId": "CA2731",
                            "name": "Red:15",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:15",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:15",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:15",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                11.949527059696601,
                                66.39685943324949
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Air LOGS (red)_6",
                                "a_Airfield": "a3113",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a3117",
                            "contactId": "CA2642",
                            "name": "Red:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:16",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:16",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:16",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                21.2106,
                                28.0575
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_1",
                                "a_Equipment": "_40",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3118",
                            "contactId": "CA633",
                            "name": "Red:17",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:17",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:17",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:17",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                12.4284,
                                71.8179
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a3119",
                            "contactId": "CA1514",
                            "name": "Red:18",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                26.3923,
                                51.2623
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "FIAC (red)_5",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3120",
                            "contactId": "CA28",
                            "name": "Red:19",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:19",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:19",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:19",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                11.0181,
                                28.1305
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a3121",
                            "contactId": "CA575",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:20",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:20",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:20",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.2061,
                                82.817
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3122",
                            "contactId": "CA2261",
                            "name": "Red:21",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:21",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:21",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:21",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.4902,
                                75.7698
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3123",
                            "contactId": "CA1352",
                            "name": "Red:22",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:22",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:22",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:22",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                11.0368,
                                65.8832
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_11",
                                "a_Type": "SAM (red)_6",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3124",
                            "contactId": "CA3218",
                            "name": "Red:23",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:23",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:23",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:23",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.8383,
                                31.3106
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a3125",
                            "contactId": "CA1619",
                            "name": "Red:24",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:24",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:24",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:24",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.8717,
                                48.5063
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a3126",
                            "contactId": "CA1774",
                            "name": "Red:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:25",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:25",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:25",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                25.1103,
                                74.5654
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_5",
                                "a_Equipment": "_30",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3127",
                            "contactId": "CA622",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                25.7976,
                                83.9115
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine (red)_4",
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a3128",
                            "contactId": "CA2124",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:27",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:27",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:27",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                21.4404,
                                73.8247
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_5"
                            }
                        },
                        {
                            "uniqid": "a3129",
                            "contactId": "CA1615",
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
                            "health": 90,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                5.7935,
                                50.6119
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a3130",
                            "contactId": "CA3238",
                            "name": "Red:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                20.4339,
                                62.0935
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "FIAC (red)_4",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3131",
                            "contactId": "CA1385",
                            "name": "Red:30",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:30",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:30",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:30",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                18.6065,
                                46.5881
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_3",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a3132",
                            "contactId": "CA2139",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:31",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:31",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:31",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                11.0693,
                                29.9503
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_2"
                            }
                        },
                        {
                            "uniqid": "a3133",
                            "contactId": "CA2123",
                            "name": "Red:32",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:32",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:32",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:32",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.824,
                                45.4703
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a3134",
                            "contactId": "CA1579",
                            "name": "Red:33",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:33",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:33",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:33",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                22.064728754138688,
                                82.10036526989597
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3177",
                                "a_Equipment": "_31",
                                "a_Type": "ISTAR (red)_3"
                            }
                        },
                        {
                            "uniqid": "a3135",
                            "contactId": "CA1814",
                            "name": "Red:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:34",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:34",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:34",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                5.8103,
                                33.0561
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_1",
                                "a_Connections": "_12",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3136",
                            "contactId": "CA1497",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:35",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:35",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:35",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                7.065855336834911,
                                37.45983207254887
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (red)_6",
                                "a_Airfield": "a3166",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_8"
                            }
                        },
                        {
                            "uniqid": "a3137",
                            "contactId": "CA353",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:36",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:36",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:36",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                14.738985865165427,
                                77.56732576037491
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron (red)_3",
                                "a_Airfield": "a3146",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a3138",
                            "contactId": "CA2186",
                            "name": "Red:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:37",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:37",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:37",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                5.0944971759138635,
                                80.48389163875504
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Air LOGS (red)_5",
                                "a_Airfield": "a3148",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a3139",
                            "contactId": "CA2520",
                            "name": "Red:38",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:38",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:38",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:38",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                16.5204,
                                65.7294
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a3140",
                            "contactId": "CA2725",
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
                            "health": 50,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.7464,
                                74.3031
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_4"
                            }
                        },
                        {
                            "uniqid": "a3141",
                            "contactId": "CA1296",
                            "name": "Red:40",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:40",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:40",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:40",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                12.5669,
                                51.39
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_6"
                            }
                        },
                        {
                            "uniqid": "a3142",
                            "contactId": "CA2114",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:41",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:41",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:41",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.0903,
                                29.6874
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a3143",
                            "contactId": "CA373",
                            "name": "Red:42",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:42",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:42",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:42",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.9549,
                                36.1542
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a3144",
                            "contactId": "CA2491",
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
                            "health": 55,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                10.5905,
                                60.7864
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (red)_6",
                                "a_Equipment": "_17"
                            }
                        },
                        {
                            "uniqid": "a3145",
                            "contactId": "CA3045",
                            "name": "Red:44",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:44",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:44",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:44",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                3.1492,
                                63.6598
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a3146",
                            "contactId": "CA1763",
                            "name": "Red:45",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:45",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:45",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:45",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                14.5821,
                                77.4764
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3147",
                            "contactId": "CA2024",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:46",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:46",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:46",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                5.622,
                                54.8651
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a3148",
                            "contactId": "CA2897",
                            "name": "Red:47",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:47",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:47",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:47",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                5.2154,
                                80.6176
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3149",
                            "contactId": "CA3119",
                            "name": "Red:48",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:48",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:48",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:48",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                17.4311,
                                73.7064
                            ],
                            "attributes": {
                                "a_Size": "Unit size_19",
                                "a_Type": "Land Unit (red)_6",
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a3150",
                            "contactId": "CA2131",
                            "name": "Red:49",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:49",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:49",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:49",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                25.497945624583,
                                75.96888187317474
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Air LOGS (red)_1",
                                "a_Airfield": "a3122",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "a3151",
                            "contactId": "CA3238",
                            "name": "Red:50",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:50",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:50",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:50",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                8.8262,
                                50.9337
                            ],
                            "attributes": {
                                "a_Size": "Unit size_3",
                                "a_Type": "Land Unit (red)_2",
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a3152",
                            "contactId": "CA895",
                            "name": "Red:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:51",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:51",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:51",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                25.601832089105915,
                                75.6134892488112
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron (red)_6",
                                "a_Airfield": "a3122",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a3153",
                            "contactId": "CA3246",
                            "name": "Red:52",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:52",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                21.3207,
                                34.6861
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine (red)_2",
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a3154",
                            "contactId": "CA1042",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:53",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:53",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:53",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                6.1164,
                                56.7537
                            ],
                            "attributes": {
                                "a_Size": "Unit size_13",
                                "a_Type": "Land Unit (red)_1",
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "a3155",
                            "contactId": "CA3042",
                            "name": "Red:54",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:54",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:54",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:54",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                6.4811,
                                83.6689
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a3156",
                            "contactId": "CA1376",
                            "name": "Red:55",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:55",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:55",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:55",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                2.385876236103169,
                                82.81137501962009
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3121",
                                "a_Equipment": "_43",
                                "a_Type": "ISTAR (red)_4"
                            }
                        },
                        {
                            "uniqid": "a3157",
                            "contactId": "CA1907",
                            "name": "Red:56",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:56",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:56",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:56",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                6.5161,
                                62.5437
                            ],
                            "attributes": {
                                "a_Size": "Unit size_32",
                                "a_Type": "Land Unit (red)_1",
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a3158",
                            "contactId": "CA634",
                            "name": "Red:57",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:57",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:57",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:57",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                12.0626,
                                74.5141
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_4"
                            }
                        },
                        {
                            "uniqid": "a3159",
                            "contactId": "CA1374",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:58",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:58",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:58",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                25.405695363306098,
                                75.94563719245265
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3122",
                                "a_Equipment": "_14",
                                "a_Type": "ISTAR (red)_5"
                            }
                        },
                        {
                            "uniqid": "a3160",
                            "contactId": "CA609",
                            "name": "Red:59",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:59",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:59",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:59",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.118,
                                58.1161
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a3161",
                            "contactId": "CA1087",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:60",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:60",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:60",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                19.8472,
                                80.842
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_2",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a3162",
                            "contactId": "CA789",
                            "name": "Red:61",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:61",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:61",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:61",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                15.2566,
                                22.5529
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_21",
                                "a_Type": "SAM (red)_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3163",
                            "contactId": "CA2140",
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
                                5.307083469621339,
                                80.46220283673247
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Air LOGS (red)_5",
                                "a_Airfield": "a3148",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_5"
                            }
                        },
                        {
                            "uniqid": "a3164",
                            "contactId": "CA1784",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:63",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:63",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:63",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                4.4706,
                                83.0944
                            ],
                            "attributes": {
                                "a_Size": "Unit size_48",
                                "a_Type": "Land Unit (red)_6",
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a3165",
                            "contactId": "CA179",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:64",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:64",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:64",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                25.423,
                                74.8742
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "FIAC (red)_3",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3166",
                            "contactId": "CA428",
                            "name": "Red:65",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:65",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:65",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:65",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                7.0608,
                                37.641
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3167",
                            "contactId": "CA382",
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
                            "health": 25,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                11.3834,
                                82.5424
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_6",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a3168",
                            "contactId": "CA3299",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:67",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:67",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:67",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                27.5098,
                                83.6237
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "FIAC (red)_5",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3169",
                            "contactId": "CA3304",
                            "name": "Red:68",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:68",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:68",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:68",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                9.4778,
                                39.756
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "FIAC (red)_5",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3170",
                            "contactId": "CA1278",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:69",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:69",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:69",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                5.492,
                                26.7595
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_6",
                                "a_Connections": "_8",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3171",
                            "contactId": "CA1730",
                            "name": "Red:70",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:70",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:70",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:70",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                18.3243,
                                34.233
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a3172",
                            "contactId": "CA2872",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:71",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:71",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:71",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                15.0872,
                                39.036
                            ],
                            "attributes": {
                                "a_Size": "Unit size_37",
                                "a_Type": "Land Unit (red)_4",
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a3173",
                            "contactId": "CA2141",
                            "name": "Red:72",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:72",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:72",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:72",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.5708,
                                79.268
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_4"
                            }
                        },
                        {
                            "uniqid": "a3174",
                            "contactId": "CA1374",
                            "name": "Red:73",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:73",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:73",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:73",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                21.0547,
                                81.7395
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "FIAC (red)_6",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3175",
                            "contactId": "CA2002",
                            "name": "Red:74",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:74",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:74",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:74",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                13.0585,
                                60.972
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_5"
                            }
                        },
                        {
                            "uniqid": "a3176",
                            "contactId": "CA3334",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:75",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:75",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:75",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                7.767410098010713,
                                49.51423920879168
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3106",
                                "a_Equipment": "_24",
                                "a_Type": "ISTAR (red)_5"
                            }
                        },
                        {
                            "uniqid": "a3177",
                            "contactId": "CA2234",
                            "name": "Red:76",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:76",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:76",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:76",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                21.9202,
                                81.9849
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a3178",
                            "contactId": "CA308",
                            "name": "Red:77",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:77",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:77",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:77",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                9.7884,
                                54.9065
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_3",
                                "a_Connections": "_19",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3179",
                            "contactId": "CA1381",
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
                            "health": 10,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.5921,
                                45.3834
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a3180",
                            "contactId": "CA2925",
                            "name": "Red:79",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:79",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:79",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:79",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                7.0842,
                                66.8271
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_6",
                                "a_Equipment": "_40",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3181",
                            "contactId": "CA1803",
                            "name": "Red:80",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:80",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:80",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:80",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                2.068924289267658,
                                82.93341636194857
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Air LOGS (red)_3",
                                "a_Airfield": "a3121",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a3182",
                            "contactId": "CA695",
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
                            "health": 10,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                23.6691,
                                42.2135
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_3",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a3183",
                            "contactId": "CA2459",
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
                            "health": 35,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                4.8716,
                                46.121
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine (red)_3",
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a3184",
                            "contactId": "CA3117",
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
                            "health": 70,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                22.4768,
                                30.9285
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_4",
                                "a_Connections": "_30",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a3185",
                            "contactId": "CA948",
                            "name": "Red:84",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:84",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:84",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:84",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                17.8931,
                                61.0277
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Submarine (red)_5",
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a3186",
                            "contactId": "CA865",
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
                            "health": 10,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                6.4826,
                                47.3819
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (red)_2",
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a3187",
                            "contactId": "CA926",
                            "name": "Red:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:86",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:86",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:86",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                2.3170259893141885,
                                82.95869608725062
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3121",
                                "a_Equipment": "_39",
                                "a_Type": "ISTAR (red)_2"
                            }
                        },
                        {
                            "uniqid": "a3188",
                            "contactId": "CA1240",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:87",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:87",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:87",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                6.0179,
                                77.8075
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_2",
                                "a_Type": "SAM (red)_5",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3189",
                            "contactId": "CA2589",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:88",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:88",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:88",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                6.5529,
                                42.558
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a3190",
                            "contactId": "CA3214",
                            "name": "Red:89",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:89",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:89",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:89",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.7823,
                                69.1269
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a3191",
                            "contactId": "CA2098",
                            "name": "Red:90",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:90",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:90",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:90",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                4.5981,
                                28.9548
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Submarine (red)_2",
                                "a_Equipment": "_20"
                            }
                        },
                        {
                            "uniqid": "a3192",
                            "contactId": "CA3074",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                7.0037,
                                55.3223
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Submarine (red)_2",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a3193",
                            "contactId": "CA1202",
                            "name": "Red:92",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:92",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:92",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:92",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                17.0051,
                                80.4032
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_3",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a3194",
                            "contactId": "CA2799",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:93",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:93",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:93",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                7.142545451079245,
                                37.802453381558166
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a3166",
                                "a_Equipment": "_11",
                                "a_Type": "ISTAR (red)_3"
                            }
                        },
                        {
                            "uniqid": "a3195",
                            "contactId": "CA854",
                            "name": "Red:94",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:94",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:94",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:94",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.2094,
                                50.8927
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a3196",
                            "contactId": "CA665",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:95",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:95",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:95",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                20.9858,
                                47.6226
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "FIAC (red)_4",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3197",
                            "contactId": "CA2779",
                            "name": "Red:96",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:96",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:96",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:96",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                12.6664,
                                62.3956
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_3",
                                "a_Connections": "_8",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a3198",
                            "contactId": "CA1668",
                            "name": "Red:97",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:97",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:97",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:97",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                13.0388,
                                68.2838
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_3",
                                "a_Equipment": "_16",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a3199",
                            "contactId": "CA3049",
                            "name": "Red:98",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:98",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:98",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:98",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                22.2815,
                                53.2166
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "FIAC (red)_6",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a3200",
                            "contactId": "CA1463",
                            "name": "Red:99",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:99",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:99",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:99",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                21.781299765182144,
                                81.86178410934637
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (red)_2",
                                "a_Airfield": "a3177",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
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
                        "a_Type",
                        "a_Number_Aircraft",
                        "a_Airfield",
                        "a_Equipment"
                    ],
                    "travelMode": "air"
                },
                {
                    "name": "Bomber Squadron (blue)",
                    "icon": "n_blue_air_bomber.svg",
                    "attributeTypeIds": [
                        "a_Type",
                        "a_Speed",
                        "a_Airfield",
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
                        "a_Type",
                        "a_Equipment",
                        "a_MEZ_range",
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
                        "a_MEZ_range",
                        "a_Type"
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
                        "a_Type",
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
                        "a_Type",
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
                        "a_Type",
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
                        "a_Type"
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
                        "a_Type",
                        "a_Equipment",
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
                        "a_Type",
                        "a_Equipment"
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
                        "a_Type",
                        "a_Speed",
                        "a_Airfield",
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
                        "a_Type",
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
                        "a_Type",
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
                        "a_Type",
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
                        "a_Type",
                        "a_Airfield",
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
                        "a_Type",
                        "a_MEZ_range",
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
                        "a_MEZ_range",
                        "a_Type"
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
                        "a_Type",
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
                        "a_Type",
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
                        "a_Type"
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
                        "a_Speed",
                        "a_Number_Missiles",
                        "a_Type",
                        "a_Equipment",
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
                        "a_Airfield",
                        "a_Equipment",
                        "a_Type"
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
                        "a_Type",
                        "a_Airfield",
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
                        "a_Type",
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
                        "a_Type",
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
                        "a_Type",
                        "a_Minefield_Passable"
                    ]
                }
            ],
            "selectedType": ""
        },
        "attributeTypes": {
            "attributes": [
                {
                    "attrId": "a_Type",
                    "attrType": "AttributeTypeString",
                    "description": "Sub-type of this platform",
                    "editableByPlayer": false,
                    "name": "Sub-type"
                }, {
                    "attrId": "a_Number_Aircraft",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 10,
                    "description": "Number of aircraftt",
                    "editableByPlayer": false,
                    "name": "Number aircraft"
                }, {
                    "attrId": "a_Number_Missiles",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Number of missiles",
                    "editableByPlayer": false,
                    "name": "Number missiles"
                }, {
                    "attrId": "a_Number_FIACs",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 100,
                    "description": "Number of FIAC assets",
                    "editableByPlayer": false,
                    "name": "Number FIACs"
                }, {
                    "attrId": "a_MEZ_range",
                    "attrType": "AttributeTypeNumber",
                    "defaultValue": 300,
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
                    "defaultValue": "Unit size_",
                    "description": "Size of military unit",
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
                    "defaultValue": 2000,
                    "description": "Range of weapon (km)",
                    "editableByPlayer": false,
                    "name": "Range",
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
                    "description": "Equipment carried on asset",
                    "editableByPlayer": false,
                    "name": "Equipment"
                },
                {
                    "attrId": "a_Units",
                    "attrType": "AttributeTypeString",
                    "description": "Child units",
                    "editableByPlayer": false,
                    "name": "Units"
                },
                {
                    "attrId": "a_Airfield",
                    "attrType": "AttributeTypeString",
                    "description": "Host airfield (id)",
                    "editableByPlayer": false,
                    "name": "Airfield"
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
                                    "events": [
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
                                    "events": [
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
                                    "name": "Combat Air Patrol",
                                    "actId": "CAP",
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
                                    "uniqid": "f-blue-Air-Combat Air Patrol",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "CAP Area",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-2"
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
                                    "events": [
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
                                    "events": [
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
                                    "name": "Combat Air Patrol",
                                    "actId": "CAP",
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
                                    "uniqid": "f-red-Air-Combat Air Patrol",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "CAP Area",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-2"
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
                                    "events": [
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
                                    "events": [
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
                                    "name": "Combat Air Patrol",
                                    "actId": "CAP",
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
                                    "uniqid": "f-green-Air-Combat Air Patrol",
                                    "template": "Air--Standard",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "CAP Area",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Combat Air Patrol-2"
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
                            "narrative",
                            "reference",
                            "important"
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
                            "important": {
                                "type": "boolean",
                                "propertyOrder": 15,
                                "title": "Important (high profile adjudication)",
                                "format": "checkbox"
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
                                                "grid_columns": 2
                                            }
                                        },
                                        "repairComplete": {
                                            "title": "Repair in (days)",
                                            "type": "string",
                                            "enum": [
                                                "n/a",
                                                "1",
                                                "2",
                                                "3"
                                            ],
                                            "options": {
                                                "grid_columns": 2
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
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                            }
                        },
                        "title": "Land--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Land--MissileStrike",
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                            }
                        },
                        "title": "Maritime--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--MissileStrike",
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 314,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 314,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 314,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                            "searchRate",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                            "searchRate": {
                                "type": "string",
                                "title": "Search Rate (km2/hr)",
                                "propertyOrder": 308,
                                "options": {
                                    "grid_columns": 2
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                            "searchRate",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                            "searchRate": {
                                "type": "string",
                                "title": "Search Rate (km2/hr)",
                                "propertyOrder": 308,
                                "options": {
                                    "grid_columns": 2
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                            "searchRate",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                            "searchRate": {
                                "type": "string",
                                "title": "Search Rate (km2/hr)",
                                "propertyOrder": 308,
                                "options": {
                                    "grid_columns": 2
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.044Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.044Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                        "title": "Maritime--ASWBarrier",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--ASWBarrier",
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 311,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "covert": {
                                "type": "boolean",
                                "title": "Covert",
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
                        "title": "Maritime--MineLaying",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Maritime--MineLaying",
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 310,
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
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                            }
                        },
                        "title": "Other--Cyber",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Other--Cyber",
                    "_rev": "2023-01-12T10:13:53.045Z"
                },
                {
                    "lastUpdated": "2023-01-12T10:13:53.045Z",
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 4,
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
                                    "grid_columns": 4,
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
                                "propertyOrder": 315,
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "intendedEffect": {
                                "type": "string",
                                "format": "textarea",
                                "title": "Intended Effect",
                                "propertyOrder": 316,
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
                    "_rev": "2023-01-12T10:13:53.045Z"
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