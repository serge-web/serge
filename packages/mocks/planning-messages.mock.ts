
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> =  [
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
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-6",
            "title": "Order item 6",
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
                            "name": "f-blue//3.105222334795144//SAM MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                72.1931,
                                20.1209
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-SAM MEZ",
            "ownAssets": [
                {
                    "asset": "a622",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 3
                },
                {
                    "asset": "a797",
                    "number": 0
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-9",
            "title": "Order item 9",
            "startDate": "2022-11-14T00:05:00.000Z",
            "endDate": "2022-11-14T06:45:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T00:05:00.000Z",
                            "endDate": "2022-11-14T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668384300000,
                            "endTime": 1668387300000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.8121305503746044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.4515,
                                    26.8846
                                ],
                                [
                                    75.23,
                                    32.95
                                ],
                                [
                                    70.91,
                                    39.92
                                ],
                                [
                                    67.87,
                                    46.18
                                ],
                                [
                                    64.12,
                                    51.71
                                ],
                                [
                                    64.3273,
                                    52.2145
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
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387300000,
                            "endTime": 1668395700000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//7.624261100749209//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        58.85853045861732,
                                        55.21358204277228
                                    ],
                                    [
                                        58.85853045861732,
                                        48.99531537081166
                                    ],
                                    [
                                        69.08081201735679,
                                        48.99531537081166
                                    ],
                                    [
                                        69.08081201735679,
                                        55.21358204277228
                                    ],
                                    [
                                        58.85853045861732,
                                        55.21358204277228
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
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668401700000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//11.436391651123813//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        59.4447809751179,
                                        54.92352319225516
                                    ],
                                    [
                                        59.4447809751179,
                                        49.32761322107727
                                    ],
                                    [
                                        68.63132752841265,
                                        49.32761322107727
                                    ],
                                    [
                                        68.63132752841265,
                                        54.92352319225516
                                    ],
                                    [
                                        59.4447809751179,
                                        54.92352319225516
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
                            "startDate": "2022-11-14T04:55:00.000Z",
                            "endDate": "2022-11-14T06:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668401700000,
                            "endTime": 1668408300000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//15.248522201498417//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.3273,
                                    52.2145
                                ],
                                [
                                    69.12,
                                    43.42
                                ],
                                [
                                    73.97,
                                    35.68
                                ],
                                [
                                    78.11,
                                    27.22
                                ],
                                [
                                    78.4515,
                                    26.8846
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a797",
                    "number": 5
                },
                {
                    "asset": "a779",
                    "number": 2
                },
                {
                    "asset": "a790",
                    "number": 0
                },
                {
                    "asset": "a731",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 0
                },
                {
                    "asset": "a697",
                    "number": 2
                },
                {
                    "asset": "a613",
                    "number": 1
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
                "force": "Red",
                "forceColor": "#ff3d43",
                "roleName": "Air & AD",
                "roleId": "red-air",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-33",
            "title": "Order item 33",
            "startDate": "2022-11-14T00:30:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-14T00:30:00.000Z",
                            "endDate": "2022-11-14T01:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668385800000,
                            "endTime": 1668388800000,
                            "geomId": "SOF Activity-0",
                            "name": "f-red//4.630558369892242//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.5351,
                                    13.4045
                                ],
                                [
                                    53.93,
                                    19.48
                                ],
                                [
                                    41.5,
                                    24.73
                                ],
                                [
                                    28.35,
                                    30.26
                                ],
                                [
                                    28.3848,
                                    30.4486
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
                            "startDate": "2022-11-14T01:20:00.000Z",
                            "endDate": "2022-11-14T01:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388800000,
                            "endTime": 1668388800000,
                            "geomId": "SOF Activity-1",
                            "name": "f-red//9.261116739784484//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.22099649656848,
                                        31.43644967618951
                                    ],
                                    [
                                        27.22099649656848,
                                        29.45063098435111
                                    ],
                                    [
                                        29.52513064009654,
                                        29.45063098435111
                                    ],
                                    [
                                        29.52513064009654,
                                        31.43644967618951
                                    ],
                                    [
                                        27.22099649656848,
                                        31.43644967618951
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
                            "startDate": "2022-11-14T01:20:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668388800000,
                            "endTime": 1668394200000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//13.891675109676726//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.00684857031813,
                                        34.0063400481326
                                    ],
                                    [
                                        24.00684857031813,
                                        26.755171014346118
                                    ],
                                    [
                                        32.448604250382225,
                                        26.755171014346118
                                    ],
                                    [
                                        32.448604250382225,
                                        34.0063400481326
                                    ],
                                    [
                                        24.00684857031813,
                                        34.0063400481326
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394200000,
                            "endTime": 1668402000000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//18.522233479568968//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.3848,
                                    30.4486
                                ],
                                [
                                    47.4,
                                    22.01
                                ],
                                [
                                    66.82,
                                    12.99
                                ],
                                [
                                    66.5351,
                                    13.4045
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a788",
                    "number": 0
                },
                {
                    "asset": "a751",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 3
                },
                {
                    "asset": "a697",
                    "number": 0
                },
                {
                    "asset": "a613",
                    "number": 0
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
            "messageType": "Maritime--MineLaying",
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
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T00:45:00.000Z",
                            "endDate": "2022-11-14T01:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668386700000,
                            "endTime": 1668389700000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//5.378257109216065//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.0783,
                                    47.056
                                ],
                                [
                                    29.55,
                                    40
                                ],
                                [
                                    34.87,
                                    31.8
                                ],
                                [
                                    39.48,
                                    24.88
                                ],
                                [
                                    44.37,
                                    17.25
                                ],
                                [
                                    44.0046,
                                    17.2211
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
                            "startDate": "2022-11-14T01:35:00.000Z",
                            "endDate": "2022-11-14T02:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668389700000,
                            "endTime": 1668393300000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//10.75651421843213//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.98195054434506,
                                        20.03841497265864
                                    ],
                                    [
                                        40.98195054434506,
                                        14.360061040979103
                                    ],
                                    [
                                        46.93576972982656,
                                        14.360061040979103
                                    ],
                                    [
                                        46.93576972982656,
                                        20.03841497265864
                                    ],
                                    [
                                        40.98195054434506,
                                        20.03841497265864
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
                            "startDate": "2022-11-14T02:35:00.000Z",
                            "endDate": "2022-11-14T02:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393300000,
                            "endTime": 1668393900000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//16.134771327648195//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    44.0046,
                                    17.2211
                                ],
                                [
                                    37.47,
                                    26.72
                                ],
                                [
                                    31.2,
                                    37.48
                                ],
                                [
                                    25.21,
                                    47.52
                                ],
                                [
                                    25.0783,
                                    47.056
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a660",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 2
                },
                {
                    "asset": "a797",
                    "number": 5
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
            "messageType": "Land--Standard",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-42",
            "title": "Order item 42",
            "startDate": "2022-11-14T00:50:00.000Z",
            "endDate": "2022-11-14T01:40:00.000Z",
            "location": [
                {
                    "uniqid": "BMD MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "BMD MEZ//BMD MEZ Location",
                            "startDate": "2022-11-14T00:50:00.000Z",
                            "endDate": "2022-11-14T01:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668387000000,
                            "endTime": 1668390000000,
                            "geomId": "BMD MEZ-0",
                            "name": "f-red//3.55391809566936//BMD MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                33.5426,
                                36.4885
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a766",
                    "number": 3
                },
                {
                    "asset": "a782",
                    "number": 5
                },
                {
                    "asset": "a729",
                    "number": 4
                },
                {
                    "asset": "a800",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 0
                },
                {
                    "asset": "a697",
                    "number": 1
                },
                {
                    "asset": "a613",
                    "number": 1
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
            "messageType": "Land--Patrol",
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
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T01:10:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668388200000,
                            "endTime": 1668391200000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//5.981880342907971//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.822,
                                    53.5685
                                ],
                                [
                                    38.89,
                                    12.95
                                ],
                                [
                                    38.8499,
                                    13.3059
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
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668391200000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//11.963760685815942//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        37.88764238941732,
                                        14.23679894385005
                                    ],
                                    [
                                        37.88764238941732,
                                        12.371409339737585
                                    ],
                                    [
                                        39.80477659150771,
                                        12.371409339737585
                                    ],
                                    [
                                        39.80477659150771,
                                        14.23679894385005
                                    ],
                                    [
                                        37.88764238941732,
                                        14.23679894385005
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
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668398400000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//17.945641028723912//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.8499,
                                    13.3059
                                ],
                                [
                                    56,
                                    33.41
                                ],
                                [
                                    72.51,
                                    53.87
                                ],
                                [
                                    72.822,
                                    53.5685
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a700",
                    "number": 2
                },
                {
                    "asset": "a702",
                    "number": 2
                },
                {
                    "asset": "a634",
                    "number": 1
                },
                {
                    "asset": "a691",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 3
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
                "roleName": "Threat Network",
                "roleId": "red-threat",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-red"
            },
            "messageType": "Air--TST",
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
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-11-14T01:30:00.000Z",
                            "endDate": "2022-11-14T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668389400000,
                            "endTime": 1668392400000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//6.523009118420305//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.0043,
                                    14.7763
                                ],
                                [
                                    49.17,
                                    25.3
                                ],
                                [
                                    74.65,
                                    36.15
                                ],
                                [
                                    74.9508,
                                    35.7917
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
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392400000,
                            "endTime": 1668402600000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//13.04601823684061//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.03905556251905,
                                        38.77928534883129
                                    ],
                                    [
                                        71.03905556251905,
                                        32.686732824610715
                                    ],
                                    [
                                        78.57364927421702,
                                        32.686732824610715
                                    ],
                                    [
                                        78.57364927421702,
                                        38.77928534883129
                                    ],
                                    [
                                        71.03905556251905,
                                        38.77928534883129
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
                            "startDate": "2022-11-14T05:10:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402600000,
                            "endTime": 1668412200000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//19.569027355260914//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.9508,
                                    35.7917
                                ],
                                [
                                    61.77,
                                    30.73
                                ],
                                [
                                    48.52,
                                    25.6
                                ],
                                [
                                    35.54,
                                    19.75
                                ],
                                [
                                    22.85,
                                    15.18
                                ],
                                [
                                    23.0043,
                                    14.7763
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "a800",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 4
                },
                {
                    "asset": "a697",
                    "number": 3
                },
                {
                    "asset": "a613",
                    "number": 4
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-63",
            "title": "Order item 63",
            "startDate": "2022-11-14T01:50:00.000Z",
            "endDate": "2022-11-14T02:40:00.000Z",
            "location": [
                {
                    "uniqid": "BMD MEZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "BMD MEZ//BMD MEZ Location",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T02:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668390600000,
                            "endTime": 1668393600000,
                            "geomId": "BMD MEZ-0",
                            "name": "f-blue//2.311498381488491//BMD MEZ Location"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                58.5837,
                                3.6449
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-BMD MEZ",
            "ownAssets": [
                {
                    "asset": "a666",
                    "number": 1
                },
                {
                    "asset": "a677",
                    "number": 1
                },
                {
                    "asset": "a618",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_63",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-27T22:57:57.163Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-66",
            "title": "Order item 66",
            "startDate": "2022-11-14T01:50:00.000Z",
            "endDate": "2022-11-14T02:40:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T01:50:00.000Z",
                            "endDate": "2022-11-14T02:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668390600000,
                            "endTime": 1668393600000,
                            "geomId": "Transit-0",
                            "name": "f-red//6.993408813752467//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    49.2129,
                                    23.0955
                                ],
                                [
                                    47.6,
                                    29.99
                                ],
                                [
                                    45.39,
                                    37.28
                                ],
                                [
                                    44.9983,
                                    37.7863
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a784",
                    "number": 0
                },
                {
                    "asset": "a781",
                    "number": 2
                },
                {
                    "asset": "a708",
                    "number": 0
                },
                {
                    "asset": "a760",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 0
                },
                {
                    "asset": "a697",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_66",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Air--Standard",
            "timestamp": "2022-09-24T13:31:36.267Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-69",
            "title": "Order item 69",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T07:40:00.000Z",
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-blue//5.568740415357752//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.4995,
                                    53.8503
                                ],
                                [
                                    43.33,
                                    33.1
                                ],
                                [
                                    54.65,
                                    12.83
                                ],
                                [
                                    55.0009,
                                    12.7474
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668401400000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-blue//11.137480830715504//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        52.49550106952127,
                                        15.153950766143922
                                    ],
                                    [
                                        52.49550106952127,
                                        10.317720113566821
                                    ],
                                    [
                                        57.458896125303845,
                                        10.317720113566821
                                    ],
                                    [
                                        57.458896125303845,
                                        15.153950766143922
                                    ],
                                    [
                                        52.49550106952127,
                                        15.153950766143922
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
                            "startDate": "2022-11-14T04:50:00.000Z",
                            "endDate": "2022-11-14T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668401400000,
                            "endTime": 1668411600000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-blue//16.706221246073255//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.0009,
                                    12.7474
                                ],
                                [
                                    31.18,
                                    53.74
                                ],
                                [
                                    31.4995,
                                    53.8503
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "a660",
                    "number": 3
                },
                {
                    "asset": "a642",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 0
                },
                {
                    "asset": "a797",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_69",
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
            "messageType": "Air--Patrol",
            "timestamp": "2022-09-25T17:49:16.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-72",
            "title": "Order item 72",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T07:30:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//3.0374931863043457//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    68.5769,
                                    33.814
                                ],
                                [
                                    71.03,
                                    25.83
                                ],
                                [
                                    73.68,
                                    17.05
                                ],
                                [
                                    75.62,
                                    8.55
                                ],
                                [
                                    75.973,
                                    8.4843
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//6.0749863726086915//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.46235194648422,
                                        11.90381103241698
                                    ],
                                    [
                                        72.46235194648422,
                                        5.033964925835133
                                    ],
                                    [
                                        79.42137779828161,
                                        5.033964925835133
                                    ],
                                    [
                                        79.42137779828161,
                                        11.90381103241698
                                    ],
                                    [
                                        72.46235194648422,
                                        11.90381103241698
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T07:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668400800000,
                            "endTime": 1668411000000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//9.112479558913037//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.973,
                                    8.4843
                                ],
                                [
                                    73.85,
                                    16.97
                                ],
                                [
                                    70.96,
                                    25.69
                                ],
                                [
                                    68.35,
                                    33.69
                                ],
                                [
                                    68.5769,
                                    33.814
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Patrol",
            "ownAssets": [
                {
                    "asset": "a688",
                    "number": 4
                },
                {
                    "asset": "a655",
                    "number": 2
                },
                {
                    "asset": "a650",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 1
                },
                {
                    "asset": "a797",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_72",
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
            "timestamp": "2022-09-23T03:50:56.847Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-75",
            "title": "Order item 75",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T07:10:00.000Z",
            "location": [
                {
                    "uniqid": "FIAC EZ-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "FIAC EZ//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "FIAC EZ-0",
                            "name": "f-blue//4.399667126592249//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.0783,
                                    47.056
                                ],
                                [
                                    27.91,
                                    31.86
                                ],
                                [
                                    30.8,
                                    17.72
                                ],
                                [
                                    32.97,
                                    2.86
                                ],
                                [
                                    33.4582,
                                    2.3726
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668402000000,
                            "geomId": "FIAC EZ-1",
                            "name": "f-blue//8.799334253184497//FIAC EZ Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        31.840407388515917,
                                        3.985535606741283
                                    ],
                                    [
                                        31.840407388515917,
                                        0.7577795031460034
                                    ],
                                    [
                                        35.07222034959817,
                                        0.7577795031460034
                                    ],
                                    [
                                        35.07222034959817,
                                        3.985535606741283
                                    ],
                                    [
                                        31.840407388515917,
                                        3.985535606741283
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
                            "startDate": "2022-11-14T05:00:00.000Z",
                            "endDate": "2022-11-14T07:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668402000000,
                            "endTime": 1668409800000,
                            "geomId": "FIAC EZ-2",
                            "name": "f-blue//13.199001379776746//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.4582,
                                    2.3726
                                ],
                                [
                                    29.46,
                                    24.66
                                ],
                                [
                                    24.82,
                                    47.3
                                ],
                                [
                                    25.0783,
                                    47.056
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-FIAC EZ",
            "ownAssets": [
                {
                    "asset": "a672",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_75",
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
            "timestamp": "2022-09-25T03:36:38.323Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-78",
            "title": "Order item 78",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T05:40:00.000Z",
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//4.6552622360759415//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    71.4492,
                                    42.0618
                                ],
                                [
                                    69.58,
                                    34.17
                                ],
                                [
                                    67.12,
                                    26.68
                                ],
                                [
                                    67.4342,
                                    26.4767
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T03:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668397800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//9.310524472151883//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        66.44795173342662,
                                        27.349336579983593
                                    ],
                                    [
                                        66.44795173342662,
                                        25.597390903930453
                                    ],
                                    [
                                        68.40554106410318,
                                        25.597390903930453
                                    ],
                                    [
                                        68.40554106410318,
                                        27.349336579983593
                                    ],
                                    [
                                        66.44795173342662,
                                        27.349336579983593
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
                            "startDate": "2022-11-14T03:50:00.000Z",
                            "endDate": "2022-11-14T05:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668397800000,
                            "endTime": 1668404400000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//13.965786708227824//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.4342,
                                    26.4767
                                ],
                                [
                                    69.5,
                                    34.11
                                ],
                                [
                                    71.04,
                                    42.22
                                ],
                                [
                                    71.4492,
                                    42.0618
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "a613",
                    "number": 4
                },
                {
                    "asset": "a648",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 2
                },
                {
                    "asset": "a797",
                    "number": 4
                },
                {
                    "asset": "a713",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_78",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-84",
            "title": "Order item 84",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T03:00:00.000Z",
            "location": [],
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a604",
                    "number": 5,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 5,
                    "missileType": "SRBM"
                },
                {
                    "asset": "a797",
                    "number": 5,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_84",
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
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-84",
            "title": "Order item 84",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T06:20:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Mine Laying-0",
                            "name": "f-red//6.846715963212773//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.9516,
                                    7.4595
                                ],
                                [
                                    37.05,
                                    47.1
                                ],
                                [
                                    36.9159,
                                    46.8123
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T04:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394200000,
                            "endTime": 1668401400000,
                            "geomId": "Mine Laying-1",
                            "name": "f-red//13.693431926425546//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.798496755837874,
                                        49.41920664819457
                                    ],
                                    [
                                        32.798496755837874,
                                        44.071616679200666
                                    ],
                                    [
                                        40.64330973239535,
                                        44.071616679200666
                                    ],
                                    [
                                        40.64330973239535,
                                        49.41920664819457
                                    ],
                                    [
                                        32.798496755837874,
                                        49.41920664819457
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
                            "startDate": "2022-11-14T04:50:00.000Z",
                            "endDate": "2022-11-14T06:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668401400000,
                            "endTime": 1668406800000,
                            "geomId": "Mine Laying-2",
                            "name": "f-red//20.54014788963832//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.9159,
                                    46.8123
                                ],
                                [
                                    35.45,
                                    33.5
                                ],
                                [
                                    34.08,
                                    20.28
                                ],
                                [
                                    32.99,
                                    7.34
                                ],
                                [
                                    32.9516,
                                    7.4595
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a754",
                    "number": 0
                },
                {
                    "asset": "a760",
                    "number": 2
                },
                {
                    "asset": "a794",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 5
                },
                {
                    "asset": "a697",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_84",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-25T05:17:47.494Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-87",
            "title": "Order item 87",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Transit-0",
                            "name": "f-blue//3.782574580574874//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.1654,
                                    46.1869
                                ],
                                [
                                    41.77,
                                    39.08
                                ],
                                [
                                    54.58,
                                    32.18
                                ],
                                [
                                    67.67,
                                    24.55
                                ],
                                [
                                    67.8533,
                                    24.6527
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "a658",
                    "number": 1
                },
                {
                    "asset": "a649",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 1
                },
                {
                    "asset": "a797",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_87",
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-28T19:59:32.132Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-90",
            "title": "Order item 90",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T02:50:00.000Z",
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Sea Denial Area",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//4.611854367132764//Sea Denial Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.49950463656948,
                                        53.585420180993104
                                    ],
                                    [
                                        32.49950463656948,
                                        46.74960764392481
                                    ],
                                    [
                                        43.28328913499943,
                                        46.74960764392481
                                    ],
                                    [
                                        43.28328913499943,
                                        53.585420180993104
                                    ],
                                    [
                                        32.49950463656948,
                                        53.585420180993104
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "a717",
                    "number": 2
                },
                {
                    "asset": "a791",
                    "number": 1
                },
                {
                    "asset": "a796",
                    "number": 2
                },
                {
                    "asset": "a730",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 5
                },
                {
                    "asset": "a697",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_90",
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
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-93",
            "title": "Order item 93",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T04:10:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//4.334555323177483//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.7435,
                                    41.323
                                ],
                                [
                                    69.92,
                                    34.88
                                ],
                                [
                                    53.99,
                                    28.34
                                ],
                                [
                                    38.34,
                                    21.08
                                ],
                                [
                                    22.98,
                                    15.1
                                ],
                                [
                                    23.0043,
                                    14.7763
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668394200000,
                            "endTime": 1668396600000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//8.669110646354966//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.615572432551467,
                                        16.106382707506484
                                    ],
                                    [
                                        21.615572432551467,
                                        13.438018007413955
                                    ],
                                    [
                                        24.376070911651542,
                                        13.438018007413955
                                    ],
                                    [
                                        24.376070911651542,
                                        16.106382707506484
                                    ],
                                    [
                                        21.615572432551467,
                                        16.106382707506484
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T04:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668396600000,
                            "endTime": 1668399000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//13.003665969532449//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    23.0043,
                                    14.7763
                                ],
                                [
                                    38.23,
                                    21.12
                                ],
                                [
                                    54.25,
                                    28.27
                                ],
                                [
                                    69.56,
                                    34.7
                                ],
                                [
                                    86.15,
                                    41.42
                                ],
                                [
                                    85.7435,
                                    41.323
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a630",
                    "number": 0
                },
                {
                    "asset": "a690",
                    "number": 2
                },
                {
                    "asset": "a679",
                    "number": 0
                },
                {
                    "asset": "a696",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_93",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-24T18:35:03.780Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-96",
            "title": "Order item 96",
            "startDate": "2022-11-14T02:00:00.000Z",
            "endDate": "2022-11-14T08:30:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T02:00:00.000Z",
                            "endDate": "2022-11-14T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391200000,
                            "endTime": 1668394200000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//2.9506774487090297//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0112,
                                    13.5969
                                ],
                                [
                                    36.37,
                                    21.22
                                ],
                                [
                                    35.01,
                                    28.12
                                ],
                                [
                                    32.94,
                                    35.31
                                ],
                                [
                                    32.9985,
                                    35.7068
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
                            "startDate": "2022-11-14T02:50:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394200000,
                            "endTime": 1668403200000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//5.901354897418059//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.191887764630966,
                                        37.889748153708005
                                    ],
                                    [
                                        30.191887764630966,
                                        33.46220590418985
                                    ],
                                    [
                                        35.65342247621806,
                                        33.46220590418985
                                    ],
                                    [
                                        35.65342247621806,
                                        37.889748153708005
                                    ],
                                    [
                                        30.191887764630966,
                                        37.889748153708005
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668414600000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//8.85203234612709//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    32.9985,
                                    35.7068
                                ],
                                [
                                    35.34,
                                    24.83
                                ],
                                [
                                    38.11,
                                    13.37
                                ],
                                [
                                    38.0112,
                                    13.5969
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a796",
                    "number": 2
                },
                {
                    "asset": "a744",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 4
                },
                {
                    "asset": "a697",
                    "number": 4
                },
                {
                    "asset": "a613",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_96",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-25T10:28:50.789Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-99",
            "title": "Order item 99",
            "startDate": "2022-11-14T02:10:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T02:10:00.000Z",
                            "endDate": "2022-11-14T03:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668391800000,
                            "endTime": 1668394800000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//5.460220743145328//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.7778,
                                    3.5438
                                ],
                                [
                                    56.97,
                                    14.91
                                ],
                                [
                                    54.15,
                                    26.27
                                ],
                                [
                                    51.62,
                                    37.91
                                ],
                                [
                                    48.36,
                                    48.83
                                ],
                                [
                                    48.8364,
                                    49.2306
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
                            "startDate": "2022-11-14T03:00:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394800000,
                            "endTime": 1668396600000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//10.920441486290656//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.14012265335155,
                                        49.67905937147663
                                    ],
                                    [
                                        48.14012265335155,
                                        48.77803148950044
                                    ],
                                    [
                                        49.52009322077781,
                                        48.77803148950044
                                    ],
                                    [
                                        49.52009322077781,
                                        49.67905937147663
                                    ],
                                    [
                                        48.14012265335155,
                                        49.67905937147663
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668400800000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//16.380662229435984//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.8364,
                                    49.2306
                                ],
                                [
                                    59.94,
                                    3.77
                                ],
                                [
                                    59.7778,
                                    3.5438
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a722",
                    "number": 5
                },
                {
                    "asset": "a752",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_99",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-22T08:06:38.589Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-102",
            "title": "Order item 102",
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.863185207359493//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.5373,
                                    31.6995
                                ],
                                [
                                    63.88,
                                    29.61
                                ],
                                [
                                    68.36,
                                    28.66
                                ],
                                [
                                    73.12,
                                    27
                                ],
                                [
                                    72.667,
                                    26.6252
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T05:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668403800000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//13.726370414718986//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        69.8581094056283,
                                        29.053415722603766
                                    ],
                                    [
                                        69.8581094056283,
                                        24.14413430677566
                                    ],
                                    [
                                        75.35774773035214,
                                        24.14413430677566
                                    ],
                                    [
                                        75.35774773035214,
                                        29.053415722603766
                                    ],
                                    [
                                        69.8581094056283,
                                        29.053415722603766
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
                            "startDate": "2022-11-14T05:30:00.000Z",
                            "endDate": "2022-11-14T06:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668403800000,
                            "endTime": 1668405600000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//20.58955562207848//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        69.75093041602383,
                                        29.14279163537598
                                    ],
                                    [
                                        69.75093041602383,
                                        24.050739199700505
                                    ],
                                    [
                                        75.45594986360383,
                                        24.050739199700505
                                    ],
                                    [
                                        75.45594986360383,
                                        29.14279163537598
                                    ],
                                    [
                                        69.75093041602383,
                                        29.14279163537598
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
                            "startDate": "2022-11-14T06:00:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668405600000,
                            "endTime": 1668412200000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//27.45274082943797//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.667,
                                    26.6252
                                ],
                                [
                                    68.3,
                                    28.01
                                ],
                                [
                                    64.01,
                                    30.47
                                ],
                                [
                                    60,
                                    31.21
                                ],
                                [
                                    59.5373,
                                    31.6995
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a697",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 5
                },
                {
                    "asset": "a797",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_102",
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
            "timestamp": "2022-09-23T19:28:27.180Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-105",
            "title": "Order item 105",
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T05:00:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//2.1595708401873708//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.3478,
                                    42.9467
                                ],
                                [
                                    74.21,
                                    9.21
                                ],
                                [
                                    73.9341,
                                    9.2011
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T03:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668397200000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//4.3191416803747416//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        71.53224634134122,
                                        11.546426866987954
                                    ],
                                    [
                                        71.53224634134122,
                                        6.840092567183567
                                    ],
                                    [
                                        76.30419822514267,
                                        6.840092567183567
                                    ],
                                    [
                                        76.30419822514267,
                                        11.546426866987954
                                    ],
                                    [
                                        71.53224634134122,
                                        11.546426866987954
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
                            "startDate": "2022-11-14T03:40:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668397200000,
                            "endTime": 1668402000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//6.478712520562112//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    73.9341,
                                    9.2011
                                ],
                                [
                                    63.11,
                                    17.41
                                ],
                                [
                                    51.17,
                                    26.49
                                ],
                                [
                                    40.51,
                                    34.86
                                ],
                                [
                                    29.13,
                                    42.51
                                ],
                                [
                                    29.3478,
                                    42.9467
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a632",
                    "number": 1
                },
                {
                    "asset": "a633",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 2
                },
                {
                    "asset": "a797",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_105",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T20:34:16.561Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-108",
            "title": "Order item 108",
            "startDate": "2022-11-14T02:20:00.000Z",
            "endDate": "2022-11-14T04:40:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T02:20:00.000Z",
                            "endDate": "2022-11-14T03:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392400000,
                            "endTime": 1668395400000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.3493776430841535//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    33.2345,
                                    27.7525
                                ],
                                [
                                    45.68,
                                    33.56
                                ],
                                [
                                    57.35,
                                    39.59
                                ],
                                [
                                    69.31,
                                    44.9
                                ],
                                [
                                    69.7206,
                                    44.8111
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
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395400000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//12.698755286168307//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        65.67621787080411,
                                        47.475444938509625
                                    ],
                                    [
                                        65.67621787080411,
                                        42.01681772421646
                                    ],
                                    [
                                        73.3994972525803,
                                        42.01681772421646
                                    ],
                                    [
                                        73.3994972525803,
                                        47.475444938509625
                                    ],
                                    [
                                        65.67621787080411,
                                        47.475444938509625
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1668400800000,
                            "endTime": 1668400800000,
                            "geomId": "Patrol-2",
                            "name": "f-red//19.04813292925246//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.7206,
                                    44.8111
                                ],
                                [
                                    33.11,
                                    27.41
                                ],
                                [
                                    33.2345,
                                    27.7525
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "a720",
                    "number": 0
                },
                {
                    "asset": "a803",
                    "number": 5
                },
                {
                    "asset": "a732",
                    "number": 3
                },
                {
                    "asset": "a761",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 5
                },
                {
                    "asset": "a697",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_108",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-23T19:24:06.733Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-111",
            "title": "Order item 111",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T07:35:00.000Z",
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-blue//4.432605614885688//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.1392,
                                    34.0994
                                ],
                                [
                                    28.05,
                                    32.67
                                ],
                                [
                                    32.1,
                                    30.39
                                ],
                                [
                                    35.45,
                                    28.4
                                ],
                                [
                                    35.6649,
                                    28.3629
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//ASW Area",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395700000,
                            "endTime": 1668399900000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-blue//8.865211229771376//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        32.093456869015704,
                                        31.366656046088895
                                    ],
                                    [
                                        32.093456869015704,
                                        25.271270272322617
                                    ],
                                    [
                                        39.036886163125786,
                                        25.271270272322617
                                    ],
                                    [
                                        39.036886163125786,
                                        31.366656046088895
                                    ],
                                    [
                                        32.093456869015704,
                                        31.366656046088895
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route back",
                            "startDate": "2022-11-14T04:25:00.000Z",
                            "endDate": "2022-11-14T07:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668399900000,
                            "endTime": 1668411300000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-blue//13.297816844657063//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.6649,
                                    28.3629
                                ],
                                [
                                    32.16,
                                    30.58
                                ],
                                [
                                    27.75,
                                    31.9
                                ],
                                [
                                    24.63,
                                    34.51
                                ],
                                [
                                    24.1392,
                                    34.0994
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a661",
                    "number": 3
                },
                {
                    "asset": "a633",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_111",
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
            "messageType": "Other--SOFAttack",
            "timestamp": "2022-09-22T07:57:57.695Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-114",
            "title": "Order item 114",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T09:35:00.000Z",
            "location": [
                {
                    "uniqid": "SOF Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "SOF Activity//Route out",
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "SOF Activity-0",
                            "name": "f-red//6.40925475617405//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    24.9693,
                                    9.5477
                                ],
                                [
                                    69.66,
                                    44.47
                                ],
                                [
                                    69.7206,
                                    44.8111
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
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668399900000,
                            "geomId": "SOF Activity-1",
                            "name": "f-red//12.8185095123481//Activity Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        66.52120990867755,
                                        46.951460270602524
                                    ],
                                    [
                                        66.52120990867755,
                                        42.58788708451458
                                    ],
                                    [
                                        72.6867528006204,
                                        42.58788708451458
                                    ],
                                    [
                                        72.6867528006204,
                                        46.951460270602524
                                    ],
                                    [
                                        66.52120990867755,
                                        46.951460270602524
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
                            "startDate": "2022-11-14T04:25:00.000Z",
                            "endDate": "2022-11-14T06:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668399900000,
                            "endTime": 1668407100000,
                            "geomId": "SOF Activity-2",
                            "name": "f-red//19.22776426852215//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        69.34303570922549,
                                        45.077098680286305
                                    ],
                                    [
                                        69.34303570922549,
                                        44.54386876115399
                                    ],
                                    [
                                        70.09468960035673,
                                        44.54386876115399
                                    ],
                                    [
                                        70.09468960035673,
                                        45.077098680286305
                                    ],
                                    [
                                        69.34303570922549,
                                        45.077098680286305
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
                            "startDate": "2022-11-14T06:25:00.000Z",
                            "endDate": "2022-11-14T09:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1668407100000,
                            "endTime": 1668418500000,
                            "geomId": "SOF Activity-3",
                            "name": "f-red//25.6370190246962//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    69.7206,
                                    44.8111
                                ],
                                [
                                    24.55,
                                    9.35
                                ],
                                [
                                    24.9693,
                                    9.5477
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Other-SOF Activity",
            "ownAssets": [
                {
                    "asset": "a759",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 5
                },
                {
                    "asset": "a697",
                    "number": 3
                },
                {
                    "asset": "a613",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_114",
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
            "messageType": "Maritime--ASWBarrier",
            "timestamp": "2022-09-25T10:15:49.447Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-117",
            "title": "Order item 117",
            "startDate": "2022-11-14T02:25:00.000Z",
            "endDate": "2022-11-14T06:25:00.000Z",
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-11-14T02:25:00.000Z",
                            "endDate": "2022-11-14T03:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668392700000,
                            "endTime": 1668395700000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-red//2.2793250663671643//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    62.5151,
                                    10.959
                                ],
                                [
                                    51.4,
                                    26.02
                                ],
                                [
                                    40.45,
                                    40.25
                                ],
                                [
                                    28.79,
                                    54.76
                                ],
                                [
                                    28.8238,
                                    54.9414
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//ASW Area",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T06:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668405900000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-red//4.5586501327343285//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        25.77288559696616,
                                        56.58438662348292
                                    ],
                                    [
                                        25.77288559696616,
                                        53.22810092312605
                                    ],
                                    [
                                        31.630273498966037,
                                        53.22810092312605
                                    ],
                                    [
                                        31.630273498966037,
                                        56.58438662348292
                                    ],
                                    [
                                        25.77288559696616,
                                        56.58438662348292
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "ASW Barrier-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route back",
                            "startDate": "2022-11-14T06:05:00.000Z",
                            "endDate": "2022-11-14T06:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1668405900000,
                            "endTime": 1668407100000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-red//6.837975199101493//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.8238,
                                    54.9414
                                ],
                                [
                                    62.11,
                                    10.77
                                ],
                                [
                                    62.5151,
                                    10.959
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "a712",
                    "number": 2
                },
                {
                    "asset": "a752",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_117",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-24T18:17:41.991Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-120",
            "title": "Order item 120",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T07:50:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//2.0428165460471064//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.3746,
                                    32.2711
                                ],
                                [
                                    72.99,
                                    26.87
                                ],
                                [
                                    72.667,
                                    26.6252
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T05:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668396600000,
                            "endTime": 1668405000000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//4.085633092094213//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        68.30173097157348,
                                        30.32772565519243
                                    ],
                                    [
                                        68.30173097157348,
                                        22.797923165521834
                                    ],
                                    [
                                        76.75370173025024,
                                        22.797923165521834
                                    ],
                                    [
                                        76.75370173025024,
                                        30.32772565519243
                                    ],
                                    [
                                        68.30173097157348,
                                        30.32772565519243
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
                            "startDate": "2022-11-14T05:50:00.000Z",
                            "endDate": "2022-11-14T07:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668405000000,
                            "endTime": 1668409200000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//6.128449638141319//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        69.91053730494636,
                                        29.009608850125215
                                    ],
                                    [
                                        69.91053730494636,
                                        24.189855799922533
                                    ],
                                    [
                                        75.30959651753516,
                                        24.189855799922533
                                    ],
                                    [
                                        75.30959651753516,
                                        29.009608850125215
                                    ],
                                    [
                                        69.91053730494636,
                                        29.009608850125215
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
                            "startDate": "2022-11-14T07:00:00.000Z",
                            "endDate": "2022-11-14T07:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668409200000,
                            "endTime": 1668412200000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//8.171266184188426//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    72.667,
                                    26.6252
                                ],
                                [
                                    49.22,
                                    29.2
                                ],
                                [
                                    25.23,
                                    32.22
                                ],
                                [
                                    25.3746,
                                    32.2711
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "a619",
                    "number": 3
                },
                {
                    "asset": "a644",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 0
                },
                {
                    "asset": "a797",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_120",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T16:03:35.324Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-123",
            "title": "Order item 123",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T05:20:00.000Z",
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.699729195213877//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.9216,
                                    9.5473
                                ],
                                [
                                    40.24,
                                    29.53
                                ],
                                [
                                    48.99,
                                    48.94
                                ],
                                [
                                    48.8364,
                                    49.2306
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668403200000,
                            "geomId": "Patrol-1",
                            "name": "f-red//11.399458390427753//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.45656818644868,
                                        52.91055378012093
                                    ],
                                    [
                                        42.45656818644868,
                                        45.249211254291474
                                    ],
                                    [
                                        54.298289402014056,
                                        45.249211254291474
                                    ],
                                    [
                                        54.298289402014056,
                                        52.91055378012093
                                    ],
                                    [
                                        42.45656818644868,
                                        52.91055378012093
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668403200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//17.09918758564163//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.8364,
                                    49.2306
                                ],
                                [
                                    31.78,
                                    9.05
                                ],
                                [
                                    31.9216,
                                    9.5473
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "a779",
                    "number": 5
                },
                {
                    "asset": "a789",
                    "number": 5
                },
                {
                    "asset": "a730",
                    "number": 1
                },
                {
                    "asset": "a795",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 1
                },
                {
                    "asset": "a697",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_123",
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-28T19:33:29.449Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-126",
            "title": "Order item 126",
            "startDate": "2022-11-14T02:40:00.000Z",
            "endDate": "2022-11-14T08:10:00.000Z",
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-11-14T02:40:00.000Z",
                            "endDate": "2022-11-14T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668393600000,
                            "endTime": 1668396600000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.250063013867475//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    66.9267,
                                    24.8049
                                ],
                                [
                                    70.69,
                                    31.87
                                ],
                                [
                                    70.4904,
                                    31.4444
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
                            "startDate": "2022-11-14T03:30:00.000Z",
                            "endDate": "2022-11-14T03:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1668396600000,
                            "endTime": 1668397800000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//6.50012602773495//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        66.13434139331731,
                                        34.94311191840032
                                    ],
                                    [
                                        66.13434139331731,
                                        27.809068055561376
                                    ],
                                    [
                                        74.52684775054193,
                                        27.809068055561376
                                    ],
                                    [
                                        74.52684775054193,
                                        34.94311191840032
                                    ],
                                    [
                                        66.13434139331731,
                                        34.94311191840032
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
                            "startDate": "2022-11-14T03:50:00.000Z",
                            "endDate": "2022-11-14T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668397800000,
                            "endTime": 1668402000000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//9.750189041602425//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        69.22054311092509,
                                        32.509061679138334
                                    ],
                                    [
                                        69.22054311092509,
                                        30.367495212009747
                                    ],
                                    [
                                        71.73156114866546,
                                        30.367495212009747
                                    ],
                                    [
                                        71.73156114866546,
                                        32.509061679138334
                                    ],
                                    [
                                        69.22054311092509,
                                        32.509061679138334
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
                            "startDate": "2022-11-14T05:00:00.000Z",
                            "endDate": "2022-11-14T08:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402000000,
                            "endTime": 1668413400000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//13.0002520554699//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.4904,
                                    31.4444
                                ],
                                [
                                    69.77,
                                    29.77
                                ],
                                [
                                    68.9,
                                    27.94
                                ],
                                [
                                    67.32,
                                    26.39
                                ],
                                [
                                    67.01,
                                    25.12
                                ],
                                [
                                    66.9267,
                                    24.8049
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "a795",
                    "number": 3
                },
                {
                    "asset": "a791",
                    "number": 3
                },
                {
                    "asset": "a717",
                    "number": 1
                },
                {
                    "asset": "a768",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 0
                },
                {
                    "asset": "a697",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_126",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-25T04:47:24.363Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-129",
            "title": "Order item 129",
            "startDate": "2022-11-14T02:55:00.000Z",
            "endDate": "2022-11-14T05:15:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T02:55:00.000Z",
                            "endDate": "2022-11-14T03:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1668394500000,
                            "endTime": 1668397500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//4.693818001425825//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.5672,
                                    8.2204
                                ],
                                [
                                    45.67,
                                    31.08
                                ],
                                [
                                    31.12,
                                    54.27
                                ],
                                [
                                    30.7256,
                                    54.63
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
                            "startDate": "2022-11-14T03:45:00.000Z",
                            "endDate": "2022-11-14T05:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668397500000,
                            "endTime": 1668402300000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//9.38763600285165//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        23.525179852146874,
                                        58.220449342999906
                                    ],
                                    [
                                        23.525179852146874,
                                        50.683642011304684
                                    ],
                                    [
                                        36.70572949137685,
                                        50.683642011304684
                                    ],
                                    [
                                        36.70572949137685,
                                        58.220449342999906
                                    ],
                                    [
                                        23.525179852146874,
                                        58.220449342999906
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
                            "startDate": "2022-11-14T05:05:00.000Z",
                            "endDate": "2022-11-14T05:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1668402300000,
                            "endTime": 1668402900000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//14.081454004277475//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.7256,
                                    54.63
                                ],
                                [
                                    38.74,
                                    42.76
                                ],
                                [
                                    45.66,
                                    31.8
                                ],
                                [
                                    53.87,
                                    20.11
                                ],
                                [
                                    61.36,
                                    7.72
                                ],
                                [
                                    61.5672,
                                    8.2204
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a768",
                    "number": 0
                },
                {
                    "asset": "a749",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 3
                },
                {
                    "asset": "a697",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_129",
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
            "messageType": "Air--Standard",
            "timestamp": "2022-09-26T03:45:20.069Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-132",
            "title": "Order item 132",
            "startDate": "2022-11-14T03:10:00.000Z",
            "endDate": "2022-11-14T05:20:00.000Z",
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668395400000,
                            "endTime": 1668398400000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//5.030994158471003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.7453,
                                    46.4207
                                ],
                                [
                                    36.59,
                                    11.48
                                ],
                                [
                                    36.7528,
                                    11.8916
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
                            "startDate": "2022-11-14T04:00:00.000Z",
                            "endDate": "2022-11-14T04:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668398400000,
                            "endTime": 1668400800000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//10.061988316942006//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        36.22392955887329,
                                        12.407626401098618
                                    ],
                                    [
                                        36.22392955887329,
                                        11.374592984637669
                                    ],
                                    [
                                        37.279666246133964,
                                        11.374592984637669
                                    ],
                                    [
                                        37.279666246133964,
                                        12.407626401098618
                                    ],
                                    [
                                        36.22392955887329,
                                        12.407626401098618
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
                            "startDate": "2022-11-14T04:40:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1668400800000,
                            "endTime": 1668403200000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//15.09298247541301//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.7528,
                                    11.8916
                                ],
                                [
                                    40.33,
                                    20.67
                                ],
                                [
                                    43.85,
                                    29.38
                                ],
                                [
                                    47.65,
                                    37.38
                                ],
                                [
                                    51.73,
                                    46.66
                                ],
                                [
                                    51.7453,
                                    46.4207
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "a694",
                    "number": 3
                },
                {
                    "asset": "a660",
                    "number": 5
                },
                {
                    "asset": "a654",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_132",
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
            "messageType": "Maritime--MineLaying",
            "timestamp": "2022-09-23T08:27:16.565Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-135",
            "title": "Order item 135",
            "startDate": "2022-11-14T03:10:00.000Z",
            "endDate": "2022-11-14T07:30:00.000Z",
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-11-14T03:10:00.000Z",
                            "endDate": "2022-11-14T04:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395400000,
                            "endTime": 1668398400000,
                            "geomId": "Mine Laying-0",
                            "name": "f-red//4.261591484420933//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.9486,
                                    19.1206
                                ],
                                [
                                    44.47,
                                    24.45
                                ],
                                [
                                    56.04,
                                    28.84
                                ],
                                [
                                    68.89,
                                    33.5
                                ],
                                [
                                    68.5769,
                                    33.814
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
                            "startDate": "2022-11-14T04:00:00.000Z",
                            "endDate": "2022-11-14T05:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1668398400000,
                            "endTime": 1668403200000,
                            "geomId": "Mine Laying-1",
                            "name": "f-red//8.523182968841866//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        67.58021302472564,
                                        34.630128348476525
                                    ],
                                    [
                                        67.58021302472564,
                                        32.990007300813936
                                    ],
                                    [
                                        69.55465836095085,
                                        32.990007300813936
                                    ],
                                    [
                                        69.55465836095085,
                                        34.630128348476525
                                    ],
                                    [
                                        67.58021302472564,
                                        34.630128348476525
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
                            "startDate": "2022-11-14T05:20:00.000Z",
                            "endDate": "2022-11-14T07:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1668403200000,
                            "endTime": 1668411000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-red//12.784774453262798//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    68.5769,
                                    33.814
                                ],
                                [
                                    50.65,
                                    26.19
                                ],
                                [
                                    32.09,
                                    18.93
                                ],
                                [
                                    31.9486,
                                    19.1206
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "a776",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 3
                },
                {
                    "asset": "a697",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_135",
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
            "messageType": "Maritime--Standard",
            "timestamp": "2022-09-25T02:53:13.851Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-138",
            "title": "Order item 138",
            "startDate": "2022-11-14T03:15:00.000Z",
            "endDate": "2022-11-14T04:05:00.000Z",
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Sea Denial Area",
                            "startDate": "2022-11-14T03:15:00.000Z",
                            "endDate": "2022-11-14T04:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1668395700000,
                            "endTime": 1668398700000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//2.3856099798576906//Sea Denial Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.34983328914701,
                                        51.7607438284882
                                    ],
                                    [
                                        46.34983328914701,
                                        49.78026398961271
                                    ],
                                    [
                                        49.484193148458125,
                                        49.78026398961271
                                    ],
                                    [
                                        49.484193148458125,
                                        51.7607438284882
                                    ],
                                    [
                                        46.34983328914701,
                                        51.7607438284882
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ],
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "a714",
                    "number": 5
                },
                {
                    "asset": "a748",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "a616",
                    "number": 1
                },
                {
                    "asset": "a697",
                    "number": 2
                },
                {
                    "asset": "a613",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_138",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#3dd0ff",
                "roleName": "MTG 1",
                "roleId": "blue-mtg-1",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-blue"
            },
            "messageType": "Land--MissileStrike",
            "timestamp": "2022-09-25T06:20:57.752Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-143",
            "title": "Order item 143",
            "startDate": "2022-11-14T03:35:00.000Z",
            "endDate": "2022-11-14T06:45:00.000Z",
            "location": [],
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "a702",
                    "number": 0,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "a716",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_143",
        "_rev": "2"
    }]