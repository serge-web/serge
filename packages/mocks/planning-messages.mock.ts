
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const planningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Mar-4",
                roleId: "rk116f53",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-29T08:51:37.924Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-6",
            title: "Order item 6 Transit",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T04:30:00.000Z",
            Description: "Order description 6",
            location: [
                {
                    uniqid: "aa4",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:00:00.000Z",
                            endDate: "2022-11-15T00:50:00.000Z",
                            uniqid: "aa4",
                            name: "Route in"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
                    uniqid: "aa5",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T01:20:00.000Z",
                            endDate: "2022-11-15T02:50:00.000Z",
                            uniqid: "aa5",
                            name: "Target Area"
                        },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
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
                    uniqid: "aa6",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T02:50:00.000Z",
                            endDate: "2022-11-15T04:30:00.000Z",
                            uniqid: "aa6",
                            name: "Route out"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "area-strike",
            ownAssets: [
                "Blue:4",
                "Blue:7"
            ],
            otherAssets: [
                "Red Force:14",
                "Red Force:19"
            ]
        },
        hasBeenRead: false,
        _id: "m_F-Blue_6",
        _rev: "2"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Air-3",
                roleId: "3rk116f53",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-22T21:06:20.164Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue Force-9",
            title: "Order item 9 Transit",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T04:50:00.000Z",
            Description: "Order description 9",
            Location: "Region-B",
            location: [
                {
                    uniqid: "aa8",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:00:00.000Z",
                            endDate: "2022-11-15T00:50:00.000Z",
                            uniqid: "aa8",
                            name: "Route in"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
                    uniqid: "aa9",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T01:40:00.000Z",
                            endDate: "2022-11-15T03:10:00.000Z",
                            uniqid: "aa9",
                            name: "Flight Box"
                        },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
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
                    uniqid: "a10",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T03:10:00.000Z",
                            endDate: "2022-11-15T04:50:00.000Z",
                            uniqid: "a10",
                            name: "Route out"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "area-strike",
            ownAssets: [
                "a198"
            ],
            otherAssets: []
        },
        hasBeenRead: false,
        _id: "m_F-Red_9",
        _rev: "2"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Air-3",
                roleId: "3rk116f53",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-29T07:05:03.194Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-12",
            title: "Order item 12 Kinetic",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T00:40:00.000Z",
            Description: "Order description 12",
            Location: "Polyline-B",
            location: [],
            activity: "precis-strike",
            ownAssets: [
                "a186",
                "a172"
            ],
            otherAssets: [
                "a132",
                "a146"
            ]
        },
        hasBeenRead: false,
        _id: "m_F-Blue_12",
        _rev: "2"
    },
    {
        messageType: "InteractionMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Logs",
                roleId: "rk116f5e",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            interaction: {
                startTime: "2022-11-15T00:00:00.000Z",
                endTime: "2022-11-15T05:30:00.000Z",
                orders1: "m_F-Blue_12",
                orders2: "m_F-Red_27"    
            },
            timestamp: "2022-09-23T14:47:47.015Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-21",
            locationOutcomes: [],
            perceptionOutcomes: [],
            healthOutcomes: []
        },
        hasBeenRead: false,
        _id: "adjud_23423",
        _rev: "m_F-Red_27"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Logs",
                roleId: "blue-logs",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-23T14:47:47.015Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-15",
            title: "Order item 15 Kinetic",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T05:30:00.000Z",
            Description: "Order description 15",
            Location: "Polyline-A",
            location: [
                {
                    uniqid: "a11",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:00:00.000Z",
                            endDate: "2022-11-15T00:50:00.000Z",
                            uniqid: "a11"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
                    uniqid: "a12",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:50:00.000Z",
                            endDate: "2022-11-15T03:00:00.000Z",
                            uniqid: "a12"
                        },
                        geometry: {
                            type: "Point",
                            coordinates: [
                                129.3162,
                                -16.1699
                            ]
                        }
                    }
                },
                {
                    uniqid: "a13",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T03:00:00.000Z",
                            endDate: "2022-11-15T05:30:00.000Z",
                            uniqid: "a13"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "area-strike",
            ownAssets: [
                "a200",
                "a185"
            ],
            otherAssets: []
        },
        hasBeenRead: false,
        _id: "m_F-Blue_15",
        _rev: "2"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Mar-4",
                roleId: "rk116f53",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-22T12:14:31.627Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-18",
            title: "Order item 18 Asymmetric",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T00:50:00.000Z",
            Description: "Order description 18",
            Location: "Point-A",
            location: [
                {
                    uniqid: "aa7",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:00:00.000Z",
                            endDate: "2022-11-15T00:50:00.000Z",
                            uniqid: "aa7",
                            name: "Route"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "cyber",
            ownAssets: [
                "a186"
            ],
            otherAssets: [
                "a0pra000201",
                "a0pra000201"
            ]
        },
        hasBeenRead: false,
        _id: "m_F-Blue_18",
        _rev: "2"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Air-1",
                roleId: "1rk116f53",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-25T23:25:17.028Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-21",
            title: "Order item 21 Asymmetric",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T06:50:00.000Z",
            Description: "Order description 21",
            Location: "Polyline-B",
            location: [
                {
                    uniqid: "aa8",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:00:00.000Z",
                            endDate: "2022-11-15T01:20:00.000Z",
                            uniqid: "aa8",
                            name: "Route in"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
                    uniqid: "aa9",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T01:20:00.000Z",
                            endDate: "2022-11-15T04:00:00.000Z",
                            uniqid: "aa9",
                            name: "Flight Box"
                        },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
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
                    uniqid: "a10",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T04:00:00.000Z",
                            endDate: "2022-11-15T06:50:00.000Z",
                            uniqid: "a10",
                            name: "Route out"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "area-recce",
            ownAssets: [
                "a170",
                "a165"
            ],
            otherAssets: [
                "a116",
                "a118"
            ]
        },
        hasBeenRead: false,
        _id: "m_F-Blue_21",
        _rev: "2"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Mar-2",
                roleId: "rk116f51",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-25T16:20:03.221Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-24",
            title: "Order item 24 Kinetic",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T03:40:00.000Z",
            Description: "Order description 24",
            Location: "Region-A",
            location: [
                {
                    uniqid: "a11",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:00:00.000Z",
                            endDate: "2022-11-15T00:50:00.000Z",
                            uniqid: "a11"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
                    uniqid: "a12",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:50:00.000Z",
                            endDate: "2022-11-15T02:30:00.000Z",
                            uniqid: "a12"
                        },
                        geometry: {
                            type: "Point",
                            coordinates: [
                                140.9707,
                                -17.0411
                            ]
                        }
                    }
                },
                {
                    uniqid: "a13",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T02:30:00.000Z",
                            endDate: "2022-11-15T03:40:00.000Z",
                            uniqid: "a13"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "point-recce",
            ownAssets: [
                "a172",
                "a185"
            ],
            otherAssets: [
                "a125"
            ]
        },
        hasBeenRead: false,
        _id: "m_F-Blue_24",
        _rev: "2"
    },
    {
        messageType: "InteractionMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Blue",
                forceColor: "#00F",
                roleName: "Logs",
                roleId: "rk116f5e",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Blue"
            },
            messageType: "Land Activity",
            interaction: {
                complete: true,
                startTime: "2022-11-15T04:00:00.000Z",
                endTime: "2022-11-15T06:30:00.000Z",
                orders1: "m_F-Blue_24",
                orders2: "m_F-Red_30"
                },
            timestamp: "2022-09-23T14:41:47.015Z",
            turnNumber: 3
        },
        message: {
            Reference: "Blue-15",
            locationOutcomes: [],
            perceptionOutcomes: [],
            healthOutcomes: []
        },
        hasBeenRead: false,
        _id: "adjud_23111",
        _rev: "m_F-Red_34"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Red Force",
                forceColor: "#F00",
                roleName: "Comms",
                roleId: "rkr226f5b",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Red"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-21T14:58:50.204Z",
            turnNumber: 3
        },
        message: {
            Reference: "Red Force-27",
            title: "Order item 27 Kinetic",
            startDate: "2022-11-15T00:00:00.000Z",
            endDate: "2022-11-15T03:30:00.000Z",
            Description: "Order description 27",
            Location: "Region-A",
            location: [
                {
                    uniqid: "aa4",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:00:00.000Z",
                            endDate: "2022-11-15T00:50:00.000Z",
                            uniqid: "aa4",
                            name: "Route in"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
                    uniqid: "aa5",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:50:00.000Z",
                            endDate: "2022-11-15T01:50:00.000Z",
                            uniqid: "aa5",
                            name: "Target Area"
                        },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
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
                    uniqid: "aa6",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T01:50:00.000Z",
                            endDate: "2022-11-15T03:30:00.000Z",
                            uniqid: "aa6",
                            name: "Route out"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "point-recce",
            ownAssets: [
                "a153"
            ],
            otherAssets: [
                "a168",
                "a166"
            ]
        },
        hasBeenRead: false,
        _id: "m_F-Red_27",
        _rev: "2"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Red Force",
                forceColor: "#F00",
                roleName: "CO",
                roleId: "rkr226f5e",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Red"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-22T03:21:37.977Z",
            turnNumber: 3
        },
        message: {
            Reference: "Red Force-30",
            title: "Order item 30 Transit",
            startDate: "2022-11-15T00:05:00.000Z",
            endDate: "2022-11-15T03:15:00.000Z",
            Description: "Order description 30",
            Location: "Point-A",
            location: [],
            activity: "transit",
            ownAssets: [
                "a131"
            ],
            otherAssets: [
                "a0pra000202"
            ]
        },
        hasBeenRead: false,
        _id: "m_F-Red_30",
        _rev: "2"
    },
    {
        messageType: "PlanningMessage",
        details: {
            channel: "channel-blue-planning",
            from: {
                force: "Red Force",
                forceColor: "#F00",
                roleName: "Comms",
                roleId: "rkr226f5b",
                iconURL: "default_img/umpireDefault.png",
                forceId: "F-Red"
            },
            messageType: "Land Activity",
            timestamp: "2022-09-27T05:28:26.541Z",
            turnNumber: 3
        },
        message: {
            Reference: "Red Force-33",
            title: "Order item 33 Kinetic",
            startDate: "2022-11-15T00:20:00.000Z",
            endDate: "2022-11-15T02:40:00.000Z",
            Description: "Order description 33",
            Location: "Point-A",
            location: [
                {
                    uniqid: "a11",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T00:20:00.000Z",
                            endDate: "2022-11-15T01:10:00.000Z",
                            uniqid: "a11"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
                    uniqid: "a12",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T01:10:00.000Z",
                            endDate: "2022-11-15T01:10:00.000Z",
                            uniqid: "a12"
                        },
                        geometry: {
                            type: "Point",
                            coordinates: [
                                149.3998,
                                -10.1238
                            ]
                        }
                    }
                },
                {
                    uniqid: "a13",
                    geometry: {
                        type: "Feature",
                        properties: {
                            startDate: "2022-11-15T01:10:00.000Z",
                            endDate: "2022-11-15T02:40:00.000Z",
                            uniqid: "a13"
                        },
                        geometry: {
                            type: "LineString",
                            coordinates: [
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
            activity: "point-recce",
            ownAssets: [
                "a158",
                "a147"
            ],
            otherAssets: []
        },
        hasBeenRead: false,
        _id: "m_F-Red_33",
        _rev: "2"
    }
]