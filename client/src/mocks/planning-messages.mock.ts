import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from 'src/custom-types'

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
                    "number": 0
                },
                {
                    "asset": "Green.9.301",
                    "number": 2
                },
                {
                    "asset": "Green.2.344",
                    "number": 4
                },
                {
                    "asset": "Green.3.100",
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
                    "number": 5
                },
                {
                    "asset": "Blue.12.369",
                    "number": 4
                },
                {
                    "asset": "Blue.9.351",
                    "number": 2
                },
                {
                    "asset": "Blue.2.46",
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
                    "number": 5
                },
                {
                    "asset": "Red.2.255",
                    "number": 0
                },
                {
                    "asset": "Red.8.177",
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
                    "number": 3
                },
                {
                    "asset": "Blue.6.362",
                    "number": 4
                },
                {
                    "asset": "Blue.6.223",
                    "number": 2
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
                    "number": 1
                },
                {
                    "asset": "Blue.3.287",
                    "number": 3
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
            "messageType": "Maritime--MissileStrike",
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
                    "number": 2,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.10.397",
                    "number": 4,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.5.78",
                    "number": 5,
                    "missileType": "Standard Cruise"
                },
                {
                    "asset": "Green.1.273",
                    "number": 5,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Blue.11.78",
                    "missileType": "MRBM",
                    "number": 4
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
                    "number": 3
                },
                {
                    "asset": "Green.5.181",
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
                    "number": 0
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
            "messageType": "Maritime--MissileStrike",
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
                    "number": 3,
                    "missileType": "Propellor OWA UAV"
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
                    "missileType": "Standard Cruise",
                    "number": 2
                },
                {
                    "asset": "Red.10.50",
                    "missileType": "SRBM",
                    "number": 1
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
                    "number": 5
                },
                {
                    "asset": "Green.6.312",
                    "number": 0
                },
                {
                    "asset": "Green.12.92",
                    "number": 4
                },
                {
                    "asset": "Green.7.386",
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
                    "number": 2
                },
                {
                    "asset": "Blue.6.393",
                    "number": 0
                },
                {
                    "asset": "Blue.9.113",
                    "number": 5
                },
                {
                    "asset": "Blue.8.347",
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
                    "number": 0
                },
                {
                    "asset": "Red.9.294",
                    "number": 0
                },
                {
                    "asset": "Red.9.354",
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
                    "number": 4
                },
                {
                    "asset": "Red.9.354",
                    "number": 4
                },
                {
                    "asset": "Red.9.294",
                    "number": 2
                },
                {
                    "asset": "Red.2.347",
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
                    "number": 5
                },
                {
                    "asset": "Green.5.113",
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
                    "number": 1
                },
                {
                    "asset": "Red.2.290",
                    "number": 4
                },
                {
                    "asset": "Red.10.50",
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
                    "number": 1
                },
                {
                    "asset": "Green.9.308",
                    "number": 5
                },
                {
                    "asset": "Green.3.7",
                    "number": 0
                },
                {
                    "asset": "Green.4.219",
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
                    "number": 1
                },
                {
                    "asset": "Blue.3.145",
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
                    "number": 2
                },
                {
                    "asset": "Blue.10.202",
                    "number": 1
                },
                {
                    "asset": "Blue.11.180",
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
                    "number": 3
                },
                {
                    "asset": "Red.4.173",
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
            "messageType": "Land--MissileStrike",
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
                    "number": 3,
                    "missileType": "SRBM"
                }
            ],
            "otherAssets": [
                {
                    "asset": "Red.8.78",
                    "missileType": "SRBM",
                    "number": 4
                },
                {
                    "asset": "Green.11.351",
                    "missileType": "SRBM",
                    "number": 2
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
            "messageType": "Land--MissileStrike",
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
                    "number": 5,
                    "missileType": "SRBM"
                },
                {
                    "asset": "Green.10.223",
                    "number": 5,
                    "missileType": "MRBM"
                },
                {
                    "asset": "Green.2.361",
                    "number": 5,
                    "missileType": "Propellor OWA UAV"
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
                    "missileType": "Jet OWA UAV",
                    "number": 0
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
                    "number": 2
                },
                {
                    "asset": "Green.5.350",
                    "number": 3
                },
                {
                    "asset": "Green.5.368",
                    "number": 4
                },
                {
                    "asset": "Green.2.99",
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
                    "number": 0
                },
                {
                    "asset": "Red.9.343",
                    "number": 2
                },
                {
                    "asset": "Red.1.300",
                    "number": 0
                },
                {
                    "asset": "Red.12.371",
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
            "timestamp": "2023-03-01T16:40:49.063Z",
            "turnNumber": 3,
            "counter": 1,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T02:05:00.000Z",
                "id": "umpire-1",
                "orders1": "m_f-blue_32",
                "orders2": "m_f-red_50",
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
        "_id": "2023-03-01T16:40:49.063Z//0"
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
            "timestamp": "2023-03-01T16:40:49.063Z",
            "turnNumber": 3,
            "counter": 2,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T02:00:00.000Z",
                "id": "umpire-2",
                "orders1": "m_f-blue_8",
                "orders2": "m_f-red_44",
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
        "_id": "2023-03-01T16:40:49.063Z//1"
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
            "timestamp": "2023-03-01T16:40:49.063Z",
            "turnNumber": 3,
            "counter": 3,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T02:00:00.000Z",
                "id": "umpire-3",
                "orders1": "m_f-blue_8",
                "orders2": "m_f-red_44",
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
        "_id": "2023-03-01T16:40:49.063Z//2"
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
            "timestamp": "2023-03-01T16:40:49.064Z",
            "turnNumber": 3,
            "counter": 4,
            "interaction": {
                "startTime": "2022-05-01T02:00:00.000Z",
                "endTime": "2022-05-01T04:50:00.000Z",
                "id": "umpire-4",
                "orders1": "m_f-blue_71",
                "orders2": "m_f-red_59",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-4",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-03-01T16:40:49.064Z//3"
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
            "timestamp": "2023-03-01T16:40:49.064Z",
            "turnNumber": 3,
            "counter": 5,
            "interaction": {
                "startTime": "2022-05-01T01:50:00.000Z",
                "endTime": "2022-05-01T04:00:00.000Z",
                "id": "umpire-5",
                "orders1": "m_f-blue_41",
                "orders2": "m_f-red_59",
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
        "_id": "2023-03-01T16:40:49.064Z//4"
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
            "timestamp": "2023-03-01T16:40:49.064Z",
            "turnNumber": 3,
            "counter": 6,
            "interaction": {
                "startTime": "2022-05-01T01:10:00.000Z",
                "endTime": "2022-05-01T02:05:00.000Z",
                "id": "umpire-6",
                "orders1": "m_f-blue_32",
                "orders2": "m_f-red_47",
                "complete": true
            }
        },
        "message": {
            "Reference": "umpire-6",
            "healthOutcomes": [],
            "important": true,
            "locationOutcomes": [],
            "perceptionOutcomes": [],
            "narrative": "",
            "messageType": "AdjudicationOutcomes"
        },
        "_id": "2023-03-01T16:40:49.064Z//5"
    }
]