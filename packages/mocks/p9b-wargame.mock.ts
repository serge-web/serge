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
                            "contactId": "CA1862",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:0",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:0",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:0",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                34.0118,
                                30.5506
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_3",
                                "a_Equipment": "_8",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a2",
                                    "contactId": "CA2279",
                                    "name": "Blue:1",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:1",
                                            "typeId": "blue_land_asset",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:1",
                                            "typeId": "blue_land_asset",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:1",
                                            "typeId": "blue_land_asset",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 25,
                                    "platformTypeId": "blue_land_asset",
                                    "condition": "working",
                                    "location": [
                                        52.4663,
                                        27.2136
                                    ],
                                    "attributes": {
                                        "a_Type": "Fixed Asset (blue)_3"
                                    }
                                },
                                {
                                    "uniqid": "a3",
                                    "contactId": "CA209",
                                    "name": "Blue:2",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:2",
                                            "typeId": "blue_air_fighter",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:2",
                                            "typeId": "blue_air_fighter",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:2",
                                            "typeId": "blue_air_fighter",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 55,
                                    "platformTypeId": "blue_air_fighter",
                                    "condition": "working",
                                    "location": [
                                        28.5587,
                                        60.6959
                                    ],
                                    "attributes": {
                                        "a_Speed": 240,
                                        "a_Type": "Fast Jet Squadron (blue)_6",
                                        "a_Number_Aircraft": 10,
                                        "a_Airfield": "_44",
                                        "a_Equipment": "_9"
                                    }
                                },
                                {
                                    "uniqid": "a4",
                                    "contactId": "CA2963",
                                    "name": "Blue:3",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:3",
                                            "typeId": "blue_land_ssm",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:3",
                                            "typeId": "blue_land_ssm",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:3",
                                            "typeId": "blue_land_ssm",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 55,
                                    "platformTypeId": "blue_land_ssm",
                                    "condition": "working",
                                    "location": [
                                        44.5274,
                                        73.2107
                                    ],
                                    "attributes": {
                                        "a_Speed": 22,
                                        "a_Number_Missiles": 100,
                                        "a_Type": "SSM (blue)_5",
                                        "a_Equipment": "_45",
                                        "a_C2_Status": "Degraded"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a5",
                            "contactId": "CA554",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:4",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:4",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:4",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                31.7525,
                                34.7861
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_4",
                                "a_Equipment": "_39",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a6",
                            "contactId": "CA3196",
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
                            "health": 45,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                48.5387,
                                69.741
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a7",
                            "contactId": "CA101",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:6",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:6",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:6",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                40.507,
                                22.7713
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_2",
                                "a_Equipment": "_40",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a8",
                            "contactId": "CA2882",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:7",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:7",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:7",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                44.928,
                                84.0152
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a9",
                            "contactId": "CA1821",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:8",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:8",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:8",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                54.42209157516146,
                                42.68105540956102
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_4",
                                "a_Speed": 220,
                                "a_Airfield": "a82",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a10",
                            "contactId": "CA2557",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:9",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:9",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:9",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                29.3622,
                                83.3655
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a11",
                            "contactId": "CA200",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:10",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:10",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:10",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.3477,
                                72.7279
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a12",
                            "contactId": "CA1906",
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
                            "health": 45,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                47.70861126545804,
                                76.54663478787732
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_1",
                                "a_Speed": 200,
                                "a_Airfield": "a24",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_37"
                            }
                        },
                        {
                            "uniqid": "a13",
                            "contactId": "CA2651",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                30.5229,
                                39.4146
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Submarine (blue)_3",
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a14",
                            "contactId": "CA155",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:13",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:13",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:13",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                35.3541,
                                83.7688
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_5",
                                "a_Equipment": "_37",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a15",
                            "contactId": "CA72",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:14",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:14",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:14",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                34.7011,
                                30.4416
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Ship (blue)_1",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a16",
                            "contactId": "CA1105",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                49.7437,
                                52.3733
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_4",
                                "a_Equipment": "_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a17",
                            "contactId": "CA3026",
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
                            "health": 20,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                47.896414947183075,
                                69.38500807947561
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_3",
                                "a_Speed": 280,
                                "a_Airfield": "a25",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a18",
                            "contactId": "CA3368",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:17",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:17",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:17",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                46.3251,
                                44.7845
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a19",
                            "contactId": "CA1051",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:18",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                31.5539,
                                38.4056
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_5",
                                "a_Equipment": "_23",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a20",
                            "contactId": "CA2626",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:19",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:19",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:19",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                49.48648615791732,
                                27.93223367399679
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron (blue)_2",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a68",
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a21",
                            "contactId": "CA995",
                            "name": "Blue:20",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:20",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:20",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:20",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                33.8141,
                                60.7402
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship (blue)_4",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a22",
                            "contactId": "CA2799",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:21",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:21",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:21",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                36.1499,
                                70.408
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Type": "Land Unit (blue)_1",
                                "a_Size": "Unit size_23",
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a23",
                            "contactId": "CA1651",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:22",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:22",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:22",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                46.6967,
                                30.6399
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_1",
                                "a_Connections": "_28",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a24",
                            "contactId": "CA2197",
                            "name": "Blue:23",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:23",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:23",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:23",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                47.6118,
                                76.7717
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a25",
                            "contactId": "CA2561",
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
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                47.9799,
                                69.1472
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a26",
                            "contactId": "CA1415",
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
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                29.9728,
                                36.0502
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a27",
                            "contactId": "CA619",
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
                            "health": 60,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                34.004,
                                82.382
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_2",
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a28",
                            "contactId": "CA3246",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:27",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:27",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:27",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                47.5087,
                                59.9556
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a29",
                            "contactId": "CA3273",
                            "name": "Blue:28",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                31.4979,
                                39.1761
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_4",
                                "a_Equipment": "_34",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a30",
                            "contactId": "CA2466",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:29",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:29",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:29",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                41.3052,
                                74.402
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_2",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a31",
                            "contactId": "CA1304",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:30",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:30",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:30",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                35.4151,
                                70.4533
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_1",
                                "a_Equipment": "_26",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a32",
                            "contactId": "CA2692",
                            "name": "Blue:31",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:31",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:31",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:31",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                37.4919,
                                42.949
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_4",
                                "a_Equipment": "_24",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a33",
                            "contactId": "CA1192",
                            "name": "Blue:32",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:32",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:32",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:32",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                47.62512788462635,
                                60.1587887934553
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_5",
                                "a_Speed": 280,
                                "a_Airfield": "a28",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a34",
                            "contactId": "CA16",
                            "name": "Blue:33",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:33",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:33",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:33",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                39.0609,
                                73.8472
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a35",
                            "contactId": "CA2443",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:34",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:34",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:34",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                47.0258,
                                45.1372
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_4",
                                "a_Equipment": "_10",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a36",
                            "contactId": "CA2293",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:35",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:35",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:35",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                51.9489,
                                34.752
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_6",
                                "a_Speed": 30,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a37",
                            "contactId": "CA3130",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.1287,
                                44.5641
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a38",
                            "contactId": "CA409",
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
                            "health": 50,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.3654,
                                48.2097
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a39",
                            "contactId": "CA2884",
                            "name": "Blue:38",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:38",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:38",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:38",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                39.6132,
                                40.6316
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a40",
                            "contactId": "CA1595",
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
                            "health": 25,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                54.47118912563649,
                                42.198838750954735
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_3",
                                "a_Speed": 240,
                                "a_Airfield": "a82",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a41",
                            "contactId": "CA2863",
                            "name": "Blue:40",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:40",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:40",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:40",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                49.42743932808314,
                                27.820967297493702
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_6",
                                "a_Speed": 240,
                                "a_Airfield": "a68",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a42",
                            "contactId": "CA2684",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                28.5744,
                                59.3742
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_5",
                                "a_Equipment": "_2",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a43",
                            "contactId": "CA703",
                            "name": "Blue:42",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:42",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                32.6994,
                                41.2615
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a44",
                            "contactId": "CA492",
                            "name": "Blue:43",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:43",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                38.2248,
                                66.9873
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a45",
                            "contactId": "CA1183",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                51.6663,
                                46.1332
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a46",
                            "contactId": "CA592",
                            "name": "Blue:45",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                35.7158,
                                27.2634
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Type": "Land Unit (blue)_5",
                                "a_Size": "Unit size_40",
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a47",
                            "contactId": "CA2230",
                            "name": "Blue:46",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:46",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:46",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:46",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                43.147,
                                67.6128
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a48",
                            "contactId": "CA1417",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:47",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:47",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:47",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                49.094381275242725,
                                74.35405143246865
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_5",
                                "a_Speed": 240,
                                "a_Airfield": "a60",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "a49",
                            "contactId": "CA3292",
                            "name": "Blue:48",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:48",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:48",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:48",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                47.6991,
                                27.8201
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a50",
                            "contactId": "CA33",
                            "name": "Blue:49",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:49",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:49",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:49",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                45.0187,
                                32.4644
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_3",
                                "a_Equipment": "_8",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a51",
                            "contactId": "CA1734",
                            "name": "Blue:50",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                29.6882,
                                33.0747
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a52",
                            "contactId": "CA2563",
                            "name": "Blue:51",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:51",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:51",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:51",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                36.0335,
                                57.2946
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a53",
                            "contactId": "CA3052",
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
                            "health": 40,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.9418,
                                66.3138
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a54",
                            "contactId": "CA360",
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
                            "health": 25,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                49.7879,
                                25.6376
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_6",
                                "a_Connections": "_48",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a55",
                            "contactId": "CA517",
                            "name": "Blue:54",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:54",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:54",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:54",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                54.7929,
                                36.1116
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship (blue)_4",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_8"
                            }
                        },
                        {
                            "uniqid": "a56",
                            "contactId": "CA1808",
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
                            "health": 45,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                45.8879,
                                59.1374
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a57",
                            "contactId": "CA1268",
                            "name": "Blue:56",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:56",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:56",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:56",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                31.414,
                                66.574
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_5",
                                "a_Connections": "_24",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a58",
                            "contactId": "CA88",
                            "name": "Blue:57",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:57",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:57",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:57",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                28.7396,
                                75.7698
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Type": "Land Unit (blue)_1",
                                "a_Size": "Unit size_21",
                                "a_Equipment": "_42"
                            }
                        },
                        {
                            "uniqid": "a59",
                            "contactId": "CA45",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:58",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:58",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:58",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                49.07025827991144,
                                73.8530220926011
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_3",
                                "a_Equipment": "_34",
                                "a_Airfield": "a60"
                            }
                        },
                        {
                            "uniqid": "a60",
                            "contactId": "CA2692",
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
                                49.0101,
                                74.1116
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a61",
                            "contactId": "CA2178",
                            "name": "Blue:60",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:60",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:60",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:60",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                47.73613729350937,
                                76.57868438644078
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_6",
                                "a_Equipment": "_4",
                                "a_Airfield": "a24"
                            }
                        },
                        {
                            "uniqid": "a62",
                            "contactId": "CA2200",
                            "name": "Blue:61",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:61",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:61",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:61",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                49.076,
                                34.3446
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine (blue)_6",
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a63",
                            "contactId": "CA1390",
                            "name": "Blue:62",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:62",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:62",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:62",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                38.809,
                                54.8832
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship (blue)_2",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a64",
                            "contactId": "CA99",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:63",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                36.1859,
                                82.5357
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_6",
                                "a_Equipment": "_32",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a65",
                            "contactId": "CA2746",
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
                            "health": 15,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                33.6,
                                35.225
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_6",
                                "a_Speed": 10,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a66",
                            "contactId": "CA2786",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:65",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:65",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:65",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                33.7457,
                                52.605
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_3",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a67",
                            "contactId": "CA968",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:66",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:66",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:66",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                47.68763774599651,
                                59.982635869207684
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (blue)_4",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a28",
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a68",
                            "contactId": "CA1504",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:67",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:67",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:67",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                49.3223,
                                28.0451
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a69",
                            "contactId": "CA1739",
                            "name": "Blue:68",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:68",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                46.3522,
                                59.097
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_3",
                                "a_Speed": 20,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a70",
                            "contactId": "CA3239",
                            "name": "Blue:69",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:69",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:69",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:69",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                42.596,
                                83.9224
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a71",
                            "contactId": "CA2786",
                            "name": "Blue:70",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:70",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:70",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:70",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                52.0756,
                                55.916
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_3",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a72",
                            "contactId": "CA2047",
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
                            "health": 65,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                34.2443,
                                64.1246
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a73",
                            "contactId": "CA1304",
                            "name": "Blue:72",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:72",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:72",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:72",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                41.7174,
                                36.2721
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Type": "Land Unit (blue)_2",
                                "a_Size": "Unit size_28",
                                "a_Equipment": "_20"
                            }
                        },
                        {
                            "uniqid": "a74",
                            "contactId": "CA1217",
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
                            "health": 70,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                54.703382249885195,
                                42.29668481830343
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_2",
                                "a_Speed": 240,
                                "a_Airfield": "a82",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_24"
                            }
                        },
                        {
                            "uniqid": "a75",
                            "contactId": "CA2679",
                            "name": "Blue:74",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:74",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:74",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:74",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                45.8993,
                                43.667
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_5",
                                "a_Connections": "_22",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a76",
                            "contactId": "CA164",
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
                            "health": 75,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                46.7388,
                                22.9106
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a77",
                            "contactId": "CA2234",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                34.0289,
                                24.0785
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine (blue)_1",
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "a78",
                            "contactId": "CA163",
                            "name": "Blue:77",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:77",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:77",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:77",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                40.422,
                                72.4303
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a79",
                            "contactId": "CA1129",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:78",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:78",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:78",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                46.681,
                                70.249
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_5",
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a80",
                            "contactId": "CA2190",
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
                            "health": 50,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                29.5986,
                                55.4127
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Ship (blue)_1",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a81",
                            "contactId": "CA870",
                            "name": "Blue:80",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:80",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:80",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:80",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                31.9893,
                                67.1317
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_6",
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a82",
                            "contactId": "CA242",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:81",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:81",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:81",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                54.5552,
                                42.4728
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a83",
                            "contactId": "CA1772",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:82",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:82",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:82",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                33.2341,
                                85.2273
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Land Unit (blue)_2",
                                "a_Size": "Unit size_33",
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a84",
                            "contactId": "CA1555",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:83",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:83",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:83",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                34.8748,
                                60.3151
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a85",
                            "contactId": "CA3",
                            "name": "Blue:84",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:84",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:84",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:84",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                47.74252589366453,
                                76.58821926251075
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (blue)_2",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a24",
                                "a_Equipment": "_24"
                            }
                        },
                        {
                            "uniqid": "a86",
                            "contactId": "CA410",
                            "name": "Blue:85",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:85",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                43.7301,
                                45.0841
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a87",
                            "contactId": "CA2655",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:86",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:86",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:86",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                32.0591,
                                76.3083
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_2",
                                "a_Equipment": "_43",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a88",
                            "contactId": "CA1144",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:87",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:87",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:87",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                36.9287,
                                56.3377
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_1",
                                "a_Equipment": "_9",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a89",
                            "contactId": "CA706",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:88",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:88",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:88",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                53.8034,
                                80.7548
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_3",
                                "a_Speed": 30,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a90",
                            "contactId": "CA2431",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:89",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:89",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:89",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                43.7411,
                                65.7607
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a91",
                            "contactId": "CA1053",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:90",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                33.623,
                                72.0794
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Ship (blue)_5",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a92",
                            "contactId": "CA2131",
                            "name": "Blue:91",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:91",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:91",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:91",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                47.767242578114,
                                76.63726960921832
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_2",
                                "a_Speed": 240,
                                "a_Airfield": "a24",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a93",
                            "contactId": "CA3126",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:92",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:92",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:92",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                44.9621,
                                67.4427
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Submarine (blue)_2",
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a94",
                            "contactId": "CA378",
                            "name": "Blue:93",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:93",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                48.5056,
                                74.5433
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_6",
                                "a_Equipment": "_35",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a95",
                            "contactId": "CA3278",
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
                            "health": 80,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                49.14697444856683,
                                27.983610676723185
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_5",
                                "a_Equipment": "_27",
                                "a_Airfield": "a68"
                            }
                        },
                        {
                            "uniqid": "a96",
                            "contactId": "CA3233",
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
                            "health": 50,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.9258,
                                42.0971
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a97",
                            "contactId": "CA2152",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:96",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:96",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:96",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                48.989,
                                25.3503
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_1",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a98",
                            "contactId": "CA622",
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
                            "health": 25,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                48.2445,
                                37.6378
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine (blue)_4",
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a99",
                            "contactId": "CA1391",
                            "name": "Blue:98",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:98",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:98",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:98",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                50.3604,
                                78.3302
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_4",
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a100",
                            "contactId": "CA2716",
                            "name": "Blue:99",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:99",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:99",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:99",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                43.8724,
                                23.1505
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_1",
                                "a_Equipment": "_18",
                                "a_C2_Status": "Operational"
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
                            "contactId": "CA2080",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:0",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:0",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:0",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                15.8587,
                                34.1266
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a102",
                                    "contactId": "CA2977",
                                    "name": "Red:1",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:1",
                                            "typeId": "red_land_c2",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:1",
                                            "typeId": "red_land_c2",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:1",
                                            "typeId": "red_land_c2",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 40,
                                    "platformTypeId": "red_land_c2",
                                    "condition": "working",
                                    "location": [
                                        7.8373,
                                        43.6026
                                    ],
                                    "attributes": {
                                        "a_Type": "C2 Node (red)_3",
                                        "a_Connections": "_36",
                                        "a_C2_Status": "Operational"
                                    }
                                },
                                {
                                    "uniqid": "a103",
                                    "contactId": "CA523",
                                    "name": "Red:2",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:2",
                                            "typeId": "red_land_unit",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:2",
                                            "typeId": "red_land_unit",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:2",
                                            "typeId": "red_land_unit",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 70,
                                    "platformTypeId": "red_land_unit",
                                    "condition": "working",
                                    "location": [
                                        18.9779,
                                        49.6392
                                    ],
                                    "attributes": {
                                        "a_Size": "Unit size_30",
                                        "a_Type": "Land Unit (red)_2",
                                        "a_Equipment": "_27"
                                    }
                                },
                                {
                                    "uniqid": "a104",
                                    "contactId": "CA1247",
                                    "name": "Red:3",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_mtg",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_mtg",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_mtg",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 35,
                                    "platformTypeId": "red_maritime_mtg",
                                    "condition": "working",
                                    "location": [
                                        19.0465,
                                        77.0092
                                    ],
                                    "attributes": {
                                        "a_Speed": 25,
                                        "a_MEZ_range": 300,
                                        "a_Type": "MTG (red)_5"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a105",
                            "contactId": "CA2184",
                            "name": "Red:4",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:4",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:4",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:4",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.3832,
                                25.6869
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a106",
                            "contactId": "CA2777",
                            "name": "Red:5",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:5",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:5",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:5",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                7.967509090680789,
                                25.58885861735837
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (red)_3",
                                "a_Airfield": "a140",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "a107",
                            "contactId": "CA2310",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:6",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:6",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:6",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                24.6547,
                                36.3634
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a108",
                            "contactId": "CA1842",
                            "name": "Red:7",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:7",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:7",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:7",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                23.71674322454499,
                                29.340520579793417
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron (red)_2",
                                "a_Airfield": "a112",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a109",
                            "contactId": "CA3362",
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
                            "health": 65,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.7024,
                                24.1649
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a110",
                            "contactId": "CA2631",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:9",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:9",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:9",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                19.5275,
                                31.0108
                            ],
                            "attributes": {
                                "a_Size": "Unit size_25",
                                "a_Type": "Land Unit (red)_6",
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a111",
                            "contactId": "CA3288",
                            "name": "Red:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:10",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:10",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:10",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.8334,
                                26.326
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a112",
                            "contactId": "CA2434",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:11",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:11",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:11",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                23.5409,
                                29.3818
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a113",
                            "contactId": "CA1165",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:12",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:12",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:12",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                7.9134412025283405,
                                25.646916128285717
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a140",
                                "a_Equipment": "_48",
                                "a_Type": "ISTAR (red)_6"
                            }
                        },
                        {
                            "uniqid": "a114",
                            "contactId": "CA191",
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
                            "health": 60,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                7.732,
                                68.5792
                            ],
                            "attributes": {
                                "a_Size": "Unit size_0",
                                "a_Type": "Land Unit (red)_2",
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a115",
                            "contactId": "CA3098",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:14",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:14",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:14",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                22.3911,
                                28.2998
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_41",
                                "a_Type": "SAM (red)_1",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a116",
                            "contactId": "CA1229",
                            "name": "Red:15",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:15",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:15",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:15",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                3.708,
                                28.2149
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a117",
                            "contactId": "CA69",
                            "name": "Red:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:16",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:16",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:16",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                16.2718,
                                77.1971
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a118",
                            "contactId": "CA1559",
                            "name": "Red:17",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:17",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:17",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:17",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                20.8075,
                                53.5799
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_3",
                                "a_Equipment": "_33",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a119",
                            "contactId": "CA659",
                            "name": "Red:18",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:18",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                6.0685,
                                57.6974
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_2"
                            }
                        },
                        {
                            "uniqid": "a120",
                            "contactId": "CA986",
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
                            "health": 15,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                19.4394,
                                82.5541
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a121",
                            "contactId": "CA1331",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:20",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:20",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:20",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                22.4439,
                                78.9965
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_6",
                                "a_Equipment": "_12",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a122",
                            "contactId": "CA1053",
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
                                9.7033,
                                85.5604
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_3",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a123",
                            "contactId": "CA1717",
                            "name": "Red:22",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:22",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:22",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:22",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                6.009375169365509,
                                71.2902911626502
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Air LOGS (red)_4",
                                "a_Airfield": "a181",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a124",
                            "contactId": "CA1643",
                            "name": "Red:23",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:23",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:23",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:23",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                20.932,
                                44.2157
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_10",
                                "a_Type": "SAM (red)_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a125",
                            "contactId": "CA2894",
                            "name": "Red:24",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                26.8359,
                                65.3176
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_6"
                            }
                        },
                        {
                            "uniqid": "a126",
                            "contactId": "CA193",
                            "name": "Red:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:25",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:25",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:25",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                17.218,
                                61.1035
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a127",
                            "contactId": "CA989",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:26",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:26",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:26",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                7.9621,
                                46.0074
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_4",
                                "a_Connections": "_43",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a128",
                            "contactId": "CA16",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:27",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:27",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:27",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                7.1056,
                                47.6258
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "FIAC (red)_3",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a129",
                            "contactId": "CA1583",
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
                            "health": 80,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                18.8404,
                                33.1276
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a130",
                            "contactId": "CA204",
                            "name": "Red:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                23.8472,
                                42.0634
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_2"
                            }
                        },
                        {
                            "uniqid": "a131",
                            "contactId": "CA2367",
                            "name": "Red:30",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:30",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:30",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:30",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                5.986721571487712,
                                71.32080827598647
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Air LOGS (red)_2",
                                "a_Airfield": "a181",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a132",
                            "contactId": "CA520",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:31",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:31",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:31",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                7.4334,
                                28.5479
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a133",
                            "contactId": "CA2872",
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
                            "health": 50,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                24.0169,
                                85.0864
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a134",
                            "contactId": "CA1623",
                            "name": "Red:33",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:33",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:33",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:33",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                5.7502845963343665,
                                71.34520735781983
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Air LOGS (red)_3",
                                "a_Airfield": "a181",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a135",
                            "contactId": "CA1865",
                            "name": "Red:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:34",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:34",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:34",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                23.589377443549523,
                                29.570766713835102
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (red)_3",
                                "a_Airfield": "a112",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_18"
                            }
                        },
                        {
                            "uniqid": "a136",
                            "contactId": "CA870",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:35",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:35",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:35",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.539,
                                85.7752
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a137",
                            "contactId": "CA2826",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:36",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:36",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:36",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                25.0576,
                                53.6536
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_6",
                                "a_Connections": "_41",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a138",
                            "contactId": "CA30",
                            "name": "Red:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:37",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:37",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:37",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                24.2888,
                                33.8348
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_6",
                                "a_Equipment": "_41",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a139",
                            "contactId": "CA241",
                            "name": "Red:38",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:38",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:38",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:38",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                26.748256400316595,
                                81.71182599668327
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a194",
                                "a_Equipment": "_10",
                                "a_Type": "ISTAR (red)_1"
                            }
                        },
                        {
                            "uniqid": "a140",
                            "contactId": "CA38",
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
                            "health": 75,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                8.0683,
                                25.7393
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a141",
                            "contactId": "CA2576",
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
                            "health": 20,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                24.4058,
                                37.1271
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "FIAC (red)_6",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a142",
                            "contactId": "CA1387",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:41",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:41",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:41",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                13.2872,
                                22.9513
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_6",
                                "a_Equipment": "_33",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a143",
                            "contactId": "CA1805",
                            "name": "Red:42",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:42",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:42",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:42",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                7.3047,
                                57.7296
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_3",
                                "a_Type": "SAM (red)_5",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a144",
                            "contactId": "CA2073",
                            "name": "Red:43",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:43",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:43",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:43",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                10.7705,
                                35.6137
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_4"
                            }
                        },
                        {
                            "uniqid": "a145",
                            "contactId": "CA1724",
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
                            "health": 20,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                2.6738,
                                79.2793
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_40",
                                "a_Type": "SAM (red)_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a146",
                            "contactId": "CA3021",
                            "name": "Red:45",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:45",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:45",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:45",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                2.6678604104700696,
                                26.2555787451333
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a111",
                                "a_Equipment": "_8",
                                "a_Type": "ISTAR (red)_4"
                            }
                        },
                        {
                            "uniqid": "a147",
                            "contactId": "CA65",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                10.0392,
                                28.8588
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (red)_3",
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a148",
                            "contactId": "CA1898",
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
                            "health": 75,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                8.2696,
                                40.0829
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a149",
                            "contactId": "CA1864",
                            "name": "Red:48",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:48",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:48",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:48",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                12.563,
                                23.1582
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "FIAC (red)_1",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a150",
                            "contactId": "CA746",
                            "name": "Red:49",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:49",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:49",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:49",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                19.6358,
                                55.021
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine (red)_5",
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a151",
                            "contactId": "CA1624",
                            "name": "Red:50",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:50",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:50",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:50",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                26.0272,
                                41.2034
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (red)_6",
                                "a_Equipment": "_16"
                            }
                        },
                        {
                            "uniqid": "a152",
                            "contactId": "CA2038",
                            "name": "Red:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:51",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:51",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:51",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.7195,
                                26.9978
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a153",
                            "contactId": "CA30",
                            "name": "Red:52",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:52",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:52",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:52",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.7011,
                                80.4802
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a154",
                            "contactId": "CA1554",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:53",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:53",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:53",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                6.2121,
                                75.3823
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_4"
                            }
                        },
                        {
                            "uniqid": "a155",
                            "contactId": "CA376",
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
                            "health": 10,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                27.7079,
                                57.3914
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_6",
                                "a_Connections": "_37",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a156",
                            "contactId": "CA107",
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
                            "health": 90,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                26.69869792879997,
                                81.59322501460352
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a194",
                                "a_Equipment": "_36",
                                "a_Type": "ISTAR (red)_4"
                            }
                        },
                        {
                            "uniqid": "a157",
                            "contactId": "CA2628",
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
                            "health": 15,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                8.5733,
                                80.2109
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_5"
                            }
                        },
                        {
                            "uniqid": "a158",
                            "contactId": "CA3090",
                            "name": "Red:57",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:57",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:57",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:57",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                15.3546,
                                69.3607
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a159",
                            "contactId": "CA3104",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:58",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:58",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:58",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                3.3144,
                                37.8507
                            ],
                            "attributes": {
                                "a_Size": "Unit size_17",
                                "a_Type": "Land Unit (red)_1",
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "a160",
                            "contactId": "CA1833",
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
                            "health": 85,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.3414,
                                37.094
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a161",
                            "contactId": "CA1032",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:60",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:60",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:60",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                10.8293,
                                41.7757
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (red)_1",
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a162",
                            "contactId": "CA2581",
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
                            "health": 85,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                15.553,
                                50.39
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_9",
                                "a_Type": "SAM (red)_6",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a163",
                            "contactId": "CA2710",
                            "name": "Red:62",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:62",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:62",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:62",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                26.75,
                                56.6666
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "FIAC (red)_4",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a164",
                            "contactId": "CA1004",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:63",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:63",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:63",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                15.4228,
                                36.6995
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_6",
                                "a_Connections": "_19",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a165",
                            "contactId": "CA2454",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:64",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:64",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:64",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                8.5449,
                                31.2874
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_3",
                                "a_Equipment": "_9",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a166",
                            "contactId": "CA3363",
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
                            "health": 10,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                11.742,
                                49.2181
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_1",
                                "a_Equipment": "_39",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a167",
                            "contactId": "CA1813",
                            "name": "Red:66",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:66",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:66",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:66",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                5.991039978050736,
                                71.3159433056167
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a181",
                                "a_Equipment": "_26",
                                "a_Type": "ISTAR (red)_5"
                            }
                        },
                        {
                            "uniqid": "a168",
                            "contactId": "CA3274",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:67",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:67",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:67",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                5.677453887218454,
                                71.16726835936547
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a181",
                                "a_Equipment": "_7",
                                "a_Type": "ISTAR (red)_5"
                            }
                        },
                        {
                            "uniqid": "a169",
                            "contactId": "CA2167",
                            "name": "Red:68",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:68",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:68",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:68",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                19.4,
                                24.7765
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_2",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a170",
                            "contactId": "CA1518",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:69",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:69",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:69",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                13.8731,
                                60.1011
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "Submarine (red)_5",
                                "a_Equipment": "_5"
                            }
                        },
                        {
                            "uniqid": "a171",
                            "contactId": "CA100",
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
                            "health": 10,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                16.8371,
                                85.4993
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a172",
                            "contactId": "CA2181",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:71",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:71",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:71",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                25.4763,
                                26.739
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_9",
                                "a_Type": "SAM (red)_2",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a173",
                            "contactId": "CA142",
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
                            "health": 80,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.3316,
                                54.841
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a174",
                            "contactId": "CA2507",
                            "name": "Red:73",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:73",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:73",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:73",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                23.4933,
                                56.5526
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a175",
                            "contactId": "CA1357",
                            "name": "Red:74",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:74",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:74",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:74",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                18.3737,
                                62.1082
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_34",
                                "a_Type": "SAM (red)_1",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a176",
                            "contactId": "CA1431",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:75",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:75",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:75",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                3.0753,
                                85.1412
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "FIAC (red)_1",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a177",
                            "contactId": "CA2326",
                            "name": "Red:76",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:76",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:76",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:76",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                5.68287662378621,
                                71.25144787741608
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron (red)_1",
                                "a_Airfield": "a181",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_3"
                            }
                        },
                        {
                            "uniqid": "a178",
                            "contactId": "CA819",
                            "name": "Red:77",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:77",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:77",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:77",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.2696,
                                61.6459
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a179",
                            "contactId": "CA1215",
                            "name": "Red:78",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:78",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:78",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:78",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                9.3591,
                                61.174
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_6"
                            }
                        },
                        {
                            "uniqid": "a180",
                            "contactId": "CA591",
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
                            "health": 20,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                10.0495,
                                68.9181
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_6",
                                "a_Equipment": "_23",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a181",
                            "contactId": "CA2487",
                            "name": "Red:80",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:80",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:80",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:80",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                5.8547,
                                71.198
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a182",
                            "contactId": "CA3079",
                            "name": "Red:81",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:81",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:81",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:81",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                3.9209,
                                74.4988
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Submarine (red)_4",
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a183",
                            "contactId": "CA2678",
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
                            "health": 85,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                13.7178,
                                57.636
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine (red)_3",
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a184",
                            "contactId": "CA2283",
                            "name": "Red:83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:83",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:83",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:83",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                27.0291,
                                61.2492
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_3",
                                "a_Equipment": "_29",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a185",
                            "contactId": "CA2723",
                            "name": "Red:84",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:84",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:84",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:84",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                23.642739707600512,
                                29.54357710943667
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (red)_2",
                                "a_Airfield": "a112",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a186",
                            "contactId": "CA1521",
                            "name": "Red:85",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:85",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:85",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:85",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                10.7712,
                                67.1544
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a187",
                            "contactId": "CA1662",
                            "name": "Red:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:86",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:86",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:86",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                16.3691329065825,
                                77.03949660519534
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (red)_3",
                                "a_Airfield": "a117",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a188",
                            "contactId": "CA3037",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:87",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:87",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:87",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                8.064720013487564,
                                25.557674526771823
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron (red)_4",
                                "a_Airfield": "a140",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a189",
                            "contactId": "CA607",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:88",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:88",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:88",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                9.6003,
                                30.7281
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "Submarine (red)_4",
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a190",
                            "contactId": "CA3079",
                            "name": "Red:89",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:89",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:89",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:89",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                23.40184962121329,
                                29.25742068325261
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a112",
                                "a_Equipment": "_2",
                                "a_Type": "ISTAR (red)_1"
                            }
                        },
                        {
                            "uniqid": "a191",
                            "contactId": "CA918",
                            "name": "Red:90",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:90",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:90",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:90",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                6.032221535949144,
                                71.16890939579538
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a181",
                                "a_Equipment": "_6",
                                "a_Type": "ISTAR (red)_3"
                            }
                        },
                        {
                            "uniqid": "a192",
                            "contactId": "CA1985",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:91",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                22.7776,
                                84.7308
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_1",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a193",
                            "contactId": "CA1824",
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
                            "health": 10,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                19.4392,
                                22.6885
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_1",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a194",
                            "contactId": "CA3101",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:93",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:93",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:93",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.5694,
                                81.7331
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a195",
                            "contactId": "CA3035",
                            "name": "Red:94",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:94",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:94",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:94",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                11.7379,
                                72.9826
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_6"
                            }
                        },
                        {
                            "uniqid": "a196",
                            "contactId": "CA1838",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:95",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:95",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:95",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                23.425582389699088,
                                29.231302924241835
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a112",
                                "a_Equipment": "_1",
                                "a_Type": "ISTAR (red)_6"
                            }
                        },
                        {
                            "uniqid": "a197",
                            "contactId": "CA2118",
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
                            "health": 65,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                11.5794,
                                52.4252
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_1",
                                "a_Connections": "_28",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a198",
                            "contactId": "CA11",
                            "name": "Red:97",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:97",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:97",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:97",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                15.3923,
                                68.3733
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_5"
                            }
                        },
                        {
                            "uniqid": "a199",
                            "contactId": "CA2341",
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
                            "health": 65,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.4729,
                                73.7463
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_4"
                            }
                        },
                        {
                            "uniqid": "a200",
                            "contactId": "CA691",
                            "name": "Red:99",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:99",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:99",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:99",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                22.8249,
                                32.6019
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "FIAC (red)_3",
                                "a_Number_FIACs": 100
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
                        "a_MEZ_range",
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