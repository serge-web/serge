import { Wargame } from "@serge/custom-types";

const game: Wargame = {
  "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
  "wargameList": [],
  "data": {
    "annotationIcons": {
      "markers": [
          {
              "icon": "marker_unknown.svg",
              "name": "Unknown",
              "uniqid": "unk"
          },
          {
              "icon": "marker_audio_visual.svg",
              "name": "Audio-Visual",
              "uniqid": "a/v"
          },
          {
              "icon": "marker_audio.svg",
              "name": "Audio",
              "uniqid": "aud"
          },
          {
              "icon": "marker_flash.svg",
              "name": "Flash",
              "uniqid": "flsh"
          },
          {
              "icon": "marker_general.svg",
              "name": "General",
              "uniqid": "gen"
          },
          {
              "icon": "marker_periscope.svg",
              "name": "Periscope",
              "uniqid": "peri"
          },
          {
              "icon": "marker_plume.svg",
              "name": "Plume",
              "uniqid": "plum"
          },
          {
              "icon": "marker_wake.svg",
              "name": "Wake",
              "uniqid": "wak"
          },
          {
              "icon": "marker_visual.svg",
              "name": "Visual",
              "uniqid": "vis"
          }
      ]
  },
    "channels": {
      "channels": [
        {
          "name": "Blue Planning",
          "channelType": "ChannelPlanning",
          "participants": [
            {
              "forceUniqid": "F-Blue",
              "pType": "ParticipantPlanning",
              "roles": [],
              "subscriptionId": "huk3qr",
              "templates": [
                {
                  "_id": "k16e-maritime",
                  "title": "Maritime Activity"
                },
                {
                  "title": "Land Activity",
                  "_id": "k16e-land"
                },
                {
                  "title": "Air Activity",
                  "_id": "k16e-air"
                },
                {
                  "title": "Other Activity",
                  "_id": "k16e-other"
                }
              ]
            },
            {
              "pType": "ParticipantPlanning",
              "forceUniqid": "umpire",
              "roles": [
                "rkrlw6f5f"
              ],
              "subscriptionId": "r4y1p",
              "templates": []
            }
          ],
          "uniqid": "channel-blue-planning"
        },
        {
          "name": "Red Planning",
          "channelType": "ChannelPlanning",
          "participants": [
            {
              "forceUniqid": "F-Red",
              "pType": "ParticipantPlanning",
              "roles": [],
              "subscriptionId": "hukqra",
              "templates": [
                {
                  "_id": "k16e-maritime",
                  "title": "Maritime Activity"
                },
                {
                  "title": "Land Activity",
                  "_id": "k16e-land"
                },
                {
                  "title": "Air Activity",
                  "_id": "k16e-air"
                },
                {
                  "title": "Other Activity",
                  "_id": "k16e-other"
                }
              ]
            },
            {
              "pType": "ParticipantPlanning",
              "forceUniqid": "umpire",
              "roles": [
                "rkrlw6f5f"
              ],
              "subscriptionId": "r4ybp",
              "templates": []
            }
          ],
          "uniqid": "channel-red-planning"
        },
        {
          "name": "Red",
          "channelType": "ChannelChat",
          "participants": [
            {
              "forceUniqid": "F-Red",
              "roles": [],
              "subscriptionId": "7bayi",
              "pType": "ParticipantChat"
            },
            {
              "forceUniqid": "umpire",
              "roles": [
                "rkrlw6f5f"
              ],
              "subscriptionId": "h2my2k",
              "pType": "ParticipantChat"
            }
          ],
          "uniqid": "channel-koirfxsx"
        },
        {
          "name": "Blue RFI",
          "channelType": "ChannelCustom",
          "participants": [
            {
              "pType": "ParticipantCustom",
              "forceUniqid": "F-Blue",
              "roles": [],
              "subscriptionId": "etkkn",
              "templates": [
                {
                  "_id": "2021-08-23T07:58:43.425Z",
                  "title": "RFI"
                }
              ]
            },
            {
              "pType": "ParticipantCustom",
              "forceUniqid": "umpire",
              "roles": [
                "rkrlw6f5f"
              ],
              "subscriptionId": "qhnqr",
              "templates": []
            }
          ],
          "uniqid": "channel-koirh7ok"
        },
        {
          "name": "Red RFI",
          "channelType": "ChannelCustom",
          "participants": [
            {
              "pType": "ParticipantCustom",
              "forceUniqid": "umpire",
              "roles": [
                "rks5zfzd5"
              ],
              "subscriptionId": "lity",
              "templates": []
            },
            {
              "pType": "ParticipantCustom",
              "forceUniqid": "F-Red",
              "roles": [],
              "subscriptionId": "3b3ww",
              "templates": [
                {
                  "_id": "2021-08-23T07:58:43.425Z",
                  "title": "RFI"
                }
              ]
            }
          ],
          "uniqid": "channel-koirji8u"
        },
        {
          "uniqid": "l650fqoy",
          "name": "mapping",
          "channelType": "mapping",
          "participants": [
              {
                  "forceUniqid": "umpire",
                  "roles": [
                      "pl63jl7so"
                  ],
                  "subscriptionId": "qdaad",
                  "pType": "ParticipantMapping",
                  "controls": [ ]
              },
              {
                  "forceUniqid": "F-Blue",
                  "roles": [
                      "pl65060rb"
                  ],
                  "subscriptionId": "k6co",
                  "pType": "ParticipantMapping",
                  "controls": [ ]
              }
          ],
          "constraints": {
            "tileLayer": {
              "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
              "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
            },
            "bounds": [
              [
                -3,
                115
              ],
              [
                -22,
                150
              ]
            ],
            "maxNativeZoom": 17,
            "h3res": 5,
            "minZoom": 2,
            "cellLabelsStyle": "x_y_labels",
            "maxZoom": 17
          }
      }
      ],
      "dirty": false,
      "name": "Channels",
      "selectedChannel": ""
    },
    "forces": {
      "dirty": false,
      "forces": [
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
              "name": "Game Control",
              "roleId": "rkrlw6f5f"
            }
          ],
          "umpire": true,
          "uniqid": "umpire"
        },
        {
          "assets": [
            {
                "uniqid": "a461",
                "contactId": "CA698",
                "name": "Blue:0",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:0",
                        "force": "F-Blue"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA698",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859cd107fffffff",
                "location": [
                    -7.3072,
                    140.8794
                ],
                "owner": "rk116f53",
                "comprising": [
                    {
                        "uniqid": "a462",
                        "contactId": "CA434",
                        "name": "Blue:1",
                        "perceptions": [
                            {
                                "by": "F-Red",
                                "name": "CA434",
                                "typeId": "id-mpa",
                                "force": "F-Green"
                            },
                            {
                                "by": "F-Green",
                                "name": "Blue:1",
                                "force": "F-Blue"
                            }
                        ],
                        "platformTypeId": "id-mpa",
                        "condition": "working",
                        "position": "85728e87fffffff",
                        "location": [
                            -3.438,
                            136.9891
                        ],
                        "owner": "3rk116f53"
                    },
                    {
                        "uniqid": "a463",
                        "contactId": "CA1979",
                        "name": "Blue:2",
                        "perceptions": [
                            {
                                "by": "F-Red",
                                "name": "Blue:2"
                            },
                            {
                                "by": "F-Green",
                                "name": "CA1979",
                                "typeId": "id-ssn",
                                "force": "F-Blue"
                            }
                        ],
                        "platformTypeId": "id-ssn",
                        "condition": "working",
                        "position": "859c991bfffffff",
                        "location": [
                            -5.3001,
                            146.2608
                        ],
                        "owner": "blue-logs"
                    },
                    {
                        "uniqid": "a464",
                        "contactId": "CA1010",
                        "name": "Blue:3",
                        "perceptions": [
                            {
                                "by": "F-Red",
                                "name": "Blue:3",
                                "typeId": "id-uav",
                                "force": "F-Blue"
                            }
                        ],
                        "platformTypeId": "id-uav",
                        "condition": "working",
                        "position": "85728abbfffffff",
                        "location": [
                            -4.4393,
                            137.8363
                        ],
                        "owner": "rk116f52"
                    }
                ]
            },
            {
                "uniqid": "a465",
                "contactId": "CA1579",
                "name": "Blue:4",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA1579"
                    }
                ],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859c8d77fffffff",
                "location": [
                    -8.3232,
                    144.5763
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a466",
                "contactId": "CA224",
                "name": "Blue:5",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:5",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859c8d43fffffff",
                "location": [
                    -8.1509,
                    145.1382
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a467",
                "contactId": "CA715",
                "name": "Blue:6",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA715",
                        "typeId": "id-mcm",
                        "force": "F-Blue"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA715",
                        "typeId": "id-mcm",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859cdd37fffffff",
                "location": [
                    -7.661,
                    138.2157
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a468",
                "contactId": "CA510",
                "name": "Blue:7",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:7",
                        "typeId": "id-mcm",
                        "force": "F-Blue"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA510",
                        "typeId": "id-mcm"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859cd0c7fffffff",
                "location": [
                    -7.1092,
                    142.5784
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a469",
                "contactId": "CA1476",
                "name": "Blue:8",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:8"
                    }
                ],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859c8903fffffff",
                "location": [
                    -7.7001,
                    144.0358
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a470",
                "contactId": "CA421",
                "name": "Blue:9",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA421",
                        "force": "F-Blue"
                    },
                    {
                        "by": "F-Green",
                        "name": "Blue:9",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859c89a3fffffff",
                "location": [
                    -7.9929,
                    143.8052
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a471",
                "contactId": "CA491",
                "name": "Blue:10",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA491"
                    }
                ],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "859c8e07fffffff",
                "location": [
                    -7.2831,
                    146.1721
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a472",
                "contactId": "CA3273",
                "name": "Blue:11",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859ca853fffffff",
                "location": [
                    -10.0375,
                    146.6188
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a473",
                "contactId": "CA1670",
                "name": "Blue:12",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA1670",
                        "typeId": "id-carrier",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859c8ec3fffffff",
                "location": [
                    -7.2811,
                    146.7997
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a474",
                "contactId": "CA1181",
                "name": "Blue:13",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:13",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "85728bbbfffffff",
                "location": [
                    -4.3203,
                    139.0585
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a475",
                "contactId": "CA636",
                "name": "Blue:14",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA636",
                        "force": "F-Green"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA636",
                        "typeId": "id-boghammer"
                    }
                ],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "859cd94bfffffff",
                "location": [
                    -6.3191,
                    138.3825
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a476",
                "contactId": "CA835",
                "name": "Blue:15",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "Blue:15",
                        "typeId": "id-uav",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "8572aa27fffffff",
                "location": [
                    -1.9388,
                    137.2664
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a477",
                "contactId": "CA2297",
                "name": "Blue:16",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:16",
                        "typeId": "id-ssn",
                        "force": "F-Green"
                    }
                ],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "85728357fffffff",
                "location": [
                    -4.1751,
                    135.5492
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a478",
                "contactId": "CA3296",
                "name": "Blue:17",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA3296",
                        "typeId": "id-boghammer"
                    }
                ],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "859cd897fffffff",
                "location": [
                    -7.0334,
                    139.3427
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a479",
                "contactId": "CA2382",
                "name": "Blue:18",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:18",
                        "typeId": "id-boghammer",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "859c8e8ffffffff",
                "location": [
                    -7.6244,
                    146.3984
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a480",
                "contactId": "CA482",
                "name": "Blue:19",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:19",
                        "force": "F-Blue"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA482",
                        "typeId": "id-merchant"
                    }
                ],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859cd167fffffff",
                "location": [
                    -6.8237,
                    140.8167
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a481",
                "contactId": "CA2802",
                "name": "Blue:0",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:0",
                        "typeId": "id-task-group",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859c9d0ffffffff",
                "location": [
                    -6.0689,
                    146.7143
                ],
                "owner": "2rk116f53",
                "comprising": [
                    {
                        "uniqid": "a482",
                        "contactId": "CA1836",
                        "name": "Blue:1",
                        "perceptions": [
                            {
                                "by": "F-Red",
                                "name": "Blue:1",
                                "typeId": "id-mcm"
                            }
                        ],
                        "platformTypeId": "id-mcm",
                        "condition": "working",
                        "position": "857281a3fffffff",
                        "location": [
                            -2.7157,
                            136.5078
                        ],
                        "owner": "blue-logs"
                    },
                    {
                        "uniqid": "a483",
                        "contactId": "CA2962",
                        "name": "Blue:2",
                        "perceptions": [
                            {
                                "by": "F-Red",
                                "name": "Blue:2",
                                "typeId": "id-carrier"
                            }
                        ],
                        "platformTypeId": "id-carrier",
                        "condition": "working",
                        "position": "859ca6a7fffffff",
                        "location": [
                            -10.7743,
                            149.9176
                        ],
                        "owner": "rk116f51"
                    },
                    {
                        "uniqid": "a484",
                        "contactId": "CA626",
                        "name": "Blue:3",
                        "perceptions": [
                            {
                                "by": "F-Green",
                                "name": "CA626",
                                "typeId": "id-mcm",
                                "force": "F-Blue"
                            }
                        ],
                        "platformTypeId": "id-mcm",
                        "condition": "working",
                        "position": "859c80bbfffffff",
                        "location": [
                            -8.2631,
                            148.1018
                        ],
                        "owner": "rk116f52"
                    }
                ]
            },
            {
                "uniqid": "a485",
                "contactId": "CA43",
                "name": "Blue:4",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:4",
                        "typeId": "id-frigate-ta"
                    }
                ],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8572aa7bfffffff",
                "location": [
                    -2.3955,
                    136.6035
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a486",
                "contactId": "CA3250",
                "name": "Blue:5",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA3250",
                        "force": "F-Green"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85729babfffffff",
                "location": [
                    -6.7223,
                    137.079
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a487",
                "contactId": "CA666",
                "name": "Blue:6",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA666",
                        "typeId": "id-mcm",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c99dbfffffff",
                "location": [
                    -5.4576,
                    146.6215
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a488",
                "contactId": "CA1493",
                "name": "Blue:7",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA1493",
                        "typeId": "id-mcm"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85729c37fffffff",
                "location": [
                    -5.1,
                    135.9194
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a489",
                "contactId": "CA3183",
                "name": "Blue:8",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA3183",
                        "typeId": "id-auxiliary"
                    }
                ],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85729c37fffffff",
                "location": [
                    -5.0896,
                    135.9071
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a490",
                "contactId": "CA2618",
                "name": "Blue:9",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:9",
                        "typeId": "id-frigate-ta"
                    },
                    {
                        "by": "F-Green",
                        "name": "Blue:9",
                        "typeId": "id-frigate-ta"
                    }
                ],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859c8017fffffff",
                "location": [
                    -8.1267,
                    148.1172
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a491",
                "contactId": "CA965",
                "name": "Blue:10",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA965",
                        "typeId": "id-carrier",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "857299cffffffff",
                "location": [
                    -5.875,
                    136.9992
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a492",
                "contactId": "CA1565",
                "name": "Blue:11",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA1565",
                        "typeId": "id-carrier"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859cc66bfffffff",
                "location": [
                    -8.6101,
                    141.3164
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a493",
                "contactId": "CA1962",
                "name": "Blue:12",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA1962",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859ca2affffffff",
                "location": [
                    -9.8159,
                    149.2754
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a494",
                "contactId": "CA709",
                "name": "Blue:13",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "85728cd7fffffff",
                "location": [
                    -2.538,
                    136.9595
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a495",
                "contactId": "CA868",
                "name": "Blue:14",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA868",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859cf39bfffffff",
                "location": [
                    -9.246,
                    142.8297
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a496",
                "contactId": "CA1758",
                "name": "Blue:15",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859ca867fffffff",
                "location": [
                    -9.9043,
                    145.9028
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a497",
                "contactId": "CA2464",
                "name": "Blue:16",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "CA2464",
                        "force": "F-Green"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA2464",
                        "typeId": "id-missile"
                    }
                ],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cca53fffffff",
                "location": [
                    -7.5845,
                    138.0865
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a498",
                "contactId": "CA819",
                "name": "Blue:17",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859cce57fffffff",
                "location": [
                    -8.5326,
                    138.5668
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a499",
                "contactId": "CA3019",
                "name": "Blue:18",
                "perceptions": [
                    {
                        "by": "F-Red",
                        "name": "Blue:18",
                        "typeId": "id-destroyer",
                        "force": "F-Green"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA3019",
                        "typeId": "id-destroyer"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "857299c3fffffff",
                "location": [
                    -5.7004,
                    136.9137
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a500",
                "contactId": "CA1846",
                "name": "Blue:19",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859ca6b7fffffff",
                "location": [
                    -10.8602,
                    150.005
                ],
                "owner": "rk116f5e"
            }
        ],
          "color": "#00F",
          "dirty": false,
          "iconURL": "default_img/umpireDefault.png",
          "name": "Blue",
          "overview": "Blue force.",
          "roles": [
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Mar-1",
              "roleId": "rk116f5e"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Mar-2",
              "roleId": "rk116f51"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Mar-3",
              "roleId": "rk116f52"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Mar-4",
              "roleId": "rk116f53"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Air-1",
              "roleId": "1rk116f53"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Air-2",
              "roleId": "2rk116f53"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Air-3",
              "roleId": "3rk116f53"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Logs",
              "roleId": "blue-logs"
            }
          ],
          "umpire": false,
          "uniqid": "F-Blue"
        },
        {
          "assets": [
            {
                "uniqid": "a401",
                "contactId": "CA1543",
                "name": "Red Force:0",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA1543",
                        "typeId": "id-task-group",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859d480bfffffff",
                "location": [
                    -21.5723,
                    139.2382
                ],
                "owner": "rkr226f5a",
                "comprising": [
                    {
                        "uniqid": "a402",
                        "contactId": "CA857",
                        "name": "Red Force:1",
                        "perceptions": [
                            {
                                "by": "F-Blue",
                                "name": "Red Force:1",
                                "typeId": "id-carrier"
                            }
                        ],
                        "platformTypeId": "id-carrier",
                        "condition": "working",
                        "position": "85b8d85bfffffff",
                        "location": [
                            -20.8594,
                            126.2534
                        ],
                        "owner": "rkr226f5d"
                    },
                    {
                        "uniqid": "a403",
                        "contactId": "CA2978",
                        "name": "Red Force:2",
                        "perceptions": [
                            {
                                "by": "F-Blue",
                                "name": "CA2978",
                                "force": "F-Green"
                            },
                            {
                                "by": "F-Green",
                                "name": "Red Force:2",
                                "typeId": "id-agi"
                            }
                        ],
                        "platformTypeId": "id-agi",
                        "condition": "working",
                        "position": "8594c07bfffffff",
                        "location": [
                            -17.7576,
                            129.4618
                        ],
                        "owner": "rkr226f5c"
                    },
                    {
                        "uniqid": "a404",
                        "contactId": "CA2367",
                        "name": "Red Force:3",
                        "perceptions": [
                            {
                                "by": "F-Blue",
                                "name": "Red Force:3",
                                "force": "F-Green"
                            },
                            {
                                "by": "F-Green",
                                "name": "Red Force:3",
                                "typeId": "id-frigate"
                            }
                        ],
                        "platformTypeId": "id-frigate",
                        "condition": "working",
                        "position": "859d557bfffffff",
                        "location": [
                            -20.5542,
                            143.8555
                        ],
                        "owner": "rkr226f5e"
                    }
                ]
            },
            {
                "uniqid": "a405",
                "contactId": "CA3204",
                "name": "Red Force:4",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA3204",
                        "typeId": "id-uav",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859d4ea3fffffff",
                "location": [
                    -21.7706,
                    140.0237
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a406",
                "contactId": "CA57",
                "name": "Red Force:5",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:5",
                        "typeId": "id-destroyer",
                        "force": "F-Green"
                    },
                    {
                        "by": "F-Green",
                        "name": "Red Force:5",
                        "typeId": "id-destroyer",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85b89453fffffff",
                "location": [
                    -21.7175,
                    137.1398
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a407",
                "contactId": "CA111",
                "name": "Red Force:6",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "85b89cabfffffff",
                "location": [
                    -21.4191,
                    133.6235
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a408",
                "contactId": "CA2867",
                "name": "Red Force:7",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:7",
                        "typeId": "id-fixed-wing",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA2867",
                        "typeId": "id-fixed-wing"
                    }
                ],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "8594c3d3fffffff",
                "location": [
                    -17.9949,
                    129.676
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a409",
                "contactId": "CA2065",
                "name": "Red Force:8",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA2065"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859490cffffffff",
                "location": [
                    -19.8261,
                    119.9307
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a410",
                "contactId": "CA3278",
                "name": "Red Force:9",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA3278",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "Red Force:9",
                        "typeId": "id-fixed-wing"
                    }
                ],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "8594c4d7fffffff",
                "location": [
                    -16.3406,
                    128.4888
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a411",
                "contactId": "CA2867",
                "name": "Red Force:10",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:10",
                        "typeId": "id-auxiliary",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "Red Force:10",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859d2a0ffffffff",
                "location": [
                    -21.8305,
                    148.9898
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a412",
                "contactId": "CA9",
                "name": "Red Force:11",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859d541bfffffff",
                "location": [
                    -20.7396,
                    145.3076
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a413",
                "contactId": "CA454",
                "name": "Red Force:12",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:12",
                        "typeId": "id-fixed-wing"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA454",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "8594e837fffffff",
                "location": [
                    -15.2754,
                    131.8222
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a414",
                "contactId": "CA1522",
                "name": "Red Force:13",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA1522"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "8594e2c3fffffff",
                "location": [
                    -15.62,
                    127.7272
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a415",
                "contactId": "CA3155",
                "name": "Red Force:14",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:14",
                        "typeId": "id-carrier"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA3155",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859d5abbfffffff",
                "location": [
                    -18.7916,
                    141.5652
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a416",
                "contactId": "CA2587",
                "name": "Red Force:15",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA2587",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "8594d95bfffffff",
                "location": [
                    -20.073,
                    131.1271
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a417",
                "contactId": "CA1534",
                "name": "Red Force:16",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8594c377fffffff",
                "location": [
                    -18.3244,
                    130.4885
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a418",
                "contactId": "CA2685",
                "name": "Red Force:17",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "Red Force:17",
                        "typeId": "id-ssk"
                    }
                ],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "85b8d053fffffff",
                "location": [
                    -21.618,
                    128.7419
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a419",
                "contactId": "CA1147",
                "name": "Red Force:18",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:18",
                        "typeId": "id-helo",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "859c440bfffffff",
                "location": [
                    -17.0889,
                    138.192
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a420",
                "contactId": "CA489",
                "name": "Red Force:19",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA489",
                        "typeId": "id-boghammer"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA489",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "85b88b4ffffffff",
                "location": [
                    -21.2622,
                    130.7655
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a421",
                "contactId": "CA3061",
                "name": "Red Force:0",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA3061",
                        "typeId": "id-task-group",
                        "force": "F-Green"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA3061",
                        "typeId": "id-task-group"
                    }
                ],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859c46c3fffffff",
                "location": [
                    -16.2668,
                    138.9227
                ],
                "owner": "rkr226f5a",
                "comprising": [
                    {
                        "uniqid": "a422",
                        "contactId": "CA172",
                        "name": "Red Force:1",
                        "perceptions": [],
                        "platformTypeId": "id-frigate-ta",
                        "condition": "working",
                        "position": "859c5dc3fffffff",
                        "location": [
                            -14.7762,
                            136.2898
                        ],
                        "owner": "rkr226f5a"
                    },
                    {
                        "uniqid": "a423",
                        "contactId": "CA1674",
                        "name": "Red Force:2",
                        "perceptions": [
                            {
                                "by": "F-Blue",
                                "name": "Red Force:2",
                                "typeId": "id-mcm",
                                "force": "F-Red"
                            },
                            {
                                "by": "F-Green",
                                "name": "CA1674"
                            }
                        ],
                        "platformTypeId": "id-mcm",
                        "condition": "working",
                        "position": "85a6a5a3fffffff",
                        "location": [
                            -21.6913,
                            115.4131
                        ],
                        "owner": "rkr226f5d"
                    },
                    {
                        "uniqid": "a424",
                        "contactId": "CA2766",
                        "name": "Red Force:3",
                        "perceptions": [
                            {
                                "by": "F-Blue",
                                "name": "Red Force:3",
                                "typeId": "id-auxiliary",
                                "force": "F-Green"
                            },
                            {
                                "by": "F-Green",
                                "name": "Red Force:3",
                                "typeId": "id-auxiliary"
                            }
                        ],
                        "platformTypeId": "id-auxiliary",
                        "condition": "working",
                        "position": "859c5d47fffffff",
                        "location": [
                            -14.4082,
                            136.0105
                        ],
                        "owner": "rkr226f5b"
                    }
                ]
            },
            {
                "uniqid": "a425",
                "contactId": "CA1249",
                "name": "Red Force:4",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA1249",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859c29abfffffff",
                "location": [
                    -17.5918,
                    141.9202
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a426",
                "contactId": "CA2609",
                "name": "Red Force:5",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:5",
                        "typeId": "id-missile"
                    }
                ],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "85945c53fffffff",
                "location": [
                    -12.6377,
                    132.2403
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a427",
                "contactId": "CA2418",
                "name": "Red Force:6",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:6",
                        "typeId": "id-carrier",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA2418"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859494a3fffffff",
                "location": [
                    -18.7049,
                    119.846
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a428",
                "contactId": "CA701",
                "name": "Red Force:7",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:7"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859d096ffffffff",
                "location": [
                    -20.1052,
                    146.0009
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a429",
                "contactId": "CA279",
                "name": "Red Force:8",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA279",
                        "typeId": "id-carrier",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA279",
                        "typeId": "id-carrier",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85a612d7fffffff",
                "location": [
                    -21.7167,
                    115.0824
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a430",
                "contactId": "CA888",
                "name": "Red Force:9",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA888",
                        "typeId": "id-auxiliary",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "8594aa07fffffff",
                "location": [
                    -16.9462,
                    123.5381
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a431",
                "contactId": "CA1749",
                "name": "Red Force:10",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA1749",
                        "typeId": "id-mcm",
                        "force": "F-Green"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA1749"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8594e5cbfffffff",
                "location": [
                    -13.8704,
                    128.3592
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a432",
                "contactId": "CA2883",
                "name": "Red Force:11",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA2883",
                        "typeId": "id-carrier",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85945b87fffffff",
                "location": [
                    -13.6728,
                    134.0859
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a433",
                "contactId": "CA2005",
                "name": "Red Force:12",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859d0c63fffffff",
                "location": [
                    -20.7125,
                    148.0774
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a434",
                "contactId": "CA1423",
                "name": "Red Force:13",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA1423",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA1423",
                        "typeId": "id-destroyer",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859c5987fffffff",
                "location": [
                    -14.3679,
                    135.2073
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a435",
                "contactId": "CA3005",
                "name": "Red Force:14",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859d096ffffffff",
                "location": [
                    -19.9992,
                    145.9407
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a436",
                "contactId": "CA321",
                "name": "Red Force:15",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8594a913fffffff",
                "location": [
                    -15.9015,
                    124.7268
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a437",
                "contactId": "CA2986",
                "name": "Red Force:16",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85945627fffffff",
                "location": [
                    -12.9406,
                    129.8633
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a438",
                "contactId": "CA1492",
                "name": "Red Force:17",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859480dbfffffff",
                "location": [
                    -17.8485,
                    121.4259
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a439",
                "contactId": "CA483",
                "name": "Red Force:18",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "Red Force:18",
                        "typeId": "id-frigate-ta",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859d0827fffffff",
                "location": [
                    -20.2641,
                    146.7696
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a440",
                "contactId": "CA192",
                "name": "Red Force:19",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA192",
                        "typeId": "id-carrier",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859496dbfffffff",
                "location": [
                    -19.7279,
                    118.7293
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a441",
                "contactId": "CA2612",
                "name": "Red Force:20",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:20"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA2612",
                        "typeId": "id-carrier"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8594e437fffffff",
                "location": [
                    -13.8398,
                    128.2184
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a442",
                "contactId": "CA1661",
                "name": "Red Force:21",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "Red Force:21",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85941b8ffffffff",
                "location": [
                    -14.6987,
                    126.194
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a443",
                "contactId": "CA3299",
                "name": "Red Force:22",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "Red Force:22",
                        "typeId": "id-carrier"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8594856bfffffff",
                "location": [
                    -17.6442,
                    122.4091
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a444",
                "contactId": "CA278",
                "name": "Red Force:23",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:23",
                        "typeId": "id-missile"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA278",
                        "typeId": "id-missile"
                    }
                ],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859d504bfffffff",
                "location": [
                    -19.5095,
                    144.7236
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a445",
                "contactId": "CA2910",
                "name": "Red Force:24",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:24",
                        "typeId": "id-carrier"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA2910",
                        "typeId": "id-carrier"
                    }
                ],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859c462bfffffff",
                "location": [
                    -16.0426,
                    138.178
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a446",
                "contactId": "CA2646",
                "name": "Red Force:25",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA2646",
                        "typeId": "id-mcm"
                    },
                    {
                        "by": "F-Green",
                        "name": "Red Force:25",
                        "typeId": "id-mcm",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c2917fffffff",
                "location": [
                    -17.668,
                    142.1444
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a447",
                "contactId": "CA2218",
                "name": "Red Force:26",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859c7037fffffff",
                "location": [
                    -16.9542,
                    139.8696
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a448",
                "contactId": "CA328",
                "name": "Red Force:27",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "Red Force:27",
                        "typeId": "id-auxiliary"
                    }
                ],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85a6a473fffffff",
                "location": [
                    -21.245,
                    116.6278
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a449",
                "contactId": "CA3334",
                "name": "Red Force:28",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA3334",
                        "typeId": "id-auxiliary",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "8594a9cbfffffff",
                "location": [
                    -16.0627,
                    124.4137
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a450",
                "contactId": "CA216",
                "name": "Red Force:29",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "CA216",
                        "typeId": "id-missile"
                    }
                ],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "85941b8ffffffff",
                "location": [
                    -14.7853,
                    126.2713
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a451",
                "contactId": "CA1048",
                "name": "Red Force:30",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA1048",
                        "typeId": "id-frigate-ta",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "85a6a533fffffff",
                "location": [
                    -21.485,
                    115.3117
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a452",
                "contactId": "CA1732",
                "name": "Red Force:31",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:31"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA1732",
                        "force": "F-Blue"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859d5367fffffff",
                "location": [
                    -18.7439,
                    143.2258
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a453",
                "contactId": "CA212",
                "name": "Red Force:32",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:32",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA212",
                        "typeId": "id-auxiliary"
                    }
                ],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85941bc7fffffff",
                "location": [
                    -14.9056,
                    125.9667
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a454",
                "contactId": "CA2803",
                "name": "Red Force:33",
                "perceptions": [
                    {
                        "by": "F-Green",
                        "name": "Red Force:33"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85949453fffffff",
                "location": [
                    -19.1399,
                    119.2358
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a455",
                "contactId": "CA128",
                "name": "Red Force:34",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA128",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA128",
                        "typeId": "id-frigate-ta"
                    }
                ],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "85a79b2bfffffff",
                "location": [
                    -20.4133,
                    117.5137
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a456",
                "contactId": "CA1072",
                "name": "Red Force:35",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:35",
                        "typeId": "id-frigate-ta",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859451affffffff",
                "location": [
                    -12.3389,
                    131.842
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a457",
                "contactId": "CA930",
                "name": "Red Force:36",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859d088ffffffff",
                "location": [
                    -20.5543,
                    147.521
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a458",
                "contactId": "CA1821",
                "name": "Red Force:37",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "Red Force:37",
                        "force": "F-Green"
                    },
                    {
                        "by": "F-Green",
                        "name": "CA1821",
                        "typeId": "id-mcm"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8594e68bfffffff",
                "location": [
                    -14.6545,
                    127.1018
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a459",
                "contactId": "CA1739",
                "name": "Red Force:38",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA1739",
                        "force": "F-Red"
                    },
                    {
                        "by": "F-Green",
                        "name": "Red Force:38",
                        "force": "F-Red"
                    }
                ],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85949593fffffff",
                "location": [
                    -18.4346,
                    120.3429
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a460",
                "contactId": "CA567",
                "name": "Red Force:39",
                "perceptions": [
                    {
                        "by": "F-Blue",
                        "name": "CA567",
                        "typeId": "id-mcm"
                    }
                ],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c708bfffffff",
                "location": [
                    -17.0382,
                    140.5437
                ],
                "owner": "rkr226f5b"
            }
        ],
          "color": "#F00",
          "dirty": false,
          "iconURL": "default_img/umpireDefault.png",
          "name": "Red Force",
          "overview": "Red force.",
          "roles": [
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "CO",
              "roleId": "rkr226f5e"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Logs",
              "roleId": "rkr226f5a"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Comms",
              "roleId": "rkr226f5b"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "White Goods",
              "roleId": "rkr226f5c"
            },
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "Furnishing",
              "roleId": "rkr226f5d"
            }
          ],
          "umpire": false,
          "uniqid": "F-Red"
        },
        {
          "assets": [
            {
              "condition": "Full capability",
              "contactId": "C015",
              "name": "Tanker-1",
              "perceptions": [
                {
                  "by": "F-Blue",
                  "force": "F-Green",
                  "name": "OSAKA",
                  "typeId": "id-merchant"
                }
              ],
              "platformTypeId": "id-merchant",
              "position": "831b21fffffffff",
              "uniqid": "a0pra000200"
            },
            {
              "condition": "Full capability",
              "contactId": "C081",
              "name": "Tanker-2",
              "perceptions": [
                {
                  "by": "F-Blue",
                  "force": "F-Green",
                  "name": "ARUNA 12",
                  "typeId": "id-merchant"
                },
                {
                  "by": "F-Red",
                  "force": "F-Green",
                  "name": "BARLAY",
                  "typeId": "id-merchant"
                }
              ],
              "platformTypeId": "id-merchant",
              "position": "831b31fffffffff",
              "status": {
                "state": "Moored"
              },
              "uniqid": "a0pra000201"
            },
            {
              "condition": "Full capability",
              "contactId": "C116",
              "name": "Fisher-A",
              "perceptions": [
                {
                  "by": "F-Blue",
                  "force": "F-Green",
                  "name": "JALIBUT",
                  "typeId": "id-merchant"
                }
              ],
              "platformTypeId": "id-fisher",
              "uniqid": "a0pra000202"
            },
            {
              "condition": "Full capability",
              "contactId": "C026",
              "name": "Fisher-B",
              "perceptions": [
                {
                  "by": "F-Blue",
                  "force": "F-Green",
                  "typeId": "id-merchant"
                }
              ],
              "platformTypeId": "id-fisher",
              "position": "83064bfffffffff",
              "status": {
                "speedKts": 10,
                "state": "Transiting"
              },
              "uniqid": "a0pra000203"
            },
            {
              "condition": "Full capability",
              "contactId": "C115",
              "name": "Fisher-C",
              "perceptions": [
                {
                  "by": "F-Blue",
                  "force": "F-Green",
                  "name": "BOUM 3",
                  "typeId": "id-merchant"
                },
                {
                  "by": "F-Red",
                  "force": "F-Green",
                  "name": "BOUM 3",
                  "typeId": "id-merchant"
                }
              ],
              "platformTypeId": "id-fisher",
              "uniqid": "a0pra000204"
            }
          ],
          "color": "#0F0",
          "dirty": false,
          "iconURL": "default_img/umpireDefault.png",
          "name": "Green Force",
          "overview": "Green Shipping",
          "roles": [
            {
              "isGameControl": false,
              "isInsightViewer": false,
              "isObserver": false,
              "name": "CO",
              "roleId": "rkrlw6f33"
            }
          ],
          "umpire": false,
          "uniqid": "F-Green"
        }
      ],
      "name": "Forces",
      "selectedForce": ""
    },
    "overview": {
      "dirty": false,
      "gameDate": "2021-05-13T16:12",
      "gameDescription": "",
      "gameTurnTime": {
        "unit": "millis",
        "millis": 43200000
      },
      "name": "Overview - settings",
      "realtimeTurnTime": 300000,
      "showAccessCodes": true,
      "timeWarning": 60000,
      "turnPresentation": "Turn-Pair-Letters",
      "logPlayerActivity": true
    },
    "platformTypes": {
      "dirty": false,
      "name": "Platform Types",
      "platformTypes": [
        {
          "attributeTypes": [
            {
              "attrId": "comm-fish",
              "attrType": "AttributeTypeNumber",
              "defaultValue": 100,
              "description": "fishing allowance",
              "editableByPlayer": false,
              "name": "quota",
              "units": "tonnes"
            },
            {
              "attrId": "comm-fuel",
              "attrType": "AttributeTypeNumber",
              "defaultValue": 5,
              "description": "fuel remaining",
              "editableByPlayer": false,
              "format": "0.00",
              "name": "fuel",
              "units": "tonnes"
            }
          ],
          "conditions": [
            "Full capability",
            "Limited capability",
            "Illegally boarded",
            "Immobile",
            "Sinking",
            "Destroyed"
          ],
          "icon": "fishing-vessel.svg",
          "name": "Fishing vessel",
          "uniqid": "id-fisher",
          "speedKts": [
            10,
            20
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": false,
              "name": "Fishing"
            },
            {
              "mobile": false,
              "name": "Moored"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Full capability",
            "Limited capability",
            "Immobile",
            "Sinking",
            "Destroyed"
          ],
          "icon": "mcmv.svg",
          "name": "MCMV",
          "uniqid": "id-mcm",
          "speedKts": [
            10
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": false,
              "name": "Stopped"
            },
            {
              "mobile": false,
              "name": "Moored"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "frigate.svg",
          "name": "frigate",
          "uniqid": "id-frigate",
          "speedKts": [
            6,
            12,
            18,
            24
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": true,
              "name": "Mixed"
            },
            {
              "mobile": true,
              "name": "Active"
            },
            {
              "mobile": true,
              "name": "Passive"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Full capability",
            "Limited capability",
            "Immobile",
            "Destroyed"
          ],
          "icon": "uas.svg",
          "name": "Unmanned Airborne Vehicle",
          "uniqid": "id-uav",
          "speedKts": [],
          "states": [
            {
              "mobile": true,
              "name": "Airborne"
            },
            {
              "mobile": false,
              "name": "Landed"
            },
            {
              "mobile": false,
              "name": "Preparing for launch"
            }
          ],
          "travelMode": "air"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "frigate-ta.svg",
          "name": "frigate-ta",
          "uniqid": "id-frigate-ta",
          "speedKts": [
            6,
            12,
            18,
            24
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": true,
              "name": "Mixed"
            },
            {
              "mobile": true,
              "name": "Active"
            },
            {
              "mobile": true,
              "name": "Passive"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "missile.svg",
          "name": "Missile",
          "uniqid": "id-missile",
          "states": [
            {
              "mobile": false,
              "name": "Inactive"
            },
            {
              "mobile": true,
              "name": "Deployed"
            }
          ],
          "travelMode": "air"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "carrier.svg",
          "name": "Carrier",
          "uniqid": "id-carrier",
          "speedKts": [
            6,
            12,
            18,
            24,
            30
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": true,
              "name": "Air Ops"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "auxiliary.svg",
          "name": "Auxiliary",
          "uniqid": "id-auxiliary",
          "speedKts": [
            6,
            12
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": true,
              "name": "Supporting"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "destroyer.svg",
          "name": "Destroyer",
          "uniqid": "id-destroyer",
          "speedKts": [
            6,
            12,
            18,
            24,
            30
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": false,
              "name": "Loitering"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "ssk.svg",
          "name": "SSK",
          "uniqid": "id-ssk",
          "speedKts": [
            6,
            12,
            18
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": true,
              "name": "Aggressove"
            },
            {
              "mobile": true,
              "name": "Evasive"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "ssn.svg",
          "name": "SSN",
          "uniqid": "id-ssn",
          "speedKts": [
            6,
            12,
            18,
            24
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": true,
              "name": "Aggressove"
            },
            {
              "mobile": true,
              "name": "Evasive"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "helicopter.svg",
          "name": "Helicopter",
          "uniqid": "id-helo",
          "states": [
            {
              "mobile": true,
              "name": "Active"
            },
            {
              "mobile": false,
              "name": "Landed"
            }
          ],
          "travelMode": "air"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "mpa.svg",
          "name": "mpa",
          "uniqid": "id-mpa",
          "states": [
            {
              "mobile": true,
              "name": "Active"
            },
            {
              "mobile": false,
              "name": "Landed"
            }
          ],
          "travelMode": "air"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "fixed-wing-aircraft.svg",
          "name": "Fixed Wing Aircraft",
          "uniqid": "id-fixed-wing",
          "states": [
            {
              "mobile": true,
              "name": "Active"
            },
            {
              "mobile": false,
              "name": "Landed"
            }
          ],
          "travelMode": "air"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "merchant-vessel.svg",
          "name": "Merchant vessel",
          "uniqid": "id-merchant",
          "speedKts": [
            6,
            12
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": false,
              "name": "Moored"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "boghammer.svg",
          "name": "Boghammer",
          "uniqid": "id-boghammer",
          "speedKts": [
            6,
            12,
            18,
            24,
            30
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": false,
              "name": "Moored"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "agi.svg",
          "name": "AGI",
          "uniqid": "id-agi",
          "speedKts": [
            6,
            12,
            18
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": false,
              "name": "Moored"
            }
          ],
          "travelMode": "sea"
        },
        {
          "conditions": [
            "Working",
            "Disabled",
            "Mission Kill"
          ],
          "icon": "task-group.svg",
          "name": "Task Group",
          "uniqid": "id-task-group",
          "speedKts": [
            6,
            12,
            18,
            24,
            30
          ],
          "states": [
            {
              "mobile": true,
              "name": "Transiting"
            },
            {
              "mobile": false,
              "name": "Stopped"
            },
            {
              "mobile": false,
              "name": "Moored"
            }
          ],
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
