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
                            "uniqid": "a801",
                            "contactId": "CA3291",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:0",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:0",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:0",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                47.5654,
                                53.5531
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_5"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a811",
                                    "contactId": "CA1641",
                                    "name": "Blue:10",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:10",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:10",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:10",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 70,
                                    "platformTypeId": "blue_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 30,
                                        "a_Type": "Submarine (blue)_5",
                                        "a_Equipment": "_13"
                                    }
                                },
                                {
                                    "uniqid": "a833",
                                    "contactId": "CA296",
                                    "name": "Blue:32",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:32",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:32",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:32",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 50,
                                    "platformTypeId": "blue_maritime_ship",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 15,
                                        "a_Type": "Ship (blue)_1",
                                        "a_MEZ_range": 300,
                                        "a_Equipment": "_45"
                                    }
                                },
                                {
                                    "uniqid": "a834",
                                    "contactId": "CA1064",
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
                                    "health": 45,
                                    "platformTypeId": "blue_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Type": "FIAC (blue)_4",
                                        "a_Speed": 15,
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a863",
                                    "contactId": "CA887",
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
                                    "health": 70,
                                    "platformTypeId": "blue_maritime_ship",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 25,
                                        "a_Type": "Ship (blue)_3",
                                        "a_MEZ_range": 300,
                                        "a_Equipment": "_33"
                                    }
                                },
                                {
                                    "uniqid": "a900",
                                    "contactId": "CA872",
                                    "name": "Blue:99",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:99",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:99",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:99",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 15,
                                    "platformTypeId": "blue_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 20,
                                        "a_Type": "Submarine (blue)_6",
                                        "a_Equipment": "_14"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a803",
                            "contactId": "CA332",
                            "name": "Blue:2",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:2",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:2",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:2",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                29.3023,
                                74.6702
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_2",
                                "a_Equipment": "_13",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a804",
                            "contactId": "CA1697",
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
                            "health": 85,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                50.5159,
                                23.862
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a807",
                            "contactId": "CA3382",
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
                            "health": 90,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                43.50758653064509,
                                45.31270916162253
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_4",
                                "a_Speed": 260,
                                "a_Airfield": "a852",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a808",
                            "contactId": "CA2727",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:7",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:7",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:7",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                34.745,
                                66.3157
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_4",
                                "a_Equipment": "_37",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a809",
                            "contactId": "CA2351",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:8",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:8",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:8",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                49.7547,
                                49.9103
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a810",
                            "contactId": "CA578",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:9",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:9",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:9",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                29.1576,
                                71.1881
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_2"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a802",
                                    "contactId": "CA2760",
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
                                    "health": 0,
                                    "platformTypeId": "blue_maritime_ship",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 30,
                                        "a_Type": "Ship (blue)_3",
                                        "a_MEZ_range": 300,
                                        "a_Equipment": "_3"
                                    }
                                },
                                {
                                    "uniqid": "a805",
                                    "contactId": "CA745",
                                    "name": "Blue:4",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:4",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:4",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:4",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 50,
                                    "platformTypeId": "blue_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Type": "FIAC (blue)_5",
                                        "a_Speed": 10,
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a839",
                                    "contactId": "CA772",
                                    "name": "Blue:38",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:38",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:38",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:38",
                                            "typeId": "blue_maritime_submarine",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 85,
                                    "platformTypeId": "blue_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 15,
                                        "a_Type": "Submarine (blue)_1",
                                        "a_Equipment": "_35"
                                    }
                                },
                                {
                                    "uniqid": "a873",
                                    "contactId": "CA2689",
                                    "name": "Blue:72",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:72",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:72",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:72",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 30,
                                    "platformTypeId": "blue_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Type": "FIAC (blue)_1",
                                        "a_Speed": 30,
                                        "a_Number_FIACs": 100
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a812",
                            "contactId": "CA3103",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:11",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:11",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:11",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                42.2578,
                                67.016
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a813",
                            "contactId": "CA2355",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:12",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:12",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:12",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                40.5725,
                                47.3222
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Type": "Land Unit (blue)_2",
                                "a_Size": "Unit size_15",
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a814",
                            "contactId": "CA1342",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:13",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:13",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:13",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                32.264,
                                82.4565
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a815",
                            "contactId": "CA331",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:14",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:14",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:14",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                37.1832,
                                63.307
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_5"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a806",
                                    "contactId": "CA3095",
                                    "name": "Blue:5",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:5",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:5",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:5",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 45,
                                    "platformTypeId": "blue_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Type": "FIAC (blue)_2",
                                        "a_Speed": 20,
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a886",
                                    "contactId": "CA46",
                                    "name": "Blue:85",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:85",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:85",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:85",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 15,
                                    "platformTypeId": "blue_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Type": "FIAC (blue)_1",
                                        "a_Speed": 10,
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a898",
                                    "contactId": "CA1025",
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
                                    "health": 10,
                                    "platformTypeId": "blue_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 25,
                                        "a_Type": "Submarine (blue)_2",
                                        "a_Equipment": "_22"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a816",
                            "contactId": "CA2519",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:15",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                42.6043,
                                60.1528
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Type": "Land Unit (blue)_4",
                                "a_Size": "Unit size_25",
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a817",
                            "contactId": "CA342",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:16",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:16",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:16",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                38.0398,
                                66.2795
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_5",
                                "a_Equipment": "_7",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a818",
                            "contactId": "CA2297",
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
                            "health": 15,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                51.8202,
                                55.6797
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_1",
                                "a_Equipment": "_32",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a820",
                            "contactId": "CA275",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:19",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:19",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:19",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                53.8946,
                                26.9709
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_5",
                                "a_Equipment": "_19",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a821",
                            "contactId": "CA2703",
                            "name": "Blue:20",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:20",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:20",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:20",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                28.951196273421633,
                                36.07784863099124
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_4",
                                "a_Airfield": "a846",
                                "a_Equipment": "_10"
                            }
                        },
                        {
                            "uniqid": "a822",
                            "contactId": "CA367",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:21",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:21",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:21",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                54.0708,
                                63.0064
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_6",
                                "a_Equipment": "_46",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a823",
                            "contactId": "CA191",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:22",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:22",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:22",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                31.752,
                                43.9562
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a824",
                            "contactId": "CA17",
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
                            "health": 15,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                52.7507,
                                66.2966
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a825",
                            "contactId": "CA2668",
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
                            "health": 10,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                46.8241,
                                60.4241
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a826",
                            "contactId": "CA3087",
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
                            "health": 90,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                46.7075,
                                22.139
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a827",
                            "contactId": "CA3074",
                            "name": "Blue:26",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:26",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:26",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:26",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                33.6046,
                                44.137
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a828",
                            "contactId": "CA160",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:27",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                29.248522485229064,
                                35.96961780350348
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (blue)_4",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a846",
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a829",
                            "contactId": "CA675",
                            "name": "Blue:28",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:28",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                39.1219,
                                28.8599
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_1",
                                "a_Connections": "_8",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a831",
                            "contactId": "CA1695",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:30",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:30",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:30",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.0701,
                                78.544
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a835",
                            "contactId": "CA1050",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:34",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:34",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:34",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                46.4941,
                                61.4695
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a836",
                            "contactId": "CA1210",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                49.91352220954476,
                                49.779417962193875
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_2",
                                "a_Speed": 260,
                                "a_Airfield": "a809",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_18"
                            }
                        },
                        {
                            "uniqid": "a837",
                            "contactId": "CA1770",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:36",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                48.1355,
                                54.0291
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_4",
                                "a_Connections": "_13",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a838",
                            "contactId": "CA2407",
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
                                50.7507,
                                68.5666
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a840",
                            "contactId": "CA1748",
                            "name": "Blue:39",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:39",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:39",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:39",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                34.0592,
                                78.4878
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a841",
                            "contactId": "CA2995",
                            "name": "Blue:40",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:40",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:40",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:40",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                41.272,
                                62.5671
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_1",
                                "a_Connections": "_42",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a842",
                            "contactId": "CA730",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:41",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                40.2306,
                                37.298
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a843",
                            "contactId": "CA2742",
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
                            "health": 60,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                36.0488,
                                51.9384
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_3",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a844",
                            "contactId": "CA363",
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
                            "health": 40,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                38.4742,
                                74.9057
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_1"
                            }
                        },
                        {
                            "uniqid": "a846",
                            "contactId": "CA1435",
                            "name": "Blue:45",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:45",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                29.0727,
                                35.9262
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a849",
                            "contactId": "CA2411",
                            "name": "Blue:48",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:48",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:48",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:48",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                49.93451097622383,
                                49.91707675443218
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_2",
                                "a_Airfield": "a809",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a850",
                            "contactId": "CA2603",
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
                            "health": 30,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                52.8277,
                                84.5185
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_3",
                                "a_Equipment": "_24",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a851",
                            "contactId": "CA113",
                            "name": "Blue:50",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:50",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                52.1933,
                                28.1623
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Type": "Land Unit (blue)_6",
                                "a_Size": "Unit size_49",
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "a852",
                            "contactId": "CA761",
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
                            "health": 30,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                43.617,
                                45.1157
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a853",
                            "contactId": "CA2074",
                            "name": "Blue:52",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:52",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:52",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:52",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                46.65447112503139,
                                60.33682795431474
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_5",
                                "a_Airfield": "a825",
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a854",
                            "contactId": "CA2224",
                            "name": "Blue:53",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                50.3512,
                                85.2678
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_2",
                                "a_Equipment": "_47",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a857",
                            "contactId": "CA1071",
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
                            "health": 50,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                37.3517,
                                51.8827
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a859",
                            "contactId": "CA2469",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:58",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:58",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:58",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                37.5717,
                                39.937
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Type": "Land Unit (blue)_5",
                                "a_Size": "Unit size_16",
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a860",
                            "contactId": "CA1698",
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
                            "health": 50,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                41.7661,
                                64.2493
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a861",
                            "contactId": "CA1051",
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
                            "health": 85,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                46.72205155919248,
                                60.6403571268235
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (blue)_6",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a825",
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "a862",
                            "contactId": "CA2066",
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
                            "health": 45,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                41.63182144492648,
                                64.08902711064734
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (blue)_2",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a860",
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a864",
                            "contactId": "CA809",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:63",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:63",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:63",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                37.52669156749907,
                                51.83033000081864
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (blue)_1",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a857",
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a865",
                            "contactId": "CA1473",
                            "name": "Blue:64",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:64",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:64",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:64",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                50.77507088315644,
                                68.84833388366003
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (blue)_1",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a838",
                                "a_Equipment": "_20"
                            }
                        },
                        {
                            "uniqid": "a866",
                            "contactId": "CA2713",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:65",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:65",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:65",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                50.88609098538608,
                                68.37918076879538
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (blue)_1",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a838",
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a867",
                            "contactId": "CA1701",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:66",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:66",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:66",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                33.4024,
                                82.9719
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_5",
                                "a_Equipment": "_2",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a869",
                            "contactId": "CA412",
                            "name": "Blue:68",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:68",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:68",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:68",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                52.9779,
                                66.4507
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_6",
                                "a_Connections": "_1",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a870",
                            "contactId": "CA2968",
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
                            "health": 50,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                41.5484,
                                22.2403
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a871",
                            "contactId": "CA3238",
                            "name": "Blue:70",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:70",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:70",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:70",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                36.3319,
                                70.9627
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_6"
                            }
                        },
                        {
                            "uniqid": "a872",
                            "contactId": "CA3120",
                            "name": "Blue:71",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                31.5764,
                                35.4814
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_5",
                                "a_Connections": "_46",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a874",
                            "contactId": "CA2130",
                            "name": "Blue:73",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:73",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:73",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:73",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                39.4473,
                                31.9204
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_5"
                            }
                        },
                        {
                            "uniqid": "a875",
                            "contactId": "CA1297",
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
                            "health": 85,
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                46.87959788772618,
                                60.17393007208304
                            ],
                            "attributes": {
                                "a_Type": "Bomber Squadron (blue)_5",
                                "a_Speed": 200,
                                "a_Airfield": "a825",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a876",
                            "contactId": "CA3136",
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
                            "health": 70,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                38.363,
                                42.506
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_3"
                            }
                        },
                        {
                            "uniqid": "a878",
                            "contactId": "CA2580",
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
                            "health": 85,
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                45.4416,
                                57.7848
                            ],
                            "attributes": {
                                "a_Speed": 58,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (blue)_6",
                                "a_Equipment": "_19",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a879",
                            "contactId": "CA1707",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:78",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:78",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:78",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                50.86642768884528,
                                68.34870796681561
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_4",
                                "a_Airfield": "a838",
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a880",
                            "contactId": "CA1856",
                            "name": "Blue:79",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:79",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:79",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:79",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                51.0511,
                                58.353
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_5",
                                "a_Connections": "_8",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a882",
                            "contactId": "CA740",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:81",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:81",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:81",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                47.7656,
                                77.9792
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_6",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a883",
                            "contactId": "CA1851",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:82",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:82",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:82",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                45.3346,
                                71.3586
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (blue)_3",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a884",
                            "contactId": "CA3105",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:83",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:83",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:83",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                43.771066637475194,
                                44.987332464954356
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_2",
                                "a_Airfield": "a852",
                                "a_Equipment": "_42"
                            }
                        },
                        {
                            "uniqid": "a885",
                            "contactId": "CA2713",
                            "name": "Blue:84",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:84",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:84",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:84",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.5265,
                                75.3568
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_4"
                            }
                        },
                        {
                            "uniqid": "a887",
                            "contactId": "CA1296",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:86",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                43.784805077675706,
                                45.026137292433745
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_3",
                                "a_Airfield": "a852",
                                "a_Equipment": "_42"
                            }
                        },
                        {
                            "uniqid": "a888",
                            "contactId": "CA848",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:87",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:87",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:87",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                46.70341306703341,
                                60.61878874268202
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_2",
                                "a_Speed": 220,
                                "a_Airfield": "a825",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a889",
                            "contactId": "CA216",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:88",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:88",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:88",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                48.2406,
                                80.0549
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (blue)_1"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a847",
                                    "contactId": "CA3014",
                                    "name": "Blue:46",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:46",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:46",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:46",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 45,
                                    "platformTypeId": "blue_maritime_ship",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 10,
                                        "a_Type": "Ship (blue)_4",
                                        "a_MEZ_range": 300,
                                        "a_Equipment": "_3"
                                    }
                                },
                                {
                                    "uniqid": "a858",
                                    "contactId": "CA2948",
                                    "name": "Blue:57",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:57",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:57",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:57",
                                            "typeId": "blue_maritime_fiac",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 45,
                                    "platformTypeId": "blue_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Type": "FIAC (blue)_4",
                                        "a_Speed": 20,
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a881",
                                    "contactId": "CA124",
                                    "name": "Blue:80",
                                    "perceptions": [
                                        {
                                            "by": "f-red",
                                            "name": "Blue:80",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Blue:80",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Blue:80",
                                            "typeId": "blue_maritime_ship",
                                            "force": "f-blue"
                                        }
                                    ],
                                    "health": 45,
                                    "platformTypeId": "blue_maritime_ship",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 20,
                                        "a_Type": "Ship (blue)_1",
                                        "a_MEZ_range": 300,
                                        "a_Equipment": "_2"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a890",
                            "contactId": "CA1470",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:89",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:89",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:89",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                48.584,
                                54.5908
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_4",
                                "a_Connections": "_7",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a891",
                            "contactId": "CA3161",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:90",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:90",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:90",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                54.2113,
                                56.1841
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Type": "SAM (blue)_3",
                                "a_Equipment": "_19",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a893",
                            "contactId": "CA118",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:92",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:92",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:92",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 0,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                29.170863468331067,
                                36.09872434493753
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_5",
                                "a_Airfield": "a846",
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a894",
                            "contactId": "CA1856",
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
                            "health": 5,
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                32.7418,
                                72.5353
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (blue)_3",
                                "a_Connections": "_26",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a895",
                            "contactId": "CA3193",
                            "name": "Blue:94",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:94",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:94",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:94",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                50.6036744725445,
                                68.73009976193539
                            ],
                            "attributes": {
                                "a_Type": "Air LOGS (blue)_6",
                                "a_Speed": 260,
                                "a_Airfield": "a838",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a896",
                            "contactId": "CA2227",
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
                            "health": 15,
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.2753,
                                55.5546
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (blue)_2"
                            }
                        },
                        {
                            "uniqid": "a897",
                            "contactId": "CA1062",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:96",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:96",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:96",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                49.78289822412403,
                                50.185338428627496
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Type": "ISTAR (blue)_6",
                                "a_Airfield": "a809",
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a899",
                            "contactId": "CA365",
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
                            "health": 5,
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                49.89111002330545,
                                49.72858727864273
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron (blue)_4",
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a809",
                                "a_Equipment": "_45"
                            }
                        },
                        {
                            "uniqid": "a819",
                            "contactId": "CA1487",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:18",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:18",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:18",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                47.3052,
                                76.1141
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine (blue)_3",
                                "a_Equipment": "_45"
                            }
                        },
                        {
                            "uniqid": "a830",
                            "contactId": "CA1711",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:29",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:29",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:29",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                43.625,
                                51.0535
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_4",
                                "a_Speed": 15,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a832",
                            "contactId": "CA3263",
                            "name": "Blue:31",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:31",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:31",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:31",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                54.4743,
                                54.3063
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (blue)_1",
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "a845",
                            "contactId": "CA2864",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:44",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                39.5299,
                                68.5569
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_4",
                                "a_Speed": 25,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a848",
                            "contactId": "CA2556",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:47",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:47",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:47",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                53.195,
                                51.4641
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_2",
                                "a_Speed": 20,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a855",
                            "contactId": "CA91",
                            "name": "Blue:54",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:54",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:54",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:54",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                41.2715,
                                81.8356
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_2",
                                "a_Speed": 10,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a856",
                            "contactId": "CA682",
                            "name": "Blue:55",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:55",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:55",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:55",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                49.3915,
                                56.0845
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Ship (blue)_1",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a868",
                            "contactId": "CA903",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                45.1824,
                                34.0243
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Ship (blue)_4",
                                "a_MEZ_range": 300,
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a877",
                            "contactId": "CA88",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:76",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                49.9834,
                                26.2214
                            ],
                            "attributes": {
                                "a_Type": "FIAC (blue)_6",
                                "a_Speed": 20,
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a892",
                            "contactId": "CA39",
                            "name": "Blue:91",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:91",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:91",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:91",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                51.9617,
                                84.6587
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Submarine (blue)_3",
                                "a_Equipment": "_48"
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
                            "uniqid": "a901",
                            "contactId": "CA3019",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:0",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:0",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:0",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                27.096006294591653,
                                58.70559142877407
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a998",
                                "a_Equipment": "_11",
                                "a_Type": "ISTAR (red)_3"
                            }
                        },
                        {
                            "uniqid": "a903",
                            "contactId": "CA1111",
                            "name": "Red:2",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:2",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:2",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:2",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                22.2067,
                                53.195
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a906",
                            "contactId": "CA890",
                            "name": "Red:5",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:5",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:5",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:5",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                14.9753,
                                42.7223
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_4",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a907",
                            "contactId": "CA3075",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:6",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:6",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:6",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                13.9494,
                                64.6403
                            ],
                            "attributes": {
                                "a_Speed": 46,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_1",
                                "a_Equipment": "_8",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a908",
                            "contactId": "CA3146",
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
                            "health": 15,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.6246,
                                34.0028
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a909",
                            "contactId": "CA968",
                            "name": "Red:8",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:8",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:8",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:8",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                5.3153,
                                68.3571
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_8",
                                "a_Type": "SAM (red)_6",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a910",
                            "contactId": "CA167",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:9",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:9",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:9",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                27.08953071088588,
                                58.31688047325408
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron (red)_4",
                                "a_Airfield": "a998",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "a913",
                            "contactId": "CA2925",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:12",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:12",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:12",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                9.24661905061854,
                                69.72452889170458
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron (red)_5",
                                "a_Airfield": "a968",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a915",
                            "contactId": "CA397",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:14",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:14",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:14",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                12.8787,
                                53.7923
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a916",
                            "contactId": "CA2305",
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
                            "health": 40,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                23.54797306020111,
                                47.212387201932785
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Air LOGS (red)_2",
                                "a_Airfield": "a946",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a917",
                            "contactId": "CA809",
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
                                    "name": "Red:16",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:16",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                13.5905,
                                72.2896
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_6"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a911",
                                    "contactId": "CA79",
                                    "name": "Red:10",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:10",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:10",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:10",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 70,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 15,
                                        "a_Type": "Submarine (red)_1",
                                        "a_Equipment": "_23"
                                    }
                                },
                                {
                                    "uniqid": "a923",
                                    "contactId": "CA2011",
                                    "name": "Red:22",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:22",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:22",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:22",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 90,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 25,
                                        "a_Type": "Submarine (red)_2",
                                        "a_Equipment": "_49"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a920",
                            "contactId": "CA3000",
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
                            "health": 75,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                6.7098,
                                31.6522
                            ],
                            "attributes": {
                                "a_Size": "Unit size_49",
                                "a_Speed": 10,
                                "a_Type": "Land Unit (red)_2",
                                "a_Equipment": "_43"
                            }
                        },
                        {
                            "uniqid": "a921",
                            "contactId": "CA1293",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:20",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:20",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:20",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                27.303647212555767,
                                58.59866907311106
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Fast Jet Squadron (red)_3",
                                "a_Airfield": "a998",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_17"
                            }
                        },
                        {
                            "uniqid": "a922",
                            "contactId": "CA389",
                            "name": "Red:21",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:21",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:21",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:21",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                23.296385853803596,
                                47.37988221213367
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Fast Jet Squadron (red)_3",
                                "a_Airfield": "a946",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a924",
                            "contactId": "CA1127",
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
                            "health": 0,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.9105,
                                44.7917
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a925",
                            "contactId": "CA201",
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
                            "health": 0,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                16.043,
                                71.8591
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_3",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a926",
                            "contactId": "CA1803",
                            "name": "Red:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:25",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:25",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:25",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                21.7131,
                                55.6193
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_12",
                                "a_Type": "SAM (red)_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a927",
                            "contactId": "CA735",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:26",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                7.783,
                                68.421
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_4"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a904",
                                    "contactId": "CA163",
                                    "name": "Red:3",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:3",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 15,
                                    "platformTypeId": "red_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 25,
                                        "a_Type": "FIAC (red)_2",
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a919",
                                    "contactId": "CA2460",
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
                                    "health": 0,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 10,
                                        "a_Type": "Submarine (red)_4",
                                        "a_Equipment": "_36"
                                    }
                                },
                                {
                                    "uniqid": "a952",
                                    "contactId": "CA1721",
                                    "name": "Red:51",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:51",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:51",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:51",
                                            "typeId": "red_maritime_submarine",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 40,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 10,
                                        "a_Type": "Submarine (red)_4",
                                        "a_Equipment": "_2"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a928",
                            "contactId": "CA1920",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:27",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:27",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:27",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                17.7294,
                                44.3743
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_21",
                                "a_Type": "SAM (red)_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a929",
                            "contactId": "CA3165",
                            "name": "Red:28",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:28",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:28",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:28",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                7.9813,
                                81.8318
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_6"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a935",
                                    "contactId": "CA456",
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
                                    "health": 70,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 20,
                                        "a_Type": "Submarine (red)_2",
                                        "a_Equipment": "_49"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a930",
                            "contactId": "CA75",
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
                            "health": 25,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                28.2576,
                                75.2837
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_3",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a931",
                            "contactId": "CA1702",
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
                            "health": 75,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                9.2229,
                                22.2532
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_4"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a905",
                                    "contactId": "CA2568",
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
                                    "health": 20,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 15,
                                        "a_Type": "Submarine (red)_3",
                                        "a_Equipment": "_37"
                                    }
                                },
                                {
                                    "uniqid": "a918",
                                    "contactId": "CA1087",
                                    "name": "Red:17",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:17",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:17",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:17",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 85,
                                    "platformTypeId": "red_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 10,
                                        "a_Type": "FIAC (red)_2",
                                        "a_Number_FIACs": 100
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a932",
                            "contactId": "CA722",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:31",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:31",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:31",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                20.1043,
                                63.7465
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_42",
                                "a_Type": "SAM (red)_2",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a933",
                            "contactId": "CA268",
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
                            "health": 20,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                9.1801,
                                79.3291
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_3"
                            }
                        },
                        {
                            "uniqid": "a934",
                            "contactId": "CA978",
                            "name": "Red:33",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:33",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:33",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:33",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                10.8254,
                                58.6508
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_5",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a937",
                            "contactId": "CA3310",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:36",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:36",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:36",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                12.0042,
                                34.7014
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_4"
                            }
                        },
                        {
                            "uniqid": "a938",
                            "contactId": "CA434",
                            "name": "Red:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:37",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:37",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:37",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.6674,
                                77.7642
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a939",
                            "contactId": "CA471",
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
                            "health": 85,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                8.9237,
                                84.9005
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a940",
                            "contactId": "CA3215",
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
                            "health": 55,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.1664,
                                83.8868
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a941",
                            "contactId": "CA2612",
                            "name": "Red:40",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:40",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:40",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:40",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 25,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                27.22492237362993,
                                58.33083170329665
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a998",
                                "a_Equipment": "_14",
                                "a_Type": "ISTAR (red)_6"
                            }
                        },
                        {
                            "uniqid": "a943",
                            "contactId": "CA2065",
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
                            "health": 15,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.0963,
                                59.6749
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a944",
                            "contactId": "CA2286",
                            "name": "Red:43",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:43",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:43",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:43",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                12.378,
                                72.2908
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_41",
                                "a_Type": "SAM (red)_6",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a945",
                            "contactId": "CA3383",
                            "name": "Red:44",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:44",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:44",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:44",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 15,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                24.1537,
                                54.3553
                            ],
                            "attributes": {
                                "a_Size": "Unit size_25",
                                "a_Speed": 46,
                                "a_Type": "Land Unit (red)_3",
                                "a_Equipment": "_25"
                            }
                        },
                        {
                            "uniqid": "a946",
                            "contactId": "CA158",
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
                            "health": 80,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                23.4759,
                                47.3921
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a947",
                            "contactId": "CA2464",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:46",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                4.6601,
                                75.7173
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_4"
                            }
                        },
                        {
                            "uniqid": "a948",
                            "contactId": "CA186",
                            "name": "Red:47",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:47",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:47",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:47",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                20.012136892305993,
                                83.78832061674095
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a940",
                                "a_Equipment": "_44",
                                "a_Type": "ISTAR (red)_3"
                            }
                        },
                        {
                            "uniqid": "a949",
                            "contactId": "CA477",
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
                            "health": 75,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                21.4068,
                                25.6867
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a950",
                            "contactId": "CA452",
                            "name": "Red:49",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:49",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:49",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:49",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                21.1319,
                                78.3438
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_6",
                                "a_Connections": "_31",
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a953",
                            "contactId": "CA2833",
                            "name": "Red:52",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:52",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:52",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:52",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                27.9286,
                                81.0342
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_3",
                                "a_Type": "SAM (red)_6",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Degraded"
                            }
                        },
                        {
                            "uniqid": "a954",
                            "contactId": "CA2003",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:53",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:53",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:53",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                9.208924908940759,
                                69.74568609466306
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a968",
                                "a_Equipment": "_30",
                                "a_Type": "ISTAR (red)_1"
                            }
                        },
                        {
                            "uniqid": "a955",
                            "contactId": "CA989",
                            "name": "Red:54",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:54",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:54",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:54",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                20.0588,
                                58.7283
                            ],
                            "attributes": {
                                "a_Size": "Unit size_48",
                                "a_Speed": 22,
                                "a_Type": "Land Unit (red)_1",
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a956",
                            "contactId": "CA2577",
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
                            "health": 40,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                25.5549,
                                29.3246
                            ],
                            "attributes": {
                                "a_Size": "Unit size_15",
                                "a_Speed": 46,
                                "a_Type": "Land Unit (red)_1",
                                "a_Equipment": "_5"
                            }
                        },
                        {
                            "uniqid": "a957",
                            "contactId": "CA2705",
                            "name": "Red:56",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:56",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:56",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:56",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 5,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                23.313622954705227,
                                47.30758081008445
                            ],
                            "attributes": {
                                "a_Speed": 260,
                                "a_Type": "Fast Jet Squadron (red)_2",
                                "a_Airfield": "a946",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a958",
                            "contactId": "CA836",
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
                            "health": 5,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                7.1284,
                                71.7376
                            ],
                            "attributes": {
                                "a_Size": "Unit size_1",
                                "a_Speed": 34,
                                "a_Type": "Land Unit (red)_6",
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a959",
                            "contactId": "CA2018",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:58",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:58",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:58",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                4.156,
                                26.6328
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_15",
                                "a_Type": "SAM (red)_6",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a960",
                            "contactId": "CA1211",
                            "name": "Red:59",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:59",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:59",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:59",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                24.91899721403528,
                                59.64152538256655
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron (red)_1",
                                "a_Airfield": "a943",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a961",
                            "contactId": "CA942",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:60",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:60",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:60",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                7.165,
                                67.3365
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a962",
                            "contactId": "CA1844",
                            "name": "Red:61",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:61",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:61",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:61",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                5.7915,
                                74.8738
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_3",
                                "a_Minefield_Passable": "Limited"
                            }
                        },
                        {
                            "uniqid": "a963",
                            "contactId": "CA3203",
                            "name": "Red:62",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:62",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:62",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:62",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                13.8053,
                                84.501
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_6",
                                "a_Minefield_Passable": "Yes"
                            }
                        },
                        {
                            "uniqid": "a964",
                            "contactId": "CA1327",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:63",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:63",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:63",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                11.0743,
                                38.7466
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_6"
                            }
                        },
                        {
                            "uniqid": "a965",
                            "contactId": "CA1733",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:64",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:64",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:64",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 10,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                2.4830283721995636,
                                34.113854270888915
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Air LOGS (red)_1",
                                "a_Airfield": "a908",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a967",
                            "contactId": "CA1407",
                            "name": "Red:66",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:66",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:66",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:66",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                27.09305720625613,
                                58.704684310233056
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Air LOGS (red)_5",
                                "a_Airfield": "a998",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a968",
                            "contactId": "CA2885",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:67",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:67",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:67",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.1412,
                                69.5769
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a969",
                            "contactId": "CA182",
                            "name": "Red:68",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:68",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:68",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:68",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                9.314089344984394,
                                69.62715234201916
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Type": "Air LOGS (red)_5",
                                "a_Airfield": "a968",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a970",
                            "contactId": "CA2105",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:69",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:69",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:69",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 45,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.5618,
                                28.4491
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a971",
                            "contactId": "CA388",
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
                            "health": 95,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.2255,
                                65.4828
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a972",
                            "contactId": "CA2240",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:71",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:71",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:71",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 65,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                17.6499,
                                23.3443
                            ],
                            "attributes": {
                                "a_Speed": 34,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_5",
                                "a_Equipment": "_31",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a973",
                            "contactId": "CA778",
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
                            "health": 40,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                26.1788,
                                60.2405
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_4"
                            }
                        },
                        {
                            "uniqid": "a974",
                            "contactId": "CA2633",
                            "name": "Red:73",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:73",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:73",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:73",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                26.972776680917836,
                                58.4414514770992
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Fast Jet Squadron (red)_3",
                                "a_Airfield": "a998",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_37"
                            }
                        },
                        {
                            "uniqid": "a975",
                            "contactId": "CA202",
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
                            "health": 20,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                23.2185,
                                31.9496
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_2",
                                "a_Type": "SAM (red)_6",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a976",
                            "contactId": "CA2888",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:75",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:75",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:75",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 90,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                6.4404,
                                69.3995
                            ],
                            "attributes": {
                                "a_Size": "Unit size_48",
                                "a_Speed": 34,
                                "a_Type": "Land Unit (red)_2",
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a977",
                            "contactId": "CA1700",
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
                            "health": 75,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                10.6514,
                                28.4284
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a978",
                            "contactId": "CA560",
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
                            "health": 95,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                19.7709,
                                76.3688
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a979",
                            "contactId": "CA1438",
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
                            "health": 65,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.5707,
                                49.7661
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a980",
                            "contactId": "CA1034",
                            "name": "Red:79",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:79",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:79",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:79",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                24.92080290907068,
                                59.7183690827196
                            ],
                            "attributes": {
                                "a_Speed": 240,
                                "a_Number_Aircraft": 10,
                                "a_Airfield": "a943",
                                "a_Equipment": "_33",
                                "a_Type": "ISTAR (red)_6"
                            }
                        },
                        {
                            "uniqid": "a981",
                            "contactId": "CA3251",
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
                            "health": 35,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                9.253751714691521,
                                69.43477591451067
                            ],
                            "attributes": {
                                "a_Speed": 200,
                                "a_Type": "Air LOGS (red)_6",
                                "a_Airfield": "a968",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a982",
                            "contactId": "CA2623",
                            "name": "Red:81",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:81",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:81",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:81",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                8.4878,
                                38.5255
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a983",
                            "contactId": "CA3245",
                            "name": "Red:82",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:82",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:82",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:82",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                19.9346,
                                57.8329
                            ],
                            "attributes": {
                                "a_Size": "Unit size_23",
                                "a_Speed": 10,
                                "a_Type": "Land Unit (red)_1",
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a984",
                            "contactId": "CA1659",
                            "name": "Red:83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:83",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:83",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:83",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.7531,
                                76.0773
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_2"
                            }
                        },
                        {
                            "uniqid": "a985",
                            "contactId": "CA3107",
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
                                20.0763,
                                55.9407
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a986",
                            "contactId": "CA2425",
                            "name": "Red:85",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:85",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:85",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:85",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                2.2158,
                                32.9167
                            ],
                            "attributes": {
                                "a_Speed": 22,
                                "a_Number_Missiles": 100,
                                "a_Type": "SSM (red)_3",
                                "a_Equipment": "_42",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a987",
                            "contactId": "CA3004",
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
                            "health": 25,
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                9.194459712872128,
                                69.75092078127904
                            ],
                            "attributes": {
                                "a_Speed": 280,
                                "a_Type": "Fast Jet Squadron (red)_4",
                                "a_Airfield": "a968",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_42"
                            }
                        },
                        {
                            "uniqid": "a988",
                            "contactId": "CA1884",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:87",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:87",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:87",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                17.9827,
                                60.001
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_5"
                            }
                        },
                        {
                            "uniqid": "a989",
                            "contactId": "CA215",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:88",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:88",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:88",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 55,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                17.9604,
                                29.612
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_6",
                                "a_Connections": "_25",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a990",
                            "contactId": "CA1709",
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
                            "health": 70,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.3126,
                                79.8666
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_3"
                            }
                        },
                        {
                            "uniqid": "a992",
                            "contactId": "CA3325",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:91",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:91",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:91",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 75,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                23.9326,
                                73.5683
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_6",
                                "a_Connections": "_40",
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a993",
                            "contactId": "CA1002",
                            "name": "Red:92",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:92",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:92",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:92",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                2.692314007154424,
                                33.83598943994576
                            ],
                            "attributes": {
                                "a_Speed": 220,
                                "a_Type": "Air LOGS (red)_1",
                                "a_Airfield": "a908",
                                "a_Number_Aircraft": 10,
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "a994",
                            "contactId": "CA917",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:93",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:93",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:93",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 20,
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                13.4855,
                                79.0816
                            ],
                            "attributes": {
                                "a_Density": 100,
                                "a_Type": "Maritime Minefield (red)_1",
                                "a_Minefield_Passable": "No"
                            }
                        },
                        {
                            "uniqid": "a995",
                            "contactId": "CA3399",
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
                            "health": 30,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                16.6385,
                                61.1572
                            ],
                            "attributes": {
                                "a_Type": "Fixed Asset (red)_1"
                            }
                        },
                        {
                            "uniqid": "a996",
                            "contactId": "CA1361",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:95",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:95",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:95",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "health": 30,
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                23.1408,
                                53.2694
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_MEZ_range": 300,
                                "a_Type": "MTG (red)_6"
                            },
                            "comprising": [
                                {
                                    "uniqid": "a951",
                                    "contactId": "CA806",
                                    "name": "Red:50",
                                    "perceptions": [
                                        {
                                            "by": "f-blue",
                                            "name": "Red:50",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-green",
                                            "name": "Red:50",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        },
                                        {
                                            "by": "f-white",
                                            "name": "Red:50",
                                            "typeId": "red_maritime_fiac",
                                            "force": "f-red"
                                        }
                                    ],
                                    "health": 70,
                                    "platformTypeId": "red_maritime_fiac",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 15,
                                        "a_Type": "FIAC (red)_2",
                                        "a_Number_FIACs": 100
                                    }
                                },
                                {
                                    "uniqid": "a991",
                                    "contactId": "CA3062",
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
                                    "health": 20,
                                    "platformTypeId": "red_maritime_submarine",
                                    "condition": "working",
                                    "attributes": {
                                        "a_Speed": 10,
                                        "a_Type": "Submarine (red)_6",
                                        "a_Equipment": "_35"
                                    }
                                }
                            ]
                        },
                        {
                            "uniqid": "a997",
                            "contactId": "CA1084",
                            "name": "Red:96",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:96",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:96",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:96",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "health": 35,
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                12.1368,
                                38.9345
                            ],
                            "attributes": {
                                "a_Number_Missiles": 100,
                                "a_Equipment": "_2",
                                "a_Type": "SAM (red)_3",
                                "a_MEZ_range": 300,
                                "a_C2_Status": "Operational"
                            }
                        },
                        {
                            "uniqid": "a998",
                            "contactId": "CA811",
                            "name": "Red:97",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:97",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:97",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:97",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "health": 50,
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.1419,
                                58.5102
                            ],
                            "attributes": {
                                "a_Type": "Airfield"
                            }
                        },
                        {
                            "uniqid": "a1000",
                            "contactId": "CA2445",
                            "name": "Red:99",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:99",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:99",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:99",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "health": 80,
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                13.9871,
                                22.984
                            ],
                            "attributes": {
                                "a_Type": "C2 Node (red)_2",
                                "a_Connections": "_46",
                                "a_C2_Status": "None"
                            }
                        },
                        {
                            "uniqid": "a902",
                            "contactId": "CA1366",
                            "name": "Red:1",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:1",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:1",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:1",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                9.4257,
                                56.6099
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "Submarine (red)_3",
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a912",
                            "contactId": "CA1748",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:11",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 95,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                7.548,
                                45.5812
                            ],
                            "attributes": {
                                "a_Speed": 30,
                                "a_Type": "FIAC (red)_6",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a914",
                            "contactId": "CA74",
                            "name": "Red:13",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:13",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:13",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:13",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 40,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                8.4005,
                                33.3021
                            ],
                            "attributes": {
                                "a_Speed": 25,
                                "a_Type": "FIAC (red)_4",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a936",
                            "contactId": "CA2138",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:35",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:35",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:35",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "health": 70,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                19.9463,
                                35.1665
                            ],
                            "attributes": {
                                "a_Speed": 15,
                                "a_Type": "FIAC (red)_4",
                                "a_Number_FIACs": 100
                            }
                        },
                        {
                            "uniqid": "a942",
                            "contactId": "CA1809",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:41",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:41",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:41",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 60,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                8.8514,
                                34.5129
                            ],
                            "attributes": {
                                "a_Speed": 10,
                                "a_Type": "Submarine (red)_4",
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a966",
                            "contactId": "CA1917",
                            "name": "Red:65",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:65",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:65",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:65",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "health": 85,
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                10.6213,
                                70.7863
                            ],
                            "attributes": {
                                "a_Speed": 20,
                                "a_Type": "Submarine (red)_4",
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a999",
                            "contactId": "CA287",
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
                            "health": 5,
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                13.799,
                                30.2105
                            ],
                            "attributes": {
                                "a_Speed": 25,
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
                        "a_Airfield",
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
                        "a_Speed",
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
                            "Reference",
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
    "gameTurn": 1,
    "infoType": true,
    "messageType": "InfoMessage",
    "name": "wargame-l6nngxlk",
    "phase": "planning",
    "turnEndTime": "2021-08-10T16:17:26+01:00",
    "wargameInitiated": true,
    "wargameTitle": "P9 Test"
}
export default game;