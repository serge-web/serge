import { Wargame } from "@serge/custom-types";

const shortGame: Wargame = {
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
            "gameDate": "2022-05-01T00:00:00+00:00",
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
                            "uniqid": "Blue.1.306",
                            "contactId": "CA139",
                            "name": "Blue:Fast Jet Squadron :305",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fast Jet Squadron :305",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        38.1819,
                                        49.8131
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fast Jet Squadron :305",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        38.1475,
                                        49.8062
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fast Jet Squadron :305",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        38.1819,
                                        49.8131
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                46.9858,
                                52.1862
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron _4",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Blue.7.86",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "Blue.12.307",
                            "contactId": "CA1093",
                            "name": "Blue:FIAC:306",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:FIAC:306",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        49.5145,
                                        47.2995
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:FIAC:306",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        49.5145,
                                        47.2995
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:FIAC:306",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        49.5145,
                                        47.2995
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                41.1429,
                                37.6467
                            ],
                            "attributes": {
                                "a_Type": "FIAC_4",
                                "a_Speed": 15,
                                "a_C4_Status": "Operational",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-387"
                            }
                        },
                        {
                            "uniqid": "Blue.3.308",
                            "contactId": "CA52",
                            "name": "Blue:SAM:307",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SAM:307",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        38.391,
                                        42.0927
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SAM:307",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        38.4635,
                                        42.0998
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SAM:307",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        38.4177,
                                        42.1671
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                38.391,
                                42.0927
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_4",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_3",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Blue.10.309",
                            "contactId": "CA2694",
                            "name": "Blue:Air LOGS:308",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Air LOGS:308",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        49.7978,
                                        46.4653
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Air LOGS:308",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        49.8652,
                                        46.3708
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Air LOGS:308",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        49.8652,
                                        46.3708
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                41.9732,
                                22.0703
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_4",
                                "a_Speed": 200,
                                "a_C4_Status": "None",
                                "a_Airfield": "Blue.7.140",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "Blue.3.310",
                            "contactId": "CA1545",
                            "name": "Blue:SAM:309",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SAM:309",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        33.6593,
                                        30.4972
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SAM:309",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        33.6593,
                                        30.4972
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SAM:309",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        33.6593,
                                        30.4972
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                33.6593,
                                30.4972
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_2",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_19",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Blue.6.311",
                            "contactId": "CA1208",
                            "name": "Blue:Land Unit:310",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Land Unit:310",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        36.7702,
                                        48.8665
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Land Unit:310",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        36.7702,
                                        48.8665
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Land Unit:310",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        36.7702,
                                        48.8665
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                36.7702,
                                48.8665
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Type": "Land Unit_2",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_29",
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "Blue.9.312",
                            "contactId": "CA314",
                            "name": "Blue:ISTAR:311",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:ISTAR:311",
                                    "typeId": "_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:ISTAR:311",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        51.7404,
                                        34.5406
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:ISTAR:311",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        51.778,
                                        34.5634
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                32.1834,
                                22.3947
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Type": "ISTAR_5",
                                "a_Airfield": "_12",
                                "a_Equipment": "_45",
                                "a_Search_Rate": 100,
                                "a_TaskGroup": "CTF-793"
                            }
                        },
                        {
                            "uniqid": "Blue.13.313",
                            "contactId": "CA1446",
                            "name": "Blue:Maritime Minefield:312",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Maritime Minefield:312",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        41.6371,
                                        43.2591
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Maritime Minefield:312",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        41.6371,
                                        43.2591
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Maritime Minefield:312",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        41.6371,
                                        43.2591
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                41.6371,
                                43.2591
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_4",
                                "a_C4_Status": "Degraded",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "Blue.5.314",
                            "contactId": "CA2640",
                            "name": "Blue:Submarine:313",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:313",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        41.6713,
                                        26.6795
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:313",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        41.6576,
                                        26.6298
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:313",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        41.6713,
                                        26.6795
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                41.6713,
                                26.6795
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Submarine_1",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "Blue.13.315",
                            "contactId": "CA2137",
                            "name": "Blue:Maritime Minefield:314",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Maritime Minefield:314",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        52.0059,
                                        39.1927
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Maritime Minefield:314",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        52.0059,
                                        39.1927
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Maritime Minefield:314",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        52.0059,
                                        39.1927
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                52.0059,
                                39.1927
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_2",
                                "a_C4_Status": "Degraded",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "Blue.11.316",
                            "contactId": "CA660",
                            "name": "Blue:C2 Node:315",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:C2 Node:315",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        41.1768,
                                        36.9888
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:C2 Node:315",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        41.1957,
                                        36.9887
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:C2 Node:315",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        41.1957,
                                        36.9887
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                41.1957,
                                36.9887
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_4",
                                "a_C4_Status": "Degraded",
                                "a_Connections": "_30"
                            }
                        },
                        {
                            "uniqid": "Blue.5.317",
                            "contactId": "CA32",
                            "name": "Blue:Submarine:316",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:316",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        33.8111,
                                        50.7015
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:316",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        33.8111,
                                        50.7015
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:316",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                33.8111,
                                50.7015
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Submarine_1",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "Blue.10.318",
                            "contactId": "CA2105",
                            "name": "Blue:Air LOGS:317",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Air LOGS:317",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        33.7018,
                                        49.6305
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Air LOGS:317",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        33.6133,
                                        49.5321
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Air LOGS:317",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        33.7018,
                                        49.6305
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                33.1265,
                                40.0106
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_4",
                                "a_Speed": 220,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "_11",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_31",
                                "a_TaskGroup": "CTF-310"
                            }
                        },
                        {
                            "uniqid": "Blue.7.319",
                            "contactId": "CA413",
                            "name": "Blue:Fixed Asset:318",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:318",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        48.2018,
                                        31.075
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:318",
                                    "typeId": "_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:318",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        48.1802,
                                        31.0331
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                48.1802,
                                31.0331
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Blue.10.320",
                            "contactId": "CA1448",
                            "name": "Blue:Air LOGS:319",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Air LOGS:319",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        51.6465,
                                        44.5631
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Air LOGS:319",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        51.6465,
                                        44.5631
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Air LOGS:319",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        51.6795,
                                        44.6367
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                31.2378,
                                38.7034
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_5",
                                "a_Speed": 280,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Blue.9.159",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "Blue.6.321",
                            "contactId": "CA2415",
                            "name": "Blue:Land Unit:320",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Land Unit:320",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        29.3762,
                                        44.0187
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Land Unit:320",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        29.3762,
                                        44.0187
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Land Unit:320",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        29.3762,
                                        44.0187
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                29.3762,
                                44.0187
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Land Unit_1",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_44",
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "Blue.10.322",
                            "contactId": "CA0",
                            "name": "Blue:Air LOGS:321",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Air LOGS:321",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        46.8103,
                                        38.4965
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Air LOGS:321",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        46.8103,
                                        38.4965
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Air LOGS:321",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        46.8103,
                                        38.4965
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                49.994,
                                24.3865
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_3",
                                "a_Speed": 240,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "_7",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_25",
                                "a_TaskGroup": "CTF-575"
                            }
                        },
                        {
                            "uniqid": "Blue.6.323",
                            "contactId": "CA1941",
                            "name": "Blue:Land Unit:322",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Land Unit:322",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        48.346,
                                        23.554
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Land Unit:322",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        48.4297,
                                        23.5803
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Land Unit:322",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        48.4297,
                                        23.5803
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                48.4297,
                                23.5803
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Type": "Land Unit_5",
                                "a_C4_Status": "None",
                                "a_Size": "Unit size_30",
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "Blue.6.324",
                            "contactId": "CA3238",
                            "name": "Blue:Fixed Asset:323",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:323",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.1031,
                                        41.9396
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:323",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.1031,
                                        41.9396
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:323",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.1031,
                                        41.9396
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                34.1031,
                                41.9396
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_2"
                            }
                        },
                        {
                            "uniqid": "Blue.2.325",
                            "contactId": "CA1960",
                            "name": "Blue:Bomber Squadron:324",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Bomber Squadron:324",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        47.9383,
                                        51.7305
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Bomber Squadron:324",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        47.9383,
                                        51.7305
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Bomber Squadron:324",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        47.9383,
                                        51.7305
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                34.583,
                                47.6436
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_1",
                                "a_Speed": 240,
                                "a_C4_Status": "None",
                                "a_Airfield": "Blue.12.13",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "Blue.6.326",
                            "contactId": "CA31",
                            "name": "Blue:Land Unit:325",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Land Unit:325",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        48.5411,
                                        34.2564
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Land Unit:325",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        48.4917,
                                        34.1753
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Land Unit:325",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        48.6046,
                                        34.1925
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                48.5411,
                                34.2564
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Type": "Land Unit_2",
                                "a_C4_Status": "Operational",
                                "a_Size": "Unit size_48",
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "Blue.1.327",
                            "contactId": "CA3285",
                            "name": "Blue:Fast Jet Squadron :326",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fast Jet Squadron :326",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        54.1454,
                                        31.5336
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fast Jet Squadron :326",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        54.1454,
                                        31.5336
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fast Jet Squadron :326",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        54.1454,
                                        31.5336
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                37.1086,
                                51.0099
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron _5",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Blue.7.302",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "Blue.3.328",
                            "contactId": "CA2911",
                            "name": "Blue:SAM:327",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SAM:327",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        35.3319,
                                        36.9958
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SAM:327",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        35.3668,
                                        36.9801
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SAM:327",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        35.3319,
                                        36.9958
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                35.3319,
                                36.9958
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_5",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_8",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Blue.7.329",
                            "contactId": "CA3156",
                            "name": "Blue:Fixed Asset:328",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:328",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        42.5505,
                                        42.6389
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:328",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        42.5864,
                                        42.5617
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:328",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        42.5864,
                                        42.5617
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                42.5864,
                                42.5617
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Blue.5.330",
                            "contactId": "CA743",
                            "name": "Blue:Submarine:329",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:329",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        51.6894,
                                        35.457
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:329",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        51.6535,
                                        35.4829
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:329",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        51.7883,
                                        35.5417
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                33.1265,
                                40.0106
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine_4",
                                "a_C4_Status": "None",
                                "a_Equipment": "_43",
                                "a_TaskGroup": "CTF-310"
                            }
                        },
                        {
                            "uniqid": "Blue.5.331",
                            "contactId": "CA1330",
                            "name": "Blue:Fixed Asset:330",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:330",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        45.6735,
                                        52.2504
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:330",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        45.5889,
                                        52.2577
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:330",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        45.68,
                                        52.2801
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                45.68,
                                52.2801
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Blue.7.332",
                            "contactId": "CA1887",
                            "name": "Blue:Fixed Asset:331",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:331",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.7764,
                                        52.0503
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:331",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.8739,
                                        52.1147
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:331",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.7764,
                                        52.0503
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                41.7764,
                                52.0503
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_3"
                            }
                        },
                        {
                            "uniqid": "Blue.5.333",
                            "contactId": "CA572",
                            "name": "Blue:Submarine:332",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:332",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        41.2465,
                                        49.7578
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:332",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        41.2078,
                                        49.7396
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:332",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        41.2465,
                                        49.7578
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                52.2171,
                                38.0852
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine_4",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_21",
                                "a_TaskGroup": "CTF-281"
                            }
                        },
                        {
                            "uniqid": "Blue.5.334",
                            "contactId": "CA2703",
                            "name": "Blue:Submarine:333",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:333",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        33.9727,
                                        33.3832
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:333",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        33.9367,
                                        33.4356
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:333",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                33.9367,
                                33.4356
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine_1",
                                "a_C4_Status": "None",
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "Blue.12.335",
                            "contactId": "CA3388",
                            "name": "Blue:FIAC:334",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:FIAC:334",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:FIAC:334",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        46.7173,
                                        31.6087
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:FIAC:334",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        46.7446,
                                        31.5264
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                33.1265,
                                40.0106
                            ],
                            "attributes": {
                                "a_Type": "FIAC_6",
                                "a_Speed": 25,
                                "a_C4_Status": "Operational",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-310"
                            }
                        },
                        {
                            "uniqid": "Blue.11.336",
                            "contactId": "CA843",
                            "name": "Blue:C2 Node:335",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:C2 Node:335",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        53.8192,
                                        35.3747
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:C2 Node:335",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        53.8192,
                                        35.3747
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:C2 Node:335",
                                    "typeId": "_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                53.8192,
                                35.3747
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_2",
                                "a_C4_Status": "Operational",
                                "a_Connections": "_38"
                            }
                        },
                        {
                            "uniqid": "Blue.8.337",
                            "contactId": "CA3359",
                            "name": "Blue:SSM:336",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SSM:336",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        42.8324,
                                        49.5771
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SSM:336",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        42.8324,
                                        49.5771
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SSM:336",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        42.9186,
                                        49.5574
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                42.8324,
                                49.5771
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Operational",
                                "a_Type": "SSM_4",
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "Blue.12.338",
                            "contactId": "CA2133",
                            "name": "Blue:FIAC:337",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:FIAC:337",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        32.4665,
                                        30.9855
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:FIAC:337",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        32.5239,
                                        31.0044
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:FIAC:337",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        32.4665,
                                        30.9855
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                32.4665,
                                30.9855
                            ],
                            "attributes": {
                                "a_Type": "FIAC_5",
                                "a_Speed": 15,
                                "a_C4_Status": "Degraded",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "Blue.4.339",
                            "contactId": "CA197",
                            "name": "Blue:Fixed Asset:338",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:338",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        33.4631,
                                        26.5736
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:338",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        33.3799,
                                        26.5276
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:338",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        33.4631,
                                        26.5736
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                33.4631,
                                26.5736
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_1"
                            }
                        },
                        {
                            "uniqid": "Blue.5.340",
                            "contactId": "CA1370",
                            "name": "Blue:Submarine:339",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:339",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        47.373,
                                        23.5988
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:339",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        47.373,
                                        23.5988
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:339",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                33.1265,
                                40.0106
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine_2",
                                "a_C4_Status": "None",
                                "a_Equipment": "_5",
                                "a_TaskGroup": "CTF-310"
                            }
                        },
                        {
                            "uniqid": "Blue.8.341",
                            "contactId": "CA110",
                            "name": "Blue:SSM:340",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SSM:340",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        29.7643,
                                        38.0982
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SSM:340",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        29.8304,
                                        38.0791
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SSM:340",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        29.8304,
                                        38.0791
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                29.8304,
                                38.0791
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Degraded",
                                "a_Type": "SSM_4",
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "Blue.7.342",
                            "contactId": "CA3375",
                            "name": "Blue:Fixed Asset:341",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:341",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        46.4556,
                                        34.8564
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:341",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        46.4556,
                                        34.8564
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:341",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        46.4556,
                                        34.8564
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                46.4556,
                                34.8564
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "Blue.8.343",
                            "contactId": "CA2386",
                            "name": "Blue:SSM:342",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SSM:342",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        47.1018,
                                        33.9108
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SSM:342",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        47.051,
                                        33.8169
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SSM:342",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        47.1018,
                                        33.9108
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                47.1018,
                                33.9108
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Degraded",
                                "a_Type": "SSM_6",
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "Blue.12.344",
                            "contactId": "CA2210",
                            "name": "Blue:FIAC:343",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:FIAC:343",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        49.1491,
                                        27.632
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:FIAC:343",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        49.1491,
                                        27.632
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:FIAC:343",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        49.1532,
                                        27.6992
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                49.994,
                                24.3865
                            ],
                            "attributes": {
                                "a_Type": "FIAC_4",
                                "a_Speed": 20,
                                "a_C4_Status": "None",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-575"
                            }
                        },
                        {
                            "uniqid": "Blue.3.345",
                            "contactId": "CA1486",
                            "name": "Blue:SAM:344",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SAM:344",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        48.8407,
                                        42.81
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SAM:344",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        48.827,
                                        42.7822
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SAM:344",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        48.827,
                                        42.7822
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                48.827,
                                42.7822
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_2",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_12",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Blue.7.346",
                            "contactId": "CA1007",
                            "name": "Blue:Fixed Asset:345",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:345",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        33.3669,
                                        22.2403
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:345",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        33.2769,
                                        22.1804
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:345",
                                    "typeId": "_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                33.2769,
                                22.1804
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "Blue.13.347",
                            "contactId": "CA620",
                            "name": "Blue:Maritime Minefield:346",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Maritime Minefield:346",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        39.256,
                                        26.8764
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Maritime Minefield:346",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        39.256,
                                        26.8764
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Maritime Minefield:346",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        39.256,
                                        26.8764
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                39.256,
                                26.8764
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_3",
                                "a_C4_Status": "Degraded",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "Blue.2.348",
                            "contactId": "CA1887",
                            "name": "Blue:Bomber Squadron:347",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Bomber Squadron:347",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        37.979,
                                        50.9955
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Bomber Squadron:347",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        37.8798,
                                        50.953
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Bomber Squadron:347",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        37.979,
                                        50.9955
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                33.2769,
                                22.1804
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_3",
                                "a_Speed": 200,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Blue.7.346",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_3"
                            }
                        },
                        {
                            "uniqid": "Blue.9.349",
                            "contactId": "CA1642",
                            "name": "Blue:Fixed Asset:348",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:348",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.309,
                                        45.9045
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:348",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.3921,
                                        45.9872
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:348",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.367,
                                        45.9272
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                34.3921,
                                45.9872
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Blue.2.350",
                            "contactId": "CA1479",
                            "name": "Blue:Bomber Squadron:349",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Bomber Squadron:349",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        28.767,
                                        25.0064
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Bomber Squadron:349",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        28.8948,
                                        25.0035
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Bomber Squadron:349",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        28.7162,
                                        25.1156
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                53.8269,
                                47.0758
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_3",
                                "a_Speed": 220,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Blue.8.216",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "Blue.4.351",
                            "contactId": "CA2895",
                            "name": "Blue:Ship:350",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Ship:350",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        47.1179,
                                        35.2417
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Ship:350",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        47.1179,
                                        35.2417
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Ship:350",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        47.1179,
                                        35.2417
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                47.1179,
                                35.2417
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Ship_4",
                                "a_C4_Status": "None",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "Blue.9.352",
                            "contactId": "CA82",
                            "name": "Blue:ISTAR:351",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:ISTAR:351",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        33.5699,
                                        43.943
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:ISTAR:351",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        33.5381,
                                        44.0324
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:ISTAR:351",
                                    "typeId": "_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                49.994,
                                24.3865
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_3",
                                "a_Airfield": "_7",
                                "a_Equipment": "_46",
                                "a_Search_Rate": 100,
                                "a_TaskGroup": "CTF-575"
                            }
                        },
                        {
                            "uniqid": "Blue.2.353",
                            "contactId": "CA746",
                            "name": "Blue:Fixed Asset:352",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:352",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        42.5851,
                                        27.8456
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:352",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        42.5851,
                                        27.8456
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:352",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        42.5851,
                                        27.8456
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                42.5851,
                                27.8456
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_1"
                            }
                        },
                        {
                            "uniqid": "Blue.7.354",
                            "contactId": "CA2144",
                            "name": "Blue:Fixed Asset:353",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:353",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        51.8179,
                                        33.9748
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:353",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        51.8179,
                                        33.9748
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:353",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        51.7611,
                                        33.9054
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                51.8179,
                                33.9748
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Blue.10.355",
                            "contactId": "CA3100",
                            "name": "Blue:Air LOGS:354",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Air LOGS:354",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        35.254,
                                        32.3634
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Air LOGS:354",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        35.2637,
                                        32.4276
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Air LOGS:354",
                                    "typeId": "_air_logs",
                                    "force": "f-blue",
                                    "position": [
                                        35.3196,
                                        32.4109
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                33.4511,
                                34.1889
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_4",
                                "a_Speed": 240,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Blue.8.117",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "Blue.5.356",
                            "contactId": "CA1189",
                            "name": "Blue:Fixed Asset:355",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:355",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.837,
                                        28.7075
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:355",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.7932,
                                        28.6272
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:355",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.7932,
                                        28.6272
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                30.7932,
                                28.6272
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Blue.6.357",
                            "contactId": "CA1438",
                            "name": "Blue:Land Unit:356",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Land Unit:356",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        49.6258,
                                        22.0298
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Land Unit:356",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        49.7228,
                                        21.9451
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Land Unit:356",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        49.6258,
                                        22.0298
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                49.6258,
                                22.0298
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Type": "Land Unit_6",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_38",
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "Blue.1.358",
                            "contactId": "CA1861",
                            "name": "Blue:Fast Jet Squadron :357",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fast Jet Squadron :357",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fast Jet Squadron :357",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        37.6751,
                                        38.7452
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fast Jet Squadron :357",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        37.6751,
                                        38.7452
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                50.3925,
                                52.3049
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron _3",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Blue.12.241",
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "Blue.12.359",
                            "contactId": "CA49",
                            "name": "Blue:FIAC:358",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:FIAC:358",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        41.1195,
                                        53.1398
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:FIAC:358",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        41.0806,
                                        53.2213
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:FIAC:358",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        41.1195,
                                        53.1398
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                52.2171,
                                38.0852
                            ],
                            "attributes": {
                                "a_Type": "FIAC_3",
                                "a_Speed": 30,
                                "a_C4_Status": "Degraded",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-281"
                            }
                        },
                        {
                            "uniqid": "Blue.1.360",
                            "contactId": "CA1912",
                            "name": "Blue:Fast Jet Squadron :359",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fast Jet Squadron :359",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        46.2937,
                                        50.1768
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fast Jet Squadron :359",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        46.2641,
                                        50.2045
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fast Jet Squadron :359",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        46.2641,
                                        50.2045
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                33.4511,
                                34.1889
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron _4",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Blue.8.117",
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "Blue.9.361",
                            "contactId": "CA2676",
                            "name": "Blue:ISTAR:360",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:ISTAR:360",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        38.4508,
                                        43.9156
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:ISTAR:360",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        38.5071,
                                        43.9163
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:ISTAR:360",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        38.4508,
                                        43.9156
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                33.4511,
                                34.1889
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_4",
                                "a_Airfield": "Blue.8.117",
                                "a_Equipment": "_43",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Blue.3.362",
                            "contactId": "CA2358",
                            "name": "Blue:SAM:361",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SAM:361",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        36.3201,
                                        43.5834
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SAM:361",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        36.2381,
                                        43.6172
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SAM:361",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        36.3201,
                                        43.5834
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                36.3201,
                                43.5834
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_4",
                                "a_C4_Status": "None",
                                "a_Equipment": "_4",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Blue.6.363",
                            "contactId": "CA3098",
                            "name": "Blue:Land Unit:362",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Land Unit:362",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        54.9518,
                                        33.2974
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Land Unit:362",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        55.0164,
                                        33.2104
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Land Unit:362",
                                    "typeId": "_land_unit",
                                    "force": "f-blue",
                                    "position": [
                                        54.9936,
                                        33.2552
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                54.9518,
                                33.2974
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Type": "Land Unit_6",
                                "a_C4_Status": "Operational",
                                "a_Size": "Unit size_39",
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "Blue.11.364",
                            "contactId": "CA189",
                            "name": "Blue:C2 Node:363",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:C2 Node:363",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        41.0594,
                                        37.7314
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:C2 Node:363",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        41.1236,
                                        37.6896
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:C2 Node:363",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        41.0594,
                                        37.7314
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                41.0594,
                                37.7314
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_3",
                                "a_C4_Status": "Operational",
                                "a_Connections": "_9"
                            }
                        },
                        {
                            "uniqid": "Blue.11.365",
                            "contactId": "CA1707",
                            "name": "Blue:C2 Node:364",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:C2 Node:364",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        36.4836,
                                        28.2571
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:C2 Node:364",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        36.4836,
                                        28.2571
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:C2 Node:364",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        36.4836,
                                        28.2571
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                36.4836,
                                28.2571
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_2",
                                "a_C4_Status": "None",
                                "a_Connections": "_6"
                            }
                        },
                        {
                            "uniqid": "Blue.4.366",
                            "contactId": "CA325",
                            "name": "Blue:Fixed Asset:365",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:365",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        49.3096,
                                        52.4645
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:365",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        49.3096,
                                        52.4645
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:365",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        49.3096,
                                        52.4645
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                49.3096,
                                52.4645
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Blue.3.367",
                            "contactId": "CA2409",
                            "name": "Blue:SAM:366",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SAM:366",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        33.7662,
                                        36.5732
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SAM:366",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        33.7098,
                                        36.5143
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SAM:366",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        33.7888,
                                        36.6083
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                33.7888,
                                36.6083
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_3",
                                "a_C4_Status": "None",
                                "a_Equipment": "_3",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Blue.4.368",
                            "contactId": "CA2529",
                            "name": "Blue:Ship:367",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Ship:367",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        39.7416,
                                        36.9566
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Ship:367",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        39.7416,
                                        36.9566
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Ship:367",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        39.7511,
                                        37.0133
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                33.1265,
                                40.0106
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Ship_1",
                                "a_C4_Status": "Degraded",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_2",
                                "a_TaskGroup": "CTF-310"
                            }
                        },
                        {
                            "uniqid": "Blue.6.369",
                            "contactId": "CA1147",
                            "name": "Blue:Fixed Asset:368",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:368",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        31.609,
                                        53.7361
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:368",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        31.5924,
                                        53.8349
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:368",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        31.609,
                                        53.7361
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                31.609,
                                53.7361
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Blue.12.370",
                            "contactId": "CA643",
                            "name": "Blue:Fixed Asset:369",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:369",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.182,
                                        27.5761
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:369",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.182,
                                        27.5761
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:369",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.1592,
                                        27.5088
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                41.182,
                                27.5761
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Blue.7.371",
                            "contactId": "CA3212",
                            "name": "Blue:Fixed Asset:370",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:370",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        54.5139,
                                        43.0751
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:370",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        54.5139,
                                        43.0751
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:370",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        54.5583,
                                        43.0893
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                54.5139,
                                43.0751
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_1"
                            }
                        },
                        {
                            "uniqid": "Blue.4.372",
                            "contactId": "CA52",
                            "name": "Blue:Ship:371",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Ship:371",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        29.331,
                                        52.5565
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Ship:371",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        29.3901,
                                        52.6405
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Ship:371",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        29.3901,
                                        52.6405
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                52.2171,
                                38.0852
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship_4",
                                "a_C4_Status": "Degraded",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_11",
                                "a_TaskGroup": "CTF-281"
                            }
                        },
                        {
                            "uniqid": "Blue.1.373",
                            "contactId": "CA3146",
                            "name": "Blue:Fast Jet Squadron :372",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fast Jet Squadron :372",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        46.1251,
                                        32.6452
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fast Jet Squadron :372",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue",
                                    "position": [
                                        46.1251,
                                        32.6452
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fast Jet Squadron :372",
                                    "typeId": "_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                44.0692,
                                52.2191
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron _3",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Blue.5.149",
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "Blue.8.374",
                            "contactId": "CA2150",
                            "name": "Blue:Fixed Asset:373",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:373",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.4074,
                                        48.6528
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:373",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.4074,
                                        48.6528
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:373",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        34.4074,
                                        48.6528
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                34.4074,
                                48.6528
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Blue.13.375",
                            "contactId": "CA2216",
                            "name": "Blue:Fixed Asset:374",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:374",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.3837,
                                        49.5009
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:374",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.4583,
                                        49.4743
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:374",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.4583,
                                        49.4743
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                30.4583,
                                49.4743
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_1"
                            }
                        },
                        {
                            "uniqid": "Blue.3.376",
                            "contactId": "CA1720",
                            "name": "Blue:SAM:375",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SAM:375",
                                    "typeId": "_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SAM:375",
                                    "typeId": "_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SAM:375",
                                    "typeId": "_land_sam",
                                    "force": "f-blue",
                                    "position": [
                                        39.4751,
                                        33.1486
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                39.4751,
                                33.1486
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_5",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_34",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Blue.8.377",
                            "contactId": "CA520",
                            "name": "Blue:SSM:376",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SSM:376",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        37.0192,
                                        37.7105
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SSM:376",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        36.9004,
                                        37.8443
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SSM:376",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        36.9358,
                                        37.753
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                36.9358,
                                37.753
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Operational",
                                "a_Type": "SSM_4",
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "Blue.11.378",
                            "contactId": "CA2898",
                            "name": "Blue:C2 Node:377",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:C2 Node:377",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        37.6056,
                                        45.262
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:C2 Node:377",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        37.5838,
                                        45.2155
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:C2 Node:377",
                                    "typeId": "_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                37.6148,
                                45.2241
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_2",
                                "a_C4_Status": "Operational",
                                "a_Connections": "_5"
                            }
                        },
                        {
                            "uniqid": "Blue.9.379",
                            "contactId": "CA1032",
                            "name": "Blue:ISTAR:378",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:ISTAR:378",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        39.3067,
                                        28.7567
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:ISTAR:378",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        39.4148,
                                        28.6759
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:ISTAR:378",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        39.3788,
                                        28.7306
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                49.994,
                                24.3865
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "None",
                                "a_Type": "ISTAR_3",
                                "a_Airfield": "_13",
                                "a_Equipment": "_43",
                                "a_Search_Rate": 100,
                                "a_TaskGroup": "CTF-575"
                            }
                        },
                        {
                            "uniqid": "Blue.5.380",
                            "contactId": "CA1224",
                            "name": "Blue:Submarine:379",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:379",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        47.7211,
                                        45.9485
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:379",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        47.7211,
                                        45.9485
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:379",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        47.7211,
                                        45.9485
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                47.7211,
                                45.9485
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine_2",
                                "a_C4_Status": "None",
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "Blue.13.381",
                            "contactId": "CA2865",
                            "name": "Blue:Maritime Minefield:380",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Maritime Minefield:380",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        42.9269,
                                        29.2618
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Maritime Minefield:380",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        42.9269,
                                        29.2618
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Maritime Minefield:380",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        42.874,
                                        29.3135
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                42.9269,
                                29.2618
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_2",
                                "a_C4_Status": "Degraded",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "Blue.8.382",
                            "contactId": "CA135",
                            "name": "Blue:SSM:381",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SSM:381",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        28.7643,
                                        48.1591
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SSM:381",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        28.6874,
                                        48.0854
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SSM:381",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        28.6874,
                                        48.0854
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                28.6874,
                                48.0854
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "None",
                                "a_Type": "SSM_4",
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "Blue.12.383",
                            "contactId": "CA3281",
                            "name": "Blue:FIAC:382",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:FIAC:382",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        51.4885,
                                        50.1063
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:FIAC:382",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        51.4885,
                                        50.1063
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:FIAC:382",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        51.4885,
                                        50.1063
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                32.1834,
                                22.3947
                            ],
                            "attributes": {
                                "a_Type": "FIAC_6",
                                "a_Speed": 30,
                                "a_C4_Status": "Degraded",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-793"
                            }
                        },
                        {
                            "uniqid": "Blue.13.384",
                            "contactId": "CA2321",
                            "name": "Blue:Maritime Minefield:383",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Maritime Minefield:383",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        35.0533,
                                        43.8912
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Maritime Minefield:383",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        35.0533,
                                        43.8912
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Maritime Minefield:383",
                                    "typeId": "_maritime_mine",
                                    "force": "f-blue",
                                    "position": [
                                        35.0533,
                                        43.8912
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                35.0533,
                                43.8912
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_4",
                                "a_C4_Status": "Operational",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "Blue.9.385",
                            "contactId": "CA153",
                            "name": "Blue:ISTAR:384",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:ISTAR:384",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        43.1209,
                                        41.0781
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:ISTAR:384",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        43.0754,
                                        41.0445
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:ISTAR:384",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        43.1433,
                                        41.1233
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                34.583,
                                47.6436
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Type": "ISTAR_4",
                                "a_Airfield": "Blue.12.13",
                                "a_Equipment": "_47",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Blue.9.386",
                            "contactId": "CA1448",
                            "name": "Blue:ISTAR:385",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:ISTAR:385",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        29.5313,
                                        43.8747
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:ISTAR:385",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        29.5313,
                                        43.8747
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:ISTAR:385",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        29.5313,
                                        43.8747
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                41.9732,
                                22.0703
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_6",
                                "a_Airfield": "Blue.7.140",
                                "a_Equipment": "_49",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Blue.6.387",
                            "contactId": "CA127",
                            "name": "Blue:Fixed Asset:386",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:386",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.3103,
                                        26.2449
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:386",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.3103,
                                        26.2449
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:386",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        41.3794,
                                        26.2695
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                41.3103,
                                26.2449
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Blue.9.388",
                            "contactId": "CA839",
                            "name": "Blue:ISTAR:387",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:ISTAR:387",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        44.325,
                                        32.299
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:ISTAR:387",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        44.3441,
                                        32.3914
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:ISTAR:387",
                                    "typeId": "_air_istar",
                                    "force": "f-blue",
                                    "position": [
                                        44.4127,
                                        32.428
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                41.1429,
                                37.6467
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_1",
                                "a_Airfield": "_43",
                                "a_Equipment": "_3",
                                "a_Search_Rate": 100,
                                "a_TaskGroup": "CTF-387"
                            }
                        },
                        {
                            "uniqid": "Blue.11.389",
                            "contactId": "CA336",
                            "name": "Blue:Fixed Asset:388",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:388",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        46.6904,
                                        29.7412
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:388",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        46.6904,
                                        29.7412
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:388",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        46.6904,
                                        29.7412
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                46.6904,
                                29.7412
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_2"
                            }
                        },
                        {
                            "uniqid": "Blue.4.390",
                            "contactId": "CA117",
                            "name": "Blue:Ship:389",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Ship:389",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        36.216,
                                        51.1611
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Ship:389",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        36.216,
                                        51.1611
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Ship:389",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        36.216,
                                        51.1611
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                36.216,
                                51.1611
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Ship_6",
                                "a_C4_Status": "Operational",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "Blue.12.391",
                            "contactId": "CA872",
                            "name": "Blue:FIAC:390",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:FIAC:390",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        42.8595,
                                        21.9951
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:FIAC:390",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        42.7862,
                                        22.1684
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:FIAC:390",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-blue",
                                    "position": [
                                        42.8144,
                                        22.0762
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                52.2171,
                                38.0852
                            ],
                            "attributes": {
                                "a_Type": "FIAC_2",
                                "a_Speed": 30,
                                "a_C4_Status": "Operational",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-281"
                            }
                        },
                        {
                            "uniqid": "Blue.4.392",
                            "contactId": "CA1100",
                            "name": "Blue:Ship:391",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Ship:391",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        37.9752,
                                        43.4125
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Ship:391",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        37.9752,
                                        43.4125
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Ship:391",
                                    "typeId": "_maritime_ship",
                                    "force": "f-blue",
                                    "position": [
                                        37.9752,
                                        43.4125
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                52.2171,
                                38.0852
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Ship_1",
                                "a_C4_Status": "Operational",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_9",
                                "a_TaskGroup": "CTF-281"
                            }
                        },
                        {
                            "uniqid": "Blue.13.393",
                            "contactId": "CA507",
                            "name": "Blue:Fixed Asset:392",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:392",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.4753,
                                        28.3807
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:392",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.4753,
                                        28.3807
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:392",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        30.4753,
                                        28.3807
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                30.4753,
                                28.3807
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Blue.5.394",
                            "contactId": "CA3240",
                            "name": "Blue:Submarine:393",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:393",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        43.9987,
                                        36.254
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:393",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        43.9987,
                                        36.254
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:393",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        43.9987,
                                        36.254
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                43.9987,
                                36.254
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Submarine_6",
                                "a_C4_Status": "None",
                                "a_Equipment": "_40"
                            }
                        },
                        {
                            "uniqid": "Blue.2.395",
                            "contactId": "CA1088",
                            "name": "Blue:Bomber Squadron:394",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Bomber Squadron:394",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        54.8438,
                                        29.1739
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Bomber Squadron:394",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        54.8055,
                                        29.2361
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Bomber Squadron:394",
                                    "typeId": "_air_bomber",
                                    "force": "f-blue",
                                    "position": [
                                        54.8055,
                                        29.2361
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                31.2378,
                                38.7034
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_4",
                                "a_Speed": 280,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Blue.9.159",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_8"
                            }
                        },
                        {
                            "uniqid": "Blue.4.396",
                            "contactId": "CA2249",
                            "name": "Blue:Fixed Asset:395",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:395",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        49.5416,
                                        29.5383
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:395",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        49.5416,
                                        29.5383
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:395",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        49.5416,
                                        29.5383
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                49.5416,
                                29.5383
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_3"
                            }
                        },
                        {
                            "uniqid": "Blue.8.397",
                            "contactId": "CA162",
                            "name": "Blue:Fixed Asset:396",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Fixed Asset:396",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        36.8405,
                                        22.6482
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Fixed Asset:396",
                                    "typeId": "_land_asset",
                                    "force": "f-blue",
                                    "position": [
                                        36.8405,
                                        22.6482
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Fixed Asset:396",
                                    "typeId": "_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                36.8405,
                                22.6482
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_2"
                            }
                        },
                        {
                            "uniqid": "Blue.5.398",
                            "contactId": "CA2405",
                            "name": "Blue:Submarine:397",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:Submarine:397",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        52.2262,
                                        30.2722
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:Submarine:397",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        52.2098,
                                        30.2949
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:Submarine:397",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-blue",
                                    "position": [
                                        52.1161,
                                        30.2743
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                41.1429,
                                37.6467
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine_4",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_21",
                                "a_TaskGroup": "CTF-387"
                            }
                        },
                        {
                            "uniqid": "Blue.8.399",
                            "contactId": "CA1693",
                            "name": "Blue:SSM:398",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:SSM:398",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        35.5603,
                                        42.0263
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:SSM:398",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        35.4772,
                                        41.9425
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:SSM:398",
                                    "typeId": "_land_ssm",
                                    "force": "f-blue",
                                    "position": [
                                        35.4276,
                                        41.893
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                35.4772,
                                41.9425
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Operational",
                                "a_Type": "SSM_6",
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "Blue.11.400",
                            "contactId": "CA2706",
                            "name": "Blue:C2 Node:399",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:C2 Node:399",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        49.4522,
                                        27.4372
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:C2 Node:399",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        49.3573,
                                        27.3537
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:C2 Node:399",
                                    "typeId": "_land_c2",
                                    "force": "f-blue",
                                    "position": [
                                        49.3573,
                                        27.3537
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                49.3573,
                                27.3537
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_5",
                                "a_C4_Status": "None",
                                "a_Connections": "_1"
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
                            "uniqid": "Red.4.1",
                            "contactId": "CA474",
                            "name": "Red:Ship:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Ship:0",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        4.6158,
                                        82.8018
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Ship:0",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        4.6158,
                                        82.8018
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Ship:0",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        4.7143,
                                        82.826
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                4.6158,
                                82.8018
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Ship_2",
                                "a_C4_Status": "Degraded",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_45"
                            }
                        },
                        {
                            "uniqid": "Red.12.2",
                            "contactId": "CA2464",
                            "name": "Red:FIAC:1",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:FIAC:1",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        32.5352,
                                        65.0402
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:FIAC:1",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        32.5443,
                                        65.0564
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:FIAC:1",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        32.5443,
                                        65.0564
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                32.5443,
                                65.0564
                            ],
                            "attributes": {
                                "a_Type": "FIAC_1",
                                "a_Speed": 10,
                                "a_C4_Status": "None",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "Red.5.3",
                            "contactId": "CA2853",
                            "name": "Red:Fixed Asset:2",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:2",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        2.8145,
                                        73.184
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:2",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        2.8145,
                                        73.184
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:2",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        2.8145,
                                        73.184
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                2.8145,
                                73.184
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_3"
                            }
                        },
                        {
                            "uniqid": "Red.4.4",
                            "contactId": "CA2432",
                            "name": "Red:Ship:3",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Ship:3",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        14.3876,
                                        57.6393
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Ship:3",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        14.3876,
                                        57.6393
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Ship:3",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        14.4358,
                                        57.6386
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                14.3876,
                                57.6393
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Ship_2",
                                "a_C4_Status": "Degraded",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_14",
                                "a_TaskGroup": "CTF-551"
                            }
                        },
                        {
                            "uniqid": "Red.9.5",
                            "contactId": "CA476",
                            "name": "Red:ISTAR:4",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:ISTAR:4",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        32.6678,
                                        55.6836
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:ISTAR:4",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        32.6678,
                                        55.6836
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:ISTAR:4",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        32.6678,
                                        55.6836
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                22.1345,
                                82.6827
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_2",
                                "a_Airfield": "Red.7.113",
                                "a_Equipment": "_48",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Red.13.6",
                            "contactId": "CA2444",
                            "name": "Red:Maritime Minefield:5",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:5",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        13.2857,
                                        60.1602
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:5",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        13.2857,
                                        60.1602
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:5",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        13.2857,
                                        60.1602
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                13.2857,
                                60.1602
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_2",
                                "a_C4_Status": "None",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "Red.3.7",
                            "contactId": "CA2948",
                            "name": "Red:SAM:6",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:6",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        41.0483,
                                        72.6751
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:6",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        41.0566,
                                        72.6508
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:6",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        41.0566,
                                        72.6508
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                41.0566,
                                72.6508
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_4",
                                "a_C4_Status": "None",
                                "a_Equipment": "_0",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.9.8",
                            "contactId": "CA1610",
                            "name": "Red:ISTAR:7",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:ISTAR:7",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        5.2215,
                                        59.5647
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:ISTAR:7",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        5.2215,
                                        59.5647
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:ISTAR:7",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        5.2215,
                                        59.5647
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                35.7354,
                                80.7173
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_1",
                                "a_Airfield": "Red.7.108",
                                "a_Equipment": "_5",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Red.3.9",
                            "contactId": "CA1091",
                            "name": "Red:SAM:8",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:8",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        38.6615,
                                        81.653
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:8",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        38.6615,
                                        81.653
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:8",
                                    "typeId": "_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                38.6615,
                                81.653
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_6",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_31",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.8.10",
                            "contactId": "CA2328",
                            "name": "Red:SSM:9",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SSM:9",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        33.9126,
                                        76.1173
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SSM:9",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        33.9126,
                                        76.1173
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SSM:9",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        33.9126,
                                        76.1173
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                33.9126,
                                76.1173
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "None",
                                "a_Type": "SSM_2",
                                "a_Equipment": "_30"
                            }
                        },
                        {
                            "uniqid": "Red.11.11",
                            "contactId": "CA1137",
                            "name": "Red:Fixed Asset:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:10",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        36.8605,
                                        80.0006
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:10",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        36.9504,
                                        79.95
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:10",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        36.9364,
                                        79.9573
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                36.9504,
                                79.95
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_3"
                            }
                        },
                        {
                            "uniqid": "Red.5.12",
                            "contactId": "CA2580",
                            "name": "Red:Fixed Asset:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:11",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        29.2591,
                                        79.793
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:11",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        29.2591,
                                        79.793
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:11",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        29.2591,
                                        79.793
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                29.2591,
                                79.793
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Red.2.13",
                            "contactId": "CA2272",
                            "name": "Red:Bomber Squadron:12",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Bomber Squadron:12",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        30.0938,
                                        84.6055
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Bomber Squadron:12",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        29.9949,
                                        84.6755
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Bomber Squadron:12",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        30.0938,
                                        84.6055
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                6.3868,
                                61.4238
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_4",
                                "a_Speed": 240,
                                "a_C4_Status": "None",
                                "a_Airfield": "Red.6.300",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "Red.3.14",
                            "contactId": "CA2659",
                            "name": "Red:SAM:13",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:13",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        36.1609,
                                        84.9009
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:13",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        36.1319,
                                        84.9938
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:13",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        36.2005,
                                        84.8832
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                36.1609,
                                84.9009
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_6",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_2",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.1.15",
                            "contactId": "CA2495",
                            "name": "Red:Fast Jet Squadron :14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fast Jet Squadron :14",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        47.1893,
                                        63.7844
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fast Jet Squadron :14",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        47.1893,
                                        63.7844
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fast Jet Squadron :14",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        47.1893,
                                        63.7844
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                35.1056,
                                63.0615
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Fast Jet Squadron _4",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "_45",
                                "a_Equipment": "_12",
                                "a_TaskGroup": "CTF-748"
                            }
                        },
                        {
                            "uniqid": "Red.13.16",
                            "contactId": "CA1342",
                            "name": "Red:Maritime Minefield:15",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:15",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        31.388,
                                        78.6773
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:15",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        31.312,
                                        78.7259
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:15",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        31.312,
                                        78.7259
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                31.312,
                                78.7259
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_2",
                                "a_C4_Status": "Operational",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "Red.9.17",
                            "contactId": "CA2126",
                            "name": "Red:ISTAR:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:ISTAR:16",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        6.5508,
                                        61.5804
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:ISTAR:16",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        6.5309,
                                        61.6067
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:ISTAR:16",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        6.5508,
                                        61.5804
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                28.9913,
                                83.4511
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Type": "ISTAR_6",
                                "a_Airfield": "_27",
                                "a_Equipment": "_34",
                                "a_Search_Rate": 100,
                                "a_TaskGroup": "CTF-241"
                            }
                        },
                        {
                            "uniqid": "Red.4.18",
                            "contactId": "CA467",
                            "name": "Red:Ship:17",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Ship:17",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        28.9913,
                                        83.4511
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Ship:17",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        28.9768,
                                        83.5274
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Ship:17",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        28.9913,
                                        83.4511
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                28.9913,
                                83.4511
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Ship_2",
                                "a_C4_Status": "Degraded",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_4",
                                "a_TaskGroup": "CTF-241"
                            }
                        },
                        {
                            "uniqid": "Red.4.19",
                            "contactId": "CA1654",
                            "name": "Red:Ship:18",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Ship:18",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        31.741,
                                        81.648
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Ship:18",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        31.7024,
                                        81.674
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Ship:18",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        31.7024,
                                        81.674
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                28.9913,
                                83.4511
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship_2",
                                "a_C4_Status": "Operational",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_2",
                                "a_TaskGroup": "CTF-241"
                            }
                        },
                        {
                            "uniqid": "Red.5.20",
                            "contactId": "CA2042",
                            "name": "Red:Submarine:19",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Submarine:19",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        21.6368,
                                        60.4998
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Submarine:19",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        21.6368,
                                        60.4998
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Submarine:19",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        21.6368,
                                        60.4998
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                21.6368,
                                60.4998
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine_1",
                                "a_C4_Status": "None",
                                "a_Equipment": "_35",
                                "a_TaskGroup": "CTF-476"
                            }
                        },
                        {
                            "uniqid": "Red.12.21",
                            "contactId": "CA857",
                            "name": "Red:FIAC:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:FIAC:20",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        10.3016,
                                        67.5874
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:FIAC:20",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        10.3797,
                                        67.5423
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:FIAC:20",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        10.3016,
                                        67.5874
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                10.3016,
                                67.5874
                            ],
                            "attributes": {
                                "a_Type": "FIAC_4",
                                "a_Speed": 30,
                                "a_C4_Status": "None",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "Red.1.22",
                            "contactId": "CA1769",
                            "name": "Red:Fast Jet Squadron :21",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fast Jet Squadron :21",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        7.0111,
                                        81.736
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fast Jet Squadron :21",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        7.0485,
                                        81.6555
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fast Jet Squadron :21",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        7.0111,
                                        81.736
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                53.7477,
                                85.2579
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron _3",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Red.6.27",
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "Red.1.23",
                            "contactId": "CA638",
                            "name": "Red:Fixed Asset:22",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:22",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        31.2829,
                                        77.5876
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:22",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        31.2829,
                                        77.5876
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:22",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        31.2829,
                                        77.5876
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                31.2829,
                                77.5876
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Red.6.24",
                            "contactId": "CA1033",
                            "name": "Red:Fixed Asset:23",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:23",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        30.6457,
                                        55.5709
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:23",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        30.6457,
                                        55.5709
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:23",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        30.6457,
                                        55.5709
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                30.6457,
                                55.5709
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_2"
                            }
                        },
                        {
                            "uniqid": "Red.10.25",
                            "contactId": "CA3090",
                            "name": "Red:Air LOGS:24",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:24",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        24.5805,
                                        70.2859
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:24",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        24.7148,
                                        70.3087
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:24",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        24.6164,
                                        70.2793
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                5.3662,
                                78.2597
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_5",
                                "a_Speed": 240,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Red.9.142",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "Red.13.26",
                            "contactId": "CA1680",
                            "name": "Red:Maritime Minefield:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:25",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        3.7075,
                                        58.4767
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:25",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        3.6281,
                                        58.3928
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:25",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        3.6281,
                                        58.3928
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                3.6281,
                                58.3928
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_3",
                                "a_C4_Status": "Degraded",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "Red.6.27",
                            "contactId": "CA2012",
                            "name": "Red:Fixed Asset:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:26",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        53.7477,
                                        85.2579
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:26",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        53.7477,
                                        85.2579
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:26",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        53.7477,
                                        85.2579
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                53.7477,
                                85.2579
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "Red.5.28",
                            "contactId": "CA2984",
                            "name": "Red:Submarine:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Submarine:27",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        37.505,
                                        57.0225
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Submarine:27",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        37.4328,
                                        56.9577
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Submarine:27",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        37.505,
                                        57.0225
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                37.505,
                                57.0225
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine_4",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_22",
                                "a_TaskGroup": "CTF-853"
                            }
                        },
                        {
                            "uniqid": "Red.13.29",
                            "contactId": "CA637",
                            "name": "Red:Maritime Minefield:28",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:28",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        37.0665,
                                        80.8494
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:28",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        36.9734,
                                        80.7397
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:28",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        37.0352,
                                        80.8063
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                37.0352,
                                80.8063
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_4",
                                "a_C4_Status": "Degraded",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "Red.10.30",
                            "contactId": "CA989",
                            "name": "Red:Air LOGS:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:29",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        34.6693,
                                        75.7907
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:29",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        34.702,
                                        75.8813
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:29",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        34.7256,
                                        75.8791
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                22.7804,
                                74.9572
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_1",
                                "a_Speed": 280,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Red.11.156",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "Red.13.31",
                            "contactId": "CA1267",
                            "name": "Red:Maritime Minefield:30",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:30",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        19.6348,
                                        80.7304
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:30",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        19.6348,
                                        80.7304
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:30",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        19.6348,
                                        80.7304
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                19.6348,
                                80.7304
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_5",
                                "a_C4_Status": "None",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "Red.10.32",
                            "contactId": "CA1811",
                            "name": "Red:Air LOGS:31",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:31",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        45.4084,
                                        54.3079
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:31",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        45.4084,
                                        54.3079
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:31",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        45.4084,
                                        54.3079
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                14.6958,
                                84.39
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_2",
                                "a_Speed": 240,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Red.2.349",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "Red.2.33",
                            "contactId": "CA3290",
                            "name": "Red:Bomber Squadron:32",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Bomber Squadron:32",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        26.0421,
                                        80.1642
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Bomber Squadron:32",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        26.0421,
                                        80.1642
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Bomber Squadron:32",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        26.0421,
                                        80.1642
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                6.3868,
                                61.4238
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_5",
                                "a_Speed": 280,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Red.6.300",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "Red.8.34",
                            "contactId": "CA1963",
                            "name": "Red:Fixed Asset:33",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:33",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        28.3666,
                                        84.148
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:33",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        28.4304,
                                        84.1205
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:33",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        28.3666,
                                        84.148
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                28.3666,
                                84.148
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Red.10.35",
                            "contactId": "CA1559",
                            "name": "Red:Air LOGS:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:34",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        33.5674,
                                        81.7573
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:34",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        33.5541,
                                        81.671
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:34",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        33.5544,
                                        81.7616
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                37.505,
                                57.0225
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_1",
                                "a_Speed": 220,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "_11",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_17",
                                "a_TaskGroup": "CTF-853"
                            }
                        },
                        {
                            "uniqid": "Red.13.36",
                            "contactId": "CA2539",
                            "name": "Red:Maritime Minefield:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:35",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        5.8863,
                                        60.1628
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:35",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        5.8863,
                                        60.1628
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:35",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        5.8863,
                                        60.1628
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                5.8863,
                                60.1628
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_1",
                                "a_C4_Status": "Operational",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "Red.8.37",
                            "contactId": "CA137",
                            "name": "Red:SSM:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SSM:36",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        53.0363,
                                        61.6192
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SSM:36",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        53.0126,
                                        61.7126
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SSM:36",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        53.0126,
                                        61.7126
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                53.0126,
                                61.7126
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Operational",
                                "a_Type": "SSM_6",
                                "a_Equipment": "_20"
                            }
                        },
                        {
                            "uniqid": "Red.8.38",
                            "contactId": "CA2284",
                            "name": "Red:SSM:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SSM:37",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        33.9861,
                                        83.7823
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SSM:37",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        33.9241,
                                        83.7461
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SSM:37",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        33.9861,
                                        83.7823
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                33.9861,
                                83.7823
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Operational",
                                "a_Type": "SSM_6",
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "Red.11.39",
                            "contactId": "CA1717",
                            "name": "Red:C2 Node:38",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:C2 Node:38",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        12.8846,
                                        54.2549
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:C2 Node:38",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        12.8549,
                                        54.2329
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:C2 Node:38",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        12.8846,
                                        54.2549
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                12.8846,
                                54.2549
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_3",
                                "a_C4_Status": "Degraded",
                                "a_Connections": "_16"
                            }
                        },
                        {
                            "uniqid": "Red.7.40",
                            "contactId": "CA1909",
                            "name": "Red:Fixed Asset:39",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:39",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        20.7817,
                                        66.6441
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:39",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        20.8031,
                                        66.547
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:39",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        20.8349,
                                        66.5278
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                20.8031,
                                66.547
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Red.4.41",
                            "contactId": "CA663",
                            "name": "Red:Ship:40",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Ship:40",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        28.3531,
                                        63.3816
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Ship:40",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        28.259,
                                        63.3515
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Ship:40",
                                    "typeId": "_maritime_ship",
                                    "force": "f-red",
                                    "position": [
                                        28.3531,
                                        63.3816
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                28.3531,
                                63.3816
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship_6",
                                "a_C4_Status": "Degraded",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "Red.11.42",
                            "contactId": "CA3140",
                            "name": "Red:Fixed Asset:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:41",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        33.1492,
                                        61.5854
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:41",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        33.1492,
                                        61.5854
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:41",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        33.1518,
                                        61.6726
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                33.1492,
                                61.5854
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Red.3.43",
                            "contactId": "CA341",
                            "name": "Red:SAM:42",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:42",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        7.9011,
                                        66.8216
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:42",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        7.9011,
                                        66.8216
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:42",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        7.9011,
                                        66.8216
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                7.9011,
                                66.8216
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_1",
                                "a_C4_Status": "None",
                                "a_Equipment": "_39",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.11.44",
                            "contactId": "CA2250",
                            "name": "Red:C2 Node:43",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:C2 Node:43",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        5.3459,
                                        71.5753
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:C2 Node:43",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        5.3459,
                                        71.5753
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:C2 Node:43",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        5.3459,
                                        71.5753
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                5.3459,
                                71.5753
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_5",
                                "a_C4_Status": "Degraded",
                                "a_Connections": "_26"
                            }
                        },
                        {
                            "uniqid": "Red.6.45",
                            "contactId": "CA82",
                            "name": "Red:Land Unit:44",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Land Unit:44",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        48.4203,
                                        71.476
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Land Unit:44",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        48.4104,
                                        71.5095
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Land Unit:44",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        48.4321,
                                        71.4404
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                48.3638,
                                71.5388
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Type": "Land Unit_1",
                                "a_C4_Status": "Operational",
                                "a_Size": "Unit size_31",
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "Red.3.46",
                            "contactId": "CA2919",
                            "name": "Red:SAM:45",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:45",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        54.8857,
                                        77.7572
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:45",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        54.8209,
                                        77.8126
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:45",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        54.8209,
                                        77.8126
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                54.8209,
                                77.8126
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_5",
                                "a_C4_Status": "None",
                                "a_Equipment": "_23",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.9.47",
                            "contactId": "CA2045",
                            "name": "Red:ISTAR:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:ISTAR:46",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        8.6779,
                                        80.5537
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:ISTAR:46",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        8.6779,
                                        80.5537
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:ISTAR:46",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        8.6779,
                                        80.5537
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                15.2149,
                                84.0358
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Type": "ISTAR_5",
                                "a_Airfield": "Red.7.316",
                                "a_Equipment": "_10",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Red.6.48",
                            "contactId": "CA1488",
                            "name": "Red:Land Unit:47",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Land Unit:47",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        30.6093,
                                        73.3352
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Land Unit:47",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        30.6093,
                                        73.3352
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Land Unit:47",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        30.6093,
                                        73.3352
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                30.6093,
                                73.3352
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Type": "Land Unit_2",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_8",
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "Red.6.49",
                            "contactId": "CA2870",
                            "name": "Red:Land Unit:48",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Land Unit:48",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        34.9217,
                                        80.4121
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Land Unit:48",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        34.8586,
                                        80.3461
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Land Unit:48",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        34.8586,
                                        80.3461
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                34.8586,
                                80.3461
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Type": "Land Unit_2",
                                "a_C4_Status": "Operational",
                                "a_Size": "Unit size_17",
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "Red.8.50",
                            "contactId": "CA3003",
                            "name": "Red:SSM:49",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SSM:49",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        45.8003,
                                        56.801
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SSM:49",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        45.8166,
                                        56.7332
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SSM:49",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        45.816,
                                        56.6442
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                45.8166,
                                56.7332
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Operational",
                                "a_Type": "SSM_6",
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "Red.12.51",
                            "contactId": "CA2613",
                            "name": "Red:FIAC:50",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:FIAC:50",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        23.7848,
                                        65.1503
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:FIAC:50",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        23.8572,
                                        65.1293
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:FIAC:50",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        23.7848,
                                        65.1503
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                23.7848,
                                65.1503
                            ],
                            "attributes": {
                                "a_Type": "FIAC_6",
                                "a_Speed": 20,
                                "a_C4_Status": "Operational",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "Red.9.52",
                            "contactId": "CA2405",
                            "name": "Red:ISTAR:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:ISTAR:51",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        46.0673,
                                        58.0929
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:ISTAR:51",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        46.0673,
                                        58.0929
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:ISTAR:51",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        46.0673,
                                        58.0929
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                35.1056,
                                63.0615
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_2",
                                "a_Airfield": "_23",
                                "a_Equipment": "_49",
                                "a_Search_Rate": 100,
                                "a_TaskGroup": "CTF-748"
                            }
                        },
                        {
                            "uniqid": "Red.8.53",
                            "contactId": "CA2090",
                            "name": "Red:SSM:52",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SSM:52",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        4.954,
                                        85.5363
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SSM:52",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        4.954,
                                        85.5363
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SSM:52",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        4.954,
                                        85.5363
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                4.954,
                                85.5363
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "None",
                                "a_Type": "SSM_2",
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "Red.9.54",
                            "contactId": "CA2187",
                            "name": "Red:Fixed Asset:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:53",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        48.0462,
                                        67.2815
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:53",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        47.9968,
                                        67.2197
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:53",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        48.0462,
                                        67.2815
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                48.0462,
                                67.2815
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "Red.11.55",
                            "contactId": "CA2039",
                            "name": "Red:C2 Node:54",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:C2 Node:54",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        24.1743,
                                        58.5583
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:C2 Node:54",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        24.1458,
                                        58.6113
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:C2 Node:54",
                                    "typeId": "_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                24.1458,
                                58.6113
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_5",
                                "a_C4_Status": "Degraded",
                                "a_Connections": "_5"
                            }
                        },
                        {
                            "uniqid": "Red.6.56",
                            "contactId": "CA150",
                            "name": "Red:Land Unit:55",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Land Unit:55",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        53.6356,
                                        83.0755
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Land Unit:55",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        53.6356,
                                        83.0755
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Land Unit:55",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        53.6356,
                                        83.0755
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                53.6356,
                                83.0755
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Land Unit_1",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_15",
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "Red.3.57",
                            "contactId": "CA2925",
                            "name": "Red:SAM:56",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:56",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        9.435,
                                        77.3457
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:56",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        9.4201,
                                        77.3979
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:56",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        9.5276,
                                        77.4321
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                9.435,
                                77.3457
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_4",
                                "a_C4_Status": "None",
                                "a_Equipment": "_31",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.10.58",
                            "contactId": "CA930",
                            "name": "Red:Air LOGS:57",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:57",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        52.6991,
                                        66.4729
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:57",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        52.6991,
                                        66.4729
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:57",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        52.6991,
                                        66.4729
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                14.3876,
                                57.6393
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_5",
                                "a_Speed": 220,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "_19",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_5",
                                "a_TaskGroup": "CTF-551"
                            }
                        },
                        {
                            "uniqid": "Red.9.59",
                            "contactId": "CA901",
                            "name": "Red:ISTAR:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:ISTAR:58",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        39.3454,
                                        60.3504
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:ISTAR:58",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        39.4075,
                                        60.4165
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:ISTAR:58",
                                    "typeId": "_air_istar",
                                    "force": "f-red",
                                    "position": [
                                        39.4075,
                                        60.4165
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                22.1345,
                                82.6827
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "None",
                                "a_Type": "ISTAR_1",
                                "a_Airfield": "Red.7.113",
                                "a_Equipment": "_24",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Red.2.60",
                            "contactId": "CA327",
                            "name": "Red:Bomber Squadron:59",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Bomber Squadron:59",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        43.6343,
                                        85.313
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Bomber Squadron:59",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        43.6343,
                                        85.313
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Bomber Squadron:59",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        43.6343,
                                        85.313
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                24.9287,
                                82.1939
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_3",
                                "a_Speed": 220,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Red.7.87",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_31"
                            }
                        },
                        {
                            "uniqid": "Red.3.61",
                            "contactId": "CA2140",
                            "name": "Red:SAM:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:60",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        46.641,
                                        75.3826
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:60",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        46.641,
                                        75.3826
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:60",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        46.641,
                                        75.3826
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                46.641,
                                75.3826
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_2",
                                "a_C4_Status": "None",
                                "a_Equipment": "_23",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.6.62",
                            "contactId": "CA1670",
                            "name": "Red:Fixed Asset:61",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:61",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        14.4431,
                                        61.4677
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:61",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        14.4431,
                                        61.4677
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:61",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        14.4431,
                                        61.4677
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                14.4431,
                                61.4677
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_2"
                            }
                        },
                        {
                            "uniqid": "Red.8.63",
                            "contactId": "CA2493",
                            "name": "Red:Fixed Asset:62",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:62",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        48.5645,
                                        56.2058
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:62",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        48.5645,
                                        56.2058
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:62",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        48.5507,
                                        56.1953
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                48.5645,
                                56.2058
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Red.10.64",
                            "contactId": "CA1021",
                            "name": "Red:Air LOGS:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:63",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        49.7379,
                                        70.6485
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:63",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        49.7379,
                                        70.6485
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:63",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        49.8054,
                                        70.5754
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                21.6368,
                                60.4998
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_6",
                                "a_Speed": 200,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "_9",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_6",
                                "a_TaskGroup": "CTF-476"
                            }
                        },
                        {
                            "uniqid": "Red.3.65",
                            "contactId": "CA2056",
                            "name": "Red:SAM:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:64",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        45.2362,
                                        77.5836
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:64",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        45.2362,
                                        77.5836
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:64",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        45.2362,
                                        77.5836
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                45.2362,
                                77.5836
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_6",
                                "a_C4_Status": "None",
                                "a_Equipment": "_20",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.5.66",
                            "contactId": "CA2761",
                            "name": "Red:Submarine:65",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Submarine:65",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        18.6701,
                                        72.236
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Submarine:65",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        18.6174,
                                        72.2187
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Submarine:65",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        18.5512,
                                        72.2931
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                28.9913,
                                83.4511
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine_1",
                                "a_C4_Status": "None",
                                "a_Equipment": "_34",
                                "a_TaskGroup": "CTF-241"
                            }
                        },
                        {
                            "uniqid": "Red.3.67",
                            "contactId": "CA506",
                            "name": "Red:Fixed Asset:66",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:66",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        37.319,
                                        78.3822
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:66",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        37.238,
                                        78.2956
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:66",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        37.319,
                                        78.3822
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                37.319,
                                78.3822
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_2"
                            }
                        },
                        {
                            "uniqid": "Red.12.68",
                            "contactId": "CA3206",
                            "name": "Red:FIAC:67",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:FIAC:67",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        45.2043,
                                        64.9582
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:FIAC:67",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        45.2043,
                                        64.9582
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:FIAC:67",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-red",
                                    "position": [
                                        45.1928,
                                        64.8957
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                28.9913,
                                83.4511
                            ],
                            "attributes": {
                                "a_Type": "FIAC_5",
                                "a_Speed": 30,
                                "a_C4_Status": "Operational",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-241"
                            }
                        },
                        {
                            "uniqid": "Red.7.69",
                            "contactId": "CA264",
                            "name": "Red:Fixed Asset:68",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:68",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        47.5823,
                                        76.9211
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:68",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        47.587,
                                        76.9223
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:68",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        47.5398,
                                        76.8493
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                47.4924,
                                76.9192
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Red.6.70",
                            "contactId": "CA2863",
                            "name": "Red:Land Unit:69",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Land Unit:69",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        8.898,
                                        68.8511
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Land Unit:69",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        8.898,
                                        68.8511
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Land Unit:69",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        8.826,
                                        68.7744
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                8.898,
                                68.8511
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Type": "Land Unit_2",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_45",
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "Red.10.71",
                            "contactId": "CA233",
                            "name": "Red:Air LOGS:70",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:70",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        43.5184,
                                        83.9333
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:70",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        43.5184,
                                        83.9333
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:70",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        43.5184,
                                        83.9333
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                48.0462,
                                67.2815
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_4",
                                "a_Speed": 200,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Red.9.54",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_5"
                            }
                        },
                        {
                            "uniqid": "Red.11.72",
                            "contactId": "CA2264",
                            "name": "Red:C2 Node:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:C2 Node:71",
                                    "typeId": "_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:C2 Node:71",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        11.431,
                                        64.0723
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:C2 Node:71",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        11.431,
                                        64.0723
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                11.431,
                                64.0723
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_3",
                                "a_C4_Status": "None",
                                "a_Connections": "_1"
                            }
                        },
                        {
                            "uniqid": "Red.5.73",
                            "contactId": "CA604",
                            "name": "Red:Fixed Asset:72",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:72",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        53.7794,
                                        54.4144
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:72",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        53.7448,
                                        54.5116
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:72",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        53.8168,
                                        54.5094
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                53.8129,
                                54.4336
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Red.8.74",
                            "contactId": "CA1602",
                            "name": "Red:SSM:73",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SSM:73",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        52.2868,
                                        63.9252
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SSM:73",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        52.373,
                                        63.9392
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SSM:73",
                                    "typeId": "_land_ssm",
                                    "force": "f-red",
                                    "position": [
                                        52.2868,
                                        63.9252
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                52.2868,
                                63.9252
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "Operational",
                                "a_Type": "SSM_5",
                                "a_Equipment": "_45"
                            }
                        },
                        {
                            "uniqid": "Red.5.75",
                            "contactId": "CA855",
                            "name": "Red:Submarine:74",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Submarine:74",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        34.0033,
                                        84.4682
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Submarine:74",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        34.0517,
                                        84.554
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Submarine:74",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        34.0033,
                                        84.4682
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                28.9913,
                                83.4511
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine_3",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_44",
                                "a_TaskGroup": "CTF-241"
                            }
                        },
                        {
                            "uniqid": "Red.3.76",
                            "contactId": "CA2882",
                            "name": "Red:SAM:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:75",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        4.1087,
                                        80.8626
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:75",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        3.968,
                                        80.9251
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:75",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        4.0478,
                                        80.8605
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                4.0478,
                                80.8605
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_3",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_6",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.13.77",
                            "contactId": "CA2055",
                            "name": "Red:Maritime Minefield:76",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:76",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        11.7588,
                                        75.8588
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:76",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        11.8557,
                                        75.8927
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:76",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                11.8557,
                                75.8927
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_3",
                                "a_C4_Status": "Operational",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "Red.3.78",
                            "contactId": "CA3272",
                            "name": "Red:SAM:77",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:SAM:77",
                                    "typeId": "_land_sam",                                    
                                    "lastUpdate": 1651263200000,
                                    "force": "f-red",
                                    "position": [
                                        24.8411,
                                        55.7904
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:SAM:77",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        24.8107,
                                        55.766
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:SAM:77",
                                    "typeId": "_land_sam",
                                    "force": "f-red",
                                    "position": [
                                        24.8142,
                                        55.8389
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_sam",
                            "condition": "working",
                            "location": [
                                24.8411,
                                55.7904
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM_5",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_41",
                                "a_MEZ_range": 300
                            }
                        },
                        {
                            "uniqid": "Red.5.79",
                            "contactId": "CA2363",
                            "name": "Red:Submarine:78",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Submarine:78",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        34.7004,
                                        70.3721
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Submarine:78",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Submarine:78",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        34.7857,
                                        70.4726
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                28.9913,
                                83.4511
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine_3",
                                "a_C4_Status": "Degraded",
                                "a_Equipment": "_41",
                                "a_TaskGroup": "CTF-241"
                            }
                        },
                        {
                            "uniqid": "Red.9.80",
                            "contactId": "CA458",
                            "name": "Red:Fixed Asset:79",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:79",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        10.0566,
                                        63.457
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:79",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        10.0566,
                                        63.457
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:79",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        10.0566,
                                        63.457
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                10.0566,
                                63.457
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Red.13.81",
                            "contactId": "CA2786",
                            "name": "Red:Maritime Minefield:80",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Maritime Minefield:80",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Maritime Minefield:80",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        16.9975,
                                        69.2433
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Maritime Minefield:80",
                                    "typeId": "_maritime_mine",
                                    "force": "f-red",
                                    "position": [
                                        17.0725,
                                        69.2556
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                16.9975,
                                69.2433
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_5",
                                "a_C4_Status": "Degraded",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "Red.7.82",
                            "contactId": "CA3225",
                            "name": "Red:Fixed Asset:81",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:81",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        31.865,
                                        84.3547
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:81",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        31.9373,
                                        84.4292
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:81",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        31.9769,
                                        84.3408
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                31.9373,
                                84.4292
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Red.7.83",
                            "contactId": "CA1082",
                            "name": "Red:Fixed Asset:82",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:82",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        37.6495,
                                        78.775
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:82",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        37.7135,
                                        78.8679
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:82",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        37.6757,
                                        78.8438
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                37.6757,
                                78.8438
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Red.1.84",
                            "contactId": "CA2796",
                            "name": "Red:Fast Jet Squadron :83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fast Jet Squadron :83",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        23.4905,
                                        77.9429
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fast Jet Squadron :83",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        23.4905,
                                        77.9429
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fast Jet Squadron :83",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        23.4905,
                                        77.9429
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                53.7477,
                                85.2579
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron _3",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "None",
                                "a_Airfield": "Red.6.27",
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "Red.10.85",
                            "contactId": "CA1259",
                            "name": "Red:Air LOGS:84",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:84",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        21.7531,
                                        65.2936
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:84",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        21.7531,
                                        65.2936
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:84",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        21.7055,
                                        65.2957
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                21.6368,
                                60.4998
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_1",
                                "a_Speed": 280,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "_17",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_5",
                                "a_TaskGroup": "CTF-476"
                            }
                        },
                        {
                            "uniqid": "Red.2.86",
                            "contactId": "CA1714",
                            "name": "Red:Bomber Squadron:85",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Bomber Squadron:85",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        36.5371,
                                        58.1439
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Bomber Squadron:85",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        36.4509,
                                        58.1628
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Bomber Squadron:85",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        36.5371,
                                        58.1439
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                53.7477,
                                85.2579
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_4",
                                "a_Speed": 260,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Red.6.27",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "Red.7.87",
                            "contactId": "CA1501",
                            "name": "Red:Fixed Asset:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:86",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        24.9222,
                                        82.1586
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:86",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        24.8838,
                                        82.2433
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:86",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        24.9287,
                                        82.1939
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                24.9287,
                                82.1939
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "Red.6.88",
                            "contactId": "CA1482",
                            "name": "Red:Land Unit:87",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Land Unit:87",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        16.4959,
                                        54.6741
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Land Unit:87",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        16.4959,
                                        54.6741
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Land Unit:87",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        16.4945,
                                        54.6286
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                16.4959,
                                54.6741
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Type": "Land Unit_4",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_0",
                                "a_Equipment": "_37"
                            }
                        },
                        {
                            "uniqid": "Red.1.89",
                            "contactId": "CA2469",
                            "name": "Red:Fast Jet Squadron :88",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fast Jet Squadron :88",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        48.8531,
                                        69.065
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fast Jet Squadron :88",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        48.8686,
                                        69.016
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fast Jet Squadron :88",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        48.7659,
                                        69.0846
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                24.9287,
                                82.1939
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron _2",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "None",
                                "a_Airfield": "Red.7.87",
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "Red.7.90",
                            "contactId": "CA1108",
                            "name": "Red:Fixed Asset:89",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:89",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        7.3724,
                                        84.2831
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:89",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        7.4011,
                                        84.2078
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:89",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        7.3736,
                                        84.2875
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                7.3724,
                                84.2831
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Red.5.91",
                            "contactId": "CA561",
                            "name": "Red:Submarine:90",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Submarine:90",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        11.0989,
                                        70.0415
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Submarine:90",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red",
                                    "position": [
                                        11.0989,
                                        70.0415
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Submarine:90",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                21.6368,
                                60.4998
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine_3",
                                "a_C4_Status": "None",
                                "a_Equipment": "_32",
                                "a_TaskGroup": "CTF-476"
                            }
                        },
                        {
                            "uniqid": "Red.8.92",
                            "contactId": "CA835",
                            "name": "Red:Fixed Asset:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:91",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        41.583,
                                        72.5265
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:91",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        41.583,
                                        72.5265
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:91",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        41.6078,
                                        72.573
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                41.583,
                                72.5265
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Fixed Asset_2"
                            }
                        },
                        {
                            "uniqid": "Red.6.93",
                            "contactId": "CA97",
                            "name": "Red:Land Unit:92",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Land Unit:92",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        23.5196,
                                        76.9741
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Land Unit:92",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        23.5196,
                                        76.9741
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Land Unit:92",
                                    "typeId": "_land_unit",
                                    "force": "f-red",
                                    "position": [
                                        23.5196,
                                        76.9741
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                23.5196,
                                76.9741
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Type": "Land Unit_3",
                                "a_C4_Status": "None",
                                "a_Size": "Unit size_31",
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "Red.11.94",
                            "contactId": "CA2531",
                            "name": "Red:C2 Node:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:C2 Node:93",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        45.9827,
                                        78.3624
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:C2 Node:93",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        46.0847,
                                        78.4753
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:C2 Node:93",
                                    "typeId": "_land_c2",
                                    "force": "f-red",
                                    "position": [
                                        46.0718,
                                        78.4396
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                46.0718,
                                78.4396
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_5",
                                "a_C4_Status": "Operational",
                                "a_Connections": "_41"
                            }
                        },
                        {
                            "uniqid": "Red.10.95",
                            "contactId": "CA2949",
                            "name": "Red:Air LOGS:94",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Air LOGS:94",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        29.2945,
                                        54.358
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Air LOGS:94",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        29.2387,
                                        54.2795
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Air LOGS:94",
                                    "typeId": "_air_logs",
                                    "force": "f-red",
                                    "position": [
                                        29.2387,
                                        54.2795
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                22.1345,
                                82.6827
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_2",
                                "a_Speed": 260,
                                "a_C4_Status": "None",
                                "a_Airfield": "Red.7.113",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "Red.2.96",
                            "contactId": "CA1376",
                            "name": "Red:Bomber Squadron:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Bomber Squadron:95",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        25.5972,
                                        77.6141
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Bomber Squadron:95",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        25.4864,
                                        77.523
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Bomber Squadron:95",
                                    "typeId": "_air_bomber",
                                    "force": "f-red",
                                    "position": [
                                        25.5742,
                                        77.5118
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                22.1345,
                                82.6827
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_5",
                                "a_Speed": 280,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Red.7.113",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "Red.12.97",
                            "contactId": "CA3214",
                            "name": "Red:Fixed Asset:96",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fixed Asset:96",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        14.5857,
                                        63.596
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fixed Asset:96",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        14.514,
                                        63.5945
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fixed Asset:96",
                                    "typeId": "_land_asset",
                                    "force": "f-red",
                                    "position": [
                                        14.514,
                                        63.5945
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                14.514,
                                63.5945
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_1"
                            }
                        },
                        {
                            "uniqid": "Red.1.98",
                            "contactId": "CA3364",
                            "name": "Red:Fast Jet Squadron :97",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:Fast Jet Squadron :97",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        42.101,
                                        63.0473
                                    ]
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:Fast Jet Squadron :97",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        42.101,
                                        63.0473
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:Fast Jet Squadron :97",
                                    "typeId": "_air_fighter",
                                    "force": "f-red",
                                    "position": [
                                        42.101,
                                        63.0473
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                37.505,
                                57.0225
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron _2",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "_29",
                                "a_Equipment": "_12",
                                "a_TaskGroup": "CTF-853"
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
                    "assets": [
                        {
                            "uniqid": "Green.6.26",
                            "contactId": "CA1842",
                            "name": "Green:Fixed Asset:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fixed Asset:25",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        26.4663,
                                        37.7143
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fixed Asset:25",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        26.4663,
                                        37.7143
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fixed Asset:25",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        26.4663,
                                        37.7143
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                26.4663,
                                37.7143
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_3"
                            }
                        },
                        {
                            "uniqid": "Green.11.27",
                            "contactId": "CA3010",
                            "name": "Green:C2 Node:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:C2 Node:26",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        24.6826,
                                        23.175
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:C2 Node:26",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        24.7104,
                                        23.1151
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:C2 Node:26",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        24.6826,
                                        23.175
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                24.6826,
                                23.175
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_5",
                                "a_C4_Status": "Operational",
                                "a_Connections": "_47"
                            }
                        },
                        {
                            "uniqid": "Green.10.28",
                            "contactId": "CA1404",
                            "name": "Green:Air LOGS:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Air LOGS:27",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        7.6918,
                                        24.7171
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Air LOGS:27",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        7.6486,
                                        24.7154
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Air LOGS:27",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        7.6918,
                                        24.7171
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                20.432,
                                41.3013
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_4",
                                "a_Speed": 220,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Green.2.268",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "Green.13.29",
                            "contactId": "CA248",
                            "name": "Green:Maritime Minefield:28",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Maritime Minefield:28",
                                    "typeId": "_maritime_mine",
                                    "force": "f-green",
                                    "position": [
                                        19.639,
                                        50.3947
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Maritime Minefield:28",
                                    "typeId": "_maritime_mine",
                                    "force": "f-green",
                                    "position": [
                                        19.639,
                                        50.3947
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Maritime Minefield:28",
                                    "typeId": "_maritime_mine",
                                    "force": "f-green",
                                    "position": [
                                        19.639,
                                        50.3947
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_maritime_mine",
                            "condition": "working",
                            "location": [
                                19.639,
                                50.3947
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield_6",
                                "a_C4_Status": "None",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "Green.7.30",
                            "contactId": "CA2674",
                            "name": "Green:Fixed Asset:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fixed Asset:29",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        21.0247,
                                        52.0864
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fixed Asset:29",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        21.0247,
                                        52.0864
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fixed Asset:29",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        21.0247,
                                        52.0864
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                21.0247,
                                52.0864
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_4"
                            }
                        },
                        {
                            "uniqid": "Green.7.31",
                            "contactId": "CA550",
                            "name": "Green:Fixed Asset:30",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fixed Asset:30",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        27.8516,
                                        41.9181
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fixed Asset:30",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        27.8467,
                                        41.9414
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fixed Asset:30",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        27.9138,
                                        42
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                27.9138,
                                42
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Green.6.32",
                            "contactId": "CA444",
                            "name": "Green:Land Unit:31",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Land Unit:31",
                                    "typeId": "_land_unit",
                                    "force": "f-green",
                                    "position": [
                                        14.4156,
                                        47.3352
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Land Unit:31",
                                    "typeId": "_land_unit",
                                    "force": "f-green",
                                    "position": [
                                        14.4156,
                                        47.3352
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Land Unit:31",
                                    "typeId": "_land_unit",
                                    "force": "f-green",
                                    "position": [
                                        14.4156,
                                        47.3352
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_unit",
                            "condition": "working",
                            "location": [
                                14.4156,
                                47.3352
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Type": "Land Unit_5",
                                "a_C4_Status": "Degraded",
                                "a_Size": "Unit size_26",
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "Green.9.33",
                            "contactId": "CA2364",
                            "name": "Green:ISTAR:32",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:ISTAR:32",
                                    "typeId": "_air_istar",
                                    "force": "f-green",
                                    "position": [
                                        27.3643,
                                        33.7654
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:ISTAR:32",
                                    "typeId": "_air_istar",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:ISTAR:32",
                                    "typeId": "_air_istar",
                                    "force": "f-green",
                                    "position": [
                                        27.3643,
                                        33.7654
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                10.8875,
                                29.6706
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Degraded",
                                "a_Type": "ISTAR_1",
                                "a_Airfield": "Green.7.374",
                                "a_Equipment": "_28",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Green.1.34",
                            "contactId": "CA2612",
                            "name": "Green:Fixed Asset:33",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fixed Asset:33",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        16.6517,
                                        23.7708
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fixed Asset:33",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        16.6126,
                                        23.8086
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fixed Asset:33",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        16.6126,
                                        23.8086
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                16.6126,
                                23.8086
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "Green.12.35",
                            "contactId": "CA2013",
                            "name": "Green:FIAC:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:FIAC:34",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-green",
                                    "position": [
                                        8.5272,
                                        34.6833
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:FIAC:34",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-green",
                                    "position": [
                                        8.506,
                                        34.7293
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:FIAC:34",
                                    "typeId": "_maritime_fiac",
                                    "force": "f-green",
                                    "position": [
                                        8.506,
                                        34.7293
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_maritime_fiac",
                            "condition": "working",
                            "location": [
                                20.8273,
                                51.7642
                            ],
                            "attributes": {
                                "a_Type": "FIAC_6",
                                "a_Speed": 15,
                                "a_C4_Status": "Operational",
                                "a_Number_FIACs": 100,
                                "a_TaskGroup": "CTF-490"
                            }
                        },
                        {
                            "uniqid": "Green.5.36",
                            "contactId": "CA1127",
                            "name": "Green:Submarine:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Submarine:35",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-green",
                                    "position": [
                                        8.3484,
                                        45.1648
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Submarine:35",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-green",
                                    "position": [
                                        8.3928,
                                        45.1287
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Submarine:35",
                                    "typeId": "_maritime_submarine",
                                    "force": "f-green",
                                    "position": [
                                        8.3484,
                                        45.1648
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_submarine",
                            "condition": "working",
                            "location": [
                                20.8273,
                                51.7642
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine_3",
                                "a_C4_Status": "Operational",
                                "a_Equipment": "_1",
                                "a_TaskGroup": "CTF-490"
                            }
                        },
                        {
                            "uniqid": "Green.10.37",
                            "contactId": "CA1844",
                            "name": "Green:Air LOGS:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Air LOGS:36",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        4.1523,
                                        47.2572
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Air LOGS:36",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        4.245,
                                        47.1726
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Air LOGS:36",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        4.217,
                                        47.1208
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                13.2943,
                                41.6967
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_4",
                                "a_Speed": 260,
                                "a_C4_Status": "None",
                                "a_Airfield": "Green.5.304",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_8"
                            }
                        },
                        {
                            "uniqid": "Green.9.38",
                            "contactId": "CA482",
                            "name": "Green:ISTAR:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:ISTAR:37",
                                    "typeId": "_air_istar",
                                    "force": "f-green",
                                    "position": [
                                        8.5464,
                                        44.9415
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:ISTAR:37",
                                    "typeId": "_air_istar",
                                    "force": "f-green",
                                    "position": [
                                        8.459,
                                        44.8987
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:ISTAR:37",
                                    "typeId": "_air_istar",
                                    "force": "f-green",
                                    "position": [
                                        8.459,
                                        44.8987
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_istar",
                            "condition": "working",
                            "location": [
                                12.7233,
                                34.6197
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Type": "ISTAR_4",
                                "a_Airfield": "Green.8.77",
                                "a_Equipment": "_4",
                                "a_Search_Rate": 100
                            }
                        },
                        {
                            "uniqid": "Green.2.39",
                            "contactId": "CA3146",
                            "name": "Green:Bomber Squadron:38",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Bomber Squadron:38",
                                    "typeId": "_air_bomber",
                                    "force": "f-green",
                                    "position": [
                                        9.2185,
                                        33.8527
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Bomber Squadron:38",
                                    "typeId": "_air_bomber",
                                    "force": "f-green",
                                    "position": [
                                        9.2998,
                                        33.9392
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Bomber Squadron:38",
                                    "typeId": "_air_bomber",
                                    "force": "f-green",
                                    "position": [
                                        9.2998,
                                        33.9392
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_bomber",
                            "condition": "working",
                            "location": [
                                25.0334,
                                24.093
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron_3",
                                "a_Speed": 220,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Green.10.218",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "Green.10.40",
                            "contactId": "CA1102",
                            "name": "Green:Air LOGS:39",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Air LOGS:39",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        3.1025,
                                        30.9424
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Air LOGS:39",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        3.1008,
                                        30.8471
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Air LOGS:39",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        3.0866,
                                        30.8881
                                    ]
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                17.307,
                                22.2196
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_2",
                                "a_Speed": 220,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "Green.4.219",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_5"
                            }
                        },
                        {
                            "uniqid": "Green.1.41",
                            "contactId": "CA1945",
                            "name": "Green:Fixed Asset:40",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fixed Asset:40",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        12.0226,
                                        36.2628
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fixed Asset:40",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        12.0226,
                                        36.2628
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fixed Asset:40",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        12.0226,
                                        36.2628
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                12.0226,
                                36.2628
                            ],
                            "attributes": {
                                "a_C4_Status": "Operational",
                                "a_Type": "Fixed Asset_5"
                            }
                        },
                        {
                            "uniqid": "Green.5.42",
                            "contactId": "CA3351",
                            "name": "Green:Fixed Asset:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fixed Asset:41",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        25.3124,
                                        44.8059
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fixed Asset:41",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        25.3124,
                                        44.8059
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fixed Asset:41",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        25.3124,
                                        44.8059
                                    ]
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                25.3124,
                                44.8059
                            ],
                            "attributes": {
                                "a_C4_Status": "None",
                                "a_Type": "Fixed Asset_6"
                            }
                        },
                        {
                            "uniqid": "Green.11.43",
                            "contactId": "CA1848",
                            "name": "Green:C2 Node:42",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:C2 Node:42",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        22.9265,
                                        28.3015
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:C2 Node:42",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        22.9486,
                                        28.2287
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:C2 Node:42",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        22.9326,
                                        28.3691
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                22.9265,
                                28.3015
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_2",
                                "a_C4_Status": "Degraded",
                                "a_Connections": "_18"
                            }
                        },
                        {
                            "uniqid": "Green.2.44",
                            "contactId": "CA2531",
                            "name": "Green:Fixed Asset:43",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fixed Asset:43",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        12.9064,
                                        44.4775
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fixed Asset:43",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        12.9064,
                                        44.4775
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fixed Asset:43",
                                    "typeId": "_land_asset",
                                    "force": "f-green",
                                    "position": [
                                        12.9064,
                                        44.4775
                                    ]
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_asset",
                            "condition": "working",
                            "location": [
                                12.9064,
                                44.4775
                            ],
                            "attributes": {
                                "a_C4_Status": "Degraded",
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "Green.1.45",
                            "contactId": "CA1802",
                            "name": "Green:Fast Jet Squadron :44",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Fast Jet Squadron :44",
                                    "typeId": "_air_fighter",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Fast Jet Squadron :44",
                                    "typeId": "_air_fighter",
                                    "force": "f-green",
                                    "position": [
                                        15.0187,
                                        51.8866
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Fast Jet Squadron :44",
                                    "typeId": "_air_fighter",
                                    "force": "f-green",
                                    "position": [
                                        15.0187,
                                        51.8866
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_fighter",
                            "condition": "working",
                            "location": [
                                2.8115,
                                28.9223
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Fast Jet Squadron _4",
                                "a_Number_Aircraft": 10,
                                "a_C4_Status": "Operational",
                                "a_Airfield": "_31",
                                "a_Equipment": "_3",
                                "a_TaskGroup": "CTF-648"
                            }
                        },
                        {
                            "uniqid": "Green.8.46",
                            "contactId": "CA912",
                            "name": "Green:SSM:45",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:SSM:45",
                                    "typeId": "_land_ssm",
                                    "force": "f-green",
                                    "position": [
                                        4.1987,
                                        43.0784
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:SSM:45",
                                    "typeId": "_land_ssm",
                                    "force": "f-green",
                                    "position": [
                                        4.1866,
                                        43.0578
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:SSM:45",
                                    "typeId": "_land_ssm",
                                    "force": "f-green"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "_land_ssm",
                            "condition": "working",
                            "location": [
                                4.1987,
                                43.0784
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_C4_Status": "None",
                                "a_Type": "SSM_2",
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "Green.11.47",
                            "contactId": "CA645",
                            "name": "Green:C2 Node:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:C2 Node:46",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        22.9297,
                                        50.0688
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:C2 Node:46",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        22.8844,
                                        49.9743
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:C2 Node:46",
                                    "typeId": "_land_c2",
                                    "force": "f-green",
                                    "position": [
                                        22.8844,
                                        49.9743
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_land_c2",
                            "condition": "working",
                            "location": [
                                22.8844,
                                49.9743
                            ],
                            "attributes": {
                                "a_Type": "C2 Node_4",
                                "a_C4_Status": "Degraded",
                                "a_Connections": "_42"
                            }
                        },
                        {
                            "uniqid": "Green.10.48",
                            "contactId": "CA1335",
                            "name": "Green:Air LOGS:47",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Air LOGS:47",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        16.4725,
                                        46.2294
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Air LOGS:47",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        16.5459,
                                        46.3082
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Air LOGS:47",
                                    "typeId": "_air_logs",
                                    "force": "f-green",
                                    "position": [
                                        16.5459,
                                        46.3082
                                    ]
                                }
                            ],
                            "health": 100,
                            "platformTypeId": "_air_logs",
                            "condition": "working",
                            "location": [
                                10.7894,
                                27.0201
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS_5",
                                "a_Speed": 240,
                                "a_C4_Status": "Degraded",
                                "a_Airfield": "Green.7.74",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_24"
                            }
                        },
                        {
                            "uniqid": "Green.4.49",
                            "contactId": "CA1867",
                            "name": "Green:Ship:48",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Green:Ship:48",
                                    "typeId": "_maritime_ship",
                                    "force": "f-green",
                                    "position": [
                                        5.7632,
                                        50.2303
                                    ]
                                },
                                {
                                    "by": "f-red",
                                    "name": "Green:Ship:48",
                                    "typeId": "_maritime_ship",
                                    "force": "f-green",
                                    "position": [
                                        5.7632,
                                        50.2303
                                    ]
                                },
                                {
                                    "by": "f-white",
                                    "name": "Green:Ship:48",
                                    "typeId": "_maritime_ship",
                                    "force": "f-green",
                                    "position": [
                                        5.7684,
                                        50.2955
                                    ]
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "_maritime_ship",
                            "condition": "working",
                            "location": [
                                17.8265,
                                45.8454
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Ship_6",
                                "a_C4_Status": "Degraded",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_22",
                                "a_TaskGroup": "CTF-614"
                            }
                        }
                    ],
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
                    "assets": [],
                    "color": "#FCFBEE",
                    "dirty": false,
                    "iconURL": "default_img/forceDefault.png",
                    "name": "White",
                    "overview": "An overview written here.",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
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
                            [75, -20], [-10, 140]
                        ],
                        "maxZoom": 7,
                        "minZoom": 3,
                        "tileLayer": {
                            "attribution": "Generated by QTiles g./arabian_sea/{z}/{x}/{y}.png ",
                            "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
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
                    "name": "Fast Jet Squadron ",
                    "icon": "n_",
                    "sidc": "S*A*MFF---",
                    "conditions": [],
                    "states": [],
                    "uniqid": "_air_fighter",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Type",
                        "a_Number_Aircraft",
                        "a_C4_Status",
                        "a_Airfield",
                        "a_Equipment",
                        "a_TaskGroup"
                    ],
                    "travelMode": "air"
                },
                {
                    "name": "Bomber Squadron",
                    "icon": "n_",
                    "sidc": "S*A*MFB---",
                    "attributeTypeIds": [
                        "a_Type",
                        "a_Speed",
                        "a_C4_Status",
                        "a_Airfield",
                        "a_Number_Aircraft",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_air_bomber",
                    "travelMode": "air"
                },
                {
                    "name": "SAM",
                    "icon": "n_",
                    "sidc": "S*G*UCDMM-",
                    "attributeTypeIds": [
                        "a_Number_Missiles",
                        "a_Type",
                        "a_C4_Status",
                        "a_Equipment",
                        "a_MEZ_range",
                        "a_C4_Status"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "Ship",
                    "icon": "n_",
                    "sidc": "S*S*CLDD--",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Type",
                        "a_C4_Status",
                        "a_MEZ_range",
                        "a_Equipment",
                        "a_TaskGroup"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_maritime_ship",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine",
                    "icon": "n_",
                    "sidc": "S*U*S-----",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Type",
                        "a_C4_Status",
                        "a_Equipment",
                        "a_TaskGroup"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit",
                    "icon": "n_",
                    "sidc": "S*G*UCIZ--",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Type",
                        "a_C4_Status",
                        "a_Size",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_land_unit",
                    "travelMode": "land"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_",
                    "sidc": "G*M*SF----",
                    "attributeTypeIds": [
                        "a_C4_Status",
                        "a_Type"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_land_asset",
                    "travelMode": "land"
                },
                {
                    "name": "SSM",
                    "icon": "n_",
                    "sidc": "S*A*WMSS--",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Missiles",
                        "a_C4_Status",
                        "a_Type",
                        "a_Equipment",
                        "a_C4_Status"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_land_ssm",
                    "travelMode": "land"
                },
                {
                    "name": "ISTAR",
                    "icon": "n_",
                    "sidc": "S*A*MFR---",
                    "attributeTypeIds": [
                        "a_Speed",
                        "a_Number_Aircraft",
                        "a_C4_Status",
                        "a_Type",
                        "a_Airfield",
                        "a_Equipment",
                        "a_Search_Rate",
                        "a_TaskGroup"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_air_istar",
                    "travelMode": "air"
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_",
                    "sidc": "S*A*MFC---",
                    "attributeTypeIds": [
                        "a_Type",
                        "a_Speed",
                        "a_C4_Status",
                        "a_Airfield",
                        "a_Number_Aircraft",
                        "a_Equipment",
                        "a_TaskGroup"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_air_logs",
                    "travelMode": "air"
                },
                {
                    "name": "C2 Node",
                    "icon": "n_",
                    "sidc": "S*G*UH----",
                    "attributeTypeIds": [
                        "a_Type",
                        "a_C4_Status",
                        "a_Connections",
                        "a_C4_Status"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC",
                    "icon": "n_",
                    "sidc": "S*S*CPSUG-",
                    "attributeTypeIds": [
                        "a_Type",
                        "a_Speed",
                        "a_C4_Status",
                        "a_Number_FIACs"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Maritime Minefield",
                    "icon": "n_",
                    "sidc": "S*U*WM----",
                    "attributeTypeIds": [
                        "a_Density",
                        "a_Type",
                        "a_C4_Status",
                        "a_Minefield_Passable"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "_maritime_mine",
                    "travelMode": "sea"
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
                    "attrId": "a_C4_Status",
                    "attrType": "AttributeTypeEnum",
                    "defaultValue": "Operational",
                    "description": "C4 Status",
                    "values": ["None", "Degraded", "Operational"],
                    "editableByPlayer": false,
                    "name": "C4 Status"
                }, {
                    "attrId": "a_Minefield_Passable",
                    "attrType": "AttributeTypeEnum",
                    "defaultValue": "Operational",
                    "description": "If minefield is passable",
                    "values": ["No", "Limited", "Yes"],
                    "editableByPlayer": false,
                    "name": "Minefield Status"
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
                    "attrId": "a_TaskGroup",
                    "attrType": "AttributeTypeString",
                    "description": "Host Task Group",
                    "editableByPlayer": false,
                    "name": "Task Group"
                },
                {
                    "attrId": "a_Airfield",
                    "attrType": "AttributeTypeString",
                    "description": "Host airfield (id)",
                    "editableByPlayer": false,
                    "name": "Airfield"
                },
                {
                    "attrId": "a_Search_Rate",
                    "attrType": "AttributeTypeNumber",
                    "description": "Search rate km2/aircraft/hr",
                    "editableByPlayer": false,
                    "defaultValue": 100,
                    "name": "SearchRate"
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
                                        "SOF Activity",
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
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
                                        "SOF",
                                        "Sea Denial",
                                        "Raid",
                                        "LAND"
                                    ],
                                    "uniqid": "f-blue-Land-EW Attack",
                                    "template": "Land--EWAttack",
                                    "events": [
                                        "i-start",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true
                                },
                                {
                                    "name": "Land Close Combat",
                                    "actId": "LAND",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-blue-Land-Land Close Combat",
                                    "template": "Land--Activity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Combat Location",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "name": "Raid",
                                    "actId": "Raid",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-blue-Land-Raid",
                                    "template": "Land--Activity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Raid-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Raid Location",
                                            "optional": false,
                                            "uniqid": "Raid-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Raid-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Land--Resupply",
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
                                    "template": "f-blue--Land--MissileStrike",
                                    "events": [
                                        "i-end"
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
                                    "events": [
                                        "i-end"
                                    ],
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
                                    "template": "Maritime--Activity",
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
                                        "SOF Activity",
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
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
                                        "SOF",
                                        "Sea Denial",
                                        "Raid",
                                        "LAND"
                                    ],
                                    "uniqid": "f-blue-Maritime-EW Attack",
                                    "template": "Maritime--EWAttack",
                                    "events": [
                                        "i-start",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true
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
                                    "template": "Maritime--Activity",
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Maritime--Activity",
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Maritime--Resupply",
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
                                    "template": "f-blue--Maritime--MissileStrike",
                                    "events": [
                                        "i-end"
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
                                    "events": [
                                        "i-end"
                                    ],
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
                                    "name": "Air-Air Refuel",
                                    "actId": "AAR",
                                    "interactsWith": [
                                        "EW",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-blue-Air-Air-Air Refuel",
                                    "template": "Air--AirToAir",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Air-Air Refuel-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "AAR at this location",
                                            "optional": false,
                                            "uniqid": "Air-Air Refuel-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Air-Air Refuel-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Defensive Counter Air",
                                    "actId": "DCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-blue-Air-Defensive Counter Air",
                                    "template": "Air--Activity",
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
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
                                },
                                {
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "SOF Activity",
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
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
                                        "SOF",
                                        "Sea Denial",
                                        "Raid",
                                        "LAND"
                                    ],
                                    "uniqid": "f-blue-Air-EW Attack",
                                    "template": "Air--EWAttack",
                                    "events": [
                                        "i-start",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "actId": "OCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-blue-Air-Offensive Counter Air",
                                    "template": "Air--Activity",
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
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Air--Resupply",
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
                                    "template": "f-blue--Air--MissileStrike",
                                    "events": [
                                        "i-random"
                                    ],
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
                                    "template": "Air--Activity",
                                    "events": [
                                        "i-random"
                                    ],
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
                                    "events": [
                                        "i-random"
                                    ],
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
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-end"
                                    ],
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
                            "category": "Cyber",
                            "activities": [
                                {
                                    "name": "Area Activity",
                                    "actId": "AreaActivity",
                                    "interactsWith": [],
                                    "uniqid": "f-blue-Cyber-Area Activity",
                                    "template": "Cyber--AreaEffects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Area of effect",
                                            "optional": false,
                                            "uniqid": "Area Activity-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Targeted Activity",
                                    "actId": "Activity",
                                    "interactsWith": [],
                                    "uniqid": "f-blue-Cyber-Targeted Activity",
                                    "template": "Cyber--Effects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Space",
                            "activities": [
                                {
                                    "name": "Area Activity",
                                    "actId": "AreaActivity",
                                    "interactsWith": [],
                                    "uniqid": "f-blue-Space-Area Activity",
                                    "template": "Space--AreaEffects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Area of effect",
                                            "optional": false,
                                            "uniqid": "Area Activity-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Targeted Activity",
                                    "actId": "Activity",
                                    "interactsWith": [],
                                    "uniqid": "f-blue-Space-Targeted Activity",
                                    "template": "Space--Effects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Info Ops",
                            "activities": [
                                {
                                    "name": "Area Activity",
                                    "actId": "AreaActivity",
                                    "interactsWith": [],
                                    "uniqid": "f-blue-Info Ops-Area Activity",
                                    "template": "Info Ops--AreaEffects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Area of effect",
                                            "optional": false,
                                            "uniqid": "Area Activity-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Targeted Activity",
                                    "actId": "Activity",
                                    "interactsWith": [],
                                    "uniqid": "f-blue-Info Ops-Targeted Activity",
                                    "template": "Info Ops--Effects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "SOF",
                            "activities": [
                                {
                                    "name": "Activity",
                                    "actId": "SOF Activity",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-blue-SOF-Activity",
                                    "template": "SOF--SOFActivity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Effect Location",
                                            "optional": false,
                                            "uniqid": "Activity-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Activity-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                        "SOF Activity",
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
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
                                        "SOF",
                                        "Sea Denial",
                                        "Raid",
                                        "LAND"
                                    ],
                                    "uniqid": "f-red-Land-EW Attack",
                                    "template": "Land--EWAttack",
                                    "events": [
                                        "i-start",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true
                                },
                                {
                                    "name": "Land Close Combat",
                                    "actId": "LAND",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-red-Land-Land Close Combat",
                                    "template": "Land--Activity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Combat Location",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "name": "Raid",
                                    "actId": "Raid",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-red-Land-Raid",
                                    "template": "Land--Activity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Raid-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Raid Location",
                                            "optional": false,
                                            "uniqid": "Raid-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Raid-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Land--Resupply",
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
                                    "template": "f-red--Land--MissileStrike",
                                    "events": [
                                        "i-end"
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
                                    "events": [
                                        "i-end"
                                    ],
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
                                    "template": "Maritime--Activity",
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
                                        "SOF Activity",
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
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
                                        "SOF",
                                        "Sea Denial",
                                        "Raid",
                                        "LAND"
                                    ],
                                    "uniqid": "f-red-Maritime-EW Attack",
                                    "template": "Maritime--EWAttack",
                                    "events": [
                                        "i-start",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true
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
                                    "template": "Maritime--Activity",
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Maritime--Activity",
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Maritime--Resupply",
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
                                    "template": "Maritime--Activity",
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Area",
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
                                    "template": "f-red--Maritime--MissileStrike",
                                    "events": [
                                        "i-end"
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
                                    "events": [
                                        "i-end"
                                    ],
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
                                    "name": "Air-Air Refuel",
                                    "actId": "AAR",
                                    "interactsWith": [
                                        "EW",
                                        "FIAC",
                                        "DCA",
                                        "OCA"
                                    ],
                                    "uniqid": "f-red-Air-Air-Air Refuel",
                                    "template": "Air--AirToAir",
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Air-Air Refuel-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "AAR at this location",
                                            "optional": false,
                                            "uniqid": "Air-Air Refuel-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Air-Air Refuel-2"
                                        }
                                    ]
                                },
                                {
                                    "name": "Defensive Counter Air",
                                    "actId": "DCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-red-Air-Defensive Counter Air",
                                    "template": "Air--Activity",
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
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
                                },
                                {
                                    "name": "EW Attack",
                                    "actId": "EW",
                                    "interactsWith": [
                                        "SOF Activity",
                                        "BMD-MEZ",
                                        "SAM-MEZ",
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
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
                                        "SOF",
                                        "Sea Denial",
                                        "Raid",
                                        "LAND"
                                    ],
                                    "uniqid": "f-red-Air-EW Attack",
                                    "template": "Air--EWAttack",
                                    "events": [
                                        "i-start",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-random",
                                        "i-end"
                                    ],
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
                                    "spatialPerception": true
                                },
                                {
                                    "name": "Offensive Counter Air",
                                    "actId": "OCA",
                                    "interactsWith": [
                                        "STRIKE",
                                        "EW",
                                        "ISTAR",
                                        "PATRL",
                                        "AAR",
                                        "RESUPP",
                                        "TRANSIT",
                                        "DCA",
                                        "OCA",
                                        "SoffS",
                                        "SEAD",
                                        "TST"
                                    ],
                                    "uniqid": "f-red-Air-Offensive Counter Air",
                                    "template": "Air--Activity",
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
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "Air--Resupply",
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
                                    "template": "f-red--Air--MissileStrike",
                                    "events": [
                                        "i-random"
                                    ],
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
                                    "template": "Air--Activity",
                                    "events": [
                                        "i-random"
                                    ],
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
                                    "events": [
                                        "i-random"
                                    ],
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
                                    "spatialHealth": true
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
                                    "events": [
                                        "i-end"
                                    ],
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
                            "category": "Cyber",
                            "activities": [
                                {
                                    "name": "Area Activity",
                                    "actId": "AreaActivity",
                                    "interactsWith": [],
                                    "uniqid": "f-red-Cyber-Area Activity",
                                    "template": "Cyber--AreaEffects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Area of effect",
                                            "optional": false,
                                            "uniqid": "Area Activity-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Targeted Activity",
                                    "actId": "Activity",
                                    "interactsWith": [],
                                    "uniqid": "f-red-Cyber-Targeted Activity",
                                    "template": "Cyber--Effects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Space",
                            "activities": [
                                {
                                    "name": "Area Activity",
                                    "actId": "AreaActivity",
                                    "interactsWith": [],
                                    "uniqid": "f-red-Space-Area Activity",
                                    "template": "Space--AreaEffects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Area of effect",
                                            "optional": false,
                                            "uniqid": "Area Activity-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Targeted Activity",
                                    "actId": "Activity",
                                    "interactsWith": [],
                                    "uniqid": "f-red-Space-Targeted Activity",
                                    "template": "Space--Effects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "Info Ops",
                            "activities": [
                                {
                                    "name": "Area Activity",
                                    "actId": "AreaActivity",
                                    "interactsWith": [],
                                    "uniqid": "f-red-Info Ops-Area Activity",
                                    "template": "Info Ops--AreaEffects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polygon",
                                            "name": "Area of effect",
                                            "optional": false,
                                            "uniqid": "Area Activity-0"
                                        }
                                    ]
                                },
                                {
                                    "name": "Targeted Activity",
                                    "actId": "Activity",
                                    "interactsWith": [],
                                    "uniqid": "f-red-Info Ops-Targeted Activity",
                                    "template": "Info Ops--Effects",
                                    "events": [
                                        "i-start",
                                        "i-random",
                                        "i-end"
                                    ]
                                }
                            ]
                        },
                        {
                            "category": "SOF",
                            "activities": [
                                {
                                    "name": "Activity",
                                    "actId": "SOF Activity",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-red-SOF-Activity",
                                    "template": "SOF--SOFActivity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Activity-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Effect Location",
                                            "optional": false,
                                            "uniqid": "Activity-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Activity-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "name": "Land Close Combat",
                                    "actId": "LAND",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-green-Land-Land Close Combat",
                                    "template": "Land--Activity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Combat Location",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Land Close Combat-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "name": "Raid",
                                    "actId": "Raid",
                                    "interactsWith": [
                                        "EW"
                                    ],
                                    "uniqid": "f-green-Land-Raid",
                                    "template": "Land--Activity",
                                    "events": [
                                        "i-end"
                                    ],
                                    "geometries": [
                                        {
                                            "aType": "Polyline",
                                            "name": "Route out",
                                            "optional": false,
                                            "uniqid": "Raid-0"
                                        },
                                        {
                                            "aType": "Polygon",
                                            "name": "Raid Location",
                                            "optional": false,
                                            "uniqid": "Raid-1"
                                        },
                                        {
                                            "aType": "Polyline",
                                            "name": "Route back",
                                            "optional": false,
                                            "uniqid": "Raid-2"
                                        }
                                    ],
                                    "spatialPerception": true,
                                    "spatialHealth": true
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
                                    "template": "f-green--Land--MissileStrike",
                                    "events": [
                                        "i-end"
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
                                    "events": [
                                        "i-end"
                                    ],
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
                                    "template": "f-green--Maritime--MissileStrike",
                                    "events": [
                                        "i-end"
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
                                    "events": [
                                        "i-end"
                                    ],
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
                                    "events": [
                                        "i-end"
                                    ],
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
                        "type": "object",
                        "title": "Adjudication Outcomes",
                        "format": "grid",
                        "required": [
                            "narrative",
                            "Reference",
                            "important",
                            "perForceNarratives"
                        ],
                        "properties": {
                            "Reference": {
                                "title": "Reference",
                                "propertyOrder": 10,
                                "readonly": true,
                                "type": "string",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "messageType": {
                                "options": {
                                    "hidden": true
                                },
                                "type": "string"
                            },
                            "important": {
                                "type": "boolean",
                                "propertyOrder": 5,
                                "title": "Important (high profile adjudication)",
                                "format": "checkbox",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "narrative": {
                                "title": "General Summary",
                                "propertyOrder": 20,
                                "type": "string",
                                "format": "textarea",
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "perForceNarratives": {
                                "type": "array",
                                "title": "Per-force feedback",
                                "propertyOrder": 25,
                                "format": "table",
                                "options": {
                                    "grid_columns": 5
                                },
                                "additionalProperties": false,
                                "items": {
                                    "title": "Feedback",
                                    "type": "object",
                                    "required": [
                                        "force",
                                        "feedback"
                                    ],
                                    "properties": {
                                        "force": {
                                            "title": "Force",
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
                                        "feedback": {
                                            "title": "Feedback",
                                            "propertyOrder": 20,
                                            "type": "string",
                                            "format": "textarea"
                                        }
                                    }
                                }
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
                                        "perceivedHealth": {
                                            "title": "Health",
                                            "propertyOrder": 50,
                                            "type": "number",
                                            "options": {
                                                "grid_columns": 3
                                            }
                                        },
                                        "perceivedName": {
                                            "title": "Name",
                                            "propertyOrder": 60,
                                            "type": "string"
                                        },
                                        "perceivedLocation": {
                                            "title": "Location t/[1,2]/x",
                                            "propertyOrder": 65,
                                            "type": "string"
                                        },
                                        "narrative": {
                                            "title": "Comment",
                                            "propertyOrder": 70,
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
                                            "propertyOrder": 10,
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
                                            "title": "Health",
                                            "propertyOrder": 20,
                                            "type": "number",
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "c4": {
                                            "title": "C4 Ability",
                                            "propertyOrder": 25,
                                            "type": "string",
                                            "enum": [
                                                "Unchanged",
                                                "None",
                                                "Degraded",
                                                "Operational"
                                            ],
                                            "options": {
                                                "grid_columns": 2
                                            }
                                        },
                                        "repairComplete": {
                                            "title": "Repair in (days)",
                                            "propertyOrder": 40,
                                            "type": "string",
                                            "enum": [
                                                "I/R",
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
                                            "propertyOrder": 50,
                                            "type": "string",
                                            "format": "textarea"
                                        },
                                        "private": {
                                            "title": "Private",
                                            "propertyOrder": 60,
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
                                            "propertyOrder": 30,
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
                                            "propertyOrder": 40,
                                            "type": "string",
                                            "options": {
                                                "grid_columns": 3
                                            }
                                        },
                                        "narrative": {
                                            "title": "Comment",
                                            "propertyOrder": 50,
                                            "type": "string",
                                            "format": "textarea"
                                        },
                                        "private": {
                                            "title": "Private",
                                            "propertyOrder": 60,
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
                    "lastUpdated": "2023-02-20T15:19:12.345Z",
                    "title": "f-blue--Land--MissileStrike",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "activityDescription",
                            "intent",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "rulesOfEngagement",
                            "emconState",
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
                                "minLength": 10,
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
                                        "placeholder": "Enter start date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "enableTime": true,
                                        "altInput": true,
                                        "altFormat": "M dHi\\Z",
                                        "dateFormat": "Z",
                                        "defaultDate": "2024-05-01T00:00:00Z"
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter end date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "enableTime": true,
                                        "altInput": true,
                                        "altFormat": "M dHi\\Z",
                                        "dateFormat": "Z",
                                        "defaultDate": "2024-05-01T00:00:00Z"
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
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
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
                                "title": "High-level Activity Supported",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "title": "Associated Cyber/Space Activity Ref#",
                                "propertyOrder": 120,
                                "type": "string",
                                "enum": [
                                    "None",
                                    "FR Cyper Op 12 - Green Drain",
                                    "DE Cyper Op 14 - Brain Smash",
                                    "GR Space Op 16 - Ruby Spaniel",
                                    "SP Info Op 18 - Orange Drawn"
                                ],
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "rulesOfEngagement": {
                                "enum": [
                                    "Weapons Free",
                                    "Weapons Tight",
                                    "Weapons Held"
                                ],
                                "title": "Rules of Engagement",
                                "type": "string",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "emconState": {
                                "enum": [
                                    "Electronic Silence",
                                    "Radio Silence",
                                    "Normal Operations",
                                    "No restrictions"
                                ],
                                "title": "Emcon State",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets (Launchers)",
                                "options": {
                                    "grid_columns": 6,
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
                                    "grid_columns": 6,
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
                        "title": "f-blue--Land--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "f-blue--Land--MissileStrike",
                    "_rev": "2023-02-20T15:19:12.345Z"
                },
                {
                    "lastUpdated": "2023-02-20T15:19:12.345Z",
                    "title": "f-blue--Maritime--MissileStrike",
                    "details": {
                        "format": "grid",
                        "required": [
                            "Reference",
                            "title",
                            "startDate",
                            "endDate",
                            "activity",
                            "activityDescription",
                            "intent",
                            "actionsOn",
                            "synchronisedWith",
                            "supports",
                            "activityCard",
                            "rulesOfEngagement",
                            "emconState",
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
                                "minLength": 10,
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
                                        "placeholder": "Enter start date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "enableTime": true,
                                        "altInput": true,
                                        "altFormat": "M dHi\\Z",
                                        "dateFormat": "Z",
                                        "defaultDate": "2024-05-01T00:00:00Z"
                                    }
                                }
                            },
                            "endDate": {
                                "format": "datetime-local",
                                "type": "string",
                                "propertyOrder": 45,
                                "title": "End Date",
                                "options": {
                                    "grid_columns": 3,
                                    "inputAttributes": {
                                        "placeholder": "Enter end date"
                                    },
                                    "flatpickr": {
                                        "time_24hr": true,
                                        "enableTime": true,
                                        "altInput": true,
                                        "altFormat": "M dHi\\Z",
                                        "dateFormat": "Z",
                                        "defaultDate": "2024-05-01T00:00:00Z"
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
                            "activityDescription": {
                                "format": "textarea",
                                "title": "Activity Description",
                                "propertyOrder": 55,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
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
                                "title": "High-level Activity Supported",
                                "propertyOrder": 110,
                                "options": {
                                    "grid_columns": 6
                                },
                                "type": "string"
                            },
                            "activityCard": {
                                "title": "Associated Cyber/Space Activity Ref#",
                                "propertyOrder": 120,
                                "type": "string",
                                "enum": [
                                    "None",
                                    "FR Cyper Op 12 - Green Drain",
                                    "DE Cyper Op 14 - Brain Smash",
                                    "GR Space Op 16 - Ruby Spaniel",
                                    "SP Info Op 18 - Orange Drawn"
                                ],
                                "options": {
                                    "grid_columns": 4
                                }
                            },
                            "rulesOfEngagement": {
                                "enum": [
                                    "Weapons Free",
                                    "Weapons Tight",
                                    "Weapons Held"
                                ],
                                "title": "Rules of Engagement",
                                "type": "string",
                                "propertyOrder": 210,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "emconState": {
                                "enum": [
                                    "Electronic Silence",
                                    "Radio Silence",
                                    "Normal Operations",
                                    "No restrictions"
                                ],
                                "title": "Emcon State",
                                "type": "string",
                                "propertyOrder": 220,
                                "options": {
                                    "grid_columns": 3
                                }
                            },
                            "ownAssets": {
                                "type": "array",
                                "format": "table",
                                "minItems": 0,
                                "propertyOrder": 70,
                                "title": "Own Assets (Launchers)",
                                "options": {
                                    "grid_columns": 6,
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
                                    "grid_columns": 6,
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
                        "title": "f-blue--Maritime--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "f-blue--Maritime--MissileStrike",
                    "_rev": "2023-02-20T15:19:12.345Z"
                }
            ]
        },
        "areas": {
            "areas": [
                {
                    "name": "Category-1",
                    "color": "#aaf",
                    "usedBy": [
                        "f-blue",
                        "f-red"
                    ],
                    "areas": [
                        {
                            "name": "area-1",
                            "polygon": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            42.3586,
                                            52.15751
                                        ],
                                        [
                                            42.3586,
                                            44.88566
                                        ],
                                        [
                                            53.45622,
                                            44.885665
                                        ],
                                        [
                                            53.45622,
                                            52.15751
                                        ],
                                        [
                                            42.3586,
                                            52.15751
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "name": "area-2",
                            "polygon": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            32.3586,
                                            42.15751
                                        ],
                                        [
                                            32.3586,
                                            34.88566
                                        ],
                                        [
                                            43.45622,
                                            34.885665
                                        ],
                                        [
                                            43.45622,
                                            42.15751
                                        ],
                                        [
                                            32.3586,
                                            42.15751
                                        ]
                                    ]
                                ]
                            }
                        }
                    ]
                }, {
                    "name": "Category-2",
                    "color": "afa",
                    "usedBy": [
                        "f-blue"
                    ],
                    "areas": [
                        {
                            "name": "area-3",
                            "polygon": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            32.3586,
                                            52.15751
                                        ],
                                        [
                                            32.3586,
                                            44.88566
                                        ],
                                        [
                                            43.45622,
                                            44.885665
                                        ],
                                        [
                                            43.45622,
                                            52.15751
                                        ],
                                        [
                                            32.3586,
                                            52.15751
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "name": "area-4",
                            "polygon": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            22.3586,
                                            52.1575
                                        ],
                                        [
                                            22.3586,
                                            44.88566
                                        ],
                                        [
                                            33.45622,
                                            44.885665
                                        ],
                                        [
                                            33.45622,
                                            52.15751
                                        ],
                                        [
                                            22.3586,
                                            52.1575
                                        ]
                                    ]
                                ]
                            }
                        },
                        {
                            "name": "area-5",
                            "polygon": {
                                "type": "Polygon",
                                "coordinates": [
                                    [
                                        [
                                            44.342709,
                                            41.454939
                                        ],
                                        [
                                            44.342709,
                                            35.22708
                                        ],
                                        [
                                            52.319515,
                                            35.22708
                                        ],
                                        [
                                            52.319515,
                                            41.454939
                                        ],
                                        [
                                            44.342709,
                                            41.454939
                                        ]
                                    ]
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },
    "gameTurn": 1,
    "infoType": true,
    "messageType": "InfoMessage",
    "name": "wargame-l6nngxlk",
    "phase": "planning",
    "turnEndTime": "2021-08-10T16:17:26+01:00",
    "wargameInitiated": true,
    "wargameTitle": "P9 Test"
}
export default shortGame;