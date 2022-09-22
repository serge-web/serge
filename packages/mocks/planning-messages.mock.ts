import { PLANNING_MESSAGE, CollaborativeMessageStates } from '@serge/config'
import { MessagePlanning, Role } from '@serge/custom-types'
import { forces } from "./forces.mock";

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const redCO: Role = forces[2].roles[0]

export const planningMessages: MessagePlanning[] = [
  {
    messageType: PLANNING_MESSAGE,
    details: {
      channel: "channel-blue-planning",
      from: {
        force: "Blue",
        forceColor: "#00F",
        roleName: "Mar-1",
        roleId: "rk116f5e",
        iconURL: "default_img/umpireDefault.png"
      },
      messageType: "Land Activity",
      timestamp: "2022-09-21T13:15:09.106Z",
      turnNumber: 6
    },
    message: {
      reference: "Blue-12",
      Date: "13/05/2021 16:12",
      Description: "More land operations",
      Location: "Region-A",
      Status: "Minor",
      title: "Operation Bravo-12",
      Assets: [
        {
          FEName: "Blue:4",
          Number: 1,
          StartDate: "13/05/2021",
          EndDate: "14/05/2021"
        },
        {
          FEName: "Blue:13",
          Number: 4,
          StartDate: "13/05/2021",
          EndDate: "14/05/2021"
        }
      ],
      Targets: [
        {
          FEName: "Red Force:3",
          Number: 4
        }
      ]
    },
    _id: 'idp_3a',
    _rev: '2',
    hasBeenRead: false
  },
  {
    messageType: PLANNING_MESSAGE,
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'COA',
      timestamp: '2020-10-13T08:55:21.119Z',
      privateMessage: 'Private part of RFI 1',
      collaboration: {
        lastUpdated: "2020-03-25T15:08:47.540Z",
        status: CollaborativeMessageStates.Closed,
        response: {
          content: 'Didn\'t bother responding'
        }
      },
      turnNumber: 1
    },
    message: {
      reference: 'RED-1',
      startDate: '2020-10-13T08:55:21.119Z',
      endDate: '2020-10-14T08:55:21.119Z',
      title: "Red-1 COA",
      LOCATION: {
        Asia: [
          {
            "Country": "India"
          }
        ],
        Europe: [
          {
            "Country": "France"
          }
        ]
      },
      PRESCRIPTED: true,
      VISIBILITY: "Overt",
      COA_SUPPORTS_AS: true,
      TARGET: "kdjg;sd lfjk s;lfkgj ",
      STRAT_COMMS: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_TURN: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      TARGET_CENTRE_OF_GRAVITY: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_TURN: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      EFFECTS_AND_ACTIONS: "kdjg;sd lfjk s;lfkgj ",
      SEQUENCING_AND_PHASES: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_UNDERSTANDING: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_REACTION_COUNTER_ACTION: {
        ADVERSARY_MLCOA: "kdjg;sd lfjk s;lfkgj ",
        MLCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj ",
        ADVERSARY_MDCOA: "kdjg;sd lfjk s;lfkgj ",
        MDCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj "
      },
      ORBAT: [
        {
          FEName: "Tank",
          Readiness: "Level-1",
          Number: 12,
          StartDate: "20/08/2021",
          EndDate: "20/08/2021"
        }
      ],
      TIMINGS: {
        START_PLANNING: "20/08/2021",
        START_DEPLOYMENT: "20/08/2021",
        START_OPERATION: "20/08/2021",
        END_OPERATION: "20/08/2021",
        END_RECOVERY: "20/08/2021"
      },
      CONTINUES_INTO_NEXT_TURN: true,
      DEPENDENCIES: "kdjg;sd lfjk s;lfkgj ",
      AdjudicationSupport: [
        "Influence",
        "Logistics"
      ],
      PEER_REVIEW: "kdjg;sd lfjk s;lfkgj ",
      INSIGHT: "kdjg;sd lfjk s;lfkgj "
    },
    _rev: '1',
    _id: 'idp_4',
    hasBeenRead: false
  },
  {
    messageType: PLANNING_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        iconURL: 'default_img/umpireDefault.png',
        roleName: whiteGC.name,
        roleId: whiteGC.roleId
      },
      messageType: 'COA',
      privateMessage: 'The private content goes in here',
      timestamp: '2020-10-13T08:52:40.930Z',
      collaboration: {
        lastUpdated: "2020-03-25T15:08:47.540Z",
        status: CollaborativeMessageStates.PendingReview,
        response: {
          content: 'Game control response to RFI 444'
        },
        feedback: [
          { fromId: `rkrlw6f5f`, fromName: `Game Control`, fromForce: 'Red', date: `2020-10-13T08:55:21.119Z`, feedback: `Please think about the children` },
          { fromId: `rkrlasdd5f`, fromName: `RFI Manager`, fromForce: 'Red', date: `2020-10-12T07:25:21.119Z`, feedback: `Need more prep time` },
          { fromId: `rkrlw6f5f`, fromName: `Game Control`, fromForce: 'Red', date: `2020-10-11T09:64:21.119Z`, feedback: `What did you think about the next bit?` },
          { fromId: `rkrlasdd5f`, fromName: `RFI Manager`, fromForce: 'Red', date: `2020-10-19T19:12:21.119Z`, feedback: `Endorsed. Good plan` }
        ]
      },
      turnNumber: 1
    },
    message: {
      reference: 'White-2',
      title: "White-2 COA",
      startDate: '2020-10-16T08:55:21.119Z',
      endDate: '2020-10-18T08:55:21.119Z',
      LOCATION: {
        Asia: [
          {
            "Country": "India"
          }
        ],
        Europe: [
          {
            "Country": "France"
          }
        ]
      },
      PRESCRIPTED: true,
      VISIBILITY: "Overt",
      COA_SUPPORTS_AS: true,
      TARGET: "kdjg;sd lfjk s;lfkgj ",
      STRAT_COMMS: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_TURN: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      TARGET_CENTRE_OF_GRAVITY: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_TURN: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      EFFECTS_AND_ACTIONS: "kdjg;sd lfjk s;lfkgj ",
      SEQUENCING_AND_PHASES: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_UNDERSTANDING: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_REACTION_COUNTER_ACTION: {
        ADVERSARY_MLCOA: "kdjg;sd lfjk s;lfkgj ",
        MLCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj ",
        ADVERSARY_MDCOA: "kdjg;sd lfjk s;lfkgj ",
        MDCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj "
      },
      ORBAT: [
        {
          FEName: "Tank",
          Readiness: "Level-1",
          Number: 12,
          StartDate: "20/08/2021",
          EndDate: "20/08/2021"
        }
      ],
      TIMINGS: {
        START_PLANNING: "20/08/2021",
        START_DEPLOYMENT: "20/08/2021",
        START_OPERATION: "20/08/2021",
        END_OPERATION: "20/08/2021",
        END_RECOVERY: "20/08/2021"
      },
      CONTINUES_INTO_NEXT_TURN: true,
      DEPENDENCIES: "kdjg;sd lfjk s;lfkgj ",
      AdjudicationSupport: [
        "Influence",
        "Logistics"
      ],
      PEER_REVIEW: "kdjg;sd lfjk s;lfkgj ",
      INSIGHT: "kdjg;sd lfjk s;lfkgj "
    },
    _id: '2020-03-25T15:08:47.540Z',
    _rev: '1',
    hasBeenRead: false
  },
  {
    messageType: PLANNING_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Red',
        forceColor: '#F00',
        roleName: redCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'COA',
      timestamp: '2020-10-13T08:52:04.394Z',
      collaboration: {
        lastUpdated: "2020-03-25T15:08:47.540Z",
        status: CollaborativeMessageStates.InProgress,
        feedback: [
          { fromId: `rkrlw6f5f`, fromName: `Game Control`, fromForce: 'Red', date: `2020-10-13T08:55:21.119Z`, feedback: `Please think more about the children` },
          { fromId: `rkrlasdd5f`, fromName: `RFI Manager`, fromForce: 'Red', date: `2020-10-12T07:25:21.119Z`, feedback: `Need even more prep time` },
          { fromId: `rkrlw6f5f`, fromName: `Game Control`, fromForce: 'Red', date: `2020-10-11T09:64:21.119Z`, feedback: `What did you even think about the next bit?` },
          { fromId: `rkrlasdd5f`, fromName: `RFI Manager`, fromForce: 'Red', date: `2020-10-19T19:12:21.119Z`, feedback: `Endorsed. Even a good plan` }
        ]
      },
      turnNumber: 1
    },
    message: {
      reference: 'Red-2',
      title: "Red 2 COA",
      startDate: '2020-11-13T08:55:21.119Z',
      endDate: '2020-12-14T08:55:21.119Z',
      LOCATION: {
      },
      PRESCRIPTED: true,
      VISIBILITY: "Overt",
      COA_SUPPORTS_AS: true,
      TARGET: "kdjg;sd lfjk s;lfkgj ",
      STRAT_COMMS: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_TURN: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      TARGET_CENTRE_OF_GRAVITY: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_TURN: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      EFFECTS_AND_ACTIONS: "kdjg;sd lfjk s;lfkgj ",
      SEQUENCING_AND_PHASES: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_UNDERSTANDING: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_REACTION_COUNTER_ACTION: {
        ADVERSARY_MLCOA: "kdjg;sd lfjk s;lfkgj ",
        MLCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj ",
        ADVERSARY_MDCOA: "kdjg;sd lfjk s;lfkgj ",
        MDCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj "
      },
      ORBAT: [
        {
          FEName: "Tank",
          Readiness: "Level-1",
          Number: 12,
          StartDate: "20/08/2021",
          EndDate: "20/08/2021"
        }
      ],
      TIMINGS: {
        START_PLANNING: "20/08/2021",
        START_DEPLOYMENT: "20/08/2021",
        START_OPERATION: "20/08/2021",
        END_OPERATION: "20/08/2021",
        END_RECOVERY: "20/08/2021"
      },
      CONTINUES_INTO_NEXT_TURN: true,
      DEPENDENCIES: "kdjg;sd lfjk s;lfkgj ",
      AdjudicationSupport: [
        "Influence",
        "Logistics"
      ],
      PEER_REVIEW: "kdjg;sd lfjk s;lfkgj ",
      INSIGHT: "kdjg;sd lfjk s;lfkgj "
    },
    _id: '2020-03-25T15:08:47.525Z',
    _rev: '1',
    hasBeenRead: false
  },
  {
    messageType: PLANNING_MESSAGE,
    details: {
      channel: 'channel-ks8soryj',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: blueCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: blueCO.roleId
      },
      messageType: 'COA',
      timestamp: '2020-10-13T08:52:21.119Z',
      collaboration: {
        lastUpdated: "2020-03-25T15:08:47.540Z",
        status: CollaborativeMessageStates.Unallocated,
        response: {
          content: 'Game control response to Blue-2'
        }
      },
      turnNumber: 1
    },
    message: {
      reference: 'Blue-2',
      title: "Blue 2 COA",
      startDate: '2020-10-13T10:55:21.119Z',
      endDate: '2020-10-14T13:55:21.119Z',
      LOCATION: {
        Europe: [
          {
            "Country": "France"
          }
        ]
      },
      PRESCRIPTED: true,
      VISIBILITY: "Overt",
      COA_SUPPORTS_AS: true,
      TARGET: "kdjg;sd lfjk s;lfkgj ",
      STRAT_COMMS: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_TURN: "kdjg;sd lfjk s;lfkgj ",
      OBJECTIVES_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      TARGET_CENTRE_OF_GRAVITY: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_TURN: "kdjg;sd lfjk s;lfkgj ",
      DESIRED_ENDSTATE_OVERALL: "kdjg;sd lfjk s;lfkgj ",
      EFFECTS_AND_ACTIONS: "kdjg;sd lfjk s;lfkgj ",
      SEQUENCING_AND_PHASES: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_UNDERSTANDING: "kdjg;sd lfjk s;lfkgj ",
      ADVERSARY_REACTION_COUNTER_ACTION: {
        ADVERSARY_MLCOA: "kdjg;sd lfjk s;lfkgj ",
        MLCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj ",
        ADVERSARY_MDCOA: "kdjg;sd lfjk s;lfkgj ",
        MDCOA_RESPONSE: "kdjg;sd lfjk s;lfkgj "
      },
      ORBAT: [
        {
          FEName: "Tank",
          Readiness: "Level-1",
          Number: 12,
          StartDate: "20/08/2021",
          EndDate: "20/08/2021"
        }
      ],
      TIMINGS: {
        START_PLANNING: "20/08/2021",
        START_DEPLOYMENT: "20/08/2021",
        START_OPERATION: "20/08/2021",
        END_OPERATION: "20/08/2021",
        END_RECOVERY: "20/08/2021"
      },
      CONTINUES_INTO_NEXT_TURN: true,
      DEPENDENCIES: "kdjg;sd lfjk s;lfkgj ",
      AdjudicationSupport: [
        "Influence",
        "Logistics"
      ],
      PEER_REVIEW: "kdjg;sd lfjk s;lfkgj ",
      INSIGHT: "kdjg;sd lfjk s;lfkgj "
    },
    _id: '2020-03-25T15:08:47.530Z',
    _rev: '1',
    hasBeenRead: false
  }
]
