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
                            "uniqid": "a401",
                            "contactId": "CA2028",
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
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                41.8264,
                                25.5758
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_5"
                            },
                            "comprising": []
                        },
                        {
                            "uniqid": "a405",
                            "contactId": "CA1471",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:4",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1471",
                                    "typeId": "blue_land_asset"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.4351,
                                78.3456
                            ],
                            "attributes": {
                                "a_Units": "_45"
                            }
                        },
                        {
                            "uniqid": "a406",
                            "contactId": "CA1409",
                            "name": "Blue:5",
                            "perceptions": [],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                52.8049,
                                62.3539
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a407",
                            "contactId": "CA140",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:6",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:6",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                46.1362,
                                64.7214
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a408",
                            "contactId": "CA1763",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1763",
                                    "typeId": "blue_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:7",
                                    "typeId": "blue_land_unit"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                39.2451,
                                49.3683
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit48",
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a409",
                            "contactId": "CA1222",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:8",
                                    "typeId": "blue_air_logs",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1222",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                53.5302,
                                39.2908
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_18012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890"
                            }
                        },
                        {
                            "uniqid": "a410",
                            "contactId": "CA1531",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1531",
                                    "typeId": "blue_land_ssm"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1531",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                38.5368,
                                35.8002
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_4",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a411",
                            "contactId": "CA2886",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_logs",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2886",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                39.7074,
                                60.7838
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "a412",
                            "contactId": "CA926",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA926",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA926"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                40.3227,
                                84.5497
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_19"
                            }
                        },
                        {
                            "uniqid": "a413",
                            "contactId": "CA2936",
                            "name": "Blue:12",
                            "perceptions": [],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                51.0938,
                                82.2623
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_38"
                            }
                        },
                        {
                            "uniqid": "a414",
                            "contactId": "CA1021",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:13",
                                    "typeId": "blue_land_asset",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:13",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                39.2614,
                                25.0694
                            ],
                            "attributes": {
                                "a_Units": "_31"
                            }
                        },
                        {
                            "uniqid": "a415",
                            "contactId": "CA1671",
                            "name": "Blue:14",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1671",
                                    "typeId": "blue_maritime_submarine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1671",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                45.0904,
                                40.8477
                            ],
                            "attributes": {
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a416",
                            "contactId": "CA1450",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1450",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:15",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                54.9323,
                                80.712
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_39",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a417",
                            "contactId": "CA1886",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1886",
                                    "typeId": "blue_land_sam"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                39.1969,
                                43.3888
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_32",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a418",
                            "contactId": "CA3205",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3205",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                36.9214,
                                77.6885
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "a419",
                            "contactId": "CA2289",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:18",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2289",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:18",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                48.3976,
                                48.2278
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a420",
                            "contactId": "CA1773",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:19",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                34.9935,
                                39.9442
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_39",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a421",
                            "contactId": "CA2953",
                            "name": "Blue:20",
                            "perceptions": [],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                48.9939,
                                77.9596
                            ],
                            "attributes": {
                                "a_Connections": "_30"
                            }
                        },
                        {
                            "uniqid": "a422",
                            "contactId": "CA1590",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:21",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                31.1977,
                                32.6918
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_16",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a423",
                            "contactId": "CA3070",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:22",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                42.5091,
                                83.6836
                            ],
                            "attributes": {
                                "a_Equipment": "_49"
                            }
                        },
                        {
                            "uniqid": "a424",
                            "contactId": "CA1078",
                            "name": "Blue:23",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1078",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                42.4098,
                                61.3242
                            ],
                            "attributes": {
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a425",
                            "contactId": "CA2226",
                            "name": "Blue:24",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:24",
                                    "typeId": "blue_land_asset"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2226",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                31.7535,
                                44.6505
                            ],
                            "attributes": {
                                "a_Units": "_19"
                            }
                        },
                        {
                            "uniqid": "a426",
                            "contactId": "CA1770",
                            "name": "Blue:25",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:25",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:25",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                36.8269,
                                42.8171
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a427",
                            "contactId": "CA2086",
                            "name": "Blue:26",
                            "perceptions": [],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.6007,
                                29.762
                            ],
                            "attributes": {
                                "a_Units": "_30"
                            }
                        },
                        {
                            "uniqid": "a428",
                            "contactId": "CA565",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:27",
                                    "typeId": "blue_land_asset",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:27",
                                    "typeId": "blue_land_asset",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.2814,
                                70.9237
                            ],
                            "attributes": {
                                "a_Units": "_15"
                            }
                        },
                        {
                            "uniqid": "a429",
                            "contactId": "CA2169",
                            "name": "Blue:28",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:28",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                43.5689,
                                79.301
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a430",
                            "contactId": "CA1672",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:29"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                32.1236,
                                79.1876
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit15",
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a431",
                            "contactId": "CA1731",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:30",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1731",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1731",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                51.6971,
                                79.5817
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a432",
                            "contactId": "CA2167",
                            "name": "Blue:31",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:31",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2167",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:31",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                32.9258,
                                68.8803
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a433",
                            "contactId": "CA2516",
                            "name": "Blue:32",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:32",
                                    "typeId": "blue_land_sam",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:32",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2516",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                47.3597,
                                43.5326
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_49",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a434",
                            "contactId": "CA511",
                            "name": "Blue:33",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA511",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA511",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA511",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                30.9408,
                                26.2814
                            ],
                            "attributes": {
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a435",
                            "contactId": "CA3211",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3211",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                46.5179,
                                77.0017
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_6"
                            }
                        },
                        {
                            "uniqid": "a436",
                            "contactId": "CA1767",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1767",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:35",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                44.6737,
                                84.935
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a437",
                            "contactId": "CA339",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA339"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA339",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                54.8937,
                                55.1315
                            ],
                            "attributes": {
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a438",
                            "contactId": "CA2027",
                            "name": "Blue:37",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:37"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                30.1683,
                                35.8132
                            ],
                            "attributes": {
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a439",
                            "contactId": "CA2281",
                            "name": "Blue:38",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:38",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.4733,
                                40.1215
                            ],
                            "attributes": {
                                "a_Units": "_34"
                            }
                        },
                        {
                            "uniqid": "a440",
                            "contactId": "CA2654",
                            "name": "Blue:39",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2654",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2654",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                46.9832,
                                60.2221
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_9",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a441",
                            "contactId": "CA1494",
                            "name": "Blue:40",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:40",
                                    "typeId": "blue_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                54.5192,
                                43.0073
                            ],
                            "attributes": {
                                "a_Connections": "_1"
                            }
                        },
                        {
                            "uniqid": "a442",
                            "contactId": "CA2098",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:41",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2098",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2098",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                32.9675,
                                69.2081
                            ],
                            "attributes": {
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a443",
                            "contactId": "CA100",
                            "name": "Blue:42",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:42",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA100",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                41.5704,
                                66.2823
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "a444",
                            "contactId": "CA2536",
                            "name": "Blue:43",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2536"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:43"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                29.3128,
                                63.4688
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a445",
                            "contactId": "CA1337",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1337"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1337",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                32.873,
                                33.4674
                            ],
                            "attributes": {
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a446",
                            "contactId": "CA2523",
                            "name": "Blue:45",
                            "perceptions": [],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                30.3797,
                                30.2334
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "a447",
                            "contactId": "CA1747",
                            "name": "Blue:46",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:46",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                47.8751,
                                72.7043
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a448",
                            "contactId": "CA2496",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2496",
                                    "typeId": "blue_land_c2"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                39.1637,
                                65.2465
                            ],
                            "attributes": {
                                "a_Connections": "_13"
                            }
                        },
                        {
                            "uniqid": "a449",
                            "contactId": "CA3250",
                            "name": "Blue:48",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:48",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:48",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3250",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                53.1445,
                                62.2869
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_31"
                            }
                        },
                        {
                            "uniqid": "a450",
                            "contactId": "CA234",
                            "name": "Blue:49",
                            "perceptions": [],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                35.9423,
                                67.5536
                            ],
                            "attributes": {
                                "a_Units": "_10"
                            }
                        },
                        {
                            "uniqid": "a451",
                            "contactId": "CA2490",
                            "name": "Blue:50",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2490",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2490",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2490",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                32.0686,
                                34.8395
                            ],
                            "attributes": {
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a452",
                            "contactId": "CA2381",
                            "name": "Blue:51",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:51",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2381",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                46.0564,
                                82.3589
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a453",
                            "contactId": "CA1061",
                            "name": "Blue:52",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1061",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1061",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                47.8639,
                                53.342
                            ],
                            "attributes": {
                                "a_Equipment": "_9"
                            }
                        },
                        {
                            "uniqid": "a454",
                            "contactId": "CA1995",
                            "name": "Blue:53",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:53",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1995"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                40.605,
                                42.4093
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit26",
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a455",
                            "contactId": "CA1983",
                            "name": "Blue:54",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1983",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                33.056,
                                45.7512
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a456",
                            "contactId": "CA2621",
                            "name": "Blue:55",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2621",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                40.4363,
                                53.7453
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a457",
                            "contactId": "CA994",
                            "name": "Blue:56",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:56",
                                    "typeId": "blue_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                53.9932,
                                25.5688
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a458",
                            "contactId": "CA3120",
                            "name": "Blue:57",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                37.4919,
                                50.7016
                            ],
                            "attributes": {
                                "a_Equipment": "_27"
                            }
                        },
                        {
                            "uniqid": "a459",
                            "contactId": "CA2880",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2880",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                50.8122,
                                26.7617
                            ],
                            "attributes": {
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a460",
                            "contactId": "CA964",
                            "name": "Blue:59",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:59",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA964",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                43.6645,
                                71.5246
                            ],
                            "attributes": {
                                "a_Connections": "_47"
                            }
                        },
                        {
                            "uniqid": "a461",
                            "contactId": "CA2973",
                            "name": "Blue:60",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2973",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2973",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                45.7329,
                                25.3074
                            ],
                            "attributes": {
                                "a_Equipment": "_48"
                            }
                        },
                        {
                            "uniqid": "a462",
                            "contactId": "CA1243",
                            "name": "Blue:61",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1243"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:61",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:61",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                30.7499,
                                27.2321
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_2"
                            }
                        },
                        {
                            "uniqid": "a463",
                            "contactId": "CA2084",
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
                                    "name": "CA2084",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                35.082,
                                81.0484
                            ],
                            "attributes": {
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a464",
                            "contactId": "CA3147",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:63"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                38.276,
                                48.7653
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a465",
                            "contactId": "CA1202",
                            "name": "Blue:64",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:64",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:64",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                47.8457,
                                84.9323
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a466",
                            "contactId": "CA965",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:65",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA965",
                                    "typeId": "blue_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                33.449,
                                32.8826
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a467",
                            "contactId": "CA621",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA621",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                30.0774,
                                51.5145
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a468",
                            "contactId": "CA249",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:67",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                35.9489,
                                58.2969
                            ],
                            "attributes": {
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a469",
                            "contactId": "CA2563",
                            "name": "Blue:68",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2563",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:68",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                33.2775,
                                84.6601
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a470",
                            "contactId": "CA2055",
                            "name": "Blue:69",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:69",
                                    "typeId": "blue_land_c2",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                47.645,
                                68.669
                            ],
                            "attributes": {
                                "a_Connections": "_1"
                            }
                        },
                        {
                            "uniqid": "a471",
                            "contactId": "CA1040",
                            "name": "Blue:70",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:70",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1040"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                42.0713,
                                66.7193
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_16"
                            }
                        },
                        {
                            "uniqid": "a472",
                            "contactId": "CA2539",
                            "name": "Blue:71",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2539",
                                    "typeId": "blue_land_ssm"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:71",
                                    "typeId": "blue_land_ssm"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                37.0798,
                                33.7952
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_27",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a473",
                            "contactId": "CA799",
                            "name": "Blue:72",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA799",
                                    "typeId": "blue_maritime_mtg"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA799",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                48.0547,
                                64.8102
                            ],
                            "attributes": {
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "a474",
                            "contactId": "CA2489",
                            "name": "Blue:73",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:73",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2489",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.2833,
                                75.8669
                            ],
                            "attributes": {
                                "a_Units": "_21"
                            }
                        },
                        {
                            "uniqid": "a475",
                            "contactId": "CA71",
                            "name": "Blue:74",
                            "perceptions": [],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                38.2439,
                                64.0921
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit2",
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a476",
                            "contactId": "CA115",
                            "name": "Blue:75",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA115"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                30.4166,
                                31.0415
                            ],
                            "attributes": {
                                "a_Connections": "_8"
                            }
                        },
                        {
                            "uniqid": "a477",
                            "contactId": "CA162",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:76",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:76"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:76"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                34.2549,
                                54.6012
                            ],
                            "attributes": {
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a478",
                            "contactId": "CA2189",
                            "name": "Blue:77",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2189",
                                    "typeId": "blue_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:77",
                                    "typeId": "blue_land_unit"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                40.9379,
                                65.1545
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit7",
                                "a_Equipment": "_12"
                            }
                        },
                        {
                            "uniqid": "a479",
                            "contactId": "CA2976",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2976",
                                    "typeId": "blue_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                49.5845,
                                74.9786
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a480",
                            "contactId": "CA1978",
                            "name": "Blue:79",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1978",
                                    "typeId": "blue_land_asset"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                51.7508,
                                27.4503
                            ],
                            "attributes": {
                                "a_Units": "_26"
                            }
                        },
                        {
                            "uniqid": "a481",
                            "contactId": "CA2082",
                            "name": "Blue:80",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2082",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                49.1089,
                                22.2762
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_32"
                            }
                        },
                        {
                            "uniqid": "a482",
                            "contactId": "CA2685",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2685",
                                    "typeId": "blue_maritime_mtg"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2685",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                40.714,
                                55.4503
                            ],
                            "attributes": {
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a483",
                            "contactId": "CA2549",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2549",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:82"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                43.4341,
                                28.3128
                            ],
                            "attributes": {
                                "a_Equipment": "_16"
                            }
                        },
                        {
                            "uniqid": "a484",
                            "contactId": "CA2429",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2429",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                31.0676,
                                26.3101
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_42",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a485",
                            "contactId": "CA2550",
                            "name": "Blue:84",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2550"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2550",
                                    "typeId": "blue_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                45.6106,
                                25.8256
                            ],
                            "attributes": {
                                "a_Connections": "_14"
                            }
                        },
                        {
                            "uniqid": "a486",
                            "contactId": "CA590",
                            "name": "Blue:85",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA590",
                                    "typeId": "blue_air_istar",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA590",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                29.9682,
                                83.5856
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_6",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a487",
                            "contactId": "CA1308",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:86",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1308",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                42.9147,
                                30.6444
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a488",
                            "contactId": "CA377",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:87",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                32.9262,
                                38.37
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_47"
                            }
                        },
                        {
                            "uniqid": "a489",
                            "contactId": "CA2490",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2490",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2490",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2490",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                51.122,
                                57.9241
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a490",
                            "contactId": "CA923",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:89"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:89",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                37.2183,
                                79.6633
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a491",
                            "contactId": "CA1849",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1849"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                41.0965,
                                64.7497
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_20",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a492",
                            "contactId": "CA598",
                            "name": "Blue:91",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA598",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                53.7842,
                                78.3056
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a493",
                            "contactId": "CA3225",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:92",
                                    "typeId": "blue_air_bomber"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                53.5856,
                                32.2349
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_31"
                            }
                        },
                        {
                            "uniqid": "a494",
                            "contactId": "CA3213",
                            "name": "Blue:93",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3213",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                36.0815,
                                41.6323
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a495",
                            "contactId": "CA2506",
                            "name": "Blue:94",
                            "perceptions": [],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                35.1891,
                                73.439
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_30"
                            }
                        },
                        {
                            "uniqid": "a496",
                            "contactId": "CA929",
                            "name": "Blue:95",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA929",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA929",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                41.9754,
                                29.0671
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_27",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a497",
                            "contactId": "CA303",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA303"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA303",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA303",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                48.2833,
                                51.1996
                            ],
                            "attributes": {
                                "a_Units": "_25"
                            }
                        },
                        {
                            "uniqid": "a498",
                            "contactId": "CA2016",
                            "name": "Blue:97",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:97",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2016",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2016"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                42.4378,
                                26.2583
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_25",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a499",
                            "contactId": "CA2277",
                            "name": "Blue:98",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2277"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2277",
                                    "typeId": "blue_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                42.4681,
                                69.0055
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit17",
                                "a_Equipment": "_28"
                            }
                        },
                        {
                            "uniqid": "a500",
                            "contactId": "CA2083",
                            "name": "Blue:99",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:99",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                33.6679,
                                52.169
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_3"
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
                            "uniqid": "a501",
                            "contactId": "CA1308",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1308",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1308",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                18.823,
                                81.8197
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_10",
                                "a_Detection Range": 50
                            },
                            "comprising": []
                        },
                        {
                            "uniqid": "a505",
                            "contactId": "CA2520",
                            "name": "Red:4",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2520",
                                    "typeId": "red_land_asset"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:4",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                11.6859,
                                44.5899
                            ],
                            "attributes": {
                                "a_Units": "_48"
                            }
                        },
                        {
                            "uniqid": "a506",
                            "contactId": "CA704",
                            "name": "Red:5",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:5",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA704",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:5"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                18.6976,
                                38.4454
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit3",
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a507",
                            "contactId": "CA89",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA89",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                11.1964,
                                50.9537
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_37"
                            }
                        },
                        {
                            "uniqid": "a508",
                            "contactId": "CA2814",
                            "name": "Red:7",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2814"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2814"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2814",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                14.8376,
                                58.6674
                            ],
                            "attributes": {
                                "a_Units": "_37"
                            }
                        },
                        {
                            "uniqid": "a509",
                            "contactId": "CA155",
                            "name": "Red:8",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA155"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                22.7055,
                                59.2673
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_25",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a510",
                            "contactId": "CA1273",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1273"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:9",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                21.4992,
                                65.0262
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit10",
                                "a_Equipment": "_16"
                            }
                        },
                        {
                            "uniqid": "a511",
                            "contactId": "CA2460",
                            "name": "Red:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2460"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                15.7599,
                                55.0265
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_31"
                            }
                        },
                        {
                            "uniqid": "a512",
                            "contactId": "CA1361",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:11",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                20.6397,
                                44.7407
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit39",
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a513",
                            "contactId": "CA1057",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1057",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:12",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                19.2559,
                                35.8596
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a514",
                            "contactId": "CA1974",
                            "name": "Red:13",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:13",
                                    "typeId": "red_land_asset"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1974",
                                    "typeId": "red_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1974"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.2986,
                                66.2763
                            ],
                            "attributes": {
                                "a_Units": "_38"
                            }
                        },
                        {
                            "uniqid": "a515",
                            "contactId": "CA1018",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:14",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                18.1854,
                                36.2785
                            ],
                            "attributes": {
                                "a_Equipment": "_26"
                            }
                        },
                        {
                            "uniqid": "a516",
                            "contactId": "CA2845",
                            "name": "Red:15",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:15",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2845",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.1701,
                                28.6188
                            ],
                            "attributes": {
                                "a_Units": "_39"
                            }
                        },
                        {
                            "uniqid": "a517",
                            "contactId": "CA3006",
                            "name": "Red:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:16",
                                    "typeId": "red_land_asset"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:16",
                                    "typeId": "red_land_asset"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3006",
                                    "typeId": "red_land_asset",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                18.4722,
                                38.6854
                            ],
                            "attributes": {
                                "a_Units": "_22"
                            }
                        },
                        {
                            "uniqid": "a518",
                            "contactId": "CA3039",
                            "name": "Red:17",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3039",
                                    "typeId": "red_maritime_fiac"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3039",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3039",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                19.8507,
                                60.451
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a519",
                            "contactId": "CA2230",
                            "name": "Red:18",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2230",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2230",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:18",
                                    "typeId": "red_land_c2"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                6.6509,
                                35.7502
                            ],
                            "attributes": {
                                "a_Connections": "_10"
                            }
                        },
                        {
                            "uniqid": "a520",
                            "contactId": "CA1519",
                            "name": "Red:19",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:19",
                                    "typeId": "red_land_c2",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:19",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1519",
                                    "typeId": "red_land_c2"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                25.0725,
                                22.7613
                            ],
                            "attributes": {
                                "a_Connections": "_19"
                            }
                        },
                        {
                            "uniqid": "a521",
                            "contactId": "CA2157",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:20",
                                    "typeId": "red_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:20",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:20",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                20.4763,
                                47.8802
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_48",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a522",
                            "contactId": "CA2293",
                            "name": "Red:21",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:21",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2293",
                                    "typeId": "red_land_c2",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                15.3482,
                                33.0049
                            ],
                            "attributes": {
                                "a_Connections": "_6"
                            }
                        },
                        {
                            "uniqid": "a523",
                            "contactId": "CA2090",
                            "name": "Red:22",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2090",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:22",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                27.7831,
                                55.7243
                            ],
                            "attributes": {
                                "a_Units": "_23"
                            }
                        },
                        {
                            "uniqid": "a524",
                            "contactId": "CA1710",
                            "name": "Red:23",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1710",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1710",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                17.8412,
                                26.7357
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a525",
                            "contactId": "CA2340",
                            "name": "Red:24",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2340",
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                23.2381,
                                43.033
                            ],
                            "attributes": {
                                "a_Equipment": "_24"
                            }
                        },
                        {
                            "uniqid": "a526",
                            "contactId": "CA2450",
                            "name": "Red:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:25"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:25",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                5.5341,
                                49.6541
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a527",
                            "contactId": "CA3178",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:26",
                                    "typeId": "red_land_asset"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3178",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                9.1009,
                                37.698
                            ],
                            "attributes": {
                                "a_Units": "_8"
                            }
                        },
                        {
                            "uniqid": "a528",
                            "contactId": "CA1081",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1081"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                8.5182,
                                63.4513
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a529",
                            "contactId": "CA900",
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
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                3.3271,
                                65.9838
                            ],
                            "attributes": {
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a530",
                            "contactId": "CA67",
                            "name": "Red:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:29",
                                    "typeId": "red_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA67",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:29"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                15.8826,
                                67.1244
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_7",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a531",
                            "contactId": "CA3356",
                            "name": "Red:30",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3356",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3356",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                13.7488,
                                54.9815
                            ],
                            "attributes": {
                                "a_Connections": "_25"
                            }
                        },
                        {
                            "uniqid": "a532",
                            "contactId": "CA2210",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2210"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                5.1007,
                                36.3908
                            ],
                            "attributes": {
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a533",
                            "contactId": "CA980",
                            "name": "Red:32",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:32",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA980",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                28.4175,
                                63.2134
                            ],
                            "attributes": {
                                "a_Units": "_6"
                            }
                        },
                        {
                            "uniqid": "a534",
                            "contactId": "CA1874",
                            "name": "Red:33",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:33",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1874",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                10.9024,
                                53.2772
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit3",
                                "a_Equipment": "_4"
                            }
                        },
                        {
                            "uniqid": "a535",
                            "contactId": "CA178",
                            "name": "Red:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:34",
                                    "typeId": "red_air_fighter"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:34"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                23.0338,
                                62.8778
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a536",
                            "contactId": "CA1129",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1129",
                                    "typeId": "red_land_ssm"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1129",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                25.4968,
                                63.1566
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_45",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a537",
                            "contactId": "CA1572",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1572",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1572",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                8.0535,
                                79.3669
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a538",
                            "contactId": "CA2484",
                            "name": "Red:37",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:37",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2484",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                11.7778,
                                51.4131
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_28",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a539",
                            "contactId": "CA3109",
                            "name": "Red:38",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:38",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                6.4943,
                                66.0479
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit19",
                                "a_Equipment": "_15"
                            }
                        },
                        {
                            "uniqid": "a540",
                            "contactId": "CA578",
                            "name": "Red:39",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:39",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:39",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA578",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                14.8796,
                                60.528
                            ],
                            "attributes": {
                                "a_Connections": "_9"
                            }
                        },
                        {
                            "uniqid": "a541",
                            "contactId": "CA3288",
                            "name": "Red:40",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:40",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                25.1539,
                                43.7902
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a542",
                            "contactId": "CA3255",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:41",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                5.3643,
                                24.2703
                            ],
                            "attributes": {
                                "a_Connections": "_4"
                            }
                        },
                        {
                            "uniqid": "a543",
                            "contactId": "CA868",
                            "name": "Red:42",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA868",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                22.6128,
                                67.9393
                            ],
                            "attributes": {
                                "a_Units": "_33"
                            }
                        },
                        {
                            "uniqid": "a544",
                            "contactId": "CA2292",
                            "name": "Red:43",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2292",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:43"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                16.398,
                                82.9189
                            ],
                            "attributes": {
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a545",
                            "contactId": "CA1990",
                            "name": "Red:44",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1990",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                3.3427,
                                25.9041
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit46",
                                "a_Equipment": "_11"
                            }
                        },
                        {
                            "uniqid": "a546",
                            "contactId": "CA637",
                            "name": "Red:45",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA637",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA637",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                21.8144,
                                72.8543
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a547",
                            "contactId": "CA1971",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:46",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1971",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                20.6669,
                                65.2602
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a548",
                            "contactId": "CA2544",
                            "name": "Red:47",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2544",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                3.1431,
                                29.6123
                            ],
                            "attributes": {
                                "a_Units": "_42"
                            }
                        },
                        {
                            "uniqid": "a549",
                            "contactId": "CA2031",
                            "name": "Red:48",
                            "perceptions": [],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                2.6731,
                                70.3253
                            ],
                            "attributes": {
                                "a_Connections": "_36"
                            }
                        },
                        {
                            "uniqid": "a550",
                            "contactId": "CA1192",
                            "name": "Red:49",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1192",
                                    "typeId": "red_maritime_mtg"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1192",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                6.3258,
                                51.0918
                            ],
                            "attributes": {
                                "a_Equipment": "_34"
                            }
                        },
                        {
                            "uniqid": "a551",
                            "contactId": "CA1150",
                            "name": "Red:50",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:50"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:50",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                6.3294,
                                49.583
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_33"
                            }
                        },
                        {
                            "uniqid": "a552",
                            "contactId": "CA1454",
                            "name": "Red:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:51",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1454",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                7.5819,
                                34.8324
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_41"
                            }
                        },
                        {
                            "uniqid": "a553",
                            "contactId": "CA2747",
                            "name": "Red:52",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                6.4796,
                                41.1308
                            ],
                            "attributes": {
                                "a_Equipment": "_22"
                            }
                        },
                        {
                            "uniqid": "a554",
                            "contactId": "CA920",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:53",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA920",
                                    "typeId": "red_air_logs"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                22.8593,
                                42.9889
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_46"
                            }
                        },
                        {
                            "uniqid": "a555",
                            "contactId": "CA3396",
                            "name": "Red:54",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:54",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3396",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                9.3731,
                                59.2615
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a556",
                            "contactId": "CA3025",
                            "name": "Red:55",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3025",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3025"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                7.2096,
                                26.0686
                            ],
                            "attributes": {
                                "a_Equipment": "_17"
                            }
                        },
                        {
                            "uniqid": "a557",
                            "contactId": "CA2327",
                            "name": "Red:56",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2327",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2327",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:56",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                18.7273,
                                76.3194
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit8",
                                "a_Equipment": "_0"
                            }
                        },
                        {
                            "uniqid": "a558",
                            "contactId": "CA690",
                            "name": "Red:57",
                            "perceptions": [],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                10.3318,
                                45.7446
                            ],
                            "attributes": {
                                "a_Units": "_3"
                            }
                        },
                        {
                            "uniqid": "a559",
                            "contactId": "CA319",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:58"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:58",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                15.6801,
                                53.1688
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_1"
                            }
                        },
                        {
                            "uniqid": "a560",
                            "contactId": "CA1514",
                            "name": "Red:59",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:59",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1514",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                10.3853,
                                83.8341
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_26",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a561",
                            "contactId": "CA2205",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2205"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2205",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                11.4209,
                                30.312
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_30"
                            }
                        },
                        {
                            "uniqid": "a562",
                            "contactId": "CA3153",
                            "name": "Red:61",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:61",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                25.4272,
                                52.7752
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a563",
                            "contactId": "CA695",
                            "name": "Red:62",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:62",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA695",
                                    "typeId": "red_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                23.8776,
                                65.3373
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a564",
                            "contactId": "CA1260",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:63",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1260"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                24.5626,
                                53.5045
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_14",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a565",
                            "contactId": "CA746",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA746",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:64",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA746",
                                    "typeId": "red_air_logs"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                11.8568,
                                24.2224
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_44"
                            }
                        },
                        {
                            "uniqid": "a566",
                            "contactId": "CA2284",
                            "name": "Red:65",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:65",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2284",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                18.337,
                                28.5426
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a567",
                            "contactId": "CA226",
                            "name": "Red:66",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA226",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:66",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA226",
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                8.8185,
                                56.2727
                            ],
                            "attributes": {
                                "a_Equipment": "_14"
                            }
                        },
                        {
                            "uniqid": "a568",
                            "contactId": "CA2276",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:67",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2276",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                3.7077,
                                48.488
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a569",
                            "contactId": "CA3090",
                            "name": "Red:68",
                            "perceptions": [],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                17.468,
                                26.4674
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_49",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a570",
                            "contactId": "CA151",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:69",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA151",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.9775,
                                62.577
                            ],
                            "attributes": {
                                "a_Units": "_27"
                            }
                        },
                        {
                            "uniqid": "a571",
                            "contactId": "CA1325",
                            "name": "Red:70",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1325"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1325",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                3.1838,
                                44.4462
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_7"
                            }
                        },
                        {
                            "uniqid": "a572",
                            "contactId": "CA1087",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:71",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                22.8491,
                                48.5874
                            ],
                            "attributes": {
                                "a_Units": "_41"
                            }
                        },
                        {
                            "uniqid": "a573",
                            "contactId": "CA1978",
                            "name": "Red:72",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1978",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                13.2746,
                                46.9623
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_15",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a574",
                            "contactId": "CA1743",
                            "name": "Red:73",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1743"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                23.6031,
                                84.6027
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a575",
                            "contactId": "CA882",
                            "name": "Red:74",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:74",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA882",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA882"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                27.3368,
                                38.5729
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_26",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a576",
                            "contactId": "CA3221",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3221",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3221",
                                    "typeId": "red_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3221",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                13.3582,
                                75.1727
                            ],
                            "attributes": {
                                "a_Number": 100
                            }
                        },
                        {
                            "uniqid": "a577",
                            "contactId": "CA3271",
                            "name": "Red:76",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA3271",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                21.3082,
                                48.1883
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a578",
                            "contactId": "CA2768",
                            "name": "Red:77",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:77",
                                    "typeId": "red_land_asset"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:77"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                14.2992,
                                36.425
                            ],
                            "attributes": {
                                "a_Units": "_10"
                            }
                        },
                        {
                            "uniqid": "a579",
                            "contactId": "CA138",
                            "name": "Red:78",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:78"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:78",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.9019,
                                78.8162
                            ],
                            "attributes": {
                                "a_Units": "_39"
                            }
                        },
                        {
                            "uniqid": "a580",
                            "contactId": "CA1285",
                            "name": "Red:79",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1285",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                14.4965,
                                27.6986
                            ],
                            "attributes": {
                                "a_Units": "_14"
                            }
                        },
                        {
                            "uniqid": "a581",
                            "contactId": "CA2549",
                            "name": "Red:80",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2549",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                9.0329,
                                54.1027
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_13"
                            }
                        },
                        {
                            "uniqid": "a582",
                            "contactId": "CA1468",
                            "name": "Red:81",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1468",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                28.2617,
                                80.0518
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_42",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a583",
                            "contactId": "CA2801",
                            "name": "Red:82",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                13.2183,
                                52.4643
                            ],
                            "attributes": {
                                "a_Equipment": "_17"
                            }
                        },
                        {
                            "uniqid": "a584",
                            "contactId": "CA757",
                            "name": "Red:83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA757",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                26.3855,
                                64.7337
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a585",
                            "contactId": "CA2515",
                            "name": "Red:84",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:84",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2515",
                                    "typeId": "red_land_sam"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                11.0232,
                                25.6757
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_17",
                                "a_Mez Range": 100
                            }
                        },
                        {
                            "uniqid": "a586",
                            "contactId": "CA147",
                            "name": "Red:85",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA147"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA147",
                                    "typeId": "red_land_ssm",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA147",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                22.8491,
                                82.4964
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_24",
                                "a_Range": 100
                            }
                        },
                        {
                            "uniqid": "a587",
                            "contactId": "CA461",
                            "name": "Red:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:86"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA461",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                23.4576,
                                51.3205
                            ],
                            "attributes": {
                                "a_Density": 100
                            }
                        },
                        {
                            "uniqid": "a588",
                            "contactId": "CA2534",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2534",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2534",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                17.3195,
                                44.812
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit31",
                                "a_Equipment": "_23"
                            }
                        },
                        {
                            "uniqid": "a589",
                            "contactId": "CA1473",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:88",
                                    "typeId": "red_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:88",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                24.775,
                                31.0961
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_8"
                            }
                        },
                        {
                            "uniqid": "a590",
                            "contactId": "CA207",
                            "name": "Red:89",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA207",
                                    "typeId": "red_maritime_mtg"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:89"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                5.5705,
                                69.6987
                            ],
                            "attributes": {
                                "a_Equipment": "_29"
                            }
                        },
                        {
                            "uniqid": "a591",
                            "contactId": "CA2961",
                            "name": "Red:90",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2961",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:90"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:90",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                24.6931,
                                77.9989
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_39"
                            }
                        },
                        {
                            "uniqid": "a592",
                            "contactId": "CA2063",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2063",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:91"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2063",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                25.9581,
                                81.8953
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_5",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a593",
                            "contactId": "CA3175",
                            "name": "Red:92",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3175",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:92",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.7799,
                                52.233
                            ],
                            "attributes": {
                                "a_Units": "_2"
                            }
                        },
                        {
                            "uniqid": "a594",
                            "contactId": "CA1651",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1651",
                                    "typeId": "red_land_asset",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:93",
                                    "typeId": "red_land_asset",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.5602,
                                75.4909
                            ],
                            "attributes": {
                                "a_Units": "_12"
                            }
                        },
                        {
                            "uniqid": "a595",
                            "contactId": "CA878",
                            "name": "Red:94",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA878",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA878",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA878",
                                    "typeId": "red_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                5.1159,
                                75.7084
                            ],
                            "attributes": {
                                "a_Equipment": "_21"
                            }
                        },
                        {
                            "uniqid": "a596",
                            "contactId": "CA1260",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1260",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:95"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:95",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.5867,
                                36.3506
                            ],
                            "attributes": {
                                "a_Units": "_19"
                            }
                        },
                        {
                            "uniqid": "a597",
                            "contactId": "CA3207",
                            "name": "Red:96",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3207",
                                    "typeId": "red_air_istar",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:96",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                7.1823,
                                75.8719
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_38",
                                "a_Detection Range": 50
                            }
                        },
                        {
                            "uniqid": "a598",
                            "contactId": "CA878",
                            "name": "Red:97",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA878",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA878",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                25.2374,
                                32.3771
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit2",
                                "a_Equipment": "_35"
                            }
                        },
                        {
                            "uniqid": "a599",
                            "contactId": "CA1779",
                            "name": "Red:98",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:98",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1779",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                11.0384,
                                26.811
                            ],
                            "attributes": {
                                "a_Size": "Size of military unit38",
                                "a_Equipment": "_36"
                            }
                        },
                        {
                            "uniqid": "a600",
                            "contactId": "CA89",
                            "name": "Red:99",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA89",
                                    "typeId": "red_air_logs",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:99"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                3.4063,
                                43.1293
                            ],
                            "attributes": {
                                "a_Number": 100,
                                "a_Equipment": "_27"
                            }
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
                    "name": "Fighter",
                    "icon": "n_blue_air_fighter.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_fighter",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment"
                    ],
                    "travelMode": "air"
                },
                {
                    "name": "Bomber",
                    "icon": "n_blue_air_bomber.svg",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_bomber",
                    "travelMode": "air"
                },
                {
                    "name": "SAM",
                    "icon": "n_blue_land_sam.svg",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment",
                        "a_Mez Range"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "MTG",
                    "icon": "n_blue_maritime_task_force.svg",
                    "attributeTypeIds": [
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mtg",
                    "travelMode": "sea"
                },
                {
                    "name": "Ship",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypeIds": [
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_ship",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine",
                    "icon": "n_blue_maritime_submarine.svg",
                    "attributeTypeIds": [
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit",
                    "icon": "n_blue_land_armed_inf.svg",
                    "attributeTypeIds": [
                        "a_Size",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_unit",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_blue_land_asset.svg",
                    "attributeTypeIds": [
                        "a_Units"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_asset",
                    "travelMode": "sea"
                },
                {
                    "name": "SSM",
                    "icon": "n_blue_land_ssm.svg",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment",
                        "a_Range"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_ssm",
                    "travelMode": "sea"
                },
                {
                    "name": "ISTAR",
                    "icon": "n_blue_air_recce.svg",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment",
                        "a_Detection Range"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_istar",
                    "travelMode": "sea"
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_blue_air_utility.svg",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_logs",
                    "travelMode": "sea"
                },
                {
                    "name": "C2 Node",
                    "icon": "n_blue_hq.svg",
                    "attributeTypeIds": [
                        "a_Connections"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypeIds": [
                        "a_Number"
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Minefield",
                    "icon": "n_blue_maritime_minefield.svg",
                    "attributeTypeIds": [
                        "a_Density"
                    ],
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
                    "travelMode": "air",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "SAM",
                    "icon": "n_red_land_sam.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_sam",
                    "travelMode": "land",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment",
                        "a_Mez Range"
                    ]
                },
                {
                    "name": "MTG",
                    "icon": "n_red_maritime_task_force.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mtg",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Equipment"
                    ]
                },
                {
                    "name": "Submarine",
                    "icon": "n_red_maritime_submarine.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_submarine",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Equipment"
                    ]
                },
                {
                    "name": "Land Unit",
                    "icon": "n_red_land_armed_inf.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_unit",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Size",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_red_land_asset.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_asset",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Units"
                    ]
                },
                {
                    "name": "SSM",
                    "icon": "n_red_land_ssm.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_ssm",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment",
                        "a_Range"
                    ]
                },
                {
                    "name": "ISTAR",
                    "icon": "n_red_air_recce.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_istar",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment",
                        "a_Detection Range"
                    ]
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_red_air_utility.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_logs",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Number",
                        "a_Equipment"
                    ]
                },
                {
                    "name": "C2 Node",
                    "icon": "n_red_hq.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_c2",
                    "travelMode": "land",
                    "attributeTypeIds": [
                        "a_Connections"
                    ]
                },
                {
                    "name": "FIAC",
                    "icon": "n_red_maritime_missile_boat.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_fiac",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Number"
                    ]
                },
                {
                    "name": "Minefield",
                    "icon": "n_red_maritime_minefield.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mine",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Density"
                    ]
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_red_land_asset.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_asset",
                    "travelMode": "sea",
                    "attributeTypeIds": [
                        "a_Units"
                    ]
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
                                    "template": "Land--MissileStrike",
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
                                    "template": "Maritime--MissileStrike",
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
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-blue-Air-Ballistic Missile Strike",
                                    "template": "Air--MissileStrike",
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
                                    "template": "Land--MissileStrike",
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
                                    "template": "Maritime--MissileStrike",
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
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-red-Air-Ballistic Missile Strike",
                                    "template": "Air--MissileStrike",
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
                                    "template": "Land--MissileStrike",
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
                                    "template": "Maritime--MissileStrike",
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
                                    "name": "Ballistic Missile Strike",
                                    "uniqid": "f-green-Air-Ballistic Missile Strike",
                                    "template": "Air--MissileStrike",
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
                                "type": "string"
                            },
                            "narrative": {
                                "title": "General Feedback",
                                "type": "string",
                                "format": "textarea"
                            },
                            "location": {
                                "title": "Location",
                                "type": "string"
                            },
                            "perceptionOutcomes": {
                                "type": "array",
                                "title": "Perception Outcomes",
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
                                        "perceivedName": {
                                            "title": "Name",
                                            "type": "string"
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
                            "healthOutcomes": {
                                "type": "array",
                                "format": "table",
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
                                            "title": "Location",
                                            "type": "string",
                                            "enum": [
                                                "Point A",
                                                "Point B",
                                                "Point C"
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
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                        "title": "Air--MissileStrike",
                        "type": "object"
                    },
                    "completed": true,
                    "_id": "Air--MissileStrike",
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.470Z",
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
                    "_rev": "2022-11-13T17:53:07.470Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.471Z",
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
                    "_rev": "2022-11-13T17:53:07.471Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.472Z",
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
                    "_rev": "2022-11-13T17:53:07.472Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.472Z",
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
                    "_rev": "2022-11-13T17:53:07.472Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.472Z",
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
                    "_rev": "2022-11-13T17:53:07.472Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.472Z",
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
                    "_rev": "2022-11-13T17:53:07.472Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.472Z",
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
                    "_rev": "2022-11-13T17:53:07.472Z"
                },
                {
                    "lastUpdated": "2022-11-13T17:53:07.472Z",
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
                    "_rev": "2022-11-13T17:53:07.472Z"
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
