
import { MessagePlanning } from '@serge/custom-types'

export const planningMessagesBulk: MessagePlanning[] = [
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T08:51:37.924Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-6",
            "title": "Order item 6 Transit",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T04:30:00.000Z",
            "Description": "Order description 6",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:00:00.000Z",
                            "endDate": "2022-11-15T00:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    127.86,
                                    -14.53
                                ],
                                [
                                    116.77,
                                    -21.64
                                ],
                                [
                                    116.4863,
                                    -21.3267
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        115.80145984954203,
                                        -20.68461466370769
                                    ],
                                    [
                                        115.80145984954203,
                                        -21.965987864645918
                                    ],
                                    [
                                        117.1771461162646,
                                        -21.965987864645918
                                    ],
                                    [
                                        117.1771461162646,
                                        -20.68461466370769
                                    ],
                                    [
                                        115.80145984954203,
                                        -20.68461466370769
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    131.44,
                                    -12.85
                                ],
                                [
                                    123.82,
                                    -16.41
                                ],
                                [
                                    116.47,
                                    -21.68
                                ],
                                [
                                    116.4863,
                                    -21.3267
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:18",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_6",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T21:06:20.164Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-9",
            "title": "Order item 9 Transit",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T04:50:00.000Z",
            "Description": "Order description 9",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:00:00.000Z",
                            "endDate": "2022-11-15T00:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    143.46,
                                    -15.88
                                ],
                                [
                                    143.58,
                                    -12.84
                                ],
                                [
                                    144.98,
                                    -10.52
                                ],
                                [
                                    145.67,
                                    -8.92
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T03:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.74777117084554,
                                        -5.298967139234306
                                    ],
                                    [
                                        142.74777117084554,
                                        -11.532440289640927
                                    ],
                                    [
                                        149.05912379326483,
                                        -11.532440289640927
                                    ],
                                    [
                                        149.05912379326483,
                                        -5.298967139234306
                                    ],
                                    [
                                        142.74777117084554,
                                        -5.298967139234306
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    143.47,
                                    -15.18
                                ],
                                [
                                    144.79,
                                    -11.24
                                ],
                                [
                                    145.39,
                                    -8.02
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:27",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:46",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_9",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T07:05:03.194Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-12",
            "title": "Order item 12 Kinetic",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T00:40:00.000Z",
            "Description": "Order description 12",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_12",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T14:47:47.015Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-15",
            "title": "Order item 15 Kinetic",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T05:30:00.000Z",
            "Description": "Order description 15",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:00:00.000Z",
                            "endDate": "2022-11-15T00:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    134.53,
                                    -12.05
                                ],
                                [
                                    129.52,
                                    -16.28
                                ],
                                [
                                    129.3162,
                                    -16.1699
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T03:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.3162,
                                -16.1699
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T05:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    136.81,
                                    -10.77
                                ],
                                [
                                    132.82,
                                    -13.99
                                ],
                                [
                                    129.12,
                                    -15.93
                                ],
                                [
                                    129.3162,
                                    -16.1699
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_15",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T12:14:31.627Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-18",
            "title": "Order item 18 Asymmetric",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T00:50:00.000Z",
            "Description": "Order description 18",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:00:00.000Z",
                            "endDate": "2022-11-15T00:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    141.6,
                                    -14.63
                                ],
                                [
                                    142.73,
                                    -20.41
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:18",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_18",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T23:25:17.028Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-21",
            "title": "Order item 21 Asymmetric",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T06:50:00.000Z",
            "Description": "Order description 21",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:00:00.000Z",
                            "endDate": "2022-11-15T00:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    132.07,
                                    -10.56
                                ],
                                [
                                    125.62,
                                    -14.74
                                ],
                                [
                                    119.45,
                                    -18.64
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        118.84543534793804,
                                        -18.084106397505767
                                    ],
                                    [
                                        118.84543534793804,
                                        -19.735018325182658
                                    ],
                                    [
                                        120.5907796757433,
                                        -19.735018325182658
                                    ],
                                    [
                                        120.5907796757433,
                                        -18.084106397505767
                                    ],
                                    [
                                        118.84543534793804,
                                        -18.084106397505767
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T06:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    119.36,
                                    -18.87
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:24",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:19",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_21",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T16:20:03.221Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-24",
            "title": "Order item 24 Kinetic",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T03:40:00.000Z",
            "Description": "Order description 24",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:00:00.000Z",
                            "endDate": "2022-11-15T00:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    143.02,
                                    -13.57
                                ],
                                [
                                    140.83,
                                    -17.08
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T02:30:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9707,
                                -17.0411
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:30:00.000Z",
                            "endDate": "2022-11-15T03:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    143.22,
                                    -13.68
                                ],
                                [
                                    141.18,
                                    -17.35
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:10",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_24",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T14:58:50.204Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-27",
            "title": "Order item 27 Kinetic",
            "startDate": "2022-11-15T00:00:00.000Z",
            "endDate": "2022-11-15T03:30:00.000Z",
            "Description": "Order description 27",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:00:00.000Z",
                            "endDate": "2022-11-15T00:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    139.43,
                                    -8.41
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T01:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.660795472479,
                                        -4.4014498451590764
                                    ],
                                    [
                                        135.660795472479,
                                        -11.692166040138547
                                    ],
                                    [
                                        143.03995968857592,
                                        -11.692166040138547
                                    ],
                                    [
                                        143.03995968857592,
                                        -4.4014498451590764
                                    ],
                                    [
                                        135.660795472479,
                                        -4.4014498451590764
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T03:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    125.26,
                                    -16.41
                                ],
                                [
                                    131.89,
                                    -12.69
                                ],
                                [
                                    138.81,
                                    -7.68
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_27",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T03:21:37.977Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-30",
            "title": "Order item 30 Transit",
            "startDate": "2022-11-15T00:05:00.000Z",
            "endDate": "2022-11-15T03:15:00.000Z",
            "Description": "Order description 30",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:13",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:42",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:30",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_30",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T05:28:26.541Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-33",
            "title": "Order item 33 Kinetic",
            "startDate": "2022-11-15T00:20:00.000Z",
            "endDate": "2022-11-15T02:40:00.000Z",
            "Description": "Order description 33",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:20:00.000Z",
                            "endDate": "2022-11-15T01:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    134.51,
                                    -14.31
                                ],
                                [
                                    142.29,
                                    -12.45
                                ],
                                [
                                    149.36,
                                    -10.3
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T01:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:10:00.000Z",
                            "endDate": "2022-11-15T02:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    132.42,
                                    -15.1
                                ],
                                [
                                    137.83,
                                    -13.32
                                ],
                                [
                                    143.52,
                                    -12.25
                                ],
                                [
                                    149.5,
                                    -9.89
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:33",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:30",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:25",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:9",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_33",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-3",
                "roleId": "rk116f52",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T13:19:15.896Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-36",
            "title": "Order item 36 Transit",
            "startDate": "2022-11-15T00:35:00.000Z",
            "endDate": "2022-11-15T02:35:00.000Z",
            "Description": "Order description 36",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:35:00.000Z",
                            "endDate": "2022-11-15T01:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    134.56,
                                    -6.47
                                ],
                                [
                                    133.57,
                                    -9.08
                                ],
                                [
                                    131.86,
                                    -10.41
                                ],
                                [
                                    130.43,
                                    -12.46
                                ],
                                [
                                    130.0699,
                                    -12.4965
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:25:00.000Z",
                            "endDate": "2022-11-15T02:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                130.0699,
                                -12.4965
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:25:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    134.07,
                                    -7.95
                                ],
                                [
                                    132,
                                    -9.63
                                ],
                                [
                                    130.2,
                                    -12.03
                                ],
                                [
                                    130.0699,
                                    -12.4965
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:15",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:0",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_36",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T02:54:06.041Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-39",
            "title": "Order item 39 Kinetic",
            "startDate": "2022-11-15T00:35:00.000Z",
            "endDate": "2022-11-15T03:45:00.000Z",
            "Description": "Order description 39",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:35:00.000Z",
                            "endDate": "2022-11-15T01:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    127.66,
                                    -12.6
                                ],
                                [
                                    132.48,
                                    -7.14
                                ],
                                [
                                    137.58,
                                    -2.41
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:25:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.4298,
                                -1.926
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T03:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    125.52,
                                    -14.35
                                ],
                                [
                                    129.84,
                                    -10
                                ],
                                [
                                    133.44,
                                    -6.36
                                ],
                                [
                                    137.32,
                                    -1.45
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:47",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:49",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
                },
                {
                    "FEName": "Red Force:9",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_39",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T06:12:56.977Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-42",
            "title": "Order item 42 Kinetic",
            "startDate": "2022-11-15T00:35:00.000Z",
            "endDate": "2022-11-15T01:25:00.000Z",
            "Description": "Order description 42",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:35:00.000Z",
                            "endDate": "2022-11-15T01:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    141.75,
                                    -13.33
                                ],
                                [
                                    144.71,
                                    -9.36
                                ],
                                [
                                    145.96,
                                    -5.1
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:45",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:38",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:48",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_42",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T15:15:48.703Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-45",
            "title": "Order item 45 Asymmetric",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T02:50:00.000Z",
            "Description": "Order description 45",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:10",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:38",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:12",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_45",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T14:02:41.219Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-48",
            "title": "Order item 48 Asymmetric",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T03:10:00.000Z",
            "Description": "Order description 48",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:18",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:53",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:18",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_48",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:33:34.526Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-51",
            "title": "Order item 51 Transit",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T04:50:00.000Z",
            "Description": "Order description 51",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T01:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    140.55,
                                    -7.97
                                ],
                                [
                                    137.55,
                                    -10.22
                                ],
                                [
                                    133.82,
                                    -11.19
                                ],
                                [
                                    129.39,
                                    -12.87
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T03:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.7416,
                                -12.6383
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T04:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    137.49,
                                    -9.98
                                ],
                                [
                                    129.91,
                                    -12.76
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:36",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:13",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_51",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T04:48:28.624Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-54",
            "title": "Order item 54 Transit",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T04:20:00.000Z",
            "Description": "Order description 54",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T01:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    135.19,
                                    -11.15
                                ],
                                [
                                    141.56,
                                    -9.56
                                ],
                                [
                                    146.21,
                                    -7.68
                                ],
                                [
                                    146.6751,
                                    -7.7565
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.6751,
                                -7.7565
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T04:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    138.15,
                                    -9.93
                                ],
                                [
                                    146.68,
                                    -7.93
                                ],
                                [
                                    146.6751,
                                    -7.7565
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:4",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA155",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_54",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T04:47:23.512Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-57",
            "title": "Order item 57 Asymmetric",
            "startDate": "2022-11-15T00:50:00.000Z",
            "endDate": "2022-11-15T04:30:00.000Z",
            "Description": "Order description 57",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T00:50:00.000Z",
                            "endDate": "2022-11-15T01:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    138.76,
                                    -12.98
                                ],
                                [
                                    142.66,
                                    -10.22
                                ],
                                [
                                    146.83,
                                    -8.19
                                ],
                                [
                                    146.6751,
                                    -7.7565
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.8911841147941,
                                        -4.973973507560322
                                    ],
                                    [
                                        143.8911841147941,
                                        -10.520700585951023
                                    ],
                                    [
                                        149.49598321330038,
                                        -10.520700585951023
                                    ],
                                    [
                                        149.49598321330038,
                                        -4.973973507560322
                                    ],
                                    [
                                        143.8911841147941,
                                        -4.973973507560322
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:30:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    140.47,
                                    -11.89
                                ],
                                [
                                    146.37,
                                    -7.74
                                ],
                                [
                                    146.6751,
                                    -7.7565
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:45",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:18",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:58",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_57",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:30:19.191Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-60",
            "title": "Order item 60 Transit",
            "startDate": "2022-11-15T01:00:00.000Z",
            "endDate": "2022-11-15T07:20:00.000Z",
            "Description": "Order description 60",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:00:00.000Z",
                            "endDate": "2022-11-15T01:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    137.66,
                                    -10.02
                                ],
                                [
                                    146.41,
                                    -5.86
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:50:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.7067,
                                -6.2246
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T07:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    132.65,
                                    -11.75
                                ],
                                [
                                    137,
                                    -9.72
                                ],
                                [
                                    141.64,
                                    -8.41
                                ],
                                [
                                    146.56,
                                    -5.81
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:58",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:15",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T22:00:00.000Z"
                },
                {
                    "FEName": "Red Force:47",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_60",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T13:57:15.660Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-63",
            "title": "Order item 63 Asymmetric",
            "startDate": "2022-11-15T01:00:00.000Z",
            "endDate": "2022-11-15T01:40:00.000Z",
            "Description": "Order description 63",
            "Location": "Region-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:32",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Blue:26",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:30",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_63",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T15:08:12.920Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-66",
            "title": "Order item 66 Asymmetric",
            "startDate": "2022-11-15T01:00:00.000Z",
            "endDate": "2022-11-15T05:10:00.000Z",
            "Description": "Order description 66",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:00:00.000Z",
                            "endDate": "2022-11-15T01:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    144.22,
                                    -14.16
                                ],
                                [
                                    147.8,
                                    -10.87
                                ],
                                [
                                    147.4089,
                                    -10.3741
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:50:00.000Z",
                            "endDate": "2022-11-15T04:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                147.4089,
                                -10.3741
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:00:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    146.93,
                                    -10.25
                                ],
                                [
                                    147.4089,
                                    -10.3741
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:9",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:49",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:47",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:0",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_66",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T06:03:10.970Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-69",
            "title": "Order item 69 Asymmetric",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T01:05:00.000Z",
            "Description": "Order description 69",
            "Location": "Point-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:0",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Blue:15",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_69",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T02:42:09.811Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-72",
            "title": "Order item 72 Transit",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T01:55:00.000Z",
            "Description": "Order description 72",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    133.87,
                                    -7.68
                                ],
                                [
                                    126.97,
                                    -13.4
                                ],
                                [
                                    119.36,
                                    -18.84
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:18",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:34",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:0",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_72",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T13:05:09.442Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-75",
            "title": "Order item 75 Transit",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T02:45:00.000Z",
            "Description": "Order description 75",
            "Location": "Point-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:18",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:29",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:9",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_75",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T05:12:09.864Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-78",
            "title": "Order item 78 Kinetic",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T04:45:00.000Z",
            "Description": "Order description 78",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    142.7,
                                    -13.38
                                ],
                                [
                                    146.22,
                                    -20.05
                                ],
                                [
                                    146.5324,
                                    -20.2695
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T02:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.5324,
                                -20.2695
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:55:00.000Z",
                            "endDate": "2022-11-15T04:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    142.61,
                                    -13.44
                                ],
                                [
                                    146.12,
                                    -20.1
                                ],
                                [
                                    146.5324,
                                    -20.2695
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_78",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T03:03:11.077Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-81",
            "title": "Order item 81 Kinetic",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T04:05:00.000Z",
            "Description": "Order description 81",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    136.36,
                                    -12.29
                                ],
                                [
                                    135.48,
                                    -18.51
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T02:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.29094897467317,
                                        -16.463294389876822
                                    ],
                                    [
                                        133.29094897467317,
                                        -20.577708270241896
                                    ],
                                    [
                                        137.63393571787222,
                                        -20.577708270241896
                                    ],
                                    [
                                        137.63393571787222,
                                        -16.463294389876822
                                    ],
                                    [
                                        133.29094897467317,
                                        -16.463294389876822
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:55:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    135.15,
                                    -18.47
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_81",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T14:38:13.080Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-84",
            "title": "Order item 84 Asymmetric",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T02:05:00.000Z",
            "Description": "Order description 84",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:44",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_84",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T15:57:15.873Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-87",
            "title": "Order item 87 Transit",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T03:15:00.000Z",
            "Description": "Order description 87",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    146.42,
                                    -12.55
                                ],
                                [
                                    143.46,
                                    -14.48
                                ],
                                [
                                    140.78,
                                    -17.13
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T02:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9707,
                                -17.0411
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:45:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    144.39,
                                    -13.45
                                ],
                                [
                                    140.69,
                                    -16.99
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:36",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_87",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T23:00:19.457Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-90",
            "title": "Order item 90 Asymmetric",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T06:15:00.000Z",
            "Description": "Order description 90",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    133.59,
                                    -12.02
                                ],
                                [
                                    137.37,
                                    -11.48
                                ],
                                [
                                    140.44,
                                    -10.65
                                ],
                                [
                                    144.79,
                                    -9.54
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    134.75,
                                    -12.07
                                ],
                                [
                                    139.88,
                                    -10.38
                                ],
                                [
                                    144.3,
                                    -9.41
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:40",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_90",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T11:47:23.831Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-93",
            "title": "Order item 93 Asymmetric",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T03:15:00.000Z",
            "Description": "Order description 93",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    146.79,
                                    -12.57
                                ],
                                [
                                    145.23,
                                    -15.11
                                ],
                                [
                                    143.95,
                                    -18.36
                                ],
                                [
                                    142.96,
                                    -20.34
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T02:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.56695849602957,
                                        -19.33147961129093
                                    ],
                                    [
                                        141.56695849602957,
                                        -21.99979162563761
                                    ],
                                    [
                                        144.41990829617802,
                                        -21.99979162563761
                                    ],
                                    [
                                        144.41990829617802,
                                        -19.33147961129093
                                    ],
                                    [
                                        141.56695849602957,
                                        -19.33147961129093
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:35:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    146.47,
                                    -13.05
                                ],
                                [
                                    145.49,
                                    -15.17
                                ],
                                [
                                    143.8,
                                    -18.01
                                ],
                                [
                                    143.39,
                                    -20.57
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:37",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_93",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T14:18:28.996Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-96",
            "title": "Order item 96 Kinetic",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "Description": "Order description 96",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    126,
                                    -15.99
                                ],
                                [
                                    135.53,
                                    -11.77
                                ],
                                [
                                    144.35,
                                    -7.27
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.18420467054827,
                                        -4.66612103792362
                                    ],
                                    [
                                        142.18420467054827,
                                        -9.09532713556342
                                    ],
                                    [
                                        146.6490412643439,
                                        -9.09532713556342
                                    ],
                                    [
                                        146.6490412643439,
                                        -4.66612103792362
                                    ],
                                    [
                                        142.18420467054827,
                                        -4.66612103792362
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    130.42,
                                    -13.72
                                ],
                                [
                                    144.5,
                                    -7.1
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:46",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:26",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:10",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:12",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_96",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T06:33:34.952Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-99",
            "title": "Order item 99 Asymmetric",
            "startDate": "2022-11-15T01:05:00.000Z",
            "endDate": "2022-11-15T01:55:00.000Z",
            "Description": "Order description 99",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:05:00.000Z",
                            "endDate": "2022-11-15T01:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    134.07,
                                    -10.33
                                ],
                                [
                                    135.14,
                                    -7.46
                                ],
                                [
                                    136.49,
                                    -4.31
                                ],
                                [
                                    137.13,
                                    -1.88
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:10",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_99",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T20:32:41.698Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-102",
            "title": "Order item 102 Asymmetric",
            "startDate": "2022-11-15T01:15:00.000Z",
            "endDate": "2022-11-15T04:55:00.000Z",
            "Description": "Order description 102",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:15:00.000Z",
                            "endDate": "2022-11-15T02:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    137.97,
                                    -8.92
                                ],
                                [
                                    138.79,
                                    -13.92
                                ],
                                [
                                    139.9,
                                    -19.64
                                ],
                                [
                                    139.4415,
                                    -20.0229
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:05:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.4415,
                                -20.0229
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    137.67,
                                    -8.67
                                ],
                                [
                                    139.22,
                                    -14.4
                                ],
                                [
                                    139.05,
                                    -19.85
                                ],
                                [
                                    139.4415,
                                    -20.0229
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:6",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_102",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T08:15:49.235Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-105",
            "title": "Order item 105 Transit",
            "startDate": "2022-11-15T01:15:00.000Z",
            "endDate": "2022-11-15T02:05:00.000Z",
            "Description": "Order description 105",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:15:00.000Z",
                            "endDate": "2022-11-15T02:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    116.76,
                                    -21.3
                                ],
                                [
                                    116.4863,
                                    -21.3267
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:24",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Blue:11",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_105",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:42:57.562Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-108",
            "title": "Order item 108 Transit",
            "startDate": "2022-11-15T01:15:00.000Z",
            "endDate": "2022-11-15T03:35:00.000Z",
            "Description": "Order description 108",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:15:00.000Z",
                            "endDate": "2022-11-15T02:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    128.23,
                                    -14.77
                                ],
                                [
                                    135.97,
                                    -10.42
                                ],
                                [
                                    143.99,
                                    -6.79
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:05:00.000Z",
                            "endDate": "2022-11-15T03:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.4062,
                                -6.8859
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T03:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    144.28,
                                    -7.22
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:36",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:12",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_108",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T16:54:06.679Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-111",
            "title": "Order item 111 Kinetic",
            "startDate": "2022-11-15T01:15:00.000Z",
            "endDate": "2022-11-15T01:35:00.000Z",
            "Description": "Order description 111",
            "Location": "Region-A",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:25",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:12",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_111",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T05:49:16.588Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-114",
            "title": "Order item 114 Kinetic",
            "startDate": "2022-11-15T01:15:00.000Z",
            "endDate": "2022-11-15T05:15:00.000Z",
            "Description": "Order description 114",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:15:00.000Z",
                            "endDate": "2022-11-15T02:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    137.37,
                                    -2.26
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:05:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.4298,
                                -1.926
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    137.72,
                                    -1.89
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:34",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_114",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T00:28:27.286Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-117",
            "title": "Order item 117 Transit",
            "startDate": "2022-11-15T01:15:00.000Z",
            "endDate": "2022-11-15T02:05:00.000Z",
            "Description": "Order description 117",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:15:00.000Z",
                            "endDate": "2022-11-15T02:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    138.97,
                                    -14.86
                                ],
                                [
                                    138.54,
                                    -8.62
                                ],
                                [
                                    137.39,
                                    -2.09
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:56",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA1397",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_117",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T00:51:38.775Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-120",
            "title": "Order item 120 Transit",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T05:50:00.000Z",
            "Description": "Order description 120",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:30:00.000Z",
                            "endDate": "2022-11-15T02:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    142.44,
                                    -19.08
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T04:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.1253,
                                -19.3355
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T05:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    147.11,
                                    -13.35
                                ],
                                [
                                    144.22,
                                    -16.87
                                ],
                                [
                                    141.62,
                                    -19.12
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:8",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_120",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T14:58:51.055Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-123",
            "title": "Order item 123 Asymmetric",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T02:20:00.000Z",
            "Description": "Order description 123",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:30:00.000Z",
                            "endDate": "2022-11-15T02:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    144.29,
                                    -14.4
                                ],
                                [
                                    146.03,
                                    -8.71
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:55",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:46",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_123",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T18:50:04.125Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-126",
            "title": "Order item 126 Transit",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T03:50:00.000Z",
            "Description": "Order description 126",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:30:00.000Z",
                            "endDate": "2022-11-15T02:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    150.35,
                                    -10.28
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T02:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.55614443366784,
                                        -7.127102413623947
                                    ],
                                    [
                                        146.55614443366784,
                                        -14.265850441218015
                                    ],
                                    [
                                        153.83695721316818,
                                        -14.265850441218015
                                    ],
                                    [
                                        153.83695721316818,
                                        -7.127102413623947
                                    ],
                                    [
                                        146.55614443366784,
                                        -7.127102413623947
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:40:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    150.1,
                                    -10.92
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:55",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:53",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_126",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T04:25:17.986Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-129",
            "title": "Order item 129 Asymmetric",
            "startDate": "2022-11-15T01:30:00.000Z",
            "endDate": "2022-11-15T03:50:00.000Z",
            "Description": "Order description 129",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:30:00.000Z",
                            "endDate": "2022-11-15T02:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    124.4507,
                                    -20.6765
                                ],
                                [
                                    130.56,
                                    -11.42
                                ],
                                [
                                    137.99,
                                    -1.83
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:20:00.000Z",
                            "endDate": "2022-11-15T03:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.81543577518383,
                                        2.304143251670458
                                    ],
                                    [
                                        133.81543577518383,
                                        -5.265639924969364
                                    ],
                                    [
                                        141.40436096212844,
                                        -5.265639924969364
                                    ],
                                    [
                                        141.40436096212844,
                                        2.304143251670458
                                    ],
                                    [
                                        133.81543577518383,
                                        2.304143251670458
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    124.4507,
                                    -20.6765
                                ],
                                [
                                    128.04,
                                    -16.14
                                ],
                                [
                                    130.54,
                                    -10.7
                                ],
                                [
                                    134.33,
                                    -5.98
                                ],
                                [
                                    137.39,
                                    -1.98
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:8",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Red Force:40",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:29",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_129",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T19:44:32.637Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-132",
            "title": "Order item 132 Transit",
            "startDate": "2022-11-15T01:40:00.000Z",
            "endDate": "2022-11-15T03:50:00.000Z",
            "Description": "Order description 132",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T02:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    120.32,
                                    -19.07
                                ],
                                [
                                    120.4755,
                                    -18.6674
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:30:00.000Z",
                            "endDate": "2022-11-15T03:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                120.4755,
                                -18.6674
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:10:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    134.44,
                                    -10.56
                                ],
                                [
                                    129.49,
                                    -13.13
                                ],
                                [
                                    124.83,
                                    -16.42
                                ],
                                [
                                    120.46,
                                    -18.42
                                ],
                                [
                                    120.4755,
                                    -18.6674
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:20",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:19",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_132",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T00:47:48.079Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-135",
            "title": "Order item 135 Transit",
            "startDate": "2022-11-15T01:40:00.000Z",
            "endDate": "2022-11-15T06:00:00.000Z",
            "Description": "Order description 135",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T02:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    125.98,
                                    -12.66
                                ],
                                [
                                    131.31,
                                    -7.36
                                ],
                                [
                                    137.92,
                                    -1.78
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:30:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.6034,
                                -1.484
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:50:00.000Z",
                            "endDate": "2022-11-15T06:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    129.05,
                                    -10.47
                                ],
                                [
                                    137.75,
                                    -1.66
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:32",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Red Force:14",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_135",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T11:35:04.312Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-138",
            "title": "Order item 138 Kinetic",
            "startDate": "2022-11-15T01:40:00.000Z",
            "endDate": "2022-11-15T05:00:00.000Z",
            "Description": "Order description 138",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:40:00.000Z",
                            "endDate": "2022-11-15T02:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    150.57,
                                    -10.43
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:30:00.000Z",
                            "endDate": "2022-11-15T02:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                150.1536,
                                -10.7176
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:50:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    150.39,
                                    -10.63
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:0",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:11",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_138",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T04:06:21.334Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-141",
            "title": "Order item 141 Kinetic",
            "startDate": "2022-11-15T01:55:00.000Z",
            "endDate": "2022-11-15T06:05:00.000Z",
            "Description": "Order description 141",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T02:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    138.21,
                                    -10.4
                                ],
                                [
                                    135.75,
                                    -18.73
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:45:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.23775350863735,
                                        -16.41109700381979
                                    ],
                                    [
                                        133.23775350863735,
                                        -20.62864500705523
                                    ],
                                    [
                                        137.6897880315315,
                                        -20.62864500705523
                                    ],
                                    [
                                        137.6897880315315,
                                        -16.41109700381979
                                    ],
                                    [
                                        133.23775350863735,
                                        -16.41109700381979
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    135.83,
                                    -18.16
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:9",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_141",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T18:21:39.148Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-144",
            "title": "Order item 144 Transit",
            "startDate": "2022-11-15T01:55:00.000Z",
            "endDate": "2022-11-15T05:05:00.000Z",
            "Description": "Order description 144",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T01:55:00.000Z",
                            "endDate": "2022-11-15T02:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    136.36,
                                    -13.6
                                ],
                                [
                                    147.82,
                                    -10.21
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:45:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                147.5097,
                                -9.88
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T05:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    136.29,
                                    -13.72
                                ],
                                [
                                    147.76,
                                    -10.34
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:42",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Red Force:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:18",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_144",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T06:20:57.752Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-147",
            "title": "Order item 147 Transit",
            "startDate": "2022-11-15T02:00:00.000Z",
            "endDate": "2022-11-15T04:20:00.000Z",
            "Description": "Order description 147",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:51",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Red Force:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:17",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_147",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T08:04:17.146Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-150",
            "title": "Order item 150 Asymmetric",
            "startDate": "2022-11-15T02:15:00.000Z",
            "endDate": "2022-11-15T03:05:00.000Z",
            "Description": "Order description 150",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:15:00.000Z",
                            "endDate": "2022-11-15T03:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.0301,
                                    -15.4829
                                ],
                                [
                                    149.1,
                                    -10.35
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_150",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T15:31:37.331Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-153",
            "title": "Order item 153 Asymmetric",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T03:45:00.000Z",
            "Description": "Order description 153",
            "Location": "Point-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:33",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_153",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T12:42:58.307Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-156",
            "title": "Order item 156 Kinetic",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T06:05:00.000Z",
            "Description": "Order description 156",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:25:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    143.39,
                                    -20.41
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T03:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.9809,
                                -20.6715
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T06:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    145.13,
                                    -10.54
                                ],
                                [
                                    143.94,
                                    -15.8
                                ],
                                [
                                    143.02,
                                    -20.78
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:26",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:10",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Blue:38",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_156",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T23:38:20.073Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-159",
            "title": "Order item 159 Asymmetric",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T05:05:00.000Z",
            "Description": "Order description 159",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:38",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:12",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T22:00:00.000Z"
                },
                {
                    "FEName": "Blue:35",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_159",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T16:17:42.629Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-162",
            "title": "Order item 162 Kinetic",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T04:55:00.000Z",
            "Description": "Order description 162",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:25:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    143.25,
                                    -17.72
                                ],
                                [
                                    143.0924,
                                    -18.0959
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                143.0924,
                                -18.0959
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    146.03,
                                    -13
                                ],
                                [
                                    144.68,
                                    -15.01
                                ],
                                [
                                    142.6,
                                    -17.73
                                ],
                                [
                                    143.0924,
                                    -18.0959
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Blue:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:38",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_162",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T14:41:05.976Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-165",
            "title": "Order item 165 Asymmetric",
            "startDate": "2022-11-15T02:25:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "Description": "Order description 165",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:25:00.000Z",
                            "endDate": "2022-11-15T03:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    149.68,
                                    -10.5
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        149.3579894691663,
                                        -9.93290412310508
                                    ],
                                    [
                                        149.3579894691663,
                                        -11.500266709030587
                                    ],
                                    [
                                        150.95334070422527,
                                        -11.500266709030587
                                    ],
                                    [
                                        150.95334070422527,
                                        -9.93290412310508
                                    ],
                                    [
                                        149.3579894691663,
                                        -9.93290412310508
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    147.11,
                                    -17.78
                                ],
                                [
                                    148.01,
                                    -15.46
                                ],
                                [
                                    149.2,
                                    -12.85
                                ],
                                [
                                    149.68,
                                    -10.96
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_165",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T18:48:30.114Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-168",
            "title": "Order item 168 Asymmetric",
            "startDate": "2022-11-15T02:30:00.000Z",
            "endDate": "2022-11-15T06:10:00.000Z",
            "Description": "Order description 168",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:30:00.000Z",
                            "endDate": "2022-11-15T03:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.2525,
                                    -19.8426
                                ],
                                [
                                    133.49,
                                    -16.01
                                ],
                                [
                                    136.94,
                                    -11.99
                                ],
                                [
                                    139.66,
                                    -7.68
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:20:00.000Z",
                            "endDate": "2022-11-15T05:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.3171,
                                -8.0633
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.2525,
                                    -19.8426
                                ],
                                [
                                    134,
                                    -15.56
                                ],
                                [
                                    136.97,
                                    -12.07
                                ],
                                [
                                    139.23,
                                    -8.3
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:53",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_168",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T20:39:55.042Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-171",
            "title": "Order item 171 Transit",
            "startDate": "2022-11-15T02:45:00.000Z",
            "endDate": "2022-11-15T05:15:00.000Z",
            "Description": "Order description 171",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T02:45:00.000Z",
                            "endDate": "2022-11-15T03:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.2525,
                                    -19.8426
                                ],
                                [
                                    146.61,
                                    -6.62
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T03:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.7067,
                                -6.2246
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:35:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    131.2525,
                                    -19.8426
                                ],
                                [
                                    139.08,
                                    -13.26
                                ],
                                [
                                    146.4,
                                    -6.2
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:52",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_171",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T20:15:20.760Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-174",
            "title": "Order item 174 Transit",
            "startDate": "2022-11-15T02:55:00.000Z",
            "endDate": "2022-11-15T04:05:00.000Z",
            "Description": "Order description 174",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:38",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_174",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T09:34:47.270Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-177",
            "title": "Order item 177 Asymmetric",
            "startDate": "2022-11-15T02:55:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "Description": "Order description 177",
            "Location": "Region-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:38",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:9",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_177",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T12:38:14.569Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-180",
            "title": "Order item 180 Asymmetric",
            "startDate": "2022-11-15T03:00:00.000Z",
            "endDate": "2022-11-15T03:50:00.000Z",
            "Description": "Order description 180",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:00:00.000Z",
                            "endDate": "2022-11-15T03:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    150.65,
                                    -10.65
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:49",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:47",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:0",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Red Force:35",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_180",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T21:25:42.659Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-183",
            "title": "Order item 183 Kinetic",
            "startDate": "2022-11-15T03:15:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "Description": "Order description 183",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    132.59,
                                    -13.24
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T05:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                132.9811,
                                -13.2215
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    139.36,
                                    -8.75
                                ],
                                [
                                    132.68,
                                    -12.95
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:24",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:15",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_183",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T11:57:11.540Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-186",
            "title": "Order item 186 Asymmetric",
            "startDate": "2022-11-15T03:15:00.000Z",
            "endDate": "2022-11-15T08:35:00.000Z",
            "Description": "Order description 186",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.579,
                                    -14.574
                                ],
                                [
                                    141.21,
                                    -7.82
                                ],
                                [
                                    140.9793,
                                    -8.1733
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T05:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9793,
                                -8.1733
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.579,
                                    -14.574
                                ],
                                [
                                    140.99,
                                    -7.78
                                ],
                                [
                                    140.9793,
                                    -8.1733
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:50",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA1555",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_186",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T16:12:41.211Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-189",
            "title": "Order item 189 Kinetic",
            "startDate": "2022-11-15T03:15:00.000Z",
            "endDate": "2022-11-15T05:15:00.000Z",
            "Description": "Order description 189",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:15:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.1967,
                                    -18.1747
                                ],
                                [
                                    133.1,
                                    -14.13
                                ],
                                [
                                    144.46,
                                    -9.64
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T04:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:05:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.1967,
                                    -18.1747
                                ],
                                [
                                    144.89,
                                    -9.51
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:42",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_189",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T02:12:11.673Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-192",
            "title": "Order item 192 Asymmetric",
            "startDate": "2022-11-15T03:15:00.000Z",
            "endDate": "2022-11-15T03:45:00.000Z",
            "Description": "Order description 192",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA944",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_192",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T01:55:42.925Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-195",
            "title": "Order item 195 Asymmetric",
            "startDate": "2022-11-15T03:25:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "Description": "Order description 195",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:25:00.000Z",
                            "endDate": "2022-11-15T04:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    144.21,
                                    -11.42
                                ],
                                [
                                    141.73,
                                    -12.09
                                ],
                                [
                                    138.53,
                                    -13.47
                                ],
                                [
                                    135.62,
                                    -14.57
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.8469541414583,
                                        -12.257277883201652
                                    ],
                                    [
                                        133.8469541414583,
                                        -16.701415742972042
                                    ],
                                    [
                                        138.44110357380026,
                                        -16.701415742972042
                                    ],
                                    [
                                        138.44110357380026,
                                        -12.257277883201652
                                    ],
                                    [
                                        133.8469541414583,
                                        -12.257277883201652
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    142.24,
                                    -12.38
                                ],
                                [
                                    136.26,
                                    -14.54
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_195",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:23:14.968Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-198",
            "title": "Order item 198 Transit",
            "startDate": "2022-11-15T03:25:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "Description": "Order description 198",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:25:00.000Z",
                            "endDate": "2022-11-15T04:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    141.18,
                                    -11.62
                                ],
                                [
                                    149.53,
                                    -9.73
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T04:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.2994,
                                -10.1887
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    138.19,
                                    -12.03
                                ],
                                [
                                    144.19,
                                    -10.92
                                ],
                                [
                                    149.46,
                                    -10.52
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:32",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:35",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:54",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA944",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_198",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T02:34:47.802Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-201",
            "title": "Order item 201 Asymmetric",
            "startDate": "2022-11-15T03:25:00.000Z",
            "endDate": "2022-11-15T05:45:00.000Z",
            "Description": "Order description 201",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:25:00.000Z",
                            "endDate": "2022-11-15T04:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    139.3,
                                    -9.72
                                ],
                                [
                                    137.12,
                                    -1.9
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:15:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.0674392195455,
                                        -1.56373567207989
                                    ],
                                    [
                                        137.0674392195455,
                                        -2.288187317516016
                                    ],
                                    [
                                        137.7923148867781,
                                        -2.288187317516016
                                    ],
                                    [
                                        137.7923148867781,
                                        -1.56373567207989
                                    ],
                                    [
                                        137.0674392195455,
                                        -1.56373567207989
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:45:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    140.16,
                                    -13.06
                                ],
                                [
                                    139.14,
                                    -9.29
                                ],
                                [
                                    138.4,
                                    -5.24
                                ],
                                [
                                    136.94,
                                    -1.91
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:29",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA1397",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_201",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T03:30:21.425Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-204",
            "title": "Order item 204 Kinetic",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T04:30:00.000Z",
            "Description": "Order description 204",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    136.72,
                                    -6.97
                                ],
                                [
                                    136.06,
                                    -9.9
                                ],
                                [
                                    135.69,
                                    -12.56
                                ],
                                [
                                    136.6,
                                    -14.92
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:35",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:11",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_204",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:09:55.840Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-207",
            "title": "Order item 207 Kinetic",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T08:20:00.000Z",
            "Description": "Order description 207",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    143.97,
                                    -14.51
                                ],
                                [
                                    144.85,
                                    -10.65
                                ],
                                [
                                    147.02,
                                    -6.5
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:30:00.000Z",
                            "endDate": "2022-11-15T05:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.47148847635395,
                                        -4.992637270471772
                                    ],
                                    [
                                        145.47148847635395,
                                        -7.4536790610810835
                                    ],
                                    [
                                        147.94771237034382,
                                        -7.4536790610810835
                                    ],
                                    [
                                        147.94771237034382,
                                        -4.992637270471772
                                    ],
                                    [
                                        145.47148847635395,
                                        -4.992637270471772
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:10:00.000Z",
                            "endDate": "2022-11-15T08:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    142.77,
                                    -16.46
                                ],
                                [
                                    144.3,
                                    -12.71
                                ],
                                [
                                    145.11,
                                    -9.68
                                ],
                                [
                                    146.2,
                                    -6.37
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:15",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:55",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_207",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T14:33:31.045Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-210",
            "title": "Order item 210 Transit",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T03:40:00.000Z",
            "Description": "Order description 210",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:37",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:15",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_210",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T16:41:07.040Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-213",
            "title": "Order item 213 Transit",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T04:30:00.000Z",
            "Description": "Order description 213",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    138.9,
                                    -13.56
                                ],
                                [
                                    128.65,
                                    -16.45
                                ],
                                [
                                    118.69,
                                    -19.06
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_213",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T08:32:43.826Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-216",
            "title": "Order item 216 Asymmetric",
            "startDate": "2022-11-15T03:40:00.000Z",
            "endDate": "2022-11-15T09:40:00.000Z",
            "Description": "Order description 216",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:40:00.000Z",
                            "endDate": "2022-11-15T04:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    140.05,
                                    -16.17
                                ],
                                [
                                    144.8,
                                    -12.68
                                ],
                                [
                                    149.83,
                                    -9.92
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:30:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.91151978140627,
                                        -7.87716486225643
                                    ],
                                    [
                                        146.91151978140627,
                                        -12.751319062298753
                                    ],
                                    [
                                        151.87071575427646,
                                        -12.751319062298753
                                    ],
                                    [
                                        151.87071575427646,
                                        -7.87716486225643
                                    ],
                                    [
                                        146.91151978140627,
                                        -7.87716486225643
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    139.71,
                                    -16
                                ],
                                [
                                    145.2,
                                    -13.27
                                ],
                                [
                                    148.97,
                                    -10.24
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:55",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:17",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_216",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T06:08:21.403Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-219",
            "title": "Order item 219 Transit",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "Description": "Order description 219",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    137.44,
                                    -2.56
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.2844,
                                -2.7856
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:15:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.7521,
                                    -20.9262
                                ],
                                [
                                    127.17,
                                    -12.19
                                ],
                                [
                                    137.11,
                                    -2.95
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2050",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_219",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:27:59.770Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-222",
            "title": "Order item 222 Asymmetric",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T08:15:00.000Z",
            "Description": "Order description 222",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    129.15,
                                    -16.58
                                ],
                                [
                                    129.3162,
                                    -16.1699
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.3162,
                                -16.1699
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:05:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    129.45,
                                    -15.87
                                ],
                                [
                                    129.3162,
                                    -16.1699
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:11",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_222",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T18:31:38.927Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-225",
            "title": "Order item 225 Transit",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T04:35:00.000Z",
            "Description": "Order description 225",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    147.18,
                                    -9.78
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Red Force:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_225",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:19:18.875Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-228",
            "title": "Order item 228 Transit",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T06:35:00.000Z",
            "Description": "Order description 228",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:20",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_228",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T05:50:59.614Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-231",
            "title": "Order item 231 Kinetic",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "Description": "Order description 231",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    125.17,
                                    -13.38
                                ],
                                [
                                    131.67,
                                    -7.8
                                ],
                                [
                                    137.46,
                                    -2.94
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.2844,
                                -2.7856
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    119.7138,
                                    -18.9116
                                ],
                                [
                                    137.36,
                                    -2.57
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_231",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T08:06:41.143Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-234",
            "title": "Order item 234 Kinetic",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "Description": "Order description 234",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    142.15,
                                    -18.32
                                ],
                                [
                                    142.2515,
                                    -18.0243
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        139.0794660968176,
                                        -14.93321726031082
                                    ],
                                    [
                                        139.0794660968176,
                                        -21.061886504491145
                                    ],
                                    [
                                        145.53594161032015,
                                        -21.061886504491145
                                    ],
                                    [
                                        145.53594161032015,
                                        -14.93321726031082
                                    ],
                                    [
                                        139.0794660968176,
                                        -14.93321726031082
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:15:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    143.59,
                                    -11.5
                                ],
                                [
                                    141.9,
                                    -17.93
                                ],
                                [
                                    142.2515,
                                    -18.0243
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:15",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_234",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T16:06:23.462Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-237",
            "title": "Order item 237 Transit",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T04:55:00.000Z",
            "Description": "Order description 237",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    119.3,
                                    -19.34
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:55:00.000Z",
                            "endDate": "2022-11-15T04:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.2844,
                                    -2.7856
                                ],
                                [
                                    132.47,
                                    -6.62
                                ],
                                [
                                    128.55,
                                    -11.57
                                ],
                                [
                                    123.92,
                                    -15.24
                                ],
                                [
                                    118.56,
                                    -19.63
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:31",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:34",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:10",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_237",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T13:50:06.573Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-240",
            "title": "Order item 240 Transit",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T03:45:00.000Z",
            "Description": "Order description 240",
            "Location": "Region-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:36",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:35",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:6",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                },
                {
                    "FEName": "Blue:27",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_240",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T17:17:50.473Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-243",
            "title": "Order item 243 Asymmetric",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T04:35:00.000Z",
            "Description": "Order description 243",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    133.92,
                                    -6.95
                                ],
                                [
                                    129.61,
                                    -12.05
                                ],
                                [
                                    130.0699,
                                    -12.4965
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:27",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_243",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T02:29:35.164Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-246",
            "title": "Order item 246 Asymmetric",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T06:05:00.000Z",
            "Description": "Order description 246",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:36",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:19",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_246",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T01:25:20.646Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-249",
            "title": "Order item 249 Kinetic",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T06:35:00.000Z",
            "Description": "Order description 249",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:43",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_249",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T06:05:06.918Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-252",
            "title": "Order item 252 Asymmetric",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T04:35:00.000Z",
            "Description": "Order description 252",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_252",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T00:28:53.981Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-255",
            "title": "Order item 255 Asymmetric",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T09:25:00.000Z",
            "Description": "Order description 255",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    137.62,
                                    -14.38
                                ],
                                [
                                    149.44,
                                    -10.64
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.70625298656904,
                                        -6.661929648494549
                                    ],
                                    [
                                        145.70625298656904,
                                        -13.94316564832977
                                    ],
                                    [
                                        153.12345287730523,
                                        -13.94316564832977
                                    ],
                                    [
                                        153.12345287730523,
                                        -6.661929648494549
                                    ],
                                    [
                                        145.70625298656904,
                                        -6.661929648494549
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:25:00.000Z",
                            "endDate": "2022-11-15T09:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    133.5,
                                    -15.66
                                ],
                                [
                                    141.79,
                                    -12.62
                                ],
                                [
                                    149.35,
                                    -10.3
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:58",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_255",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T00:36:41.834Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-258",
            "title": "Order item 258 Transit",
            "startDate": "2022-11-15T03:45:00.000Z",
            "endDate": "2022-11-15T07:45:00.000Z",
            "Description": "Order description 258",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:45:00.000Z",
                            "endDate": "2022-11-15T04:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4245,
                                    -19.9708
                                ],
                                [
                                    147.69,
                                    -16.26
                                ],
                                [
                                    148.01,
                                    -13.51
                                ],
                                [
                                    149.62,
                                    -10.48
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.96684621032304,
                                        -9.860891066776254
                                    ],
                                    [
                                        148.96684621032304,
                                        -10.51617219336611
                                    ],
                                    [
                                        149.63263805384713,
                                        -10.51617219336611
                                    ],
                                    [
                                        149.63263805384713,
                                        -9.860891066776254
                                    ],
                                    [
                                        148.96684621032304,
                                        -9.860891066776254
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4245,
                                    -19.9708
                                ],
                                [
                                    146.86,
                                    -17.34
                                ],
                                [
                                    148.28,
                                    -14.74
                                ],
                                [
                                    148.97,
                                    -12.85
                                ],
                                [
                                    148.95,
                                    -9.68
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_258",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T14:28:30.478Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-261",
            "title": "Order item 261 Asymmetric",
            "startDate": "2022-11-15T03:55:00.000Z",
            "endDate": "2022-11-15T06:25:00.000Z",
            "Description": "Order description 261",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T04:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    141.72,
                                    -12.87
                                ],
                                [
                                    144.15,
                                    -9.31
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:45:00.000Z",
                            "endDate": "2022-11-15T05:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    140.41,
                                    -14.38
                                ],
                                [
                                    141.9,
                                    -12.96
                                ],
                                [
                                    142.67,
                                    -11.25
                                ],
                                [
                                    144.73,
                                    -9.26
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Red Force:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_261",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T10:04:19.913Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-264",
            "title": "Order item 264 Kinetic",
            "startDate": "2022-11-15T03:55:00.000Z",
            "endDate": "2022-11-15T06:15:00.000Z",
            "Description": "Order description 264",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T04:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    134.8,
                                    -12.81
                                ],
                                [
                                    131.37,
                                    -19.96
                                ],
                                [
                                    131.2525,
                                    -19.8426
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:45:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                131.2525,
                                -19.8426
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    130.83,
                                    -20.13
                                ],
                                [
                                    131.2525,
                                    -19.8426
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:31",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:32",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T22:00:00.000Z"
                },
                {
                    "FEName": "Blue:6",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_264",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T19:24:10.137Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-267",
            "title": "Order item 267 Kinetic",
            "startDate": "2022-11-15T03:55:00.000Z",
            "endDate": "2022-11-15T07:45:00.000Z",
            "Description": "Order description 267",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T04:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    141.45,
                                    -11.73
                                ],
                                [
                                    150.06,
                                    -10.94
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:45:00.000Z",
                            "endDate": "2022-11-15T06:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                150.1536,
                                -10.7176
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:35:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    150.17,
                                    -10.31
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:8",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:37",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:11",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_267",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T10:28:01.153Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-270",
            "title": "Order item 270 Asymmetric",
            "startDate": "2022-11-15T03:55:00.000Z",
            "endDate": "2022-11-15T09:15:00.000Z",
            "Description": "Order description 270",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T04:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    136.83,
                                    -9.1
                                ],
                                [
                                    133.47,
                                    -11.01
                                ],
                                [
                                    130.39,
                                    -11.63
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:45:00.000Z",
                            "endDate": "2022-11-15T07:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.41781541030745,
                                        -8.54097542444595
                                    ],
                                    [
                                        127.41781541030745,
                                        -15.226964795934803
                                    ],
                                    [
                                        134.26363633558438,
                                        -15.226964795934803
                                    ],
                                    [
                                        134.26363633558438,
                                        -8.54097542444595
                                    ],
                                    [
                                        127.41781541030745,
                                        -8.54097542444595
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:55:00.000Z",
                            "endDate": "2022-11-15T09:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    136.26,
                                    -9.64
                                ],
                                [
                                    133.38,
                                    -11.04
                                ],
                                [
                                    130.8,
                                    -12.16
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:31",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_270",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:15:52.959Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-273",
            "title": "Order item 273 Transit",
            "startDate": "2022-11-15T03:55:00.000Z",
            "endDate": "2022-11-15T07:15:00.000Z",
            "Description": "Order description 273",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T04:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    141.48,
                                    -12.06
                                ],
                                [
                                    149.41,
                                    -10.46
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:45:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.2994,
                                -10.1887
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T07:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    132.9811,
                                    -13.2215
                                ],
                                [
                                    138.03,
                                    -12.1
                                ],
                                [
                                    144.16,
                                    -10.92
                                ],
                                [
                                    149.56,
                                    -10.46
                                ],
                                [
                                    149.2994,
                                    -10.1887
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:57",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA944",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_273",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T17:47:45.555Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-276",
            "title": "Order item 276 Asymmetric",
            "startDate": "2022-11-15T03:55:00.000Z",
            "endDate": "2022-11-15T08:55:00.000Z",
            "Description": "Order description 276",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T03:55:00.000Z",
                            "endDate": "2022-11-15T04:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    143.2,
                                    -15.15
                                ],
                                [
                                    143.27,
                                    -12.24
                                ],
                                [
                                    143.63,
                                    -10.05
                                ],
                                [
                                    144.27,
                                    -6.57
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:45:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.3364705775138,
                                        -5.8204949512159905
                                    ],
                                    [
                                        143.3364705775138,
                                        -7.948917181301721
                                    ],
                                    [
                                        145.48073942251517,
                                        -7.948917181301721
                                    ],
                                    [
                                        145.48073942251517,
                                        -5.8204949512159905
                                    ],
                                    [
                                        143.3364705775138,
                                        -5.8204949512159905
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    143.0924,
                                    -18.0959
                                ],
                                [
                                    143.13,
                                    -14.57
                                ],
                                [
                                    144.39,
                                    -10.81
                                ],
                                [
                                    143.95,
                                    -6.77
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:44",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:19",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:0",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_276",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T18:03:38.942Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-279",
            "title": "Order item 279 Asymmetric",
            "startDate": "2022-11-15T04:10:00.000Z",
            "endDate": "2022-11-15T10:40:00.000Z",
            "Description": "Order description 279",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:10:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    130.16,
                                    -12.35
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.7416,
                                -12.6383
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:30:00.000Z",
                            "endDate": "2022-11-15T10:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    143.58,
                                    -10.7
                                ],
                                [
                                    139.52,
                                    -11.04
                                ],
                                [
                                    134.74,
                                    -12.11
                                ],
                                [
                                    129.25,
                                    -12.89
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:0",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_279",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T16:03:33.120Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-282",
            "title": "Order item 282 Asymmetric",
            "startDate": "2022-11-15T04:10:00.000Z",
            "endDate": "2022-11-15T07:50:00.000Z",
            "Description": "Order description 282",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:10:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    130.37,
                                    -12.55
                                ],
                                [
                                    132.89,
                                    -11.45
                                ],
                                [
                                    135.69,
                                    -10.08
                                ],
                                [
                                    139.78,
                                    -8.42
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T05:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.3171,
                                -8.0633
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:50:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    129.75,
                                    -12.82
                                ],
                                [
                                    132.61,
                                    -11.06
                                ],
                                [
                                    135.75,
                                    -10.02
                                ],
                                [
                                    139.17,
                                    -7.69
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:52",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_282",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T11:47:28.088Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-285",
            "title": "Order item 285 Transit",
            "startDate": "2022-11-15T04:10:00.000Z",
            "endDate": "2022-11-15T07:50:00.000Z",
            "Description": "Order description 285",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:10:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    147.07,
                                    -17.55
                                ],
                                [
                                    147.84,
                                    -15.1
                                ],
                                [
                                    148.9,
                                    -13.36
                                ],
                                [
                                    150.24,
                                    -10.33
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T05:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        147.04870623558784,
                                        -7.624659069376766
                                    ],
                                    [
                                        147.04870623558784,
                                        -13.779170875173573
                                    ],
                                    [
                                        153.32229662147154,
                                        -13.779170875173573
                                    ],
                                    [
                                        153.32229662147154,
                                        -7.624659069376766
                                    ],
                                    [
                                        147.04870623558784,
                                        -7.624659069376766
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:00:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    150.06,
                                    -10.31
                                ],
                                [
                                    150.1536,
                                    -10.7176
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:57",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:14",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:11",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_285",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T13:15:23.846Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-288",
            "title": "Order item 288 Asymmetric",
            "startDate": "2022-11-15T04:25:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "Description": "Order description 288",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:25:00.000Z",
                            "endDate": "2022-11-15T05:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    141.28,
                                    -18.62
                                ],
                                [
                                    143.91,
                                    -16.4
                                ],
                                [
                                    145.82,
                                    -12.89
                                ],
                                [
                                    147.01,
                                    -10.11
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:15:00.000Z",
                            "endDate": "2022-11-15T08:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                147.5097,
                                -9.88
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:25:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    143.66,
                                    -16.09
                                ],
                                [
                                    147.22,
                                    -9.8
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:14",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Red Force:46",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:37",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:43",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:18",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_288",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T20:27:20.395Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-291",
            "title": "Order item 291 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T10:35:00.000Z",
            "Description": "Order description 291",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.171,
                                    -8.2398
                                ],
                                [
                                    141.07,
                                    -10.03
                                ],
                                [
                                    134.26,
                                    -11.55
                                ],
                                [
                                    127.72,
                                    -13.79
                                ],
                                [
                                    128.2265,
                                    -13.8618
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.69704994972552,
                                        -13.346078647346088
                                    ],
                                    [
                                        127.69704994972552,
                                        -14.376378294170541
                                    ],
                                    [
                                        128.75830468805347,
                                        -14.376378294170541
                                    ],
                                    [
                                        128.75830468805347,
                                        -13.346078647346088
                                    ],
                                    [
                                        127.69704994972552,
                                        -13.346078647346088
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:35:00.000Z",
                            "endDate": "2022-11-15T10:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.171,
                                    -8.2398
                                ],
                                [
                                    127.73,
                                    -13.63
                                ],
                                [
                                    128.2265,
                                    -13.8618
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_291",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T09:23:17.735Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-294",
            "title": "Order item 294 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T06:35:00.000Z",
            "Description": "Order description 294",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:31",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:14",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_294",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-3",
                "roleId": "rk116f52",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T20:03:15.865Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-297",
            "title": "Order item 297 Asymmetric",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T08:15:00.000Z",
            "Description": "Order description 297",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    146.44,
                                    -14.34
                                ],
                                [
                                    143.21,
                                    -18.48
                                ],
                                [
                                    143.0924,
                                    -18.0959
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                143.0924,
                                -18.0959
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    147.51,
                                    -13.59
                                ],
                                [
                                    145.15,
                                    -15.19
                                ],
                                [
                                    143.07,
                                    -18.5
                                ],
                                [
                                    143.0924,
                                    -18.0959
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:14",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_297",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T04:27:14.785Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-300",
            "title": "Order item 300 Asymmetric",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T08:25:00.000Z",
            "Description": "Order description 300",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    138.19,
                                    -10.92
                                ],
                                [
                                    135.8,
                                    -14.27
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                136.121,
                                -14.4905
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9793,
                                    -8.1733
                                ],
                                [
                                    136.2,
                                    -14.28
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_300",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T02:35:14.497Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-303",
            "title": "Order item 303 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T07:55:00.000Z",
            "Description": "Order description 303",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    136.52,
                                    -14.51
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.4357981515902,
                                        -13.824151303660114
                                    ],
                                    [
                                        135.4357981515902,
                                        -15.154851598605767
                                    ],
                                    [
                                        136.8103271103413,
                                        -15.154851598605767
                                    ],
                                    [
                                        136.8103271103413,
                                        -13.824151303660114
                                    ],
                                    [
                                        135.4357981515902,
                                        -13.824151303660114
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T07:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    136.37,
                                    -14.11
                                ],
                                [
                                    136.121,
                                    -14.4905
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:8",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:38",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:4",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:16",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_303",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T14:27:14.998Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-306",
            "title": "Order item 306 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T09:05:00.000Z",
            "Description": "Order description 306",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    141.25,
                                    -17.17
                                ],
                                [
                                    143.94,
                                    -14.45
                                ],
                                [
                                    145.9,
                                    -12.45
                                ],
                                [
                                    147.16,
                                    -10.16
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.29772254235596,
                                        -6.674450869322263
                                    ],
                                    [
                                        144.29772254235596,
                                        -13.054521765165639
                                    ],
                                    [
                                        150.78461294199715,
                                        -13.054521765165639
                                    ],
                                    [
                                        150.78461294199715,
                                        -6.674450869322263
                                    ],
                                    [
                                        144.29772254235596,
                                        -6.674450869322263
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    143.27,
                                    -14.85
                                ],
                                [
                                    147.58,
                                    -10.21
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:28",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_306",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T00:03:16.290Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-309",
            "title": "Order item 309 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T07:35:00.000Z",
            "Description": "Order description 309",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:9",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:29",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_309",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T07:23:18.373Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-312",
            "title": "Order item 312 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "Description": "Order description 312",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    133.94,
                                    -14.66
                                ],
                                [
                                    142.11,
                                    -12.18
                                ],
                                [
                                    149.57,
                                    -10.42
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T05:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    133,
                                    -15.54
                                ],
                                [
                                    137.92,
                                    -13.26
                                ],
                                [
                                    144.13,
                                    -11.7
                                ],
                                [
                                    149.61,
                                    -9.85
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:53",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:33",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:9",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_312",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T20:27:21.246Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-315",
            "title": "Order item 315 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T06:35:00.000Z",
            "Description": "Order description 315",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:26",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:5",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_315",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T15:15:24.910Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-318",
            "title": "Order item 318 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T05:25:00.000Z",
            "Description": "Order description 318",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    121.35,
                                    -18.17
                                ],
                                [
                                    121.6797,
                                    -18.0415
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                },
                {
                    "FEName": "Blue:10",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_318",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T23:47:29.364Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-321",
            "title": "Order item 321 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T04:45:00.000Z",
            "Description": "Order description 321",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:50",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:54",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_321",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-3",
                "roleId": "rk116f52",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T14:03:34.609Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-324",
            "title": "Order item 324 Asymmetric",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T09:15:00.000Z",
            "Description": "Order description 324",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    142.65,
                                    -7.42
                                ],
                                [
                                    138.45,
                                    -8.77
                                ],
                                [
                                    134.53,
                                    -10.83
                                ],
                                [
                                    130.89,
                                    -11.61
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        129.006245898473,
                                        -10.13452524726527
                                    ],
                                    [
                                        129.006245898473,
                                        -13.663210168931267
                                    ],
                                    [
                                        132.61438095779783,
                                        -13.663210168931267
                                    ],
                                    [
                                        132.61438095779783,
                                        -10.13452524726527
                                    ],
                                    [
                                        129.006245898473,
                                        -10.13452524726527
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T09:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    141.55,
                                    -7.62
                                ],
                                [
                                    136.49,
                                    -9.91
                                ],
                                [
                                    130.72,
                                    -11.92
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:15",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_324",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T10:03:40.645Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-327",
            "title": "Order item 327 Asymmetric",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T05:25:00.000Z",
            "Description": "Order description 327",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    127.05,
                                    -12.37
                                ],
                                [
                                    132.28,
                                    -7.66
                                ],
                                [
                                    136.79,
                                    -2.67
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_327",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T19:47:47.470Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-330",
            "title": "Order item 330 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T09:05:00.000Z",
            "Description": "Order description 330",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    141.95,
                                    -12.09
                                ],
                                [
                                    134.58,
                                    -12.83
                                ],
                                [
                                    126.5,
                                    -14.28
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        124.10639454250126,
                                        -11.963954416075632
                                    ],
                                    [
                                        124.10639454250126,
                                        -17.309965256519728
                                    ],
                                    [
                                        129.63911908794074,
                                        -17.309965256519728
                                    ],
                                    [
                                        129.63911908794074,
                                        -11.963954416075632
                                    ],
                                    [
                                        124.10639454250126,
                                        -11.963954416075632
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    127.11,
                                    -14.49
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:11",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_330",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T19:15:55.087Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-333",
            "title": "Order item 333 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "Description": "Order description 333",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Red Force:34",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:9",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2050",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_333",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T00:28:03.494Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-336",
            "title": "Order item 336 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T05:25:00.000Z",
            "Description": "Order description 336",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    139.33,
                                    -13.33
                                ],
                                [
                                    129.46,
                                    -16.38
                                ],
                                [
                                    119.88,
                                    -19.15
                                ],
                                [
                                    119.7138,
                                    -18.9116
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:38",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_336",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T11:24:12.691Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-339",
            "title": "Order item 339 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "Description": "Order description 339",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    146.63,
                                    -12.6
                                ],
                                [
                                    145.57,
                                    -15.52
                                ],
                                [
                                    143.79,
                                    -18.15
                                ],
                                [
                                    143.29,
                                    -20.51
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.9809,
                                -20.6715
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    146.07,
                                    -12.43
                                ],
                                [
                                    145.64,
                                    -14.98
                                ],
                                [
                                    144.5,
                                    -18.25
                                ],
                                [
                                    142.63,
                                    -20.23
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:11",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_339",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T12:04:22.679Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-342",
            "title": "Order item 342 Asymmetric",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T05:35:00.000Z",
            "Description": "Order description 342",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:54",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:4",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:29",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA944",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_342",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T02:28:33.458Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-345",
            "title": "Order item 345 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T08:55:00.000Z",
            "Description": "Order description 345",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    131.93,
                                    -15.13
                                ],
                                [
                                    116.71,
                                    -20.96
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.7521,
                                -20.9262
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    116.56,
                                    -21.04
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_345",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T14:36:45.027Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-348",
            "title": "Order item 348 Transit",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T05:25:00.000Z",
            "Description": "Order description 348",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    140.3,
                                    -14.05
                                ],
                                [
                                    141.87,
                                    -12.1
                                ],
                                [
                                    143.73,
                                    -9.86
                                ],
                                [
                                    145.87,
                                    -8.35
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:25",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:54",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Red Force:50",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_348",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T00:28:57.386Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-351",
            "title": "Order item 351 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T08:25:00.000Z",
            "Description": "Order description 351",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    136.58,
                                    -6.02
                                ],
                                [
                                    133.4,
                                    -9.47
                                ],
                                [
                                    129.52,
                                    -12.65
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.7416,
                                -12.6383
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:05:00.000Z",
                            "endDate": "2022-11-15T08:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    134.76,
                                    -7.91
                                ],
                                [
                                    130.01,
                                    -13.02
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_351",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T08:05:10.536Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-354",
            "title": "Order item 354 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "Description": "Order description 354",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    117.36,
                                    -21.02
                                ],
                                [
                                    117.7434,
                                    -21.0232
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T07:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.76847437980435,
                                        -20.10489219546109
                                    ],
                                    [
                                        116.76847437980435,
                                        -21.935884089010095
                                    ],
                                    [
                                        118.7303740133179,
                                        -21.935884089010095
                                    ],
                                    [
                                        118.7303740133179,
                                        -20.10489219546109
                                    ],
                                    [
                                        116.76847437980435,
                                        -20.10489219546109
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:15:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    132.69,
                                    -13.26
                                ],
                                [
                                    118.18,
                                    -20.78
                                ],
                                [
                                    117.7434,
                                    -21.0232
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_354",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T05:25:24.477Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-357",
            "title": "Order item 357 Asymmetric",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T11:15:00.000Z",
            "Description": "Order description 357",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    142.96,
                                    -10.64
                                ],
                                [
                                    139.29,
                                    -13.98
                                ],
                                [
                                    135.9,
                                    -18.03
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T08:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        132.2604509771805,
                                        -15.44485318190864
                                    ],
                                    [
                                        132.2604509771805,
                                        -21.565966401622003
                                    ],
                                    [
                                        138.7280132048134,
                                        -21.565966401622003
                                    ],
                                    [
                                        138.7280132048134,
                                        -15.44485318190864
                                    ],
                                    [
                                        132.2604509771805,
                                        -15.44485318190864
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:35:00.000Z",
                            "endDate": "2022-11-15T11:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    135.87,
                                    -18.22
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:19",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_357",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T16:29:39.208Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-360",
            "title": "Order item 360 Asymmetric",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T08:15:00.000Z",
            "Description": "Order description 360",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.2438,
                                    -5.6573
                                ],
                                [
                                    140.02,
                                    -9.47
                                ],
                                [
                                    140.97,
                                    -13.12
                                ],
                                [
                                    141.21,
                                    -17.49
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T07:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.07570496063897,
                                        -14.214008126796909
                                    ],
                                    [
                                        138.07570496063897,
                                        -19.825961484358242
                                    ],
                                    [
                                        143.95396630121235,
                                        -19.825961484358242
                                    ],
                                    [
                                        143.95396630121235,
                                        -14.214008126796909
                                    ],
                                    [
                                        138.07570496063897,
                                        -14.214008126796909
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:15:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.2438,
                                    -5.6573
                                ],
                                [
                                    140.53,
                                    -11.26
                                ],
                                [
                                    141.23,
                                    -17.45
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:20",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_360",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T09:17:54.729Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-363",
            "title": "Order item 363 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T06:55:00.000Z",
            "Description": "Order description 363",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    139.33,
                                    -11.31
                                ],
                                [
                                    142.58,
                                    -18.29
                                ],
                                [
                                    142.2515,
                                    -18.0243
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T05:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.70724273596667,
                                        -17.504483305281
                                    ],
                                    [
                                        141.70724273596667,
                                        -18.54258652314625
                                    ],
                                    [
                                        142.79897545601216,
                                        -18.54258652314625
                                    ],
                                    [
                                        142.79897545601216,
                                        -17.504483305281
                                    ],
                                    [
                                        141.70724273596667,
                                        -17.504483305281
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    138.15,
                                    -9.75
                                ],
                                [
                                    140.13,
                                    -13.27
                                ],
                                [
                                    142.39,
                                    -18.5
                                ],
                                [
                                    142.2515,
                                    -18.0243
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:9",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:4",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:16",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_363",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T15:50:11.042Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-366",
            "title": "Order item 366 Kinetic",
            "startDate": "2022-11-15T04:35:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "Description": "Order description 366",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:35:00.000Z",
                            "endDate": "2022-11-15T05:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    133.87,
                                    -14.2
                                ],
                                [
                                    141.01,
                                    -12.24
                                ],
                                [
                                    147.43,
                                    -10
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:25:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.40554398120733,
                                        -8.787000591758494
                                    ],
                                    [
                                        146.40554398120733,
                                        -10.969378653125569
                                    ],
                                    [
                                        148.62120581514822,
                                        -10.969378653125569
                                    ],
                                    [
                                        148.62120581514822,
                                        -8.787000591758494
                                    ],
                                    [
                                        146.40554398120733,
                                        -8.787000591758494
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    147.63,
                                    -10.22
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:27",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_366",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T20:06:28.144Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-369",
            "title": "Order item 369 Transit",
            "startDate": "2022-11-15T04:40:00.000Z",
            "endDate": "2022-11-15T09:40:00.000Z",
            "Description": "Order description 369",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:40:00.000Z",
                            "endDate": "2022-11-15T05:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.2905,
                                    -17.1496
                                ],
                                [
                                    140.65,
                                    -14.59
                                ],
                                [
                                    139.86,
                                    -12.18
                                ],
                                [
                                    139.36,
                                    -10.49
                                ],
                                [
                                    139.15,
                                    -8.51
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:30:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                139.3171,
                                -8.0633
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.2905,
                                    -17.1496
                                ],
                                [
                                    139.27,
                                    -7.57
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:11",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:40",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:28",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2120",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_369",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T22:06:46.037Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-372",
            "title": "Order item 372 Kinetic",
            "startDate": "2022-11-15T04:55:00.000Z",
            "endDate": "2022-11-15T11:45:00.000Z",
            "Description": "Order description 372",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T04:55:00.000Z",
                            "endDate": "2022-11-15T05:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    145.08,
                                    -15.49
                                ],
                                [
                                    147.66,
                                    -10.85
                                ],
                                [
                                    147.4089,
                                    -10.3741
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:45:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.30237132900305,
                                        -7.2775600643418334
                                    ],
                                    [
                                        144.30237132900305,
                                        -13.440217737252778
                                    ],
                                    [
                                        150.57723486150311,
                                        -13.440217737252778
                                    ],
                                    [
                                        150.57723486150311,
                                        -7.2775600643418334
                                    ],
                                    [
                                        144.30237132900305,
                                        -7.2775600643418334
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9809,
                                    -20.6715
                                ],
                                [
                                    145.12,
                                    -15.45
                                ],
                                [
                                    147.68,
                                    -10.81
                                ],
                                [
                                    147.4089,
                                    -10.3741
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:31",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:49",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:28",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_372",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-3",
                "roleId": "rk116f52",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T05:51:04.721Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-375",
            "title": "Order item 375 Transit",
            "startDate": "2022-11-15T05:05:00.000Z",
            "endDate": "2022-11-15T09:15:00.000Z",
            "Description": "Order description 375",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    139.07,
                                    -9.52
                                ],
                                [
                                    139.79,
                                    -13.49
                                ],
                                [
                                    139.8,
                                    -17.17
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T07:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.09082203193674,
                                        -13.172752519388712
                                    ],
                                    [
                                        136.09082203193674,
                                        -20.862494968381693
                                    ],
                                    [
                                        144.15656239083506,
                                        -20.862494968381693
                                    ],
                                    [
                                        144.15656239083506,
                                        -13.172752519388712
                                    ],
                                    [
                                        136.09082203193674,
                                        -13.172752519388712
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:15:00.000Z",
                            "endDate": "2022-11-15T09:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    139.43,
                                    -9.81
                                ],
                                [
                                    139.48,
                                    -13.11
                                ],
                                [
                                    139.81,
                                    -17.12
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:14",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_375",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T19:19:24.195Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-378",
            "title": "Order item 378 Kinetic",
            "startDate": "2022-11-15T05:05:00.000Z",
            "endDate": "2022-11-15T07:45:00.000Z",
            "Description": "Order description 378",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:45",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Red Force:47",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:7",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:43",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2050",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_378",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T22:31:44.460Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-381",
            "title": "Order item 381 Transit",
            "startDate": "2022-11-15T05:05:00.000Z",
            "endDate": "2022-11-15T09:35:00.000Z",
            "Description": "Order description 381",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:05:00.000Z",
                            "endDate": "2022-11-15T05:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    146.35,
                                    -5.55
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T07:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.77023262213592,
                                        -2.530374340388677
                                    ],
                                    [
                                        143.77023262213592,
                                        -7.828887292517161
                                    ],
                                    [
                                        149.0963233725091,
                                        -7.828887292517161
                                    ],
                                    [
                                        149.0963233725091,
                                        -2.530374340388677
                                    ],
                                    [
                                        143.77023262213592,
                                        -2.530374340388677
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:35:00.000Z",
                            "endDate": "2022-11-15T09:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    132.97,
                                    -11.66
                                ],
                                [
                                    137.53,
                                    -9.65
                                ],
                                [
                                    141.38,
                                    -7.37
                                ],
                                [
                                    146.51,
                                    -4.79
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:43",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2037",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_381",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T07:28:05.515Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-384",
            "title": "Order item 384 Asymmetric",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T09:00:00.000Z",
            "Description": "Order description 384",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    138.16,
                                    -12.81
                                ],
                                [
                                    126.45,
                                    -14.99
                                ],
                                [
                                    126.3983,
                                    -14.6078
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T06:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.3983,
                                -14.6078
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:40:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3998,
                                    -10.1238
                                ],
                                [
                                    141.9,
                                    -12.07
                                ],
                                [
                                    134.47,
                                    -12.96
                                ],
                                [
                                    126.33,
                                    -14.56
                                ],
                                [
                                    126.3983,
                                    -14.6078
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:9",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Blue:38",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:11",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_384",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T06:08:27.361Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-387",
            "title": "Order item 387 Asymmetric",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T09:20:00.000Z",
            "Description": "Order description 387",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    129.89,
                                    -13.2
                                ],
                                [
                                    132.7,
                                    -9.6
                                ],
                                [
                                    134.78,
                                    -5.71
                                ],
                                [
                                    137.15,
                                    -1.54
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                137.6034,
                                -1.484
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:30:00.000Z",
                            "endDate": "2022-11-15T09:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    137.87,
                                    -1.32
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Red Force:50",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:43",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_387",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T10:32:49.998Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-390",
            "title": "Order item 390 Transit",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T08:20:00.000Z",
            "Description": "Order description 390",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    145.77,
                                    -12.75
                                ],
                                [
                                    143.53,
                                    -15.04
                                ],
                                [
                                    139.58,
                                    -17.04
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T07:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        138.0659225412968,
                                        -15.141663912880697
                                    ],
                                    [
                                        138.0659225412968,
                                        -18.953658515733288
                                    ],
                                    [
                                        142.05601055716002,
                                        -18.953658515733288
                                    ],
                                    [
                                        142.05601055716002,
                                        -15.141663912880697
                                    ],
                                    [
                                        138.0659225412968,
                                        -15.141663912880697
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:00:00.000Z",
                            "endDate": "2022-11-15T08:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    139.71,
                                    -17.43
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:12",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_390",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T20:41:13.424Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-393",
            "title": "Order item 393 Transit",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T06:40:00.000Z",
            "Description": "Order description 393",
            "Location": "Point-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:59",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_393",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T20:33:37.642Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-396",
            "title": "Order item 396 Asymmetric",
            "startDate": "2022-11-15T05:20:00.000Z",
            "endDate": "2022-11-15T09:00:00.000Z",
            "Description": "Order description 396",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:20:00.000Z",
                            "endDate": "2022-11-15T06:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    144.75,
                                    -6.74
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.83991253378406,
                                        -3.312271815414641
                                    ],
                                    [
                                        140.83991253378406,
                                        -10.43271488502231
                                    ],
                                    [
                                        148.02644907092755,
                                        -10.43271488502231
                                    ],
                                    [
                                        148.02644907092755,
                                        -3.312271815414641
                                    ],
                                    [
                                        140.83991253378406,
                                        -3.312271815414641
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    136.93,
                                    -11.09
                                ],
                                [
                                    140.55,
                                    -9.13
                                ],
                                [
                                    144.46,
                                    -6.89
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:43",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:50",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:15",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_396",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T10:10:02.650Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-399",
            "title": "Order item 399 Asymmetric",
            "startDate": "2022-11-15T05:30:00.000Z",
            "endDate": "2022-11-15T08:40:00.000Z",
            "Description": "Order description 399",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:56",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:55",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:13",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_399",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T05:30:28.448Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-402",
            "title": "Order item 402 Asymmetric",
            "startDate": "2022-11-15T05:30:00.000Z",
            "endDate": "2022-11-15T12:00:00.000Z",
            "Description": "Order description 402",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:30:00.000Z",
                            "endDate": "2022-11-15T06:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    133.37,
                                    -16.15
                                ],
                                [
                                    116.96,
                                    -21.26
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:20:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.7521,
                                -20.9262
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:10:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    116.87,
                                    -20.63
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:30",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Blue:25",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:29",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_402",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T06:34:55.037Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-405",
            "title": "Order item 405 Asymmetric",
            "startDate": "2022-11-15T05:30:00.000Z",
            "endDate": "2022-11-15T09:00:00.000Z",
            "Description": "Order description 405",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:30:00.000Z",
                            "endDate": "2022-11-15T06:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    137.29,
                                    -1.49
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:20:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.54162310127828,
                                        -0.03677737114672316
                                    ],
                                    [
                                        135.54162310127828,
                                        -3.8131280689511944
                                    ],
                                    [
                                        139.32216724341774,
                                        -3.8131280689511944
                                    ],
                                    [
                                        139.32216724341774,
                                        -0.03677737114672316
                                    ],
                                    [
                                        135.54162310127828,
                                        -0.03677737114672316
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    130.1,
                                    -10.43
                                ],
                                [
                                    132.89,
                                    -8.08
                                ],
                                [
                                    134.97,
                                    -4.46
                                ],
                                [
                                    137.33,
                                    -1.55
                                ],
                                [
                                    137.4298,
                                    -1.926
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:47",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:58",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA1397",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_405",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T21:23:22.417Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-408",
            "title": "Order item 408 Asymmetric",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T10:05:00.000Z",
            "Description": "Order description 408",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    144.01,
                                    -10.87
                                ],
                                [
                                    140.42,
                                    -11.9
                                ],
                                [
                                    137.11,
                                    -12.64
                                ],
                                [
                                    133.08,
                                    -13.1
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                132.9811,
                                -13.2215
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    143.87,
                                    -10.73
                                ],
                                [
                                    140.14,
                                    -11.61
                                ],
                                [
                                    136.68,
                                    -12.21
                                ],
                                [
                                    132.52,
                                    -13.52
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:13",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T22:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_408",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T17:55:50.587Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-411",
            "title": "Order item 411 Transit",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T09:25:00.000Z",
            "Description": "Order description 411",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    141.07,
                                    -17.48
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T08:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.33709950350146,
                                        -16.43239564360279
                                    ],
                                    [
                                        140.33709950350146,
                                        -17.647828369253954
                                    ],
                                    [
                                        141.60843380196317,
                                        -17.647828369253954
                                    ],
                                    [
                                        141.60843380196317,
                                        -16.43239564360279
                                    ],
                                    [
                                        140.33709950350146,
                                        -16.43239564360279
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:45:00.000Z",
                            "endDate": "2022-11-15T09:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    139.45,
                                    -11.95
                                ],
                                [
                                    140.71,
                                    -16.79
                                ],
                                [
                                    140.9707,
                                    -17.0411
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Blue:33",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Blue:16",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_411",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T04:12:19.547Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-414",
            "title": "Order item 414 Asymmetric",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T11:05:00.000Z",
            "Description": "Order description 414",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    146.03,
                                    -12.88
                                ],
                                [
                                    142.89,
                                    -15.24
                                ],
                                [
                                    140.04,
                                    -17.32
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T09:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.0406,
                                -17.0574
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:15:00.000Z",
                            "endDate": "2022-11-15T11:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.3719,
                                    -10.3237
                                ],
                                [
                                    144.45,
                                    -13.55
                                ],
                                [
                                    140.03,
                                    -17.31
                                ],
                                [
                                    140.0406,
                                    -17.0574
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:27",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:8",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_414",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T20:12:49.298Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-417",
            "title": "Order item 417 Kinetic",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T06:45:00.000Z",
            "Description": "Order description 417",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.2438,
                                    -5.6573
                                ],
                                [
                                    120.19,
                                    -18.78
                                ],
                                [
                                    120.4755,
                                    -18.6674
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.70105748778067,
                                        -14.982949784204367
                                    ],
                                    [
                                        116.70105748778067,
                                        -22.2731486460453
                                    ],
                                    [
                                        124.41585934530194,
                                        -22.2731486460453
                                    ],
                                    [
                                        124.41585934530194,
                                        -14.982949784204367
                                    ],
                                    [
                                        116.70105748778067,
                                        -14.982949784204367
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.2438,
                                    -5.6573
                                ],
                                [
                                    120.08,
                                    -18.69
                                ],
                                [
                                    120.4755,
                                    -18.6674
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:38",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_417",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T17:57:19.840Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-420",
            "title": "Order item 420 Kinetic",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T06:25:00.000Z",
            "Description": "Order description 420",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    142.68,
                                    -11.28
                                ],
                                [
                                    136.71,
                                    -11.82
                                ],
                                [
                                    132.02,
                                    -13.09
                                ],
                                [
                                    126.62,
                                    -15.06
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:4",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Blue:38",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:8",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_420",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T13:25:51.172Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-423",
            "title": "Order item 423 Asymmetric",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T09:45:00.000Z",
            "Description": "Order description 423",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    137.28,
                                    -13.85
                                ],
                                [
                                    140.35,
                                    -12.3
                                ],
                                [
                                    143.7,
                                    -11.46
                                ],
                                [
                                    147.34,
                                    -10.34
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.13792152799422,
                                        -6.513070176256365
                                    ],
                                    [
                                        144.13792152799422,
                                        -13.212705825562844
                                    ],
                                    [
                                        150.95089189202483,
                                        -13.212705825562844
                                    ],
                                    [
                                        150.95089189202483,
                                        -6.513070176256365
                                    ],
                                    [
                                        144.13792152799422,
                                        -6.513070176256365
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T09:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    138.94,
                                    -13.51
                                ],
                                [
                                    142.97,
                                    -11.33
                                ],
                                [
                                    147.29,
                                    -9.87
                                ],
                                [
                                    147.5097,
                                    -9.88
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:42",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Red Force:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_423",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T06:38:23.294Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-426",
            "title": "Order item 426 Transit",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "Description": "Order description 426",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:19",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_426",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T13:34:56.207Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-429",
            "title": "Order item 429 Asymmetric",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T10:15:00.000Z",
            "Description": "Order description 429",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    144.84,
                                    -9.2
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.14906323458538,
                                        -8.13761341472859
                                    ],
                                    [
                                        143.14906323458538,
                                        -11.105265770557475
                                    ],
                                    [
                                        146.160162178151,
                                        -11.105265770557475
                                    ],
                                    [
                                        146.160162178151,
                                        -8.13761341472859
                                    ],
                                    [
                                        143.14906323458538,
                                        -8.13761341472859
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T10:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    145.54,
                                    -15.18
                                ],
                                [
                                    144.45,
                                    -9.68
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:37",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_429",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T02:15:29.911Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-432",
            "title": "Order item 432 Asymmetric",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T08:45:00.000Z",
            "Description": "Order description 432",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    139.73,
                                    -10.34
                                ],
                                [
                                    142.33,
                                    -19.45
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T06:35:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.1253,
                                -19.3355
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:35:00.000Z",
                            "endDate": "2022-11-15T08:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.4298,
                                    -1.926
                                ],
                                [
                                    140.17,
                                    -10.24
                                ],
                                [
                                    142.44,
                                    -19.02
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_432",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T04:40:04.405Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-435",
            "title": "Order item 435 Kinetic",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T07:25:00.000Z",
            "Description": "Order description 435",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    137.05,
                                    -11.13
                                ],
                                [
                                    133.21,
                                    -12.81
                                ],
                                [
                                    129.66,
                                    -15.2
                                ],
                                [
                                    126.39,
                                    -17.3
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.8957,
                                -17.0157
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    135.22,
                                    -11.42
                                ],
                                [
                                    130.73,
                                    -14.22
                                ],
                                [
                                    126.52,
                                    -16.74
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:35",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Blue:14",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:5",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_435",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T20:48:39.690Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-438",
            "title": "Order item 438 Asymmetric",
            "startDate": "2022-11-15T05:35:00.000Z",
            "endDate": "2022-11-15T10:45:00.000Z",
            "Description": "Order description 438",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:35:00.000Z",
                            "endDate": "2022-11-15T06:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.6686,
                                    -14.5464
                                ],
                                [
                                    146.39,
                                    -6.21
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T08:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.34740342316755,
                                        -2.8588092197500554
                                    ],
                                    [
                                        143.34740342316755,
                                        -9.56889398091732
                                    ],
                                    [
                                        150.10920662702705,
                                        -9.56889398091732
                                    ],
                                    [
                                        150.10920662702705,
                                        -2.8588092197500554
                                    ],
                                    [
                                        143.34740342316755,
                                        -2.8588092197500554
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:25:00.000Z",
                            "endDate": "2022-11-15T10:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.6686,
                                    -14.5464
                                ],
                                [
                                    141.59,
                                    -10.58
                                ],
                                [
                                    146.84,
                                    -6.3
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2829",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_438",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T10:41:15.765Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-441",
            "title": "Order item 441 Asymmetric",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T10:40:00.000Z",
            "Description": "Order description 441",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T06:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    145.17,
                                    -15.24
                                ],
                                [
                                    143.25,
                                    -21.12
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:30:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.7615959843255,
                                        -18.55319725304011
                                    ],
                                    [
                                        140.7615959843255,
                                        -22.760613796017562
                                    ],
                                    [
                                        145.2625688611914,
                                        -22.760613796017562
                                    ],
                                    [
                                        145.2625688611914,
                                        -18.55319725304011
                                    ],
                                    [
                                        140.7615959843255,
                                        -18.55319725304011
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T10:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    146.09,
                                    -13.87
                                ],
                                [
                                    144.72,
                                    -16.76
                                ],
                                [
                                    142.64,
                                    -20.36
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:0",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:4",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:19",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_441",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T22:17:52.631Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-444",
            "title": "Order item 444 Transit",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T11:40:00.000Z",
            "Description": "Order description 444",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T06:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    137.73,
                                    -5.58
                                ],
                                [
                                    135.32,
                                    -7.59
                                ],
                                [
                                    132.18,
                                    -10.31
                                ],
                                [
                                    129.33,
                                    -12.75
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:30:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        127.10745891986112,
                                        -10.03139922366734
                                    ],
                                    [
                                        127.10745891986112,
                                        -15.218818886730782
                                    ],
                                    [
                                        132.4297830848956,
                                        -15.218818886730782
                                    ],
                                    [
                                        132.4297830848956,
                                        -10.03139922366734
                                    ],
                                    [
                                        127.10745891986112,
                                        -10.03139922366734
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:10:00.000Z",
                            "endDate": "2022-11-15T11:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    137.95,
                                    -4.92
                                ],
                                [
                                    135.81,
                                    -7.2
                                ],
                                [
                                    132.96,
                                    -10.2
                                ],
                                [
                                    129.39,
                                    -12.92
                                ],
                                [
                                    129.7416,
                                    -12.6383
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_444",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:38:30.287Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-447",
            "title": "Order item 447 Transit",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T08:00:00.000Z",
            "Description": "Order description 447",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:33",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_447",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T06:43:08.734Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-450",
            "title": "Order item 450 Kinetic",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T08:40:00.000Z",
            "Description": "Order description 450",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T06:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    136.38,
                                    -12.26
                                ],
                                [
                                    135.79,
                                    -18.06
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:30:00.000Z",
                            "endDate": "2022-11-15T07:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                135.4363,
                                -18.5329
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    136.1,
                                    -9.8
                                ],
                                [
                                    135.86,
                                    -13.54
                                ],
                                [
                                    135.9,
                                    -18.99
                                ],
                                [
                                    135.4363,
                                    -18.5329
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:10",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_450",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T19:31:47.971Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-453",
            "title": "Order item 453 Kinetic",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T06:40:00.000Z",
            "Description": "Order description 453",
            "Location": "Point-B",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:14",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Red Force:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_453",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T14:04:27.999Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-456",
            "title": "Order item 456 Transit",
            "startDate": "2022-11-15T05:40:00.000Z",
            "endDate": "2022-11-15T10:20:00.000Z",
            "Description": "Order description 456",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:40:00.000Z",
                            "endDate": "2022-11-15T06:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    130.81,
                                    -15.05
                                ],
                                [
                                    144.36,
                                    -9.6
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:30:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T10:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    144.27,
                                    -9.74
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:53",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_456",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T14:21:08.818Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-459",
            "title": "Order item 459 Transit",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T09:35:00.000Z",
            "Description": "Order description 459",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    135.84,
                                    -10.51
                                ],
                                [
                                    131.08,
                                    -12.27
                                ],
                                [
                                    126.61,
                                    -14.76
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T07:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        124.40722625345336,
                                        -12.264290287679145
                                    ],
                                    [
                                        124.40722625345336,
                                        -17.016498305389938
                                    ],
                                    [
                                        129.3241043830244,
                                        -17.016498305389938
                                    ],
                                    [
                                        129.3241043830244,
                                        -12.264290287679145
                                    ],
                                    [
                                        124.40722625345336,
                                        -12.264290287679145
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:05:00.000Z",
                            "endDate": "2022-11-15T09:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    126.52,
                                    -15.01
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_459",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T04:21:50.427Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-462",
            "title": "Order item 462 Asymmetric",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T10:35:00.000Z",
            "Description": "Order description 462",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    140.4,
                                    -13.34
                                ],
                                [
                                    138.92,
                                    -8.1
                                ],
                                [
                                    137.72,
                                    -2.59
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T08:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        134.0781859182741,
                                        0.424891122518623
                                    ],
                                    [
                                        134.0781859182741,
                                        -5.9873366954910985
                                    ],
                                    [
                                        140.50812978939246,
                                        -5.9873366954910985
                                    ],
                                    [
                                        140.50812978939246,
                                        0.424891122518623
                                    ],
                                    [
                                        134.0781859182741,
                                        0.424891122518623
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:25:00.000Z",
                            "endDate": "2022-11-15T10:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.1253,
                                    -19.3355
                                ],
                                [
                                    140.68,
                                    -13.63
                                ],
                                [
                                    138.48,
                                    -8.69
                                ],
                                [
                                    137.57,
                                    -2.46
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:53",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:43",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:49",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA155",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_462",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T08:06:32.826Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-465",
            "title": "Order item 465 Transit",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T10:25:00.000Z",
            "Description": "Order description 465",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    149.33,
                                    -10.49
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T07:25:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:25:00.000Z",
                            "endDate": "2022-11-15T10:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    130.0699,
                                    -12.4965
                                ],
                                [
                                    149.05,
                                    -10.19
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:13",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:50",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:6",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_465",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T17:35:16.016Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-468",
            "title": "Order item 468 Asymmetric",
            "startDate": "2022-11-15T05:55:00.000Z",
            "endDate": "2022-11-15T09:35:00.000Z",
            "Description": "Order description 468",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T05:55:00.000Z",
                            "endDate": "2022-11-15T06:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    133.88,
                                    -13.1
                                ],
                                [
                                    139.95,
                                    -10.12
                                ],
                                [
                                    146.3,
                                    -5.85
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:45:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.7067,
                                -6.2246
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T09:35:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.8957,
                                    -17.0157
                                ],
                                [
                                    146.95,
                                    -5.73
                                ],
                                [
                                    146.7067,
                                    -6.2246
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:26",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_468",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T08:47:59.996Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-471",
            "title": "Order item 471 Transit",
            "startDate": "2022-11-15T06:05:00.000Z",
            "endDate": "2022-11-15T06:55:00.000Z",
            "Description": "Order description 471",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:05:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    136.11,
                                    -10.28
                                ],
                                [
                                    125.97,
                                    -14.47
                                ],
                                [
                                    126.3983,
                                    -14.6078
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:34",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:4",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_471",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T13:44:44.767Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-474",
            "title": "Order item 474 Transit",
            "startDate": "2022-11-15T06:05:00.000Z",
            "endDate": "2022-11-15T07:45:00.000Z",
            "Description": "Order description 474",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:41",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:11",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_474",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T00:25:30.329Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-477",
            "title": "Order item 477 Kinetic",
            "startDate": "2022-11-15T06:05:00.000Z",
            "endDate": "2022-11-15T11:55:00.000Z",
            "Description": "Order description 477",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:05:00.000Z",
                            "endDate": "2022-11-15T06:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    149.28,
                                    -9.66
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:55:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.4332034896393,
                                        -9.168137867294558
                                    ],
                                    [
                                        148.4332034896393,
                                        -11.076623650416288
                                    ],
                                    [
                                        150.37216282355945,
                                        -11.076623650416288
                                    ],
                                    [
                                        150.37216282355945,
                                        -9.168137867294558
                                    ],
                                    [
                                        148.4332034896393,
                                        -9.168137867294558
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T11:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    141.48,
                                    -14.45
                                ],
                                [
                                    144.07,
                                    -13.06
                                ],
                                [
                                    146.95,
                                    -11.39
                                ],
                                [
                                    149.11,
                                    -10.44
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:57",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_477",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T16:50:16.681Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-480",
            "title": "Order item 480 Kinetic",
            "startDate": "2022-11-15T06:20:00.000Z",
            "endDate": "2022-11-15T07:10:00.000Z",
            "Description": "Order description 480",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:20:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    142.03,
                                    -10.84
                                ],
                                [
                                    137.52,
                                    -11.84
                                ],
                                [
                                    132.29,
                                    -13.56
                                ],
                                [
                                    126.34,
                                    -14.99
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:0",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:7",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:27",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_480",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T06:59:03.824Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-483",
            "title": "Order item 483 Asymmetric",
            "startDate": "2022-11-15T06:20:00.000Z",
            "endDate": "2022-11-15T09:30:00.000Z",
            "Description": "Order description 483",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:20:00.000Z",
                            "endDate": "2022-11-15T07:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    132.09,
                                    -7.7
                                ],
                                [
                                    137.65,
                                    -1.44
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:10:00.000Z",
                            "endDate": "2022-11-15T09:20:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.6939137133438,
                                        -0.5743724656462499
                                    ],
                                    [
                                        136.6939137133438,
                                        -2.393253479931166
                                    ],
                                    [
                                        138.51363459926233,
                                        -2.393253479931166
                                    ],
                                    [
                                        138.51363459926233,
                                        -0.5743724656462499
                                    ],
                                    [
                                        136.6939137133438,
                                        -0.5743724656462499
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:20:00.000Z",
                            "endDate": "2022-11-15T09:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    137.51,
                                    -1.09
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Red Force:26",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_483",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T18:51:51.757Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-486",
            "title": "Order item 486 Transit",
            "startDate": "2022-11-15T06:25:00.000Z",
            "endDate": "2022-11-15T08:05:00.000Z",
            "Description": "Order description 486",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:25:00.000Z",
                            "endDate": "2022-11-15T07:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0081,
                                    -17.4033
                                ],
                                [
                                    131.27,
                                    -12.6
                                ],
                                [
                                    140.98,
                                    -8.36
                                ],
                                [
                                    140.9793,
                                    -8.1733
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:15:00.000Z",
                            "endDate": "2022-11-15T07:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9793,
                                -8.1733
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:45:00.000Z",
                            "endDate": "2022-11-15T08:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0081,
                                    -17.4033
                                ],
                                [
                                    131.33,
                                    -12.6
                                ],
                                [
                                    141.07,
                                    -8.4
                                ],
                                [
                                    140.9793,
                                    -8.1733
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:47",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:27",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_486",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T20:28:40.480Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-489",
            "title": "Order item 489 Kinetic",
            "startDate": "2022-11-15T06:40:00.000Z",
            "endDate": "2022-11-15T09:20:00.000Z",
            "Description": "Order description 489",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:40:00.000Z",
                            "endDate": "2022-11-15T07:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    140.34,
                                    -14.66
                                ],
                                [
                                    140.44,
                                    -12.46
                                ],
                                [
                                    140.83,
                                    -9.97
                                ],
                                [
                                    140.5,
                                    -8.2
                                ],
                                [
                                    140.9793,
                                    -8.1733
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:30:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                140.9793,
                                -8.1733
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T09:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    139.93,
                                    -13.96
                                ],
                                [
                                    140.9,
                                    -10.81
                                ],
                                [
                                    141.15,
                                    -8.37
                                ],
                                [
                                    140.9793,
                                    -8.1733
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:32",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:57",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_489",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T11:49:29.994Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-492",
            "title": "Order item 492 Asymmetric",
            "startDate": "2022-11-15T06:50:00.000Z",
            "endDate": "2022-11-15T12:00:00.000Z",
            "Description": "Order description 492",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:50:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    133.62,
                                    -12.71
                                ],
                                [
                                    124.82,
                                    -16.75
                                ],
                                [
                                    116.29,
                                    -21.51
                                ],
                                [
                                    116.4863,
                                    -21.3267
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.4863,
                                -21.3267
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    128.74,
                                    -14.52
                                ],
                                [
                                    116.22,
                                    -21.2
                                ],
                                [
                                    116.4863,
                                    -21.3267
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:31",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_492",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-1",
                "roleId": "1rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T00:54:20.299Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-495",
            "title": "Order item 495 Kinetic",
            "startDate": "2022-11-15T06:50:00.000Z",
            "endDate": "2022-11-15T09:20:00.000Z",
            "Description": "Order description 495",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:50:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    147.64,
                                    -14.06
                                ],
                                [
                                    145.2,
                                    -16.32
                                ],
                                [
                                    142.05,
                                    -19.31
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:20:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        140.28522669044014,
                                        -17.571984769662897
                                    ],
                                    [
                                        140.28522669044014,
                                        -21.08015222037583
                                    ],
                                    [
                                        144.0053415829303,
                                        -21.08015222037583
                                    ],
                                    [
                                        144.0053415829303,
                                        -17.571984769662897
                                    ],
                                    [
                                        140.28522669044014,
                                        -17.571984769662897
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:20:00.000Z",
                            "endDate": "2022-11-15T09:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    141.65,
                                    -19.21
                                ],
                                [
                                    142.1253,
                                    -19.3355
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:24",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:8",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_495",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T11:43:11.394Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-498",
            "title": "Order item 498 Asymmetric",
            "startDate": "2022-11-15T06:50:00.000Z",
            "endDate": "2022-11-15T13:40:00.000Z",
            "Description": "Order description 498",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:50:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    137.94,
                                    -10.97
                                ],
                                [
                                    130.66,
                                    -11.91
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T10:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        128.98372745528124,
                                        -10.11208907124493
                                    ],
                                    [
                                        128.98372745528124,
                                        -13.685354551317655
                                    ],
                                    [
                                        132.6374954908301,
                                        -13.685354551317655
                                    ],
                                    [
                                        132.6374954908301,
                                        -10.11208907124493
                                    ],
                                    [
                                        128.98372745528124,
                                        -10.11208907124493
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T10:50:00.000Z",
                            "endDate": "2022-11-15T13:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    130.86,
                                    -12.35
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:36",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:10",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                },
                {
                    "FEName": "Blue:33",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_498",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T04:16:03.280Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-501",
            "title": "Order item 501 Kinetic",
            "startDate": "2022-11-15T06:50:00.000Z",
            "endDate": "2022-11-15T10:50:00.000Z",
            "Description": "Order description 501",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:50:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    132.82,
                                    -6.69
                                ],
                                [
                                    126.92,
                                    -11.02
                                ],
                                [
                                    122.31,
                                    -16.06
                                ],
                                [
                                    116.97,
                                    -20.82
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                116.7521,
                                -20.9262
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T10:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.6034,
                                    -1.484
                                ],
                                [
                                    130.2,
                                    -7.9
                                ],
                                [
                                    123.92,
                                    -14.2
                                ],
                                [
                                    116.92,
                                    -21.22
                                ],
                                [
                                    116.7521,
                                    -20.9262
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:33",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Blue:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_501",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T02:32:55.956Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-504",
            "title": "Order item 504 Asymmetric",
            "startDate": "2022-11-15T06:50:00.000Z",
            "endDate": "2022-11-15T09:00:00.000Z",
            "Description": "Order description 504",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T06:50:00.000Z",
                            "endDate": "2022-11-15T07:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.185,
                                    -13.1681
                                ],
                                [
                                    149.79,
                                    -9.9
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3998,
                                -10.1238
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:00:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.185,
                                    -13.1681
                                ],
                                [
                                    141.49,
                                    -11.56
                                ],
                                [
                                    149.08,
                                    -9.68
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:58",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:49",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:41",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_504",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T14:33:49.423Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-507",
            "title": "Order item 507 Asymmetric",
            "startDate": "2022-11-15T06:55:00.000Z",
            "endDate": "2022-11-15T09:15:00.000Z",
            "Description": "Order description 507",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Red Force:50",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:41",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:49",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_507",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T08:18:43.680Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-510",
            "title": "Order item 510 Transit",
            "startDate": "2022-11-15T07:10:00.000Z",
            "endDate": "2022-11-15T09:50:00.000Z",
            "Description": "Order description 510",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:10:00.000Z",
                            "endDate": "2022-11-15T08:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    124.4507,
                                    -20.6765
                                ],
                                [
                                    129.74,
                                    -16.39
                                ],
                                [
                                    135.85,
                                    -13.28
                                ],
                                [
                                    141.25,
                                    -8.9
                                ],
                                [
                                    145.93,
                                    -5.23
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:00:00.000Z",
                            "endDate": "2022-11-15T08:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.98430158251327,
                                        -3.7488514450319155
                                    ],
                                    [
                                        144.98430158251327,
                                        -6.618286475265213
                                    ],
                                    [
                                        147.86644833201902,
                                        -6.618286475265213
                                    ],
                                    [
                                        147.86644833201902,
                                        -3.7488514450319155
                                    ],
                                    [
                                        144.98430158251327,
                                        -3.7488514450319155
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    124.4507,
                                    -20.6765
                                ],
                                [
                                    129.7,
                                    -16.45
                                ],
                                [
                                    135.83,
                                    -13.36
                                ],
                                [
                                    141.24,
                                    -8.98
                                ],
                                [
                                    145.93,
                                    -5.32
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:49",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_510",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T07:47:38.728Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-513",
            "title": "Order item 513 Transit",
            "startDate": "2022-11-15T07:20:00.000Z",
            "endDate": "2022-11-15T10:20:00.000Z",
            "Description": "Order description 513",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:20:00.000Z",
                            "endDate": "2022-11-15T08:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    117.73,
                                    -21.47
                                ],
                                [
                                    117.7434,
                                    -21.0232
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        117.52139657935072,
                                        -20.815542735606822
                                    ],
                                    [
                                        117.52139657935072,
                                        -21.230568411444
                                    ],
                                    [
                                        117.96602232074963,
                                        -21.230568411444
                                    ],
                                    [
                                        117.96602232074963,
                                        -20.815542735606822
                                    ],
                                    [
                                        117.52139657935072,
                                        -20.815542735606822
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T10:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    117.3,
                                    -21.26
                                ],
                                [
                                    117.7434,
                                    -21.0232
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:36",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_513",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T21:00:34.566Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-516",
            "title": "Order item 516 Asymmetric",
            "startDate": "2022-11-15T07:20:00.000Z",
            "endDate": "2022-11-15T12:20:00.000Z",
            "Description": "Order description 516",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:20:00.000Z",
                            "endDate": "2022-11-15T08:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    137.75,
                                    -10.4
                                ],
                                [
                                    146.16,
                                    -8.77
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T10:20:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                145.878,
                                -8.4283
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T10:20:00.000Z",
                            "endDate": "2022-11-15T12:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    145.71,
                                    -8.52
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:41",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:5",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2499",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_516",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-26T23:57:31.195Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-519",
            "title": "Order item 519 Asymmetric",
            "startDate": "2022-11-15T07:25:00.000Z",
            "endDate": "2022-11-15T13:45:00.000Z",
            "Description": "Order description 519",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:25:00.000Z",
                            "endDate": "2022-11-15T08:15:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.579,
                                    -14.574
                                ],
                                [
                                    132.05,
                                    -13.19
                                ],
                                [
                                    138.43,
                                    -11.91
                                ],
                                [
                                    144.1,
                                    -11.34
                                ],
                                [
                                    149.05,
                                    -10.49
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:15:00.000Z",
                            "endDate": "2022-11-15T10:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.95854846965838,
                                        -6.687924931088782
                                    ],
                                    [
                                        145.95854846965838,
                                        -13.523149084605995
                                    ],
                                    [
                                        152.91518631820986,
                                        -13.523149084605995
                                    ],
                                    [
                                        152.91518631820986,
                                        -6.687924931088782
                                    ],
                                    [
                                        145.95854846965838,
                                        -6.687924931088782
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T10:45:00.000Z",
                            "endDate": "2022-11-15T13:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.579,
                                    -14.574
                                ],
                                [
                                    137.83,
                                    -12.17
                                ],
                                [
                                    149.49,
                                    -10.35
                                ],
                                [
                                    149.3998,
                                    -10.1238
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:45",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:43",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
                },
                {
                    "FEName": "Red Force:57",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_519",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T08:38:28.614Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-522",
            "title": "Order item 522 Kinetic",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T09:30:00.000Z",
            "Description": "Order description 522",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    140.15,
                                    -11.41
                                ],
                                [
                                    131.05,
                                    -12.08
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                130.7986,
                                -11.9046
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:10:00.000Z",
                            "endDate": "2022-11-15T09:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    131.2,
                                    -11.66
                                ],
                                [
                                    130.7986,
                                    -11.9046
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Blue:12",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_522",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T23:03:26.824Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-525",
            "title": "Order item 525 Asymmetric",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T08:30:00.000Z",
            "Description": "Order description 525",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.2515,
                                    -18.0243
                                ],
                                [
                                    143.92,
                                    -6.7
                                ],
                                [
                                    144.4062,
                                    -6.8859
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:47",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:29",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_525",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T03:12:25.825Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-528",
            "title": "Order item 528 Kinetic",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T08:30:00.000Z",
            "Description": "Order description 528",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    143.12,
                                    -14.49
                                ],
                                [
                                    146.48,
                                    -12.64
                                ],
                                [
                                    149.12,
                                    -10.51
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:38",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_528",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T13:05:25.616Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-531",
            "title": "Order item 531 Asymmetric",
            "startDate": "2022-11-15T07:40:00.000Z",
            "endDate": "2022-11-15T12:30:00.000Z",
            "Description": "Order description 531",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:40:00.000Z",
                            "endDate": "2022-11-15T08:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    129.13,
                                    -15.67
                                ],
                                [
                                    137.83,
                                    -11.64
                                ],
                                [
                                    145.81,
                                    -8.33
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:30:00.000Z",
                            "endDate": "2022-11-15T10:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                145.878,
                                -8.4283
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T10:50:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    120.4755,
                                    -18.6674
                                ],
                                [
                                    145.53,
                                    -8.49
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:59",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:25",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_531",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T12:42:26.197Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-534",
            "title": "Order item 534 Kinetic",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T11:00:00.000Z",
            "Description": "Order description 534",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    131.67,
                                    -10.6
                                ],
                                [
                                    124.88,
                                    -15.36
                                ],
                                [
                                    119.37,
                                    -19.83
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:40:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T11:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    132.44,
                                    -10.38
                                ],
                                [
                                    128.23,
                                    -13.11
                                ],
                                [
                                    123.3,
                                    -16.56
                                ],
                                [
                                    118.65,
                                    -19.73
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:37",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_534",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T18:03:27.569Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-537",
            "title": "Order item 537 Asymmetric",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T08:40:00.000Z",
            "Description": "Order description 537",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    145.62,
                                    -8.42
                                ],
                                [
                                    145.878,
                                    -8.4283
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:28",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:31",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_537",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T13:08:29.732Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-540",
            "title": "Order item 540 Asymmetric",
            "startDate": "2022-11-15T07:50:00.000Z",
            "endDate": "2022-11-15T10:30:00.000Z",
            "Description": "Order description 540",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T07:50:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    123.6516,
                                    -16.579
                                ],
                                [
                                    134.54,
                                    -12.7
                                ],
                                [
                                    144.97,
                                    -9.3
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:40:00.000Z",
                            "endDate": "2022-11-15T08:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                144.648,
                                -9.6247
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:40:00.000Z",
                            "endDate": "2022-11-15T10:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    123.6516,
                                    -16.579
                                ],
                                [
                                    144.74,
                                    -10.01
                                ],
                                [
                                    144.648,
                                    -9.6247
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:30",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Red Force:25",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2050",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_540",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T13:57:32.685Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-543",
            "title": "Order item 543 Kinetic",
            "startDate": "2022-11-15T08:05:00.000Z",
            "endDate": "2022-11-15T13:25:00.000Z",
            "Description": "Order description 543",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    128.54,
                                    -12.81
                                ],
                                [
                                    119.03,
                                    -19.78
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T11:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T11:05:00.000Z",
                            "endDate": "2022-11-15T13:25:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    128.67,
                                    -12.55
                                ],
                                [
                                    119.1,
                                    -19.45
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:4",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:33",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:34",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:8",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_543",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "CO",
                "roleId": "rkr226f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T04:30:36.428Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-546",
            "title": "Order item 546 Kinetic",
            "startDate": "2022-11-15T08:05:00.000Z",
            "endDate": "2022-11-15T11:45:00.000Z",
            "Description": "Order description 546",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    137.28,
                                    -13.23
                                ],
                                [
                                    140.5,
                                    -9.92
                                ],
                                [
                                    143,
                                    -7.33
                                ],
                                [
                                    146.78,
                                    -5.45
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T10:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.87056006933554,
                                        -1.6251305641276128
                                    ],
                                    [
                                        142.87056006933554,
                                        -8.725237034868105
                                    ],
                                    [
                                        150.01382965393682,
                                        -8.725237034868105
                                    ],
                                    [
                                        150.01382965393682,
                                        -1.6251305641276128
                                    ],
                                    [
                                        142.87056006933554,
                                        -1.6251305641276128
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T10:05:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    137.61,
                                    -13.41
                                ],
                                [
                                    140.08,
                                    -10.36
                                ],
                                [
                                    142.83,
                                    -8.02
                                ],
                                [
                                    146.87,
                                    -5.4
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:12",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:47",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:42",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA2037",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_546",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T00:47:40.962Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-549",
            "title": "Order item 549 Transit",
            "startDate": "2022-11-15T08:05:00.000Z",
            "endDate": "2022-11-15T12:05:00.000Z",
            "Description": "Order description 549",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5793,
                                    -9.9615
                                ],
                                [
                                    140.99,
                                    -11.56
                                ],
                                [
                                    132.71,
                                    -12.85
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T09:05:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        130.7761710771416,
                                        -11.047924694867456
                                    ],
                                    [
                                        130.7761710771416,
                                        -15.37584579542202
                                    ],
                                    [
                                        135.2255186824572,
                                        -15.37584579542202
                                    ],
                                    [
                                        135.2255186824572,
                                        -11.047924694867456
                                    ],
                                    [
                                        130.7761710771416,
                                        -11.047924694867456
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:05:00.000Z",
                            "endDate": "2022-11-15T12:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5793,
                                    -9.9615
                                ],
                                [
                                    143.41,
                                    -11.32
                                ],
                                [
                                    138.29,
                                    -11.64
                                ],
                                [
                                    133.45,
                                    -13.67
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:13",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_549",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T02:48:46.287Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-552",
            "title": "Order item 552 Transit",
            "startDate": "2022-11-15T08:05:00.000Z",
            "endDate": "2022-11-15T12:05:00.000Z",
            "Description": "Order description 552",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:05:00.000Z",
                            "endDate": "2022-11-15T08:55:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    139.26,
                                    -22.28
                                ],
                                [
                                    139.571,
                                    -21.941
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:55:00.000Z",
                            "endDate": "2022-11-15T11:45:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.17729783862023,
                                        -18.690849811218442
                                    ],
                                    [
                                        136.17729783862023,
                                        -25.118262539947096
                                    ],
                                    [
                                        143.12167611214932,
                                        -25.118262539947096
                                    ],
                                    [
                                        143.12167611214932,
                                        -18.690849811218442
                                    ],
                                    [
                                        136.17729783862023,
                                        -18.690849811218442
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T11:45:00.000Z",
                            "endDate": "2022-11-15T12:05:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    144.47,
                                    -10.42
                                ],
                                [
                                    143.02,
                                    -13.84
                                ],
                                [
                                    140.85,
                                    -17.97
                                ],
                                [
                                    139.97,
                                    -21.82
                                ],
                                [
                                    139.571,
                                    -21.941
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:16",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_552",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T18:33:52.402Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-555",
            "title": "Order item 555 Asymmetric",
            "startDate": "2022-11-15T08:05:00.000Z",
            "endDate": "2022-11-15T09:55:00.000Z",
            "Description": "Order description 555",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:52",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA1555",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_555",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-2",
                "roleId": "rk116f51",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T16:02:59.308Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-558",
            "title": "Order item 558 Transit",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T13:10:00.000Z",
            "Description": "Order description 558",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    136.64,
                                    -10.26
                                ],
                                [
                                    133.46,
                                    -12.01
                                ],
                                [
                                    130.56,
                                    -13.48
                                ],
                                [
                                    126.95,
                                    -14.66
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.839,
                                -14.6533
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T13:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    135.13,
                                    -10.71
                                ],
                                [
                                    131.61,
                                    -12.72
                                ],
                                [
                                    126.38,
                                    -14.45
                                ],
                                [
                                    126.839,
                                    -14.6533
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:9",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_558",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T03:16:07.004Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-561",
            "title": "Order item 561 Asymmetric",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T08:50:00.000Z",
            "Description": "Order description 561",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:4",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:9",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:19",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_561",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-29T04:13:15.491Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-564",
            "title": "Order item 564 Transit",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T13:50:00.000Z",
            "Description": "Order description 564",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    129,
                                    -12.48
                                ],
                                [
                                    133.96,
                                    -7.09
                                ],
                                [
                                    137.2,
                                    -1.42
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T12:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        136.3170919618797,
                                        -0.1973255768674355
                                    ],
                                    [
                                        136.3170919618797,
                                        -2.769925958323886
                                    ],
                                    [
                                        138.89120528083464,
                                        -2.769925958323886
                                    ],
                                    [
                                        138.89120528083464,
                                        -0.1973255768674355
                                    ],
                                    [
                                        136.3170919618797,
                                        -0.1973255768674355
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T12:10:00.000Z",
                            "endDate": "2022-11-15T13:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    137.7,
                                    -1.93
                                ],
                                [
                                    137.6034,
                                    -1.484
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:31",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_564",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-4",
                "roleId": "rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T02:54:24.768Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-567",
            "title": "Order item 567 Transit",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T13:10:00.000Z",
            "Description": "Order description 567",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    127.37,
                                    -16.98
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T11:30:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                126.8957,
                                -17.0157
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T11:30:00.000Z",
                            "endDate": "2022-11-15T13:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    127.08,
                                    -16.63
                                ],
                                [
                                    126.8957,
                                    -17.0157
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:18",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_567",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-21T15:19:34.836Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-570",
            "title": "Order item 570 Kinetic",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T13:00:00.000Z",
            "Description": "Order description 570",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    136.7,
                                    -12.51
                                ],
                                [
                                    138.53,
                                    -10.29
                                ],
                                [
                                    139.65,
                                    -7.78
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.31174158683822,
                                        -4.048323309798692
                                    ],
                                    [
                                        135.31174158683822,
                                        -12.038627979295706
                                    ],
                                    [
                                        143.40244392944425,
                                        -12.038627979295706
                                    ],
                                    [
                                        143.40244392944425,
                                        -4.048323309798692
                                    ],
                                    [
                                        135.31174158683822,
                                        -4.048323309798692
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:50:00.000Z",
                            "endDate": "2022-11-15T13:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    138.88,
                                    -8.16
                                ],
                                [
                                    139.3171,
                                    -8.0633
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:58",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:26",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_570",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Mar-1",
                "roleId": "rk116f5e",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T17:28:45.694Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-573",
            "title": "Order item 573 Kinetic",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T15:20:00.000Z",
            "Description": "Order description 573",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    138.74,
                                    -15.61
                                ],
                                [
                                    138.7422,
                                    -15.9904
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T12:10:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.38550548841502,
                                        -14.673681590479633
                                    ],
                                    [
                                        137.38550548841502,
                                        -17.29849897087058
                                    ],
                                    [
                                        140.11682431125243,
                                        -17.29849897087058
                                    ],
                                    [
                                        140.11682431125243,
                                        -14.673681590479633
                                    ],
                                    [
                                        137.38550548841502,
                                        -14.673681590479633
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T12:10:00.000Z",
                            "endDate": "2022-11-15T15:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    138.69,
                                    -16.41
                                ],
                                [
                                    138.7422,
                                    -15.9904
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:4",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:13",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_573",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-2",
                "roleId": "2rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T01:21:57.343Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-576",
            "title": "Order item 576 Asymmetric",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T15:00:00.000Z",
            "Description": "Order description 576",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    142.87,
                                    -14
                                ],
                                [
                                    139.43,
                                    -21.97
                                ],
                                [
                                    139.571,
                                    -21.941
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.83223912616228,
                                        -20.301027560727324
                                    ],
                                    [
                                        137.83223912616228,
                                        -23.562260271513793
                                    ],
                                    [
                                        141.35009539680095,
                                        -23.562260271513793
                                    ],
                                    [
                                        141.35009539680095,
                                        -20.301027560727324
                                    ],
                                    [
                                        137.83223912616228,
                                        -20.301027560727324
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T11:50:00.000Z",
                            "endDate": "2022-11-15T15:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.7545,
                                    -5.607
                                ],
                                [
                                    139.71,
                                    -21.6
                                ],
                                [
                                    139.571,
                                    -21.941
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:28",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Blue:8",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:34",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_576",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-27T22:59:09.782Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-579",
            "title": "Order item 579 Transit",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T12:30:00.000Z",
            "Description": "Order description 579",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.9287,
                                    -8.5974
                                ],
                                [
                                    137.78,
                                    -9.96
                                ],
                                [
                                    135.49,
                                    -10.46
                                ],
                                [
                                    134.49,
                                    -11.68
                                ],
                                [
                                    132.77,
                                    -13.62
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        130.01288425820138,
                                        -10.283686640425678
                                    ],
                                    [
                                        130.01288425820138,
                                        -16.124251435566563
                                    ],
                                    [
                                        136.02129429151,
                                        -16.124251435566563
                                    ],
                                    [
                                        136.02129429151,
                                        -10.283686640425678
                                    ],
                                    [
                                        130.01288425820138,
                                        -10.283686640425678
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T12:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.9287,
                                    -8.5974
                                ],
                                [
                                    133.1,
                                    -12.94
                                ],
                                [
                                    132.9811,
                                    -13.2215
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Blue:0",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_579",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Comms",
                "roleId": "rkr226f5b",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-28T02:20:23.012Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-582",
            "title": "Order item 582 Kinetic",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T12:00:00.000Z",
            "Description": "Order description 582",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.1967,
                                    -18.1747
                                ],
                                [
                                    130.08,
                                    -13.98
                                ],
                                [
                                    138.21,
                                    -9.53
                                ],
                                [
                                    146.64,
                                    -4.79
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T10:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                146.4221,
                                -5.1852
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T10:50:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    121.1967,
                                    -18.1747
                                ],
                                [
                                    146.56,
                                    -4.85
                                ],
                                [
                                    146.4221,
                                    -5.1852
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_582",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Air-3",
                "roleId": "3rk116f53",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T11:25:37.032Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-585",
            "title": "Order item 585 Asymmetric",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T11:50:00.000Z",
            "Description": "Order description 585",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    118.78,
                                    -19.54
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T10:50:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.0578,
                                -19.4518
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T10:50:00.000Z",
                            "endDate": "2022-11-15T11:50:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    138.67,
                                    -11.61
                                ],
                                [
                                    131.68,
                                    -14.63
                                ],
                                [
                                    124.98,
                                    -17.36
                                ],
                                [
                                    118.55,
                                    -19.81
                                ],
                                [
                                    119.0578,
                                    -19.4518
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:33",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_585",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "White Goods",
                "roleId": "rkr226f5c",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-25T10:14:51.843Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-588",
            "title": "Order item 588 Kinetic",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T12:20:00.000Z",
            "Description": "Order description 588",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.185,
                                    -13.1681
                                ],
                                [
                                    138.53,
                                    -12.62
                                ],
                                [
                                    144.04,
                                    -10.93
                                ],
                                [
                                    149.82,
                                    -9.96
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.82380305694898,
                                        -7.789059240800246
                                    ],
                                    [
                                        146.82380305694898,
                                        -12.838040756342126
                                    ],
                                    [
                                        151.96124297385356,
                                        -12.838040756342126
                                    ],
                                    [
                                        151.96124297385356,
                                        -7.789059240800246
                                    ],
                                    [
                                        146.82380305694898,
                                        -7.789059240800246
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a10",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T12:20:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.185,
                                    -13.1681
                                ],
                                [
                                    138.2,
                                    -12.2
                                ],
                                [
                                    144.33,
                                    -11.13
                                ],
                                [
                                    149.74,
                                    -10.78
                                ],
                                [
                                    149.3719,
                                    -10.3237
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "Blue:17",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_588",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T14:48:07.445Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-591",
            "title": "Order item 591 Asymmetric",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T10:10:00.000Z",
            "Description": "Order description 591",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    145.66,
                                    -15.56
                                ],
                                [
                                    142.56,
                                    -20.51
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T09:40:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.9809,
                                -20.6715
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:40:00.000Z",
                            "endDate": "2022-11-15T10:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.2461,
                                    -10.1388
                                ],
                                [
                                    146.69,
                                    -12.51
                                ],
                                [
                                    146.05,
                                    -14.97
                                ],
                                [
                                    144.7,
                                    -18.15
                                ],
                                [
                                    142.63,
                                    -21.04
                                ],
                                [
                                    142.9809,
                                    -20.6715
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:14",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_591",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Furnishing",
                "roleId": "rkr226f5d",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T09:05:23.837Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-594",
            "title": "Order item 594 Kinetic",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T09:40:00.000Z",
            "Description": "Order description 594",
            "Location": "Region-A",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:54",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA155",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_594",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-22T09:06:41.019Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-597",
            "title": "Order item 597 Asymmetric",
            "startDate": "2022-11-15T08:10:00.000Z",
            "endDate": "2022-11-15T12:40:00.000Z",
            "Description": "Order description 597",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:10:00.000Z",
                            "endDate": "2022-11-15T09:00:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    131.93,
                                    -9.4
                                ],
                                [
                                    135.24,
                                    -6.06
                                ],
                                [
                                    136.83,
                                    -2.44
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:00:00.000Z",
                            "endDate": "2022-11-15T12:00:00.000Z"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        133.33482125596018,
                                        1.1697817388410208
                                    ],
                                    [
                                        133.33482125596018,
                                        -6.72768225643905
                                    ],
                                    [
                                        141.26057718941072,
                                        -6.72768225643905
                                    ],
                                    [
                                        141.26057718941072,
                                        1.1697817388410208
                                    ],
                                    [
                                        133.33482125596018,
                                        1.1697817388410208
                                    ]
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa6",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T12:00:00.000Z",
                            "endDate": "2022-11-15T12:40:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    129.7416,
                                    -12.6383
                                ],
                                [
                                    137.66,
                                    -2.58
                                ],
                                [
                                    137.2844,
                                    -2.7856
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:25",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA1397",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_597",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Red Force",
                "forceColor": "#F00",
                "roleName": "Logs",
                "roleId": "rkr226f5a",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Red"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-24T22:51:58.992Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-600",
            "title": "Order item 600 Asymmetric",
            "startDate": "2022-11-15T08:20:00.000Z",
            "endDate": "2022-11-15T08:50:00.000Z",
            "Description": "Order description 600",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:25",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "Blue:7",
                    "Number": 1
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                },
                {
                    "FEName": "CA1555",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_600",
        "_rev": "2"
    },
    {
        "messageType": "PlanningMessage",
        "details": {
            "channel": "channel-blue-planning",
            "from": {
                "force": "Blue",
                "forceColor": "#00F",
                "roleName": "Logs",
                "roleId": "blue-logs",
                "iconURL": "default_img/umpireDefault.png",
                "forceId": "F-Blue"
            },
            "messageType": "Land Activity",
            "timestamp": "2022-09-23T18:21:17.756Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-603",
            "title": "Order item 603 Kinetic",
            "startDate": "2022-11-15T08:20:00.000Z",
            "endDate": "2022-11-15T09:30:00.000Z",
            "Description": "Order description 603",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T08:20:00.000Z",
                            "endDate": "2022-11-15T09:10:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    134.26,
                                    -9.47
                                ],
                                [
                                    129.04,
                                    -16.09
                                ],
                                [
                                    129.3162,
                                    -16.1699
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:10:00.000Z",
                            "endDate": "2022-11-15T09:20:00.000Z"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                129.3162,
                                -16.1699
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {
                            "startDate": "2022-11-15T09:20:00.000Z",
                            "endDate": "2022-11-15T09:30:00.000Z"
                        },
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    137.32,
                                    -6.44
                                ],
                                [
                                    134.54,
                                    -9.66
                                ],
                                [
                                    132.05,
                                    -12.6
                                ],
                                [
                                    128.84,
                                    -16.25
                                ],
                                [
                                    129.3162,
                                    -16.1699
                                ]
                            ]
                        }
                    }
                }
            ],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:37",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:30",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                }
            ],
            "Targets": [
                {
                    "FEName": "CA670",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_603",
        "_rev": "2"
    }
]