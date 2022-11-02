
import { MessagePlanning } from '@serge/custom-types'

export const dummyMessages: MessagePlanning[] = [
  {
      "messageType": "PlanningMessage",
      "details": {
          "channel": "channel-blue-planning",
          "from": {
              "force": "Blue",
              "forceColor": "#00F",
              "forceId": "F-Blue",
              "roleName": "Mar-1",
              "roleId": "rk116f5e",
              "iconURL": "default_img/umpireDefault.png"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-21T13:15:09.106Z",
          "turnNumber": 6
      },
      "message": {
          "reference": "Blue-12",
          "Date": "13/05/2021 16:12",
          "Description": "More land operations",
          "Location": "Region-A",
          "Status": "Minor",
          "title": "Operation Bravo-12",
          "Assets": [
              {
                  "FEName": "Blue:4",
                  "Number": 1,
                  "StartDate": "13/05/2021",
                  "EndDate": "14/05/2021"
              },
              {
                  "FEName": "Blue:13",
                  "Number": 4,
                  "StartDate": "13/05/2021",
                  "EndDate": "14/05/2021"
              }
          ],
          "Targets": [
              {
                  "FEName": "Red Force:3",
                  "Number": 4
              }
          ],
          "activity": "point-recce"
      },
      "_id": "idp_3a",
      "_rev": "2",
      "hasBeenRead": false
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
          "timestamp": "2022-09-22T17:34:15.816Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-3",
          "title": "Order item 3 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T09:00:00.000Z",
          "Description": "Order description 3",
          "Location": "Point-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:18",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:0",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:10",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA155",
                  "Number": 1
              }
          ],
          "activity": "transit"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_3",
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
          "timestamp": "2022-09-23T21:53:22.527Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-4",
          "title": "Order item 4 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T17:00:00.000Z",
          "Description": "Order description 4",
          "Location": "Point-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:8",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:10",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:18",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:23",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA2050",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_4",
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
          "timestamp": "2022-09-25T02:12:29.237Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-5",
          "title": "Order item 5 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T22:00:00.000Z",
          "Description": "Order description 5",
          "Location": "Point-B",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:23",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:18",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:8",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:31",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA2037",
                  "Number": 1
              },
              {
                  "FEName": "CA155",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_5",
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
          "timestamp": "2022-09-27T09:04:29.633Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-6",
          "title": "Order item 6 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T06:00:00.000Z",
          "Description": "Order description 6",
          "Location": "Region-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:31",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:16",
                  "Number": 1
              },
              {
                  "FEName": "CA2050",
                  "Number": 1
              },
              {
                  "FEName": "CA2037",
                  "Number": 1
              }
          ],
          "activity": "cyber"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_6",
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
          "timestamp": "2022-09-28T13:23:36.343Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-7",
          "title": "Order item 7 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T11:00:00.000Z",
          "Description": "Order description 7",
          "Location": "Region-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:19",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "BOUM 3",
                  "Number": 1
              },
              {
                  "FEName": "Red Force:27",
                  "Number": 1
              },
              {
                  "FEName": "CA2635",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_7",
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
          "timestamp": "2022-09-29T17:42:43.054Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-8",
          "title": "Order item 8 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T19:00:00.000Z",
          "Description": "Order description 8",
          "Location": "Polyline-A",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:7",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:14",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA994",
                  "Number": 1
              }
          ],
          "activity": "transit"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_8",
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
          "timestamp": "2022-09-22T14:01:49.764Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-9",
          "title": "Order item 9 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T06:00:00.000Z",
          "Description": "Order description 9",
          "Location": "Polyline-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:7",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:19",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA994",
                  "Number": 1
              }
          ],
          "activity": "area-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_9",
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
          "timestamp": "2022-09-22T15:48:02.790Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-10",
          "title": "Order item 10 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T09:00:00.000Z",
          "Description": "Order description 10",
          "Location": "Point-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Blue:12",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:7",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Blue:17",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA3126",
                  "Number": 1
              },
              {
                  "FEName": "CA994",
                  "Number": 1
              }
          ],
          "activity": "area-strike"
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
              "force": "Red Force",
              "forceColor": "#F00",
              "roleName": "CO",
              "roleId": "rkr226f5e",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Red"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-23T20:07:09.501Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-11",
          "title": "Order item 11 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T14:00:00.000Z",
          "Description": "Order description 11",
          "Location": "Point-B",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:8",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:10",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:17",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:16",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:17",
                  "Number": 1
              },
              {
                  "FEName": "CA2499",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_11",
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
          "timestamp": "2022-09-25T00:26:16.211Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-12",
          "title": "Order item 12 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T22:00:00.000Z",
          "Description": "Order description 12",
          "Location": "Point-B",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:16",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:17",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:8",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:30",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:6",
                  "Number": 1
              },
              {
                  "FEName": "CA155",
                  "Number": 1
              },
              {
                  "FEName": "Blue:17",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_12",
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
          "timestamp": "2022-09-26T04:45:22.922Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-13",
          "title": "Order item 13 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T08:00:00.000Z",
          "Description": "Order description 13",
          "Location": "Region-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:30",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:16",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_13",
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
          "timestamp": "2022-09-28T11:37:23.317Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-14",
          "title": "Order item 14 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T11:00:00.000Z",
          "Description": "Order description 14",
          "Location": "Region-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:19",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:4",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "BOUM 3",
                  "Number": 1
              }
          ],
          "activity": "area-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_14",
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
          "timestamp": "2022-09-29T15:56:30.028Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-15",
          "title": "Order item 15 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T16:00:00.000Z",
          "Description": "Order description 15",
          "Location": "Polyline-A",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:6",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:14",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA523",
                  "Number": 1
              },
              {
                  "FEName": "CA2635",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
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
              "roleName": "Air-3",
              "roleId": "3rk116f53",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-22T12:15:36.738Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-16",
          "title": "Order item 16 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T05:00:00.000Z",
          "Description": "Order description 16",
          "Location": "Polyline-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:11",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:19",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1326",
                  "Number": 1
              },
              {
                  "FEName": "BOUM 3",
                  "Number": 1
              }
          ],
          "activity": "transit"
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
              "roleName": "Logs",
              "roleId": "blue-logs",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-23T16:34:43.449Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-17",
          "title": "Order item 17 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T11:00:00.000Z",
          "Description": "Order description 17",
          "Location": "Point-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Blue:12",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:6",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Blue:11",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA3126",
                  "Number": 1
              },
              {
                  "FEName": "CA523",
                  "Number": 1
              },
              {
                  "FEName": "CA1326",
                  "Number": 1
              }
          ],
          "activity": "cyber"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_17",
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
          "timestamp": "2022-09-23T18:20:56.475Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-18",
          "title": "Order item 18 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T14:00:00.000Z",
          "Description": "Order description 18",
          "Location": "Point-B",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:7",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:16",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:17",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:17",
                  "Number": 1
              }
          ],
          "activity": "transit"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_18",
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
          "timestamp": "2022-09-24T22:40:03.185Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-19",
          "title": "Order item 19 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T19:00:00.000Z",
          "Description": "Order description 19",
          "Location": "Region-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:15",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:17",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:7",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:23",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:6",
                  "Number": 1
              }
          ],
          "activity": "cyber"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_19",
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
          "timestamp": "2022-09-26T02:59:09.896Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-20",
          "title": "Order item 20 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T08:00:00.000Z",
          "Description": "Order description 20",
          "Location": "Region-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:23",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA2037",
                  "Number": 1
              },
              {
                  "FEName": "Blue:17",
                  "Number": 1
              }
          ],
          "activity": "area-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_20",
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
          "timestamp": "2022-09-27T07:18:16.607Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-21",
          "title": "Order item 21 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T13:00:00.000Z",
          "Description": "Order description 21",
          "Location": "Region-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:18",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "C026",
                  "Number": 1
              },
              {
                  "FEName": "CA1230",
                  "Number": 1
              }
          ],
          "activity": "area-recce"
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
              "roleName": "Air-1",
              "roleId": "1rk116f53",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-29T14:10:17.002Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-22",
          "title": "Order item 22 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T16:00:00.000Z",
          "Description": "Order description 22",
          "Location": "Polyline-A",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:6",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:9",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA523",
                  "Number": 1
              },
              {
                  "FEName": "Red Force:27",
                  "Number": 1
              },
              {
                  "FEName": "C026",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
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
              "force": "Blue",
              "forceColor": "#00F",
              "roleName": "Air-2",
              "roleId": "2rk116f53",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-22T10:29:23.712Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-23",
          "title": "Order item 23 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T21:00:00.000Z",
          "Description": "Order description 23",
          "Location": "Polyline-A",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:11",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:18",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1326",
                  "Number": 1
              }
          ],
          "activity": "area-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_23",
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
          "timestamp": "2022-09-23T14:48:30.423Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-24",
          "title": "Order item 24 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T10:00:00.000Z",
          "Description": "Order description 24",
          "Location": "Point-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Blue:16",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:6",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Blue:11",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1312",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
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
              "roleName": "CO",
              "roleId": "rkr226f5e",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Red"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-24T19:07:37.134Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-25",
          "title": "Order item 25 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T16:00:00.000Z",
          "Description": "Order description 25",
          "Location": "Point-B",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:7",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:16",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:15",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:17",
                  "Number": 1
              },
              {
                  "FEName": "Blue:12",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
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
              "roleName": "Logs",
              "roleId": "rkr226f5a",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Red"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-24T20:53:50.160Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-26",
          "title": "Order item 26 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T19:00:00.000Z",
          "Description": "Order description 26",
          "Location": "Region-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:15",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:7",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:22",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:30",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:6",
                  "Number": 1
              },
              {
                  "FEName": "Blue:17",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_26",
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
          "timestamp": "2022-09-26T01:12:56.870Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-27",
          "title": "Order item 27 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T05:00:00.000Z",
          "Description": "Order description 27",
          "Location": "Region-B",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:22",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:11",
                  "Number": 1
              },
              {
                  "FEName": "Blue:17",
                  "Number": 1
              },
              {
                  "FEName": "Blue:6",
                  "Number": 1
              }
          ],
          "activity": "transit"
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
              "force": "Blue",
              "forceColor": "#00F",
              "roleName": "Mar-4",
              "roleId": "rk116f53",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-27T05:32:03.581Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-28",
          "title": "Order item 28 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T13:00:00.000Z",
          "Description": "Order description 28",
          "Location": "Region-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:13",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Red Force:36",
                  "Number": 1
              },
              {
                  "FEName": "CA1230",
                  "Number": 1
              },
              {
                  "FEName": "Red Force:27",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_28",
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
          "timestamp": "2022-09-28T09:51:10.291Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-29",
          "title": "Order item 29 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T18:00:00.000Z",
          "Description": "Order description 29",
          "Location": "Polyline-A",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:6",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:9",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA523",
                  "Number": 1
              }
          ],
          "activity": "area-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_29",
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
          "timestamp": "2022-09-22T08:43:10.687Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-30",
          "title": "Order item 30 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T21:00:00.000Z",
          "Description": "Order description 30",
          "Location": "Polyline-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Blue:11",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:13",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Blue:6",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1326",
                  "Number": 1
              },
              {
                  "FEName": "Red Force:36",
                  "Number": 1
              }
          ],
          "activity": "air-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_30",
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
          "timestamp": "2022-09-23T13:02:17.397Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-31",
          "title": "Order item 31 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T08:00:00.000Z",
          "Description": "Order description 31",
          "Location": "Polyline-B",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Blue:15",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:6",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Blue:11",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA2227",
                  "Number": 1
              },
              {
                  "FEName": "CA523",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_31",
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
          "timestamp": "2022-09-24T17:21:24.108Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-32",
          "title": "Order item 32 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T15:00:00.000Z",
          "Description": "Order description 32",
          "Location": "Point-B",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:14",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:15",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:6",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1397",
                  "Number": 1
              },
              {
                  "FEName": "Blue:12",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_32",
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
          "timestamp": "2022-09-25T21:40:30.818Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-33",
          "title": "Order item 33 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T21:00:00.000Z",
          "Description": "Order description 33",
          "Location": "Region-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:14",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:6",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:22",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:29",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:6",
                  "Number": 1
              },
              {
                  "FEName": "Blue:17",
                  "Number": 1
              },
              {
                  "FEName": "CA1397",
                  "Number": 1
              }
          ],
          "activity": "transit"
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
              "force": "Red Force",
              "forceColor": "#F00",
              "roleName": "Logs",
              "roleId": "rkr226f5a",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Red"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-25T23:26:43.844Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-34",
          "title": "Order item 34 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T05:00:00.000Z",
          "Description": "Order description 34",
          "Location": "Region-B",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:22",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:14",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:29",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:37",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:11",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_34",
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
          "timestamp": "2022-09-27T03:45:50.555Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-35",
          "title": "Order item 35 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T10:00:00.000Z",
          "Description": "Order description 35",
          "Location": "Region-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:13",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Red Force:36",
                  "Number": 1
              },
              {
                  "FEName": "CA1230",
                  "Number": 1
              }
          ],
          "activity": "area-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_35",
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
          "timestamp": "2022-09-28T08:04:57.265Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-36",
          "title": "Order item 36 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T18:00:00.000Z",
          "Description": "Order description 36",
          "Location": "Region-B",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:18",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:8",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "C026",
                  "Number": 1
              },
              {
                  "FEName": "CA2294",
                  "Number": 1
              }
          ],
          "activity": "area-strike"
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
              "force": "Blue",
              "forceColor": "#00F",
              "roleName": "Air-2",
              "roleId": "2rk116f53",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-29T12:24:03.976Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-37",
          "title": "Order item 37 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T04:00:00.000Z",
          "Description": "Order description 37",
          "Location": "Polyline-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Blue:10",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:13",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Blue:18",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1764",
                  "Number": 1
              },
              {
                  "FEName": "Red Force:36",
                  "Number": 1
              },
              {
                  "FEName": "C026",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_37",
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
          "timestamp": "2022-09-23T11:16:04.371Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-38",
          "title": "Order item 38 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T07:00:00.000Z",
          "Description": "Order description 38",
          "Location": "Polyline-B",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:6",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:37",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:15",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:17",
                  "Number": 1
              },
              {
                  "FEName": "BOUM 3",
                  "Number": 1
              },
              {
                  "FEName": "Blue:12",
                  "Number": 1
              }
          ],
          "activity": "cyber"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_38",
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
          "timestamp": "2022-09-24T15:35:11.082Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-39",
          "title": "Order item 39 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T13:00:00.000Z",
          "Description": "Order description 39",
          "Location": "Point-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:13",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:15",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:6",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1397",
                  "Number": 1
              }
          ],
          "activity": "cyber"
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
              "roleName": "Logs",
              "roleId": "rkr226f5a",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Red"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-25T19:54:17.792Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-40",
          "title": "Order item 40 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T20:00:00.000Z",
          "Description": "Order description 40",
          "Location": "Region-A",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:21",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:6",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:13",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:29",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:11",
                  "Number": 1
              },
              {
                  "FEName": "Blue:17",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
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
              "force": "Red Force",
              "forceColor": "#F00",
              "roleName": "Logs",
              "roleId": "rkr226f5a",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Red"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-27T00:13:24.503Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-41",
          "title": "Order item 41 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T07:00:00.000Z",
          "Description": "Order description 41",
          "Location": "Region-B",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:21",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:13",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:29",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:37",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:11",
                  "Number": 1
              },
              {
                  "FEName": "CA1397",
                  "Number": 1
              }
          ],
          "activity": "cyber"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_41",
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
          "timestamp": "2022-09-27T01:59:37.529Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-42",
          "title": "Order item 42 Asymmetric",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T10:00:00.000Z",
          "Description": "Order description 42",
          "Location": "Region-B",
          "ActivityType": "Asymmetric",
          "Assets": [
              {
                  "FEName": "Red Force:29",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:16",
                  "Number": 1
              },
              {
                  "FEName": "Blue:11",
                  "Number": 1
              },
              {
                  "FEName": "BARLAY",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
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
              "roleName": "Air-2",
              "roleId": "2rk116f53",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-28T06:18:44.239Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-43",
          "title": "Order item 43 Transit",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T15:00:00.000Z",
          "Description": "Order description 43",
          "Location": "Polyline-A",
          "ActivityType": "Transit",
          "Assets": [
              {
                  "FEName": "Blue:18",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:8",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "C026",
                  "Number": 1
              },
              {
                  "FEName": "CA2294",
                  "Number": 1
              },
              {
                  "FEName": "Red Force:36",
                  "Number": 1
              }
          ],
          "activity": "transit"
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
              "force": "Blue",
              "forceColor": "#00F",
              "roleName": "Air-2",
              "roleId": "2rk116f53",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Blue"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-29T10:37:50.950Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Blue-44",
          "title": "Order item 44 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T04:00:00.000Z",
          "Description": "Order description 44",
          "Location": "Polyline-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Blue:6",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Blue:13",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Blue:18",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA523",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Blue_44",
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
          "timestamp": "2022-09-22T06:56:57.661Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-45",
          "title": "Order item 45 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T09:00:00.000Z",
          "Description": "Order description 45",
          "Location": "Polyline-B",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:5",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:37",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:7",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1555",
                  "Number": 1
              }
          ],
          "activity": "transit"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_45",
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
          "timestamp": "2022-09-24T13:48:58.056Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-46",
          "title": "Order item 46 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T12:00:00.000Z",
          "Description": "Order description 46",
          "Location": "Point-A",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:13",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:7",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:5",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:20",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "CA1397",
                  "Number": 1
              },
              {
                  "FEName": "Blue:7",
                  "Number": 1
              }
          ],
          "activity": "precis-strike"
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
              "force": "Red Force",
              "forceColor": "#F00",
              "roleName": "CO",
              "roleId": "rkr226f5e",
              "iconURL": "default_img/umpireDefault.png",
              "forceId": "F-Red"
          },
          "messageType": "Land Activity",
          "timestamp": "2022-09-25T18:08:04.766Z",
          "turnNumber": 3
      },
      "message": {
          "reference": "Red Force-47",
          "title": "Order item 47 Kinetic",
          "startDate": "2022-09-21T04:00:00.000Z",
          "endDate": "2022-09-21T18:00:00.000Z",
          "Description": "Order description 47",
          "Location": "Point-B",
          "ActivityType": "Kinetic",
          "Assets": [
              {
                  "FEName": "Red Force:20",
                  "Number": 2,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T20:00:00.000Z"
              },
              {
                  "FEName": "Red Force:5",
                  "Number": 3,
                  "StartDate": "2022-09-21T04:00:00.000Z",
                  "EndDate": "2022-09-21T22:00:00.000Z"
              },
              {
                  "FEName": "Red Force:13",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T00:00:00.000Z"
              },
              {
                  "FEName": "Red Force:28",
                  "Number": 4,
                  "StartDate": "2022-09-21T00:00:00.000Z",
                  "EndDate": "2022-09-21T02:00:00.000Z"
              }
          ],
          "Targets": [
              {
                  "FEName": "Blue:11",
                  "Number": 1
              },
              {
                  "FEName": "CA1555",
                  "Number": 1
              },
              {
                  "FEName": "CA1397",
                  "Number": 1
              }
          ],
          "activity": "point-recce"
      },
      "hasBeenRead": false,
      "_id": "m_F-Red_47",
      "_rev": "2"
  }
]