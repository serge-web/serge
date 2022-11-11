import { Wargame } from "@serge/custom-types";

const game: Wargame = {
    "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
    "wargameList": [],
    "data": {
        "overview": {
            "name": "Overview - settings",
            "gameDescription": "",
            "gameTurnTime": { "unit": "millis", "millis": 43200000 },
            "realtimeTurnTime": 300000,
            "timeWarning": 60000,
            "gameDate": "2022-11-11T08:43:01+01:00",
            "showAccessCodes": true,
            "logPlayerActivity": true,
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
                            "roleId": "plac754x9",
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
                            "uniqid": "a281",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_21"
                                }
                            ],
                            "contactId": "CA2710",
                            "name": "Blue:0",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2710",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                49.8375,
                                55.5706
                            ],
                            "comprising": []
                        },
                        {
                            "uniqid": "a285",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_44"
                                }
                            ],
                            "contactId": "CA2396",
                            "name": "Blue:4",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:4",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:4",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                35.8428,
                                80.5087
                            ]
                        },
                        {
                            "uniqid": "a286",
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
                                    "value": "_24"
                                }
                            ],
                            "contactId": "CA921",
                            "name": "Blue:5",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA921",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                36.9628,
                                28.8285
                            ]
                        },
                        {
                            "uniqid": "a287",
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
                                    "value": "_10"
                                }
                            ],
                            "contactId": "CA3099",
                            "name": "Blue:6",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3099",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:6",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                30.5948,
                                58.9227
                            ]
                        },
                        {
                            "uniqid": "a288",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2576",
                            "name": "Blue:7",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:7",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:7",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2576",
                                    "typeId": "blue_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                29.8287,
                                55.1625
                            ]
                        },
                        {
                            "uniqid": "a289",
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
                                    "value": "_24"
                                }
                            ],
                            "contactId": "CA1068",
                            "name": "Blue:8",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1068"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                32.8349,
                                77.0166
                            ]
                        },
                        {
                            "uniqid": "a290",
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
                                    "value": "_35"
                                }
                            ],
                            "contactId": "CA304",
                            "name": "Blue:9",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA304",
                                    "typeId": "blue_air_istar"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA304"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA304",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                51.5479,
                                74.6799
                            ]
                        },
                        {
                            "uniqid": "a291",
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
                                    "value": "_1"
                                }
                            ],
                            "contactId": "CA123",
                            "name": "Blue:10",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:10",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA123",
                                    "typeId": "blue_air_istar",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                49.4024,
                                61.5123
                            ]
                        },
                        {
                            "uniqid": "a292",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_equipment",
                                    "value": "_17"
                                }
                            ],
                            "contactId": "CA3144",
                            "name": "Blue:11",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:11",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                46.6091,
                                67.7075
                            ]
                        },
                        {
                            "uniqid": "a293",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA891",
                            "name": "Blue:12",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA891"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:12",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                30.844,
                                53.2542
                            ]
                        },
                        {
                            "uniqid": "a294",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_27"
                                }
                            ],
                            "contactId": "CA88",
                            "name": "Blue:13",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA88",
                                    "typeId": "blue_maritime_ship"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA88",
                                    "typeId": "blue_maritime_ship"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                33.7875,
                                60.3869
                            ]
                        },
                        {
                            "uniqid": "a295",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_39"
                                }
                            ],
                            "contactId": "CA3124",
                            "name": "Blue:14",
                            "perceptions": [],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                44.3477,
                                81.992
                            ]
                        },
                        {
                            "uniqid": "a296",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_29"
                                }
                            ],
                            "contactId": "CA543",
                            "name": "Blue:15",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA543",
                                    "typeId": "blue_air_bomber"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA543",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                40.3823,
                                51.9809
                            ]
                        },
                        {
                            "uniqid": "a297",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1540",
                            "name": "Blue:16",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:16",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                40.0581,
                                80.0193
                            ]
                        },
                        {
                            "uniqid": "a298",
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
                                    "value": "_31"
                                }
                            ],
                            "contactId": "CA673",
                            "name": "Blue:17",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA673",
                                    "typeId": "blue_land_ssm"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                30.1123,
                                44.7009
                            ]
                        },
                        {
                            "uniqid": "a299",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_48"
                                }
                            ],
                            "contactId": "CA291",
                            "name": "Blue:18",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA291",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA291",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                30.5158,
                                67.0207
                            ]
                        },
                        {
                            "uniqid": "a300",
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
                                    "value": "_15"
                                }
                            ],
                            "contactId": "CA1289",
                            "name": "Blue:19",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1289"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1289",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                47.5361,
                                24.2177
                            ]
                        },
                        {
                            "uniqid": "a301",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_44"
                                }
                            ],
                            "contactId": "CA1768",
                            "name": "Blue:20",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1768",
                                    "typeId": "blue_land_asset"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1768",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                52.6384,
                                32.0559
                            ]
                        },
                        {
                            "uniqid": "a302",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA299",
                            "name": "Blue:21",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:21",
                                    "typeId": "blue_maritime_mine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                37.8338,
                                37.5814
                            ]
                        },
                        {
                            "uniqid": "a303",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_equipment",
                                    "value": "_22"
                                }
                            ],
                            "contactId": "CA1910",
                            "name": "Blue:22",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:22",
                                    "typeId": "blue_land_unit"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                36.2077,
                                60.7482
                            ]
                        },
                        {
                            "uniqid": "a304",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_28"
                                }
                            ],
                            "contactId": "CA1957",
                            "name": "Blue:23",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1957",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1957",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1957",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                42.3394,
                                79.1547
                            ]
                        },
                        {
                            "uniqid": "a305",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_air_logs_equipment",
                                    "value": "_28"
                                }
                            ],
                            "contactId": "CA467",
                            "name": "Blue:24",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA467",
                                    "typeId": "blue_air_logs",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA467",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:24"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                42.0221,
                                60.0167
                            ]
                        },
                        {
                            "uniqid": "a306",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_49"
                                }
                            ],
                            "contactId": "CA1502",
                            "name": "Blue:25",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1502"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:25",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                45.5066,
                                34.183
                            ]
                        },
                        {
                            "uniqid": "a307",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_11"
                                }
                            ],
                            "contactId": "CA2743",
                            "name": "Blue:26",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:26",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:26",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                37.8102,
                                61.9743
                            ]
                        },
                        {
                            "uniqid": "a308",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1809",
                            "name": "Blue:27",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1809",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1809",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                51.4646,
                                41.3547
                            ]
                        },
                        {
                            "uniqid": "a309",
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
                                    "value": "_7"
                                }
                            ],
                            "contactId": "CA887",
                            "name": "Blue:28",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA887",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA887",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                46.7123,
                                66.2071
                            ]
                        },
                        {
                            "uniqid": "a310",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_equipment",
                                    "value": "_16"
                                }
                            ],
                            "contactId": "CA944",
                            "name": "Blue:29",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA944",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA944",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                35.7847,
                                25.9289
                            ]
                        },
                        {
                            "uniqid": "a311",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_35"
                                }
                            ],
                            "contactId": "CA112",
                            "name": "Blue:30",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA112",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                40.0208,
                                81.4693
                            ]
                        },
                        {
                            "uniqid": "a312",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_48"
                                }
                            ],
                            "contactId": "CA1765",
                            "name": "Blue:31",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1765",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.9944,
                                58.1339
                            ]
                        },
                        {
                            "uniqid": "a313",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_35"
                                }
                            ],
                            "contactId": "CA303",
                            "name": "Blue:32",
                            "perceptions": [],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                49.0197,
                                25.808
                            ]
                        },
                        {
                            "uniqid": "a314",
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
                                    "value": "_16"
                                }
                            ],
                            "contactId": "CA1778",
                            "name": "Blue:33",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1778",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:33",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1778",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                41.7394,
                                25.0019
                            ]
                        },
                        {
                            "uniqid": "a315",
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
                                    "value": "_43"
                                }
                            ],
                            "contactId": "CA2474",
                            "name": "Blue:34",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2474",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                42.1552,
                                83.5302
                            ]
                        },
                        {
                            "uniqid": "a316",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_air_logs_equipment",
                                    "value": "_31"
                                }
                            ],
                            "contactId": "CA2152",
                            "name": "Blue:35",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:35",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                33.0804,
                                55.592
                            ]
                        },
                        {
                            "uniqid": "a317",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sub_equipment",
                                    "value": "_43"
                                }
                            ],
                            "contactId": "CA1585",
                            "name": "Blue:36",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1585",
                                    "typeId": "blue_maritime_submarine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1585",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                38.9719,
                                82.2946
                            ]
                        },
                        {
                            "uniqid": "a318",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sub_equipment",
                                    "value": "_42"
                                }
                            ],
                            "contactId": "CA193",
                            "name": "Blue:37",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA193",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                34.0953,
                                73.3769
                            ]
                        },
                        {
                            "uniqid": "a319",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_equipment",
                                    "value": "_44"
                                }
                            ],
                            "contactId": "CA1276",
                            "name": "Blue:38",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:38",
                                    "typeId": "blue_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:38",
                                    "typeId": "blue_land_unit"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1276",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                54.8301,
                                77.4587
                            ]
                        },
                        {
                            "uniqid": "a320",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_49"
                                }
                            ],
                            "contactId": "CA80",
                            "name": "Blue:39",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA80",
                                    "typeId": "blue_air_bomber"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA80",
                                    "typeId": "blue_air_bomber"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                52.8507,
                                54.679
                            ]
                        },
                        {
                            "uniqid": "a321",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_c2_equipment",
                                    "value": "_12"
                                }
                            ],
                            "contactId": "CA651",
                            "name": "Blue:40",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA651",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_land_c2",
                            "condition": "working",
                            "location": [
                                39.7722,
                                45.6827
                            ]
                        },
                        {
                            "uniqid": "a322",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_11"
                                }
                            ],
                            "contactId": "CA1347",
                            "name": "Blue:41",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:41",
                                    "typeId": "blue_maritime_ship",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                43.0566,
                                81.3419
                            ]
                        },
                        {
                            "uniqid": "a323",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_3"
                                }
                            ],
                            "contactId": "CA2011",
                            "name": "Blue:42",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:42"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                30.7138,
                                36.6027
                            ]
                        },
                        {
                            "uniqid": "a324",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA562",
                            "name": "Blue:43",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA562"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA562",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA562",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                41.717,
                                36.9741
                            ]
                        },
                        {
                            "uniqid": "a325",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_41"
                                }
                            ],
                            "contactId": "CA961",
                            "name": "Blue:44",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA961",
                                    "typeId": "blue_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                29.6892,
                                67.637
                            ]
                        },
                        {
                            "uniqid": "a326",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_27"
                                }
                            ],
                            "contactId": "CA2249",
                            "name": "Blue:45",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:45",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                28.6464,
                                22.0619
                            ]
                        },
                        {
                            "uniqid": "a327",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_47"
                                }
                            ],
                            "contactId": "CA2392",
                            "name": "Blue:46",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA2392",
                                    "typeId": "blue_land_asset",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2392",
                                    "typeId": "blue_land_asset"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2392",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                40.0772,
                                76.4855
                            ]
                        },
                        {
                            "uniqid": "a328",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA721",
                            "name": "Blue:47",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA721",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA721",
                                    "typeId": "blue_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                47.2004,
                                72.2714
                            ]
                        },
                        {
                            "uniqid": "a329",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_20"
                                }
                            ],
                            "contactId": "CA2018",
                            "name": "Blue:48",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:48",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:48",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                45.2988,
                                50.784
                            ]
                        },
                        {
                            "uniqid": "a330",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_12"
                                }
                            ],
                            "contactId": "CA3268",
                            "name": "Blue:49",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:49",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                46.5056,
                                43.1458
                            ]
                        },
                        {
                            "uniqid": "a331",
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
                                    "value": "_44"
                                }
                            ],
                            "contactId": "CA2204",
                            "name": "Blue:50",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2204",
                                    "typeId": "blue_air_istar",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2204",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                50.3053,
                                46.9307
                            ]
                        },
                        {
                            "uniqid": "a332",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_air_logs_equipment",
                                    "value": "_42"
                                }
                            ],
                            "contactId": "CA1372",
                            "name": "Blue:51",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1372",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1372",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:51",
                                    "typeId": "blue_air_logs",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                35.43,
                                78.9087
                            ]
                        },
                        {
                            "uniqid": "a333",
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
                                    "value": "_7"
                                }
                            ],
                            "contactId": "CA425",
                            "name": "Blue:52",
                            "perceptions": [],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                32.7025,
                                22.4822
                            ]
                        },
                        {
                            "uniqid": "a334",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_39"
                                }
                            ],
                            "contactId": "CA1357",
                            "name": "Blue:53",
                            "perceptions": [],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                51.0421,
                                84.6926
                            ]
                        },
                        {
                            "uniqid": "a335",
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
                                    "value": "_27"
                                }
                            ],
                            "contactId": "CA3369",
                            "name": "Blue:54",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3369",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:54"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                48.2495,
                                74.5526
                            ]
                        },
                        {
                            "uniqid": "a336",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_air_logs_equipment",
                                    "value": "_41"
                                }
                            ],
                            "contactId": "CA2554",
                            "name": "Blue:55",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2554",
                                    "typeId": "blue_air_logs",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:55",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                50.6304,
                                53.0123
                            ]
                        },
                        {
                            "uniqid": "a337",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_2"
                                }
                            ],
                            "contactId": "CA2210",
                            "name": "Blue:56",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2210",
                                    "typeId": "blue_maritime_mtg",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                46.5101,
                                44.7945
                            ]
                        },
                        {
                            "uniqid": "a338",
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
                                    "value": "_31"
                                }
                            ],
                            "contactId": "CA632",
                            "name": "Blue:57",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA632",
                                    "typeId": "blue_air_istar"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                40.518,
                                74.0071
                            ]
                        },
                        {
                            "uniqid": "a339",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1631",
                            "name": "Blue:58",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1631",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                43.542,
                                38.0892
                            ]
                        },
                        {
                            "uniqid": "a340",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA786",
                            "name": "Blue:59",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA786",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:59",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA786",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                42.2008,
                                23.9154
                            ]
                        },
                        {
                            "uniqid": "a341",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_17"
                                }
                            ],
                            "contactId": "CA1294",
                            "name": "Blue:60",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:60",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1294",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:60"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                49.167,
                                25.5861
                            ]
                        },
                        {
                            "uniqid": "a342",
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
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA1499",
                            "name": "Blue:61",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1499",
                                    "typeId": "blue_land_ssm",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                52.5142,
                                32.6617
                            ]
                        },
                        {
                            "uniqid": "a343",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_3"
                                }
                            ],
                            "contactId": "CA1887",
                            "name": "Blue:62",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1887",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                39.679,
                                22.3282
                            ]
                        },
                        {
                            "uniqid": "a344",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_air_logs_equipment",
                                    "value": "_20"
                                }
                            ],
                            "contactId": "CA614",
                            "name": "Blue:63",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA614"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:63",
                                    "typeId": "blue_air_logs"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                45.6252,
                                80.0081
                            ]
                        },
                        {
                            "uniqid": "a345",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_45"
                                }
                            ],
                            "contactId": "CA1376",
                            "name": "Blue:64",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1376"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                49.5883,
                                55.0329
                            ]
                        },
                        {
                            "uniqid": "a346",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_20"
                                }
                            ],
                            "contactId": "CA1593",
                            "name": "Blue:65",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1593",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:65",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                34.3681,
                                78.0671
                            ]
                        },
                        {
                            "uniqid": "a347",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1446",
                            "name": "Blue:66",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:66",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                41.9667,
                                78.2433
                            ]
                        },
                        {
                            "uniqid": "a348",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_ship_equipment",
                                    "value": "_24"
                                }
                            ],
                            "contactId": "CA345",
                            "name": "Blue:67",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:67",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA345",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_ship",
                            "condition": "working",
                            "location": [
                                54.0697,
                                55.4676
                            ]
                        },
                        {
                            "uniqid": "a349",
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
                                    "value": "_15"
                                }
                            ],
                            "contactId": "CA1901",
                            "name": "Blue:68",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1901",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1901",
                                    "typeId": "blue_land_ssm"
                                }
                            ],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                38.4915,
                                46.6059
                            ]
                        },
                        {
                            "uniqid": "a350",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_19"
                                }
                            ],
                            "contactId": "CA153",
                            "name": "Blue:69",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:69"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA153"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                44.8034,
                                41.4053
                            ]
                        },
                        {
                            "uniqid": "a351",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA3223",
                            "name": "Blue:70",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:70",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3223",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:70"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                30.8866,
                                81.9059
                            ]
                        },
                        {
                            "uniqid": "a352",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_19"
                                }
                            ],
                            "contactId": "CA422",
                            "name": "Blue:71",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA422"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA422",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                29.5496,
                                65.8477
                            ]
                        },
                        {
                            "uniqid": "a353",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1276",
                            "name": "Blue:72",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1276"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:72",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:72",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                37.9248,
                                77.2117
                            ]
                        },
                        {
                            "uniqid": "a354",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_12"
                                }
                            ],
                            "contactId": "CA2889",
                            "name": "Blue:73",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:73"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                35.2203,
                                41.178
                            ]
                        },
                        {
                            "uniqid": "a355",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sub_equipment",
                                    "value": "_16"
                                }
                            ],
                            "contactId": "CA1219",
                            "name": "Blue:74",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1219",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                45.4953,
                                63.7341
                            ]
                        },
                        {
                            "uniqid": "a356",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_27"
                                }
                            ],
                            "contactId": "CA1861",
                            "name": "Blue:75",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1861"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                30.9736,
                                48.8264
                            ]
                        },
                        {
                            "uniqid": "a357",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_air_logs_equipment",
                                    "value": "_38"
                                }
                            ],
                            "contactId": "CA225",
                            "name": "Blue:76",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA225",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:76",
                                    "typeId": "blue_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:76",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_logs",
                            "condition": "working",
                            "location": [
                                45.2397,
                                28.6503
                            ]
                        },
                        {
                            "uniqid": "a358",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sub_equipment",
                                    "value": "_6"
                                }
                            ],
                            "contactId": "CA3115",
                            "name": "Blue:77",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:77"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:77",
                                    "typeId": "blue_maritime_submarine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3115",
                                    "typeId": "blue_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                34.1621,
                                46.9364
                            ]
                        },
                        {
                            "uniqid": "a359",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1950",
                            "name": "Blue:78",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:78"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1950",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1950",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                47.5747,
                                44.7886
                            ]
                        },
                        {
                            "uniqid": "a360",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_9"
                                }
                            ],
                            "contactId": "CA2580",
                            "name": "Blue:79",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Blue:79",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                34.0179,
                                27.644
                            ]
                        },
                        {
                            "uniqid": "a361",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sub_equipment",
                                    "value": "_42"
                                }
                            ],
                            "contactId": "CA1783",
                            "name": "Blue:80",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1783",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1783"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                43.7034,
                                31.0541
                            ]
                        },
                        {
                            "uniqid": "a362",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA3355",
                            "name": "Blue:81",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:81",
                                    "typeId": "blue_maritime_fiac"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3355",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3355",
                                    "typeId": "blue_maritime_fiac",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_fiac",
                            "condition": "working",
                            "location": [
                                45.4222,
                                74.1215
                            ]
                        },
                        {
                            "uniqid": "a363",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sam_equipment",
                                    "value": "_21"
                                }
                            ],
                            "contactId": "CA2153",
                            "name": "Blue:82",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:82",
                                    "typeId": "blue_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2153",
                                    "typeId": "blue_land_sam",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2153",
                                    "typeId": "blue_land_sam"
                                }
                            ],
                            "platformTypeId": "blue_land_sam",
                            "condition": "working",
                            "location": [
                                29.0188,
                                78.2881
                            ]
                        },
                        {
                            "uniqid": "a364",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "b_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2832",
                            "name": "Blue:83",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:83",
                                    "typeId": "blue_maritime_mine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:83"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:83",
                                    "typeId": "blue_maritime_mine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mine",
                            "condition": "working",
                            "location": [
                                32.3711,
                                38.6107
                            ]
                        },
                        {
                            "uniqid": "a365",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_equipment",
                                    "value": "_8"
                                }
                            ],
                            "contactId": "CA845",
                            "name": "Blue:84",
                            "perceptions": [],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                46.55,
                                51.6987
                            ]
                        },
                        {
                            "uniqid": "a366",
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
                                    "value": "_28"
                                }
                            ],
                            "contactId": "CA3292",
                            "name": "Blue:85",
                            "perceptions": [],
                            "platformTypeId": "blue_land_ssm",
                            "condition": "working",
                            "location": [
                                42.373,
                                84.0491
                            ]
                        },
                        {
                            "uniqid": "a367",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_equipment",
                                    "value": "_2"
                                }
                            ],
                            "contactId": "CA2879",
                            "name": "Blue:86",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:86"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:86",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:86",
                                    "typeId": "blue_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_land_unit",
                            "condition": "working",
                            "location": [
                                40.6175,
                                58.8671
                            ]
                        },
                        {
                            "uniqid": "a368",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_12"
                                }
                            ],
                            "contactId": "CA372",
                            "name": "Blue:87",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA372",
                                    "typeId": "blue_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA372",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                46.1042,
                                61.1583
                            ]
                        },
                        {
                            "uniqid": "a369",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_33"
                                }
                            ],
                            "contactId": "CA3149",
                            "name": "Blue:88",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3149",
                                    "typeId": "blue_maritime_mtg"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3149",
                                    "typeId": "blue_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                37.1862,
                                73.0736
                            ]
                        },
                        {
                            "uniqid": "a370",
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
                                    "value": "_49"
                                }
                            ],
                            "contactId": "CA927",
                            "name": "Blue:89",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA927",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA927",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_air_istar",
                            "condition": "working",
                            "location": [
                                45.5649,
                                28.5414
                            ]
                        },
                        {
                            "uniqid": "a371",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_4"
                                }
                            ],
                            "contactId": "CA206",
                            "name": "Blue:90",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA206"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                49.5508,
                                58.1128
                            ]
                        },
                        {
                            "uniqid": "a372",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_20"
                                }
                            ],
                            "contactId": "CA2879",
                            "name": "Blue:91",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Blue:91",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                47.7484,
                                69.9989
                            ]
                        },
                        {
                            "uniqid": "a373",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_32"
                                }
                            ],
                            "contactId": "CA3223",
                            "name": "Blue:92",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA3223",
                                    "typeId": "blue_air_bomber",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3223",
                                    "typeId": "blue_air_bomber"
                                }
                            ],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                52.7778,
                                72.1563
                            ]
                        },
                        {
                            "uniqid": "a374",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_bomber_equipment",
                                    "value": "_20"
                                }
                            ],
                            "contactId": "CA2821",
                            "name": "Blue:93",
                            "perceptions": [],
                            "platformTypeId": "blue_air_bomber",
                            "condition": "working",
                            "location": [
                                42.9448,
                                64.9906
                            ]
                        },
                        {
                            "uniqid": "a375",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_10"
                                }
                            ],
                            "contactId": "CA1166",
                            "name": "Blue:94",
                            "perceptions": [],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                53.0676,
                                43.6807
                            ]
                        },
                        {
                            "uniqid": "a376",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_38"
                                }
                            ],
                            "contactId": "CA636",
                            "name": "Blue:95",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA636",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Blue:95"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                41.4624,
                                83.4332
                            ]
                        },
                        {
                            "uniqid": "a377",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_sub_equipment",
                                    "value": "_4"
                                }
                            ],
                            "contactId": "CA2045",
                            "name": "Blue:96",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:96",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Blue:96",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2045",
                                    "typeId": "blue_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "blue_maritime_submarine",
                            "condition": "working",
                            "location": [
                                49.0582,
                                79.6529
                            ]
                        },
                        {
                            "uniqid": "a378",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_mtg_units",
                                    "value": "_21"
                                }
                            ],
                            "contactId": "CA2770",
                            "name": "Blue:97",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2770"
                                }
                            ],
                            "platformTypeId": "blue_maritime_mtg",
                            "condition": "working",
                            "location": [
                                42.7128,
                                22.2464
                            ]
                        },
                        {
                            "uniqid": "a379",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_fighter_equipment",
                                    "value": "_5"
                                }
                            ],
                            "contactId": "CA1215",
                            "name": "Blue:98",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "Blue:98",
                                    "typeId": "blue_air_fighter"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1215",
                                    "typeId": "blue_air_fighter"
                                }
                            ],
                            "platformTypeId": "blue_air_fighter",
                            "condition": "working",
                            "location": [
                                39.8753,
                                45.4854
                            ]
                        },
                        {
                            "uniqid": "a380",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "b_land_asset_equipment",
                                    "value": "_32"
                                }
                            ],
                            "contactId": "CA1265",
                            "name": "Blue:99",
                            "perceptions": [
                                {
                                    "by": "f-red",
                                    "name": "CA1265",
                                    "typeId": "blue_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1265",
                                    "typeId": "blue_land_asset",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "blue_land_asset",
                            "condition": "working",
                            "location": [
                                43.6424,
                                69.9609
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
                            "uniqid": "a381",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2279",
                            "name": "Red:0",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2279",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:0",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                9.5372,
                                47.6481
                            ],
                            "comprising": []
                        },
                        {
                            "uniqid": "a385",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_26"
                                }
                            ],
                            "contactId": "CA2288",
                            "name": "Red:4",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2288",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                4.3255,
                                85.3481
                            ]
                        },
                        {
                            "uniqid": "a386",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_6"
                                }
                            ],
                            "contactId": "CA1933",
                            "name": "Red:5",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1933",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1933"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                28.0533,
                                50.9515
                            ]
                        },
                        {
                            "uniqid": "a387",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA633",
                            "name": "Red:6",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:6",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                22.3787,
                                59.2651
                            ]
                        },
                        {
                            "uniqid": "a388",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_44"
                                }
                            ],
                            "contactId": "CA852",
                            "name": "Red:7",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA852"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                2.3699,
                                78.9913
                            ]
                        },
                        {
                            "uniqid": "a389",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_41"
                                }
                            ],
                            "contactId": "CA2492",
                            "name": "Red:8",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2492"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                8.7166,
                                22.4061
                            ]
                        },
                        {
                            "uniqid": "a390",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_23"
                                }
                            ],
                            "contactId": "CA1388",
                            "name": "Red:9",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1388"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:9",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1388",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                8.8231,
                                73.8403
                            ]
                        },
                        {
                            "uniqid": "a391",
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
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA389",
                            "name": "Red:10",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:10"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                21.3017,
                                27.9577
                            ]
                        },
                        {
                            "uniqid": "a392",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA0",
                            "name": "Red:11",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:11",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA0",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA0",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                4.7509,
                                72.4661
                            ]
                        },
                        {
                            "uniqid": "a393",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2682",
                            "name": "Red:12",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2682",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:12"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                28.4397,
                                24.9983
                            ]
                        },
                        {
                            "uniqid": "a394",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2171",
                            "name": "Red:13",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:13",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                15.4632,
                                35.4631
                            ]
                        },
                        {
                            "uniqid": "a395",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_17"
                                }
                            ],
                            "contactId": "CA1745",
                            "name": "Red:14",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1745",
                                    "typeId": "red_land_c2"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:14",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:14",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                7.1945,
                                75.7895
                            ]
                        },
                        {
                            "uniqid": "a396",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_5"
                                }
                            ],
                            "contactId": "CA285",
                            "name": "Red:15",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:15",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                5.189,
                                72.0711
                            ]
                        },
                        {
                            "uniqid": "a397",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_24"
                                }
                            ],
                            "contactId": "CA2580",
                            "name": "Red:16",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2580"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:16"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:16",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                5.2491,
                                41.1001
                            ]
                        },
                        {
                            "uniqid": "a398",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_37"
                                }
                            ],
                            "contactId": "CA849",
                            "name": "Red:17",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:17",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA849",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                26.1109,
                                80.9446
                            ]
                        },
                        {
                            "uniqid": "a399",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_31"
                                }
                            ],
                            "contactId": "CA2307",
                            "name": "Red:18",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2307"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                21.6837,
                                63.9332
                            ]
                        },
                        {
                            "uniqid": "a400",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_27"
                                }
                            ],
                            "contactId": "CA3329",
                            "name": "Red:19",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3329",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3329",
                                    "typeId": "red_land_unit",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                12.841,
                                48.5053
                            ]
                        },
                        {
                            "uniqid": "a401",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_7"
                                }
                            ],
                            "contactId": "CA3095",
                            "name": "Red:20",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:20"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3095",
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
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.3165,
                                65.3457
                            ]
                        },
                        {
                            "uniqid": "a402",
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
                            "contactId": "CA1872",
                            "name": "Red:21",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1872",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:21",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1872",
                                    "typeId": "red_land_sam"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                19.1049,
                                68.5516
                            ]
                        },
                        {
                            "uniqid": "a403",
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
                                    "value": "_38"
                                }
                            ],
                            "contactId": "CA460",
                            "name": "Red:22",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:22"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA460",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:22",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                7.6528,
                                73.0508
                            ]
                        },
                        {
                            "uniqid": "a404",
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
                            "contactId": "CA2891",
                            "name": "Red:23",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2891"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:23",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                27.5173,
                                81.4624
                            ]
                        },
                        {
                            "uniqid": "a405",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1839",
                            "name": "Red:24",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:24",
                                    "typeId": "red_maritime_fiac",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:24",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                16.7729,
                                82.5283
                            ]
                        },
                        {
                            "uniqid": "a406",
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
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA1012",
                            "name": "Red:25",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1012",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                17.1348,
                                68.4039
                            ]
                        },
                        {
                            "uniqid": "a407",
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
                                    "value": "_25"
                                }
                            ],
                            "contactId": "CA1561",
                            "name": "Red:26",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1561",
                                    "typeId": "red_air_istar"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                10.5808,
                                70.8021
                            ]
                        },
                        {
                            "uniqid": "a408",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA1741",
                            "name": "Red:27",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:27",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1741",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:27",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                12.0729,
                                27.8322
                            ]
                        },
                        {
                            "uniqid": "a409",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_48"
                                }
                            ],
                            "contactId": "CA2281",
                            "name": "Red:28",
                            "perceptions": [],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                25.0069,
                                52.8396
                            ]
                        },
                        {
                            "uniqid": "a410",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_5"
                                }
                            ],
                            "contactId": "CA480",
                            "name": "Red:29",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA480",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:29",
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                20.4076,
                                44.6665
                            ]
                        },
                        {
                            "uniqid": "a411",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_49"
                                }
                            ],
                            "contactId": "CA2748",
                            "name": "Red:30",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:30",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.3153,
                                62.5854
                            ]
                        },
                        {
                            "uniqid": "a412",
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
                            ],
                            "contactId": "CA1006",
                            "name": "Red:31",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1006",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                21.8992,
                                25.9735
                            ]
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
                            "contactId": "CA172",
                            "name": "Red:32",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA172",
                                    "typeId": "red_maritime_mine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA172",
                                    "typeId": "red_maritime_mine"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                26.6237,
                                26.8683
                            ]
                        },
                        {
                            "uniqid": "a414",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_29"
                                }
                            ],
                            "contactId": "CA3103",
                            "name": "Red:33",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA3103",
                                    "typeId": "red_maritime_mtg"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA3103"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3103"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                19.8752,
                                22.096
                            ]
                        },
                        {
                            "uniqid": "a415",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_12"
                                }
                            ],
                            "contactId": "CA293",
                            "name": "Red:34",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:34",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                11.6135,
                                24.9166
                            ]
                        },
                        {
                            "uniqid": "a416",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_49"
                                }
                            ],
                            "contactId": "CA1171",
                            "name": "Red:35",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA1171"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                24.2839,
                                70.6824
                            ]
                        },
                        {
                            "uniqid": "a417",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_2"
                                }
                            ],
                            "contactId": "CA362",
                            "name": "Red:36",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:36",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:36",
                                    "typeId": "red_land_sam"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:36",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                17.5064,
                                49.7596
                            ]
                        },
                        {
                            "uniqid": "a418",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_34"
                                }
                            ],
                            "contactId": "CA1322",
                            "name": "Red:37",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1322",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1322",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1322"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                13.7761,
                                64.7641
                            ]
                        },
                        {
                            "uniqid": "a419",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_11"
                                }
                            ],
                            "contactId": "CA1722",
                            "name": "Red:38",
                            "perceptions": [],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                22.4253,
                                56.9122
                            ]
                        },
                        {
                            "uniqid": "a420",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA825",
                            "name": "Red:39",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA825"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA825"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:39",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                4.2099,
                                73.0543
                            ]
                        },
                        {
                            "uniqid": "a421",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_32"
                                }
                            ],
                            "contactId": "CA3324",
                            "name": "Red:40",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA3324",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                25.2313,
                                34.8595
                            ]
                        },
                        {
                            "uniqid": "a422",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_25"
                                }
                            ],
                            "contactId": "CA2749",
                            "name": "Red:41",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2749"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2749",
                                    "typeId": "red_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                22.2419,
                                62.307
                            ]
                        },
                        {
                            "uniqid": "a423",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_26"
                                }
                            ],
                            "contactId": "CA1538",
                            "name": "Red:42",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1538"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                27.0326,
                                44.3284
                            ]
                        },
                        {
                            "uniqid": "a424",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA748",
                            "name": "Red:43",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA748",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                10.7522,
                                30.2802
                            ]
                        },
                        {
                            "uniqid": "a425",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_38"
                                }
                            ],
                            "contactId": "CA2601",
                            "name": "Red:44",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2601",
                                    "typeId": "red_land_sam"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                7.5067,
                                26.5647
                            ]
                        },
                        {
                            "uniqid": "a426",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA139",
                            "name": "Red:45",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:45",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                15.8073,
                                59.02
                            ]
                        },
                        {
                            "uniqid": "a427",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_41"
                                }
                            ],
                            "contactId": "CA2272",
                            "name": "Red:46",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA2272",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2272",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                21.1256,
                                74.2499
                            ]
                        },
                        {
                            "uniqid": "a428",
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
                            "contactId": "CA682",
                            "name": "Red:47",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:47"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA682",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                23.7393,
                                45.9278
                            ]
                        },
                        {
                            "uniqid": "a429",
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
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA2101",
                            "name": "Red:48",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:48",
                                    "typeId": "red_land_ssm"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:48",
                                    "typeId": "red_land_ssm"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2101",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                12.4921,
                                70.8449
                            ]
                        },
                        {
                            "uniqid": "a430",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_40"
                                }
                            ],
                            "contactId": "CA529",
                            "name": "Red:49",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA529",
                                    "typeId": "red_land_sam"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:49"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                10.4883,
                                76.5247
                            ]
                        },
                        {
                            "uniqid": "a431",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_11"
                                }
                            ],
                            "contactId": "CA2349",
                            "name": "Red:50",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:50",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:50",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                18.5521,
                                61.0203
                            ]
                        },
                        {
                            "uniqid": "a432",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_25"
                                }
                            ],
                            "contactId": "CA1496",
                            "name": "Red:51",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1496",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1496",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                5.2889,
                                26.3959
                            ]
                        },
                        {
                            "uniqid": "a433",
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
                            "contactId": "CA1799",
                            "name": "Red:52",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1799",
                                    "typeId": "red_land_ssm",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:52",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                13.8324,
                                73.4589
                            ]
                        },
                        {
                            "uniqid": "a434",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_9"
                                }
                            ],
                            "contactId": "CA384",
                            "name": "Red:53",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA384",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA384",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA384"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                16.8137,
                                29.6859
                            ]
                        },
                        {
                            "uniqid": "a435",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_c2_equipment",
                                    "value": "_14"
                                }
                            ],
                            "contactId": "CA706",
                            "name": "Red:54",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA706",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:54",
                                    "typeId": "red_land_c2",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_c2",
                            "condition": "working",
                            "location": [
                                23.872,
                                64.7623
                            ]
                        },
                        {
                            "uniqid": "a436",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_29"
                                }
                            ],
                            "contactId": "CA1299",
                            "name": "Red:55",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1299",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:55"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1299",
                                    "typeId": "red_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                7.2258,
                                83.8036
                            ]
                        },
                        {
                            "uniqid": "a437",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_13"
                                }
                            ],
                            "contactId": "CA1416",
                            "name": "Red:56",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1416",
                                    "typeId": "red_land_unit"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1416",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                22.4449,
                                24.0916
                            ]
                        },
                        {
                            "uniqid": "a438",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_26"
                                }
                            ],
                            "contactId": "CA597",
                            "name": "Red:57",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA597",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:57",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:57",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                15.7421,
                                45.4168
                            ]
                        },
                        {
                            "uniqid": "a439",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_4"
                                }
                            ],
                            "contactId": "CA2127",
                            "name": "Red:58",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2127",
                                    "typeId": "red_land_asset",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2127",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                2.2631,
                                53.6471
                            ]
                        },
                        {
                            "uniqid": "a440",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_24"
                                }
                            ],
                            "contactId": "CA2572",
                            "name": "Red:59",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:59",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                18.5795,
                                31.7055
                            ]
                        },
                        {
                            "uniqid": "a441",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_35"
                                }
                            ],
                            "contactId": "CA2605",
                            "name": "Red:60",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2605"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2605",
                                    "typeId": "red_maritime_submarine"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                23.7562,
                                80.4177
                            ]
                        },
                        {
                            "uniqid": "a442",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_48"
                                }
                            ],
                            "contactId": "CA1401",
                            "name": "Red:61",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:61",
                                    "typeId": "red_air_logs",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:61",
                                    "typeId": "red_air_logs"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                10.2593,
                                68.748
                            ]
                        },
                        {
                            "uniqid": "a443",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_33"
                                }
                            ],
                            "contactId": "CA688",
                            "name": "Red:62",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:62",
                                    "typeId": "red_air_fighter",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA688",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA688",
                                    "typeId": "red_air_fighter",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                12.177,
                                83.7078
                            ]
                        },
                        {
                            "uniqid": "a444",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_25"
                                }
                            ],
                            "contactId": "CA1952",
                            "name": "Red:63",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1952"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:63",
                                    "typeId": "red_air_fighter",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1952",
                                    "typeId": "red_air_fighter"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                7.9733,
                                54.5853
                            ]
                        },
                        {
                            "uniqid": "a445",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_16"
                                }
                            ],
                            "contactId": "CA1808",
                            "name": "Red:64",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:64",
                                    "typeId": "red_maritime_mtg"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1808",
                                    "typeId": "red_maritime_mtg",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:64"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                17.8289,
                                28.9143
                            ]
                        },
                        {
                            "uniqid": "a446",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA660",
                            "name": "Red:65",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA660",
                                    "force": "f-green"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:65",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                11.4297,
                                59.2382
                            ]
                        },
                        {
                            "uniqid": "a447",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2241",
                            "name": "Red:66",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:66",
                                    "typeId": "red_maritime_fiac"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA2241",
                                    "force": "f-white"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                20.7822,
                                43.3893
                            ]
                        },
                        {
                            "uniqid": "a448",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_8"
                                }
                            ],
                            "contactId": "CA3083",
                            "name": "Red:67",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA3083",
                                    "typeId": "red_land_asset",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA3083",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                25.1526,
                                42.7834
                            ]
                        },
                        {
                            "uniqid": "a449",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_sam_mez",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sam_equipment",
                                    "value": "_1"
                                }
                            ],
                            "contactId": "CA1540",
                            "name": "Red:68",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1540",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1540",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:68",
                                    "typeId": "red_land_sam",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_sam",
                            "condition": "working",
                            "location": [
                                26.5551,
                                75.952
                            ]
                        },
                        {
                            "uniqid": "a450",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_21"
                                }
                            ],
                            "contactId": "CA1135",
                            "name": "Red:69",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1135"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:69",
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                13.1784,
                                66.7383
                            ]
                        },
                        {
                            "uniqid": "a451",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_11"
                                }
                            ],
                            "contactId": "CA2683",
                            "name": "Red:70",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:70",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                5.1053,
                                72.2644
                            ]
                        },
                        {
                            "uniqid": "a452",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA63",
                            "name": "Red:71",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:71",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA63",
                                    "typeId": "red_maritime_fiac"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                15.4569,
                                83.5279
                            ]
                        },
                        {
                            "uniqid": "a453",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_37"
                                }
                            ],
                            "contactId": "CA356",
                            "name": "Red:72",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA356",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:72",
                                    "typeId": "red_maritime_submarine",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                24.8575,
                                49.4075
                            ]
                        },
                        {
                            "uniqid": "a454",
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
                            ],
                            "contactId": "CA2272",
                            "name": "Red:73",
                            "perceptions": [],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                18.5353,
                                22.0466
                            ]
                        },
                        {
                            "uniqid": "a455",
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
                            ],
                            "contactId": "CA2827",
                            "name": "Red:74",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:74",
                                    "typeId": "red_air_istar"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:74",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_air_istar",
                            "condition": "working",
                            "location": [
                                14.2475,
                                32.408
                            ]
                        },
                        {
                            "uniqid": "a456",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_fiac_number",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA675",
                            "name": "Red:75",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:75",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_maritime_fiac",
                            "condition": "working",
                            "location": [
                                13.1179,
                                41.0826
                            ]
                        },
                        {
                            "uniqid": "a457",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA424",
                            "name": "Red:76",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA424",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                10.0769,
                                47.6266
                            ]
                        },
                        {
                            "uniqid": "a458",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_sub_equipment",
                                    "value": "_20"
                                }
                            ],
                            "contactId": "CA1557",
                            "name": "Red:77",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1557",
                                    "typeId": "red_maritime_submarine"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:77",
                                    "force": "f-blue"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA1557",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_submarine",
                            "condition": "working",
                            "location": [
                                25.4437,
                                76.4552
                            ]
                        },
                        {
                            "uniqid": "a459",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_46"
                                }
                            ],
                            "contactId": "CA989",
                            "name": "Red:78",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA989",
                                    "typeId": "red_land_asset",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                8.9396,
                                41.4341
                            ]
                        },
                        {
                            "uniqid": "a460",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_23"
                                }
                            ],
                            "contactId": "CA2840",
                            "name": "Red:79",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:79",
                                    "typeId": "red_maritime_mtg"
                                }
                            ],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                25.166,
                                70.4513
                            ]
                        },
                        {
                            "uniqid": "a461",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_12"
                                }
                            ],
                            "contactId": "CA2383",
                            "name": "Red:80",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:80",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-green",
                                    "name": "Red:80",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                20.5215,
                                54.7441
                            ]
                        },
                        {
                            "uniqid": "a462",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_38"
                                }
                            ],
                            "contactId": "CA3365",
                            "name": "Red:81",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:81"
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
                                    "typeId": "red_land_asset"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                14.7903,
                                55.2424
                            ]
                        },
                        {
                            "uniqid": "a463",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_44"
                                }
                            ],
                            "contactId": "CA3315",
                            "name": "Red:82",
                            "perceptions": [],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                12.4451,
                                33.946
                            ]
                        },
                        {
                            "uniqid": "a464",
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
                                    "value": "_29"
                                }
                            ],
                            "contactId": "CA248",
                            "name": "Red:83",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:83",
                                    "typeId": "red_land_ssm"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA248",
                                    "typeId": "red_land_ssm",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                7.9612,
                                57.5145
                            ]
                        },
                        {
                            "uniqid": "a465",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_42"
                                }
                            ],
                            "contactId": "CA1908",
                            "name": "Red:84",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "Red:84",
                                    "typeId": "red_land_asset",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                19.5939,
                                40.3043
                            ]
                        },
                        {
                            "uniqid": "a466",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_37"
                                }
                            ],
                            "contactId": "CA166",
                            "name": "Red:85",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA166"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                10.1493,
                                79.9516
                            ]
                        },
                        {
                            "uniqid": "a467",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_9"
                                }
                            ],
                            "contactId": "CA2650",
                            "name": "Red:86",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA2650",
                                    "typeId": "red_land_unit"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                3.8127,
                                73.1592
                            ]
                        },
                        {
                            "uniqid": "a468",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_21"
                                }
                            ],
                            "contactId": "CA1255",
                            "name": "Red:87",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:87"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                4.488,
                                45.4044
                            ]
                        },
                        {
                            "uniqid": "a469",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_air_logs_number",
                                    "value": 100
                                },
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_air_logs_equipment",
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA1618",
                            "name": "Red:88",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1618",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                15.0527,
                                83.901
                            ]
                        },
                        {
                            "uniqid": "a470",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_45"
                                }
                            ],
                            "contactId": "CA3122",
                            "name": "Red:89",
                            "perceptions": [],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                24.7963,
                                57.3429
                            ]
                        },
                        {
                            "uniqid": "a471",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_0"
                                }
                            ],
                            "contactId": "CA688",
                            "name": "Red:90",
                            "perceptions": [],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                15.5161,
                                61.5681
                            ]
                        },
                        {
                            "uniqid": "a472",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_15"
                                }
                            ],
                            "contactId": "CA1276",
                            "name": "Red:91",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA1276"
                                },
                                {
                                    "by": "f-green",
                                    "name": "CA1276",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:91",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                16.6043,
                                79.7457
                            ]
                        },
                        {
                            "uniqid": "a473",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueNumber",
                                    "attrId": "r_mine_density",
                                    "value": 100
                                }
                            ],
                            "contactId": "CA2544",
                            "name": "Red:92",
                            "perceptions": [
                                {
                                    "by": "f-white",
                                    "name": "CA2544",
                                    "typeId": "red_maritime_mine",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_maritime_mine",
                            "condition": "working",
                            "location": [
                                26.5305,
                                27.3462
                            ]
                        },
                        {
                            "uniqid": "a474",
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
                            ],
                            "contactId": "CA3151",
                            "name": "Red:93",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:93"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:93",
                                    "typeId": "red_land_ssm"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                4.2654,
                                74.2097
                            ]
                        },
                        {
                            "uniqid": "a475",
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
                            ],
                            "contactId": "CA137",
                            "name": "Red:94",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA137",
                                    "typeId": "red_air_logs"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:94",
                                    "typeId": "red_air_logs"
                                }
                            ],
                            "platformTypeId": "red_air_logs",
                            "condition": "working",
                            "location": [
                                12.8003,
                                24.6486
                            ]
                        },
                        {
                            "uniqid": "a476",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_fighter_equipment",
                                    "value": "_32"
                                }
                            ],
                            "contactId": "CA2876",
                            "name": "Red:95",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "Red:95",
                                    "typeId": "red_air_fighter",
                                    "force": "f-red"
                                },
                                {
                                    "by": "f-white",
                                    "name": "CA2876",
                                    "typeId": "red_air_fighter",
                                    "force": "f-green"
                                }
                            ],
                            "platformTypeId": "red_air_fighter",
                            "condition": "working",
                            "location": [
                                14.851,
                                68.0362
                            ]
                        },
                        {
                            "uniqid": "a477",
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
                            "contactId": "CA1300",
                            "name": "Red:96",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "CA1300"
                                }
                            ],
                            "platformTypeId": "red_land_ssm",
                            "condition": "working",
                            "location": [
                                12.4706,
                                73.1355
                            ]
                        },
                        {
                            "uniqid": "a478",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_asset_equipment",
                                    "value": "_48"
                                }
                            ],
                            "contactId": "CA440",
                            "name": "Red:97",
                            "perceptions": [
                                {
                                    "by": "f-green",
                                    "name": "Red:97",
                                    "typeId": "red_land_asset",
                                    "force": "f-blue"
                                }
                            ],
                            "platformTypeId": "red_land_asset",
                            "condition": "working",
                            "location": [
                                11.9717,
                                60.6105
                            ]
                        },
                        {
                            "uniqid": "a479",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_land_equipment",
                                    "value": "_47"
                                }
                            ],
                            "contactId": "CA111",
                            "name": "Red:98",
                            "perceptions": [
                                {
                                    "by": "f-blue",
                                    "name": "CA111",
                                    "typeId": "red_land_unit",
                                    "force": "f-white"
                                },
                                {
                                    "by": "f-white",
                                    "name": "Red:98",
                                    "typeId": "red_land_unit",
                                    "force": "f-red"
                                }
                            ],
                            "platformTypeId": "red_land_unit",
                            "condition": "working",
                            "location": [
                                23.5377,
                                77.6982
                            ]
                        },
                        {
                            "uniqid": "a480",
                            "attributeValues": [
                                {
                                    "attrType": "AttributeValueString",
                                    "attrId": "r_mtg_units",
                                    "value": "_35"
                                }
                            ],
                            "contactId": "CA326",
                            "name": "Red:99",
                            "perceptions": [],
                            "platformTypeId": "red_maritime_mtg",
                            "condition": "working",
                            "location": [
                                7.8727,
                                49.8647
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
                    "attributeTypes": [
                        {
                            "attrId": "b_fighter_equipment",
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
                    "name": "Bomber",
                    "icon": "n_blue_air_bomber.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_bomber_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_bomber",
                    "travelMode": "air"
                },
                {
                    "name": "SAM",
                    "icon": "n_blue_land_sam.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "MTG",
                    "icon": "n_blue_maritime_task_force.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_mtg_units",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Members of Task Group",
                            "editableByPlayer": false,
                            "name": "Units"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mtg",
                    "travelMode": "sea"
                },
                {
                    "name": "Ship",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_ship_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_ship",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine",
                    "icon": "n_blue_maritime_submarine.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_sub_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit",
                    "icon": "n_blue_land_armed_inf.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_land_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_unit",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "blue_land_asset.png",
                    "attributeTypes": [
                        {
                            "attrId": "b_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_asset",
                    "travelMode": "sea"
                },
                {
                    "name": "SSM",
                    "icon": "n_blue_land_ssm.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_ssm",
                    "travelMode": "sea"
                },
                {
                    "name": "ISTAR",
                    "icon": "n_blue_air_recce.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_istar",
                    "travelMode": "sea"
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_blue_air_utility.svg",
                    "attributeTypes": [
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
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_logs",
                    "travelMode": "sea"
                },
                {
                    "name": "C2 Node",
                    "icon": "n_blue_hq.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_c2_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "C2 Connections for asset",
                            "editableByPlayer": false,
                            "name": "Connections"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_fiac_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Minefield",
                    "icon": "n_blue_maritime_minefield.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_mine_density",
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
                    "icon": "re_land_asset.png",
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
