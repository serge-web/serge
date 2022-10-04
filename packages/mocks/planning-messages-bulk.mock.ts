
import { MessagePlanning } from '@serge/custom-types'

export const planningMessagesBulk: MessagePlanning[] = [
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
            "timestamp": "2022-09-26T01:12:56.870Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-1",
            "title": "Order item 1 Transit",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T11:00:00.000Z",
            "Description": "Order description 1",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.4062,
                                    -6.8859
                                ],
                                [
                                    135.98,
                                    -11.16
                                ],
                                [
                                    127.7,
                                    -15.28
                                ],
                                [
                                    119.72,
                                    -19.11
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
                    "FEName": "Blue:37",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_4",
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
            "timestamp": "2022-09-22T01:38:18.583Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-4",
            "title": "Order item 4 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T06:00:00.000Z",
            "Description": "Order description 4",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    121.61,
                                    -16.74
                                ],
                                [
                                    126.73,
                                    -12.18
                                ],
                                [
                                    132.13,
                                    -7.33
                                ],
                                [
                                    136.81,
                                    -3.19
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    137.62,
                                    -2.49
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
                    "FEName": "Red Force:11",
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
        "_id": "m_F-Red_7",
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
            "timestamp": "2022-09-22T15:47:41.086Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-7",
            "title": "Order item 7 Asymmetric",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T17:00:00.000Z",
            "Description": "Order description 7",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5793,
                                    -9.9615
                                ],
                                [
                                    146.93,
                                    -12.55
                                ],
                                [
                                    145.29,
                                    -15.14
                                ],
                                [
                                    143.93,
                                    -18.44
                                ],
                                [
                                    142.85,
                                    -20.46
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
                },
                {
                    "FEName": "Blue:31",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Blue:35",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                },
                {
                    "FEName": "Blue:11",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_10",
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
            "timestamp": "2022-09-27T19:41:04.380Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-10",
            "title": "Order item 10 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T21:00:00.000Z",
            "Description": "Order description 10",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    138.26,
                                    -11.93
                                ],
                                [
                                    127.82,
                                    -13.75
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        126.9753173878723,
                                        -12.637740342476903
                                    ],
                                    [
                                        126.9753173878723,
                                        -15.079437354763506
                                    ],
                                    [
                                        129.49091074296825,
                                        -15.079437354763506
                                    ],
                                    [
                                        129.49091074296825,
                                        -12.637740342476903
                                    ],
                                    [
                                        126.9753173878723,
                                        -12.637740342476903
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    128.13,
                                    -14.15
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
                    "FEName": "Blue:11",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:35",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:6",
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
        "_id": "m_F-Blue_13",
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
            "timestamp": "2022-09-29T05:18:28.464Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-13",
            "title": "Order item 13 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T02:00:00.000Z",
            "Description": "Order description 13",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    141.14,
                                    -12.84
                                ],
                                [
                                    132.9,
                                    -15.58
                                ],
                                [
                                    124.95,
                                    -18.03
                                ],
                                [
                                    116.28,
                                    -21.2
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.30400596815934,
                                        -20.50591331977443
                                    ],
                                    [
                                        116.30400596815934,
                                        -21.34531101609059
                                    ],
                                    [
                                        117.20271135416712,
                                        -21.34531101609059
                                    ],
                                    [
                                        117.20271135416712,
                                        -20.50591331977443
                                    ],
                                    [
                                        116.30400596815934,
                                        -20.50591331977443
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    137.95,
                                    -13.84
                                ],
                                [
                                    127.82,
                                    -17.29
                                ],
                                [
                                    116.98,
                                    -20.46
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
                    "FEName": "Blue:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Blue:27",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_16",
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
            "timestamp": "2022-09-26T20:39:53.339Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-16",
            "title": "Order item 16 Transit",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T08:00:00.000Z",
            "Description": "Order description 16",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    134.13,
                                    -10.36
                                ],
                                [
                                    129.93,
                                    -13.68
                                ],
                                [
                                    125.02,
                                    -15.71
                                ],
                                [
                                    120.39,
                                    -18.46
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    130.18,
                                    -13.77
                                ],
                                [
                                    120.54,
                                    -18.99
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
                    "FEName": "Blue:24",
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
                    "FEName": "Blue:6",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
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
        "_id": "m_F-Blue_19",
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
            "timestamp": "2022-09-29T01:45:19.005Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-19",
            "title": "Order item 19 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T02:00:00.000Z",
            "Description": "Order description 19",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    138.15,
                                    -11.97
                                ],
                                [
                                    130.6,
                                    -15.37
                                ],
                                [
                                    123.33,
                                    -18.49
                                ],
                                [
                                    116.35,
                                    -21.32
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    135.58,
                                    -13.29
                                ],
                                [
                                    125.77,
                                    -16.7
                                ],
                                [
                                    116.25,
                                    -20.83
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
                    "FEName": "Blue:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Blue:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:10",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_22",
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
            "timestamp": "2022-09-27T12:34:45.461Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-22",
            "title": "Order item 22 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T16:00:00.000Z",
            "Description": "Order description 22",
            "Location": "Point-B",
            "location": [],
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_25",
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
            "timestamp": "2022-09-22T05:08:12.707Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-25",
            "title": "Order item 25 Kinetic",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T13:00:00.000Z",
            "Description": "Order description 25",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    129.87,
                                    -12.04
                                ],
                                [
                                    131.8,
                                    -8.54
                                ],
                                [
                                    135.01,
                                    -5.76
                                ],
                                [
                                    137.51,
                                    -2.7
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
                    "uniqid": "aa9",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.1989029837657,
                                        -0.6984125511831664
                                    ],
                                    [
                                        135.1989029837657,
                                        -4.869090025808567
                                    ],
                                    [
                                        139.37729813820266,
                                        -4.869090025808567
                                    ],
                                    [
                                        139.37729813820266,
                                        -0.6984125511831664
                                    ],
                                    [
                                        135.1989029837657,
                                        -0.6984125511831664
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    137.22,
                                    -3.01
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
                    "FEName": "Red Force:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:59",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:13",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:42",
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
        "_id": "m_F-Red_28",
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
            "timestamp": "2022-09-29T19:25:40.744Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-28",
            "title": "Order item 28 Transit",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T16:00:00.000Z",
            "Description": "Order description 28",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    147.03,
                                    -10.06
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    135.89,
                                    -14.2
                                ],
                                [
                                    147.9,
                                    -10.36
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
        "_id": "m_F-Red_31",
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
            "timestamp": "2022-09-25T07:27:09.572Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-31",
            "title": "Order item 31 Transit",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T07:00:00.000Z",
            "Description": "Order description 31",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
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
        "_id": "m_F-Blue_34",
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
            "timestamp": "2022-09-25T09:12:39.190Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-34",
            "title": "Order item 34 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T18:00:00.000Z",
            "Description": "Order description 34",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.0301,
                                    -15.4829
                                ],
                                [
                                    149.79,
                                    -10.03
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
        "_id": "m_F-Red_37",
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
            "timestamp": "2022-09-21T16:42:09.598Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-37",
            "title": "Order item 37 Asymmetric",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T11:00:00.000Z",
            "Description": "Order description 37",
            "Location": "Point-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:49",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
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
        "_id": "m_F-Red_40",
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
            "timestamp": "2022-09-22T13:55:40.797Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-40",
            "title": "Order item 40 Kinetic",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T12:00:00.000Z",
            "Description": "Order description 40",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    144.21,
                                    -13.31
                                ],
                                [
                                    143.36,
                                    -21.08
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    144.26,
                                    -13.21
                                ],
                                [
                                    143.39,
                                    -20.95
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
        "_id": "m_F-Blue_43",
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
            "timestamp": "2022-09-28T00:53:12.787Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-43",
            "title": "Order item 43 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T13:00:00.000Z",
            "Description": "Order description 43",
            "Location": "Polyline-B",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:58",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:59",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:18",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T22:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
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
        "_id": "m_F-Red_46",
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
            "timestamp": "2022-09-29T17:34:45.567Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-46",
            "title": "Order item 46 Kinetic",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T20:00:00.000Z",
            "Description": "Order description 46",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    146.34,
                                    -11.98
                                ],
                                [
                                    145.15,
                                    -14.11
                                ],
                                [
                                    144.25,
                                    -15.95
                                ],
                                [
                                    142.63,
                                    -18.5
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    145.94,
                                    -12.18
                                ],
                                [
                                    144.63,
                                    -15.23
                                ],
                                [
                                    142.6,
                                    -17.99
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
                    "FEName": "Blue:36",
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
        "_id": "m_F-Blue_49",
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
            "timestamp": "2022-09-27T16:00:19.138Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-49",
            "title": "Order item 49 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T11:00:00.000Z",
            "Description": "Order description 49",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    150.09,
                                    -11.07
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.2618475389121,
                                        -8.842598886121465
                                    ],
                                    [
                                        148.2618475389121,
                                        -12.581047041150986
                                    ],
                                    [
                                        152.06886393067467,
                                        -12.581047041150986
                                    ],
                                    [
                                        152.06886393067467,
                                        -8.842598886121465
                                    ],
                                    [
                                        148.2618475389121,
                                        -8.842598886121465
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    148.24,
                                    -15.67
                                ],
                                [
                                    149.85,
                                    -10.66
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
                    "FEName": "Red Force:20",
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
        "_id": "m_F-Red_52",
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
            "timestamp": "2022-09-21T20:09:53.499Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-52",
            "title": "Order item 52 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T02:00:00.000Z",
            "Description": "Order description 52",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.0214,
                                    -20.7848
                                ],
                                [
                                    139.8,
                                    -8.01
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.0214,
                                    -20.7848
                                ],
                                [
                                    127.73,
                                    -14.7
                                ],
                                [
                                    139.72,
                                    -8.34
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
                    "FEName": "Red Force:20",
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
                    "EndDate": "2022-09-21T10:00:00.000Z"
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
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_55",
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
            "timestamp": "2022-09-28T22:03:28.651Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-55",
            "title": "Order item 55 Transit",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T19:00:00.000Z",
            "Description": "Order description 55",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.0214,
                                    -20.7848
                                ],
                                [
                                    121.79,
                                    -16.42
                                ],
                                [
                                    127.41,
                                    -11.21
                                ],
                                [
                                    132.31,
                                    -6.73
                                ],
                                [
                                    137.49,
                                    -1.96
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.0214,
                                    -20.7848
                                ],
                                [
                                    121.67,
                                    -16.36
                                ],
                                [
                                    127.2,
                                    -11.06
                                ],
                                [
                                    132.01,
                                    -6.48
                                ],
                                [
                                    137.1,
                                    -1.62
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
                    "FEName": "Red Force:52",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:18",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
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
        "_id": "m_F-Red_58",
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
            "timestamp": "2022-09-23T21:41:04.593Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-58",
            "title": "Order item 58 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 58",
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
        "_id": "m_F-Blue_61",
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
            "timestamp": "2022-09-23T11:02:41.326Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-61",
            "title": "Order item 61 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T11:00:00.000Z",
            "Description": "Order description 61",
            "Location": "Point-A",
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
                    "FEName": "Red Force:45",
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
        "_id": "m_F-Red_64",
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
            "timestamp": "2022-09-27T14:08:18.849Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-64",
            "title": "Order item 64 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T19:00:00.000Z",
            "Description": "Order description 64",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.4089,
                                    -10.3741
                                ],
                                [
                                    142.57,
                                    -10.95
                                ],
                                [
                                    137.53,
                                    -11.74
                                ],
                                [
                                    132.78,
                                    -13.24
                                ],
                                [
                                    128.31,
                                    -13.45
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
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:33",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
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
        "_id": "m_F-Blue_67",
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
            "timestamp": "2022-09-27T22:57:57.163Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-67",
            "title": "Order item 67 Kinetic",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T14:00:00.000Z",
            "Description": "Order description 67",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    132.71,
                                    -13.25
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4221,
                                    -5.1852
                                ],
                                [
                                    132.76,
                                    -13.22
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
                },
                {
                    "FEName": "Red Force:36",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_70",
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
            "timestamp": "2022-09-24T13:31:36.267Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-70",
            "title": "Order item 70 Asymmetric",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T10:00:00.000Z",
            "Description": "Order description 70",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    131.61,
                                    -15.02
                                ],
                                [
                                    118.86,
                                    -19.13
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    131.76,
                                    -14.47
                                ],
                                [
                                    119.31,
                                    -19.88
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
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
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
        "_id": "m_F-Blue_73",
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
            "timestamp": "2022-09-25T17:49:16.162Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-73",
            "title": "Order item 73 Kinetic",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T13:00:00.000Z",
            "Description": "Order description 73",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    141.4,
                                    -16.73
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    145.16,
                                    -8.56
                                ],
                                [
                                    143.42,
                                    -12.11
                                ],
                                [
                                    141.96,
                                    -14.37
                                ],
                                [
                                    140.79,
                                    -17.36
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
                    "FEName": "Blue:29",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
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
        "_id": "m_F-Blue_76",
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
            "timestamp": "2022-09-23T03:50:56.847Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-76",
            "title": "Order item 76 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T17:00:00.000Z",
            "Description": "Order description 76",
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
        "_id": "m_F-Blue_79",
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
            "timestamp": "2022-09-25T03:36:38.323Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-79",
            "title": "Order item 79 Asymmetric",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T04:00:00.000Z",
            "Description": "Order description 79",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    148.88,
                                    -10.52
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        149.07483907291208,
                                        -10.031044230022541
                                    ],
                                    [
                                        149.07483907291208,
                                        -10.61608372084238
                                    ],
                                    [
                                        149.66951397475174,
                                        -10.61608372084238
                                    ],
                                    [
                                        149.66951397475174,
                                        -10.031044230022541
                                    ],
                                    [
                                        149.07483907291208,
                                        -10.031044230022541
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    149.78,
                                    -10.25
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
                    "FEName": "Red Force:0",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
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
        "_id": "m_F-Red_82",
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
            "timestamp": "2022-09-23T09:06:20.590Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-82",
            "title": "Order item 82 Transit",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T16:00:00.000Z",
            "Description": "Order description 82",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    134.81,
                                    -7.74
                                ],
                                [
                                    129.46,
                                    -11.91
                                ],
                                [
                                    123.4,
                                    -16.8
                                ],
                                [
                                    117.62,
                                    -21.41
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                117.7434,
                                -21.0232
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    133.16,
                                    -9.28
                                ],
                                [
                                    125.54,
                                    -14.63
                                ],
                                [
                                    118.19,
                                    -20.69
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
                    "FEName": "Blue:19",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:36",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_85",
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
            "timestamp": "2022-09-26T04:20:03.647Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-85",
            "title": "Order item 85 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T15:00:00.000Z",
            "Description": "Order description 85",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    137.62,
                                    -1.64
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        135.9101020699718,
                                        -0.40566263612491216
                                    ],
                                    [
                                        135.9101020699718,
                                        -3.444981088699936
                                    ],
                                    [
                                        138.95221153440218,
                                        -3.444981088699936
                                    ],
                                    [
                                        138.95221153440218,
                                        -0.40566263612491216
                                    ],
                                    [
                                        135.9101020699718,
                                        -0.40566263612491216
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    138.96,
                                    -9.33
                                ],
                                [
                                    137.42,
                                    -2.16
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
                    "FEName": "Red Force:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_88",
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
            "timestamp": "2022-09-25T05:17:47.494Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-88",
            "title": "Order item 88 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T16:00:00.000Z",
            "Description": "Order description 88",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.4064,
                                    -5.0168
                                ],
                                [
                                    136.62,
                                    -7.69
                                ],
                                [
                                    135.76,
                                    -9.43
                                ],
                                [
                                    136.2,
                                    -11.88
                                ],
                                [
                                    135.91,
                                    -14.05
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
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
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
        "_id": "m_F-Blue_91",
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
            "timestamp": "2022-09-28T19:59:32.132Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-91",
            "title": "Order item 91 Kinetic",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T00:00:00.000Z",
            "Description": "Order description 91",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    146.64,
                                    -6.58
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    133.91,
                                    -13.36
                                ],
                                [
                                    140.75,
                                    -9.55
                                ],
                                [
                                    146.88,
                                    -6.45
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
                    "FEName": "Red Force:16",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:46",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
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
        "_id": "m_F-Red_94",
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
            "timestamp": "2022-09-28T16:25:17.560Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-94",
            "title": "Order item 94 Transit",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T09:00:00.000Z",
            "Description": "Order description 94",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:56",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:26",
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
                    "FEName": "CA2829",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_97",
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
            "timestamp": "2022-09-24T18:35:03.780Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-97",
            "title": "Order item 97 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 97",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    144.18,
                                    -13.33
                                ],
                                [
                                    138.49,
                                    -15.71
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
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:8",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_100",
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
            "timestamp": "2022-09-25T10:28:50.789Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-100",
            "title": "Order item 100 Asymmetric",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T16:00:00.000Z",
            "Description": "Order description 100",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5793,
                                    -9.9615
                                ],
                                [
                                    142.74,
                                    -17.88
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.18757358177632,
                                        -17.003965409867767
                                    ],
                                    [
                                        141.18757358177632,
                                        -19.0387541564696
                                    ],
                                    [
                                        143.32779294635503,
                                        -19.0387541564696
                                    ],
                                    [
                                        143.32779294635503,
                                        -17.003965409867767
                                    ],
                                    [
                                        141.18757358177632,
                                        -17.003965409867767
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5793,
                                    -9.9615
                                ],
                                [
                                    142.49,
                                    -17.54
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
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:37",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_103",
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
            "timestamp": "2022-09-22T08:06:38.589Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-103",
            "title": "Order item 103 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T21:00:00.000Z",
            "Description": "Order description 103",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    123.12,
                                    -15.33
                                ],
                                [
                                    129.92,
                                    -9.17
                                ],
                                [
                                    137.01,
                                    -2.72
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    116.4863,
                                    -21.3267
                                ],
                                [
                                    123.27,
                                    -15.33
                                ],
                                [
                                    130.14,
                                    -9.24
                                ],
                                [
                                    137.3,
                                    -2.87
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
                    "FEName": "Red Force:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_106",
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
            "timestamp": "2022-09-23T19:28:27.180Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-106",
            "title": "Order item 106 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T03:00:00.000Z",
            "Description": "Order description 106",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    128.94,
                                    -16.36
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    143.09,
                                    -12.29
                                ],
                                [
                                    136.14,
                                    -14.14
                                ],
                                [
                                    129.47,
                                    -15.7
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
                    "EndDate": "2022-09-21T07:00:00.000Z"
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
                    "FEName": "Blue:25",
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
        "_id": "m_F-Blue_109",
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
            "timestamp": "2022-09-29T20:34:16.561Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-109",
            "title": "Order item 109 Transit",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T10:00:00.000Z",
            "Description": "Order description 109",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    147.64,
                                    -9.58
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        147.1614955898566,
                                        -9.53642862736845
                                    ],
                                    [
                                        147.1614955898566,
                                        -10.223212911376955
                                    ],
                                    [
                                        147.85863211806043,
                                        -10.223212911376955
                                    ],
                                    [
                                        147.85863211806043,
                                        -9.53642862736845
                                    ],
                                    [
                                        147.1614955898566,
                                        -9.53642862736845
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    135.4363,
                                    -18.5329
                                ],
                                [
                                    141.1,
                                    -13.91
                                ],
                                [
                                    147.23,
                                    -9.82
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
                    "FEName": "Red Force:36",
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
        "_id": "m_F-Red_112",
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
            "timestamp": "2022-09-23T19:24:06.733Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-112",
            "title": "Order item 112 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T04:00:00.000Z",
            "Description": "Order description 112",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.3983,
                                    -14.6078
                                ],
                                [
                                    131.16,
                                    -13.02
                                ],
                                [
                                    135.89,
                                    -10.46
                                ],
                                [
                                    139.9,
                                    -8.63
                                ],
                                [
                                    144.2,
                                    -6.51
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.3983,
                                    -14.6078
                                ],
                                [
                                    134.98,
                                    -10.53
                                ],
                                [
                                    144.09,
                                    -6.93
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
                    "FEName": "Red Force:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
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
                },
                {
                    "FEName": "Blue:12",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_115",
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
            "timestamp": "2022-09-22T07:57:57.695Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-115",
            "title": "Order item 115 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T19:00:00.000Z",
            "Description": "Order description 115",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    140.25,
                                    -14.01
                                ],
                                [
                                    135.15,
                                    -18.12
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    142.41,
                                    -12.05
                                ],
                                [
                                    140.17,
                                    -14.49
                                ],
                                [
                                    138.22,
                                    -16.64
                                ],
                                [
                                    135.54,
                                    -18.52
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
                    "FEName": "Blue:4",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:18",
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
        "_id": "m_F-Blue_118",
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
            "timestamp": "2022-09-25T10:15:49.447Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-118",
            "title": "Order item 118 Kinetic",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T17:00:00.000Z",
            "Description": "Order description 118",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    137.2,
                                    -13.6
                                ],
                                [
                                    149.42,
                                    -10.27
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.43731084977856,
                                        -9.400314494361751
                                    ],
                                    [
                                        148.43731084977856,
                                        -11.244381987944447
                                    ],
                                    [
                                        150.31198476921247,
                                        -11.244381987944447
                                    ],
                                    [
                                        150.31198476921247,
                                        -9.400314494361751
                                    ],
                                    [
                                        148.43731084977856,
                                        -9.400314494361751
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    125.2749,
                                    -17.6467
                                ],
                                [
                                    149.47,
                                    -10.08
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
                    "FEName": "Red Force:9",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
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
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_121",
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
            "timestamp": "2022-09-24T18:17:41.991Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-121",
            "title": "Order item 121 Transit",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T01:00:00.000Z",
            "Description": "Order description 121",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    141.02,
                                    -8.52
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.1529,
                                    -17.0936
                                ],
                                [
                                    141.33,
                                    -7.86
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
                    "FEName": "Red Force:46",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:16",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
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
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_124",
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
            "timestamp": "2022-09-28T16:03:35.324Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-124",
            "title": "Order item 124 Transit",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T12:00:00.000Z",
            "Description": "Order description 124",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:55",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:53",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T21:00:00.000Z"
                },
                {
                    "FEName": "Red Force:40",
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
        "_id": "m_F-Red_127",
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
            "timestamp": "2022-09-28T19:33:29.449Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-127",
            "title": "Order item 127 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 127",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.1973,
                                    -10.6215
                                ],
                                [
                                    142.44,
                                    -11.25
                                ],
                                [
                                    136.72,
                                    -11.84
                                ],
                                [
                                    129.29,
                                    -12.14
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
                    "FEName": "Blue:27",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_130",
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
            "timestamp": "2022-09-25T04:47:24.363Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-130",
            "title": "Order item 130 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T18:00:00.000Z",
            "Description": "Order description 130",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.5324,
                                    -20.2695
                                ],
                                [
                                    149.48,
                                    -10.68
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                149.3719,
                                -10.3237
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.5324,
                                    -20.2695
                                ],
                                [
                                    147.75,
                                    -16.85
                                ],
                                [
                                    148.21,
                                    -13.2
                                ],
                                [
                                    148.96,
                                    -10.27
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
                    "FEName": "Red Force:54",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Red Force:35",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:32",
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
        "_id": "m_F-Red_133",
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
            "timestamp": "2022-09-26T03:45:20.069Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-133",
            "title": "Order item 133 Kinetic",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T18:00:00.000Z",
            "Description": "Order description 133",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:44",
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
        "_id": "m_F-Red_136",
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
            "timestamp": "2022-09-23T08:27:16.565Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-136",
            "title": "Order item 136 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T20:00:00.000Z",
            "Description": "Order description 136",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    141.29,
                                    -12.62
                                ],
                                [
                                    132.99,
                                    -15.83
                                ],
                                [
                                    124.97,
                                    -18.75
                                ],
                                [
                                    117.24,
                                    -21.39
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                117.7434,
                                -21.0232
                            ]
                        }
                    }
                },
                {
                    "uniqid": "aa3",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    137.89,
                                    -14
                                ],
                                [
                                    128.35,
                                    -17.42
                                ],
                                [
                                    118.1,
                                    -20.55
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
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:5",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Blue:17",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T00:00:00.000Z"
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
        "_id": "m_F-Blue_139",
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
            "timestamp": "2022-09-25T02:53:13.851Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-139",
            "title": "Order item 139 Asymmetric",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 139",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.8959,
                                    -18.5925
                                ],
                                [
                                    131.54,
                                    -16.21
                                ],
                                [
                                    140.38,
                                    -12.63
                                ],
                                [
                                    149.52,
                                    -10.76
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        149.15228083261482,
                                        -10.107414973262351
                                    ],
                                    [
                                        149.15228083261482,
                                        -10.539836403609968
                                    ],
                                    [
                                        149.59182130376485,
                                        -10.539836403609968
                                    ],
                                    [
                                        149.59182130376485,
                                        -10.107414973262351
                                    ],
                                    [
                                        149.15228083261482,
                                        -10.107414973262351
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.8959,
                                    -18.5925
                                ],
                                [
                                    131.34,
                                    -16.05
                                ],
                                [
                                    141.02,
                                    -13.29
                                ],
                                [
                                    148.97,
                                    -10.25
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
                    "FEName": "Red Force:59",
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
        "_id": "m_F-Red_142",
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
            "timestamp": "2022-09-23T03:03:11.928Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-142",
            "title": "Order item 142 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T20:00:00.000Z",
            "Description": "Order description 142",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    141.53,
                                    -11.53
                                ],
                                [
                                    149.01,
                                    -9.77
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        149.00891149466423,
                                        -9.902410881834053
                                    ],
                                    [
                                        149.00891149466423,
                                        -10.474732246712094
                                    ],
                                    [
                                        149.59041047593732,
                                        -10.474732246712094
                                    ],
                                    [
                                        149.59041047593732,
                                        -9.902410881834053
                                    ],
                                    [
                                        149.00891149466423,
                                        -9.902410881834053
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    133.3442,
                                    -13.013
                                ],
                                [
                                    141.58,
                                    -11.74
                                ],
                                [
                                    149.19,
                                    -10.1
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
                    "FEName": "Red Force:30",
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
                },
                {
                    "FEName": "CA944",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_145",
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
            "timestamp": "2022-09-25T16:57:10.795Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-145",
            "title": "Order item 145 Asymmetric",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T13:00:00.000Z",
            "Description": "Order description 145",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    138.59,
                                    -13.41
                                ],
                                [
                                    139.89,
                                    -12.51
                                ],
                                [
                                    142.47,
                                    -11.33
                                ],
                                [
                                    144.34,
                                    -9.87
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.13860524874994,
                                        -8.127176346436574
                                    ],
                                    [
                                        143.13860524874994,
                                        -11.115611128401815
                                    ],
                                    [
                                        146.17080613527477,
                                        -11.115611128401815
                                    ],
                                    [
                                        146.17080613527477,
                                        -8.127176346436574
                                    ],
                                    [
                                        143.13860524874994,
                                        -8.127176346436574
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    138.57,
                                    -13.51
                                ],
                                [
                                    139.91,
                                    -11.65
                                ],
                                [
                                    142.53,
                                    -10.5
                                ],
                                [
                                    144.43,
                                    -10.08
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_148",
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
            "timestamp": "2022-09-24T12:35:10.453Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-148",
            "title": "Order item 148 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T11:00:00.000Z",
            "Description": "Order description 148",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    133.36,
                                    -9.99
                                ],
                                [
                                    128.93,
                                    -12.87
                                ],
                                [
                                    123.79,
                                    -16.47
                                ],
                                [
                                    118.92,
                                    -19.79
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    133.26,
                                    -9.95
                                ],
                                [
                                    128.76,
                                    -12.77
                                ],
                                [
                                    123.55,
                                    -16.3
                                ],
                                [
                                    118.62,
                                    -19.55
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
                    "FEName": "Blue:0",
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
                    "FEName": "Blue:33",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_151",
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
            "timestamp": "2022-09-27T21:57:10.902Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-151",
            "title": "Order item 151 Kinetic",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T12:00:00.000Z",
            "Description": "Order description 151",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    133.22,
                                    -12.86
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9611,
                                    -2.7755
                                ],
                                [
                                    139.34,
                                    -5.82
                                ],
                                [
                                    136.68,
                                    -7.92
                                ],
                                [
                                    135.31,
                                    -10.73
                                ],
                                [
                                    133.21,
                                    -13.27
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
                    "FEName": "Blue:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Blue:26",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_154",
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
            "timestamp": "2022-09-27T13:03:12.141Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-154",
            "title": "Order item 154 Transit",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T18:00:00.000Z",
            "Description": "Order description 154",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    136.47,
                                    -9.72
                                ],
                                [
                                    133.75,
                                    -10.27
                                ],
                                [
                                    130.31,
                                    -11.54
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        129.12507519259293,
                                        -10.252842810203607
                                    ],
                                    [
                                        129.12507519259293,
                                        -13.546370938907234
                                    ],
                                    [
                                        132.4925315297961,
                                        -13.546370938907234
                                    ],
                                    [
                                        132.4925315297961,
                                        -10.252842810203607
                                    ],
                                    [
                                        129.12507519259293,
                                        -10.252842810203607
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.3171,
                                    -8.0633
                                ],
                                [
                                    136.66,
                                    -9.77
                                ],
                                [
                                    134.05,
                                    -10.44
                                ],
                                [
                                    130.73,
                                    -11.82
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
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:32",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
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
        "_id": "m_F-Blue_157",
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
            "timestamp": "2022-09-23T09:53:14.170Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-157",
            "title": "Order item 157 Transit",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T12:00:00.000Z",
            "Description": "Order description 157",
            "Location": "Point-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:39",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_160",
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
            "timestamp": "2022-09-23T20:27:16.990Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-160",
            "title": "Order item 160 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T08:00:00.000Z",
            "Description": "Order description 160",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4245,
                                    -19.9708
                                ],
                                [
                                    145.7,
                                    -13.52
                                ],
                                [
                                    144.31,
                                    -6.75
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        143.46638176470572,
                                        -5.950226409557222
                                    ],
                                    [
                                        143.46638176470572,
                                        -7.8197314799415185
                                    ],
                                    [
                                        145.34972896631697,
                                        -7.8197314799415185
                                    ],
                                    [
                                        145.34972896631697,
                                        -5.950226409557222
                                    ],
                                    [
                                        143.46638176470572,
                                        -5.950226409557222
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.4245,
                                    -19.9708
                                ],
                                [
                                    145.65,
                                    -13.61
                                ],
                                [
                                    144.28,
                                    -6.86
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
                    "FEName": "Red Force:45",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:53",
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
                    "FEName": "Red Force:4",
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
        "_id": "m_F-Red_163",
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
            "timestamp": "2022-09-28T20:45:20.601Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-163",
            "title": "Order item 163 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 163",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    137.63,
                                    -10.07
                                ],
                                [
                                    146.39,
                                    -5.93
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.5084707079278,
                                        -6.027429600066746
                                    ],
                                    [
                                        146.5084707079278,
                                        -6.421696421556527
                                    ],
                                    [
                                        146.90507812582112,
                                        -6.421696421556527
                                    ],
                                    [
                                        146.90507812582112,
                                        -6.027429600066746
                                    ],
                                    [
                                        146.5084707079278,
                                        -6.027429600066746
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    128.2265,
                                    -13.8618
                                ],
                                [
                                    137,
                                    -9.75
                                ],
                                [
                                    146.29,
                                    -6.13
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
                    "FEName": "Red Force:4",
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
        "_id": "m_F-Red_166",
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
            "timestamp": "2022-09-21T18:47:25.002Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-166",
            "title": "Order item 166 Asymmetric",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T04:00:00.000Z",
            "Description": "Order description 166",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    136.25,
                                    -12.14
                                ],
                                [
                                    139.74,
                                    -8.43
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        137.50058636278422,
                                        -6.253582375302973
                                    ],
                                    [
                                        137.50058636278422,
                                        -9.864948216206354
                                    ],
                                    [
                                        141.1499093053776,
                                        -9.864948216206354
                                    ],
                                    [
                                        141.1499093053776,
                                        -6.253582375302973
                                    ],
                                    [
                                        137.50058636278422,
                                        -6.253582375302973
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    134.0721,
                                    -15.5391
                                ],
                                [
                                    136.34,
                                    -11.38
                                ],
                                [
                                    139,
                                    -7.84
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
                    "FEName": "Red Force:53",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:45",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Red Force:52",
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
        "_id": "m_F-Red_169",
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
            "timestamp": "2022-09-27T14:33:30.194Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-169",
            "title": "Order item 169 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T14:00:00.000Z",
            "Description": "Order description 169",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    133.77,
                                    -11.69
                                ],
                                [
                                    128.02,
                                    -13.56
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        126.63209839503915,
                                        -12.298804495398562
                                    ],
                                    [
                                        126.63209839503915,
                                        -15.41433630588584
                                    ],
                                    [
                                        129.8424427830646,
                                        -15.41433630588584
                                    ],
                                    [
                                        129.8424427830646,
                                        -12.298804495398562
                                    ],
                                    [
                                        126.63209839503915,
                                        -12.298804495398562
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    127.72,
                                    -13.64
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
                    "FEName": "Blue:12",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:38",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:10",
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
        "_id": "m_F-Blue_172",
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
            "timestamp": "2022-09-29T16:03:36.176Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-172",
            "title": "Order item 172 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T01:00:00.000Z",
            "Description": "Order description 172",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    142.23,
                                    -18.4
                                ],
                                [
                                    145.06,
                                    -13.7
                                ],
                                [
                                    147.16,
                                    -9.72
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    141.32,
                                    -18.89
                                ],
                                [
                                    143.1,
                                    -15.82
                                ],
                                [
                                    145.16,
                                    -12.46
                                ],
                                [
                                    147.5,
                                    -9.83
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
                    "FEName": "Red Force:47",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:38",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_175",
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
            "timestamp": "2022-09-27T23:17:42.948Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-175",
            "title": "Order item 175 Transit",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T14:00:00.000Z",
            "Description": "Order description 175",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    132.13,
                                    -13.14
                                ],
                                [
                                    145.93,
                                    -4.84
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.47981652467786,
                                        -3.2430563163156374
                                    ],
                                    [
                                        144.47981652467786,
                                        -7.121381572892337
                                    ],
                                    [
                                        148.376353176798,
                                        -7.121381572892337
                                    ],
                                    [
                                        148.376353176798,
                                        -3.2430563163156374
                                    ],
                                    [
                                        144.47981652467786,
                                        -3.2430563163156374
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    146.73,
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
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:44",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
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
        "_id": "m_F-Red_178",
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
            "timestamp": "2022-09-22T12:15:50.511Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-178",
            "title": "Order item 178 Transit",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T14:00:00.000Z",
            "Description": "Order description 178",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    147.59,
                                    -12.52
                                ],
                                [
                                    145.59,
                                    -15.64
                                ],
                                [
                                    143.88,
                                    -18.46
                                ],
                                [
                                    143.45,
                                    -21.01
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    148.5732,
                                    -10.4337
                                ],
                                [
                                    147.45,
                                    -13.3
                                ],
                                [
                                    145.28,
                                    -15.23
                                ],
                                [
                                    144.38,
                                    -17.87
                                ],
                                [
                                    142.77,
                                    -20.24
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
                    "FEName": "Blue:31",
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
        "_id": "m_F-Blue_181",
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
            "timestamp": "2022-09-21T14:57:58.865Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-181",
            "title": "Order item 181 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T15:00:00.000Z",
            "Description": "Order description 181",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    140.19,
                                    -14.96
                                ],
                                [
                                    139.18,
                                    -13.03
                                ],
                                [
                                    139.45,
                                    -9.82
                                ],
                                [
                                    139.01,
                                    -8.33
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.0406,
                                    -17.0574
                                ],
                                [
                                    138.93,
                                    -8.28
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
                    "FEName": "Red Force:25",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:30",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
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
        "_id": "m_F-Red_184",
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
            "timestamp": "2022-09-25T07:24:08.009Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-184",
            "title": "Order item 184 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T19:00:00.000Z",
            "Description": "Order description 184",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    149.09,
                                    -10.37
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.02641717613636,
                                        -8.991958771713552
                                    ],
                                    [
                                        148.02641717613636,
                                        -11.649823515929175
                                    ],
                                    [
                                        150.72880144228543,
                                        -11.649823515929175
                                    ],
                                    [
                                        150.72880144228543,
                                        -8.991958771713552
                                    ],
                                    [
                                        148.02641717613636,
                                        -8.991958771713552
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    122.0714,
                                    -17.8384
                                ],
                                [
                                    149.59,
                                    -9.89
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
                    "FEName": "Red Force:32",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Red Force:29",
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
                    "FEName": "Blue:17",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_187",
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
            "timestamp": "2022-09-25T05:34:17.944Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-187",
            "title": "Order item 187 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T10:00:00.000Z",
            "Description": "Order description 187",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    144.14,
                                    -14.74
                                ],
                                [
                                    146.52,
                                    -12.23
                                ],
                                [
                                    149.18,
                                    -10.44
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.77831469284212,
                                        -9.738124769201391
                                    ],
                                    [
                                        148.77831469284212,
                                        -10.908186982501926
                                    ],
                                    [
                                        149.96769755547044,
                                        -10.908186982501926
                                    ],
                                    [
                                        149.96769755547044,
                                        -9.738124769201391
                                    ],
                                    [
                                        148.77831469284212,
                                        -9.738124769201391
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    140.9707,
                                    -17.0411
                                ],
                                [
                                    144.06,
                                    -14.39
                                ],
                                [
                                    146.23,
                                    -12.67
                                ],
                                [
                                    149.68,
                                    -10.67
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
                    "FEName": "Red Force:12",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T10:00:00.000Z"
                },
                {
                    "FEName": "Red Force:58",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:6",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_190",
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
            "timestamp": "2022-09-29T17:28:28.669Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-190",
            "title": "Order item 190 Kinetic",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T01:00:00.000Z",
            "Description": "Order description 190",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    142.75,
                                    -18.23
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        141.2899894184185,
                                        -16.358020074369637
                                    ],
                                    [
                                        141.2899894184185,
                                        -19.81670651335845
                                    ],
                                    [
                                        144.93072345146686,
                                        -19.81670651335845
                                    ],
                                    [
                                        144.93072345146686,
                                        -16.358020074369637
                                    ],
                                    [
                                        141.2899894184185,
                                        -16.358020074369637
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    145.878,
                                    -8.4283
                                ],
                                [
                                    144.86,
                                    -11.2
                                ],
                                [
                                    144.09,
                                    -14.73
                                ],
                                [
                                    142.6,
                                    -17.98
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
                    "FEName": "Blue:17",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_193",
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
            "timestamp": "2022-09-22T03:06:40.185Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-193",
            "title": "Order item 193 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T19:00:00.000Z",
            "Description": "Order description 193",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:14",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:32",
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
                    "FEName": "Blue:18",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_196",
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
            "timestamp": "2022-09-27T10:28:52.492Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-196",
            "title": "Order item 196 Kinetic",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T19:00:00.000Z",
            "Description": "Order description 196",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T15:00:00.000Z"
                },
                {
                    "FEName": "Red Force:54",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:34",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
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
                    "FEName": "Blue:11",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_199",
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
            "timestamp": "2022-09-28T23:35:05.588Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-199",
            "title": "Order item 199 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T06:00:00.000Z",
            "Description": "Order description 199",
            "Location": "Point-B",
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
                    "FEName": "Blue:27",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:6",
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
        "_id": "m_F-Blue_202",
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
            "timestamp": "2022-09-26T18:25:19.476Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-202",
            "title": "Order item 202 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T14:00:00.000Z",
            "Description": "Order description 202",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    143.16,
                                    -13.37
                                ],
                                [
                                    147.06,
                                    -10.27
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
                    "FEName": "Red Force:52",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:55",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                },
                {
                    "FEName": "Red Force:15",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T20:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
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
        "_id": "m_F-Red_205",
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
            "timestamp": "2022-09-29T02:59:34.154Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-205",
            "title": "Order item 205 Kinetic",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T10:00:00.000Z",
            "Description": "Order description 205",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:34",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Blue:31",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_208",
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
            "timestamp": "2022-09-27T17:17:49.622Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-208",
            "title": "Order item 208 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T06:00:00.000Z",
            "Description": "Order description 208",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    137.79,
                                    -10.53
                                ],
                                [
                                    128.39,
                                    -14.34
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                128.2265,
                                -13.8618
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    141.92,
                                    -7.98
                                ],
                                [
                                    137.06,
                                    -9.81
                                ],
                                [
                                    132.5,
                                    -12.35
                                ],
                                [
                                    128.21,
                                    -13.61
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
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:15",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
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
        "_id": "m_F-Blue_211",
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
            "timestamp": "2022-09-22T13:20:05.881Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-211",
            "title": "Order item 211 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T04:00:00.000Z",
            "Description": "Order description 211",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.0832,
                                    -17.7937
                                ],
                                [
                                    143.9,
                                    -12.86
                                ],
                                [
                                    146.07,
                                    -8.59
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        144.0729313965721,
                                        -6.631169700786405
                                    ],
                                    [
                                        144.0729313965721,
                                        -10.217108918029234
                                    ],
                                    [
                                        147.69988867474828,
                                        -10.217108918029234
                                    ],
                                    [
                                        147.69988867474828,
                                        -6.631169700786405
                                    ],
                                    [
                                        144.0729313965721,
                                        -6.631169700786405
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.0832,
                                    -17.7937
                                ],
                                [
                                    142.93,
                                    -15.08
                                ],
                                [
                                    143.56,
                                    -13.58
                                ],
                                [
                                    144.49,
                                    -10.79
                                ],
                                [
                                    145.69,
                                    -8.73
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
                    "FEName": "Red Force:30",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
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
        "_id": "m_F-Red_214",
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
            "timestamp": "2022-09-21T23:06:22.930Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-214",
            "title": "Order item 214 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T09:00:00.000Z",
            "Description": "Order description 214",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    139.73,
                                    -8.07
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    136.121,
                                    -14.4905
                                ],
                                [
                                    136.96,
                                    -12.86
                                ],
                                [
                                    137.7,
                                    -11.34
                                ],
                                [
                                    138.72,
                                    -9.54
                                ],
                                [
                                    139.03,
                                    -8.46
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
                    "FEName": "Red Force:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Red Force:34",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:16",
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
        "_id": "m_F-Red_217",
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
            "timestamp": "2022-09-25T22:36:40.770Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-217",
            "title": "Order item 217 Kinetic",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T15:00:00.000Z",
            "Description": "Order description 217",
            "Location": "Region-B",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Blue:11",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:24",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:7",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
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
        "_id": "m_F-Blue_220",
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
            "timestamp": "2022-09-26T03:50:59.401Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-220",
            "title": "Order item 220 Transit",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T08:00:00.000Z",
            "Description": "Order description 220",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    138.52,
                                    -12
                                ],
                                [
                                    136.93,
                                    -1.62
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
                    "FEName": "Red Force:59",
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
        "_id": "m_F-Red_223",
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
            "timestamp": "2022-09-22T14:49:18.822Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-223",
            "title": "Order item 223 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T08:00:00.000Z",
            "Description": "Order description 223",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    138.54,
                                    -10.68
                                ],
                                [
                                    140.36,
                                    -13.78
                                ],
                                [
                                    141.47,
                                    -17.59
                                ],
                                [
                                    142.86,
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
                    "uniqid": "aa2",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    143.33,
                                    -20.37
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
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
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
        "_id": "m_F-Blue_226",
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
            "timestamp": "2022-09-23T15:31:39.034Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-226",
            "title": "Order item 226 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 226",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    141.58,
                                    -14.08
                                ],
                                [
                                    144.06,
                                    -6.77
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.571,
                                    -21.941
                                ],
                                [
                                    141.19,
                                    -16.42
                                ],
                                [
                                    142.98,
                                    -11.74
                                ],
                                [
                                    144.06,
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
                    "FEName": "Red Force:7",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T06:00:00.000Z"
                },
                {
                    "FEName": "Red Force:55",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Red Force:5",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
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
                },
                {
                    "FEName": "Blue:12",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_229",
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
            "timestamp": "2022-09-29T05:58:00.036Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-229",
            "title": "Order item 229 Transit",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T07:00:00.000Z",
            "Description": "Order description 229",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    140.08,
                                    -12.74
                                ],
                                [
                                    132.46,
                                    -15.72
                                ],
                                [
                                    124.12,
                                    -18.42
                                ],
                                [
                                    117.07,
                                    -20.83
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        115.18769807579905,
                                        -19.443844091649247
                                    ],
                                    [
                                        115.18769807579905,
                                        -22.39402292611376
                                    ],
                                    [
                                        118.3476130021218,
                                        -22.39402292611376
                                    ],
                                    [
                                        118.3476130021218,
                                        -19.443844091649247
                                    ],
                                    [
                                        115.18769807579905,
                                        -19.443844091649247
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5427,
                                    -9.9158
                                ],
                                [
                                    139.68,
                                    -12.59
                                ],
                                [
                                    131.8,
                                    -15.31
                                ],
                                [
                                    124.19,
                                    -17.74
                                ],
                                [
                                    116.87,
                                    -20.89
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_232",
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
            "timestamp": "2022-09-22T18:08:21.828Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-232",
            "title": "Order item 232 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T17:00:00.000Z",
            "Description": "Order description 232",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.5853,
                                    -6.3233
                                ],
                                [
                                    138.58,
                                    -9.45
                                ],
                                [
                                    139.47,
                                    -12.7
                                ],
                                [
                                    139.64,
                                    -16.66
                                ],
                                [
                                    139.09,
                                    -20.34
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
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Blue:15",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Blue:37",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T02:00:00.000Z"
                },
                {
                    "FEName": "Blue:31",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Blue:34",
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
        "_id": "m_F-Blue_235",
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
            "timestamp": "2022-09-29T04:02:44.411Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-235",
            "title": "Order item 235 Kinetic",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T08:00:00.000Z",
            "Description": "Order description 235",
            "Location": "Region-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    116.36,
                                    -21.08
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.9287,
                                    -3.3935
                                ],
                                [
                                    134.37,
                                    -8.1
                                ],
                                [
                                    128.79,
                                    -11.84
                                ],
                                [
                                    122.49,
                                    -16.3
                                ],
                                [
                                    116.47,
                                    -20.47
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
        "_id": "m_F-Blue_238",
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
            "timestamp": "2022-09-23T11:41:07.785Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-238",
            "title": "Order item 238 Kinetic",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T07:00:00.000Z",
            "Description": "Order description 238",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    117.99,
                                    -20.91
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        116.75483721076786,
                                        -20.091930400677597
                                    ],
                                    [
                                        116.75483721076786,
                                        -21.94868645682904
                                    ],
                                    [
                                        118.74435271042714,
                                        -21.94868645682904
                                    ],
                                    [
                                        118.74435271042714,
                                        -20.091930400677597
                                    ],
                                    [
                                        116.75483721076786,
                                        -20.091930400677597
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.7067,
                                    -6.2246
                                ],
                                [
                                    131.97,
                                    -13.4
                                ],
                                [
                                    117.68,
                                    -21.14
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
        "_id": "m_F-Blue_241",
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
            "timestamp": "2022-09-22T09:03:31.949Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-241",
            "title": "Order item 241 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T06:00:00.000Z",
            "Description": "Order description 241",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.8303,
                                    -8.5197
                                ],
                                [
                                    138.91,
                                    -11.04
                                ],
                                [
                                    137.84,
                                    -13.72
                                ],
                                [
                                    136.05,
                                    -16.12
                                ],
                                [
                                    135.55,
                                    -18.23
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
                    "FEName": "Blue:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Blue:20",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_244",
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
            "timestamp": "2022-09-25T20:09:56.904Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-244",
            "title": "Order item 244 Asymmetric",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T07:00:00.000Z",
            "Description": "Order description 244",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    140.27,
                                    -14.62
                                ],
                                [
                                    141.82,
                                    -13.24
                                ],
                                [
                                    143.65,
                                    -11.59
                                ],
                                [
                                    144.76,
                                    -9.65
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        142.56363458992922,
                                        -7.552135577495612
                                    ],
                                    [
                                        142.56363458992922,
                                        -11.68461235768752
                                    ],
                                    [
                                        146.75802172858073,
                                        -11.68461235768752
                                    ],
                                    [
                                        146.75802172858073,
                                        -7.552135577495612
                                    ],
                                    [
                                        142.56363458992922,
                                        -7.552135577495612
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    138.7422,
                                    -15.9904
                                ],
                                [
                                    140.4,
                                    -14.41
                                ],
                                [
                                    141.9,
                                    -12.99
                                ],
                                [
                                    142.69,
                                    -11.3
                                ],
                                [
                                    144.76,
                                    -9.31
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
                    "FEName": "Red Force:35",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Red Force:31",
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
        "_id": "m_F-Red_247",
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
            "timestamp": "2022-09-25T13:00:22.649Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-247",
            "title": "Order item 247 Kinetic",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T14:00:00.000Z",
            "Description": "Order description 247",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    143.66,
                                    -12.8
                                ],
                                [
                                    142.89,
                                    -14.78
                                ],
                                [
                                    142.39,
                                    -18.47
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
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                142.2515,
                                -18.0243
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    144.648,
                                    -9.6247
                                ],
                                [
                                    143.42,
                                    -13.65
                                ],
                                [
                                    142.54,
                                    -18.32
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
                    "EndDate": "2022-09-21T11:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:5",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
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
        "_id": "m_F-Blue_250",
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
            "timestamp": "2022-09-29T19:34:49.185Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-250",
            "title": "Order item 250 Kinetic",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 250",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    125.25,
                                    -18.44
                                ],
                                [
                                    132.76,
                                    -15.86
                                ],
                                [
                                    140.54,
                                    -13.01
                                ],
                                [
                                    147.62,
                                    -9.87
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        146.06975166026803,
                                        -8.452624213337046
                                    ],
                                    [
                                        146.06975166026803,
                                        -11.301205519531543
                                    ],
                                    [
                                        148.9621725356355,
                                        -11.301205519531543
                                    ],
                                    [
                                        148.9621725356355,
                                        -8.452624213337046
                                    ],
                                    [
                                        146.06975166026803,
                                        -8.452624213337046
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    117.7434,
                                    -21.0232
                                ],
                                [
                                    147.88,
                                    -9.53
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
        "_id": "m_F-Red_253",
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
            "timestamp": "2022-09-21T23:53:16.511Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-253",
            "title": "Order item 253 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T20:00:00.000Z",
            "Description": "Order description 253",
            "Location": "Region-A",
            "location": [],
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:12",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T03:00:00.000Z"
                },
                {
                    "FEName": "Red Force:41",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:29",
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
        "_id": "m_F-Red_256",
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
            "timestamp": "2022-09-27T01:55:44.628Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-256",
            "title": "Order item 256 Kinetic",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T17:00:00.000Z",
            "Description": "Order description 256",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa8",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    149.54,
                                    -9.93
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
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        148.6071373732618,
                                        -9.340697112217164
                                    ],
                                    [
                                        148.6071373732618,
                                        -10.904996069137797
                                    ],
                                    [
                                        150.1963363827433,
                                        -10.904996069137797
                                    ],
                                    [
                                        150.1963363827433,
                                        -9.340697112217164
                                    ],
                                    [
                                        148.6071373732618,
                                        -9.340697112217164
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    139.4415,
                                    -20.0229
                                ],
                                [
                                    142.42,
                                    -16.8
                                ],
                                [
                                    146.54,
                                    -13.45
                                ],
                                [
                                    148.94,
                                    -9.81
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
                    "FEName": "Red Force:32",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:50",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
                },
                {
                    "FEName": "Red Force:29",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
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
        "_id": "m_F-Red_259",
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
            "timestamp": "2022-09-28T09:42:13.535Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-259",
            "title": "Order item 259 Transit",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T02:00:00.000Z",
            "Description": "Order description 259",
            "Location": "Point-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
                                ],
                                [
                                    139.66,
                                    -17.06
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    141.6774,
                                    -8.4284
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
                    "FEName": "Blue:14",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_262",
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
            "timestamp": "2022-09-25T23:12:43.233Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-262",
            "title": "Order item 262 Kinetic",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T08:00:00.000Z",
            "Description": "Order description 262",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Kinetic",
            "Assets": [
                {
                    "FEName": "Red Force:46",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Red Force:48",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
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
        "_id": "m_F-Red_265",
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
            "timestamp": "2022-09-28T02:27:13.721Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-265",
            "title": "Order item 265 Kinetic",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T20:00:00.000Z",
            "Description": "Order description 265",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "aa7",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    133.41,
                                    -13.26
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
                    "FEName": "Blue:30",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Blue:26",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T01:00:00.000Z"
                },
                {
                    "FEName": "Blue:31",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
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
        "_id": "m_F-Blue_268",
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
            "timestamp": "2022-09-26T11:25:45.000Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-268",
            "title": "Order item 268 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T15:00:00.000Z",
            "Description": "Order description 268",
            "Location": "Polyline-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:14",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Red Force:57",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_271",
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
            "timestamp": "2022-09-29T10:08:17.070Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-271",
            "title": "Order item 271 Asymmetric",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T11:00:00.000Z",
            "Description": "Order description 271",
            "Location": "Point-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Red Force:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T19:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:44",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T08:00:00.000Z"
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
                },
                {
                    "FEName": "Blue:16",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_274",
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
            "timestamp": "2022-09-28T14:34:49.930Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-274",
            "title": "Order item 274 Transit",
            "startDate": "2022-09-21T01:00:00.000Z",
            "endDate": "2022-09-21T13:00:00.000Z",
            "Description": "Order description 274",
            "Location": "Polyline-B",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    143.17,
                                    -10.84
                                ],
                                [
                                    136.27,
                                    -11.27
                                ],
                                [
                                    129.65,
                                    -12.42
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    149.2994,
                                    -10.1887
                                ],
                                [
                                    139.8,
                                    -11.54
                                ],
                                [
                                    129.77,
                                    -12.43
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
                    "FEName": "Blue:35",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_277",
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
            "timestamp": "2022-09-24T00:45:23.580Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-277",
            "title": "Order item 277 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T22:00:00.000Z",
            "Description": "Order description 277",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    145.89,
                                    -16.85
                                ],
                                [
                                    146.67,
                                    -13.52
                                ],
                                [
                                    146.72,
                                    -10.9
                                ],
                                [
                                    147.06,
                                    -8
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    146.1087,
                                    -20.2046
                                ],
                                [
                                    146.99,
                                    -7.67
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
                    "FEName": "Red Force:0",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:19",
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
        "_id": "m_F-Red_280",
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
            "timestamp": "2022-09-24T00:39:58.021Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-280",
            "title": "Order item 280 Asymmetric",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T09:00:00.000Z",
            "Description": "Order description 280",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    131.58,
                                    -12.54
                                ],
                                [
                                    137.16,
                                    -11.6
                                ],
                                [
                                    142.03,
                                    -9.36
                                ],
                                [
                                    146.18,
                                    -7.85
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        145.97666901628938,
                                        -7.062798781468513
                                    ],
                                    [
                                        145.97666901628938,
                                        -8.449058932603798
                                    ],
                                    [
                                        147.37583656199115,
                                        -8.449058932603798
                                    ],
                                    [
                                        147.37583656199115,
                                        -7.062798781468513
                                    ],
                                    [
                                        145.97666901628938,
                                        -7.062798781468513
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    126.839,
                                    -14.6533
                                ],
                                [
                                    147.12,
                                    -7.7
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
                    "FEName": "Red Force:44",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T07:00:00.000Z"
                },
                {
                    "FEName": "Red Force:51",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T16:00:00.000Z"
                },
                {
                    "FEName": "Red Force:17",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Red Force:57",
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
                    "FEName": "CA155",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Red_283",
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
            "timestamp": "2022-09-28T14:18:33.253Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Red Force-283",
            "title": "Order item 283 Transit",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T06:00:00.000Z",
            "Description": "Order description 283",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "aa1",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9303,
                                    -18.4403
                                ],
                                [
                                    144.27,
                                    -13.99
                                ],
                                [
                                    145.8,
                                    -10.34
                                ],
                                [
                                    146.62,
                                    -6.42
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    142.9303,
                                    -18.4403
                                ],
                                [
                                    146.4,
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
            "ActivityType": "Transit",
            "Assets": [
                {
                    "FEName": "Red Force:57",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T18:00:00.000Z"
                },
                {
                    "FEName": "Red Force:56",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T04:00:00.000Z"
                },
                {
                    "FEName": "Red Force:14",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T22:00:00.000Z"
                },
                {
                    "FEName": "Red Force:46",
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
        "_id": "m_F-Red_286",
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
            "timestamp": "2022-09-29T09:41:09.275Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-286",
            "title": "Order item 286 Asymmetric",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 286",
            "Location": "Polyline-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    131.56,
                                    -16.05
                                ],
                                [
                                    116.98,
                                    -20.86
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
                        "properties": {},
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    147.5097,
                                    -9.88
                                ],
                                [
                                    116.31,
                                    -21.42
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
        "_id": "m_F-Blue_289",
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
            "timestamp": "2022-09-26T10:47:46.087Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-289",
            "title": "Order item 289 Asymmetric",
            "startDate": "2022-09-21T03:00:00.000Z",
            "endDate": "2022-09-21T05:00:00.000Z",
            "Description": "Order description 289",
            "Location": "Region-A",
            "location": [
                {
                    "uniqid": "a11",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    121.65,
                                    -18.42
                                ],
                                [
                                    121.6797,
                                    -18.0415
                                ]
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a12",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                121.6797,
                                -18.0415
                            ]
                        }
                    }
                },
                {
                    "uniqid": "a13",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    150.1536,
                                    -10.7176
                                ],
                                [
                                    143.21,
                                    -12.87
                                ],
                                [
                                    136.27,
                                    -14.03
                                ],
                                [
                                    128.61,
                                    -15.91
                                ],
                                [
                                    121.24,
                                    -18.5
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
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:6",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:32",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T13:00:00.000Z"
                },
                {
                    "FEName": "Blue:31",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T05:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
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
        "_id": "m_F-Blue_292",
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
            "timestamp": "2022-09-28T01:38:23.690Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-292",
            "title": "Order item 292 Asymmetric",
            "startDate": "2022-09-21T00:00:00.000Z",
            "endDate": "2022-09-21T08:00:00.000Z",
            "Description": "Order description 292",
            "Location": "Region-A",
            "location": [],
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
                    "EndDate": "2022-09-21T14:00:00.000Z"
                },
                {
                    "FEName": "Blue:14",
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
                },
                {
                    "FEName": "Red Force:8",
                    "Number": 1
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_295",
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
            "timestamp": "2022-09-25T22:13:02.084Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-295",
            "title": "Order item 295 Transit",
            "startDate": "2022-09-21T04:00:00.000Z",
            "endDate": "2022-09-21T21:00:00.000Z",
            "Description": "Order description 295",
            "Location": "Point-B",
            "location": [
                {
                    "uniqid": "aa4",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    128.41,
                                    -12.76
                                ],
                                [
                                    119.78,
                                    -19.26
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
                    "uniqid": "aa5",
                    "geometry": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        119.3314695256222,
                                        -18.548738594136676
                                    ],
                                    [
                                        119.3314695256222,
                                        -19.273675757103298
                                    ],
                                    [
                                        120.09779140824891,
                                        -19.273675757103298
                                    ],
                                    [
                                        120.09779140824891,
                                        -18.548738594136676
                                    ],
                                    [
                                        119.3314695256222,
                                        -18.548738594136676
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
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    137.5513,
                                    -6.7608
                                ],
                                [
                                    133.5,
                                    -9.36
                                ],
                                [
                                    128.45,
                                    -12.96
                                ],
                                [
                                    123.69,
                                    -16.28
                                ],
                                [
                                    119.21,
                                    -19.31
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
                    "FEName": "Blue:19",
                    "Number": 4,
                    "StartDate": "2022-09-21T04:00:00.000Z",
                    "EndDate": "2022-09-21T12:00:00.000Z"
                },
                {
                    "FEName": "Blue:39",
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
                }
            ]
        },
        "hasBeenRead": false,
        "_id": "m_F-Blue_298",
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
            "timestamp": "2022-09-28T08:31:41.268Z",
            "turnNumber": 3
        },
        "message": {
            "reference": "Blue-298",
            "title": "Order item 298 Asymmetric",
            "startDate": "2022-09-21T02:00:00.000Z",
            "endDate": "2022-09-21T13:00:00.000Z",
            "Description": "Order description 298",
            "Location": "Region-A",
            "location": [],
            "ActivityType": "Asymmetric",
            "Assets": [
                {
                    "FEName": "Blue:17",
                    "Number": 2,
                    "StartDate": "2022-09-21T02:00:00.000Z",
                    "EndDate": "2022-09-21T17:00:00.000Z"
                },
                {
                    "FEName": "Blue:28",
                    "Number": 0,
                    "StartDate": "2022-09-21T00:00:00.000Z",
                    "EndDate": "2022-09-21T09:00:00.000Z"
                },
                {
                    "FEName": "Blue:8",
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
        "_id": "m_F-Blue_301",
        "_rev": "2"
    }
]