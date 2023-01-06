
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> =   [
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-6",
            "title": "Order item 6",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-16T17:35:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//3.105222334795144//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    54.4242,
                                    48.416
                                ],
                                [
                                    63.04,
                                    30.22
                                ],
                                [
                                    72.03,
                                    11.38
                                ],
                                [
                                    71.7477,
                                    11.7095
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668394500000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//6.210444669590288//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.09183072813025,
                                        12.349448445502064
                                    ],
                                    [
                                        71.09183072813025,
                                        11.06806647339419
                                    ],
                                    [
                                        72.40053609149913,
                                        11.06806647339419
                                    ],
                                    [
                                        72.40053609149913,
                                        12.349448445502064
                                    ],
                                    [
                                        71.09183072813025,
                                        12.349448445502064
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T02:55:00.000Z",
                            "endDate": "2022-11-14T04:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394500000,
                            "endTime": 1668400500000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//9.315667004385432//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.7477,
                                    11.7095
                                ],
                                [
                                    65.71,
                                    23.57
                                ],
                                [
                                    59.92,
                                    36.67
                                ],
                                [
                                    54.41,
                                    48.06
                                ],
                                [
                                    54.4242,
                                    48.416
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a249",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                },
                {
                    "asset": "a310"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_6",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-9",
            "title": "Order item 9",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T04:55:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Patrol-0",
                            "name": "f-red//3.8121305503746044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.3056,
                                    17.3425
                                ],
                                [
                                    76.01,
                                    23.15
                                ],
                                [
                                    76.62,
                                    29.87
                                ],
                                [
                                    78.52,
                                    35.87
                                ],
                                [
                                    79.69,
                                    41.15
                                ],
                                [
                                    79.9049,
                                    41.6475
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387300000,
                            "endTime": 1668395700000,
                            "geomId": "Patrol-1",
                            "name": "f-red//7.624261100749209//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        75.51894396253766,
                                        44.68494635665078
                                    ],
                                    [
                                        75.51894396253766,
                                        38.458590813743044
                                    ],
                                    [
                                        83.88648299819339,
                                        38.458590813743044
                                    ],
                                    [
                                        83.88648299819339,
                                        44.68494635665078
                                    ],
                                    [
                                        75.51894396253766,
                                        44.68494635665078
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668401700000,
                            "geomId": "Patrol-2",
                            "name": "f-red//11.436391651123813//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.9049,
                                    41.6475
                                ],
                                [
                                    78.05,
                                    33.18
                                ],
                                [
                                    76.29,
                                    25.82
                                ],
                                [
                                    73.82,
                                    17.74
                                ],
                                [
                                    74.3056,
                                    17.3425
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a341",
                    "number": 2
                },
                {
                    "asset": "a394",
                    "number": 4
                },
                {
                    "asset": "a376",
                    "number": 3
                },
                {
                    "asset": "a387",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_9",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-12",
            "title": "Order item 12",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T05:55:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//3.412459935258994//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    54.4242,
                                    48.416
                                ],
                                [
                                    49.69,
                                    38.56
                                ],
                                [
                                    44.03,
                                    27.78
                                ],
                                [
                                    38.67,
                                    18.3
                                ],
                                [
                                    39.1691,
                                    17.8523
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ISTAR-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Patrol Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668394500000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//6.824919870517988//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        38.90854212700095,
                                        18.09979192924226
                                    ],
                                    [
                                        38.90854212700095,
                                        17.604463271544265
                                    ],
                                    [
                                        39.428933395155205,
                                        17.604463271544265
                                    ],
                                    [
                                        39.428933395155205,
                                        18.09979192924226
                                    ],
                                    [
                                        38.90854212700095,
                                        18.09979192924226
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ISTAR-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Observation Area",
                            "startDate": "2022-11-14T02:55:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394500000,
                            "endTime": 1668395700000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//10.237379805776982//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        37.315162604139196,
                                        19.590221239428185
                                    ],
                                    [
                                        37.315162604139196,
                                        16.09721499589373
                                    ],
                                    [
                                        40.9869843781478,
                                        16.09721499589373
                                    ],
                                    [
                                        40.9869843781478,
                                        19.590221239428185
                                    ],
                                    [
                                        37.315162604139196,
                                        19.590221239428185
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ISTAR-3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route back",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T05:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395700000,
                            "endTime": 1668405300000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//13.649839741035976//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.1691,
                                    17.8523
                                ],
                                [
                                    44.4,
                                    28.49
                                ],
                                [
                                    49.75,
                                    38.25
                                ],
                                [
                                    54.39,
                                    48.3
                                ],
                                [
                                    54.4242,
                                    48.416
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a287",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_12",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-15",
            "title": "Order item 15",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T05:35:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.87,
                                    29.0025
                                ],
                                [
                                    72.03,
                                    18.07
                                ],
                                [
                                    71.48,
                                    6.43
                                ],
                                [
                                    71.2767,
                                    6.5512
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//SEAD Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T03:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668395100000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//13.81242097888753//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.53411548420856,
                                        10.220566630076041
                                    ],
                                    [
                                        67.53411548420856,
                                        2.8545391738053145
                                    ],
                                    [
                                        74.96439657123284,
                                        2.8545391738053145
                                    ],
                                    [
                                        74.96439657123284,
                                        10.220566630076041
                                    ],
                                    [
                                        67.53411548420856,
                                        10.220566630076041
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route back",
                            "startDate": "2022-11-14T03:05:00.000Z",
                            "endDate": "2022-11-14T05:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395100000,
                            "endTime": 1668404100000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.2767,
                                    6.5512
                                ],
                                [
                                    72.29,
                                    14.32
                                ],
                                [
                                    72.34,
                                    21.14
                                ],
                                [
                                    72.67,
                                    29.23
                                ],
                                [
                                    72.87,
                                    29.0025
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a288",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_15",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--TST",
            "timestamp": "2022-09-29T01:45:19.005Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-18",
            "title": "Order item 18",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T03:25:00.000Z",
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-blue//4.293382212938013//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.7688,
                                    43.8085
                                ],
                                [
                                    42.22,
                                    33.94
                                ],
                                [
                                    45.03,
                                    24.41
                                ],
                                [
                                    45.2817,
                                    24.1591
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//TST Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T01:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668387900000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-blue//8.586764425876027//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.084199485381966,
                                        26.116647870184842
                                    ],
                                    [
                                        43.084199485381966,
                                        22.17103664025578
                                    ],
                                    [
                                        47.41234267563968,
                                        22.17103664025578
                                    ],
                                    [
                                        47.41234267563968,
                                        26.116647870184842
                                    ],
                                    [
                                        43.084199485381966,
                                        26.116647870184842
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route back",
                            "startDate": "2022-11-14T01:05:00.000Z",
                            "endDate": "2022-11-14T03:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387900000,
                            "endTime": 1668396300000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-blue//12.88014663881404//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.2817,
                                    24.1591
                                ],
                                [
                                    42.2,
                                    33.96
                                ],
                                [
                                    38.46,
                                    44.11
                                ],
                                [
                                    38.7688,
                                    43.8085
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a246",
                    "number": 3
                },
                {
                    "asset": "a255",
                    "number": 0
                },
                {
                    "asset": "a291",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_18",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "Sub-Surface",
                "roleId": "blue-sub",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-21",
            "title": "Order item 21",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:55:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//5.573975105719001//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.8751,
                                    40.1277
                                ],
                                [
                                    52.4,
                                    30.47
                                ],
                                [
                                    50.99,
                                    20.88
                                ],
                                [
                                    49.85,
                                    11.57
                                ],
                                [
                                    50.1179,
                                    11.3073
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Mine Area",
                            "startDate": "2022-11-14T00:55:00.000Z",
                            "endDate": "2022-11-14T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668387300000,
                            "endTime": 1668398700000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//11.147950211438001//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        49.273576876903775,
                                        12.131573388980442
                                    ],
                                    [
                                        49.273576876903775,
                                        10.480648197652034
                                    ],
                                    [
                                        50.95737241916903,
                                        10.480648197652034
                                    ],
                                    [
                                        50.95737241916903,
                                        12.131573388980442
                                    ],
                                    [
                                        49.273576876903775,
                                        12.131573388980442
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route back",
                            "startDate": "2022-11-14T04:05:00.000Z",
                            "endDate": "2022-11-14T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668398700000,
                            "endTime": 1668408900000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//16.721925317157//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.1179,
                                    11.3073
                                ],
                                [
                                    53.52,
                                    40.16
                                ],
                                [
                                    53.8751,
                                    40.1277
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a258",
                    "number": 2
                },
                {
                    "asset": "a252",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_21",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-24",
            "title": "Order item 24",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T00:55:00.000Z",
            "location": [
                {
                    "uniqid": "SAM MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SAM MEZ//SAM MEZ Location",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "SAM MEZ-0",
                            "name": "f-blue//5.747989167804917//SAM MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                70.6389,
                                19.2766
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a225",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                },
                {
                    "asset": "a310"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_24",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Land & Fires",
                "roleId": "red-land",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-27",
            "title": "Order item 27",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T00:55:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "Transit-0",
                            "name": "f-red//4.815424399195763//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.7691,
                                    24.5421
                                ],
                                [
                                    68.62,
                                    54.56
                                ],
                                [
                                    68.5053,
                                    54.9247
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a346",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                },
                {
                    "asset": "a294"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_27",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-30",
            "title": "Order item 30",
            "startDate": "2022-11-14T00:10:00.000Z",
            "endDate": "2022-11-14T04:00:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T00:10:00.000Z",
                            "endDate": "2022-11-14T01:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384600000,
                            "endTime": 1668387600000,
                            "geomId": "Mine Laying-0",
                            "name": "f-red//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.7477,
                                    11.7095
                                ],
                                [
                                    73.88,
                                    26.06
                                ],
                                [
                                    76.3,
                                    39.68
                                ],
                                [
                                    78,
                                    53.59
                                ],
                                [
                                    78.055,
                                    53.9679
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Mine Area",
                            "startDate": "2022-11-14T01:00:00.000Z",
                            "endDate": "2022-11-14T01:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387600000,
                            "endTime": 1668390600000,
                            "geomId": "Mine Laying-1",
                            "name": "f-red//5.552561599819455//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        73.79451528067729,
                                        56.261505644764995
                                    ],
                                    [
                                        73.79451528067729,
                                        51.53958140344706
                                    ],
                                    [
                                        81.85876848684634,
                                        51.53958140344706
                                    ],
                                    [
                                        81.85876848684634,
                                        56.261505644764995
                                    ],
                                    [
                                        73.79451528067729,
                                        56.261505644764995
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Laying-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route back",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390600000,
                            "endTime": 1668398400000,
                            "geomId": "Mine Laying-2",
                            "name": "f-red//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.055,
                                    53.9679
                                ],
                                [
                                    76.84,
                                    43.31
                                ],
                                [
                                    74.42,
                                    32.44
                                ],
                                [
                                    73.29,
                                    21.85
                                ],
                                [
                                    71.43,
                                    11.54
                                ],
                                [
                                    71.7477,
                                    11.7095
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a322",
                    "number": 1
                },
                {
                    "asset": "a370",
                    "number": 3
                },
                {
                    "asset": "a347",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                },
                {
                    "asset": "a294"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_30",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-33",
            "title": "Order item 33",
            "startDate": "2022-11-14T00:30:00.000Z",
            "endDate": "2022-11-14T00:50:00.000Z",
            "location": [],
            "activity": "f-red-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a352",
                    "number": 1
                },
                {
                    "asset": "a385",
                    "number": 2
                },
                {
                    "asset": "a348",
                    "number": 4
                },
                {
                    "asset": "a339",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                },
                {
                    "asset": "a294"
                },
                {
                    "asset": "a210"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_33",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 3",
                "roleId": "blue-mtg-3",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-21T16:42:09.598Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-36",
            "title": "Order item 36",
            "startDate": "2022-11-14T00:45:00.000Z",
            "endDate": "2022-11-14T02:45:00.000Z",
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-11-14T00:45:00.000Z",
                            "endDate": "2022-11-14T01:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668386700000,
                            "endTime": 1668389700000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.378257109216065//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.8743,
                                    44.6479
                                ],
                                [
                                    45.83,
                                    37.36
                                ],
                                [
                                    49.65,
                                    28.92
                                ],
                                [
                                    52.74,
                                    21.76
                                ],
                                [
                                    56.12,
                                    13.89
                                ],
                                [
                                    55.758,
                                    13.8633
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Resupply-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Resupply at this location",
                            "startDate": "2022-11-14T01:35:00.000Z",
                            "endDate": "2022-11-14T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668389700000,
                            "endTime": 1668393300000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//10.75651421843213//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        52.793570441190184,
                                        16.685193877481172
                                    ],
                                    [
                                        52.793570441190184,
                                        11.006594080291876
                                    ],
                                    [
                                        58.65076868600005,
                                        11.006594080291876
                                    ],
                                    [
                                        58.65076868600005,
                                        16.685193877481172
                                    ],
                                    [
                                        52.793570441190184,
                                        16.685193877481172
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Resupply-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route back",
                            "startDate": "2022-11-14T02:35:00.000Z",
                            "endDate": "2022-11-14T02:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393300000,
                            "endTime": 1668393900000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//16.134771327648195//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.758,
                                    13.8633
                                ],
                                [
                                    51.24,
                                    23.68
                                ],
                                [
                                    46.98,
                                    34.75
                                ],
                                [
                                    43.01,
                                    45.11
                                ],
                                [
                                    42.8743,
                                    44.6479
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a239",
                    "number": 2
                },
                {
                    "asset": "a257",
                    "number": 0
                },
                {
                    "asset": "a205",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_36",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-39",
            "title": "Order item 39",
            "startDate": "2022-11-14T00:45:00.000Z",
            "endDate": "2022-11-14T03:55:00.000Z",
            "location": [
                {
                    "uniqid": "FIAC EZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//Route out",
                            "startDate": "2022-11-14T00:45:00.000Z",
                            "endDate": "2022-11-14T01:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668386700000,
                            "endTime": 1668389700000,
                            "geomId": "FIAC EZ-0",
                            "name": "f-red//5.019377017772058//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    68.5771,
                                    8.6761
                                ],
                                [
                                    72.58,
                                    21.17
                                ],
                                [
                                    75.81,
                                    33.89
                                ],
                                [
                                    79.32,
                                    45.9
                                ],
                                [
                                    79.1648,
                                    46.3882
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "FIAC EZ-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//FIAC EZ Location",
                            "startDate": "2022-11-14T01:35:00.000Z",
                            "endDate": "2022-11-14T03:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668389700000,
                            "endTime": 1668396300000,
                            "geomId": "FIAC EZ-1",
                            "name": "f-red//10.038754035544116//FIAC EZ Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        78.3950330825318,
                                        46.91148283743098
                                    ],
                                    [
                                        78.3950330825318,
                                        45.8598507318903
                                    ],
                                    [
                                        79.9198780181247,
                                        45.8598507318903
                                    ],
                                    [
                                        79.9198780181247,
                                        46.91148283743098
                                    ],
                                    [
                                        78.3950330825318,
                                        46.91148283743098
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "FIAC EZ-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//Route back",
                            "startDate": "2022-11-14T03:25:00.000Z",
                            "endDate": "2022-11-14T03:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396300000,
                            "endTime": 1668398100000,
                            "geomId": "FIAC EZ-2",
                            "name": "f-red//15.058131053316174//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.1648,
                                    46.3882
                                ],
                                [
                                    76.13,
                                    36.46
                                ],
                                [
                                    73.96,
                                    27.41
                                ],
                                [
                                    71.07,
                                    17.64
                                ],
                                [
                                    68.47,
                                    9.15
                                ],
                                [
                                    68.5771,
                                    8.6761
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-FIAC EZ",
            "ownAssets": [
                {
                    "asset": "a378",
                    "number": 3
                },
                {
                    "asset": "a382",
                    "number": 2
                },
                {
                    "asset": "a315",
                    "number": 4
                },
                {
                    "asset": "a374",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                },
                {
                    "asset": "a294"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_39",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-42",
            "title": "Order item 42",
            "startDate": "2022-11-14T00:50:00.000Z",
            "endDate": "2022-11-14T04:30:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T00:50:00.000Z",
                            "endDate": "2022-11-14T01:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387000000,
                            "endTime": 1668390000000,
                            "geomId": "Patrol-0",
                            "name": "f-red//3.55391809566936//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    63.0744,
                                    14.3908
                                ],
                                [
                                    54.56,
                                    23.96
                                ],
                                [
                                    47.29,
                                    33.78
                                ],
                                [
                                    38.31,
                                    43.88
                                ],
                                [
                                    38.7688,
                                    43.8085
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Patrol Area",
                            "startDate": "2022-11-14T01:40:00.000Z",
                            "endDate": "2022-11-14T02:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390000000,
                            "endTime": 1668393000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//7.10783619133872//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.708060231987524,
                                        46.53225726059471
                                    ],
                                    [
                                        34.708060231987524,
                                        40.95370345976926
                                    ],
                                    [
                                        42.46719153308521,
                                        40.95370345976926
                                    ],
                                    [
                                        42.46719153308521,
                                        46.53225726059471
                                    ],
                                    [
                                        34.708060231987524,
                                        46.53225726059471
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Patrol-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route back",
                            "startDate": "2022-11-14T02:30:00.000Z",
                            "endDate": "2022-11-14T04:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393000000,
                            "endTime": 1668400200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//10.66175428700808//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.7688,
                                    43.8085
                                ],
                                [
                                    50.91,
                                    28.97
                                ],
                                [
                                    63.56,
                                    14.62
                                ],
                                [
                                    63.0744,
                                    14.3908
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a374",
                    "number": 1
                },
                {
                    "asset": "a363",
                    "number": 2
                },
                {
                    "asset": "a379",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_42",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 2",
                "roleId": "blue-mtg-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-45",
            "title": "Order item 45",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T04:00:00.000Z",
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-blue//5.981880342907971//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.6178,
                                    32.4726
                                ],
                                [
                                    82.32,
                                    21.44
                                ],
                                [
                                    82.2802,
                                    21.7946
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//OCA Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668391200000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-blue//11.963760685815942//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        81.26899605326578,
                                        22.724245526448843
                                    ],
                                    [
                                        81.26899605326578,
                                        20.858881624084045
                                    ],
                                    [
                                        83.2783245330032,
                                        20.858881624084045
                                    ],
                                    [
                                        83.2783245330032,
                                        22.724245526448843
                                    ],
                                    [
                                        81.26899605326578,
                                        22.724245526448843
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route back",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668398400000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-blue//17.945641028723912//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.2802,
                                    21.7946
                                ],
                                [
                                    67.12,
                                    27.11
                                ],
                                [
                                    51.31,
                                    32.78
                                ],
                                [
                                    51.6178,
                                    32.4726
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a226",
                    "number": 0
                },
                {
                    "asset": "a297",
                    "number": 3
                },
                {
                    "asset": "a299",
                    "number": 4
                },
                {
                    "asset": "a231",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_45",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "MAR",
                "roleId": "red-mar",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-48",
            "title": "Order item 48",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T02:00:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Transit-0",
                            "name": "f-red//2.303263759415131//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    84.2466,
                                    25.0515
                                ],
                                [
                                    79.32,
                                    27.31
                                ],
                                [
                                    74.25,
                                    30.43
                                ],
                                [
                                    68.47,
                                    32.83
                                ],
                                [
                                    62.97,
                                    34.51
                                ],
                                [
                                    63.2723,
                                    34.8329
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a331",
                    "number": 4
                },
                {
                    "asset": "a388",
                    "number": 2
                },
                {
                    "asset": "a375",
                    "number": 1
                },
                {
                    "asset": "a389",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                },
                {
                    "asset": "a294"
                },
                {
                    "asset": "a210"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_48",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 2",
                "roleId": "blue-aew-2",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-51",
            "title": "Order item 51",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T02:00:00.000Z",
            "location": [
                {
                    "uniqid": "BMD MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "BMD MEZ//BMD MEZ Location",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "BMD MEZ-0",
                            "name": "f-blue//2.5180683452636003//BMD MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                81.12,
                                7.3026
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a289",
                    "number": 3
                },
                {
                    "asset": "a234",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                },
                {
                    "asset": "a310"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_51",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "CO",
                "roleId": "red-CO",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--TST",
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-54",
            "title": "Order item 54",
            "startDate": "2022-11-14T01:10:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.6818,
                                    9.1257
                                ],
                                [
                                    74.52,
                                    20.88
                                ],
                                [
                                    67.62,
                                    32.89
                                ],
                                [
                                    59,
                                    45.19
                                ],
                                [
                                    59.4655,
                                    45.1256
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//TST Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668399600000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//13.252588200615719//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        54.743116545187206,
                                        48.18040249251479
                                    ],
                                    [
                                        54.743116545187206,
                                        41.896327100025374
                                    ],
                                    [
                                        63.69482979716489,
                                        41.896327100025374
                                    ],
                                    [
                                        63.69482979716489,
                                        48.18040249251479
                                    ],
                                    [
                                        54.743116545187206,
                                        48.18040249251479
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Time Sensitive Targeting (TST)-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route back",
                            "startDate": "2022-11-14T04:20:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399600000,
                            "endTime": 1668400800000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.4655,
                                    45.1256
                                ],
                                [
                                    70.85,
                                    27.31
                                ],
                                [
                                    82.68,
                                    8.94
                                ],
                                [
                                    82.6818,
                                    9.1257
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a307",
                    "number": 2
                },
                {
                    "asset": "a334",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                },
                {
                    "asset": "a294"
                },
                {
                    "asset": "a210"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_54",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Direct Action",
                "roleId": "red-direct",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Land--EWAttack",
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-57",
            "title": "Order item 57",
            "startDate": "2022-11-14T01:20:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-11-14T01:20:00.000Z",
                            "endDate": "2022-11-14T02:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388800000,
                            "endTime": 1668391800000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//4.627941024693428//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    82.6818,
                                    9.1257
                                ],
                                [
                                    63.59,
                                    17.42
                                ],
                                [
                                    43.69,
                                    25.92
                                ],
                                [
                                    24.08,
                                    33.7
                                ],
                                [
                                    23.9214,
                                    34.1455
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "EW Attack-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//EW Area of Effect",
                            "startDate": "2022-11-14T02:10:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391800000,
                            "endTime": 1668402000000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//9.255882049386855//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        20.45377242333538,
                                        36.87176636233192
                                    ],
                                    [
                                        20.45377242333538,
                                        31.32791528524836
                                    ],
                                    [
                                        27.16865770775435,
                                        31.32791528524836
                                    ],
                                    [
                                        27.16865770775435,
                                        36.87176636233192
                                    ],
                                    [
                                        20.45377242333538,
                                        36.87176636233192
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "EW Attack-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route back",
                            "startDate": "2022-11-14T05:00:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402000000,
                            "endTime": 1668402000000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//13.883823074080283//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.9214,
                                    34.1455
                                ],
                                [
                                    53.4,
                                    21.39
                                ],
                                [
                                    82.37,
                                    9.13
                                ],
                                [
                                    82.6818,
                                    9.1257
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "a375",
                    "number": 0
                },
                {
                    "asset": "a388",
                    "number": 2
                },
                {
                    "asset": "a331",
                    "number": 2
                },
                {
                    "asset": "a399",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                },
                {
                    "asset": "a294"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_57",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-23T11:02:41.326Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-60",
            "title": "Order item 60",
            "startDate": "2022-11-14T01:30:00.000Z",
            "endDate": "2022-11-14T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-11-14T01:30:00.000Z",
                            "endDate": "2022-11-14T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668389400000,
                            "endTime": 1668392400000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-red//6.523009118420305//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.5956,
                                    4.2191
                                ],
                                [
                                    69.69,
                                    19.12
                                ],
                                [
                                    74.11,
                                    34.34
                                ],
                                [
                                    74.4096,
                                    33.9891
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//OCA Area",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392400000,
                            "endTime": 1668402600000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-red//13.04601823684061//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        70.59237247618373,
                                        36.98078273311974
                                    ],
                                    [
                                        70.59237247618373,
                                        30.8876650501574
                                    ],
                                    [
                                        77.96253569373934,
                                        30.8876650501574
                                    ],
                                    [
                                        77.96253569373934,
                                        36.98078273311974
                                    ],
                                    [
                                        70.59237247618373,
                                        36.98078273311974
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Offensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route back",
                            "startDate": "2022-11-14T05:10:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402600000,
                            "endTime": 1668412200000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-red//19.569027355260914//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.4096,
                                    33.9891
                                ],
                                [
                                    71.76,
                                    26.74
                                ],
                                [
                                    69.04,
                                    19.42
                                ],
                                [
                                    66.6,
                                    11.38
                                ],
                                [
                                    64.44,
                                    4.62
                                ],
                                [
                                    64.5956,
                                    4.2191
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a399",
                    "number": 4
                },
                {
                    "asset": "a397",
                    "number": 3
                },
                {
                    "asset": "a326",
                    "number": 3
                },
                {
                    "asset": "a379",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a213"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_60",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "AEW 1",
                "roleId": "blue-aew-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-63",
            "title": "Order item 63",
            "startDate": "2022-11-14T01:50:00.000Z",
            "endDate": "2022-11-14T06:50:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T02:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668390600000,
                            "endTime": 1668393600000,
                            "geomId": "SOF Activity-0",
                            "name": "f-blue//2.311498381488491//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.105,
                                    39.5153
                                ],
                                [
                                    41.19,
                                    28.78
                                ],
                                [
                                    32.63,
                                    18.4
                                ],
                                [
                                    32.985,
                                    18.0596
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "SOF Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Activity Location",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393600000,
                            "endTime": 1668394800000,
                            "geomId": "SOF Activity-1",
                            "name": "f-blue//4.622996762976982//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        28.86858932421263,
                                        21.83754379124862
                                    ],
                                    [
                                        28.86858932421263,
                                        14.198216597562162
                                    ],
                                    [
                                        36.92614254642442,
                                        14.198216597562162
                                    ],
                                    [
                                        36.92614254642442,
                                        21.83754379124862
                                    ],
                                    [
                                        28.86858932421263,
                                        21.83754379124862
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "SOF Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Effect Location",
                            "startDate": "2022-11-14T03:00:00.000Z",
                            "endDate": "2022-11-14T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394800000,
                            "endTime": 1668401400000,
                            "geomId": "SOF Activity-2",
                            "name": "f-blue//6.9344951444654725//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.95273445258612,
                                        19.959245354671996
                                    ],
                                    [
                                        30.95273445258612,
                                        16.139166991670958
                                    ],
                                    [
                                        34.97355192282534,
                                        16.139166991670958
                                    ],
                                    [
                                        34.97355192282534,
                                        19.959245354671996
                                    ],
                                    [
                                        30.95273445258612,
                                        19.959245354671996
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "SOF Activity-3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route back",
                            "startDate": "2022-11-14T04:50:00.000Z",
                            "endDate": "2022-11-14T06:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668401400000,
                            "endTime": 1668408600000,
                            "geomId": "SOF Activity-3",
                            "name": "f-blue//9.245993525953963//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.985,
                                    18.0596
                                ],
                                [
                                    40.73,
                                    28.32
                                ],
                                [
                                    48.79,
                                    39.9
                                ],
                                [
                                    49.105,
                                    39.5153
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a279",
                    "number": 5
                },
                {
                    "asset": "a263",
                    "number": 3
                },
                {
                    "asset": "a274",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a313"
                },
                {
                    "asset": "a394"
                },
                {
                    "asset": "a310"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_63",
        "_rev": "2"
    }]