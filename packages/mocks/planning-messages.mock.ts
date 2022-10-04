
import { MessagePlanning } from '@serge/custom-types'

export const planningMessages: MessagePlanning[] = [
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
  }
]