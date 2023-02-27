import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessagesBulk: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-2",
            "title": "Order item 6",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T04:35:00.000Z",
            "activity": "f-blue-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "Blue.1.64",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Defensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Defensive Counter Air-0",
                            "name": "f-blue//3.105222334795144//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    0.7937,
                                    46.7283
                                ],
                                [
                                    39.92,
                                    36.36
                                ],
                                [
                                    79.42,
                                    25.37
                                ],
                                [
                                    79.1354,
                                    25.6948
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Defensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//DCA Area",
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651373700000,
                            "geomId": "Defensive Counter Air-1",
                            "name": "f-blue//6.210444669590288//DCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        78.42051721021559,
                                        26.333759612706096
                                    ],
                                    [
                                        78.42051721021559,
                                        25.05239274819244
                                    ],
                                    [
                                        79.84263126653113,
                                        25.05239274819244
                                    ],
                                    [
                                        79.84263126653113,
                                        26.333759612706096
                                    ],
                                    [
                                        78.42051721021559,
                                        26.333759612706096
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Defensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route back",
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T04:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373700000,
                            "endTime": 1651379700000,
                            "geomId": "Defensive Counter Air-2",
                            "name": "f-blue//9.315667004385432//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.1354,
                                    25.6948
                                ],
                                [
                                    52.76,
                                    32.33
                                ],
                                [
                                    26.63,
                                    40.21
                                ],
                                [
                                    0.78,
                                    46.37
                                ],
                                [
                                    0.7937,
                                    46.7283
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_2",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-5",
            "title": "Order item 9",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T04:55:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.8.372",
                    "number": 3
                },
                {
                    "asset": "Green.9.301",
                    "number": 2
                },
                {
                    "asset": "Green.2.344",
                    "number": 3
                },
                {
                    "asset": "Green.3.100",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//3.8121305503746044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.9288,
                                    11.076
                                ],
                                [
                                    55,
                                    25.73
                                ],
                                [
                                    52.98,
                                    41.3
                                ],
                                [
                                    52.24,
                                    56.14
                                ],
                                [
                                    50.79,
                                    70.27
                                ],
                                [
                                    50.9972,
                                    70.7758
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651366500000,
                            "endTime": 1651374900000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//7.624261100749209//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.88987483440687,
                                        73.60622903447535
                                    ],
                                    [
                                        39.88987483440687,
                                        67.44904663148094
                                    ],
                                    [
                                        59.147900000710116,
                                        67.44904663148094
                                    ],
                                    [
                                        59.147900000710116,
                                        73.60622903447535
                                    ],
                                    [
                                        39.88987483440687,
                                        73.60622903447535
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T04:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651374900000,
                            "endTime": 1651380900000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//11.436391651123813//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.9972,
                                    70.7758
                                ],
                                [
                                    52.65,
                                    50.51
                                ],
                                [
                                    54.4,
                                    31.35
                                ],
                                [
                                    55.44,
                                    11.47
                                ],
                                [
                                    55.9288,
                                    11.076
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_5",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-8",
            "title": "Order item 12",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T03:15:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.5.100",
                    "number": 2
                },
                {
                    "asset": "Blue.12.369",
                    "number": 5
                },
                {
                    "asset": "Blue.9.351",
                    "number": 0
                },
                {
                    "asset": "Blue.2.46",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Raid-0",
                            "name": "f-blue//3.412459935258994//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.1256,
                                    43.883
                                ],
                                [
                                    27.92,
                                    40.05
                                ],
                                [
                                    7.81,
                                    35.31
                                ],
                                [
                                    -12.02,
                                    31.86
                                ],
                                [
                                    -11.5232,
                                    31.4121
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T02:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651373700000,
                            "geomId": "Raid-1",
                            "name": "f-blue//6.824919870517988//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -11.814165501416811,
                                        31.659436811572302
                                    ],
                                    [
                                        -11.814165501416811,
                                        31.16410939969229
                                    ],
                                    [
                                        -11.233766607907233,
                                        31.16410939969229
                                    ],
                                    [
                                        -11.233766607907233,
                                        31.659436811572302
                                    ],
                                    [
                                        -11.814165501416811,
                                        31.659436811572302
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373700000,
                            "endTime": 1651374900000,
                            "geomId": "Raid-2",
                            "name": "f-blue//10.237379805776982//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -11.5232,
                                    31.4121
                                ],
                                [
                                    18.03,
                                    37.5
                                ],
                                [
                                    46.97,
                                    43.97
                                ],
                                [
                                    47.1256,
                                    43.883
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_8",
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
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-11",
            "title": "Order item 15",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T05:35:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "Red.3.46",
                    "number": 3
                },
                {
                    "asset": "Red.2.255",
                    "number": 4
                },
                {
                    "asset": "Red.8.177",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//6.906210489443765//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.9716,
                                    38.8136
                                ],
                                [
                                    75.74,
                                    24.64
                                ],
                                [
                                    31.82,
                                    9.78
                                ],
                                [
                                    31.6133,
                                    9.8944
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T03:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651366500000,
                            "endTime": 1651374300000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//13.81242097888753//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.82447747887043,
                                        13.55655288159408
                                    ],
                                    [
                                        27.82447747887043,
                                        6.190788854011897
                                    ],
                                    [
                                        35.31804933841015,
                                        6.190788854011897
                                    ],
                                    [
                                        35.31804933841015,
                                        13.55655288159408
                                    ],
                                    [
                                        27.82447747887043,
                                        13.55655288159408
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
                            "startDate": "2022-05-01T03:05:00.000Z",
                            "endDate": "2022-05-01T05:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374300000,
                            "endTime": 1651383300000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//20.718631468331296//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.6133,
                                    9.8944
                                ],
                                [
                                    61.55,
                                    19.82
                                ],
                                [
                                    90.52,
                                    28.79
                                ],
                                [
                                    119.78,
                                    39.04
                                ],
                                [
                                    119.9716,
                                    38.8136
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_11",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-29T01:45:19.005Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-14",
            "title": "Order item 18",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.7.213",
                    "number": 4
                },
                {
                    "asset": "Blue.6.362",
                    "number": 5
                },
                {
                    "asset": "Blue.6.223",
                    "number": 0
                },
                {
                    "asset": "Blue.8.199",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//4.293382212938013//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        20.844302107062255,
                                        16.488564458329883
                                    ],
                                    [
                                        20.844302107062255,
                                        12.757964862401938
                                    ],
                                    [
                                        24.702303201543984,
                                        12.757964862401938
                                    ],
                                    [
                                        24.702303201543984,
                                        16.488564458329883
                                    ],
                                    [
                                        20.844302107062255,
                                        16.488564458329883
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_14",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-17",
            "title": "Order item 21",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T06:55:00.000Z",
            "activity": "f-blue-Air-Offensive Counter Air",
            "ownAssets": [
                {
                    "asset": "Blue.8.199",
                    "number": 3
                },
                {
                    "asset": "Blue.3.287",
                    "number": 2
                },
                {
                    "asset": "Blue.8.89",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Offensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Offensive Counter Air//Route out",
                            "startDate": "2022-05-01T00:05:00.000Z",
                            "endDate": "2022-05-01T00:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651363500000,
                            "endTime": 1651366500000,
                            "geomId": "Offensive Counter Air-0",
                            "name": "f-blue//5.573975105719001//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    5.2312,
                                    50.857
                                ],
                                [
                                    1.73,
                                    43.2
                                ],
                                [
                                    -1.7,
                                    35.6
                                ],
                                [
                                    -4.86,
                                    28.29
                                ],
                                [
                                    -4.6034,
                                    28.0284
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
                            "startDate": "2022-05-01T00:55:00.000Z",
                            "endDate": "2022-05-01T04:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651366500000,
                            "endTime": 1651377900000,
                            "geomId": "Offensive Counter Air-1",
                            "name": "f-blue//11.147950211438001//OCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -5.545851540666061,
                                        28.850675518332423
                                    ],
                                    [
                                        -5.545851540666061,
                                        27.199792041740952
                                    ],
                                    [
                                        -3.675294728298656,
                                        27.199792041740952
                                    ],
                                    [
                                        -3.675294728298656,
                                        28.850675518332423
                                    ],
                                    [
                                        -5.545851540666061,
                                        28.850675518332423
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
                            "startDate": "2022-05-01T04:05:00.000Z",
                            "endDate": "2022-05-01T06:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651377900000,
                            "endTime": 1651388100000,
                            "geomId": "Offensive Counter Air-2",
                            "name": "f-blue//16.721925317157//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -4.6034,
                                    28.0284
                                ],
                                [
                                    4.87,
                                    50.89
                                ],
                                [
                                    5.2312,
                                    50.857
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_17",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-20",
            "title": "Order item 24",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T00:55:00.000Z",
            "activity": "f-red-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.9.4",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_20",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Maritime--MissileStrike",
            "timestamp": "2022-09-28T13:19:15.896Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-23",
            "title": "Order item 32",
            "startDate": "2022-05-01T00:05:00.000Z",
            "endDate": "2022-05-01T02:05:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.2.29",
                    "number": 3,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.10.397",
                    "number": 5,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.5.78",
                    "number": 1,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.1.273",
                    "number": 4,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 2
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_23",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-26",
            "title": "Order item 30",
            "startDate": "2022-05-01T00:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.1.273",
                    "number": 5
                },
                {
                    "asset": "Green.5.181",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T00:10:00.000Z",
                            "endDate": "2022-05-01T01:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651363800000,
                            "endTime": 1651366800000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//2.7762807999097276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    2.0734,
                                    22.1834
                                ],
                                [
                                    45.99,
                                    15.17
                                ],
                                [
                                    90.19,
                                    7.43
                                ],
                                [
                                    133.68,
                                    -0.02
                                ],
                                [
                                    133.7336,
                                    0.3536
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T01:00:00.000Z",
                            "endDate": "2022-05-01T01:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651366800000,
                            "endTime": 1651369800000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//5.552561599819455//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        131.36615668104054,
                                        2.7180766181540648
                                    ],
                                    [
                                        131.36615668104054,
                                        -2.0114799164369797
                                    ],
                                    [
                                        136.09983721413923,
                                        -2.0114799164369797
                                    ],
                                    [
                                        136.09983721413923,
                                        2.7180766181540648
                                    ],
                                    [
                                        131.36615668104054,
                                        2.7180766181540648
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651369800000,
                            "endTime": 1651377600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//8.328842399729183//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.7336,
                                    0.3536
                                ],
                                [
                                    101.18,
                                    5.71
                                ],
                                [
                                    67.42,
                                    10.86
                                ],
                                [
                                    34.95,
                                    16.3
                                ],
                                [
                                    1.76,
                                    22.02
                                ],
                                [
                                    2.0734,
                                    22.1834
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_26",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-29",
            "title": "Order item 33",
            "startDate": "2022-05-01T00:30:00.000Z",
            "endDate": "2022-05-01T01:20:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.6.337",
                    "number": 1
                },
                {
                    "asset": "Green.7.184",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T00:30:00.000Z",
                            "endDate": "2022-05-01T01:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651365000000,
                            "endTime": 1651368000000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.630558369892242//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    12.44,
                                    37.53
                                ],
                                [
                                    30.98,
                                    47.69
                                ],
                                [
                                    48.8,
                                    58.14
                                ],
                                [
                                    48.8429,
                                    58.3229
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_29",
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
            "messageType": "f-blue--Maritime--MissileStrike",
            "timestamp": "2022-09-27T14:16:38.039Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-32",
            "title": "Order item 40",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T02:05:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Blue.2.220",
                    "number": 4,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78",
                    "missileType": "IRBM",
                    "number": 1
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "Standard Cruise",
                    "number": 0
                },
                {
                    "asset": "Red.10.50",
                    "missileType": "SRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_32",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-35",
            "title": "Order item 39",
            "startDate": "2022-05-01T00:45:00.000Z",
            "endDate": "2022-05-01T01:35:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.6.322",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T00:45:00.000Z",
                            "endDate": "2022-05-01T01:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651365900000,
                            "endTime": 1651368900000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.019377017772058//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    -5.78,
                                    39.95
                                ],
                                [
                                    -6.41,
                                    53.58
                                ],
                                [
                                    -6.75,
                                    66.51
                                ],
                                [
                                    -6.9159,
                                    66.9968
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_35",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-38",
            "title": "Order item 42",
            "startDate": "2022-05-01T00:50:00.000Z",
            "endDate": "2022-05-01T04:30:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.11.245",
                    "number": 4
                },
                {
                    "asset": "Green.6.312",
                    "number": 2
                },
                {
                    "asset": "Green.12.92",
                    "number": 4
                },
                {
                    "asset": "Green.7.386",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T00:50:00.000Z",
                            "endDate": "2022-05-01T01:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651366200000,
                            "endTime": 1651369200000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//3.55391809566936//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    3.1085,
                                    18.7529
                                ],
                                [
                                    -2.24,
                                    25.86
                                ],
                                [
                                    -6.34,
                                    33.23
                                ],
                                [
                                    -12.16,
                                    40.87
                                ],
                                [
                                    -11.7083,
                                    40.797
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T01:40:00.000Z",
                            "endDate": "2022-05-01T02:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651369200000,
                            "endTime": 1651372200000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//7.10783619133872//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -15.560971823106454,
                                        43.52792700227566
                                    ],
                                    [
                                        -15.560971823106454,
                                        37.94820704861075
                                    ],
                                    [
                                        -8.166418872921666,
                                        37.94820704861075
                                    ],
                                    [
                                        -8.166418872921666,
                                        43.52792700227566
                                    ],
                                    [
                                        -15.560971823106454,
                                        43.52792700227566
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T02:30:00.000Z",
                            "endDate": "2022-05-01T04:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651372200000,
                            "endTime": 1651379400000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//10.66175428700808//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -11.7083,
                                    40.797
                                ],
                                [
                                    -4.3,
                                    29.64
                                ],
                                [
                                    3.59,
                                    18.98
                                ],
                                [
                                    3.1085,
                                    18.7529
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_38",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-41",
            "title": "Order item 45",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.1.386",
                    "number": 3
                },
                {
                    "asset": "Blue.6.393",
                    "number": 3
                },
                {
                    "asset": "Blue.9.113",
                    "number": 3
                },
                {
                    "asset": "Blue.8.347",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Raid-0",
                            "name": "f-blue//5.981880342907971//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.7042,
                                    62.6482
                                ],
                                [
                                    -3.9,
                                    -5.7
                                ],
                                [
                                    -3.9466,
                                    -5.35
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651370400000,
                            "geomId": "Raid-1",
                            "name": "f-blue//11.963760685815942//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -4.882079870424977,
                                        -4.41658826080645
                                    ],
                                    [
                                        -4.882079870424977,
                                        -6.281989524699421
                                    ],
                                    [
                                        -3.008263449507522,
                                        -6.281989524699421
                                    ],
                                    [
                                        -3.008263449507522,
                                        -4.41658826080645
                                    ],
                                    [
                                        -4.882079870424977,
                                        -4.41658826080645
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651377600000,
                            "geomId": "Raid-2",
                            "name": "f-blue//17.945641028723912//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -3.9466,
                                    -5.35
                                ],
                                [
                                    16.55,
                                    28.62
                                ],
                                [
                                    36.39,
                                    62.95
                                ],
                                [
                                    36.7042,
                                    62.6482
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_41",
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-44",
            "title": "Order item 48",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T02:00:00.000Z",
            "activity": "f-red-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Red.2.347",
                    "number": 3
                },
                {
                    "asset": "Red.9.294",
                    "number": 0
                },
                {
                    "asset": "Red.9.354",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Transit-0",
                            "name": "f-red//2.303263759415131//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.9716,
                                    38.8136
                                ],
                                [
                                    96.48,
                                    32.45
                                ],
                                [
                                    72.84,
                                    26.94
                                ],
                                [
                                    48.49,
                                    20.72
                                ],
                                [
                                    24.42,
                                    13.78
                                ],
                                [
                                    24.7211,
                                    14.1009
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_44",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-47",
            "title": "Order item 51",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T05:10:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.1.128",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Activity-0",
                            "name": "f-red//2.5180683452636003//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    109.5434,
                                    63.8207
                                ],
                                [
                                    79.01,
                                    54.86
                                ],
                                [
                                    49.32,
                                    44.75
                                ],
                                [
                                    18.92,
                                    35.92
                                ],
                                [
                                    -12.19,
                                    26.37
                                ],
                                [
                                    -11.8485,
                                    26.6128
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Effect Location",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651375800000,
                            "geomId": "Activity-1",
                            "name": "f-red//5.036136690527201//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -14.888402055756588,
                                        29.233678619414196
                                    ],
                                    [
                                        -14.888402055756588,
                                        23.930252228437347
                                    ],
                                    [
                                        -8.94642201383412,
                                        23.930252228437347
                                    ],
                                    [
                                        -8.94642201383412,
                                        29.233678619414196
                                    ],
                                    [
                                        -14.888402055756588,
                                        29.233678619414196
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route back",
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T05:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651381800000,
                            "geomId": "Activity-2",
                            "name": "f-red//7.554205035790801//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -11.8485,
                                    26.6128
                                ],
                                [
                                    49.26,
                                    44.99
                                ],
                                [
                                    109.71,
                                    63.69
                                ],
                                [
                                    109.5434,
                                    63.8207
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_47",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-50",
            "title": "Order item 54",
            "startDate": "2022-05-01T01:10:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.1.128",
                    "number": 3
                },
                {
                    "asset": "Red.9.354",
                    "number": 5
                },
                {
                    "asset": "Red.9.294",
                    "number": 5
                },
                {
                    "asset": "Red.2.347",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T01:10:00.000Z",
                            "endDate": "2022-05-01T02:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651367400000,
                            "endTime": 1651370400000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//6.6262941003078595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.0181,
                                    53.5159
                                ],
                                [
                                    48.37,
                                    49.17
                                ],
                                [
                                    14.99,
                                    45.08
                                ],
                                [
                                    -20.11,
                                    41.27
                                ],
                                [
                                    -19.6567,
                                    41.2039
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
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T04:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651378800000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//13.252588200615719//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -24.0535617343461,
                                        44.27108868595785
                                    ],
                                    [
                                        -24.0535617343461,
                                        37.98470414180903
                                    ],
                                    [
                                        -15.662904120740851,
                                        37.98470414180903
                                    ],
                                    [
                                        -15.662904120740851,
                                        44.27108868595785
                                    ],
                                    [
                                        -24.0535617343461,
                                        44.27108868595785
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
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651378800000,
                            "endTime": 1651380000000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//19.87888230092358//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -19.6567,
                                    41.2039
                                ],
                                [
                                    31.46,
                                    47.55
                                ],
                                [
                                    83.02,
                                    53.33
                                ],
                                [
                                    83.0181,
                                    53.5159
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_50",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-53",
            "title": "Order item 57",
            "startDate": "2022-05-01T01:20:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.2.347",
                    "number": 2
                },
                {
                    "asset": "Green.5.113",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T01:20:00.000Z",
                            "endDate": "2022-05-01T02:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651368000000,
                            "endTime": 1651371000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.627941024693428//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -0.7267,
                                    19.325
                                ],
                                [
                                    44.93,
                                    34.8
                                ],
                                [
                                    89.78,
                                    50.48
                                ],
                                [
                                    134.92,
                                    65.43
                                ],
                                [
                                    134.7621,
                                    65.8743
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T02:10:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651371000000,
                            "endTime": 1651381200000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.255882049386855//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.1823862467912,
                                        68.47993462407712
                                    ],
                                    [
                                        127.1823862467912,
                                        62.96565074778134
                                    ],
                                    [
                                        140.8731099848347,
                                        62.96565074778134
                                    ],
                                    [
                                        140.8731099848347,
                                        68.47993462407712
                                    ],
                                    [
                                        127.1823862467912,
                                        68.47993462407712
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651381200000,
                            "endTime": 1651381200000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//13.883823074080283//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.7621,
                                    65.8743
                                ],
                                [
                                    67.11,
                                    42.35
                                ],
                                [
                                    -1.02,
                                    19.33
                                ],
                                [
                                    -0.7267,
                                    19.325
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_53",
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-23T11:02:41.326Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-56",
            "title": "Order item 60",
            "startDate": "2022-05-01T01:30:00.000Z",
            "endDate": "2022-05-01T02:20:00.000Z",
            "activity": "f-red-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.1.386",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T01:30:00.000Z",
                            "endDate": "2022-05-01T02:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651368600000,
                            "endTime": 1651371600000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//6.523009118420305//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -6.790091207623584,
                                        57.04691862363707
                                    ],
                                    [
                                        -6.790091207623584,
                                        53.116218035142424
                                    ],
                                    [
                                        0.10876112888669928,
                                        53.116218035142424
                                    ],
                                    [
                                        0.10876112888669928,
                                        57.04691862363707
                                    ],
                                    [
                                        -6.790091207623584,
                                        57.04691862363707
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_56",
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
            "messageType": "Maritime--EWAttack",
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-59",
            "title": "Order item 63",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-red-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "Red.12.244",
                    "number": 2
                },
                {
                    "asset": "Red.2.290",
                    "number": 2
                },
                {
                    "asset": "Red.10.50",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T02:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//2.311498381488491//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.9716,
                                    38.8136
                                ],
                                [
                                    61.01,
                                    49.51
                                ],
                                [
                                    1.4,
                                    60.57
                                ],
                                [
                                    1.7498,
                                    60.2232
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
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651372800000,
                            "endTime": 1651374000000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//4.622996762976982//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -6.927921254642883,
                                        63.79183053167006
                                    ],
                                    [
                                        -6.927921254642883,
                                        56.202976461043356
                                    ],
                                    [
                                        8.629643483140496,
                                        56.202976461043356
                                    ],
                                    [
                                        8.629643483140496,
                                        63.79183053167006
                                    ],
                                    [
                                        -6.927921254642883,
                                        63.79183053167006
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
                            "startDate": "2022-05-01T03:00:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374000000,
                            "endTime": 1651380600000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//6.9344951444654725//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    60.85,
                                    49.7
                                ],
                                [
                                    120.29,
                                    38.52
                                ],
                                [
                                    119.9716,
                                    38.8136
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_59",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-27T22:57:57.163Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-62",
            "title": "Order item 66",
            "startDate": "2022-05-01T01:50:00.000Z",
            "endDate": "2022-05-01T06:00:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.6.322",
                    "number": 4
                },
                {
                    "asset": "Green.9.308",
                    "number": 2
                },
                {
                    "asset": "Green.3.7",
                    "number": 1
                },
                {
                    "asset": "Green.4.219",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T01:50:00.000Z",
                            "endDate": "2022-05-01T02:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651369800000,
                            "endTime": 1651372800000,
                            "geomId": "Raid-0",
                            "name": "f-green//6.993408813752467//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    9.2476,
                                    2.466
                                ],
                                [
                                    59.89,
                                    32.69
                                ],
                                [
                                    109.93,
                                    63.32
                                ],
                                [
                                    109.5434,
                                    63.8207
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651372800000,
                            "endTime": 1651380600000,
                            "geomId": "Raid-1",
                            "name": "f-green//13.986817627504934//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        107.15749531131662,
                                        64.81672816949133
                                    ],
                                    [
                                        107.15749531131662,
                                        62.78805063703224
                                    ],
                                    [
                                        111.76346543851375,
                                        62.78805063703224
                                    ],
                                    [
                                        111.76346543851375,
                                        64.81672816949133
                                    ],
                                    [
                                        107.15749531131662,
                                        64.81672816949133
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T04:50:00.000Z",
                            "endDate": "2022-05-01T06:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651380600000,
                            "endTime": 1651384800000,
                            "geomId": "Raid-2",
                            "name": "f-green//20.9802264412574//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    109.5434,
                                    63.8207
                                ],
                                [
                                    8.77,
                                    2.58
                                ],
                                [
                                    9.2476,
                                    2.466
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_62",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-24T13:31:36.267Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-65",
            "title": "Order item 69",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:40:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.5.219",
                    "number": 5
                },
                {
                    "asset": "Blue.3.145",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//5.568740415357752//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.0923,
                                    59.4373
                                ],
                                [
                                    26.34,
                                    41.97
                                ],
                                [
                                    7.07,
                                    24.99
                                ],
                                [
                                    7.4215,
                                    24.9094
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651380600000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//11.137480830715504//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        4.699865081083769,
                                        27.303416450439148
                                    ],
                                    [
                                        4.699865081083769,
                                        22.467895644441736
                                    ],
                                    [
                                        10.038494740036175,
                                        22.467895644441736
                                    ],
                                    [
                                        10.038494740036175,
                                        27.303416450439148
                                    ],
                                    [
                                        4.699865081083769,
                                        27.303416450439148
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
                            "startDate": "2022-05-01T04:50:00.000Z",
                            "endDate": "2022-05-01T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651380600000,
                            "endTime": 1651390800000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//16.706221246073255//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    7.4215,
                                    24.9094
                                ],
                                [
                                    44.77,
                                    59.32
                                ],
                                [
                                    45.0923,
                                    59.4373
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_65",
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-25T17:49:16.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-68",
            "title": "Order item 72",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.8.336",
                    "number": 1
                },
                {
                    "asset": "Blue.10.202",
                    "number": 2
                },
                {
                    "asset": "Blue.11.180",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//3.0374931863043457//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.85,
                                    44.3012
                                ],
                                [
                                    61.93,
                                    41.22
                                ],
                                [
                                    75.22,
                                    37.34
                                ],
                                [
                                    87.78,
                                    33.74
                                ],
                                [
                                    88.1337,
                                    33.6791
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_68",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-23T03:50:56.847Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-71",
            "title": "Order item 75",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T07:10:00.000Z",
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "Blue.3.272",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//4.399667126592249//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    17.0504,
                                    61.1013
                                ],
                                [
                                    15.07,
                                    45.17
                                ],
                                [
                                    13.14,
                                    30.29
                                ],
                                [
                                    10.5,
                                    14.7
                                ],
                                [
                                    10.9857,
                                    14.2125
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
                            "startDate": "2022-05-01T02:50:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651373400000,
                            "endTime": 1651381200000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//8.799334253184497//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        9.308262624271137,
                                        15.820576922635418
                                    ],
                                    [
                                        9.308262624271137,
                                        12.592900822343115
                                    ],
                                    [
                                        12.639370870675782,
                                        12.592900822343115
                                    ],
                                    [
                                        12.639370870675782,
                                        15.820576922635418
                                    ],
                                    [
                                        9.308262624271137,
                                        15.820576922635418
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T07:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381200000,
                            "endTime": 1651389000000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//13.199001379776746//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    10.9857,
                                    14.2125
                                ],
                                [
                                    14.21,
                                    37.6
                                ],
                                [
                                    16.8,
                                    61.35
                                ],
                                [
                                    17.0504,
                                    61.1013
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_71",
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
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-25T03:36:38.323Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-74",
            "title": "Order item 78",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Red.3.28",
                    "number": 2
                },
                {
                    "asset": "Red.4.173",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-red//4.6552622360759415//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    104.7962,
                                    25.857
                                ],
                                [
                                    53.98,
                                    42.01
                                ],
                                [
                                    2.56,
                                    58.57
                                ],
                                [
                                    2.8761,
                                    58.3634
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_74",
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
            "messageType": "f-blue--Land--MissileStrike",
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-77",
            "title": "Order item 84",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T03:00:00.000Z",
            "activity": "f-blue-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Blue.4.3",
                    "number": 4,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78",
                    "missileType": "SRBM",
                    "number": 0
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "SRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_77",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-22T11:47:23.831Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-80",
            "title": "Order item 89",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T04:20:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.3.198",
                    "number": 0,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.10.223",
                    "number": 4,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Green.2.361",
                    "number": 4,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 4
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Jet OWA UAV",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_80",
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
            "Reference": "Blue-83",
            "title": "Order item 87",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.6.212",
                    "number": 5
                },
                {
                    "asset": "Blue.11.177",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//3.782574580574874//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.2441,
                                    41.1434
                                ],
                                [
                                    37.31,
                                    33.95
                                ],
                                [
                                    45.58,
                                    26.96
                                ],
                                [
                                    54.13,
                                    19.25
                                ],
                                [
                                    54.3212,
                                    19.3529
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_83",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-28T19:59:32.132Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-86",
            "title": "Order item 90",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.3.46",
                    "number": 5
                },
                {
                    "asset": "Green.5.350",
                    "number": 0
                },
                {
                    "asset": "Green.5.368",
                    "number": 1
                },
                {
                    "asset": "Green.2.99",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.611854367132764//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    31.2229,
                                    -7.5057
                                ],
                                [
                                    35.75,
                                    5.3
                                ],
                                [
                                    40.21,
                                    18.04
                                ],
                                [
                                    43.96,
                                    31.07
                                ],
                                [
                                    48.99,
                                    44.38
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_86",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-89",
            "title": "Order item 93",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "Red.9.99",
                    "number": 1
                },
                {
                    "asset": "Red.9.343",
                    "number": 3
                },
                {
                    "asset": "Red.1.300",
                    "number": 3
                },
                {
                    "asset": "Red.12.371",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Area",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//4.334555323177483//Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.67020756819433,
                                        18.11083491872493
                                    ],
                                    [
                                        39.67020756819433,
                                        10.941293218040272
                                    ],
                                    [
                                        47.09431373550757,
                                        10.941293218040272
                                    ],
                                    [
                                        47.09431373550757,
                                        18.11083491872493
                                    ],
                                    [
                                        39.67020756819433,
                                        18.11083491872493
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_89",
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-24T18:35:03.780Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-92",
            "title": "Order item 96",
            "startDate": "2022-05-01T02:00:00.000Z",
            "endDate": "2022-05-01T02:50:00.000Z",
            "activity": "f-red-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.12.371",
                    "number": 2
                },
                {
                    "asset": "Red.8.155",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T02:00:00.000Z",
                            "endDate": "2022-05-01T02:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651370400000,
                            "endTime": 1651373400000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//2.9506774487090297//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        33.959529012036796,
                                        17.72207009194913
                                    ],
                                    [
                                        33.959529012036796,
                                        13.511056185668503
                                    ],
                                    [
                                        38.33567843705156,
                                        13.511056185668503
                                    ],
                                    [
                                        38.33567843705156,
                                        17.72207009194913
                                    ],
                                    [
                                        33.959529012036796,
                                        17.72207009194913
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_92",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-25T10:28:50.789Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-95",
            "title": "Order item 99",
            "startDate": "2022-05-01T02:10:00.000Z",
            "endDate": "2022-05-01T03:00:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.10.63",
                    "number": 0
                },
                {
                    "asset": "Green.5.187",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:10:00.000Z",
                            "endDate": "2022-05-01T03:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651371000000,
                            "endTime": 1651374000000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.460220743145328//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.6203,
                                    12.5113
                                ],
                                [
                                    44.1,
                                    23.91
                                ],
                                [
                                    45.58,
                                    35.3
                                ],
                                [
                                    47.33,
                                    46.97
                                ],
                                [
                                    48.37,
                                    57.92
                                ],
                                [
                                    48.8429,
                                    58.3229
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_95",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-22T08:06:38.589Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-98",
            "title": "Order item 102",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T06:00:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.1.375",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:20:00.000Z",
                            "endDate": "2022-05-01T03:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651371600000,
                            "endTime": 1651374600000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.863185207359493//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    105.8945,
                                    40.488
                                ],
                                [
                                    71.03,
                                    41.11
                                ],
                                [
                                    36.3,
                                    42.88
                                ],
                                [
                                    1.86,
                                    43.92
                                ],
                                [
                                    1.4099,
                                    43.5471
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
                            "startDate": "2022-05-01T03:10:00.000Z",
                            "endDate": "2022-05-01T05:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374600000,
                            "endTime": 1651383000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//13.726370414718986//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -2.1224857261560137,
                                        45.95011835346093
                                    ],
                                    [
                                        -2.1224857261560137,
                                        41.04378419465139
                                    ],
                                    [
                                        4.666002573849215,
                                        41.04378419465139
                                    ],
                                    [
                                        4.666002573849215,
                                        45.95011835346093
                                    ],
                                    [
                                        -2.1224857261560137,
                                        45.95011835346093
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
                            "startDate": "2022-05-01T05:30:00.000Z",
                            "endDate": "2022-05-01T06:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651383000000,
                            "endTime": 1651384800000,
                            "geomId": "Patrol-2",
                            "name": "f-red//20.58955562207848//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.4099,
                                    43.5471
                                ],
                                [
                                    35.9,
                                    42.37
                                ],
                                [
                                    71.56,
                                    41.37
                                ],
                                [
                                    105.5,
                                    40.65
                                ],
                                [
                                    105.8945,
                                    40.488
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_98",
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
            "messageType": "f-red--Maritime--MissileStrike",
            "timestamp": "2022-09-26T05:49:16.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-101",
            "title": "Order item 110",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T03:10:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Red.10.105",
                    "number": 2,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.12.109",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 4
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "MRBM",
                    "number": 1
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "Standard Cruise",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_101",
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
            "Reference": "Red-104",
            "title": "Order item 108",
            "startDate": "2022-05-01T02:20:00.000Z",
            "endDate": "2022-05-01T04:40:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.7.56",
                    "number": 5
                },
                {
                    "asset": "Red.6.399",
                    "number": 0
                },
                {
                    "asset": "Red.10.105",
                    "number": 4
                },
                {
                    "asset": "Red.7.226",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:20:00.000Z",
                            "endDate": "2022-05-01T03:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651371600000,
                            "endTime": 1651374600000,
                            "geomId": "Patrol-0",
                            "name": "f-red//6.3493776430841535//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.6338,
                                    13.4044
                                ],
                                [
                                    53.78,
                                    21.23
                                ],
                                [
                                    39.15,
                                    29.28
                                ],
                                [
                                    24.8,
                                    36.61
                                ],
                                [
                                    25.216,
                                    36.5262
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
                            "startDate": "2022-05-01T03:10:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651374600000,
                            "endTime": 1651380000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//12.698755286168307//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        21.688768059805213,
                                        39.208477169196904
                                    ],
                                    [
                                        21.688768059805213,
                                        33.74711769707752
                                    ],
                                    [
                                        28.502662187399547,
                                        33.74711769707752
                                    ],
                                    [
                                        28.502662187399547,
                                        39.208477169196904
                                    ],
                                    [
                                        21.688768059805213,
                                        39.208477169196904
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
                            "startDate": "2022-05-01T04:40:00.000Z",
                            "endDate": "2022-05-01T04:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651380000000,
                            "endTime": 1651380000000,
                            "geomId": "Patrol-2",
                            "name": "f-red//19.04813292925246//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.216,
                                    36.5262
                                ],
                                [
                                    67.51,
                                    13.06
                                ],
                                [
                                    67.6338,
                                    13.4044
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_104",
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
            "messageType": "Maritime--EWAttack",
            "timestamp": "2022-09-23T19:24:06.733Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-107",
            "title": "Order item 111",
            "startDate": "2022-05-01T02:25:00.000Z",
            "endDate": "2022-05-01T07:35:00.000Z",
            "activity": "f-blue-Maritime-EW Attack",
            "ownAssets": [
                {
                    "asset": "Blue.5.226",
                    "number": 1
                },
                {
                    "asset": "Blue.10.109",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T02:25:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651371900000,
                            "endTime": 1651374900000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//4.432605614885688//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    52.9675,
                                    33.8959
                                ],
                                [
                                    42.88,
                                    29.88
                                ],
                                [
                                    32.94,
                                    25.02
                                ],
                                [
                                    22.29,
                                    20.44
                                ],
                                [
                                    22.5078,
                                    20.4081
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
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374900000,
                            "endTime": 1651379100000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//8.865211229771376//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        19.184658054743238,
                                        23.426185317644453
                                    ],
                                    [
                                        19.184658054743238,
                                        17.329474205832557
                                    ],
                                    [
                                        25.701881905602335,
                                        17.329474205832557
                                    ],
                                    [
                                        25.701881905602335,
                                        23.426185317644453
                                    ],
                                    [
                                        19.184658054743238,
                                        23.426185317644453
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
                            "startDate": "2022-05-01T04:25:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651379100000,
                            "endTime": 1651390500000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//13.297816844657063//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.5078,
                                    20.4081
                                ],
                                [
                                    32.99,
                                    25.21
                                ],
                                [
                                    42.58,
                                    29.12
                                ],
                                [
                                    53.46,
                                    34.31
                                ],
                                [
                                    52.9675,
                                    33.8959
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_107",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-22T07:57:57.695Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-110",
            "title": "Order item 114",
            "startDate": "2022-05-01T02:25:00.000Z",
            "endDate": "2022-05-01T03:15:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.215",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:25:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651371900000,
                            "endTime": 1651374900000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.40925475617405//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.1757,
                                    29.9436
                                ],
                                [
                                    25.16,
                                    36.18
                                ],
                                [
                                    25.216,
                                    36.5262
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_110",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-25T10:15:49.447Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-113",
            "title": "Order item 117",
            "startDate": "2022-05-01T02:25:00.000Z",
            "endDate": "2022-05-01T06:25:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.7.24",
                    "number": 1
                },
                {
                    "asset": "Green.5.187",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T02:25:00.000Z",
                            "endDate": "2022-05-01T03:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651371900000,
                            "endTime": 1651374900000,
                            "geomId": "Raid-0",
                            "name": "f-green//2.2793250663671643//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    7.4215,
                                    24.9094
                                ],
                                [
                                    23.05,
                                    40.44
                                ],
                                [
                                    38.85,
                                    55.13
                                ],
                                [
                                    53.93,
                                    70.11
                                ],
                                [
                                    53.9672,
                                    70.2835
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T06:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651374900000,
                            "endTime": 1651385100000,
                            "geomId": "Raid-1",
                            "name": "f-green//4.5586501327343285//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.556987591572636,
                                        71.88838439584568
                                    ],
                                    [
                                        48.556987591572636,
                                        68.54043003287214
                                    ],
                                    [
                                        58.56251607072975,
                                        68.54043003287214
                                    ],
                                    [
                                        58.56251607072975,
                                        71.88838439584568
                                    ],
                                    [
                                        48.556987591572636,
                                        71.88838439584568
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T06:05:00.000Z",
                            "endDate": "2022-05-01T06:25:00.000Z",
                            "force": "f-green",
                            "startTime": 1651385100000,
                            "endTime": 1651386300000,
                            "geomId": "Raid-2",
                            "name": "f-green//6.837975199101493//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.9672,
                                    70.2835
                                ],
                                [
                                    7.01,
                                    24.72
                                ],
                                [
                                    7.4215,
                                    24.9094
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_113",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T18:17:41.991Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-116",
            "title": "Order item 120",
            "startDate": "2022-05-01T02:40:00.000Z",
            "endDate": "2022-05-01T07:00:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.7.52",
                    "number": 1
                },
                {
                    "asset": "Blue.8.155",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651372800000,
                            "endTime": 1651375800000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//2.0428165460471064//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    37.5437,
                                    36.2633
                                ],
                                [
                                    132.19,
                                    42.59
                                ],
                                [
                                    131.8716,
                                    42.3472
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T05:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651375800000,
                            "endTime": 1651384200000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//4.085633092094213//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        126.4452632206987,
                                        45.993741262437304
                                    ],
                                    [
                                        126.4452632206987,
                                        38.47342464693466
                                    ],
                                    [
                                        136.68535773438134,
                                        38.47342464693466
                                    ],
                                    [
                                        136.68535773438134,
                                        45.993741262437304
                                    ],
                                    [
                                        126.4452632206987,
                                        45.993741262437304
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
                            "startDate": "2022-05-01T05:50:00.000Z",
                            "endDate": "2022-05-01T07:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651384200000,
                            "endTime": 1651388400000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//6.128449638141319//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.8716,
                                    42.3472
                                ],
                                [
                                    100.7,
                                    40.49
                                ],
                                [
                                    68.73,
                                    37.84
                                ],
                                [
                                    37.04,
                                    36.47
                                ],
                                [
                                    37.5437,
                                    36.2633
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_116",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-28T16:03:35.324Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-119",
            "title": "Order item 123",
            "startDate": "2022-05-01T02:40:00.000Z",
            "endDate": "2022-05-01T03:30:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.7.300",
                    "number": 3
                },
                {
                    "asset": "Green.10.342",
                    "number": 3
                },
                {
                    "asset": "Green.5.98",
                    "number": 3
                },
                {
                    "asset": "Green.10.367",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651372800000,
                            "endTime": 1651375800000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.699729195213877//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    39.6806,
                                    -0.6765
                                ],
                                [
                                    40.99,
                                    17.34
                                ],
                                [
                                    42.72,
                                    34.79
                                ],
                                [
                                    42.5642,
                                    35.0817
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_119",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T19:33:29.449Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-122",
            "title": "Order item 126",
            "startDate": "2022-05-01T02:40:00.000Z",
            "endDate": "2022-05-01T05:00:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.9.367",
                    "number": 3
                },
                {
                    "asset": "Red.9.349",
                    "number": 1
                },
                {
                    "asset": "Red.4.45",
                    "number": 5
                },
                {
                    "asset": "Red.10.253",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T02:40:00.000Z",
                            "endDate": "2022-05-01T03:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651372800000,
                            "endTime": 1651375800000,
                            "geomId": "Patrol-0",
                            "name": "f-red//3.250063013867475//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4258,
                                    -9.9971
                                ],
                                [
                                    -7.14,
                                    25.5
                                ],
                                [
                                    -7.3539,
                                    25.067
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
                            "startDate": "2022-05-01T03:30:00.000Z",
                            "endDate": "2022-05-01T03:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651375800000,
                            "endTime": 1651377000000,
                            "geomId": "Patrol-1",
                            "name": "f-red//6.50012602773495//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -11.419728729828329,
                                        28.58287215804598
                                    ],
                                    [
                                        -11.419728729828329,
                                        21.44666947698239
                                    ],
                                    [
                                        -3.5183390719781777,
                                        21.44666947698239
                                    ],
                                    [
                                        -3.5183390719781777,
                                        28.58287215804598
                                    ],
                                    [
                                        -11.419728729828329,
                                        28.58287215804598
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
                            "startDate": "2022-05-01T03:50:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651377000000,
                            "endTime": 1651381200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//9.750189041602425//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -7.3539,
                                    25.067
                                ],
                                [
                                    120.37,
                                    -10.2
                                ],
                                [
                                    120.4258,
                                    -9.9971
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_122",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-25T04:47:24.363Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-125",
            "title": "Order item 129",
            "startDate": "2022-05-01T02:55:00.000Z",
            "endDate": "2022-05-01T03:45:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.5.253",
                    "number": 4
                },
                {
                    "asset": "Green.11.176",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T02:55:00.000Z",
                            "endDate": "2022-05-01T03:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651373700000,
                            "endTime": 1651376700000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.693818001425825//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -3.9466,
                                    -5.35
                                ],
                                [
                                    50.16,
                                    7.48
                                ],
                                [
                                    105.6,
                                    20.65
                                ],
                                [
                                    105.205,
                                    21.0042
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_125",
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-26T03:45:20.069Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-128",
            "title": "Order item 132",
            "startDate": "2022-05-01T03:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-blue-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.9.360",
                    "number": 0
                },
                {
                    "asset": "Blue.5.222",
                    "number": 1
                },
                {
                    "asset": "Blue.9.197",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T03:10:00.000Z",
                            "endDate": "2022-05-01T04:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651374600000,
                            "endTime": 1651377600000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.030994158471003//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        119.32952961145035,
                                        39.308649522492935
                                    ],
                                    [
                                        119.32952961145035,
                                        38.31508506723307
                                    ],
                                    [
                                        120.60477596690791,
                                        38.31508506723307
                                    ],
                                    [
                                        120.60477596690791,
                                        39.308649522492935
                                    ],
                                    [
                                        119.32952961145035,
                                        39.308649522492935
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_128",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-22T02:18:19.789Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-131",
            "title": "Order item 139",
            "startDate": "2022-05-01T03:10:00.000Z",
            "endDate": "2022-05-01T04:00:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.7.285",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 4
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Low Obs Cruise",
                    "number": 0
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "MRBM",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_131",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-25T02:53:13.851Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-134",
            "title": "Order item 138",
            "startDate": "2022-05-01T03:15:00.000Z",
            "endDate": "2022-05-01T04:05:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.30",
                    "number": 3
                },
                {
                    "asset": "Green.4.172",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T03:15:00.000Z",
                            "endDate": "2022-05-01T04:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651374900000,
                            "endTime": 1651377900000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.3856099798576906//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.1701,
                                    15.6274
                                ],
                                [
                                    29.18,
                                    62.47
                                ],
                                [
                                    28.7673,
                                    62.1983
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_134",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-23T03:03:11.928Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-137",
            "title": "Order item 141",
            "startDate": "2022-05-01T03:35:00.000Z",
            "endDate": "2022-05-01T04:25:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.10.395",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T03:35:00.000Z",
                            "endDate": "2022-05-01T04:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651376100000,
                            "endTime": 1651379100000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.403049644781277//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    0.7937,
                                    46.7283
                                ],
                                [
                                    44.08,
                                    23.63
                                ],
                                [
                                    87.67,
                                    -0.16
                                ],
                                [
                                    87.3514,
                                    0.0352
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_137",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-21T15:31:37.331Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-140",
            "title": "Order item 149",
            "startDate": "2022-05-01T03:35:00.000Z",
            "endDate": "2022-05-01T04:55:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.8.179",
                    "number": 3,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.9.200",
                    "number": 4,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 2
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Standard Cruise",
                    "number": 0
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "Propellor OWA UAV",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_140",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T12:35:10.453Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-143",
            "title": "Order item 147",
            "startDate": "2022-05-01T03:40:00.000Z",
            "endDate": "2022-05-01T07:20:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.5.182",
                    "number": 2
                },
                {
                    "asset": "Green.2.143",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T03:40:00.000Z",
                            "endDate": "2022-05-01T04:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651376400000,
                            "endTime": 1651379400000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.118192482506856//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    18.8238,
                                    23.9297
                                ],
                                [
                                    -7.3,
                                    66.72
                                ],
                                [
                                    -6.9159,
                                    66.9968
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
                            "startDate": "2022-05-01T04:30:00.000Z",
                            "endDate": "2022-05-01T05:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651379400000,
                            "endTime": 1651381200000,
                            "geomId": "Patrol-1",
                            "name": "f-green//10.236384965013713//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -15.300834733934716,
                                        69.70077915675301
                                    ],
                                    [
                                        -15.300834733934716,
                                        63.94265108076771
                                    ],
                                    [
                                        -0.3026644873221972,
                                        63.94265108076771
                                    ],
                                    [
                                        -0.3026644873221972,
                                        69.70077915675301
                                    ],
                                    [
                                        -15.300834733934716,
                                        69.70077915675301
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
                            "startDate": "2022-05-01T05:00:00.000Z",
                            "endDate": "2022-05-01T07:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651381200000,
                            "endTime": 1651389600000,
                            "geomId": "Patrol-2",
                            "name": "f-green//15.354577447520569//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -6.9159,
                                    66.9968
                                ],
                                [
                                    -0.56,
                                    56.14
                                ],
                                [
                                    5.8,
                                    45.29
                                ],
                                [
                                    12.44,
                                    34.73
                                ],
                                [
                                    18.37,
                                    23.45
                                ],
                                [
                                    18.8238,
                                    23.9297
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_143",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-27T21:57:10.902Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-146",
            "title": "Order item 150",
            "startDate": "2022-05-01T04:00:00.000Z",
            "endDate": "2022-05-01T04:50:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.5",
                    "number": 5
                },
                {
                    "asset": "Green.2.306",
                    "number": 2
                },
                {
                    "asset": "Green.4.320",
                    "number": 3
                },
                {
                    "asset": "Green.9.47",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T04:00:00.000Z",
                            "endDate": "2022-05-01T04:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651377600000,
                            "endTime": 1651380600000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.8158956558909267//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.9288,
                                    11.076
                                ],
                                [
                                    50.72,
                                    70.74
                                ],
                                [
                                    50.9972,
                                    70.7758
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_146",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-27T13:03:12.141Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-149",
            "title": "Order item 153",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T06:25:00.000Z",
            "activity": "f-blue-Maritime-Mine Laying",
            "ownAssets": [
                {
                    "asset": "Blue.7.47",
                    "number": 0
                },
                {
                    "asset": "Blue.5.288",
                    "number": 2
                },
                {
                    "asset": "Blue.7.242",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Laying-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Laying//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Mine Laying-0",
                            "name": "f-blue//6.407019997015595//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.85,
                                    44.3012
                                ],
                                [
                                    48.23,
                                    35.75
                                ],
                                [
                                    47.48,
                                    27.06
                                ],
                                [
                                    47,
                                    18.65
                                ],
                                [
                                    45.81,
                                    9.53
                                ],
                                [
                                    46.0988,
                                    9.8518
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T05:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651384500000,
                            "geomId": "Mine Laying-1",
                            "name": "f-blue//12.81403999403119//Mine Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.45935153441363,
                                        12.419275892256158
                                    ],
                                    [
                                        43.45935153441363,
                                        7.264147317852601
                                    ],
                                    [
                                        48.697313551872504,
                                        7.264147317852601
                                    ],
                                    [
                                        48.697313551872504,
                                        12.419275892256158
                                    ],
                                    [
                                        43.45935153441363,
                                        12.419275892256158
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
                            "startDate": "2022-05-01T05:55:00.000Z",
                            "endDate": "2022-05-01T06:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651384500000,
                            "endTime": 1651386300000,
                            "geomId": "Mine Laying-2",
                            "name": "f-blue//19.221059991046786//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.0988,
                                    9.8518
                                ],
                                [
                                    47.21,
                                    27.18
                                ],
                                [
                                    48.83,
                                    44.01
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_149",
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
            "messageType": "Air--TST",
            "timestamp": "2022-09-23T09:53:14.170Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-152",
            "title": "Order item 156",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T07:55:00.000Z",
            "activity": "f-blue-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "Blue.10.309",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-blue//2.891565509373322//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -2.1916,
                                    64.5367
                                ],
                                [
                                    2.01,
                                    1.42
                                ],
                                [
                                    1.6071,
                                    1.1691
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T05:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651383900000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-blue//5.783131018746644//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -2.277364895618787,
                                        5.0358664160573445
                                    ],
                                    [
                                        -2.277364895618787,
                                        -2.7030217278082596
                                    ],
                                    [
                                        5.480864323798855,
                                        -2.7030217278082596
                                    ],
                                    [
                                        5.480864323798855,
                                        5.0358664160573445
                                    ],
                                    [
                                        -2.277364895618787,
                                        5.0358664160573445
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
                            "startDate": "2022-05-01T05:45:00.000Z",
                            "endDate": "2022-05-01T07:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651383900000,
                            "endTime": 1651391700000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-blue//8.674696528119966//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.6071,
                                    1.1691
                                ],
                                [
                                    0.2,
                                    22.09
                                ],
                                [
                                    -1.11,
                                    43.11
                                ],
                                [
                                    -2.14,
                                    64.42
                                ],
                                [
                                    -2.1916,
                                    64.5367
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_152",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-23T20:27:16.990Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-155",
            "title": "Order item 159",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T08:05:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.1.391",
                    "number": 5
                },
                {
                    "asset": "Blue.4.111",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//3.269532189471647//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.5642,
                                    35.0817
                                ],
                                [
                                    66.2,
                                    29.65
                                ],
                                [
                                    90.87,
                                    24.25
                                ],
                                [
                                    114.82,
                                    18.13
                                ],
                                [
                                    138.05,
                                    12.29
                                ],
                                [
                                    138.5403,
                                    12.7479
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651381500000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//6.539064378943294//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.5827432340505,
                                        13.67658783586171
                                    ],
                                    [
                                        137.5827432340505,
                                        11.815793190256842
                                    ],
                                    [
                                        139.49084653908756,
                                        11.815793190256842
                                    ],
                                    [
                                        139.49084653908756,
                                        13.67658783586171
                                    ],
                                    [
                                        137.5827432340505,
                                        13.67658783586171
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
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651381500000,
                            "endTime": 1651392300000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//9.808596568414941//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5403,
                                    12.7479
                                ],
                                [
                                    114.84,
                                    18.1
                                ],
                                [
                                    91.03,
                                    24.35
                                ],
                                [
                                    66.51,
                                    29.88
                                ],
                                [
                                    42.27,
                                    34.69
                                ],
                                [
                                    42.5642,
                                    35.0817
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_155",
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
            "timestamp": "2022-09-28T20:45:20.601Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-158",
            "title": "Order item 162",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T05:05:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.10.291",
                    "number": 0
                },
                {
                    "asset": "Blue.1.352",
                    "number": 2
                },
                {
                    "asset": "Blue.12.125",
                    "number": 2
                },
                {
                    "asset": "Blue.2.12",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Transit-0",
                            "name": "f-blue//2.540920039638877//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -3.6974,
                                    56.9915
                                ],
                                [
                                    127.83,
                                    55.22
                                ],
                                [
                                    127.6631,
                                    54.8626
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_158",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-21T18:47:25.002Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-161",
            "title": "Order item 165",
            "startDate": "2022-05-01T04:15:00.000Z",
            "endDate": "2022-05-01T08:35:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.6.12",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T04:15:00.000Z",
                            "endDate": "2022-05-01T05:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651378500000,
                            "endTime": 1651381500000,
                            "geomId": "Raid-0",
                            "name": "f-green//5.705729058710858//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    107.99,
                                    63.69
                                ],
                                [
                                    108.4613,
                                    63.4804
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T05:05:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651381500000,
                            "endTime": 1651392300000,
                            "geomId": "Raid-1",
                            "name": "f-green//11.411458117421716//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        106.65698686677688,
                                        64.25304110689304
                                    ],
                                    [
                                        106.65698686677688,
                                        62.68626227912504
                                    ],
                                    [
                                        110.16938335109876,
                                        62.68626227912504
                                    ],
                                    [
                                        110.16938335109876,
                                        64.25304110689304
                                    ],
                                    [
                                        106.65698686677688,
                                        64.25304110689304
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T08:05:00.000Z",
                            "endDate": "2022-05-01T08:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392300000,
                            "endTime": 1651394100000,
                            "geomId": "Raid-2",
                            "name": "f-green//17.117187176132575//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    108.4613,
                                    63.4804
                                ],
                                [
                                    79.85,
                                    54.29
                                ],
                                [
                                    51.14,
                                    45
                                ],
                                [
                                    22.73,
                                    36
                                ],
                                [
                                    -6.4,
                                    26.28
                                ],
                                [
                                    -5.9347,
                                    26.5316
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_161",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-27T14:33:30.194Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-164",
            "title": "Order item 168",
            "startDate": "2022-05-01T04:20:00.000Z",
            "endDate": "2022-05-01T05:10:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.351",
                    "number": 4
                },
                {
                    "asset": "Green.9.291",
                    "number": 5
                },
                {
                    "asset": "Green.2.344",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T04:20:00.000Z",
                            "endDate": "2022-05-01T05:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651378800000,
                            "endTime": 1651381800000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.7639592478517443//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.1369,
                                    -1.056
                                ],
                                [
                                    52.59,
                                    13.96
                                ],
                                [
                                    51.25,
                                    29.17
                                ],
                                [
                                    49.19,
                                    44.67
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_164",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T16:03:36.176Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-167",
            "title": "Order item 171",
            "startDate": "2022-05-01T04:40:00.000Z",
            "endDate": "2022-05-01T07:10:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.12.111",
                    "number": 0
                },
                {
                    "asset": "Green.3.390",
                    "number": 1
                },
                {
                    "asset": "Green.7.383",
                    "number": 0
                },
                {
                    "asset": "Green.11.89",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T04:40:00.000Z",
                            "endDate": "2022-05-01T05:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651380000000,
                            "endTime": 1651383000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//3.715610605897382//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    8.3372,
                                    11.3141
                                ],
                                [
                                    78.53,
                                    37.41
                                ],
                                [
                                    78.6237,
                                    37.8206
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T05:30:00.000Z",
                            "endDate": "2022-05-01T05:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651383000000,
                            "endTime": 1651383000000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//7.431221211794764//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        74.17536829531441,
                                        41.09176831373278
                                    ],
                                    [
                                        74.17536829531441,
                                        34.39657635759673
                                    ],
                                    [
                                        82.68595747722287,
                                        34.39657635759673
                                    ],
                                    [
                                        82.68595747722287,
                                        41.09176831373278
                                    ],
                                    [
                                        74.17536829531441,
                                        41.09176831373278
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T05:30:00.000Z",
                            "endDate": "2022-05-01T07:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651383000000,
                            "endTime": 1651389000000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//11.146831817692146//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.6237,
                                    37.8206
                                ],
                                [
                                    43.58,
                                    24.33
                                ],
                                [
                                    8.03,
                                    11.33
                                ],
                                [
                                    8.3372,
                                    11.3141
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_167",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T23:17:42.948Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-170",
            "title": "Order item 174",
            "startDate": "2022-05-01T04:55:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.8.89",
                    "number": 4
                },
                {
                    "asset": "Blue.10.309",
                    "number": 0
                },
                {
                    "asset": "Blue.4.241",
                    "number": 0
                },
                {
                    "asset": "Blue.3.287",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T04:55:00.000Z",
                            "endDate": "2022-05-01T05:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651380900000,
                            "endTime": 1651383900000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//3.560683132847771//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -3.1709,
                                    55.1302
                                ],
                                [
                                    11.58,
                                    39.92
                                ],
                                [
                                    27.22,
                                    23.61
                                ],
                                [
                                    42.15,
                                    8.59
                                ],
                                [
                                    57.37,
                                    -7.14
                                ],
                                [
                                    57.4913,
                                    -7.5691
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
                            "startDate": "2022-05-01T05:45:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651383900000,
                            "endTime": 1651390500000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//7.121366265695542//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        55.85735704569108,
                                        -5.940881541256462
                                    ],
                                    [
                                        55.85735704569108,
                                        -9.191188525842358
                                    ],
                                    [
                                        59.137607961380326,
                                        -9.191188525842358
                                    ],
                                    [
                                        59.137607961380326,
                                        -5.940881541256462
                                    ],
                                    [
                                        55.85735704569108,
                                        -5.940881541256462
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
                            "startDate": "2022-05-01T07:35:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651390500000,
                            "endTime": 1651397100000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//10.682049398543313//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    57.4913,
                                    -7.5691
                                ],
                                [
                                    26.93,
                                    23.81
                                ],
                                [
                                    -3.1,
                                    54.72
                                ],
                                [
                                    -3.1709,
                                    55.1302
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_170",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-22T12:15:50.511Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-173",
            "title": "Order item 177",
            "startDate": "2022-05-01T04:55:00.000Z",
            "endDate": "2022-05-01T05:45:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.4.287",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T04:55:00.000Z",
                            "endDate": "2022-05-01T05:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651380900000,
                            "endTime": 1651383900000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.2991768287029117//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    51.4418,
                                    16.0894
                                ],
                                [
                                    121.62,
                                    11.88
                                ],
                                [
                                    121.379,
                                    11.7918
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_173",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Maritime--MissileStrike",
            "timestamp": "2022-09-24T11:57:11.540Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-176",
            "title": "Order item 182",
            "startDate": "2022-05-01T05:00:00.000Z",
            "endDate": "2022-05-01T08:10:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.8.305",
                    "number": 4,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Propellor OWA UAV",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_176",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T07:24:08.009Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-179",
            "title": "Order item 183",
            "startDate": "2022-05-01T05:20:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.3.142",
                    "number": 0
                },
                {
                    "asset": "Blue.3.181",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T05:20:00.000Z",
                            "endDate": "2022-05-01T06:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651382400000,
                            "endTime": 1651385400000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//6.456427729455754//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    105.14,
                                    35.28
                                ],
                                [
                                    105.5324,
                                    35.3148
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
                            "startDate": "2022-05-01T06:10:00.000Z",
                            "endDate": "2022-05-01T07:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651385400000,
                            "endTime": 1651390800000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//12.912855458911508//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        102.0150646099647,
                                        38.03530498384311
                                    ],
                                    [
                                        102.0150646099647,
                                        32.499157602025655
                                    ],
                                    [
                                        108.81689441513687,
                                        32.499157602025655
                                    ],
                                    [
                                        108.81689441513687,
                                        38.03530498384311
                                    ],
                                    [
                                        102.0150646099647,
                                        38.03530498384311
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
                            "startDate": "2022-05-01T07:40:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651390800000,
                            "endTime": 1651398000000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//19.369283188367262//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    105.5324,
                                    35.3148
                                ],
                                [
                                    53.3,
                                    48.22
                                ],
                                [
                                    1.44,
                                    60.49
                                ],
                                [
                                    1.7498,
                                    60.2232
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_179",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-25T05:34:17.944Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-182",
            "title": "Order item 186",
            "startDate": "2022-05-01T05:20:00.000Z",
            "endDate": "2022-05-01T10:40:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.3.198",
                    "number": 2
                },
                {
                    "asset": "Green.6.177",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T05:20:00.000Z",
                            "endDate": "2022-05-01T06:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651382400000,
                            "endTime": 1651385400000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//6.875184934353456//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.9288,
                                    11.076
                                ],
                                [
                                    49.08,
                                    58.67
                                ],
                                [
                                    48.8429,
                                    58.3229
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T06:10:00.000Z",
                            "endDate": "2022-05-01T08:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651385400000,
                            "endTime": 1651392000000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//13.750369868706912//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.77421906804612,
                                        61.11778235149371
                                    ],
                                    [
                                        42.77421906804612,
                                        55.28386478517149
                                    ],
                                    [
                                        53.98712756152333,
                                        55.28386478517149
                                    ],
                                    [
                                        53.98712756152333,
                                        61.11778235149371
                                    ],
                                    [
                                        42.77421906804612,
                                        61.11778235149371
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T08:00:00.000Z",
                            "endDate": "2022-05-01T10:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392000000,
                            "endTime": 1651401600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//20.625554803060368//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.8429,
                                    58.3229
                                ],
                                [
                                    55.94,
                                    11.46
                                ],
                                [
                                    55.9288,
                                    11.076
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_182",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-29T17:28:28.669Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-185",
            "title": "Order item 189",
            "startDate": "2022-05-01T05:25:00.000Z",
            "endDate": "2022-05-01T06:15:00.000Z",
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "Red.4.74",
                    "number": 5
                },
                {
                    "asset": "Red.5.393",
                    "number": 0
                },
                {
                    "asset": "Red.12.25",
                    "number": 5
                },
                {
                    "asset": "Red.6.170",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Area",
                            "startDate": "2022-05-01T05:25:00.000Z",
                            "endDate": "2022-05-01T06:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651382700000,
                            "endTime": 1651385700000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//6.187363308155909//Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.75707187301669,
                                        45.74300575290844
                                    ],
                                    [
                                        46.75707187301669,
                                        42.823026934112335
                                    ],
                                    [
                                        50.84136149714533,
                                        42.823026934112335
                                    ],
                                    [
                                        50.84136149714533,
                                        45.74300575290844
                                    ],
                                    [
                                        46.75707187301669,
                                        45.74300575290844
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_185",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-23T07:23:14.968Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-188",
            "title": "Order item 194",
            "startDate": "2022-05-01T05:40:00.000Z",
            "endDate": "2022-05-01T08:20:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.5.170",
                    "number": 3,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "SRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_188",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-27T10:28:52.492Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-191",
            "title": "Order item 195",
            "startDate": "2022-05-01T05:55:00.000Z",
            "endDate": "2022-05-01T10:05:00.000Z",
            "activity": "f-blue-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Blue.3.85",
                    "number": 2
                },
                {
                    "asset": "Blue.3.283",
                    "number": 4
                },
                {
                    "asset": "Blue.6.194",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T05:55:00.000Z",
                            "endDate": "2022-05-01T06:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651384500000,
                            "endTime": 1651387500000,
                            "geomId": "Activity-0",
                            "name": "f-blue//6.491983563639224//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    53.9672,
                                    70.2835
                                ],
                                [
                                    58.74,
                                    60.21
                                ],
                                [
                                    64.35,
                                    50.99
                                ],
                                [
                                    69.25,
                                    41.05
                                ],
                                [
                                    74.43,
                                    31.39
                                ],
                                [
                                    74.9363,
                                    31.4807
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Effect Location",
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651387500000,
                            "endTime": 1651397100000,
                            "geomId": "Activity-1",
                            "name": "f-blue//12.983967127278447//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.26571631334251,
                                        33.67581799359774
                                    ],
                                    [
                                        72.26571631334251,
                                        29.23271194957788
                                    ],
                                    [
                                        77.48299358824599,
                                        29.23271194957788
                                    ],
                                    [
                                        77.48299358824599,
                                        33.67581799359774
                                    ],
                                    [
                                        72.26571631334251,
                                        33.67581799359774
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route back",
                            "startDate": "2022-05-01T09:25:00.000Z",
                            "endDate": "2022-05-01T10:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651397100000,
                            "endTime": 1651399500000,
                            "geomId": "Activity-2",
                            "name": "f-blue//19.47595069091767//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    74.9363,
                                    31.4807
                                ],
                                [
                                    64.86,
                                    50.7
                                ],
                                [
                                    54.1,
                                    70.23
                                ],
                                [
                                    53.9672,
                                    70.2835
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_191",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-28T23:35:05.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-194",
            "title": "Order item 198",
            "startDate": "2022-05-01T05:55:00.000Z",
            "endDate": "2022-05-01T09:15:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.4.219",
                    "number": 3
                },
                {
                    "asset": "Green.3.357",
                    "number": 2
                },
                {
                    "asset": "Green.8.208",
                    "number": 2
                },
                {
                    "asset": "Green.8.173",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T05:55:00.000Z",
                            "endDate": "2022-05-01T06:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651384500000,
                            "endTime": 1651387500000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//2.4844254453200847//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.602,
                                    14.8231
                                ],
                                [
                                    69.03,
                                    5.62
                                ],
                                [
                                    95.97,
                                    -3.05
                                ],
                                [
                                    95.7368,
                                    -3.5136
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T06:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651387500000,
                            "endTime": 1651388100000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//4.968850890640169//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        93.40425611369577,
                                        -1.1786386961742812
                                    ],
                                    [
                                        93.40425611369577,
                                        -5.8427243032523695
                                    ],
                                    [
                                        98.08103496633956,
                                        -5.8427243032523695
                                    ],
                                    [
                                        98.08103496633956,
                                        -1.1786386961742812
                                    ],
                                    [
                                        93.40425611369577,
                                        -1.1786386961742812
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T09:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388100000,
                            "endTime": 1651396500000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//7.453276335960254//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    95.7368,
                                    -3.5136
                                ],
                                [
                                    77.56,
                                    2.63
                                ],
                                [
                                    60.52,
                                    8.91
                                ],
                                [
                                    42.77,
                                    14.48
                                ],
                                [
                                    42.602,
                                    14.8231
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_194",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Maritime--MissileStrike",
            "timestamp": "2022-09-28T14:33:31.045Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-197",
            "title": "Order item 206",
            "startDate": "2022-05-01T05:55:00.000Z",
            "endDate": "2022-05-01T08:25:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.8.173",
                    "number": 1,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.8.251",
                    "number": 1,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.10.42",
                    "number": 3,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Low Obs Cruise",
                    "number": 0
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "SRBM",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_197",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-29T02:59:34.154Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-200",
            "title": "Order item 204",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-blue-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.5.346",
                    "number": 2
                },
                {
                    "asset": "Blue.5.364",
                    "number": 2
                },
                {
                    "asset": "Blue.7.95",
                    "number": 3
                },
                {
                    "asset": "Blue.10.339",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_200",
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-27T17:17:49.622Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-203",
            "title": "Order item 207",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-red-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "Red.11.339",
                    "number": 4
                },
                {
                    "asset": "Red.9.297",
                    "number": 2
                },
                {
                    "asset": "Red.9.367",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T06:15:00.000Z",
                            "endDate": "2022-05-01T07:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651385700000,
                            "endTime": 1651388700000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.8222781061194837//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.9716,
                                    38.8136
                                ],
                                [
                                    85.43,
                                    35.71
                                ],
                                [
                                    49.93,
                                    31.65
                                ],
                                [
                                    15.72,
                                    27.88
                                ],
                                [
                                    15.3978,
                                    28.1651
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388700000,
                            "endTime": 1651391100000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//7.644556212238967//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        13.985500619989399,
                                        29.388464367802786
                                    ],
                                    [
                                        13.985500619989399,
                                        26.927578607353848
                                    ],
                                    [
                                        16.777989286251756,
                                        26.927578607353848
                                    ],
                                    [
                                        16.777989286251756,
                                        29.388464367802786
                                    ],
                                    [
                                        13.985500619989399,
                                        29.388464367802786
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388700000,
                            "endTime": 1651391100000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//11.466834318358451//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        11.08907909097054,
                                        31.762460114209563
                                    ],
                                    [
                                        11.08907909097054,
                                        24.44181097512945
                                    ],
                                    [
                                        19.42138064420347,
                                        24.44181097512945
                                    ],
                                    [
                                        19.42138064420347,
                                        31.762460114209563
                                    ],
                                    [
                                        11.08907909097054,
                                        31.762460114209563
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391100000,
                            "endTime": 1651397100000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//15.289112424477935//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    15.3978,
                                    28.1651
                                ],
                                [
                                    50.1,
                                    31.5
                                ],
                                [
                                    84.92,
                                    34.95
                                ],
                                [
                                    120.01,
                                    38.68
                                ],
                                [
                                    119.9716,
                                    38.8136
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_203",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-22T13:20:05.881Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-206",
            "title": "Order item 210",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T06:15:00.000Z",
            "activity": "f-red-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.5.151",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_206",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-21T23:06:22.930Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-209",
            "title": "Order item 213",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T12:25:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.10.183",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T06:15:00.000Z",
                            "endDate": "2022-05-01T07:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651385700000,
                            "endTime": 1651388700000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//5.847952391952276//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.8897,
                                    52.7554
                                ],
                                [
                                    96.61,
                                    54.06
                                ],
                                [
                                    71.38,
                                    55.42
                                ],
                                [
                                    46.44,
                                    57.06
                                ],
                                [
                                    46.81,
                                    56.6791
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T09:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388700000,
                            "endTime": 1651396500000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//11.695904783904552//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        39.47138864526534,
                                        60.13068839692325
                                    ],
                                    [
                                        39.47138864526534,
                                        52.87054639522726
                                    ],
                                    [
                                        52.85951538955552,
                                        52.87054639522726
                                    ],
                                    [
                                        52.85951538955552,
                                        60.13068839692325
                                    ],
                                    [
                                        39.47138864526534,
                                        60.13068839692325
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
                            "startDate": "2022-05-01T09:15:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651396500000,
                            "endTime": 1651407900000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//17.54385717585683//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.81,
                                    56.6791
                                ],
                                [
                                    84.35,
                                    54.6
                                ],
                                [
                                    122.38,
                                    53
                                ],
                                [
                                    121.8897,
                                    52.7554
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_209",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T22:36:40.770Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-212",
            "title": "Order item 216",
            "startDate": "2022-05-01T06:15:00.000Z",
            "endDate": "2022-05-01T12:15:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.10.34",
                    "number": 1
                },
                {
                    "asset": "Green.3.211",
                    "number": 1
                },
                {
                    "asset": "Green.5.101",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T06:15:00.000Z",
                            "endDate": "2022-05-01T07:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651385700000,
                            "endTime": 1651388700000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.200921290554106//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    21.0702,
                                    -8.9792
                                ],
                                [
                                    33.92,
                                    14.66
                                ],
                                [
                                    46.9,
                                    39.43
                                ],
                                [
                                    60.17,
                                    63.48
                                ],
                                [
                                    59.7126,
                                    63.0865
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
                            "startDate": "2022-05-01T07:05:00.000Z",
                            "endDate": "2022-05-01T10:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388700000,
                            "endTime": 1651400100000,
                            "geomId": "Patrol-1",
                            "name": "f-green//10.401842581108212//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        53.84680699966578,
                                        65.41224796129593
                                    ],
                                    [
                                        53.84680699966578,
                                        60.55511986333981
                                    ],
                                    [
                                        64.67503616430912,
                                        60.55511986333981
                                    ],
                                    [
                                        64.67503616430912,
                                        65.41224796129593
                                    ],
                                    [
                                        53.84680699966578,
                                        65.41224796129593
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
                            "startDate": "2022-05-01T10:15:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651400100000,
                            "endTime": 1651407300000,
                            "geomId": "Patrol-2",
                            "name": "f-green//15.602763871662319//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    59.7126,
                                    63.0865
                                ],
                                [
                                    46.46,
                                    38.85
                                ],
                                [
                                    34.42,
                                    14.83
                                ],
                                [
                                    20.67,
                                    -8.9
                                ],
                                [
                                    21.0702,
                                    -8.9792
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_212",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-26T03:50:59.401Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-215",
            "title": "Order item 219",
            "startDate": "2022-05-01T06:25:00.000Z",
            "endDate": "2022-05-01T08:25:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Red.10.105",
                    "number": 0
                },
                {
                    "asset": "Red.9.222",
                    "number": 0
                },
                {
                    "asset": "Red.12.52",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T06:25:00.000Z",
                            "endDate": "2022-05-01T07:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651386300000,
                            "endTime": 1651389300000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//3.4473113557323813//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    86.494,
                                    73.4871
                                ],
                                [
                                    -5.77,
                                    26.74
                                ],
                                [
                                    -5.9347,
                                    26.5316
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
                            "startDate": "2022-05-01T07:15:00.000Z",
                            "endDate": "2022-05-01T07:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651389300000,
                            "endTime": 1651391700000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//6.894622711464763//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -9.447923156749942,
                                        29.54560694277891
                                    ],
                                    [
                                        -9.447923156749942,
                                        23.435961379182313
                                    ],
                                    [
                                        -2.603730065119331,
                                        23.435961379182313
                                    ],
                                    [
                                        -2.603730065119331,
                                        29.54560694277891
                                    ],
                                    [
                                        -9.447923156749942,
                                        29.54560694277891
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
                            "startDate": "2022-05-01T07:15:00.000Z",
                            "endDate": "2022-05-01T07:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651389300000,
                            "endTime": 1651391700000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//10.341934067197144//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -7.289589898072984,
                                        27.724580946636998
                                    ],
                                    [
                                        -7.289589898072984,
                                        25.32607924904804
                                    ],
                                    [
                                        -4.607836409439183,
                                        25.32607924904804
                                    ],
                                    [
                                        -4.607836409439183,
                                        27.724580946636998
                                    ],
                                    [
                                        -7.289589898072984,
                                        27.724580946636998
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
                            "startDate": "2022-05-01T07:55:00.000Z",
                            "endDate": "2022-05-01T08:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391700000,
                            "endTime": 1651393500000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//13.789245422929525//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    40.77,
                                    49.55
                                ],
                                [
                                    86.88,
                                    72.98
                                ],
                                [
                                    86.494,
                                    73.4871
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_215",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-22T14:49:18.822Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-218",
            "title": "Order item 222",
            "startDate": "2022-05-01T06:45:00.000Z",
            "endDate": "2022-05-01T11:15:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.12.395",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651387500000,
                            "endTime": 1651390500000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//5.587122592143714//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    67.6338,
                                    13.4044
                                ],
                                [
                                    22.34,
                                    19.99
                                ],
                                [
                                    22.5078,
                                    20.4081
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T07:35:00.000Z",
                            "endDate": "2022-05-01T10:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651390500000,
                            "endTime": 1651399500000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//11.174245184287429//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        20.78907587004494,
                                        21.993376608880084
                                    ],
                                    [
                                        20.78907587004494,
                                        18.806319100821252
                                    ],
                                    [
                                        24.191314583374336,
                                        18.806319100821252
                                    ],
                                    [
                                        24.191314583374336,
                                        21.993376608880084
                                    ],
                                    [
                                        20.78907587004494,
                                        21.993376608880084
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T11:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651403700000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//16.761367776431143//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.5078,
                                    20.4081
                                ],
                                [
                                    67.77,
                                    13.7
                                ],
                                [
                                    67.6338,
                                    13.4044
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_218",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-23T15:31:39.034Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-221",
            "title": "Order item 225",
            "startDate": "2022-05-01T06:45:00.000Z",
            "endDate": "2022-05-01T07:35:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.5.105",
                    "number": 5
                },
                {
                    "asset": "Green.5.101",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T06:45:00.000Z",
                            "endDate": "2022-05-01T07:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651387500000,
                            "endTime": 1651390500000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.620354997459799//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.867,
                                    -9.2024
                                ],
                                [
                                    48.52,
                                    44.39
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_221",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T05:58:00.036Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-224",
            "title": "Order item 228",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T12:25:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.8.34",
                    "number": 1
                },
                {
                    "asset": "Blue.8.370",
                    "number": 5
                },
                {
                    "asset": "Blue.12.19",
                    "number": 1
                },
                {
                    "asset": "Blue.2.182",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Raid-0",
                            "name": "f-blue//6.547008571680635//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.85,
                                    44.3012
                                ],
                                [
                                    87.49,
                                    39.3
                                ],
                                [
                                    126.6,
                                    33.77
                                ],
                                [
                                    126.3555,
                                    34.2659
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T09:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651391100000,
                            "endTime": 1651396500000,
                            "geomId": "Raid-1",
                            "name": "f-blue//13.09401714336127//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        122.79503999718224,
                                        37.056865930791446
                                    ],
                                    [
                                        122.79503999718224,
                                        31.378681826533676
                                    ],
                                    [
                                        129.68336946892722,
                                        31.378681826533676
                                    ],
                                    [
                                        129.68336946892722,
                                        37.056865930791446
                                    ],
                                    [
                                        122.79503999718224,
                                        37.056865930791446
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T09:15:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651396500000,
                            "endTime": 1651407900000,
                            "geomId": "Raid-2",
                            "name": "f-blue//19.641025715041906//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.3555,
                                    34.2659
                                ],
                                [
                                    100.54,
                                    37.27
                                ],
                                [
                                    74.81,
                                    41.36
                                ],
                                [
                                    48.36,
                                    44.73
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_224",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-22T18:08:21.828Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-227",
            "title": "Order item 231",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T09:55:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.5.182",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Raid-0",
                            "name": "f-green//5.367083317134529//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.2458,
                                    23.6413
                                ],
                                [
                                    59.32,
                                    25.78
                                ],
                                [
                                    79.45,
                                    27.97
                                ],
                                [
                                    98.87,
                                    29.44
                                ],
                                [
                                    98.6918,
                                    29.604
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T09:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651391100000,
                            "endTime": 1651398900000,
                            "geomId": "Raid-1",
                            "name": "f-green//10.734166634269059//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        96.37292811080977,
                                        31.559984723244963
                                    ],
                                    [
                                        96.37292811080977,
                                        27.609252265329243
                                    ],
                                    [
                                        100.92155846626387,
                                        27.609252265329243
                                    ],
                                    [
                                        100.92155846626387,
                                        31.559984723244963
                                    ],
                                    [
                                        96.37292811080977,
                                        31.559984723244963
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T09:55:00.000Z",
                            "endDate": "2022-05-01T09:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398900000,
                            "endTime": 1651398900000,
                            "geomId": "Raid-2",
                            "name": "f-green//16.101249951403588//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    98.6918,
                                    29.604
                                ],
                                [
                                    40.32,
                                    23.84
                                ],
                                [
                                    40.2458,
                                    23.6413
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_227",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-29T04:02:44.411Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-230",
            "title": "Order item 234",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.4.150",
                    "number": 0
                },
                {
                    "asset": "Blue.3.366",
                    "number": 1
                },
                {
                    "asset": "Blue.1.295",
                    "number": 3
                },
                {
                    "asset": "Blue.8.338",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//3.0805792291648686//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.77707171821572,
                                        -2.1739572817393835
                                    ],
                                    [
                                        137.77707171821572,
                                        -3.786252069383474
                                    ],
                                    [
                                        139.39171112052085,
                                        -3.786252069383474
                                    ],
                                    [
                                        139.39171112052085,
                                        -2.1739572817393835
                                    ],
                                    [
                                        137.77707171821572,
                                        -2.1739572817393835
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_230",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-23T11:41:07.785Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-233",
            "title": "Order item 237",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T08:05:00.000Z",
            "activity": "f-red-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.9.338",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Resupply-0",
                            "name": "f-red//4.687496312428266//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    94.0415,
                                    18.5478
                                ],
                                [
                                    -19.05,
                                    26.53
                                ],
                                [
                                    -19.2994,
                                    26.4284
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391100000,
                            "endTime": 1651392300000,
                            "geomId": "Resupply-1",
                            "name": "f-red//9.374992624856532//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -22.454928555266196,
                                        29.150131906132497
                                    ],
                                    [
                                        -22.454928555266196,
                                        23.64063314842286
                                    ],
                                    [
                                        -16.291205764235897,
                                        23.64063314842286
                                    ],
                                    [
                                        -16.291205764235897,
                                        29.150131906132497
                                    ],
                                    [
                                        -22.454928555266196,
                                        29.150131906132497
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
                            "startDate": "2022-05-01T08:05:00.000Z",
                            "endDate": "2022-05-01T08:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651392300000,
                            "endTime": 1651392300000,
                            "geomId": "Resupply-2",
                            "name": "f-red//14.062488937284797//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -19.2994,
                                    26.4284
                                ],
                                [
                                    8.78,
                                    24.78
                                ],
                                [
                                    37.75,
                                    22.03
                                ],
                                [
                                    66.01,
                                    20.55
                                ],
                                [
                                    93.55,
                                    18.36
                                ],
                                [
                                    94.0415,
                                    18.5478
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_233",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-22T09:03:31.949Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-236",
            "title": "Order item 240",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.10.345",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.187834564596415//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        78.8641404787248,
                                        25.938483434639732
                                    ],
                                    [
                                        78.8641404787248,
                                        25.45061685820108
                                    ],
                                    [
                                        79.40555044516536,
                                        25.45061685820108
                                    ],
                                    [
                                        79.40555044516536,
                                        25.938483434639732
                                    ],
                                    [
                                        78.8641404787248,
                                        25.938483434639732
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_236",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-25T20:09:56.904Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-239",
            "title": "Order item 243",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.4.171",
                    "number": 5
                },
                {
                    "asset": "Blue.5.206",
                    "number": 3
                },
                {
                    "asset": "Blue.12.355",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.581593985669315//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -9.2135,
                                    52.7768
                                ],
                                [
                                    55.74,
                                    23.52
                                ],
                                [
                                    120.06,
                                    -5.36
                                ],
                                [
                                    120.5176,
                                    -5.8065
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_239",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T13:00:22.649Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-242",
            "title": "Order item 246",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T11:15:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.2.217",
                    "number": 2
                },
                {
                    "asset": "Blue.2.192",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//2.8687745756469667//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    19.46,
                                    39.31
                                ],
                                [
                                    37.38,
                                    19.61
                                ],
                                [
                                    55.58,
                                    -0.8
                                ],
                                [
                                    55.1369,
                                    -1.056
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
                            "startDate": "2022-05-01T07:45:00.000Z",
                            "endDate": "2022-05-01T08:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651391100000,
                            "endTime": 1651393500000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//5.737549151293933//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        54.82276132154994,
                                        -0.7418717846958829
                                    ],
                                    [
                                        54.82276132154994,
                                        -1.3700964721694076
                                    ],
                                    [
                                        55.451102175026215,
                                        -1.3700964721694076
                                    ],
                                    [
                                        55.451102175026215,
                                        -0.7418717846958829
                                    ],
                                    [
                                        54.82276132154994,
                                        -0.7418717846958829
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
                            "startDate": "2022-05-01T08:25:00.000Z",
                            "endDate": "2022-05-01T11:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651393500000,
                            "endTime": 1651403700000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//8.6063237269409//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.1369,
                                    -1.056
                                ],
                                [
                                    28.26,
                                    29.65
                                ],
                                [
                                    1.87,
                                    59.83
                                ],
                                [
                                    1.7498,
                                    60.2232
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_242",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-29T19:34:49.185Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-245",
            "title": "Order item 249",
            "startDate": "2022-05-01T06:55:00.000Z",
            "endDate": "2022-05-01T07:45:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.9.82",
                    "number": 2
                },
                {
                    "asset": "Green.10.397",
                    "number": 4
                },
                {
                    "asset": "Green.7.25",
                    "number": 0
                },
                {
                    "asset": "Green.7.167",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T06:55:00.000Z",
                            "endDate": "2022-05-01T07:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651388100000,
                            "endTime": 1651391100000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.04937633452937//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.7913,
                                    16.2854
                                ],
                                [
                                    44.78,
                                    25.95
                                ],
                                [
                                    42.3,
                                    35.15
                                ],
                                [
                                    41.9827,
                                    34.8416
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_245",
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
            "messageType": "f-red--Maritime--MissileStrike",
            "timestamp": "2022-09-23T00:36:41.834Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-248",
            "title": "Order item 254",
            "startDate": "2022-05-01T07:00:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Red.10.167",
                    "number": 0,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "SRBM",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_248",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-27T01:55:44.628Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-251",
            "title": "Order item 255",
            "startDate": "2022-05-01T07:00:00.000Z",
            "endDate": "2022-05-01T12:40:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.11.71",
                    "number": 0
                },
                {
                    "asset": "Red.4.266",
                    "number": 4
                },
                {
                    "asset": "Red.9.174",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T07:00:00.000Z",
                            "endDate": "2022-05-01T07:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651388400000,
                            "endTime": 1651391400000,
                            "geomId": "Activity-0",
                            "name": "f-red//6.090843363665044//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    113.9883,
                                    46.1522
                                ],
                                [
                                    58.16,
                                    52.78
                                ],
                                [
                                    1.81,
                                    59.9
                                ],
                                [
                                    1.7498,
                                    60.2232
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Effect Location",
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T10:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651391400000,
                            "endTime": 1651401600000,
                            "geomId": "Activity-1",
                            "name": "f-red//12.181686727330089//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -6.471867167244487,
                                        63.63666203564891
                                    ],
                                    [
                                        -6.471867167244487,
                                        56.400156307608036
                                    ],
                                    [
                                        8.33909621229244,
                                        56.400156307608036
                                    ],
                                    [
                                        8.33909621229244,
                                        63.63666203564891
                                    ],
                                    [
                                        -6.471867167244487,
                                        63.63666203564891
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route back",
                            "startDate": "2022-05-01T10:40:00.000Z",
                            "endDate": "2022-05-01T12:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651401600000,
                            "endTime": 1651408800000,
                            "geomId": "Activity-2",
                            "name": "f-red//18.272530090995133//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    39.36,
                                    55.07
                                ],
                                [
                                    77.02,
                                    50.98
                                ],
                                [
                                    113.97,
                                    46.17
                                ],
                                [
                                    113.9883,
                                    46.1522
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_251",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-28T09:42:13.535Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-254",
            "title": "Order item 258",
            "startDate": "2022-05-01T07:10:00.000Z",
            "endDate": "2022-05-01T11:10:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.3.195",
                    "number": 4
                },
                {
                    "asset": "Green.3.329",
                    "number": 5
                },
                {
                    "asset": "Green.6.177",
                    "number": 2
                },
                {
                    "asset": "Green.2.138",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T07:10:00.000Z",
                            "endDate": "2022-05-01T08:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651389000000,
                            "endTime": 1651392000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.951708631590009//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.7997,
                                    -4.7516
                                ],
                                [
                                    70.77,
                                    20.43
                                ],
                                [
                                    99.78,
                                    44.66
                                ],
                                [
                                    130.08,
                                    69.17
                                ],
                                [
                                    129.7639,
                                    69.4742
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T08:00:00.000Z",
                            "endDate": "2022-05-01T10:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392000000,
                            "endTime": 1651400400000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.903417263180017//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        128.81503016181537,
                                        69.79929987496504
                                    ],
                                    [
                                        128.81503016181537,
                                        69.1440948423258
                                    ],
                                    [
                                        130.68422477126103,
                                        69.1440948423258
                                    ],
                                    [
                                        130.68422477126103,
                                        69.79929987496504
                                    ],
                                    [
                                        128.81503016181537,
                                        69.79929987496504
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T10:20:00.000Z",
                            "endDate": "2022-05-01T11:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651400400000,
                            "endTime": 1651403400000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//14.855125894770026//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7639,
                                    69.4742
                                ],
                                [
                                    107.24,
                                    51.1
                                ],
                                [
                                    85.69,
                                    32.7
                                ],
                                [
                                    63.43,
                                    13.58
                                ],
                                [
                                    40.45,
                                    -4.25
                                ],
                                [
                                    40.7997,
                                    -4.7516
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_254",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-25T23:12:43.233Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-257",
            "title": "Order item 261",
            "startDate": "2022-05-01T07:20:00.000Z",
            "endDate": "2022-05-01T09:50:00.000Z",
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.2.138",
                    "number": 3
                },
                {
                    "asset": "Red.4.212",
                    "number": 3
                },
                {
                    "asset": "Red.8.400",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T07:20:00.000Z",
                            "endDate": "2022-05-01T08:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651389600000,
                            "endTime": 1651392600000,
                            "geomId": "Resupply-0",
                            "name": "f-red//2.7059950684197247//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    115.7368,
                                    5.4858
                                ],
                                [
                                    54.93,
                                    15.94
                                ],
                                [
                                    -6.42,
                                    26.83
                                ],
                                [
                                    -5.9347,
                                    26.5316
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
                            "startDate": "2022-05-01T08:10:00.000Z",
                            "endDate": "2022-05-01T09:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651392600000,
                            "endTime": 1651395600000,
                            "geomId": "Resupply-1",
                            "name": "f-red//5.411990136839449//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -6.393568318933953,
                                        26.939940182816247
                                    ],
                                    [
                                        -6.393568318933953,
                                        26.121801550459846
                                    ],
                                    [
                                        -5.479091440934528,
                                        26.121801550459846
                                    ],
                                    [
                                        -5.479091440934528,
                                        26.939940182816247
                                    ],
                                    [
                                        -6.393568318933953,
                                        26.939940182816247
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
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Resupply-2",
                            "name": "f-red//8.117985205259174//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    24.67,
                                    21.28
                                ],
                                [
                                    55.11,
                                    15.85
                                ],
                                [
                                    84.82,
                                    10.7
                                ],
                                [
                                    115.82,
                                    5.84
                                ],
                                [
                                    115.7368,
                                    5.4858
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_257",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-28T02:27:13.721Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-260",
            "title": "Order item 264",
            "startDate": "2022-05-01T07:40:00.000Z",
            "endDate": "2022-05-01T08:30:00.000Z",
            "activity": "f-red-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.3.301",
                    "number": 1
                },
                {
                    "asset": "Red.7.315",
                    "number": 2
                },
                {
                    "asset": "Red.10.42",
                    "number": 3
                },
                {
                    "asset": "Red.7.283",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T07:40:00.000Z",
                            "endDate": "2022-05-01T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651390800000,
                            "endTime": 1651393800000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.353702674154192//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -20.79830989419904,
                                        2.2684412661454165
                                    ],
                                    [
                                        -20.79830989419904,
                                        -1.4264796104405206
                                    ],
                                    [
                                        -17.101366589948462,
                                        -1.4264796104405206
                                    ],
                                    [
                                        -17.101366589948462,
                                        2.2684412661454165
                                    ],
                                    [
                                        -20.79830989419904,
                                        2.2684412661454165
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_260",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-26T11:25:45.000Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-263",
            "title": "Order item 267",
            "startDate": "2022-05-01T07:40:00.000Z",
            "endDate": "2022-05-01T11:30:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.7.283",
                    "number": 4
                },
                {
                    "asset": "Red.6.237",
                    "number": 2
                },
                {
                    "asset": "Red.2.304",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T07:40:00.000Z",
                            "endDate": "2022-05-01T08:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651390800000,
                            "endTime": 1651393800000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//4.894831448793411//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    93.9537,
                                    70.2825
                                ],
                                [
                                    54.37,
                                    49.35
                                ],
                                [
                                    15.3,
                                    27.93
                                ],
                                [
                                    15.3978,
                                    28.1651
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T08:30:00.000Z",
                            "endDate": "2022-05-01T10:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651393800000,
                            "endTime": 1651400400000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//9.789662897586823//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        14.965381437586622,
                                        28.544279832403532
                                    ],
                                    [
                                        14.965381437586622,
                                        27.78457174666219
                                    ],
                                    [
                                        15.827159562998217,
                                        27.78457174666219
                                    ],
                                    [
                                        15.827159562998217,
                                        28.544279832403532
                                    ],
                                    [
                                        14.965381437586622,
                                        28.544279832403532
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T10:20:00.000Z",
                            "endDate": "2022-05-01T11:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651400400000,
                            "endTime": 1651404600000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//14.684494346380234//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    15.3978,
                                    28.1651
                                ],
                                [
                                    93.97,
                                    70.68
                                ],
                                [
                                    93.9537,
                                    70.2825
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_263",
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-29T10:08:17.070Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-266",
            "title": "Order item 270",
            "startDate": "2022-05-01T07:50:00.000Z",
            "endDate": "2022-05-01T08:40:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.3.85",
                    "number": 3
                },
                {
                    "asset": "Blue.5.378",
                    "number": 3
                },
                {
                    "asset": "Blue.10.385",
                    "number": 2
                },
                {
                    "asset": "Blue.9.106",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T08:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651391400000,
                            "endTime": 1651394400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.329381394665688//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.4383,
                                    46.8539
                                ],
                                [
                                    35.27,
                                    39.8
                                ],
                                [
                                    22.24,
                                    31.87
                                ],
                                [
                                    9.49,
                                    25.23
                                ],
                                [
                                    9.897,
                                    24.971
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_266",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-28T14:34:49.930Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-269",
            "title": "Order item 273",
            "startDate": "2022-05-01T07:50:00.000Z",
            "endDate": "2022-05-01T11:10:00.000Z",
            "activity": "f-green-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.2.106",
                    "number": 3
                },
                {
                    "asset": "Green.9.339",
                    "number": 1
                },
                {
                    "asset": "Green.2.286",
                    "number": 3
                },
                {
                    "asset": "Green.6.346",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T08:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651391400000,
                            "endTime": 1651394400000,
                            "geomId": "Patrol-0",
                            "name": "f-green//2.657352509442717//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.602,
                                    14.8231
                                ],
                                [
                                    82.59,
                                    33.43
                                ],
                                [
                                    122,
                                    52.47
                                ],
                                [
                                    121.8897,
                                    52.7554
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
                            "startDate": "2022-05-01T08:40:00.000Z",
                            "endDate": "2022-05-01T09:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651394400000,
                            "endTime": 1651396800000,
                            "geomId": "Patrol-1",
                            "name": "f-green//5.314705018885434//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        121.00154711856004,
                                        53.28310255646289
                                    ],
                                    [
                                        121.00154711856004,
                                        52.22122382512431
                                    ],
                                    [
                                        122.75646307625114,
                                        52.22122382512431
                                    ],
                                    [
                                        122.75646307625114,
                                        53.28310255646289
                                    ],
                                    [
                                        121.00154711856004,
                                        53.28310255646289
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
                            "startDate": "2022-05-01T09:20:00.000Z",
                            "endDate": "2022-05-01T11:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651396800000,
                            "endTime": 1651403400000,
                            "geomId": "Patrol-2",
                            "name": "f-green//7.9720575283281505//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.8897,
                                    52.7554
                                ],
                                [
                                    95.07,
                                    40.21
                                ],
                                [
                                    69.33,
                                    27.74
                                ],
                                [
                                    42.86,
                                    14.54
                                ],
                                [
                                    42.602,
                                    14.8231
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_269",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-24T00:45:23.580Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-272",
            "title": "Order item 276",
            "startDate": "2022-05-01T07:50:00.000Z",
            "endDate": "2022-05-01T08:40:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.6.346",
                    "number": 5
                },
                {
                    "asset": "Green.6.120",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T07:50:00.000Z",
                            "endDate": "2022-05-01T08:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651391400000,
                            "endTime": 1651394400000,
                            "geomId": "Transit-0",
                            "name": "f-green//4.8787447907961905//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    30.2082,
                                    2.9062
                                ],
                                [
                                    43.19,
                                    4.42
                                ],
                                [
                                    56.14,
                                    5.91
                                ],
                                [
                                    69.38,
                                    6.68
                                ],
                                [
                                    82.89,
                                    8.73
                                ],
                                [
                                    83.0339,
                                    8.428
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_272",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-24T00:39:58.021Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-275",
            "title": "Order item 279",
            "startDate": "2022-05-01T08:10:00.000Z",
            "endDate": "2022-05-01T08:40:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.1.6",
                    "number": 1
                },
                {
                    "asset": "Blue.8.119",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_275",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-28T14:18:33.253Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-278",
            "title": "Order item 282",
            "startDate": "2022-05-01T08:10:00.000Z",
            "endDate": "2022-05-01T11:50:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.2.286",
                    "number": 2
                },
                {
                    "asset": "Green.9.339",
                    "number": 3
                },
                {
                    "asset": "Green.5.105",
                    "number": 5
                },
                {
                    "asset": "Green.6.385",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T08:10:00.000Z",
                            "endDate": "2022-05-01T09:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392600000,
                            "endTime": 1651395600000,
                            "geomId": "Raid-0",
                            "name": "f-green//6.001792867202312//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    15.3978,
                                    28.1651
                                ],
                                [
                                    12.39,
                                    36.63
                                ],
                                [
                                    8.38,
                                    44.09
                                ],
                                [
                                    4.66,
                                    51.83
                                ],
                                [
                                    2.22,
                                    59.86
                                ],
                                [
                                    1.7498,
                                    60.2232
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Raid-1",
                            "name": "f-green//12.003585734404624//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        0.056931065690790573,
                                        61.03247525568635
                                    ],
                                    [
                                        0.056931065690790573,
                                        59.39341110813406
                                    ],
                                    [
                                        3.3600993456889507,
                                        59.39341110813406
                                    ],
                                    [
                                        3.3600993456889507,
                                        61.03247525568635
                                    ],
                                    [
                                        0.056931065690790573,
                                        61.03247525568635
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398600000,
                            "endTime": 1651405800000,
                            "geomId": "Raid-2",
                            "name": "f-green//18.005378601606935//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    4.96,
                                    52.38
                                ],
                                [
                                    8.11,
                                    44.48
                                ],
                                [
                                    11.54,
                                    35.86
                                ],
                                [
                                    15.25,
                                    28.53
                                ],
                                [
                                    15.3978,
                                    28.1651
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_278",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T09:41:09.275Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-281",
            "title": "Order item 285",
            "startDate": "2022-05-01T08:15:00.000Z",
            "endDate": "2022-05-01T11:55:00.000Z",
            "activity": "f-green-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Green.6.385",
                    "number": 5
                },
                {
                    "asset": "Green.11.377",
                    "number": 3
                },
                {
                    "asset": "Green.3.83",
                    "number": 4
                },
                {
                    "asset": "Green.10.303",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T08:15:00.000Z",
                            "endDate": "2022-05-01T09:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651392900000,
                            "endTime": 1651395900000,
                            "geomId": "Raid-0",
                            "name": "f-green//4.9034486575983465//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    9.8208,
                                    -8.025
                                ],
                                [
                                    37.42,
                                    -8.24
                                ],
                                [
                                    64.83,
                                    -8.65
                                ],
                                [
                                    92.53,
                                    -9.77
                                ],
                                [
                                    120.51,
                                    -9.61
                                ],
                                [
                                    120.4258,
                                    -9.9971
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T09:05:00.000Z",
                            "endDate": "2022-05-01T09:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395900000,
                            "endTime": 1651395900000,
                            "geomId": "Raid-1",
                            "name": "f-green//9.806897315196693//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        117.32587729815442,
                                        -6.905215008306218
                                    ],
                                    [
                                        117.32587729815442,
                                        -13.059769111694774
                                    ],
                                    [
                                        123.58500842858936,
                                        -13.059769111694774
                                    ],
                                    [
                                        123.58500842858936,
                                        -6.905215008306218
                                    ],
                                    [
                                        117.32587729815442,
                                        -6.905215008306218
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T09:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395900000,
                            "endTime": 1651406100000,
                            "geomId": "Raid-2",
                            "name": "f-green//14.71034597279504//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4258,
                                    -9.9971
                                ],
                                [
                                    9.73,
                                    -7.62
                                ],
                                [
                                    9.8208,
                                    -8.025
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_281",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-26T10:47:46.087Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-284",
            "title": "Order item 288",
            "startDate": "2022-05-01T08:35:00.000Z",
            "endDate": "2022-05-01T09:25:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.10.303",
                    "number": 1
                },
                {
                    "asset": "Green.7.236",
                    "number": 1
                },
                {
                    "asset": "Green.2.282",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T08:35:00.000Z",
                            "endDate": "2022-05-01T09:25:00.000Z",
                            "force": "f-green",
                            "startTime": 1651394100000,
                            "endTime": 1651397100000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.698525619227439//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.325,
                                    14.4275
                                ],
                                [
                                    49.01,
                                    19.53
                                ],
                                [
                                    62.6,
                                    23.55
                                ],
                                [
                                    75.48,
                                    28.86
                                ],
                                [
                                    87.64,
                                    33.44
                                ],
                                [
                                    88.1337,
                                    33.6791
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_284",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-28T01:38:23.690Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-287",
            "title": "Order item 291",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-red-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.4.41",
                    "number": 4
                },
                {
                    "asset": "Red.5.313",
                    "number": 0
                },
                {
                    "asset": "Red.7.299",
                    "number": 1
                },
                {
                    "asset": "Red.1.398",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.387023749761283//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        38.66864826334663,
                                        -2.619494736184851
                                    ],
                                    [
                                        38.66864826334663,
                                        -6.877122256270372
                                    ],
                                    [
                                        42.94395849688092,
                                        -6.877122256270372
                                    ],
                                    [
                                        42.94395849688092,
                                        -2.619494736184851
                                    ],
                                    [
                                        38.66864826334663,
                                        -2.619494736184851
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_287",
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
            "messageType": "Air--EWAttack",
            "timestamp": "2022-09-25T22:13:02.084Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-290",
            "title": "Order item 294",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T13:00:00.000Z",
            "activity": "f-blue-Air-EW Attack",
            "ownAssets": [
                {
                    "asset": "Blue.7.398",
                    "number": 3
                },
                {
                    "asset": "Blue.12.210",
                    "number": 1
                },
                {
                    "asset": "Blue.12.136",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//4.968943049199879//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.6069,
                                    61.0041
                                ],
                                [
                                    32.15,
                                    51
                                ],
                                [
                                    28.77,
                                    40.06
                                ],
                                [
                                    25.67,
                                    30.42
                                ],
                                [
                                    26.1757,
                                    29.9436
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651406400000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//9.937886098399758//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        24.681242139624427,
                                        31.213364526559033
                                    ],
                                    [
                                        24.681242139624427,
                                        28.657403067343882
                                    ],
                                    [
                                        27.632239800868284,
                                        28.657403067343882
                                    ],
                                    [
                                        27.632239800868284,
                                        31.213364526559033
                                    ],
                                    [
                                        24.681242139624427,
                                        31.213364526559033
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
                            "startDate": "2022-05-01T12:00:00.000Z",
                            "endDate": "2022-05-01T13:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651406400000,
                            "endTime": 1651410000000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//14.906829147599638//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    26.1757,
                                    29.9436
                                ],
                                [
                                    30.07,
                                    45.57
                                ],
                                [
                                    34.5,
                                    60.74
                                ],
                                [
                                    34.6069,
                                    61.0041
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_290",
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
            "messageType": "Air--Transit",
            "timestamp": "2022-09-28T08:31:41.268Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-293",
            "title": "Order item 297",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.11.175",
                    "number": 5
                },
                {
                    "asset": "Blue.1.327",
                    "number": 0
                },
                {
                    "asset": "Blue.2.192",
                    "number": 3
                },
                {
                    "asset": "Blue.4.171",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.44428351521492//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.1324,
                                    69.8033
                                ],
                                [
                                    18.62,
                                    48.28
                                ],
                                [
                                    -12.39,
                                    26.24
                                ],
                                [
                                    -12.5211,
                                    26.6354
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_293",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-27T00:34:21.243Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-296",
            "title": "Order item 300",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T12:40:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.11.171",
                    "number": 0
                },
                {
                    "asset": "Red.9.263",
                    "number": 3
                },
                {
                    "asset": "Red.6.68",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//2.813045152463019//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    61.4549,
                                    56.7233
                                ],
                                [
                                    30,
                                    38.43
                                ],
                                [
                                    -1.04,
                                    19.53
                                ],
                                [
                                    -0.7267,
                                    19.325
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398000000,
                            "endTime": 1651407600000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//5.626090304926038//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -2.429048042842662,
                                        20.90741235214527
                                    ],
                                    [
                                        -2.429048042842662,
                                        17.727097573469955
                                    ],
                                    [
                                        0.9428268094637161,
                                        17.727097573469955
                                    ],
                                    [
                                        0.9428268094637161,
                                        20.90741235214527
                                    ],
                                    [
                                        -2.429048042842662,
                                        20.90741235214527
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T12:20:00.000Z",
                            "endDate": "2022-05-01T12:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407600000,
                            "endTime": 1651408800000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//8.439135457389057//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -0.7267,
                                    19.325
                                ],
                                [
                                    61.53,
                                    56.93
                                ],
                                [
                                    61.4549,
                                    56.7233
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_296",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-21T22:21:02.008Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-299",
            "title": "Order item 303",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.3.387",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.075227960944176//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -12.992257344609609,
                                        20.6656219708998
                                    ],
                                    [
                                        -12.992257344609609,
                                        19.92709781034912
                                    ],
                                    [
                                        -12.204819610419799,
                                        19.92709781034912
                                    ],
                                    [
                                        -12.204819610419799,
                                        20.6656219708998
                                    ],
                                    [
                                        -12.992257344609609,
                                        20.6656219708998
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_299",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-29T17:51:43.564Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-302",
            "title": "Order item 306",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T13:20:00.000Z",
            "activity": "f-green-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.2.22",
                    "number": 1
                },
                {
                    "asset": "Green.8.394",
                    "number": 1
                },
                {
                    "asset": "Green.11.79",
                    "number": 1
                },
                {
                    "asset": "Green.9.277",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Patrol-0",
                            "name": "f-green//6.230831936001778//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.004,
                                    -1.9803
                                ],
                                [
                                    32.37,
                                    17.35
                                ],
                                [
                                    31.61,
                                    36.55
                                ],
                                [
                                    30.14,
                                    55.04
                                ],
                                [
                                    27.94,
                                    73.81
                                ],
                                [
                                    28.2963,
                                    74.1053
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398000000,
                            "endTime": 1651407600000,
                            "geomId": "Patrol-1",
                            "name": "f-green//12.461663872003555//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        14.069574296428636,
                                        76.91226530968794
                                    ],
                                    [
                                        14.069574296428636,
                                        70.65523611334092
                                    ],
                                    [
                                        37.967890955998314,
                                        70.65523611334092
                                    ],
                                    [
                                        37.967890955998314,
                                        76.91226530968794
                                    ],
                                    [
                                        14.069574296428636,
                                        76.91226530968794
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
                            "startDate": "2022-05-01T12:20:00.000Z",
                            "endDate": "2022-05-01T13:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651407600000,
                            "endTime": 1651411200000,
                            "geomId": "Patrol-2",
                            "name": "f-green//18.692495808005333//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.2963,
                                    74.1053
                                ],
                                [
                                    30.94,
                                    36.15
                                ],
                                [
                                    34.07,
                                    -2.31
                                ],
                                [
                                    34.004,
                                    -1.9803
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_302",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-25T11:06:25.910Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-305",
            "title": "Order item 309",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T15:20:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.1.277",
                    "number": 1
                },
                {
                    "asset": "Blue.11.188",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.2798570822924376//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -4.6979,
                                    69.349
                                ],
                                [
                                    33.83,
                                    -2.41
                                ],
                                [
                                    34.004,
                                    -1.9803
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651409400000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//12.559714164584875//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.838024272115742,
                                        1.1880203057281502
                                    ],
                                    [
                                        30.838024272115742,
                                        -5.1425570648036905
                                    ],
                                    [
                                        37.182100139092896,
                                        -5.1425570648036905
                                    ],
                                    [
                                        37.182100139092896,
                                        1.1880203057281502
                                    ],
                                    [
                                        30.838024272115742,
                                        1.1880203057281502
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651409400000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//18.839571246877313//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        30.229655537092636,
                                        1.7964881742271621
                                    ],
                                    [
                                        30.229655537092636,
                                        -5.7484654385111105
                                    ],
                                    [
                                        37.795581396164785,
                                        -5.7484654385111105
                                    ],
                                    [
                                        37.795581396164785,
                                        1.7964881742271621
                                    ],
                                    [
                                        30.229655537092636,
                                        1.7964881742271621
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
                            "startDate": "2022-05-01T12:50:00.000Z",
                            "endDate": "2022-05-01T15:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651409400000,
                            "endTime": 1651418400000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//25.11942832916975//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.004,
                                    -1.9803
                                ],
                                [
                                    24.58,
                                    15.8
                                ],
                                [
                                    14.97,
                                    33.41
                                ],
                                [
                                    4.65,
                                    51.31
                                ],
                                [
                                    -4.37,
                                    69.48
                                ],
                                [
                                    -4.6979,
                                    69.349
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_305",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-25T18:05:09.046Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-308",
            "title": "Order item 312",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T11:40:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.5.351",
                    "number": 5
                },
                {
                    "asset": "Red.6.202",
                    "number": 3
                },
                {
                    "asset": "Red.10.167",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Activity-0",
                            "name": "f-red//5.222303399816155//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4258,
                                    -9.9971
                                ],
                                [
                                    80.09,
                                    8.96
                                ],
                                [
                                    40.88,
                                    28.05
                                ],
                                [
                                    0.96,
                                    46.42
                                ],
                                [
                                    0.7937,
                                    46.7283
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Effect Location",
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T10:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398000000,
                            "endTime": 1651399800000,
                            "geomId": "Activity-1",
                            "name": "f-red//10.44460679963231//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -3.514885316740183,
                                        49.451040566804295
                                    ],
                                    [
                                        -3.514885316740183,
                                        43.859653436512716
                                    ],
                                    [
                                        4.677685840728589,
                                        43.859653436512716
                                    ],
                                    [
                                        4.677685840728589,
                                        49.451040566804295
                                    ],
                                    [
                                        -3.514885316740183,
                                        49.451040566804295
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route back",
                            "startDate": "2022-05-01T10:10:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399800000,
                            "endTime": 1651405200000,
                            "geomId": "Activity-2",
                            "name": "f-red//15.666910199448466//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    0.7937,
                                    46.7283
                                ],
                                [
                                    31.18,
                                    32.29
                                ],
                                [
                                    60.39,
                                    18.67
                                ],
                                [
                                    90.87,
                                    4.33
                                ],
                                [
                                    120.64,
                                    -9.72
                                ],
                                [
                                    120.4258,
                                    -9.9971
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_308",
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
            "messageType": "f-blue--Maritime--MissileStrike",
            "timestamp": "2022-09-23T09:14:37.692Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-311",
            "title": "Order item 318",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Blue.6.245",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78",
                    "missileType": "IRBM",
                    "number": 4
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "Low Obs Cruise",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_311",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-23T09:14:37.692Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-314",
            "title": "Order item 318",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T14:30:00.000Z",
            "activity": "f-blue-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Blue.9.358",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-blue//4.787459539249539//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.7042,
                                    62.6482
                                ],
                                [
                                    88.96,
                                    3.5
                                ],
                                [
                                    89.2852,
                                    3.6407
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T11:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651404600000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-blue//9.574919078499079//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        86.50035458657545,
                                        6.403880574157678
                                    ],
                                    [
                                        86.50035458657545,
                                        0.8689959096165449
                                    ],
                                    [
                                        92.0529740138367,
                                        0.8689959096165449
                                    ],
                                    [
                                        92.0529740138367,
                                        6.403880574157678
                                    ],
                                    [
                                        86.50035458657545,
                                        6.403880574157678
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T11:30:00.000Z",
                            "endDate": "2022-05-01T14:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651404600000,
                            "endTime": 1651415400000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-blue//14.362378617748618//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    89.2852,
                                    3.6407
                                ],
                                [
                                    71.88,
                                    23.72
                                ],
                                [
                                    54.63,
                                    42.96
                                ],
                                [
                                    36.67,
                                    62.48
                                ],
                                [
                                    36.7042,
                                    62.6482
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_314",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T01:25:23.200Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-317",
            "title": "Order item 321",
            "startDate": "2022-05-01T08:50:00.000Z",
            "endDate": "2022-05-01T10:10:00.000Z",
            "activity": "f-red-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.2.290",
                    "number": 0
                },
                {
                    "asset": "Red.3.361",
                    "number": 5
                },
                {
                    "asset": "Red.3.145",
                    "number": 5
                },
                {
                    "asset": "Red.10.42",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T08:50:00.000Z",
                            "endDate": "2022-05-01T09:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395000000,
                            "endTime": 1651398000000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.410169361159205//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.1354,
                                    25.6948
                                ],
                                [
                                    67.59,
                                    38.63
                                ],
                                [
                                    56.35,
                                    50.86
                                ],
                                [
                                    56.0324,
                                    51.0716
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
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T10:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398000000,
                            "endTime": 1651399800000,
                            "geomId": "Patrol-1",
                            "name": "f-red//10.82033872231841//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        53.18367250675234,
                                        52.761659815245636
                                    ],
                                    [
                                        53.18367250675234,
                                        49.31724112781968
                                    ],
                                    [
                                        58.6767266527555,
                                        49.31724112781968
                                    ],
                                    [
                                        58.6767266527555,
                                        52.761659815245636
                                    ],
                                    [
                                        53.18367250675234,
                                        52.761659815245636
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
                            "startDate": "2022-05-01T10:10:00.000Z",
                            "endDate": "2022-05-01T10:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399800000,
                            "endTime": 1651399800000,
                            "geomId": "Patrol-2",
                            "name": "f-red//16.230508083477616//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    56.0324,
                                    51.0716
                                ],
                                [
                                    79.52,
                                    25.71
                                ],
                                [
                                    79.1354,
                                    25.6948
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_317",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-22T15:20:09.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-320",
            "title": "Order item 324",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T09:45:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.1.42",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Transit-0",
                            "name": "f-blue//4.9263003543019295//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -14.1439,
                                    56.886
                                ],
                                [
                                    -9.8,
                                    49.55
                                ],
                                [
                                    -5.6,
                                    42.08
                                ],
                                [
                                    -1.11,
                                    33.88
                                ],
                                [
                                    3.64,
                                    26.98
                                ],
                                [
                                    3.5468,
                                    26.6941
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_320",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-29T02:58:56.588Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-323",
            "title": "Order item 327",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T09:45:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.3.14",
                    "number": 5
                },
                {
                    "asset": "Green.10.364",
                    "number": 4
                },
                {
                    "asset": "Green.3.28",
                    "number": 5
                },
                {
                    "asset": "Green.9.205",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.3358525140210986//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.6461,
                                    0.9649
                                ],
                                [
                                    17.29,
                                    15.85
                                ],
                                [
                                    33.18,
                                    29.99
                                ],
                                [
                                    48.36,
                                    44.41
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_323",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-23T12:21:44.468Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-326",
            "title": "Order item 330",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T13:25:00.000Z",
            "activity": "f-blue-Land-Raid",
            "ownAssets": [
                {
                    "asset": "Blue.8.205",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Raid-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Raid-0",
                            "name": "f-blue//5.638825844973326//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -6.9159,
                                    66.9968
                                ],
                                [
                                    0.62,
                                    53.71
                                ],
                                [
                                    8.19,
                                    41.48
                                ],
                                [
                                    15.06,
                                    28.53
                                ],
                                [
                                    15.3978,
                                    28.1651
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Raid Location",
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398300000,
                            "endTime": 1651408500000,
                            "geomId": "Raid-1",
                            "name": "f-blue//11.277651689946651//Raid Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        12.285127133406553,
                                        30.80399768985434
                                    ],
                                    [
                                        12.285127133406553,
                                        25.459260138678765
                                    ],
                                    [
                                        18.358760248551995,
                                        25.459260138678765
                                    ],
                                    [
                                        18.358760248551995,
                                        30.80399768985434
                                    ],
                                    [
                                        12.285127133406553,
                                        30.80399768985434
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Raid-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Raid//Route back",
                            "startDate": "2022-05-01T12:35:00.000Z",
                            "endDate": "2022-05-01T13:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651408500000,
                            "endTime": 1651411500000,
                            "geomId": "Raid-2",
                            "name": "f-blue//16.916477534919977//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    15.3978,
                                    28.1651
                                ],
                                [
                                    -6.63,
                                    67.15
                                ],
                                [
                                    -6.9159,
                                    66.9968
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_326",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-22T11:28:33.138Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-329",
            "title": "Order item 333",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T09:55:00.000Z",
            "activity": "f-red-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.2.215",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_329",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-26T00:19:22.599Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-332",
            "title": "Order item 336",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T16:05:00.000Z",
            "activity": "f-blue-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "Blue.5.45",
                    "number": 0
                },
                {
                    "asset": "Blue.8.215",
                    "number": 3
                },
                {
                    "asset": "Blue.3.98",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-blue//6.925036015920341//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.6562,
                                    38.2322
                                ],
                                [
                                    66.3,
                                    42.83
                                ],
                                [
                                    94.03,
                                    47.53
                                ],
                                [
                                    122.06,
                                    52.51
                                ],
                                [
                                    121.8897,
                                    52.7554
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
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T12:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398300000,
                            "endTime": 1651409700000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-blue//13.850072031840682//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        119.29094283882097,
                                        54.24610521413357
                                    ],
                                    [
                                        119.29094283882097,
                                        51.21170417188925
                                    ],
                                    [
                                        124.31353546069857,
                                        51.21170417188925
                                    ],
                                    [
                                        124.31353546069857,
                                        54.24610521413357
                                    ],
                                    [
                                        119.29094283882097,
                                        54.24610521413357
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
                            "startDate": "2022-05-01T12:55:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651409700000,
                            "endTime": 1651421100000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-blue//20.775108047761023//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.8897,
                                    52.7554
                                ],
                                [
                                    38.37,
                                    38.18
                                ],
                                [
                                    38.6562,
                                    38.2322
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_332",
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
            "timestamp": "2022-09-25T18:54:12.851Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-335",
            "title": "Order item 339",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.7.94",
                    "number": 0
                },
                {
                    "asset": "Blue.5.204",
                    "number": 5
                },
                {
                    "asset": "Blue.12.27",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//5.908272851258516//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.8429,
                                    58.3229
                                ],
                                [
                                    37.4,
                                    49.25
                                ],
                                [
                                    25.78,
                                    40
                                ],
                                [
                                    13.44,
                                    31.03
                                ],
                                [
                                    2.38,
                                    22.34
                                ],
                                [
                                    2.0734,
                                    22.1834
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
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T11:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398300000,
                            "endTime": 1651403100000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//11.816545702517033//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        1.5127557994353769,
                                        22.6996602026953
                                    ],
                                    [
                                        1.5127557994353769,
                                        21.66523584369591
                                    ],
                                    [
                                        2.6299320265720385,
                                        21.66523584369591
                                    ],
                                    [
                                        2.6299320265720385,
                                        22.6996602026953
                                    ],
                                    [
                                        1.5127557994353769,
                                        22.6996602026953
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
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651403100000,
                            "endTime": 1651413900000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//17.72481855377555//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    2.0734,
                                    22.1834
                                ],
                                [
                                    13.46,
                                    31.36
                                ],
                                [
                                    25.86,
                                    40.54
                                ],
                                [
                                    37.53,
                                    49.01
                                ],
                                [
                                    48.5,
                                    58.75
                                ],
                                [
                                    48.8429,
                                    58.3229
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_335",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-21T19:13:03.893Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-338",
            "title": "Order item 342",
            "startDate": "2022-05-01T08:55:00.000Z",
            "endDate": "2022-05-01T12:35:00.000Z",
            "activity": "f-red-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Red.3.363",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T08:55:00.000Z",
                            "endDate": "2022-05-01T09:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395300000,
                            "endTime": 1651398300000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-red//3.7849308624863625//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    107.7928,
                                    13.7584
                                ],
                                [
                                    85.61,
                                    18.67
                                ],
                                [
                                    62.57,
                                    22.73
                                ],
                                [
                                    40.81,
                                    27.06
                                ],
                                [
                                    40.5023,
                                    27.5372
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398300000,
                            "endTime": 1651402500000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-red//7.569861724972725//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        37.00028385747693,
                                        30.511135351684967
                                    ],
                                    [
                                        37.00028385747693,
                                        24.480197329434855
                                    ],
                                    [
                                        43.817192034679515,
                                        24.480197329434855
                                    ],
                                    [
                                        43.817192034679515,
                                        30.511135351684967
                                    ],
                                    [
                                        37.00028385747693,
                                        30.511135351684967
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651408500000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-red//11.354792587459087//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.5023,
                                    27.5372
                                ],
                                [
                                    107.8,
                                    14.22
                                ],
                                [
                                    107.7928,
                                    13.7584
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_338",
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
            "messageType": "Air--AirToAir",
            "timestamp": "2022-09-22T09:15:55.725Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-341",
            "title": "Order item 345",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T13:20:00.000Z",
            "activity": "f-blue-Air-Air to Air Refuel",
            "ownAssets": [
                {
                    "asset": "Blue.3.51",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Air to Air Refuel-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Air to Air Refuel-0",
                            "name": "f-blue//5.555010040290654//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    43.7766,
                                    46.2261
                                ],
                                [
                                    59.7,
                                    33.06
                                ],
                                [
                                    76.02,
                                    19.3
                                ],
                                [
                                    76.0625,
                                    19.3411
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//AAR at this location",
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T12:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651408200000,
                            "geomId": "Air to Air Refuel-1",
                            "name": "f-blue//11.110020080581307//AAR at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        73.81635202713558,
                                        21.418471595572534
                                    ],
                                    [
                                        73.81635202713558,
                                        17.236908467817663
                                    ],
                                    [
                                        78.25182575248209,
                                        17.236908467817663
                                    ],
                                    [
                                        78.25182575248209,
                                        21.418471595572534
                                    ],
                                    [
                                        73.81635202713558,
                                        21.418471595572534
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Air to Air Refuel-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Air to Air Refuel//Route back",
                            "startDate": "2022-05-01T12:30:00.000Z",
                            "endDate": "2022-05-01T13:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651408200000,
                            "endTime": 1651411200000,
                            "geomId": "Air to Air Refuel-2",
                            "name": "f-blue//16.66503012087196//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.0625,
                                    19.3411
                                ],
                                [
                                    43.58,
                                    46.1
                                ],
                                [
                                    43.7766,
                                    46.2261
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_341",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-27T13:02:48.348Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-344",
            "title": "Order item 348",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T12:20:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.6.359",
                    "number": 5
                },
                {
                    "asset": "Green.6.288",
                    "number": 5
                },
                {
                    "asset": "Green.8.330",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//6.21851038467139//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -15.2784,
                                    24.2773
                                ],
                                [
                                    -1.04,
                                    27.02
                                ],
                                [
                                    13.21,
                                    29.78
                                ],
                                [
                                    27.74,
                                    32.83
                                ],
                                [
                                    42.56,
                                    35.15
                                ],
                                [
                                    42.5642,
                                    35.0817
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398600000,
                            "endTime": 1651398600000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//12.43702076934278//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        41.643843797268374,
                                        35.82448157366349
                                    ],
                                    [
                                        41.643843797268374,
                                        34.33209099021314
                                    ],
                                    [
                                        43.467871759500056,
                                        34.33209099021314
                                    ],
                                    [
                                        43.467871759500056,
                                        35.82448157366349
                                    ],
                                    [
                                        41.643843797268374,
                                        35.82448157366349
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T12:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398600000,
                            "endTime": 1651407600000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//18.65553115401417//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.5642,
                                    35.0817
                                ],
                                [
                                    27.87,
                                    32.63
                                ],
                                [
                                    14.08,
                                    30.1
                                ],
                                [
                                    -0.4,
                                    26.86
                                ],
                                [
                                    -15.62,
                                    23.89
                                ],
                                [
                                    -15.2784,
                                    24.2773
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_344",
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
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-28T22:33:41.762Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-347",
            "title": "Order item 351",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T12:50:00.000Z",
            "activity": "f-blue-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Blue.12.86",
                    "number": 4
                },
                {
                    "asset": "Blue.12.355",
                    "number": 5
                },
                {
                    "asset": "Blue.12.337",
                    "number": 4
                },
                {
                    "asset": "Blue.9.33",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Patrol-0",
                            "name": "f-blue//5.775431900285184//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    15.0723,
                                    37.7242
                                ],
                                [
                                    10.63,
                                    25.99
                                ],
                                [
                                    6.36,
                                    13.43
                                ],
                                [
                                    1.38,
                                    1.15
                                ],
                                [
                                    1.6071,
                                    1.1691
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T10:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651401000000,
                            "geomId": "Patrol-1",
                            "name": "f-blue//11.550863800570369//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -1.2554266176585005,
                                        4.023110144308207
                                    ],
                                    [
                                        -1.2554266176585005,
                                        -1.6878209366020873
                                    ],
                                    [
                                        4.46380744933699,
                                        -1.6878209366020873
                                    ],
                                    [
                                        4.46380744933699,
                                        4.023110144308207
                                    ],
                                    [
                                        -1.2554266176585005,
                                        4.023110144308207
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
                            "startDate": "2022-05-01T10:30:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651401000000,
                            "endTime": 1651409400000,
                            "geomId": "Patrol-2",
                            "name": "f-blue//17.326295700855553//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.6071,
                                    1.1691
                                ],
                                [
                                    8.27,
                                    19.54
                                ],
                                [
                                    15.34,
                                    37.33
                                ],
                                [
                                    15.0723,
                                    37.7242
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_347",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-26T13:48:35.966Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-350",
            "title": "Order item 354",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T11:50:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.4.33",
                    "number": 5
                },
                {
                    "asset": "Red.3.242",
                    "number": 0
                },
                {
                    "asset": "Red.1.164",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//4.225774587132037//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    91.1207,
                                    69.9759
                                ],
                                [
                                    27.68,
                                    4.6
                                ],
                                [
                                    28.057,
                                    4.6146
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651398600000,
                            "endTime": 1651405200000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//8.451549174264073//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.13720632702431,
                                        5.529521938366145
                                    ],
                                    [
                                        27.13720632702431,
                                        3.6984970322674515
                                    ],
                                    [
                                        28.974424086768636,
                                        3.6984970322674515
                                    ],
                                    [
                                        28.974424086768636,
                                        5.529521938366145
                                    ],
                                    [
                                        27.13720632702431,
                                        5.529521938366145
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
                            "startDate": "2022-05-01T11:40:00.000Z",
                            "endDate": "2022-05-01T11:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651405200000,
                            "endTime": 1651405800000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//12.67732376139611//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    28.057,
                                    4.6146
                                ],
                                [
                                    60.05,
                                    37.65
                                ],
                                [
                                    91.56,
                                    70.21
                                ],
                                [
                                    91.1207,
                                    69.9759
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_350",
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
            "messageType": "Space--Effects",
            "timestamp": "2022-09-28T18:47:30.961Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-353",
            "title": "Order item 357",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T09:40:00.000Z",
            "activity": "f-blue-Space-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.8.199",
                    "number": 5
                },
                {
                    "asset": "Blue.10.348",
                    "number": 5
                },
                {
                    "asset": "Blue.10.209",
                    "number": 5
                },
                {
                    "asset": "Blue.12.185",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_353",
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
            "messageType": "Air--ISTAR",
            "timestamp": "2022-09-27T05:30:26.746Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-356",
            "title": "Order item 360",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T13:40:00.000Z",
            "activity": "f-blue-Air-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.12.185",
                    "number": 2
                },
                {
                    "asset": "Blue.3.273",
                    "number": 5
                },
                {
                    "asset": "Blue.2.75",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//2.8067234652116895//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.1576,
                                    64.9645
                                ],
                                [
                                    46.15,
                                    45.9
                                ],
                                [
                                    47.32,
                                    27
                                ],
                                [
                                    47.77,
                                    7.39
                                ],
                                [
                                    47.5333,
                                    7.8478
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651405200000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//5.613446930423379//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.67782988254114,
                                        10.644535854652824
                                    ],
                                    [
                                        44.67782988254114,
                                        5.032076650933155
                                    ],
                                    [
                                        50.350460457711854,
                                        5.032076650933155
                                    ],
                                    [
                                        50.350460457711854,
                                        10.644535854652824
                                    ],
                                    [
                                        44.67782988254114,
                                        10.644535854652824
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
                            "startDate": "2022-05-01T09:50:00.000Z",
                            "endDate": "2022-05-01T11:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398600000,
                            "endTime": 1651405200000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//8.420170395635068//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        45.93676327364825,
                                        9.419805826586236
                                    ],
                                    [
                                        45.93676327364825,
                                        6.269822461009986
                                    ],
                                    [
                                        49.117782794218066,
                                        6.269822461009986
                                    ],
                                    [
                                        49.117782794218066,
                                        9.419805826586236
                                    ],
                                    [
                                        45.93676327364825,
                                        9.419805826586236
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
                            "startDate": "2022-05-01T11:40:00.000Z",
                            "endDate": "2022-05-01T13:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405200000,
                            "endTime": 1651412400000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//11.226893860846758//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.5333,
                                    7.8478
                                ],
                                [
                                    47.12,
                                    36.29
                                ],
                                [
                                    46.05,
                                    65.08
                                ],
                                [
                                    46.1576,
                                    64.9645
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_356",
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
            "messageType": "Space--AreaEffects",
            "timestamp": "2022-09-21T21:57:23.321Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-359",
            "title": "Order item 363",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T09:50:00.000Z",
            "activity": "f-red-Space-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.7.390",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T09:00:00.000Z",
                            "endDate": "2022-05-01T09:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651395600000,
                            "endTime": 1651398600000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//2.937329661101103//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        47.39572399850211,
                                        18.95882883175932
                                    ],
                                    [
                                        47.39572399850211,
                                        15.047924321978556
                                    ],
                                    [
                                        51.488526670849396,
                                        15.047924321978556
                                    ],
                                    [
                                        51.488526670849396,
                                        18.95882883175932
                                    ],
                                    [
                                        47.39572399850211,
                                        18.95882883175932
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_359",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Maritime--MissileStrike",
            "timestamp": "2022-09-24T06:11:44.283Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-362",
            "title": "Order item 373",
            "startDate": "2022-05-01T09:00:00.000Z",
            "endDate": "2022-05-01T11:00:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.3.14",
                    "number": 2,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.4.382",
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.10.64",
                    "number": 2,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.1.258",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 0
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Low Obs Cruise",
                    "number": 3
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "IRBM",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_362",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-25T00:03:18.844Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-365",
            "title": "Order item 369",
            "startDate": "2022-05-01T09:05:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.1.258",
                    "number": 0
                },
                {
                    "asset": "Green.8.166",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T09:05:00.000Z",
                            "endDate": "2022-05-01T09:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651395900000,
                            "endTime": 1651398900000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.878805552609265//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    3.3413,
                                    2.9433
                                ],
                                [
                                    19.92,
                                    19.53
                                ],
                                [
                                    36.36,
                                    35.98
                                ],
                                [
                                    53.08,
                                    51.71
                                ],
                                [
                                    70.09,
                                    67.73
                                ],
                                [
                                    70.2592,
                                    68.1903
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T09:55:00.000Z",
                            "endDate": "2022-05-01T12:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398900000,
                            "endTime": 1651406700000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.75761110521853//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        63.676486898339896,
                                        70.28791009608477
                                    ],
                                    [
                                        63.676486898339896,
                                        65.8767272754372
                                    ],
                                    [
                                        75.68797284424065,
                                        65.8767272754372
                                    ],
                                    [
                                        75.68797284424065,
                                        70.28791009608477
                                    ],
                                    [
                                        63.676486898339896,
                                        70.28791009608477
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T12:05:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651406700000,
                            "endTime": 1651413900000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//14.636416657827795//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.2592,
                                    68.1903
                                ],
                                [
                                    3.3,
                                    3.43
                                ],
                                [
                                    3.3413,
                                    2.9433
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_365",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-25T01:42:17.791Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-368",
            "title": "Order item 372",
            "startDate": "2022-05-01T09:25:00.000Z",
            "endDate": "2022-05-01T10:15:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.6.322",
                    "number": 4
                },
                {
                    "asset": "Green.8.169",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T09:25:00.000Z",
                            "endDate": "2022-05-01T10:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651397100000,
                            "endTime": 1651400100000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.689675252884626//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    17.96,
                                    32.21
                                ],
                                [
                                    42.32,
                                    37.37
                                ],
                                [
                                    42.0758,
                                    37.8488
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_368",
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
            "messageType": "Maritime--Resupply",
            "timestamp": "2022-09-29T17:05:17.529Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-371",
            "title": "Order item 375",
            "startDate": "2022-05-01T09:40:00.000Z",
            "endDate": "2022-05-01T13:50:00.000Z",
            "activity": "f-blue-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.8.205",
                    "number": 2
                },
                {
                    "asset": "Blue.9.392",
                    "number": 3
                },
                {
                    "asset": "Blue.4.293",
                    "number": 3
                },
                {
                    "asset": "Blue.3.307",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T09:40:00.000Z",
                            "endDate": "2022-05-01T10:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651398000000,
                            "endTime": 1651401000000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//2.393966124393046//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    45.0923,
                                    59.4373
                                ],
                                [
                                    68,
                                    50.8
                                ],
                                [
                                    91.14,
                                    41.39
                                ],
                                [
                                    113.56,
                                    32.27
                                ],
                                [
                                    113.8022,
                                    32.3971
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
                            "startDate": "2022-05-01T10:30:00.000Z",
                            "endDate": "2022-05-01T11:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651401000000,
                            "endTime": 1651405800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//4.787932248786092//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        109.03725331197926,
                                        36.156938378069015
                                    ],
                                    [
                                        109.03725331197926,
                                        28.472567988096216
                                    ],
                                    [
                                        118.17801673626421,
                                        28.472567988096216
                                    ],
                                    [
                                        118.17801673626421,
                                        36.156938378069015
                                    ],
                                    [
                                        109.03725331197926,
                                        36.156938378069015
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
                            "startDate": "2022-05-01T11:50:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405800000,
                            "endTime": 1651413000000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//7.181898373179138//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    113.8022,
                                    32.3971
                                ],
                                [
                                    91.26,
                                    41.49
                                ],
                                [
                                    67.92,
                                    50.78
                                ],
                                [
                                    44.87,
                                    59.36
                                ],
                                [
                                    45.0923,
                                    59.4373
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_371",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-27T17:03:19.376Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-374",
            "title": "Order item 381",
            "startDate": "2022-05-01T09:40:00.000Z",
            "endDate": "2022-05-01T11:30:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.2.307",
                    "number": 3,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Propellor OWA UAV",
                    "number": 5
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Propellor OWA UAV",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_374",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-27T17:03:19.376Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-377",
            "title": "Order item 381",
            "startDate": "2022-05-01T09:45:00.000Z",
            "endDate": "2022-05-01T10:35:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.1.229",
                    "number": 1
                },
                {
                    "asset": "Green.5.296",
                    "number": 4
                },
                {
                    "asset": "Green.6.77",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T09:45:00.000Z",
                            "endDate": "2022-05-01T10:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651398300000,
                            "endTime": 1651401300000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.482811371795833//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    2.0734,
                                    22.1834
                                ],
                                [
                                    10.26,
                                    62.96
                                ],
                                [
                                    10.3398,
                                    63.3434
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_377",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-29T09:38:21.485Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-380",
            "title": "Order item 384",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T13:45:00.000Z",
            "activity": "f-blue-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Blue.8.370",
                    "number": 1
                },
                {
                    "asset": "Blue.8.377",
                    "number": 3
                },
                {
                    "asset": "Blue.3.98",
                    "number": 4
                },
                {
                    "asset": "Blue.4.331",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-blue//2.8673657523468137//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    7.3497,
                                    33.1036
                                ],
                                [
                                    3.58,
                                    25.76
                                ],
                                [
                                    -0.67,
                                    18.94
                                ],
                                [
                                    -0.7267,
                                    19.325
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651404300000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-blue//5.734731504693627//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -4.1197268934287665,
                                        22.430290000956944
                                    ],
                                    [
                                        -4.1197268934287665,
                                        16.159332255007897
                                    ],
                                    [
                                        2.5384929969968058,
                                        16.159332255007897
                                    ],
                                    [
                                        2.5384929969968058,
                                        22.430290000956944
                                    ],
                                    [
                                        -4.1197268934287665,
                                        22.430290000956944
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T11:25:00.000Z",
                            "endDate": "2022-05-01T13:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651404300000,
                            "endTime": 1651412700000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-blue//8.602097257040441//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -0.7267,
                                    19.325
                                ],
                                [
                                    2.13,
                                    23.45
                                ],
                                [
                                    5.06,
                                    28.66
                                ],
                                [
                                    7.28,
                                    33.14
                                ],
                                [
                                    7.3497,
                                    33.1036
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_380",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T07:57:24.385Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-383",
            "title": "Order item 387",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-red-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Red.10.331",
                    "number": 2
                },
                {
                    "asset": "Red.8.278",
                    "number": 2
                },
                {
                    "asset": "Red.9.338",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-red//4.145341299474239//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    109.1574,
                                    46.4901
                                ],
                                [
                                    82.71,
                                    40.33
                                ],
                                [
                                    56.06,
                                    33.98
                                ],
                                [
                                    28.7,
                                    27.91
                                ],
                                [
                                    1.62,
                                    22.12
                                ],
                                [
                                    2.0734,
                                    22.1834
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
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651407300000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-red//8.290682598948479//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -1.8285397918152126,
                                        25.65488209343755
                                    ],
                                    [
                                        -1.8285397918152126,
                                        18.62355501607119
                                    ],
                                    [
                                        5.7847575597577325,
                                        18.62355501607119
                                    ],
                                    [
                                        5.7847575597577325,
                                        25.65488209343755
                                    ],
                                    [
                                        -1.8285397918152126,
                                        25.65488209343755
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
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407300000,
                            "endTime": 1651413900000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-red//12.436023898422718//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    2.0734,
                                    22.1834
                                ],
                                [
                                    109.43,
                                    46.64
                                ],
                                [
                                    109.1574,
                                    46.4901
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_383",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-29T20:00:28.076Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-386",
            "title": "Order item 390",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T10:55:00.000Z",
            "activity": "f-red-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.5.111",
                    "number": 3
                },
                {
                    "asset": "Red.1.398",
                    "number": 1
                },
                {
                    "asset": "Red.10.331",
                    "number": 5
                },
                {
                    "asset": "Red.8.278",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.316738017834723//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -9.720464451964325,
                                        27.154166525781278
                                    ],
                                    [
                                        -9.720464451964325,
                                        22.943587410062566
                                    ],
                                    [
                                        -5.067320636237322,
                                        22.943587410062566
                                    ],
                                    [
                                        -5.067320636237322,
                                        27.154166525781278
                                    ],
                                    [
                                        -9.720464451964325,
                                        27.154166525781278
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_386",
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
            "messageType": "f-red--Air--MissileStrike",
            "timestamp": "2022-09-23T02:33:43.890Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-389",
            "title": "Order item 399",
            "startDate": "2022-05-01T10:05:00.000Z",
            "endDate": "2022-05-01T14:35:00.000Z",
            "activity": "f-red-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Red.5.111",
                    "number": 5,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Red.9.338",
                    "number": 2,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.10.277",
                    "number": 2,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Red.4.330",
                    "number": 4,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Low Obs Cruise",
                    "number": 5
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "Propellor OWA UAV",
                    "number": 1
                }
            ],
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
                            "startDate": "2022-05-01T10:05:00.000Z",
                            "endDate": "2022-05-01T10:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651399500000,
                            "endTime": 1651402500000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-red//3.1914551816880703//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    86.4196,
                                    42.3049
                                ],
                                [
                                    76.29,
                                    47.56
                                ],
                                [
                                    67.18,
                                    52.83
                                ],
                                [
                                    57.35,
                                    57.39
                                ],
                                [
                                    46.81,
                                    62.23
                                ],
                                [
                                    47.3061,
                                    62.6839
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Launch Location",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651407900000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-red//6.382910363376141//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        42.625675970694296,
                                        64.61570199756329
                                    ],
                                    [
                                        42.625675970694296,
                                        60.6156866872184
                                    ],
                                    [
                                        51.39424467751944,
                                        60.6156866872184
                                    ],
                                    [
                                        51.39424467751944,
                                        64.61570199756329
                                    ],
                                    [
                                        42.625675970694296,
                                        64.61570199756329
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route back",
                            "startDate": "2022-05-01T12:25:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407900000,
                            "endTime": 1651415700000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-red//9.574365545064211//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.3061,
                                    62.6839
                                ],
                                [
                                    86.82,
                                    42.36
                                ],
                                [
                                    86.4196,
                                    42.3049
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_389",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-23T13:18:37.828Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-392",
            "title": "Order item 396",
            "startDate": "2022-05-01T10:15:00.000Z",
            "endDate": "2022-05-01T11:05:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.330",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T10:15:00.000Z",
                            "endDate": "2022-05-01T11:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651400100000,
                            "endTime": 1651403100000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.3397949589416385//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    2.6079,
                                    21.2893
                                ],
                                [
                                    95.8,
                                    30.96
                                ],
                                [
                                    95.4523,
                                    30.8262
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_392",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-23T02:33:43.890Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-395",
            "title": "Order item 399",
            "startDate": "2022-05-01T10:25:00.000Z",
            "endDate": "2022-05-01T13:35:00.000Z",
            "activity": "f-red-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.6.369",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_395",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-27T05:32:50.742Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-398",
            "title": "Order item 402",
            "startDate": "2022-05-01T10:45:00.000Z",
            "endDate": "2022-05-01T17:15:00.000Z",
            "activity": "f-red-Maritime-ASW Barrier",
            "ownAssets": [
                {
                    "asset": "Red.1.227",
                    "number": 5
                },
                {
                    "asset": "Red.4.273",
                    "number": 4
                },
                {
                    "asset": "Red.11.32",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "ASW Barrier-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ASW Barrier//Route out",
                            "startDate": "2022-05-01T10:45:00.000Z",
                            "endDate": "2022-05-01T11:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651401900000,
                            "endTime": 1651404900000,
                            "geomId": "ASW Barrier-0",
                            "name": "f-red//3.93653657566756//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    123.9566,
                                    14.9459
                                ],
                                [
                                    86.8,
                                    29.24
                                ],
                                [
                                    49.05,
                                    43.96
                                ],
                                [
                                    48.85,
                                    44.3012
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
                            "startDate": "2022-05-01T11:35:00.000Z",
                            "endDate": "2022-05-01T14:25:00.000Z",
                            "force": "f-red",
                            "startTime": 1651404900000,
                            "endTime": 1651415100000,
                            "geomId": "ASW Barrier-1",
                            "name": "f-red//7.87307315133512//ASW Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        45.22251044955829,
                                        46.73165503519795
                                    ],
                                    [
                                        45.22251044955829,
                                        41.76520231090981
                                    ],
                                    [
                                        52.18308174928105,
                                        41.76520231090981
                                    ],
                                    [
                                        52.18308174928105,
                                        46.73165503519795
                                    ],
                                    [
                                        45.22251044955829,
                                        46.73165503519795
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
                            "startDate": "2022-05-01T14:25:00.000Z",
                            "endDate": "2022-05-01T17:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651415100000,
                            "endTime": 1651425300000,
                            "geomId": "ASW Barrier-2",
                            "name": "f-red//11.80960972700268//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.85,
                                    44.3012
                                ],
                                [
                                    124.08,
                                    15.23
                                ],
                                [
                                    123.9566,
                                    14.9459
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_398",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-27T14:15:58.385Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-401",
            "title": "Order item 405",
            "startDate": "2022-05-01T10:45:00.000Z",
            "endDate": "2022-05-01T14:15:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.8.305",
                    "number": 5
                },
                {
                    "asset": "Green.9.291",
                    "number": 2
                },
                {
                    "asset": "Green.3.390",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T10:45:00.000Z",
                            "endDate": "2022-05-01T11:35:00.000Z",
                            "force": "f-green",
                            "startTime": 1651401900000,
                            "endTime": 1651404900000,
                            "geomId": "Patrol-0",
                            "name": "f-green//3.575039140880108//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    16.4598,
                                    -8.5671
                                ],
                                [
                                    119.84,
                                    39.24
                                ],
                                [
                                    119.9716,
                                    38.8136
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
                            "startDate": "2022-05-01T11:35:00.000Z",
                            "endDate": "2022-05-01T12:25:00.000Z",
                            "force": "f-green",
                            "startTime": 1651404900000,
                            "endTime": 1651407900000,
                            "geomId": "Patrol-1",
                            "name": "f-green//7.150078281760216//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        117.48160528851577,
                                        40.6760469697387
                                    ],
                                    [
                                        117.48160528851577,
                                        36.90102252712842
                                    ],
                                    [
                                        122.33302410675626,
                                        36.90102252712842
                                    ],
                                    [
                                        122.33302410675626,
                                        40.6760469697387
                                    ],
                                    [
                                        117.48160528851577,
                                        40.6760469697387
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
                            "startDate": "2022-05-01T12:25:00.000Z",
                            "endDate": "2022-05-01T14:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651407900000,
                            "endTime": 1651414500000,
                            "geomId": "Patrol-2",
                            "name": "f-green//10.725117422640324//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.9716,
                                    38.8136
                                ],
                                [
                                    93.67,
                                    27.41
                                ],
                                [
                                    68.28,
                                    14.92
                                ],
                                [
                                    42.18,
                                    3.72
                                ],
                                [
                                    16.36,
                                    -8.19
                                ],
                                [
                                    16.4598,
                                    -8.5671
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_401",
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
            "messageType": "f-blue--Air--MissileStrike",
            "timestamp": "2022-09-26T20:12:49.298Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-404",
            "title": "Order item 413",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T15:45:00.000Z",
            "activity": "f-blue-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Blue.10.202",
                    "number": 2,
                    "missileType": "Propellor OWA UAV"
                },
                {
                    "asset": "Blue.11.127",
                    "number": 4,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78",
                    "missileType": "Standard Cruise",
                    "number": 1
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "IRBM",
                    "number": 5
                },
                {
                    "asset": "Red.10.50",
                    "missileType": "IRBM",
                    "number": 2
                }
            ],
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-blue//6.089993918314576//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.699,
                                    53.1382
                                ],
                                [
                                    -9.79,
                                    40.52
                                ],
                                [
                                    -13.7,
                                    27.1
                                ],
                                [
                                    -18.31,
                                    13.97
                                ],
                                [
                                    -18.2386,
                                    14.1781
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Launch Location",
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:25:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415100000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-blue//12.179987836629152//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -18.69729901764863,
                                        14.621508327058695
                                    ],
                                    [
                                        -18.69729901764863,
                                        13.73382301054433
                                    ],
                                    [
                                        -17.781692858348606,
                                        13.73382301054433
                                    ],
                                    [
                                        -17.781692858348606,
                                        14.621508327058695
                                    ],
                                    [
                                        -18.69729901764863,
                                        14.621508327058695
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route back",
                            "startDate": "2022-05-01T14:25:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415100000,
                            "endTime": 1651419900000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-blue//18.26998175494373//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -18.2386,
                                    14.1781
                                ],
                                [
                                    -5.27,
                                    53.41
                                ],
                                [
                                    -5.699,
                                    53.1382
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_404",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-25T08:54:16.043Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-407",
            "title": "Order item 411",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T14:45:00.000Z",
            "activity": "f-blue-Air-Suppression of Air Defences (SEAD)",
            "ownAssets": [
                {
                    "asset": "Blue.10.318",
                    "number": 0
                },
                {
                    "asset": "Blue.1.184",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Suppression of Air Defences (SEAD)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Suppression of Air Defences (SEAD)//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Suppression of Air Defences (SEAD)-0",
                            "name": "f-blue//4.532307775691152//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    10.3398,
                                    63.3434
                                ],
                                [
                                    109.54,
                                    62.66
                                ],
                                [
                                    109.4429,
                                    63.1047
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651413900000,
                            "geomId": "Suppression of Air Defences (SEAD)-1",
                            "name": "f-blue//9.064615551382303//SEAD Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        108.07090025268558,
                                        63.705929858120655
                                    ],
                                    [
                                        108.07090025268558,
                                        62.490756510097384
                                    ],
                                    [
                                        110.75870972401765,
                                        62.490756510097384
                                    ],
                                    [
                                        110.75870972401765,
                                        63.705929858120655
                                    ],
                                    [
                                        108.07090025268558,
                                        63.705929858120655
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
                            "startDate": "2022-05-01T14:05:00.000Z",
                            "endDate": "2022-05-01T14:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413900000,
                            "endTime": 1651416300000,
                            "geomId": "Suppression of Air Defences (SEAD)-2",
                            "name": "f-blue//13.596923327073455//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    109.4429,
                                    63.1047
                                ],
                                [
                                    60.08,
                                    63.16
                                ],
                                [
                                    10.08,
                                    63.58
                                ],
                                [
                                    10.3398,
                                    63.3434
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_407",
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-22T18:49:26.057Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-410",
            "title": "Order item 414",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T15:45:00.000Z",
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.4.254",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//5.8510738499462605//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    6.0923,
                                    57.453
                                ],
                                [
                                    25.2,
                                    53.47
                                ],
                                [
                                    44.5,
                                    49.68
                                ],
                                [
                                    64.09,
                                    46.18
                                ],
                                [
                                    64.0937,
                                    46.4545
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415700000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//11.702147699892521//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        59.378776695879,
                                        49.42759463292888
                                    ],
                                    [
                                        59.378776695879,
                                        43.30808086217546
                                    ],
                                    [
                                        68.30701534514183,
                                        43.30808086217546
                                    ],
                                    [
                                        68.30701534514183,
                                        49.42759463292888
                                    ],
                                    [
                                        59.378776695879,
                                        49.42759463292888
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415700000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//17.55322154983878//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        62.102847618128415,
                                        47.77543013298219
                                    ],
                                    [
                                        62.102847618128415,
                                        45.10067558902583
                                    ],
                                    [
                                        65.98911490100137,
                                        45.10067558902583
                                    ],
                                    [
                                        65.98911490100137,
                                        47.77543013298219
                                    ],
                                    [
                                        62.102847618128415,
                                        47.77543013298219
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
                            "startDate": "2022-05-01T14:35:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415700000,
                            "endTime": 1651419900000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//23.404295399785042//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.0937,
                                    46.4545
                                ],
                                [
                                    6.09,
                                    57.11
                                ],
                                [
                                    6.0923,
                                    57.453
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_410",
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
            "messageType": "f-red--Maritime--MissileStrike",
            "timestamp": "2022-09-25T06:38:23.294Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-413",
            "title": "Order item 422",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T13:35:00.000Z",
            "activity": "f-red-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Red.9.10",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "Red.8.155",
                    "number": 5,
                    "missileType": "MRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "SRBM",
                    "number": 3
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "IRBM",
                    "number": 2
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "SRBM",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_413",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-22T23:51:48.458Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-416",
            "title": "Order item 420",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T14:45:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.10.385",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.1688694935292006//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -17.9238,
                                    35.5132
                                ],
                                [
                                    5.69,
                                    42.57
                                ],
                                [
                                    28.17,
                                    50.49
                                ],
                                [
                                    51.93,
                                    57.69
                                ],
                                [
                                    74.98,
                                    64.18
                                ],
                                [
                                    75.1944,
                                    64.5979
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T12:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651406700000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//10.337738987058401//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.96840081025873,
                                        65.50446139803333
                                    ],
                                    [
                                        72.96840081025873,
                                        63.660009664565536
                                    ],
                                    [
                                        77.27446831357396,
                                        63.660009664565536
                                    ],
                                    [
                                        77.27446831357396,
                                        65.50446139803333
                                    ],
                                    [
                                        72.96840081025873,
                                        65.50446139803333
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
                            "startDate": "2022-05-01T12:05:00.000Z",
                            "endDate": "2022-05-01T14:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651406700000,
                            "endTime": 1651416300000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//15.506608480587602//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    75.1944,
                                    64.5979
                                ],
                                [
                                    29.03,
                                    49.68
                                ],
                                [
                                    -17.7,
                                    35.18
                                ],
                                [
                                    -17.9238,
                                    35.5132
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_416",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-28T10:25:27.988Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-419",
            "title": "Order item 429",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T12:55:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.8.179",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.6.204",
                    "number": 1,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Green.10.342",
                    "number": 2,
                    "missileType": "Low Obs Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 0
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Propellor OWA UAV",
                    "number": 3
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "Standard Cruise",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_419",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-24T19:50:14.021Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-422",
            "title": "Order item 426",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.6.193",
                    "number": 4
                },
                {
                    "asset": "Blue.2.158",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//5.060349822044373//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    8.0315,
                                    41.784
                                ],
                                [
                                    18.84,
                                    36.63
                                ],
                                [
                                    29.79,
                                    32.61
                                ],
                                [
                                    40.01,
                                    27.87
                                ],
                                [
                                    40.5023,
                                    27.5372
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651405500000,
                            "endTime": 1651415700000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//10.120699644088745//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        40.126401248233826,
                                        27.868997036470954
                                    ],
                                    [
                                        40.126401248233826,
                                        27.204398065821394
                                    ],
                                    [
                                        40.87593221275936,
                                        27.204398065821394
                                    ],
                                    [
                                        40.87593221275936,
                                        27.868997036470954
                                    ],
                                    [
                                        40.126401248233826,
                                        27.868997036470954
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
                            "startDate": "2022-05-01T14:35:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415700000,
                            "endTime": 1651420500000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//15.181049466133118//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    40.5023,
                                    27.5372
                                ],
                                [
                                    24.32,
                                    34.5
                                ],
                                [
                                    7.62,
                                    41.95
                                ],
                                [
                                    8.0315,
                                    41.784
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_422",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-28T10:25:27.988Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-425",
            "title": "Order item 429",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T11:45:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.5.27",
                    "number": 5
                },
                {
                    "asset": "Green.2.331",
                    "number": 3
                },
                {
                    "asset": "Green.3.348",
                    "number": 5
                },
                {
                    "asset": "Green.11.79",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.8462217431515455//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -0.7267,
                                    19.325
                                ],
                                [
                                    56.22,
                                    51.48
                                ],
                                [
                                    56.0324,
                                    51.0716
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_425",
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
            "timestamp": "2022-09-28T06:44:42.746Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-428",
            "title": "Order item 432",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.8.79",
                    "number": 4
                },
                {
                    "asset": "Red.3.323",
                    "number": 1
                },
                {
                    "asset": "Red.10.281",
                    "number": 3
                },
                {
                    "asset": "Red.1.352",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.525514826178551//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.3721,
                                    12.936
                                ],
                                [
                                    79.14,
                                    15.92
                                ],
                                [
                                    38.21,
                                    18.2
                                ],
                                [
                                    38.0032,
                                    18.3247
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
                            "startDate": "2022-05-01T11:45:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651405500000,
                            "endTime": 1651406100000,
                            "geomId": "Patrol-1",
                            "name": "f-red//11.051029652357101//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        36.279775439831006,
                                        19.93714330632101
                                    ],
                                    [
                                        36.279775439831006,
                                        16.697072297679213
                                    ],
                                    [
                                        39.69464200813719,
                                        16.697072297679213
                                    ],
                                    [
                                        39.69464200813719,
                                        19.93714330632101
                                    ],
                                    [
                                        36.279775439831006,
                                        19.93714330632101
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413900000,
                            "geomId": "Patrol-2",
                            "name": "f-red//16.576544478535652//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.0032,
                                    18.3247
                                ],
                                [
                                    79.58,
                                    16.01
                                ],
                                [
                                    120.69,
                                    13.24
                                ],
                                [
                                    120.3721,
                                    12.936
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_428",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-24T08:47:58.294Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-431",
            "title": "Order item 435",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T11:45:00.000Z",
            "activity": "f-red-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.1.352",
                    "number": 4
                },
                {
                    "asset": "Red.4.136",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.09822908975184//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        9.246141610241121,
                                        9.352498364192327
                                    ],
                                    [
                                        9.246141610241121,
                                        2.5788753139039424
                                    ],
                                    [
                                        16.069014224914017,
                                        2.5788753139039424
                                    ],
                                    [
                                        16.069014224914017,
                                        9.352498364192327
                                    ],
                                    [
                                        9.246141610241121,
                                        9.352498364192327
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_431",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-25T00:35:14.633Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-434",
            "title": "Order item 438",
            "startDate": "2022-05-01T10:55:00.000Z",
            "endDate": "2022-05-01T11:45:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.43",
                    "number": 0
                },
                {
                    "asset": "Green.7.167",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T10:55:00.000Z",
                            "endDate": "2022-05-01T11:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651402500000,
                            "endTime": 1651405500000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.564364515244961//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    0.6258,
                                    14.0797
                                ],
                                [
                                    48.91,
                                    56.34
                                ],
                                [
                                    49.2264,
                                    56.341
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_434",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-21T22:06:31.762Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-437",
            "title": "Order item 441",
            "startDate": "2022-05-01T11:05:00.000Z",
            "endDate": "2022-05-01T16:05:00.000Z",
            "activity": "f-red-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "Red.11.355",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651403100000,
                            "endTime": 1651406100000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-red//2.92392111197114//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.8719,
                                    -3.9085
                                ],
                                [
                                    89.75,
                                    22.81
                                ],
                                [
                                    48.08,
                                    48.98
                                ],
                                [
                                    47.8056,
                                    49.4354
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Clearance-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Mine Clearance Area Area",
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413300000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-red//5.84784222394228//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.42528585750437,
                                        51.49212881014698
                                    ],
                                    [
                                        44.42528585750437,
                                        47.28818614073313
                                    ],
                                    [
                                        50.90810811972443,
                                        47.28818614073313
                                    ],
                                    [
                                        50.90810811972443,
                                        51.49212881014698
                                    ],
                                    [
                                        44.42528585750437,
                                        51.49212881014698
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Clearance-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route back",
                            "startDate": "2022-05-01T13:55:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651413300000,
                            "endTime": 1651421100000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-red//8.77176333591342//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.8056,
                                    49.4354
                                ],
                                [
                                    75.9,
                                    31.27
                                ],
                                [
                                    104.07,
                                    14.19
                                ],
                                [
                                    131.53,
                                    -3.6
                                ],
                                [
                                    131.8719,
                                    -3.9085
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_437",
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
            "messageType": "Maritime--Resupply",
            "timestamp": "2022-09-23T09:21:49.682Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-440",
            "title": "Order item 444",
            "startDate": "2022-05-01T11:05:00.000Z",
            "endDate": "2022-05-01T17:05:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.12.85",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651403100000,
                            "endTime": 1651406100000,
                            "geomId": "Resupply-0",
                            "name": "f-red//3.1768988706171513//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    70.6627,
                                    -1.7799
                                ],
                                [
                                    52.09,
                                    7.63
                                ],
                                [
                                    34.33,
                                    17.86
                                ],
                                [
                                    15.86,
                                    27.36
                                ],
                                [
                                    -2.33,
                                    37.15
                                ],
                                [
                                    -1.9279,
                                    37.2722
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T14:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651415700000,
                            "geomId": "Resupply-1",
                            "name": "f-red//6.3537977412343025//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -5.305824755560522,
                                        39.819694419849384
                                    ],
                                    [
                                        -5.305824755560522,
                                        34.63509299696441
                                    ],
                                    [
                                        1.225118423965944,
                                        34.63509299696441
                                    ],
                                    [
                                        1.225118423965944,
                                        39.819694419849384
                                    ],
                                    [
                                        -5.305824755560522,
                                        39.819694419849384
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
                            "startDate": "2022-05-01T14:35:00.000Z",
                            "endDate": "2022-05-01T17:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651415700000,
                            "endTime": 1651424700000,
                            "geomId": "Resupply-2",
                            "name": "f-red//9.530696611851454//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -1.9279,
                                    37.2722
                                ],
                                [
                                    16.01,
                                    27.82
                                ],
                                [
                                    34.83,
                                    18.24
                                ],
                                [
                                    52.93,
                                    7.94
                                ],
                                [
                                    70.31,
                                    -2.06
                                ],
                                [
                                    70.6627,
                                    -1.7799
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_440",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-29T10:21:08.392Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-443",
            "title": "Order item 447",
            "startDate": "2022-05-01T11:05:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-red-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Red.7.35",
                    "number": 1
                },
                {
                    "asset": "Red.1.379",
                    "number": 0
                },
                {
                    "asset": "Red.12.85",
                    "number": 4
                },
                {
                    "asset": "Red.9.205",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T11:05:00.000Z",
                            "endDate": "2022-05-01T11:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651403100000,
                            "endTime": 1651406100000,
                            "geomId": "ISTAR-0",
                            "name": "f-red//2.3232978098094463//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    79.1354,
                                    25.6948
                                ],
                                [
                                    71.37,
                                    33.98
                                ],
                                [
                                    62.89,
                                    42.54
                                ],
                                [
                                    54.69,
                                    50.39
                                ],
                                [
                                    55.1545,
                                    50.3805
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413300000,
                            "geomId": "ISTAR-1",
                            "name": "f-red//4.646595619618893//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        52.56866672225713,
                                        51.946357908214736
                                    ],
                                    [
                                        52.56866672225713,
                                        48.76101980254821
                                    ],
                                    [
                                        57.572330739294,
                                        48.76101980254821
                                    ],
                                    [
                                        57.572330739294,
                                        51.946357908214736
                                    ],
                                    [
                                        52.56866672225713,
                                        51.946357908214736
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
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651406100000,
                            "endTime": 1651413300000,
                            "geomId": "ISTAR-2",
                            "name": "f-red//6.969893429428339//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        50.69996885657084,
                                        52.98043979185407
                                    ],
                                    [
                                        50.69996885657084,
                                        47.62843486809436
                                    ],
                                    [
                                        59.13332352979899,
                                        47.62843486809436
                                    ],
                                    [
                                        59.13332352979899,
                                        52.98043979185407
                                    ],
                                    [
                                        50.69996885657084,
                                        52.98043979185407
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
                            "startDate": "2022-05-01T13:55:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651413300000,
                            "endTime": 1651413900000,
                            "geomId": "ISTAR-3",
                            "name": "f-red//9.293191239237785//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.1545,
                                    50.3805
                                ],
                                [
                                    67.33,
                                    37.76
                                ],
                                [
                                    78.98,
                                    25.61
                                ],
                                [
                                    79.1354,
                                    25.6948
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_443",
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
            "messageType": "Land--Transit",
            "timestamp": "2022-09-23T09:04:27.893Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-446",
            "title": "Order item 450",
            "startDate": "2022-05-01T11:10:00.000Z",
            "endDate": "2022-05-01T12:00:00.000Z",
            "activity": "f-blue-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Blue.8.205",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T11:10:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651403400000,
                            "endTime": 1651406400000,
                            "geomId": "Transit-0",
                            "name": "f-blue//5.363117910921574//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    29.8277,
                                    67.2351
                                ],
                                [
                                    23.28,
                                    39.62
                                ],
                                [
                                    16.18,
                                    13.45
                                ],
                                [
                                    15.8325,
                                    12.9898
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_446",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-21T21:31:48.184Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-449",
            "title": "Order item 453",
            "startDate": "2022-05-01T11:10:00.000Z",
            "endDate": "2022-05-01T12:00:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.194",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T11:10:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651403400000,
                            "endTime": 1651406400000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.296359183266759//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.6461,
                                    0.9649
                                ],
                                [
                                    19.54,
                                    17.33
                                ],
                                [
                                    37.64,
                                    33.91
                                ],
                                [
                                    56.02,
                                    50.77
                                ],
                                [
                                    56.0324,
                                    51.0716
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_449",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T23:43:09.266Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-452",
            "title": "Order item 456",
            "startDate": "2022-05-01T11:10:00.000Z",
            "endDate": "2022-05-01T15:50:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.12.3",
                    "number": 1
                },
                {
                    "asset": "Green.11.165",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T11:10:00.000Z",
                            "endDate": "2022-05-01T12:00:00.000Z",
                            "force": "f-green",
                            "startTime": 1651403400000,
                            "endTime": 1651406400000,
                            "geomId": "Patrol-0",
                            "name": "f-green//3.123021626845002//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    12.2652,
                                    20.2774
                                ],
                                [
                                    25.21,
                                    27.34
                                ],
                                [
                                    38.63,
                                    33.88
                                ],
                                [
                                    38.9265,
                                    33.8711
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
                            "startDate": "2022-05-01T12:00:00.000Z",
                            "endDate": "2022-05-01T13:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651406400000,
                            "endTime": 1651410600000,
                            "geomId": "Patrol-1",
                            "name": "f-green//6.246043253690004//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.215641004878215,
                                        37.52016598148041
                                    ],
                                    [
                                        34.215641004878215,
                                        30.05774561636695
                                    ],
                                    [
                                        43.24261689023114,
                                        30.05774561636695
                                    ],
                                    [
                                        43.24261689023114,
                                        37.52016598148041
                                    ],
                                    [
                                        34.215641004878215,
                                        37.52016598148041
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
                            "startDate": "2022-05-01T13:10:00.000Z",
                            "endDate": "2022-05-01T15:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410600000,
                            "endTime": 1651420200000,
                            "geomId": "Patrol-2",
                            "name": "f-green//9.369064880535007//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    38.9265,
                                    33.8711
                                ],
                                [
                                    11.89,
                                    20.15
                                ],
                                [
                                    12.2652,
                                    20.2774
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_452",
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
            "timestamp": "2022-09-24T07:38:31.139Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-455",
            "title": "Order item 459",
            "startDate": "2022-05-01T11:25:00.000Z",
            "endDate": "2022-05-01T13:05:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.8.31",
                    "number": 1
                },
                {
                    "asset": "Blue.3.133",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T11:25:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651404300000,
                            "endTime": 1651407300000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//2.8431052323430777//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    30.32,
                                    54.3
                                ],
                                [
                                    58.11,
                                    48.6
                                ],
                                [
                                    86.19,
                                    42.19
                                ],
                                [
                                    86.4196,
                                    42.3049
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
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651407300000,
                            "endTime": 1651408500000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//5.686210464686155//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        83.07938373367479,
                                        44.63448429039222
                                    ],
                                    [
                                        83.07938373367479,
                                        39.88538863583777
                                    ],
                                    [
                                        89.51699526294053,
                                        39.88538863583777
                                    ],
                                    [
                                        89.51699526294053,
                                        44.63448429039222
                                    ],
                                    [
                                        83.07938373367479,
                                        44.63448429039222
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
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T12:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651407300000,
                            "endTime": 1651408500000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//8.529315697029233//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        86.04216608282438,
                                        42.58219037793585
                                    ],
                                    [
                                        86.04216608282438,
                                        42.02638282413883
                                    ],
                                    [
                                        86.79371640317237,
                                        42.02638282413883
                                    ],
                                    [
                                        86.79371640317237,
                                        42.58219037793585
                                    ],
                                    [
                                        86.04216608282438,
                                        42.58219037793585
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
                            "startDate": "2022-05-01T12:35:00.000Z",
                            "endDate": "2022-05-01T13:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651408500000,
                            "endTime": 1651410300000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//11.37242092937231//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    86.4196,
                                    42.3049
                                ],
                                [
                                    2.17,
                                    60.31
                                ],
                                [
                                    1.7498,
                                    60.2232
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_455",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-25T11:27:36.423Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-458",
            "title": "Order item 469",
            "startDate": "2022-05-01T11:25:00.000Z",
            "endDate": "2022-05-01T13:25:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.6.278",
                    "number": 1,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.10.321",
                    "number": 0,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.11.76",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.11.345",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 5
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Jet OWA UAV",
                    "number": 4
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "Propellor OWA UAV",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_458",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-28T08:41:17.255Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-461",
            "title": "Order item 465",
            "startDate": "2022-05-01T11:25:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-red-Maritime-Mine Clearance",
            "ownAssets": [
                {
                    "asset": "Red.7.345",
                    "number": 1
                },
                {
                    "asset": "Red.1.327",
                    "number": 3
                },
                {
                    "asset": "Red.2.23",
                    "number": 3
                },
                {
                    "asset": "Red.6.232",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Mine Clearance-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route out",
                            "startDate": "2022-05-01T11:25:00.000Z",
                            "endDate": "2022-05-01T12:15:00.000Z",
                            "force": "f-red",
                            "startTime": 1651404300000,
                            "endTime": 1651407300000,
                            "geomId": "Mine Clearance-0",
                            "name": "f-red//3.9635359663516283//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    83.0339,
                                    8.428
                                ],
                                [
                                    58.46,
                                    -2.86
                                ],
                                [
                                    58.5328,
                                    -2.4913
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Clearance-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Mine Clearance Area Area",
                            "startDate": "2022-05-01T12:15:00.000Z",
                            "endDate": "2022-05-01T12:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651407300000,
                            "endTime": 1651409700000,
                            "geomId": "Mine Clearance-1",
                            "name": "f-red//7.927071932703257//Mine Clearance Area Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        57.892352380224835,
                                        -1.8510310709269047
                                    ],
                                    [
                                        57.892352380224835,
                                        -3.131257744395712
                                    ],
                                    [
                                        59.173870558377814,
                                        -3.131257744395712
                                    ],
                                    [
                                        59.173870558377814,
                                        -1.8510310709269047
                                    ],
                                    [
                                        57.892352380224835,
                                        -1.8510310709269047
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Mine Clearance-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Mine Clearance//Route back",
                            "startDate": "2022-05-01T12:55:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651409700000,
                            "endTime": 1651420500000,
                            "geomId": "Mine Clearance-2",
                            "name": "f-red//11.890607899054885//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.5328,
                                    -2.4913
                                ],
                                [
                                    82.68,
                                    8.35
                                ],
                                [
                                    83.0339,
                                    8.428
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_461",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-24T17:48:41.499Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-464",
            "title": "Order item 468",
            "startDate": "2022-05-01T11:40:00.000Z",
            "endDate": "2022-05-01T12:30:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.10.232",
                    "number": 0
                },
                {
                    "asset": "Green.3.154",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T11:40:00.000Z",
                            "endDate": "2022-05-01T12:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651405200000,
                            "endTime": 1651408200000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.363883085548878//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    15.3978,
                                    28.1651
                                ],
                                [
                                    47.13,
                                    40.12
                                ],
                                [
                                    77.94,
                                    51.15
                                ],
                                [
                                    109.04,
                                    63.47
                                ],
                                [
                                    109.4429,
                                    63.1047
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_464",
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
            "messageType": "Cyber--AreaEffects",
            "timestamp": "2022-09-25T16:40:06.533Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-467",
            "title": "Order item 471",
            "startDate": "2022-05-01T11:55:00.000Z",
            "endDate": "2022-05-01T12:45:00.000Z",
            "activity": "f-blue-Cyber-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.12.337",
                    "number": 0
                },
                {
                    "asset": "Blue.8.199",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T11:55:00.000Z",
                            "endDate": "2022-05-01T12:45:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651406100000,
                            "endTime": 1651409100000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//5.657651366665959//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        95.29763971231885,
                                        58.24160648156795
                                    ],
                                    [
                                        95.29763971231885,
                                        55.65745809699665
                                    ],
                                    [
                                        100.04664459234989,
                                        55.65745809699665
                                    ],
                                    [
                                        100.04664459234989,
                                        58.24160648156795
                                    ],
                                    [
                                        95.29763971231885,
                                        58.24160648156795
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_467",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-24T15:34:58.974Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-470",
            "title": "Order item 477",
            "startDate": "2022-05-01T11:55:00.000Z",
            "endDate": "2022-05-01T13:25:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.12.263",
                    "number": 0,
                    "missileType": "Propellor OWA UAV"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 3
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Low Obs Cruise",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_470",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-24T15:34:58.974Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-473",
            "title": "Order item 477",
            "startDate": "2022-05-01T12:00:00.000Z",
            "endDate": "2022-05-01T12:50:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.9.8",
                    "number": 1
                },
                {
                    "asset": "Green.2.149",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T12:00:00.000Z",
                            "endDate": "2022-05-01T12:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651406400000,
                            "endTime": 1651409400000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.9254514519125223//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    25.3362,
                                    8.2507
                                ],
                                [
                                    48.73,
                                    44.76
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_473",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-22T15:38:26.380Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-476",
            "title": "Order item 480",
            "startDate": "2022-05-01T12:20:00.000Z",
            "endDate": "2022-05-01T16:20:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.10.372",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T12:20:00.000Z",
                            "endDate": "2022-05-01T13:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651407600000,
                            "endTime": 1651410600000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//4.899483246728778//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -6.9159,
                                    66.9968
                                ],
                                [
                                    20.8,
                                    55.72
                                ],
                                [
                                    49.49,
                                    44.42
                                ],
                                [
                                    77.46,
                                    32.39
                                ],
                                [
                                    104.71,
                                    20.66
                                ],
                                [
                                    105.205,
                                    21.0042
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
                            "startDate": "2022-05-01T13:10:00.000Z",
                            "endDate": "2022-05-01T15:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410600000,
                            "endTime": 1651420200000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//9.798966493457556//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        104.88289960569784,
                                        21.303987411799973
                                    ],
                                    [
                                        104.88289960569784,
                                        20.70380910591191
                                    ],
                                    [
                                        105.52580753664371,
                                        20.70380910591191
                                    ],
                                    [
                                        105.52580753664371,
                                        21.303987411799973
                                    ],
                                    [
                                        104.88289960569784,
                                        21.303987411799973
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
                            "startDate": "2022-05-01T15:50:00.000Z",
                            "endDate": "2022-05-01T16:20:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651420200000,
                            "endTime": 1651422000000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//14.698449740186334//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    105.205,
                                    21.0042
                                ],
                                [
                                    67.98,
                                    35.83
                                ],
                                [
                                    30.85,
                                    51.77
                                ],
                                [
                                    -6.98,
                                    66.98
                                ],
                                [
                                    -6.9159,
                                    66.9968
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_476",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-25T14:04:20.068Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-479",
            "title": "Order item 487",
            "startDate": "2022-05-01T12:20:00.000Z",
            "endDate": "2022-05-01T13:10:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.6.156",
                    "number": 4,
                    "missileType": "Jet OWA UAV"
                },
                {
                    "asset": "Green.6.177",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "IRBM",
                    "number": 5
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "Standard Cruise",
                    "number": 0
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_479",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-24T00:57:23.564Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-482",
            "title": "Order item 486",
            "startDate": "2022-05-01T12:25:00.000Z",
            "endDate": "2022-05-01T14:05:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.3.159",
                    "number": 1
                },
                {
                    "asset": "Green.6.120",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T12:25:00.000Z",
                            "endDate": "2022-05-01T13:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651407900000,
                            "endTime": 1651410900000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.527810350060463//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    58.7477,
                                    0.3181
                                ],
                                [
                                    53.57,
                                    22.49
                                ],
                                [
                                    48.85,
                                    44.1
                                ],
                                [
                                    48.85,
                                    44.3012
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
                            "startDate": "2022-05-01T13:15:00.000Z",
                            "endDate": "2022-05-01T13:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410900000,
                            "endTime": 1651412700000,
                            "geomId": "Patrol-1",
                            "name": "f-green//11.055620700120926//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        45.57976879194043,
                                        46.50648204488414
                                    ],
                                    [
                                        45.57976879194043,
                                        42.00946016961638
                                    ],
                                    [
                                        51.87898054912595,
                                        42.00946016961638
                                    ],
                                    [
                                        51.87898054912595,
                                        46.50648204488414
                                    ],
                                    [
                                        45.57976879194043,
                                        46.50648204488414
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
                            "startDate": "2022-05-01T13:45:00.000Z",
                            "endDate": "2022-05-01T14:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651412700000,
                            "endTime": 1651413900000,
                            "geomId": "Patrol-2",
                            "name": "f-green//16.58343105018139//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.85,
                                    44.3012
                                ],
                                [
                                    53.64,
                                    22.48
                                ],
                                [
                                    58.84,
                                    0.09
                                ],
                                [
                                    58.7477,
                                    0.3181
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_482",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-26T02:08:40.941Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-485",
            "title": "Order item 493",
            "startDate": "2022-05-01T12:45:00.000Z",
            "endDate": "2022-05-01T15:05:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.4.382",
                    "number": 0,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.2.282",
                    "number": 3,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.5.296",
                    "number": 0,
                    "missileType": "Standard Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Low Obs Cruise",
                    "number": 4
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_485",
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
            "messageType": "Maritime--ISTAR",
            "timestamp": "2022-09-27T01:12:23.910Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-488",
            "title": "Order item 492",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T16:40:00.000Z",
            "activity": "f-blue-Maritime-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.5.24",
                    "number": 4
                },
                {
                    "asset": "Blue.12.264",
                    "number": 5
                },
                {
                    "asset": "Blue.6.218",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.729822129011154//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    2.6402,
                                    44.3131
                                ],
                                [
                                    17.59,
                                    35.16
                                ],
                                [
                                    31.8,
                                    26.25
                                ],
                                [
                                    46.28,
                                    16.63
                                ],
                                [
                                    46.4742,
                                    16.8165
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T16:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651420800000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//13.459644258022308//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        43.28124960616041,
                                        19.796331656501152
                                    ],
                                    [
                                        43.28124960616041,
                                        13.788935504485643
                                    ],
                                    [
                                        49.56750741983554,
                                        13.788935504485643
                                    ],
                                    [
                                        49.56750741983554,
                                        19.796331656501152
                                    ],
                                    [
                                        43.28124960616041,
                                        19.796331656501152
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T16:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651420800000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//20.189466387033463//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        44.804776242941145,
                                        18.393930823759977
                                    ],
                                    [
                                        44.804776242941145,
                                        15.2258222376164
                                    ],
                                    [
                                        48.11595303032262,
                                        15.2258222376164
                                    ],
                                    [
                                        48.11595303032262,
                                        18.393930823759977
                                    ],
                                    [
                                        44.804776242941145,
                                        18.393930823759977
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
                            "startDate": "2022-05-01T16:00:00.000Z",
                            "endDate": "2022-05-01T16:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651420800000,
                            "endTime": 1651423200000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//26.919288516044617//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    46.4742,
                                    16.8165
                                ],
                                [
                                    31.52,
                                    25.7
                                ],
                                [
                                    16.8,
                                    34.83
                                ],
                                [
                                    2.36,
                                    44.24
                                ],
                                [
                                    2.6402,
                                    44.3131
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_488",
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
            "messageType": "f-blue--Air--MissileStrike",
            "timestamp": "2022-09-23T08:23:27.417Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-491",
            "title": "Order item 498",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T19:50:00.000Z",
            "activity": "f-blue-Air-Stand Off Strike",
            "ownAssets": [
                {
                    "asset": "Blue.5.285",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78",
                    "missileType": "Standard Cruise",
                    "number": 0
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "Low Obs Cruise",
                    "number": 1
                }
            ],
            "location": [
                {
                    "uniqid": "Stand Off Strike-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Stand Off Strike-0",
                            "name": "f-blue//3.5055185835808516//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -3.1709,
                                    55.1302
                                ],
                                [
                                    63.52,
                                    62.08
                                ],
                                [
                                    129.63,
                                    69.46
                                ],
                                [
                                    129.7639,
                                    69.4742
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Launch Location",
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651424400000,
                            "geomId": "Stand Off Strike-1",
                            "name": "f-blue//7.011037167161703//Launch Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        124.21778156221076,
                                        71.17980024053344
                                    ],
                                    [
                                        124.21778156221076,
                                        67.61888472272145
                                    ],
                                    [
                                        134.46071085301767,
                                        67.61888472272145
                                    ],
                                    [
                                        134.46071085301767,
                                        71.17980024053344
                                    ],
                                    [
                                        124.21778156221076,
                                        71.17980024053344
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Stand Off Strike-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Stand Off Strike//Route back",
                            "startDate": "2022-05-01T17:00:00.000Z",
                            "endDate": "2022-05-01T19:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651424400000,
                            "endTime": 1651434600000,
                            "geomId": "Stand Off Strike-2",
                            "name": "f-blue//10.516555750742555//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7639,
                                    69.4742
                                ],
                                [
                                    -3.1,
                                    54.68
                                ],
                                [
                                    -3.1709,
                                    55.1302
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_491",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-23T08:23:27.417Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-494",
            "title": "Order item 498",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T19:50:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.1.367",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//3.5055185835808516//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -3.1709,
                                    55.1302
                                ],
                                [
                                    63.52,
                                    62.08
                                ],
                                [
                                    129.63,
                                    69.46
                                ],
                                [
                                    129.7639,
                                    69.4742
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651424400000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//7.011037167161703//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        124.21778156221076,
                                        71.17980024053344
                                    ],
                                    [
                                        124.21778156221076,
                                        67.61888472272145
                                    ],
                                    [
                                        134.46071085301767,
                                        67.61888472272145
                                    ],
                                    [
                                        134.46071085301767,
                                        71.17980024053344
                                    ],
                                    [
                                        124.21778156221076,
                                        71.17980024053344
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
                            "startDate": "2022-05-01T17:00:00.000Z",
                            "endDate": "2022-05-01T19:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651424400000,
                            "endTime": 1651434600000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//10.516555750742555//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7639,
                                    69.4742
                                ],
                                [
                                    -3.1,
                                    54.68
                                ],
                                [
                                    -3.1709,
                                    55.1302
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_494",
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
            "messageType": "Land--Resupply",
            "timestamp": "2022-09-28T08:35:00.357Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-497",
            "title": "Order item 501",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T17:00:00.000Z",
            "activity": "f-blue-Land-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.8.267",
                    "number": 4
                },
                {
                    "asset": "Blue.1.327",
                    "number": 2
                },
                {
                    "asset": "Blue.8.101",
                    "number": 0
                },
                {
                    "asset": "Blue.3.387",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//2.7334985584020615//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.85,
                                    44.3012
                                ],
                                [
                                    64.48,
                                    35.16
                                ],
                                [
                                    79,
                                    26.9
                                ],
                                [
                                    94.81,
                                    17.93
                                ],
                                [
                                    109.9,
                                    9.24
                                ],
                                [
                                    109.675,
                                    9.1496
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T15:10:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413000000,
                            "endTime": 1651417800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//5.466997116804123//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        106.16493843853479,
                                        12.558863305206748
                                    ],
                                    [
                                        106.16493843853479,
                                        5.7072315916025245
                                    ],
                                    [
                                        113.11806290067113,
                                        5.7072315916025245
                                    ],
                                    [
                                        113.11806290067113,
                                        12.558863305206748
                                    ],
                                    [
                                        106.16493843853479,
                                        12.558863305206748
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
                            "startDate": "2022-05-01T15:10:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651417800000,
                            "endTime": 1651424400000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//8.200495675206184//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    109.675,
                                    9.1496
                                ],
                                [
                                    88.94,
                                    20.92
                                ],
                                [
                                    69.34,
                                    32.82
                                ],
                                [
                                    49.02,
                                    43.99
                                ],
                                [
                                    48.85,
                                    44.3012
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_497",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-29T14:30:34.087Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-500",
            "title": "Order item 504",
            "startDate": "2022-05-01T13:00:00.000Z",
            "endDate": "2022-05-01T15:10:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.2.387",
                    "number": 2
                },
                {
                    "asset": "Green.6.267",
                    "number": 5
                },
                {
                    "asset": "Green.3.100",
                    "number": 4
                },
                {
                    "asset": "Green.1.327",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T13:00:00.000Z",
                            "endDate": "2022-05-01T13:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410000000,
                            "endTime": 1651413000000,
                            "geomId": "Patrol-0",
                            "name": "f-green//5.854899713769555//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -19.3931,
                                    12.1242
                                ],
                                [
                                    109.83,
                                    63.32
                                ],
                                [
                                    109.4429,
                                    63.1047
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
                            "startDate": "2022-05-01T13:50:00.000Z",
                            "endDate": "2022-05-01T14:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651413000000,
                            "endTime": 1651414200000,
                            "geomId": "Patrol-1",
                            "name": "f-green//11.70979942753911//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        102.89118864744974,
                                        65.66220393626115
                                    ],
                                    [
                                        102.89118864744974,
                                        60.295132777118056
                                    ],
                                    [
                                        114.88803516391998,
                                        60.295132777118056
                                    ],
                                    [
                                        114.88803516391998,
                                        65.66220393626115
                                    ],
                                    [
                                        102.89118864744974,
                                        65.66220393626115
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
                            "startDate": "2022-05-01T14:10:00.000Z",
                            "endDate": "2022-05-01T15:10:00.000Z",
                            "force": "f-green",
                            "startTime": 1651414200000,
                            "endTime": 1651417800000,
                            "geomId": "Patrol-2",
                            "name": "f-green//17.564699141308665//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    109.4429,
                                    63.1047
                                ],
                                [
                                    45.22,
                                    37.69
                                ],
                                [
                                    -19.7,
                                    12.56
                                ],
                                [
                                    -19.3931,
                                    12.1242
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_500",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Transit",
            "timestamp": "2022-09-27T02:10:08.608Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-503",
            "title": "Order item 507",
            "startDate": "2022-05-01T13:05:00.000Z",
            "endDate": "2022-05-01T13:55:00.000Z",
            "activity": "f-green-Maritime-Transit",
            "ownAssets": [
                {
                    "asset": "Green.1.327",
                    "number": 0
                },
                {
                    "asset": "Green.10.266",
                    "number": 4
                },
                {
                    "asset": "Green.1.319",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T13:05:00.000Z",
                            "endDate": "2022-05-01T13:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651410300000,
                            "endTime": 1651413300000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.869722031056881//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.004,
                                    -1.9803
                                ],
                                [
                                    105.26,
                                    20.55
                                ],
                                [
                                    105.205,
                                    21.0042
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_503",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-29T03:33:43.920Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-506",
            "title": "Order item 510",
            "startDate": "2022-05-01T13:25:00.000Z",
            "endDate": "2022-05-01T14:15:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.8.86",
                    "number": 2
                },
                {
                    "asset": "Green.8.365",
                    "number": 5
                },
                {
                    "asset": "Green.1.358",
                    "number": 3
                },
                {
                    "asset": "Green.10.64",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T13:25:00.000Z",
                            "endDate": "2022-05-01T14:15:00.000Z",
                            "force": "f-green",
                            "startTime": 1651411500000,
                            "endTime": 1651414500000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.777965519577265//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    15.3978,
                                    28.1651
                                ],
                                [
                                    41.34,
                                    31.24
                                ],
                                [
                                    68.1,
                                    33.13
                                ],
                                [
                                    94.15,
                                    36.3
                                ],
                                [
                                    119.48,
                                    38.76
                                ],
                                [
                                    119.9716,
                                    38.8136
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_506",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-27T10:41:20.021Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-509",
            "title": "Order item 513",
            "startDate": "2022-05-01T13:40:00.000Z",
            "endDate": "2022-05-01T16:40:00.000Z",
            "activity": "f-blue-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Blue.1.64",
                    "number": 0
                },
                {
                    "asset": "Blue.3.283",
                    "number": 2
                },
                {
                    "asset": "Blue.3.216",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T13:40:00.000Z",
                            "endDate": "2022-05-01T14:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651412400000,
                            "endTime": 1651415400000,
                            "geomId": "Resupply-0",
                            "name": "f-blue//3.5796301793307066//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.8429,
                                    58.3229
                                ],
                                [
                                    -16.82,
                                    2.24
                                ],
                                [
                                    -16.8161,
                                    2.6929
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
                            "startDate": "2022-05-01T14:30:00.000Z",
                            "endDate": "2022-05-01T16:00:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651415400000,
                            "endTime": 1651420800000,
                            "geomId": "Resupply-1",
                            "name": "f-blue//7.159260358661413//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -17.023879203605368,
                                        2.9003953608817095
                                    ],
                                    [
                                        -17.023879203605368,
                                        2.485369288995706
                                    ],
                                    [
                                        -16.608391574566415,
                                        2.485369288995706
                                    ],
                                    [
                                        -16.608391574566415,
                                        2.9003953608817095
                                    ],
                                    [
                                        -17.023879203605368,
                                        2.9003953608817095
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
                            "startDate": "2022-05-01T16:00:00.000Z",
                            "endDate": "2022-05-01T16:40:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651420800000,
                            "endTime": 1651423200000,
                            "geomId": "Resupply-2",
                            "name": "f-blue//10.73889053799212//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -16.8161,
                                    2.6929
                                ],
                                [
                                    48.4,
                                    58.08
                                ],
                                [
                                    48.8429,
                                    58.3229
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_509",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-21T23:32:56.914Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-512",
            "title": "Order item 516",
            "startDate": "2022-05-01T13:40:00.000Z",
            "endDate": "2022-05-01T14:30:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.9.262",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T13:40:00.000Z",
                            "endDate": "2022-05-01T14:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651412400000,
                            "endTime": 1651415400000,
                            "geomId": "Transit-0",
                            "name": "f-green//2.2747160103172064//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    55.9288,
                                    11.076
                                ],
                                [
                                    88.97,
                                    40.77
                                ],
                                [
                                    122.4,
                                    69.85
                                ],
                                [
                                    122.1194,
                                    70.2085
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_512",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Maritime--MissileStrike",
            "timestamp": "2022-09-26T14:29:32.264Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-515",
            "title": "Order item 526",
            "startDate": "2022-05-01T13:45:00.000Z",
            "endDate": "2022-05-01T14:15:00.000Z",
            "activity": "f-green-Maritime-Strike",
            "ownAssets": [
                {
                    "asset": "Green.12.279",
                    "number": 0,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "Green.1.378",
                    "number": 3,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.12.191",
                    "number": 5,
                    "missileType": "Propellor OWA UAV"
                },
                {
                    "asset": "Green.1.116",
                    "number": 4,
                    "missileType": "Low Obs Cruise"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Standard Cruise",
                    "number": 2
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "IRBM",
                    "number": 3
                },
                {
                    "asset": "Blue.11.50",
                    "missileType": "IRBM",
                    "number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_515",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-24T18:28:13.070Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-518",
            "title": "Order item 522",
            "startDate": "2022-05-01T14:05:00.000Z",
            "endDate": "2022-05-01T15:35:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.6.116",
                    "number": 2
                },
                {
                    "asset": "Blue.8.155",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T14:05:00.000Z",
                            "endDate": "2022-05-01T14:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651413900000,
                            "endTime": 1651416900000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//6.345151167362928//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    42.0758,
                                    37.8488
                                ],
                                [
                                    23.94,
                                    18.24
                                ],
                                [
                                    5.13,
                                    -1.04
                                ],
                                [
                                    4.873,
                                    -0.857
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
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651416900000,
                            "endTime": 1651419300000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//12.690302334725857//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        2.001182715785622,
                                        2.0141185144661473
                                    ],
                                    [
                                        2.001182715785622,
                                        -3.7259630316872285
                                    ],
                                    [
                                        7.749126019453577,
                                        -3.7259630316872285
                                    ],
                                    [
                                        7.749126019453577,
                                        2.0141185144661473
                                    ],
                                    [
                                        2.001182715785622,
                                        2.0141185144661473
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
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651416900000,
                            "endTime": 1651419300000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//19.035453502088785//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        3.9919217123110076,
                                        0.024179544611184284
                                    ],
                                    [
                                        3.9919217123110076,
                                        -1.7379768272072897
                                    ],
                                    [
                                        5.754483743861469,
                                        -1.7379768272072897
                                    ],
                                    [
                                        5.754483743861469,
                                        0.024179544611184284
                                    ],
                                    [
                                        3.9919217123110076,
                                        0.024179544611184284
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
                            "startDate": "2022-05-01T15:35:00.000Z",
                            "endDate": "2022-05-01T15:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651419300000,
                            "endTime": 1651419300000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//25.380604669451714//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    4.873,
                                    -0.857
                                ],
                                [
                                    23.74,
                                    18.04
                                ],
                                [
                                    42.12,
                                    37.46
                                ],
                                [
                                    42.0758,
                                    37.8488
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_518",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-24T16:31:52.334Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-521",
            "title": "Order item 525",
            "startDate": "2022-05-01T14:05:00.000Z",
            "endDate": "2022-05-01T14:55:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.4.172",
                    "number": 5
                },
                {
                    "asset": "Green.9.151",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T14:05:00.000Z",
                            "endDate": "2022-05-01T14:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651413900000,
                            "endTime": 1651416900000,
                            "geomId": "Transit-0",
                            "name": "f-green//6.720500502735376//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    3.5468,
                                    26.6941
                                ],
                                [
                                    42.08,
                                    35.25
                                ],
                                [
                                    42.5642,
                                    35.0817
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_521",
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
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-29T04:19:32.388Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-524",
            "title": "Order item 528",
            "startDate": "2022-05-01T14:10:00.000Z",
            "endDate": "2022-05-01T16:40:00.000Z",
            "activity": "f-red-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Red.9.48",
                    "number": 5
                },
                {
                    "asset": "Red.9.367",
                    "number": 5
                },
                {
                    "asset": "Red.1.398",
                    "number": 1
                },
                {
                    "asset": "Red.12.143",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T14:10:00.000Z",
                            "endDate": "2022-05-01T15:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651414200000,
                            "endTime": 1651417200000,
                            "geomId": "Patrol-0",
                            "name": "f-red//5.989271009340882//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    107.2321,
                                    34.7419
                                ],
                                [
                                    73.49,
                                    42.63
                                ],
                                [
                                    40.02,
                                    49.8
                                ],
                                [
                                    5.84,
                                    57.25
                                ],
                                [
                                    6.0923,
                                    57.453
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
                            "startDate": "2022-05-01T15:00:00.000Z",
                            "endDate": "2022-05-01T16:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651417200000,
                            "endTime": 1651422600000,
                            "geomId": "Patrol-1",
                            "name": "f-red//11.978542018681765//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -2.225399290238209,
                                        61.203532491646385
                                    ],
                                    [
                                        -2.225399290238209,
                                        53.25998535012357
                                    ],
                                    [
                                        12.781970475426794,
                                        53.25998535012357
                                    ],
                                    [
                                        12.781970475426794,
                                        61.203532491646385
                                    ],
                                    [
                                        -2.225399290238209,
                                        61.203532491646385
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
                            "startDate": "2022-05-01T16:30:00.000Z",
                            "endDate": "2022-05-01T16:40:00.000Z",
                            "force": "f-red",
                            "startTime": 1651422600000,
                            "endTime": 1651423200000,
                            "geomId": "Patrol-2",
                            "name": "f-red//17.967813028022647//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    6.0923,
                                    57.453
                                ],
                                [
                                    40.3,
                                    49.68
                                ],
                                [
                                    73.79,
                                    42.18
                                ],
                                [
                                    107.56,
                                    34.97
                                ],
                                [
                                    107.2321,
                                    34.7419
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_524",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-26T21:06:54.869Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-527",
            "title": "Order item 534",
            "startDate": "2022-05-01T14:25:00.000Z",
            "endDate": "2022-05-01T16:15:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.2.143",
                    "number": 2,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Jet OWA UAV",
                    "number": 5
                },
                {
                    "asset": "Red.5.351",
                    "missileType": "IRBM",
                    "number": 3
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_527",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-26T21:06:54.869Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-530",
            "title": "Order item 534",
            "startDate": "2022-05-01T14:40:00.000Z",
            "endDate": "2022-05-01T15:30:00.000Z",
            "activity": "f-blue-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Blue.12.58",
                    "number": 3
                },
                {
                    "asset": "Blue.9.256",
                    "number": 3
                },
                {
                    "asset": "Blue.8.168",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Red.10.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T14:40:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651416000000,
                            "endTime": 1651419000000,
                            "geomId": "Area Activity-0",
                            "name": "f-blue//6.207075526937842//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        119.1690408843725,
                                        22.70568843877314
                                    ],
                                    [
                                        119.1690408843725,
                                        17.039056223894704
                                    ],
                                    [
                                        125.20508330441064,
                                        17.039056223894704
                                    ],
                                    [
                                        125.20508330441064,
                                        22.70568843877314
                                    ],
                                    [
                                        119.1690408843725,
                                        22.70568843877314
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_530",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-28T10:06:37.295Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-533",
            "title": "Order item 537",
            "startDate": "2022-05-01T14:40:00.000Z",
            "endDate": "2022-05-01T15:50:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.5.192",
                    "number": 4
                },
                {
                    "asset": "Green.8.330",
                    "number": 3
                },
                {
                    "asset": "Green.5.181",
                    "number": 5
                },
                {
                    "asset": "Green.7.146",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T14:40:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651416000000,
                            "endTime": 1651419000000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//2.1561095379292965//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    22.5078,
                                    20.4081
                                ],
                                [
                                    93.72,
                                    7.68
                                ],
                                [
                                    93.9771,
                                    7.6827
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T15:40:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651419600000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//4.312219075858593//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        90.30704492778021,
                                        11.26649952000075
                                    ],
                                    [
                                        90.30704492778021,
                                        4.068287887286769
                                    ],
                                    [
                                        97.58543984007406,
                                        4.068287887286769
                                    ],
                                    [
                                        97.58543984007406,
                                        11.26649952000075
                                    ],
                                    [
                                        90.30704492778021,
                                        11.26649952000075
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T15:40:00.000Z",
                            "endDate": "2022-05-01T15:50:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419600000,
                            "endTime": 1651420200000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//6.4683286137878895//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    93.9771,
                                    7.6827
                                ],
                                [
                                    70.32,
                                    12.41
                                ],
                                [
                                    46.76,
                                    16.24
                                ],
                                [
                                    22.48,
                                    20.35
                                ],
                                [
                                    22.5078,
                                    20.4081
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_533",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Maritime--Patrol",
            "timestamp": "2022-09-26T04:50:20.511Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-536",
            "title": "Order item 540",
            "startDate": "2022-05-01T14:40:00.000Z",
            "endDate": "2022-05-01T17:20:00.000Z",
            "activity": "f-green-Maritime-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.7.146",
                    "number": 1
                },
                {
                    "asset": "Green.11.224",
                    "number": 3
                },
                {
                    "asset": "Green.12.15",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T14:40:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651416000000,
                            "endTime": 1651419000000,
                            "geomId": "Patrol-0",
                            "name": "f-green//6.998564720153809//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -0.7267,
                                    19.325
                                ],
                                [
                                    52.31,
                                    7.34
                                ],
                                [
                                    104.87,
                                    -5.1
                                ],
                                [
                                    104.5546,
                                    -5.4254
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
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T15:30:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651419000000,
                            "geomId": "Patrol-1",
                            "name": "f-green//13.997129440307617//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        103.54199570194527,
                                        -4.414957092803186
                                    ],
                                    [
                                        103.54199570194527,
                                        -6.434152817166107
                                    ],
                                    [
                                        105.57059941819564,
                                        -6.434152817166107
                                    ],
                                    [
                                        105.57059941819564,
                                        -4.414957092803186
                                    ],
                                    [
                                        103.54199570194527,
                                        -4.414957092803186
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
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T17:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651425600000,
                            "geomId": "Patrol-2",
                            "name": "f-green//20.995694160461426//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    104.5546,
                                    -5.4254
                                ],
                                [
                                    -0.63,
                                    18.93
                                ],
                                [
                                    -0.7267,
                                    19.325
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_536",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-28T13:18:04.519Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-539",
            "title": "Order item 543",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T17:15:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.3.319",
                    "number": 4
                },
                {
                    "asset": "Blue.12.337",
                    "number": 2
                },
                {
                    "asset": "Blue.5.67",
                    "number": 0
                },
                {
                    "asset": "Blue.4.312",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_539",
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
            "messageType": "Air--Activity",
            "timestamp": "2022-09-27T03:29:49.316Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-542",
            "title": "Order item 546",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T18:35:00.000Z",
            "activity": "f-red-Air-Defensive Counter Air",
            "ownAssets": [
                {
                    "asset": "Red.8.312",
                    "number": 2
                },
                {
                    "asset": "Red.2.269",
                    "number": 1
                },
                {
                    "asset": "Red.10.340",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Defensive Counter Air-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route out",
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651416900000,
                            "endTime": 1651419900000,
                            "geomId": "Defensive Counter Air-0",
                            "name": "f-red//3.3637385983020067//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.9716,
                                    38.8136
                                ],
                                [
                                    88.62,
                                    35.46
                                ],
                                [
                                    57.27,
                                    33.11
                                ],
                                [
                                    25.2,
                                    30.04
                                ],
                                [
                                    -5.57,
                                    26.26
                                ],
                                [
                                    -5.9347,
                                    26.5316
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Defensive Counter Air-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//DCA Area",
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T16:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651419900000,
                            "endTime": 1651424100000,
                            "geomId": "Defensive Counter Air-1",
                            "name": "f-red//6.727477196604013//DCA Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -10.035919081110602,
                                        30.024858574451496
                                    ],
                                    [
                                        -10.035919081110602,
                                        22.928050751148515
                                    ],
                                    [
                                        -2.0796111265750334,
                                        22.928050751148515
                                    ],
                                    [
                                        -2.0796111265750334,
                                        30.024858574451496
                                    ],
                                    [
                                        -10.035919081110602,
                                        30.024858574451496
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Defensive Counter Air-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Defensive Counter Air//Route back",
                            "startDate": "2022-05-01T16:55:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651424100000,
                            "endTime": 1651430100000,
                            "geomId": "Defensive Counter Air-2",
                            "name": "f-red//10.09121579490602//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    25.99,
                                    29.13
                                ],
                                [
                                    56.85,
                                    32.67
                                ],
                                [
                                    87.99,
                                    35.49
                                ],
                                [
                                    120.42,
                                    38.59
                                ],
                                [
                                    119.9716,
                                    38.8136
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_542",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-21T23:25:34.904Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-545",
            "title": "Order item 549",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T17:25:00.000Z",
            "activity": "f-red-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Red.4.124",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_545",
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
            "messageType": "Air--Resupply",
            "timestamp": "2022-09-29T17:05:21.283Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-548",
            "title": "Order item 552",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T18:55:00.000Z",
            "activity": "f-red-Air-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.8.155",
                    "number": 5
                },
                {
                    "asset": "Red.1.392",
                    "number": 4
                },
                {
                    "asset": "Red.1.342",
                    "number": 4
                },
                {
                    "asset": "Red.10.6",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-red",
                            "startTime": 1651416900000,
                            "endTime": 1651419900000,
                            "geomId": "Resupply-0",
                            "name": "f-red//5.302597142755985//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    85.5999,
                                    -2.1256
                                ],
                                [
                                    34.29,
                                    60.65
                                ],
                                [
                                    34.6069,
                                    61.0041
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
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-red",
                            "startTime": 1651419900000,
                            "endTime": 1651430100000,
                            "geomId": "Resupply-1",
                            "name": "f-red//10.60519428551197//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        27.247745126124457,
                                        64.03764395345901
                                    ],
                                    [
                                        27.247745126124457,
                                        57.64171028467038
                                    ],
                                    [
                                        40.620873927622,
                                        57.64171028467038
                                    ],
                                    [
                                        40.620873927622,
                                        64.03764395345901
                                    ],
                                    [
                                        27.247745126124457,
                                        64.03764395345901
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
                            "startDate": "2022-05-01T18:35:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651430100000,
                            "endTime": 1651431300000,
                            "geomId": "Resupply-2",
                            "name": "f-red//15.907791428267956//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    34.6069,
                                    61.0041
                                ],
                                [
                                    46.9,
                                    44.94
                                ],
                                [
                                    59.98,
                                    29.67
                                ],
                                [
                                    72.35,
                                    13.69
                                ],
                                [
                                    86,
                                    -2.01
                                ],
                                [
                                    85.5999,
                                    -2.1256
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_548",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Activity",
            "timestamp": "2022-09-25T08:29:08.452Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-551",
            "title": "Order item 555",
            "startDate": "2022-05-01T14:55:00.000Z",
            "endDate": "2022-05-01T17:05:00.000Z",
            "activity": "f-green-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Green.10.6",
                    "number": 0
                },
                {
                    "asset": "Green.7.183",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T14:55:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651416900000,
                            "endTime": 1651419900000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-green//4.6121581718325615//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -7.3539,
                                    25.067
                                ],
                                [
                                    40.09,
                                    8
                                ],
                                [
                                    86.96,
                                    -7.62
                                ],
                                [
                                    86.6046,
                                    -8.1088
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T15:45:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419900000,
                            "endTime": 1651419900000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-green//9.224316343665123//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        84.89459674904812,
                                        -6.405898208428025
                                    ],
                                    [
                                        84.89459674904812,
                                        -9.804515036809573
                                    ],
                                    [
                                        88.3291185280012,
                                        -9.804515036809573
                                    ],
                                    [
                                        88.3291185280012,
                                        -6.405898208428025
                                    ],
                                    [
                                        84.89459674904812,
                                        -6.405898208428025
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T15:45:00.000Z",
                            "endDate": "2022-05-01T17:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419900000,
                            "endTime": 1651424700000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-green//13.836474515497684//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    86.6046,
                                    -8.1088
                                ],
                                [
                                    39.54,
                                    8.56
                                ],
                                [
                                    -7.08,
                                    24.65
                                ],
                                [
                                    -7.3539,
                                    25.067
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_551",
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
            "messageType": "SOF--SOFActivity",
            "timestamp": "2022-09-25T13:36:56.412Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-554",
            "title": "Order item 558",
            "startDate": "2022-05-01T15:05:00.000Z",
            "endDate": "2022-05-01T20:05:00.000Z",
            "activity": "f-red-SOF-Activity",
            "ownAssets": [
                {
                    "asset": "Red.11.77",
                    "number": 2
                },
                {
                    "asset": "Red.7.193",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route out",
                            "startDate": "2022-05-01T15:05:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651417500000,
                            "endTime": 1651420500000,
                            "geomId": "Activity-0",
                            "name": "f-red//2.8151403721421957//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    113.8022,
                                    32.3971
                                ],
                                [
                                    94.47,
                                    33.14
                                ],
                                [
                                    75.15,
                                    33.88
                                ],
                                [
                                    56.1,
                                    34.9
                                ],
                                [
                                    36.34,
                                    36.21
                                ],
                                [
                                    36.2378,
                                    36.2315
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Effect Location",
                            "startDate": "2022-05-01T15:55:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651420500000,
                            "endTime": 1651431300000,
                            "geomId": "Activity-1",
                            "name": "f-red//5.630280744284391//Effect Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.88668904164936,
                                        37.298762999189975
                                    ],
                                    [
                                        34.88668904164936,
                                        35.149458054269864
                                    ],
                                    [
                                        37.552275944722,
                                        35.149458054269864
                                    ],
                                    [
                                        37.552275944722,
                                        37.298762999189975
                                    ],
                                    [
                                        34.88668904164936,
                                        37.298762999189975
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Activity-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Activity//Route back",
                            "startDate": "2022-05-01T18:55:00.000Z",
                            "endDate": "2022-05-01T20:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651431300000,
                            "endTime": 1651435500000,
                            "geomId": "Activity-2",
                            "name": "f-red//8.445421116426587//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    36.2378,
                                    36.2315
                                ],
                                [
                                    61.72,
                                    34.8
                                ],
                                [
                                    88.39,
                                    33.55
                                ],
                                [
                                    113.34,
                                    32.59
                                ],
                                [
                                    113.8022,
                                    32.3971
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_554",
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
            "messageType": "Maritime--Activity",
            "timestamp": "2022-09-22T00:28:45.162Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-557",
            "title": "Order item 561",
            "startDate": "2022-05-01T15:05:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-red-Maritime-Sea Denial",
            "ownAssets": [
                {
                    "asset": "Red.6.366",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Sea Denial-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Sea Denial//Area",
                            "startDate": "2022-05-01T15:05:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651417500000,
                            "endTime": 1651420500000,
                            "geomId": "Sea Denial-0",
                            "name": "f-red//4.911543734371662//Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -9.014820859654773,
                                        67.77709857897023
                                    ],
                                    [
                                        -9.014820859654773,
                                        66.19057907005173
                                    ],
                                    [
                                        -4.94953568841155,
                                        66.19057907005173
                                    ],
                                    [
                                        -4.94953568841155,
                                        67.77709857897023
                                    ],
                                    [
                                        -9.014820859654773,
                                        67.77709857897023
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_557",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Transit",
            "timestamp": "2022-09-23T01:04:34.703Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-560",
            "title": "Order item 564",
            "startDate": "2022-05-01T15:05:00.000Z",
            "endDate": "2022-05-01T15:55:00.000Z",
            "activity": "f-green-Land-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.76",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T15:05:00.000Z",
                            "endDate": "2022-05-01T15:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651417500000,
                            "endTime": 1651420500000,
                            "geomId": "Transit-0",
                            "name": "f-green//5.901368277147412//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    47.8344,
                                    7.0962
                                ],
                                [
                                    47.79,
                                    23.94
                                ],
                                [
                                    48.97,
                                    41.02
                                ],
                                [
                                    48.44,
                                    58.38
                                ],
                                [
                                    48.8429,
                                    58.3229
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_560",
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
            "messageType": "Land--ISTAR",
            "timestamp": "2022-09-28T15:24:25.034Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-563",
            "title": "Order item 567",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T20:15:00.000Z",
            "activity": "f-blue-Land-ISTAR",
            "ownAssets": [
                {
                    "asset": "Blue.5.5",
                    "number": 4
                },
                {
                    "asset": "Blue.7.341",
                    "number": 3
                },
                {
                    "asset": "Blue.4.390",
                    "number": 1
                },
                {
                    "asset": "Blue.11.153",
                    "number": 4
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "ISTAR-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "ISTAR//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "ISTAR-0",
                            "name": "f-blue//5.784613981842995//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    76.54,
                                    19.36
                                ],
                                [
                                    76.0625,
                                    19.3411
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651421100000,
                            "endTime": 1651430100000,
                            "geomId": "ISTAR-1",
                            "name": "f-blue//11.56922796368599//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        72.15043326536062,
                                        22.903511758584163
                                    ],
                                    [
                                        72.15043326536062,
                                        15.698833157441667
                                    ],
                                    [
                                        79.80553411066819,
                                        15.698833157441667
                                    ],
                                    [
                                        79.80553411066819,
                                        22.903511758584163
                                    ],
                                    [
                                        72.15043326536062,
                                        22.903511758584163
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T18:35:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651421100000,
                            "endTime": 1651430100000,
                            "geomId": "ISTAR-2",
                            "name": "f-blue//17.353841945528984//Observation Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        75.28318366499342,
                                        20.07143345973979
                                    ],
                                    [
                                        75.28318366499342,
                                        18.607483639263428
                                    ],
                                    [
                                        76.83485820853501,
                                        18.607483639263428
                                    ],
                                    [
                                        76.83485820853501,
                                        20.07143345973979
                                    ],
                                    [
                                        75.28318366499342,
                                        20.07143345973979
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
                            "startDate": "2022-05-01T18:35:00.000Z",
                            "endDate": "2022-05-01T20:15:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651430100000,
                            "endTime": 1651436100000,
                            "geomId": "ISTAR-3",
                            "name": "f-blue//23.13845592737198//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    76.0625,
                                    19.3411
                                ],
                                [
                                    51.01,
                                    32.56
                                ],
                                [
                                    26.23,
                                    47.05
                                ],
                                [
                                    1.73,
                                    59.83
                                ],
                                [
                                    1.7498,
                                    60.2232
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_563",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-22T03:28:16.156Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-566",
            "title": "Order item 570",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T20:05:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.6.153",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                },
                {
                    "asset": "Blue.11.50"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "Patrol-0",
                            "name": "f-green//4.561280857771635//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    10.8677,
                                    30.5608
                                ],
                                [
                                    32.97,
                                    32.81
                                ],
                                [
                                    56.32,
                                    35.31
                                ],
                                [
                                    78.96,
                                    38.09
                                ],
                                [
                                    78.6237,
                                    37.8206
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T16:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651421100000,
                            "endTime": 1651424100000,
                            "geomId": "Patrol-1",
                            "name": "f-green//9.12256171554327//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        73.26902699926563,
                                        41.701206428458384
                                    ],
                                    [
                                        73.26902699926563,
                                        33.72228193996869
                                    ],
                                    [
                                        83.42905179908965,
                                        33.72228193996869
                                    ],
                                    [
                                        83.42905179908965,
                                        41.701206428458384
                                    ],
                                    [
                                        73.26902699926563,
                                        41.701206428458384
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
                            "startDate": "2022-05-01T16:55:00.000Z",
                            "endDate": "2022-05-01T20:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651424100000,
                            "endTime": 1651435500000,
                            "geomId": "Patrol-2",
                            "name": "f-green//13.683842573314905//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.6237,
                                    37.8206
                                ],
                                [
                                    10.43,
                                    30.46
                                ],
                                [
                                    10.8677,
                                    30.5608
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_566",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-28T13:16:08.068Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-569",
            "title": "Order item 573",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T17:45:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.11.121",
                    "number": 2
                },
                {
                    "asset": "Blue.12.337",
                    "number": 5
                },
                {
                    "asset": "Blue.3.266",
                    "number": 5
                },
                {
                    "asset": "Blue.10.308",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_569",
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
            "messageType": "Land--Activity",
            "timestamp": "2022-09-22T20:48:00.771Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-572",
            "title": "Order item 576",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T22:05:00.000Z",
            "activity": "f-red-Land-Land Close Combat",
            "ownAssets": [
                {
                    "asset": "Red.7.308",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Land Close Combat-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "Land Close Combat-0",
                            "name": "f-red//3.794878114014864//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.659,
                                    6.4886
                                ],
                                [
                                    60.57,
                                    16.27
                                ],
                                [
                                    -6.07,
                                    26.5
                                ],
                                [
                                    -5.9347,
                                    26.5316
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Combat Location",
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-red",
                            "startTime": 1651421100000,
                            "endTime": 1651431300000,
                            "geomId": "Land Close Combat-1",
                            "name": "f-red//7.589756228029728//Combat Location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -7.784270818643676,
                                        28.150562198784375
                                    ],
                                    [
                                        -7.784270818643676,
                                        24.889444515632835
                                    ],
                                    [
                                        -4.136957450947561,
                                        24.889444515632835
                                    ],
                                    [
                                        -4.136957450947561,
                                        28.150562198784375
                                    ],
                                    [
                                        -7.784270818643676,
                                        28.150562198784375
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "Land Close Combat-2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Land Close Combat//Route back",
                            "startDate": "2022-05-01T18:55:00.000Z",
                            "endDate": "2022-05-01T22:05:00.000Z",
                            "force": "f-red",
                            "startTime": 1651431300000,
                            "endTime": 1651442700000,
                            "geomId": "Land Close Combat-2",
                            "name": "f-red//11.384634342044592//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -5.9347,
                                    26.5316
                                ],
                                [
                                    126.8,
                                    6.82
                                ],
                                [
                                    126.659,
                                    6.4886
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_572",
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
            "messageType": "Cyber--Effects",
            "timestamp": "2022-09-21T18:03:54.264Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-575",
            "title": "Order item 579",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T17:35:00.000Z",
            "activity": "f-blue-Cyber-Targeted Activity",
            "ownAssets": [
                {
                    "asset": "Blue.3.315",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_575",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Land--Patrol",
            "timestamp": "2022-09-25T05:03:48.548Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-578",
            "title": "Order item 582",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T19:05:00.000Z",
            "activity": "f-green-Land-Patrol",
            "ownAssets": [
                {
                    "asset": "Green.4.141",
                    "number": 2
                },
                {
                    "asset": "Green.11.176",
                    "number": 5
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Patrol-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Patrol//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "Patrol-0",
                            "name": "f-green//3.602160055190325//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.6461,
                                    0.9649
                                ],
                                [
                                    17.85,
                                    19.94
                                ],
                                [
                                    33.31,
                                    39.18
                                ],
                                [
                                    49.06,
                                    58.7
                                ],
                                [
                                    48.8429,
                                    58.3229
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T17:55:00.000Z",
                            "force": "f-green",
                            "startTime": 1651421100000,
                            "endTime": 1651427700000,
                            "geomId": "Patrol-1",
                            "name": "f-green//7.20432011038065//Patrol Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        46.5177117501403,
                                        59.48298629801334
                                    ],
                                    [
                                        46.5177117501403,
                                        57.12335016281206
                                    ],
                                    [
                                        51.01793038323904,
                                        57.12335016281206
                                    ],
                                    [
                                        51.01793038323904,
                                        59.48298629801334
                                    ],
                                    [
                                        46.5177117501403,
                                        59.48298629801334
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
                            "startDate": "2022-05-01T17:55:00.000Z",
                            "endDate": "2022-05-01T19:05:00.000Z",
                            "force": "f-green",
                            "startTime": 1651427700000,
                            "endTime": 1651431900000,
                            "geomId": "Patrol-2",
                            "name": "f-green//10.806480165570974//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.8429,
                                    58.3229
                                ],
                                [
                                    1.79,
                                    1.29
                                ],
                                [
                                    1.6461,
                                    0.9649
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_578",
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
            "messageType": "Land--EWAttack",
            "timestamp": "2022-09-24T21:47:43.623Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Blue-581",
            "title": "Order item 585",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T18:55:00.000Z",
            "activity": "f-blue-Land-EW Attack",
            "ownAssets": [
                {
                    "asset": "Blue.12.186",
                    "number": 5
                },
                {
                    "asset": "Blue.8.162",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78"
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T15:15:00.000Z",
                            "endDate": "2022-05-01T16:05:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651418100000,
                            "endTime": 1651421100000,
                            "geomId": "EW Attack-0",
                            "name": "f-blue//6.845932777971029//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    1.7498,
                                    60.2232
                                ],
                                [
                                    78.35,
                                    37.72
                                ],
                                [
                                    78.6237,
                                    37.8206
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
                            "startDate": "2022-05-01T16:05:00.000Z",
                            "endDate": "2022-05-01T17:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651421100000,
                            "endTime": 1651427700000,
                            "geomId": "EW Attack-1",
                            "name": "f-blue//13.691865555942059//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        76.68381877730447,
                                        39.30593054382421
                                    ],
                                    [
                                        76.68381877730447,
                                        36.30472006106523
                                    ],
                                    [
                                        80.48627186790318,
                                        36.30472006106523
                                    ],
                                    [
                                        80.48627186790318,
                                        39.30593054382421
                                    ],
                                    [
                                        76.68381877730447,
                                        39.30593054382421
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
                            "startDate": "2022-05-01T17:55:00.000Z",
                            "endDate": "2022-05-01T18:55:00.000Z",
                            "force": "f-blue",
                            "startTime": 1651427700000,
                            "endTime": 1651431300000,
                            "geomId": "EW Attack-2",
                            "name": "f-blue//20.537798333913088//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    78.6237,
                                    37.8206
                                ],
                                [
                                    59.83,
                                    43.88
                                ],
                                [
                                    40.02,
                                    48.92
                                ],
                                [
                                    20.49,
                                    54.25
                                ],
                                [
                                    1.25,
                                    59.85
                                ],
                                [
                                    1.7498,
                                    60.2232
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-blue_581",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "f-green--Land--MissileStrike",
            "timestamp": "2022-09-22T09:06:41.019Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-584",
            "title": "Order item 593",
            "startDate": "2022-05-01T15:15:00.000Z",
            "endDate": "2022-05-01T16:55:00.000Z",
            "activity": "f-green-Land-Strike",
            "ownAssets": [
                {
                    "asset": "Green.3.52",
                    "number": 0,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.10.367",
                    "number": 1,
                    "missileType": "IRBM"
                },
                {
                    "asset": "Green.6.395",
                    "number": 2,
                    "missileType": "Low Obs Cruise"
                },
                {
                    "asset": "Green.12.136",
                    "number": 1,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "Jet OWA UAV",
                    "number": 5
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_584",
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
            "messageType": "Maritime--Resupply",
            "timestamp": "2022-09-29T16:27:36.143Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-587",
            "title": "Order item 591",
            "startDate": "2022-05-01T15:20:00.000Z",
            "endDate": "2022-05-01T17:20:00.000Z",
            "activity": "f-red-Maritime-Resupply",
            "ownAssets": [
                {
                    "asset": "Red.4.136",
                    "number": 5
                },
                {
                    "asset": "Red.9.391",
                    "number": 2
                },
                {
                    "asset": "Red.3.359",
                    "number": 0
                },
                {
                    "asset": "Red.2.40",
                    "number": 1
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Resupply-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Resupply//Route out",
                            "startDate": "2022-05-01T15:20:00.000Z",
                            "endDate": "2022-05-01T16:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651418400000,
                            "endTime": 1651421400000,
                            "geomId": "Resupply-0",
                            "name": "f-red//5.0137417279183865//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    64.0937,
                                    46.4545
                                ],
                                [
                                    49.99,
                                    28.18
                                ],
                                [
                                    35.38,
                                    10.39
                                ],
                                [
                                    35.7959,
                                    10.2395
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
                            "startDate": "2022-05-01T16:10:00.000Z",
                            "endDate": "2022-05-01T16:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651421400000,
                            "endTime": 1651423800000,
                            "geomId": "Resupply-1",
                            "name": "f-red//10.027483455836773//Resupply at this location"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        34.50829091473217,
                                        11.498740571306847
                                    ],
                                    [
                                        34.50829091473217,
                                        8.975237800902198
                                    ],
                                    [
                                        37.07330464398166,
                                        8.975237800902198
                                    ],
                                    [
                                        37.07330464398166,
                                        11.498740571306847
                                    ],
                                    [
                                        34.50829091473217,
                                        11.498740571306847
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
                            "startDate": "2022-05-01T16:50:00.000Z",
                            "endDate": "2022-05-01T17:20:00.000Z",
                            "force": "f-red",
                            "startTime": 1651423800000,
                            "endTime": 1651425600000,
                            "geomId": "Resupply-2",
                            "name": "f-red//15.04122518375516//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    35.7959,
                                    10.2395
                                ],
                                [
                                    42.63,
                                    19.55
                                ],
                                [
                                    50.39,
                                    28.77
                                ],
                                [
                                    57.42,
                                    37.28
                                ],
                                [
                                    63.74,
                                    46.07
                                ],
                                [
                                    64.0937,
                                    46.4545
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_587",
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
            "messageType": "Info Ops--AreaEffects",
            "timestamp": "2022-09-26T10:23:33.589Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-590",
            "title": "Order item 594",
            "startDate": "2022-05-01T15:20:00.000Z",
            "endDate": "2022-05-01T16:10:00.000Z",
            "activity": "f-red-Info Ops-Area Activity",
            "ownAssets": [
                {
                    "asset": "Red.2.40",
                    "number": 5
                },
                {
                    "asset": "Red.4.235",
                    "number": 1
                },
                {
                    "asset": "Red.12.143",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Area Activity-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Area Activity//Area of effect",
                            "startDate": "2022-05-01T15:20:00.000Z",
                            "endDate": "2022-05-01T16:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651418400000,
                            "endTime": 1651421400000,
                            "geomId": "Area Activity-0",
                            "name": "f-red//4.937777955085039//Area of effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        6.937290223849417,
                                        19.18916021205628
                                    ],
                                    [
                                        6.937290223849417,
                                        18.614546457880802
                                    ],
                                    [
                                        7.54466688492044,
                                        18.614546457880802
                                    ],
                                    [
                                        7.54466688492044,
                                        19.18916021205628
                                    ],
                                    [
                                        6.937290223849417,
                                        19.18916021205628
                                    ]
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_590",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-planning",
            "from": {
                "force": "Green",
                "forceColor": "#7ed321",
                "roleName": "CO",
                "roleId": "green-co",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "f-green"
            },
            "messageType": "Air--Transit",
            "timestamp": "2022-09-27T18:03:31.825Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Green-593",
            "title": "Order item 597",
            "startDate": "2022-05-01T15:30:00.000Z",
            "endDate": "2022-05-01T16:20:00.000Z",
            "activity": "f-green-Air-Transit",
            "ownAssets": [
                {
                    "asset": "Green.11.164",
                    "number": 3
                },
                {
                    "asset": "Green.12.298",
                    "number": 0
                },
                {
                    "asset": "Green.7.146",
                    "number": 0
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Red.5.351"
                }
            ],
            "location": [
                {
                    "uniqid": "Transit-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Transit//Route out",
                            "startDate": "2022-05-01T15:30:00.000Z",
                            "endDate": "2022-05-01T16:20:00.000Z",
                            "force": "f-green",
                            "startTime": 1651419000000,
                            "endTime": 1651422000000,
                            "geomId": "Transit-0",
                            "name": "f-green//3.755235344171524//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -10.9186,
                                    4.5739
                                ],
                                [
                                    24.69,
                                    17.8
                                ],
                                [
                                    61.42,
                                    31.14
                                ],
                                [
                                    96.43,
                                    44.76
                                ],
                                [
                                    96.8897,
                                    44.4168
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-green_593",
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
            "messageType": "Air--EWAttack",
            "timestamp": "2022-09-25T07:27:30.852Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-596",
            "title": "Order item 600",
            "startDate": "2022-05-01T15:40:00.000Z",
            "endDate": "2022-05-01T19:00:00.000Z",
            "activity": "f-red-Air-EW Attack",
            "ownAssets": [
                {
                    "asset": "Red.3.107",
                    "number": 1
                },
                {
                    "asset": "Red.11.181",
                    "number": 3
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                },
                {
                    "asset": "Green.11.351"
                }
            ],
            "location": [
                {
                    "uniqid": "EW Attack-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "EW Attack//Route out",
                            "startDate": "2022-05-01T15:40:00.000Z",
                            "endDate": "2022-05-01T16:30:00.000Z",
                            "force": "f-red",
                            "startTime": 1651419600000,
                            "endTime": 1651422600000,
                            "geomId": "EW Attack-0",
                            "name": "f-red//6.466113913804293//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.1768,
                                    -6.9834
                                ],
                                [
                                    113.68,
                                    1.96
                                ],
                                [
                                    93.12,
                                    9.84
                                ],
                                [
                                    71.84,
                                    19.01
                                ],
                                [
                                    50.84,
                                    27.46
                                ],
                                [
                                    50.4674,
                                    27.6081
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
                            "startDate": "2022-05-01T16:30:00.000Z",
                            "endDate": "2022-05-01T16:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651422600000,
                            "endTime": 1651423800000,
                            "geomId": "EW Attack-1",
                            "name": "f-red//12.932227827608585//EW Area of Effect"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        47.09696749818455,
                                        30.472906805583875
                                    ],
                                    [
                                        47.09696749818455,
                                        24.666073227705635
                                    ],
                                    [
                                        53.6637526273547,
                                        24.666073227705635
                                    ],
                                    [
                                        53.6637526273547,
                                        30.472906805583875
                                    ],
                                    [
                                        47.09696749818455,
                                        30.472906805583875
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
                            "startDate": "2022-05-01T16:50:00.000Z",
                            "endDate": "2022-05-01T19:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651423800000,
                            "endTime": 1651431600000,
                            "geomId": "EW Attack-2",
                            "name": "f-red//19.398341741412878//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    50.4674,
                                    27.6081
                                ],
                                [
                                    92.34,
                                    9.91
                                ],
                                [
                                    135.58,
                                    -7.41
                                ],
                                [
                                    135.1768,
                                    -6.9834
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_596",
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
            "timestamp": "2022-09-27T10:35:30.670Z",
            "turnNumber": 3
        },
        "message": {
            "Reference": "Red-599",
            "title": "Order item 603",
            "startDate": "2022-05-01T16:00:00.000Z",
            "endDate": "2022-05-01T17:10:00.000Z",
            "activity": "f-red-Air-Time Sensitive Targeting (TST)",
            "ownAssets": [
                {
                    "asset": "Red.2.269",
                    "number": 2
                },
                {
                    "asset": "Red.7.283",
                    "number": 3
                },
                {
                    "asset": "Red.9.10",
                    "number": 2
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78"
                }
            ],
            "location": [
                {
                    "uniqid": "Time Sensitive Targeting (TST)-0",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "id": "Time Sensitive Targeting (TST)//Route out",
                            "startDate": "2022-05-01T16:00:00.000Z",
                            "endDate": "2022-05-01T16:50:00.000Z",
                            "force": "f-red",
                            "startTime": 1651420800000,
                            "endTime": 1651423800000,
                            "geomId": "Time Sensitive Targeting (TST)-0",
                            "name": "f-red//3.070413663983345//Route out"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.8838,
                                    26.9991
                                ],
                                [
                                    85,
                                    42.97
                                ],
                                [
                                    48.57,
                                    58.39
                                ],
                                [
                                    48.8429,
                                    58.3229
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
                            "startDate": "2022-05-01T16:50:00.000Z",
                            "endDate": "2022-05-01T17:00:00.000Z",
                            "force": "f-red",
                            "startTime": 1651423800000,
                            "endTime": 1651424400000,
                            "geomId": "Time Sensitive Targeting (TST)-1",
                            "name": "f-red//6.14082732796669//TST Area"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        48.21484833907206,
                                        58.64814149981237
                                    ],
                                    [
                                        48.21484833907206,
                                        57.99463810945147
                                    ],
                                    [
                                        49.45944912365143,
                                        57.99463810945147
                                    ],
                                    [
                                        49.45944912365143,
                                        58.64814149981237
                                    ],
                                    [
                                        48.21484833907206,
                                        58.64814149981237
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
                            "startDate": "2022-05-01T17:00:00.000Z",
                            "endDate": "2022-05-01T17:10:00.000Z",
                            "force": "f-red",
                            "startTime": 1651424400000,
                            "endTime": 1651425000000,
                            "geomId": "Time Sensitive Targeting (TST)-2",
                            "name": "f-red//9.211240991950035//Route back"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    48.8429,
                                    58.3229
                                ],
                                [
                                    67.15,
                                    50.63
                                ],
                                [
                                    85.28,
                                    42.77
                                ],
                                [
                                    103.7,
                                    35.2
                                ],
                                [
                                    121.41,
                                    26.91
                                ],
                                [
                                    121.8838,
                                    26.9991
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_f-red_599",
        "_rev": "2"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "umpire",
                "roleName": "Game Designer"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T15:15:00.000Z",
                "endTime": "2022-05-01T14:45:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_407",
                "orders2": "m_f-red_572",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-1",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//0"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "umpire",
                "roleName": "Game Designer"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T06:15:00.000Z",
                "endTime": "2022-05-01T05:10:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_200",
                "orders2": "m_f-red_47",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-2",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//1"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "umpire",
                "roleName": "Game Designer"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T10:05:00.000Z",
                "endTime": "2022-05-01T02:50:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_68",
                "orders2": "m_f-red_383",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-3",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//2"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "umpire",
                "roleName": "Game Designer"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T15:15:00.000Z",
                "endTime": "2022-05-01T06:15:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_569",
                "orders2": "m_f-red_185",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-4",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//3"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "umpire",
                "roleName": "Game Designer"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T15:20:00.000Z",
                "endTime": "2022-05-01T16:10:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_539",
                "orders2": "m_f-red_590",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-5",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//4"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-1",
                "roleName": "Adjudicator 1"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T08:55:00.000Z",
                "endTime": "2022-05-01T07:45:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_239",
                "orders2": "m_f-red_329",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-6",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//5"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-1",
                "roleName": "Adjudicator 1"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 7,
            "interaction": {
                "startTime": "2022-05-01T11:05:00.000Z",
                "endTime": "2022-05-01T08:40:00.000Z",
                "id": "umpire-7",
                "orders1": "m_f-blue_275",
                "orders2": "m_f-red_440",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-7",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//6"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-1",
                "roleName": "Adjudicator 1"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 8,
            "interaction": {
                "startTime": "2022-05-01T10:55:00.000Z",
                "endTime": "2022-05-01T08:25:00.000Z",
                "id": "umpire-8",
                "orders1": "m_f-blue_410",
                "orders2": "m_f-red_215",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-8",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//7"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-1",
                "roleName": "Adjudicator 1"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 9,
            "interaction": {
                "startTime": "2022-05-01T15:40:00.000Z",
                "endTime": "2022-05-01T05:05:00.000Z",
                "id": "umpire-9",
                "orders1": "m_f-blue_158",
                "orders2": "m_f-red_596",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-9",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//8"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-1",
                "roleName": "Adjudicator 1"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.376Z",
            "turnNumber": 3,
            "counter": 10,
            "interaction": {
                "startTime": "2022-05-01T10:55:00.000Z",
                "endTime": "2022-05-01T09:50:00.000Z",
                "id": "umpire-10",
                "orders1": "m_f-blue_422",
                "orders2": "m_f-red_257",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-10",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.376Z//9"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-2",
                "roleName": "Adjudicator 2"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.377Z",
            "turnNumber": 3,
            "counter": 11,
            "interaction": {
                "startTime": "2022-05-01T15:40:00.000Z",
                "endTime": "2022-05-01T11:15:00.000Z",
                "id": "umpire-11",
                "orders1": "m_f-blue_242",
                "orders2": "m_f-red_596",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-11",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.377Z//10"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-2",
                "roleName": "Adjudicator 2"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.377Z",
            "turnNumber": 3,
            "counter": 12,
            "interaction": {
                "startTime": "2022-05-01T07:00:00.000Z",
                "endTime": "2022-05-01T05:05:00.000Z",
                "id": "umpire-12",
                "orders1": "m_f-blue_158",
                "orders2": "m_f-red_251",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-12",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.377Z//11"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-2",
                "roleName": "Adjudicator 2"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.377Z",
            "turnNumber": 3,
            "counter": 13,
            "interaction": {
                "startTime": "2022-05-01T06:55:00.000Z",
                "endTime": "2022-05-01T02:50:00.000Z",
                "id": "umpire-13",
                "orders1": "m_f-blue_230",
                "orders2": "m_f-red_74",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-13",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.377Z//12"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-2",
                "roleName": "Adjudicator 2"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.377Z",
            "turnNumber": 3,
            "counter": 14,
            "interaction": {
                "startTime": "2022-05-01T14:55:00.000Z",
                "endTime": "2022-05-01T08:05:00.000Z",
                "id": "umpire-14",
                "orders1": "m_f-blue_155",
                "orders2": "m_f-red_548",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-14",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.377Z//13"
    },
    {
        "messageType": "InteractionMessage",
        "details": {
            "from": {
                "force": "Umpire",
                "forceColor": "#000000",
                "forceId": "umpire",
                "iconURL": "",
                "roleId": "adjud-2",
                "roleName": "Adjudicator 2"
            },
            "channel": "channel-planning",
            "messageType": "p9adjudicate",
            "timestamp": "2023-02-27T09:51:20.377Z",
            "turnNumber": 3,
            "counter": 15,
            "interaction": {
                "startTime": "2022-05-01T11:10:00.000Z",
                "endTime": "2022-05-01T05:10:00.000Z",
                "id": "umpire-15",
                "orders1": "m_f-blue_446",
                "orders2": "m_f-red_47",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-15",
            "healthOutcomes": [],
            "important": false,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-02-27T09:51:20.377Z//14"
    }
]