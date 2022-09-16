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
                "uniqid": "a1081",
                "contactId": "CA2135",
                "name": "Blue:0",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "8572d437fffffff",
                "location": [
                    -3.2699,
                    141.011
                ],
                "owner": "rk116f5e",
                "comprising": [
                    {
                        "uniqid": "a1082",
                        "contactId": "CA736",
                        "name": "Blue:1",
                        "perceptions": [],
                        "platformTypeId": "id-merchant",
                        "condition": "working",
                        "position": "859c898bfffffff",
                        "location": [
                            -8.0281,
                            144.3238
                        ],
                        "owner": "rk116f5e"
                    },
                    {
                        "uniqid": "a1083",
                        "contactId": "CA1264",
                        "name": "Blue:2",
                        "perceptions": [],
                        "platformTypeId": "id-fisher",
                        "condition": "working",
                        "position": "8572da43fffffff",
                        "location": [
                            -6.0793,
                            143.5403
                        ],
                        "owner": "3rk116f53"
                    },
                    {
                        "uniqid": "a1084",
                        "contactId": "CA1140",
                        "name": "Blue:3",
                        "perceptions": [],
                        "platformTypeId": "id-frigate-ta",
                        "condition": "working",
                        "position": "8572dd47fffffff",
                        "location": [
                            -3.9841,
                            144.4391
                        ],
                        "owner": "1rk116f53"
                    }
                ]
            },
            {
                "uniqid": "a1085",
                "contactId": "CA3190",
                "name": "Blue:4",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "859cd0c3fffffff",
                "location": [
                    -7.1302,
                    142.7155
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a1086",
                "contactId": "CA2785",
                "name": "Blue:5",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "859cdd07fffffff",
                "location": [
                    -7.5713,
                    138.6955
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a1087",
                "contactId": "CA1952",
                "name": "Blue:6",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "85728317fffffff",
                "location": [
                    -3.9545,
                    135.922
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a1088",
                "contactId": "CA2107",
                "name": "Blue:7",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859c856bfffffff",
                "location": [
                    -8.5081,
                    147.6645
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a1089",
                "contactId": "CA2115",
                "name": "Blue:8",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8572da27fffffff",
                "location": [
                    -5.8498,
                    144.3632
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a1090",
                "contactId": "CA3266",
                "name": "Blue:9",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859cdb73fffffff",
                "location": [
                    -5.333,
                    138.3801
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a1091",
                "contactId": "CA1716",
                "name": "Blue:10",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "859ca073fffffff",
                "location": [
                    -10.4011,
                    149.1412
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a1092",
                "contactId": "CA2020",
                "name": "Blue:11",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859cdcabfffffff",
                "location": [
                    -7.5594,
                    139.7423
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a1093",
                "contactId": "CA810",
                "name": "Blue:12",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cae1bfffffff",
                "location": [
                    -10.0437,
                    147.5498
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a1094",
                "contactId": "CA2836",
                "name": "Blue:13",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859cf31bfffffff",
                "location": [
                    -8.8762,
                    142.7244
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a1095",
                "contactId": "CA476",
                "name": "Blue:14",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859cdd43fffffff",
                "location": [
                    -7.2143,
                    139.121
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a1096",
                "contactId": "CA903",
                "name": "Blue:15",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "8572810ffffffff",
                "location": [
                    -3.1606,
                    136.2739
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a1097",
                "contactId": "CA2918",
                "name": "Blue:16",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859cde43fffffff",
                "location": [
                    -6.0481,
                    140.5741
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a1098",
                "contactId": "CA2253",
                "name": "Blue:17",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859cd51bfffffff",
                "location": [
                    -8.1216,
                    141.9652
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a1099",
                "contactId": "CA3393",
                "name": "Blue:18",
                "perceptions": [],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "8572db0bfffffff",
                "location": [
                    -5.6823,
                    144.9021
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a1100",
                "contactId": "CA3054",
                "name": "Blue:19",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859c996bfffffff",
                "location": [
                    -4.8356,
                    145.9092
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a1101",
                "contactId": "CA2152",
                "name": "Blue:0",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "85729d63fffffff",
                "location": [
                    -5.4278,
                    136.7243
                ],
                "owner": "1rk116f53",
                "comprising": [
                    {
                        "uniqid": "a1102",
                        "contactId": "CA1999",
                        "name": "Blue:1",
                        "perceptions": [],
                        "platformTypeId": "id-destroyer",
                        "condition": "working",
                        "position": "8572ab1bfffffff",
                        "location": [
                            -1.7752,
                            137.6864
                        ],
                        "owner": "rk116f52"
                    },
                    {
                        "uniqid": "a1103",
                        "contactId": "CA2994",
                        "name": "Blue:2",
                        "perceptions": [],
                        "platformTypeId": "id-destroyer",
                        "condition": "working",
                        "position": "859c9953fffffff",
                        "location": [
                            -5.196,
                            146.4051
                        ],
                        "owner": "rk116f5e"
                    },
                    {
                        "uniqid": "a1104",
                        "contactId": "CA2499",
                        "name": "Blue:3",
                        "perceptions": [],
                        "platformTypeId": "id-mcm",
                        "condition": "working",
                        "position": "859cce43fffffff",
                        "location": [
                            -8.3465,
                            138.643
                        ],
                        "owner": "2rk116f53"
                    }
                ]
            },
            {
                "uniqid": "a1105",
                "contactId": "CA503",
                "name": "Blue:4",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859ca03bfffffff",
                "location": [
                    -10.5358,
                    148.9723
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a1106",
                "contactId": "CA3341",
                "name": "Blue:5",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859cc3abfffffff",
                "location": [
                    -8.6693,
                    139.2781
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a1107",
                "contactId": "CA475",
                "name": "Blue:6",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859ca393fffffff",
                "location": [
                    -10.265,
                    148.7375
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a1108",
                "contactId": "CA3053",
                "name": "Blue:7",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859c8477fffffff",
                "location": [
                    -8.5706,
                    148.6639
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a1109",
                "contactId": "CA984",
                "name": "Blue:8",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859ca86bfffffff",
                "location": [
                    -9.6372,
                    146.1539
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a1110",
                "contactId": "CA1623",
                "name": "Blue:9",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859c9d03fffffff",
                "location": [
                    -6.1582,
                    146.8022
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a1111",
                "contactId": "CA758",
                "name": "Blue:10",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85728157fffffff",
                "location": [
                    -3.0918,
                    136.0774
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a1112",
                "contactId": "CA1952",
                "name": "Blue:11",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85729dcbfffffff",
                "location": [
                    -5.0425,
                    136.1482
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a1113",
                "contactId": "CA1058",
                "name": "Blue:12",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859c9dcffffffff",
                "location": [
                    -6.205,
                    147.1535
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a1114",
                "contactId": "CA3131",
                "name": "Blue:13",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859ca607fffffff",
                "location": [
                    -10.4839,
                    150.1678
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a1115",
                "contactId": "CA3280",
                "name": "Blue:14",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859cce6ffffffff",
                "location": [
                    -8.0839,
                    138.1585
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a1116",
                "contactId": "CA1119",
                "name": "Blue:15",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859cae2ffffffff",
                "location": [
                    -9.8081,
                    146.8485
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a1117",
                "contactId": "CA828",
                "name": "Blue:16",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859ca6a3fffffff",
                "location": [
                    -10.7015,
                    149.9517
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a1118",
                "contactId": "CA2770",
                "name": "Blue:17",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859cc317fffffff",
                "location": [
                    -8.6808,
                    139.4371
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a1119",
                "contactId": "CA1661",
                "name": "Blue:18",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cae0bfffffff",
                "location": [
                    -9.9166,
                    147.4395
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a1120",
                "contactId": "CA819",
                "name": "Blue:19",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8572810bfffffff",
                "location": [
                    -3.0967,
                    136.1096
                ],
                "owner": "1rk116f53"
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
                "uniqid": "a1021",
                "contactId": "CA2408",
                "name": "Red Force:0",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "8594eecbfffffff",
                "location": [
                    -15.5905,
                    129.8268
                ],
                "owner": "rkr226f5b",
                "comprising": [
                    {
                        "uniqid": "a1022",
                        "contactId": "CA799",
                        "name": "Red Force:1",
                        "perceptions": [],
                        "platformTypeId": "id-ssk",
                        "condition": "working",
                        "position": "859c757bfffffff",
                        "location": [
                            -17.3346,
                            139.9462
                        ],
                        "owner": "rkr226f5c"
                    },
                    {
                        "uniqid": "a1023",
                        "contactId": "CA2452",
                        "name": "Red Force:2",
                        "perceptions": [],
                        "platformTypeId": "id-destroyer",
                        "condition": "working",
                        "position": "8594e9a7fffffff",
                        "location": [
                            -14.9523,
                            132.9588
                        ],
                        "owner": "rkr226f5b"
                    },
                    {
                        "uniqid": "a1024",
                        "contactId": "CA3081",
                        "name": "Red Force:3",
                        "perceptions": [],
                        "platformTypeId": "id-agi",
                        "condition": "working",
                        "position": "85b89313fffffff",
                        "location": [
                            -20.2681,
                            135.6382
                        ],
                        "owner": "rkr226f5a"
                    }
                ]
            },
            {
                "uniqid": "a1025",
                "contactId": "CA959",
                "name": "Red Force:4",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "859c5d93fffffff",
                "location": [
                    -15.2816,
                    136.1455
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1026",
                "contactId": "CA1435",
                "name": "Red Force:5",
                "perceptions": [],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "859c6083fffffff",
                "location": [
                    -19.3126,
                    138.3962
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1027",
                "contactId": "CA101",
                "name": "Red Force:6",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "8594e873fffffff",
                "location": [
                    -15.587,
                    131.482
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a1028",
                "contactId": "CA1220",
                "name": "Red Force:7",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "8594e28bfffffff",
                "location": [
                    -15.5062,
                    127.8878
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1029",
                "contactId": "CA3206",
                "name": "Red Force:8",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859488bbfffffff",
                "location": [
                    -18.4301,
                    124.9121
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1030",
                "contactId": "CA1421",
                "name": "Red Force:9",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859c65d7fffffff",
                "location": [
                    -20.1453,
                    138.2327
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a1031",
                "contactId": "CA97",
                "name": "Red Force:10",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8594ce63fffffff",
                "location": [
                    -18.3609,
                    131.4542
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a1032",
                "contactId": "CA1917",
                "name": "Red Force:11",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85b892c7fffffff",
                "location": [
                    -20.2542,
                    136.9319
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a1033",
                "contactId": "CA1152",
                "name": "Red Force:12",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "859c6a2ffffffff",
                "location": [
                    -17.3269,
                    135.2651
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1034",
                "contactId": "CA1826",
                "name": "Red Force:13",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "8594eb8bfffffff",
                "location": [
                    -15.8702,
                    131.8817
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1035",
                "contactId": "CA2747",
                "name": "Red Force:14",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8594a967fffffff",
                "location": [
                    -16.4456,
                    125.1602
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1036",
                "contactId": "CA2158",
                "name": "Red Force:15",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "8594d143fffffff",
                "location": [
                    -19.3783,
                    128.5145
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1037",
                "contactId": "CA2228",
                "name": "Red Force:16",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "85945e83fffffff",
                "location": [
                    -13.0312,
                    132.0109
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1038",
                "contactId": "CA1161",
                "name": "Red Force:17",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "8594ee23fffffff",
                "location": [
                    -15.5639,
                    130.6805
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a1039",
                "contactId": "CA1329",
                "name": "Red Force:18",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859d49d3fffffff",
                "location": [
                    -21.9815,
                    138.5518
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1040",
                "contactId": "CA1204",
                "name": "Red Force:19",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "85949383fffffff",
                "location": [
                    -20.2247,
                    120.7387
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a1041",
                "contactId": "CA2164",
                "name": "Red Force:0",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859d523bfffffff",
                "location": [
                    -18.8495,
                    144.4923
                ],
                "owner": "rkr226f5b",
                "comprising": [
                    {
                        "uniqid": "a1042",
                        "contactId": "CA2671",
                        "name": "Red Force:1",
                        "perceptions": [],
                        "platformTypeId": "id-mcm",
                        "condition": "working",
                        "position": "85945657fffffff",
                        "location": [
                            -13.0121,
                            129.0107
                        ],
                        "owner": "rkr226f5a"
                    },
                    {
                        "uniqid": "a1043",
                        "contactId": "CA499",
                        "name": "Red Force:2",
                        "perceptions": [],
                        "platformTypeId": "id-auxiliary",
                        "condition": "working",
                        "position": "859c5d07fffffff",
                        "location": [
                            -14.7275,
                            135.7209
                        ],
                        "owner": "rkr226f5b"
                    },
                    {
                        "uniqid": "a1044",
                        "contactId": "CA1282",
                        "name": "Red Force:3",
                        "perceptions": [],
                        "platformTypeId": "id-destroyer",
                        "condition": "working",
                        "position": "859d2a6ffffffff",
                        "location": [
                            -21.4482,
                            148.8029
                        ],
                        "owner": "rkr226f5b"
                    }
                ]
            },
            {
                "uniqid": "a1045",
                "contactId": "CA971",
                "name": "Red Force:4",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85a6164ffffffff",
                "location": [
                    -21.942,
                    115.4374
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1046",
                "contactId": "CA2258",
                "name": "Red Force:5",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "8594556ffffffff",
                "location": [
                    -12.1796,
                    131.059
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1047",
                "contactId": "CA1324",
                "name": "Red Force:6",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "8594852ffffffff",
                "location": [
                    -17.3307,
                    122.8036
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1048",
                "contactId": "CA677",
                "name": "Red Force:7",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859d5297fffffff",
                "location": [
                    -19.4252,
                    144.8351
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1049",
                "contactId": "CA707",
                "name": "Red Force:8",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85a6a5bbfffffff",
                "location": [
                    -21.7488,
                    115.5836
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1050",
                "contactId": "CA54",
                "name": "Red Force:9",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859d560bfffffff",
                "location": [
                    -19.5657,
                    145.5945
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a1051",
                "contactId": "CA2103",
                "name": "Red Force:10",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85941ba3fffffff",
                "location": [
                    -14.7245,
                    126.5653
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1052",
                "contactId": "CA1740",
                "name": "Red Force:11",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8594556ffffffff",
                "location": [
                    -12.2221,
                    131.0457
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1053",
                "contactId": "CA1061",
                "name": "Red Force:12",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85a79b77fffffff",
                "location": [
                    -20.4208,
                    117.7184
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1054",
                "contactId": "CA978",
                "name": "Red Force:13",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8594860ffffffff",
                "location": [
                    -18.1248,
                    121.0744
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1055",
                "contactId": "CA3279",
                "name": "Red Force:14",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "8594564bfffffff",
                "location": [
                    -13.2666,
                    128.8536
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1056",
                "contactId": "CA3163",
                "name": "Red Force:15",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859c716bfffffff",
                "location": [
                    -16.4342,
                    139.1658
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a1057",
                "contactId": "CA2706",
                "name": "Red Force:16",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "85a6164bfffffff",
                "location": [
                    -21.9243,
                    115.6163
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1058",
                "contactId": "CA2487",
                "name": "Red Force:17",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859d05bbfffffff",
                "location": [
                    -22.0523,
                    150.2125
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1059",
                "contactId": "CA2306",
                "name": "Red Force:18",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c714bfffffff",
                "location": [
                    -16.617,
                    139.5554
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1060",
                "contactId": "CA2853",
                "name": "Red Force:19",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859c42a3fffffff",
                "location": [
                    -15.7266,
                    137.5385
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1061",
                "contactId": "CA1636",
                "name": "Red Force:20",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8594854ffffffff",
                "location": [
                    -17.4609,
                    122.1808
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a1062",
                "contactId": "CA2109",
                "name": "Red Force:21",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859d0cdbfffffff",
                "location": [
                    -21.165,
                    148.942
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1063",
                "contactId": "CA2593",
                "name": "Red Force:22",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859d2a47fffffff",
                "location": [
                    -21.6334,
                    149.1262
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1064",
                "contactId": "CA550",
                "name": "Red Force:23",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "8594aab3fffffff",
                "location": [
                    -16.6767,
                    123.5784
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1065",
                "contactId": "CA1613",
                "name": "Red Force:24",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85948557fffffff",
                "location": [
                    -17.2656,
                    122.1747
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1066",
                "contactId": "CA475",
                "name": "Red Force:25",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "85945e97fffffff",
                "location": [
                    -12.8217,
                    132.0962
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a1067",
                "contactId": "CA3359",
                "name": "Red Force:26",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859c2d27fffffff",
                "location": [
                    -18.2011,
                    142.2339
                ],
                "owner": "rkr226f5d"
            },
            {
                "uniqid": "a1068",
                "contactId": "CA488",
                "name": "Red Force:27",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85a79b77fffffff",
                "location": [
                    -20.4796,
                    117.7122
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1069",
                "contactId": "CA2324",
                "name": "Red Force:28",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85945c53fffffff",
                "location": [
                    -12.5395,
                    132.2046
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1070",
                "contactId": "CA1355",
                "name": "Red Force:29",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859d2a57fffffff",
                "location": [
                    -21.8517,
                    149.2743
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1071",
                "contactId": "CA1694",
                "name": "Red Force:30",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85a61297fffffff",
                "location": [
                    -21.9516,
                    114.7378
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a1072",
                "contactId": "CA326",
                "name": "Red Force:31",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85a6a687fffffff",
                "location": [
                    -20.9934,
                    116.9763
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1073",
                "contactId": "CA2519",
                "name": "Red Force:32",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "85a6b5d7fffffff",
                "location": [
                    -20.0722,
                    117.6206
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1074",
                "contactId": "CA2175",
                "name": "Red Force:33",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c7153fffffff",
                "location": [
                    -16.8458,
                    139.619
                ],
                "owner": "rkr226f5a"
            },
            {
                "uniqid": "a1075",
                "contactId": "CA1264",
                "name": "Red Force:34",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859d56cbfffffff",
                "location": [
                    -19.6736,
                    146.0421
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1076",
                "contactId": "CA1404",
                "name": "Red Force:35",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859c434bfffffff",
                "location": [
                    -15.1019,
                    137.0563
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1077",
                "contactId": "CA2303",
                "name": "Red Force:36",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85941bc3fffffff",
                "location": [
                    -14.9094,
                    125.8713
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1078",
                "contactId": "CA1900",
                "name": "Red Force:37",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8594a903fffffff",
                "location": [
                    -16.0202,
                    124.7936
                ],
                "owner": "rkr226f5b"
            },
            {
                "uniqid": "a1079",
                "contactId": "CA149",
                "name": "Red Force:38",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c716bfffffff",
                "location": [
                    -16.4652,
                    139.1963
                ],
                "owner": "rkr226f5c"
            },
            {
                "uniqid": "a1080",
                "contactId": "CA1318",
                "name": "Red Force:39",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "85a6a6dbfffffff",
                "location": [
                    -20.8101,
                    117.4028
                ],
                "owner": "rkr226f5e"
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
