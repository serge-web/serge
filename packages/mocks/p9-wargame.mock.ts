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
                "uniqid": "a2041",
                "contactId": "CA2646",
                "name": "Blue:0",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "859cd597fffffff",
                "location": [
                    -8.7077,
                    141.918
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a2042",
                "contactId": "CA303",
                "name": "Blue:1",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859cd0a7fffffff",
                "location": [
                    -7.3525,
                    141.7131
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2043",
                "contactId": "CA1605",
                "name": "Blue:2",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859c8d0ffffffff",
                "location": [
                    -8.3635,
                    144.7254
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2044",
                "contactId": "CA2834",
                "name": "Blue:3",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859c8e73fffffff",
                "location": [
                    -7.1024,
                    146.3271
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2045",
                "contactId": "CA1337",
                "name": "Blue:4",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cdc1bfffffff",
                "location": [
                    -7.394,
                    140.1321
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2046",
                "contactId": "CA715",
                "name": "Blue:5",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8572d633fffffff",
                "location": [
                    -4.251,
                    140.3618
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2047",
                "contactId": "CA1333",
                "name": "Blue:6",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "857283bbfffffff",
                "location": [
                    -3.7139,
                    135.8909
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2048",
                "contactId": "CA610",
                "name": "Blue:7",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859c9d27fffffff",
                "location": [
                    -6.2006,
                    146.2507
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2049",
                "contactId": "CA253",
                "name": "Blue:8",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859cd603fffffff",
                "location": [
                    -6.7652,
                    143.3824
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2050",
                "contactId": "CA977",
                "name": "Blue:9",
                "perceptions": [],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "859caad3fffffff",
                "location": [
                    -9.3363,
                    147.1552
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2051",
                "contactId": "CA326",
                "name": "Blue:10",
                "perceptions": [],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "859cf297fffffff",
                "location": [
                    -9.2791,
                    143.7774
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a2052",
                "contactId": "CA1647",
                "name": "Blue:11",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859ca307fffffff",
                "location": [
                    -9.7867,
                    148.3864
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2053",
                "contactId": "CA1285",
                "name": "Blue:12",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859caa03fffffff",
                "location": [
                    -9.1806,
                    146.5863
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2054",
                "contactId": "CA868",
                "name": "Blue:13",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859cd197fffffff",
                "location": [
                    -7.8254,
                    141.2028
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2055",
                "contactId": "CA2440",
                "name": "Blue:14",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859c8cabfffffff",
                "location": [
                    -8.5063,
                    145.7847
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2056",
                "contactId": "CA975",
                "name": "Blue:15",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859cde97fffffff",
                "location": [
                    -6.8921,
                    140.5023
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2057",
                "contactId": "CA2633",
                "name": "Blue:16",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "8572dbaffffffff",
                "location": [
                    -5.3128,
                    145.3102
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2058",
                "contactId": "CA2207",
                "name": "Blue:17",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859cc243fffffff",
                "location": [
                    -7.9579,
                    140.9819
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2059",
                "contactId": "CA3159",
                "name": "Blue:18",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "85728cc7fffffff",
                "location": [
                    -2.6659,
                    137.1837
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2060",
                "contactId": "CA2356",
                "name": "Blue:19",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859c854bfffffff",
                "location": [
                    -8.4998,
                    148.0751
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2061",
                "contactId": "CA975",
                "name": "Blue:20",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85728c27fffffff",
                "location": [
                    -2.8752,
                    138.0584
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2062",
                "contactId": "CA1297",
                "name": "Blue:21",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "8572dc03fffffff",
                "location": [
                    -3.8554,
                    143.5507
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2063",
                "contactId": "CA2338",
                "name": "Blue:22",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859cd043fffffff",
                "location": [
                    -6.6551,
                    142.5669
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2064",
                "contactId": "CA1281",
                "name": "Blue:23",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cdacbfffffff",
                "location": [
                    -5.4624,
                    140.0949
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2065",
                "contactId": "CA2377",
                "name": "Blue:24",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859c851bfffffff",
                "location": [
                    -8.9716,
                    147.9219
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2066",
                "contactId": "CA2811",
                "name": "Blue:25",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "8572dd4ffffffff",
                "location": [
                    -4.1318,
                    144.4773
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2067",
                "contactId": "CA2700",
                "name": "Blue:26",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859cdb43fffffff",
                "location": [
                    -5.3797,
                    138.7507
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2068",
                "contactId": "CA302",
                "name": "Blue:27",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "85729d8ffffffff",
                "location": [
                    -4.6962,
                    136.4768
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2069",
                "contactId": "CA2030",
                "name": "Blue:28",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859cf65bfffffff",
                "location": [
                    -9.2028,
                    144.8999
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a2070",
                "contactId": "CA1273",
                "name": "Blue:29",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85728e6bfffffff",
                "location": [
                    -4.4444,
                    137.1039
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a2071",
                "contactId": "CA700",
                "name": "Blue:30",
                "perceptions": [],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "859caaa3fffffff",
                "location": [
                    -9.4851,
                    146.3615
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2072",
                "contactId": "CA289",
                "name": "Blue:31",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859cae1bfffffff",
                "location": [
                    -9.9315,
                    147.5698
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2073",
                "contactId": "CA3300",
                "name": "Blue:32",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "8572d957fffffff",
                "location": [
                    -4.6636,
                    145.1485
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2074",
                "contactId": "CA338",
                "name": "Blue:33",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859cd207fffffff",
                "location": [
                    -6.0054,
                    142.5535
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2075",
                "contactId": "CA3378",
                "name": "Blue:34",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "8572d2a3fffffff",
                "location": [
                    -4.9427,
                    141.0897
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2076",
                "contactId": "CA2991",
                "name": "Blue:35",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cce6bfffffff",
                "location": [
                    -8.0392,
                    138.2937
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2077",
                "contactId": "CA2736",
                "name": "Blue:36",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "85728e13fffffff",
                "location": [
                    -3.7824,
                    136.801
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2078",
                "contactId": "CA1208",
                "name": "Blue:37",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859cd2c7fffffff",
                "location": [
                    -6.017,
                    142.9127
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2079",
                "contactId": "CA2417",
                "name": "Blue:38",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859cd863fffffff",
                "location": [
                    -6.0755,
                    139.0679
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2080",
                "contactId": "CA825",
                "name": "Blue:39",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85729d83fffffff",
                "location": [
                    -4.5212,
                    136.334
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2081",
                "contactId": "CA2104",
                "name": "Blue:40",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859cf6cbfffffff",
                "location": [
                    -9.5103,
                    144.9509
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2082",
                "contactId": "CA1402",
                "name": "Blue:41",
                "perceptions": [],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "859cd82bfffffff",
                "location": [
                    -6.3624,
                    138.8753
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2083",
                "contactId": "CA2671",
                "name": "Blue:42",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "8572d4d7fffffff",
                "location": [
                    -3.1219,
                    140.1154
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2084",
                "contactId": "CA1591",
                "name": "Blue:43",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "859c8e97fffffff",
                "location": [
                    -7.8753,
                    146.4127
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2085",
                "contactId": "CA370",
                "name": "Blue:44",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859ca063fffffff",
                "location": [
                    -10.213,
                    148.9864
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2086",
                "contactId": "CA2838",
                "name": "Blue:45",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859ca077fffffff",
                "location": [
                    -10.3657,
                    149.0279
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2087",
                "contactId": "CA1576",
                "name": "Blue:46",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859c89bbfffffff",
                "location": [
                    -8.058,
                    144.0076
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a2088",
                "contactId": "CA3212",
                "name": "Blue:47",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859c88a3fffffff",
                "location": [
                    -7.8499,
                    144.9778
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2089",
                "contactId": "CA2460",
                "name": "Blue:48",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "8572d2d7fffffff",
                "location": [
                    -5.1206,
                    140.3675
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2090",
                "contactId": "CA2002",
                "name": "Blue:49",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859cdb17fffffff",
                "location": [
                    -5.7978,
                    138.3907
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2091",
                "contactId": "CA1325",
                "name": "Blue:50",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859cd533fffffff",
                "location": [
                    -8.1506,
                    141.5127
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2092",
                "contactId": "CA849",
                "name": "Blue:51",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cd953fffffff",
                "location": [
                    -6.5011,
                    138.4606
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2093",
                "contactId": "CA3053",
                "name": "Blue:52",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "8572d2b3fffffff",
                "location": [
                    -4.8237,
                    140.8792
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2094",
                "contactId": "CA1762",
                "name": "Blue:53",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "8572881bfffffff",
                "location": [
                    -3.6344,
                    137.9667
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2095",
                "contactId": "CA2916",
                "name": "Blue:54",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859cd273fffffff",
                "location": [
                    -5.7213,
                    142.5532
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2096",
                "contactId": "CA213",
                "name": "Blue:55",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859c8bc3fffffff",
                "location": [
                    -6.7454,
                    144.898
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2097",
                "contactId": "CA115",
                "name": "Blue:56",
                "perceptions": [],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "85728aabfffffff",
                "location": [
                    -4.5086,
                    137.906
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2098",
                "contactId": "CA41",
                "name": "Blue:57",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859cdeb3fffffff",
                "location": [
                    -6.8171,
                    140.1871
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a2099",
                "contactId": "CA1016",
                "name": "Blue:58",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859c990ffffffff",
                "location": [
                    -5.2322,
                    145.9509
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2100",
                "contactId": "CA1117",
                "name": "Blue:59",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859cd35bfffffff",
                "location": [
                    -5.8223,
                    142.0309
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2101",
                "contactId": "CA1127",
                "name": "Blue:60",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "8572d357fffffff",
                "location": [
                    -5.3117,
                    141.7273
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2102",
                "contactId": "CA1354",
                "name": "Blue:61",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859c993bfffffff",
                "location": [
                    -5.2861,
                    145.7293
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2103",
                "contactId": "CA1991",
                "name": "Blue:62",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859c80b3fffffff",
                "location": [
                    -8.3237,
                    147.9749
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2104",
                "contactId": "CA1385",
                "name": "Blue:63",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859cd32bfffffff",
                "location": [
                    -5.9075,
                    141.0528
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2105",
                "contactId": "CA1250",
                "name": "Blue:64",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859ca337fffffff",
                "location": [
                    -9.8841,
                    148.0133
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2106",
                "contactId": "CA2195",
                "name": "Blue:65",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859cdd97fffffff",
                "location": [
                    -8.093,
                    138.8948
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2107",
                "contactId": "CA2802",
                "name": "Blue:66",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "859cde3bfffffff",
                "location": [
                    -6.3047,
                    140.0189
                ],
                "owner": "rk116f51"
            },
            {
                "uniqid": "a2108",
                "contactId": "CA2873",
                "name": "Blue:67",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859cc267fffffff",
                "location": [
                    -7.9466,
                    140.2949
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2109",
                "contactId": "CA1964",
                "name": "Blue:68",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859cab27fffffff",
                "location": [
                    -9.3629,
                    144.9457
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2110",
                "contactId": "CA2594",
                "name": "Blue:69",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cab9bfffffff",
                "location": [
                    -9.7368,
                    145.8585
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2111",
                "contactId": "CA2123",
                "name": "Blue:70",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859c8c17fffffff",
                "location": [
                    -8.5414,
                    145.8579
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2112",
                "contactId": "CA1604",
                "name": "Blue:71",
                "perceptions": [],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "859cc2abfffffff",
                "location": [
                    -8.4622,
                    140.5235
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2113",
                "contactId": "CA194",
                "name": "Blue:72",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859cf303fffffff",
                "location": [
                    -8.9718,
                    142.5632
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2114",
                "contactId": "CA953",
                "name": "Blue:73",
                "perceptions": [],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "85729d07fffffff",
                "location": [
                    -4.9961,
                    136.7045
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2115",
                "contactId": "CA2286",
                "name": "Blue:74",
                "perceptions": [],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "8572de13fffffff",
                "location": [
                    -4.819,
                    142.9826
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2116",
                "contactId": "CA692",
                "name": "Blue:75",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "8572d56ffffffff",
                "location": [
                    -3.5933,
                    141.8634
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2117",
                "contactId": "CA1992",
                "name": "Blue:76",
                "perceptions": [],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "859c8433fffffff",
                "location": [
                    -8.767,
                    148.6245
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2118",
                "contactId": "CA133",
                "name": "Blue:77",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859cdd0ffffffff",
                "location": [
                    -7.4706,
                    138.7224
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2119",
                "contactId": "CA1075",
                "name": "Blue:78",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "859caecffffffff",
                "location": [
                    -9.9324,
                    147.74
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2120",
                "contactId": "CA3010",
                "name": "Blue:79",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859ca86ffffffff",
                "location": [
                    -9.7106,
                    145.9692
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2121",
                "contactId": "CA2428",
                "name": "Blue:80",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "859ca3dbfffffff",
                "location": [
                    -9.7909,
                    149.0567
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2122",
                "contactId": "CA773",
                "name": "Blue:81",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859caa77fffffff",
                "location": [
                    -9.0081,
                    146.5118
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2123",
                "contactId": "CA3013",
                "name": "Blue:82",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "8572d307fffffff",
                "location": [
                    -4.9991,
                    142.0379
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2124",
                "contactId": "CA1656",
                "name": "Blue:83",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "8572da3bfffffff",
                "location": [
                    -5.8541,
                    144.0884
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2125",
                "contactId": "CA6",
                "name": "Blue:84",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "859caa67fffffff",
                "location": [
                    -8.8846,
                    146.3224
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2126",
                "contactId": "CA141",
                "name": "Blue:85",
                "perceptions": [],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "859c8dc7fffffff",
                "location": [
                    -8.7111,
                    145.0895
                ],
                "owner": "rk116f52"
            },
            {
                "uniqid": "a2127",
                "contactId": "CA383",
                "name": "Blue:86",
                "perceptions": [],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "859cde33fffffff",
                "location": [
                    -6.4473,
                    140.0441
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2128",
                "contactId": "CA347",
                "name": "Blue:87",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "8572d05bfffffff",
                "location": [
                    -4.5306,
                    140.7069
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2129",
                "contactId": "CA2751",
                "name": "Blue:88",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859cd10ffffffff",
                "location": [
                    -7.1724,
                    140.9905
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2130",
                "contactId": "CA3344",
                "name": "Blue:89",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859cd247fffffff",
                "location": [
                    -5.74,
                    142.7925
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2131",
                "contactId": "CA3167",
                "name": "Blue:90",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859cde9bfffffff",
                "location": [
                    -6.6927,
                    140.5982
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2132",
                "contactId": "CA2316",
                "name": "Blue:91",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859cd033fffffff",
                "location": [
                    -7.0583,
                    141.8302
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2133",
                "contactId": "CA1014",
                "name": "Blue:92",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859cdb3bfffffff",
                "location": [
                    -5.5551,
                    138.1886
                ],
                "owner": "rk116f5e"
            },
            {
                "uniqid": "a2134",
                "contactId": "CA1641",
                "name": "Blue:93",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859cd567fffffff",
                "location": [
                    -7.7035,
                    141.5451
                ],
                "owner": "3rk116f53"
            },
            {
                "uniqid": "a2135",
                "contactId": "CA698",
                "name": "Blue:94",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8572de27fffffff",
                "location": [
                    -4.9143,
                    143.6481
                ],
                "owner": "blue-logs"
            },
            {
                "uniqid": "a2136",
                "contactId": "CA2044",
                "name": "Blue:95",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859c8077fffffff",
                "location": [
                    -7.7288,
                    148.0223
                ],
                "owner": "1rk116f53"
            },
            {
                "uniqid": "a2137",
                "contactId": "CA662",
                "name": "Blue:96",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859c8cc3fffffff",
                "location": [
                    -8.4408,
                    146.4303
                ],
                "owner": "2rk116f53"
            },
            {
                "uniqid": "a2138",
                "contactId": "CA1144",
                "name": "Blue:97",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859c8987fffffff",
                "location": [
                    -8.1574,
                    144.0694
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2139",
                "contactId": "CA724",
                "name": "Blue:98",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85729923fffffff",
                "location": [
                    -5.9314,
                    137.7613
                ],
                "owner": "rk116f53"
            },
            {
                "uniqid": "a2140",
                "contactId": "CA2891",
                "name": "Blue:99",
                "perceptions": [],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "8572dcdbfffffff",
                "location": [
                    -3.7652,
                    142.9331
                ],
                "owner": "blue-logs"
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
                "uniqid": "a101",
                "contactId": "CA653",
                "name": "Red Force:0",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "859c4d17fffffff",
                "location": [
                    -16.9172,
                    133.9563
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a102",
                "contactId": "CA1288",
                "name": "Red Force:1",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859c63b3fffffff",
                "location": [
                    -18.479,
                    137.4296
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a103",
                "contactId": "CA1194",
                "name": "Red Force:2",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "85b89d0bfffffff",
                "location": [
                    -21.3032,
                    132.7943
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a104",
                "contactId": "CA2181",
                "name": "Red Force:3",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c42b7fffffff",
                "location": [
                    -15.8289,
                    137.4059
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a105",
                "contactId": "CA1091",
                "name": "Red Force:4",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85948ddbfffffff",
                "location": [
                    -17.6741,
                    124.6702
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a106",
                "contactId": "CA766",
                "name": "Red Force:5",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "85949a07fffffff",
                "location": [
                    -21.2333,
                    122.7511
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a107",
                "contactId": "CA3390",
                "name": "Red Force:6",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859c4acbfffffff",
                "location": [
                    -14.8983,
                    135.2309
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a108",
                "contactId": "CA283",
                "name": "Red Force:7",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "85948937fffffff",
                "location": [
                    -18.5021,
                    126.3082
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a109",
                "contactId": "CA2998",
                "name": "Red Force:8",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "85948a43fffffff",
                "location": [
                    -19.8071,
                    124.1076
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a110",
                "contactId": "CA131",
                "name": "Red Force:9",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859c4db7fffffff",
                "location": [
                    -17.2885,
                    133.6646
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a111",
                "contactId": "CA685",
                "name": "Red Force:10",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85b890affffffff",
                "location": [
                    -21.2095,
                    135.7904
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a112",
                "contactId": "CA1977",
                "name": "Red Force:11",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859c6307fffffff",
                "location": [
                    -18.1952,
                    137.5606
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a113",
                "contactId": "CA391",
                "name": "Red Force:12",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "859c4b63fffffff",
                "location": [
                    -14.6301,
                    133.5735
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a114",
                "contactId": "CA543",
                "name": "Red Force:13",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859d73dbfffffff",
                "location": [
                    -21.8344,
                    145.2636
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a115",
                "contactId": "CA2836",
                "name": "Red Force:14",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "8594d8cffffffff",
                "location": [
                    -19.8996,
                    130.2539
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a116",
                "contactId": "CA3277",
                "name": "Red Force:15",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "859c412ffffffff",
                "location": [
                    -16.3639,
                    135.7472
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a117",
                "contactId": "CA962",
                "name": "Red Force:16",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "85b8d97bfffffff",
                "location": [
                    -20.8796,
                    124.775
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a118",
                "contactId": "CA450",
                "name": "Red Force:17",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "8594cbcbfffffff",
                "location": [
                    -18.8326,
                    132.7372
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a119",
                "contactId": "CA1203",
                "name": "Red Force:18",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859492affffffff",
                "location": [
                    -20.5135,
                    120.2477
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a120",
                "contactId": "CA443",
                "name": "Red Force:19",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8594d977fffffff",
                "location": [
                    -19.9862,
                    131.8015
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a121",
                "contactId": "CA957",
                "name": "Red Force:20",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "85b8d2d3fffffff",
                "location": [
                    -21.0249,
                    129.4039
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a122",
                "contactId": "CA2455",
                "name": "Red Force:21",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859d5357fffffff",
                "location": [
                    -18.8486,
                    143.8051
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a123",
                "contactId": "CA188",
                "name": "Red Force:22",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "8594d3c7fffffff",
                "location": [
                    -19.9296,
                    128.0652
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a124",
                "contactId": "CA720",
                "name": "Red Force:23",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "85b88273fffffff",
                "location": [
                    -21.9594,
                    134.5389
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a125",
                "contactId": "CA1437",
                "name": "Red Force:24",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "8594ea3bfffffff",
                "location": [
                    -16.3935,
                    131.2089
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a126",
                "contactId": "CA1404",
                "name": "Red Force:25",
                "perceptions": [],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "85b89647fffffff",
                "location": [
                    -20.6802,
                    137.5106
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a127",
                "contactId": "CA1399",
                "name": "Red Force:26",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859d554bfffffff",
                "location": [
                    -20.4423,
                    144.195
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a128",
                "contactId": "CA2569",
                "name": "Red Force:27",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "8594aa6bfffffff",
                "location": [
                    -17.505,
                    123.4994
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a129",
                "contactId": "CA1590",
                "name": "Red Force:28",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "8594956bfffffff",
                "location": [
                    -19.3568,
                    120.6795
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a130",
                "contactId": "CA3320",
                "name": "Red Force:29",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "859c44c3fffffff",
                "location": [
                    -17.171,
                    138.5626
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a131",
                "contactId": "CA1440",
                "name": "Red Force:30",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859d5357fffffff",
                "location": [
                    -18.9459,
                    143.8244
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a132",
                "contactId": "CA2225",
                "name": "Red Force:31",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "8594988bfffffff",
                "location": [
                    -20.2473,
                    122.8155
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a133",
                "contactId": "CA1846",
                "name": "Red Force:32",
                "perceptions": [],
                "platformTypeId": "id-uav",
                "condition": "working",
                "position": "8594e037fffffff",
                "location": [
                    -14.764,
                    128.9268
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a134",
                "contactId": "CA3378",
                "name": "Red Force:33",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "859c4347fffffff",
                "location": [
                    -15.2943,
                    136.8105
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a135",
                "contactId": "CA2514",
                "name": "Red Force:34",
                "perceptions": [],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "8594e8d7fffffff",
                "location": [
                    -15.0739,
                    131.1038
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a136",
                "contactId": "CA2900",
                "name": "Red Force:35",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85941babfffffff",
                "location": [
                    -14.9065,
                    126.4734
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a137",
                "contactId": "CA2062",
                "name": "Red Force:36",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "8594c12ffffffff",
                "location": [
                    -17.4179,
                    131.1805
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a138",
                "contactId": "CA3239",
                "name": "Red Force:37",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "85b88267fffffff",
                "location": [
                    -21.7708,
                    134.2434
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a139",
                "contactId": "CA2968",
                "name": "Red Force:38",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859c6a57fffffff",
                "location": [
                    -17.3231,
                    136.0737
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a140",
                "contactId": "CA3306",
                "name": "Red Force:39",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "85b89637fffffff",
                "location": [
                    -21.0211,
                    136.8793
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a141",
                "contactId": "CA2100",
                "name": "Red Force:40",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8594ee9bfffffff",
                "location": [
                    -15.1405,
                    130.0073
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a142",
                "contactId": "CA3312",
                "name": "Red Force:41",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "8594d9a3fffffff",
                "location": [
                    -19.4209,
                    131.939
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a143",
                "contactId": "CA2822",
                "name": "Red Force:42",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "8594516bfffffff",
                "location": [
                    -13.1106,
                    131.5662
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a144",
                "contactId": "CA2501",
                "name": "Red Force:43",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859d0cbbfffffff",
                "location": [
                    -21.482,
                    148.0781
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a145",
                "contactId": "CA133",
                "name": "Red Force:44",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85b8d03bfffffff",
                "location": [
                    -21.6416,
                    128.2471
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a146",
                "contactId": "CA2766",
                "name": "Red Force:45",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85949557fffffff",
                "location": [
                    -19.0744,
                    120.3399
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a147",
                "contactId": "CA400",
                "name": "Red Force:46",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "8594c3d7fffffff",
                "location": [
                    -17.9445,
                    129.8804
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a148",
                "contactId": "CA901",
                "name": "Red Force:47",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "8594c9affffffff",
                "location": [
                    -17.6124,
                    133.9582
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a149",
                "contactId": "CA2299",
                "name": "Red Force:48",
                "perceptions": [],
                "platformTypeId": "id-agi",
                "condition": "working",
                "position": "859c438ffffffff",
                "location": [
                    -15.7716,
                    136.7329
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a150",
                "contactId": "CA2027",
                "name": "Red Force:49",
                "perceptions": [],
                "platformTypeId": "id-helo",
                "condition": "working",
                "position": "85a79837fffffff",
                "location": [
                    -21.463,
                    118.1253
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a151",
                "contactId": "CA1921",
                "name": "Red Force:50",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "859d5a77fffffff",
                "location": [
                    -18.1552,
                    141.5659
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a152",
                "contactId": "CA2652",
                "name": "Red Force:51",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "8594937bfffffff",
                "location": [
                    -20.9727,
                    120.9527
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a153",
                "contactId": "CA762",
                "name": "Red Force:52",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859d4aabfffffff",
                "location": [
                    -20.7572,
                    139.3236
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a154",
                "contactId": "CA1192",
                "name": "Red Force:53",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "8594edaffffffff",
                "location": [
                    -14.2424,
                    132.1875
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a155",
                "contactId": "CA2610",
                "name": "Red Force:54",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8594e03bfffffff",
                "location": [
                    -14.8177,
                    128.7614
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a156",
                "contactId": "CA2084",
                "name": "Red Force:55",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "85a6a453fffffff",
                "location": [
                    -21.3346,
                    116.8916
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a157",
                "contactId": "CA2049",
                "name": "Red Force:56",
                "perceptions": [],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "859c4e57fffffff",
                "location": [
                    -15.5257,
                    135.7221
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a158",
                "contactId": "CA2152",
                "name": "Red Force:57",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859d4357fffffff",
                "location": [
                    -21.2144,
                    141.7258
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a159",
                "contactId": "CA1972",
                "name": "Red Force:58",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859d4bcbfffffff",
                "location": [
                    -20.6878,
                    138.9096
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a160",
                "contactId": "CA1035",
                "name": "Red Force:59",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "8594d3dbfffffff",
                "location": [
                    -19.9833,
                    127.7938
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a161",
                "contactId": "CA1137",
                "name": "Red Force:60",
                "perceptions": [],
                "platformTypeId": "id-ssn",
                "condition": "working",
                "position": "859d5a13fffffff",
                "location": [
                    -18.5038,
                    141.8314
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a162",
                "contactId": "CA827",
                "name": "Red Force:61",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859c6107fffffff",
                "location": [
                    -19.1264,
                    136.9639
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a163",
                "contactId": "CA2892",
                "name": "Red Force:62",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "8594502bfffffff",
                "location": [
                    -12.9237,
                    130.7584
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a164",
                "contactId": "CA1015",
                "name": "Red Force:63",
                "perceptions": [],
                "platformTypeId": "id-missile",
                "condition": "working",
                "position": "8594d26ffffffff",
                "location": [
                    -20.6559,
                    127.4977
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a165",
                "contactId": "CA569",
                "name": "Red Force:64",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859d5a3bfffffff",
                "location": [
                    -18.3698,
                    141.4344
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a166",
                "contactId": "CA3174",
                "name": "Red Force:65",
                "perceptions": [],
                "platformTypeId": "id-mpa",
                "condition": "working",
                "position": "8594908ffffffff",
                "location": [
                    -19.5862,
                    120.2415
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a167",
                "contactId": "CA2518",
                "name": "Red Force:66",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859d72dbfffffff",
                "location": [
                    -21.6197,
                    146.4598
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a168",
                "contactId": "CA911",
                "name": "Red Force:67",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "8594d4c7fffffff",
                "location": [
                    -18.3428,
                    126.7139
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a169",
                "contactId": "CA1046",
                "name": "Red Force:68",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859c5dd3fffffff",
                "location": [
                    -14.9828,
                    136.5211
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a170",
                "contactId": "CA3072",
                "name": "Red Force:69",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "8594852ffffffff",
                "location": [
                    -17.2916,
                    122.8482
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a171",
                "contactId": "CA1183",
                "name": "Red Force:70",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "859c438ffffffff",
                "location": [
                    -15.8069,
                    136.6283
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a172",
                "contactId": "CA3228",
                "name": "Red Force:71",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "859d0d43fffffff",
                "location": [
                    -20.9938,
                    147.3446
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a173",
                "contactId": "CA1627",
                "name": "Red Force:72",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "85949283fffffff",
                "location": [
                    -20.288,
                    119.8102
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a174",
                "contactId": "CA3205",
                "name": "Red Force:73",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "85948b8bfffffff",
                "location": [
                    -19.1681,
                    125.3408
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a175",
                "contactId": "CA2583",
                "name": "Red Force:74",
                "perceptions": [],
                "platformTypeId": "id-destroyer",
                "condition": "working",
                "position": "85b8d2a3fffffff",
                "location": [
                    -21.1157,
                    128.6087
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a176",
                "contactId": "CA2117",
                "name": "Red Force:75",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859c4c13fffffff",
                "location": [
                    -16.8558,
                    135.2239
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a177",
                "contactId": "CA1476",
                "name": "Red Force:76",
                "perceptions": [],
                "platformTypeId": "id-ssk",
                "condition": "working",
                "position": "859d4063fffffff",
                "location": [
                    -21.7854,
                    141.9991
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a178",
                "contactId": "CA594",
                "name": "Red Force:77",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "859d517bfffffff",
                "location": [
                    -19.7381,
                    143.2151
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a179",
                "contactId": "CA2565",
                "name": "Red Force:78",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859d5b6bfffffff",
                "location": [
                    -18.0604,
                    140.5199
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a180",
                "contactId": "CA1772",
                "name": "Red Force:79",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8594aa7bfffffff",
                "location": [
                    -17.438,
                    123.4354
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a181",
                "contactId": "CA511",
                "name": "Red Force:80",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859c4847fffffff",
                "location": [
                    -15.6429,
                    134.5062
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a182",
                "contactId": "CA313",
                "name": "Red Force:81",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "85b8d317fffffff",
                "location": [
                    -21.0055,
                    127.8412
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a183",
                "contactId": "CA1040",
                "name": "Red Force:82",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "859c6367fffffff",
                "location": [
                    -17.7101,
                    137.3962
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a184",
                "contactId": "CA1297",
                "name": "Red Force:83",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "8594cdbbfffffff",
                "location": [
                    -16.7413,
                    133.0521
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a185",
                "contactId": "CA2265",
                "name": "Red Force:84",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "85949b43fffffff",
                "location": [
                    -21.4968,
                    123.5095
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a186",
                "contactId": "CA1861",
                "name": "Red Force:85",
                "perceptions": [],
                "platformTypeId": "id-merchant",
                "condition": "working",
                "position": "85949cabfffffff",
                "location": [
                    -19.5025,
                    122.5002
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a187",
                "contactId": "CA978",
                "name": "Red Force:86",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859d553bfffffff",
                "location": [
                    -20.867,
                    143.532
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a188",
                "contactId": "CA1664",
                "name": "Red Force:87",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "8594e827fffffff",
                "location": [
                    -15.3675,
                    132.0134
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a189",
                "contactId": "CA658",
                "name": "Red Force:88",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859c4633fffffff",
                "location": [
                    -16.2331,
                    138.1816
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a190",
                "contactId": "CA2588",
                "name": "Red Force:89",
                "perceptions": [],
                "platformTypeId": "id-task-group",
                "condition": "working",
                "position": "859d506bfffffff",
                "location": [
                    -19.4039,
                    144.2833
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a191",
                "contactId": "CA2862",
                "name": "Red Force:90",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "8594ec03fffffff",
                "location": [
                    -14.5168,
                    130.6088
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a192",
                "contactId": "CA1623",
                "name": "Red Force:91",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "85b8db03fffffff",
                "location": [
                    -20.2811,
                    125.0835
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a193",
                "contactId": "CA249",
                "name": "Red Force:92",
                "perceptions": [],
                "platformTypeId": "id-auxiliary",
                "condition": "working",
                "position": "859c6ed7fffffff",
                "location": [
                    -18.4267,
                    136.9407
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a194",
                "contactId": "CA795",
                "name": "Red Force:93",
                "perceptions": [],
                "platformTypeId": "id-fixed-wing",
                "condition": "working",
                "position": "85949ccffffffff",
                "location": [
                    -19.7074,
                    122.0456
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a195",
                "contactId": "CA3182",
                "name": "Red Force:94",
                "perceptions": [],
                "platformTypeId": "id-carrier",
                "condition": "working",
                "position": "8594d1b3fffffff",
                "location": [
                    -18.7725,
                    128.9513
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a196",
                "contactId": "CA1612",
                "name": "Red Force:95",
                "perceptions": [],
                "platformTypeId": "id-boghammer",
                "condition": "working",
                "position": "859c65a3fffffff",
                "location": [
                    -20.2422,
                    137.5099
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a197",
                "contactId": "CA3077",
                "name": "Red Force:96",
                "perceptions": [],
                "platformTypeId": "id-frigate-ta",
                "condition": "working",
                "position": "8594ca1bfffffff",
                "location": [
                    -18.7893,
                    131.9319
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a198",
                "contactId": "CA2959",
                "name": "Red Force:97",
                "perceptions": [],
                "platformTypeId": "id-fisher",
                "condition": "working",
                "position": "859c4037fffffff",
                "location": [
                    -16.4479,
                    136.9499
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a199",
                "contactId": "CA2119",
                "name": "Red Force:98",
                "perceptions": [],
                "platformTypeId": "id-frigate",
                "condition": "working",
                "position": "85949243fffffff",
                "location": [
                    -20.8147,
                    119.7329
                ],
                "owner": "rkr226f5e"
            },
            {
                "uniqid": "a200",
                "contactId": "CA2932",
                "name": "Red Force:99",
                "perceptions": [],
                "platformTypeId": "id-mcm",
                "condition": "working",
                "position": "8594aa67fffffff",
                "location": [
                    -17.3464,
                    123.7328
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
