import { CUSTOM_MESSAGE, CollaborativeMessageStates } from '@serge/config'
import { MessageCustom, Role } from '@serge/custom-types'
import { forces } from "./forces.mock";

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const redCO: Role = forces[2].roles[0]

export const messageDataCollaborativeEditing: MessageCustom[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      messageType: 'COA',
      timestamp: '2020-10-13T08:54:21.119Z',
      privateMessage: 'Private part of COA 3',
      collaboration: {
        status: CollaborativeMessageStates.Finalized,
        response: 'Response to RFI 3'
      }
    },
    message: {
      Reference: 'Blue-3',
      NAME: "kdjg;sd lfjk s;lfkgj ",
      LOCATION: {
        region: "Europe",
        Europe: "United Kingdom"
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
    _id: 'id_3a',
    _rev: '2',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:55:21.119Z',
      privateMessage: 'Private part of RFI 1',
      collaboration: {
        status: CollaborativeMessageStates.Closed,
        response: 'Didn\'t bother responding'
      }
    },
    message: {
      Reference: 'RED-1',
      Request: 'RFI 1 request from red goes in here',
      Title: 'RFI 1 from RED'
    },
    _rev: '1',
    _id: 'id_4',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        iconURL: 'default_img/umpireDefault.png',
        roleName: whiteGC.name,
        roleId: whiteGC.roleId
      },
      messageType: 'Chat',
      privateMessage: 'The private content goes in here',
      timestamp: '2020-10-13T08:52:40.930Z',
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        response: 'Game control response to RFI 444'
      }
    },
    message: {
      Reference: 'White-2',
      content: 'Message from White, with Private content',
      Title: 'COA from White'
    },
    _id: '2020-03-25T15:08:47.540Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
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
        status: CollaborativeMessageStates.EditDocument
      }
    },
    message: {
      Reference: 'Red-2',
      NAME: "Red 2 COA",
      LOCATION: {
        region: "Europe",
        Europe: "United Kingdom"
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
      INSIGHT: "kdjg;sd lfjk s;lfkgj "    },
    _id: '2020-03-25T15:08:47.525Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
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
        status: CollaborativeMessageStates.DocumentPending,
        response: 'Game control response to Blue-2'
      }
    },
    message: {
      Reference: 'Blue-2',
      NAME: "Blue 2 COA",
      LOCATION: {
        region: "Europe",
        Europe: "United Kingdom"
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
    hasBeenRead: false,
    isOpen: false
  }
]

export const messageDataCollaborativeResponding: MessageCustom[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:54:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.ResponsePending
      }
    },
    message: {
      Reference: 'Blue-3',
      Title: 'RFI 3 from Blue',
      RFI: "Content of RFI",
      Priority: "High",
      FAO: "J2",
      ResponseRequiredBy: "Within an hour"
    },
    _id: 'id_3a',
    _rev: '2',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.EditResponse,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      Reference: 'RED-1',
      Title: 'RFI 1 from RED',
      RFI: "Content of RFI Red-1",
      Priority: "High",
      FAO: "J2",
      ResponseRequiredBy: "Within an hour"
    },
    _rev: '1',
    _id: 'id_4',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        iconURL: 'default_img/umpireDefault.png',
        roleName: whiteGC.name,
        roleId: whiteGC.roleId
      },
      messageType: 'Chat',
      privateMessage: 'The private content goes in here',
      timestamp: '2020-10-13T08:52:40.930Z',
      collaboration: {
        status: CollaborativeMessageStates.Closed,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      Reference: 'White-2',
      content: 'Message from White, with Private content',
      Title: 'COA from White'
    },
    _id: '2020-03-25T15:08:47.540Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Red',
        forceColor: '#F00',
        roleName: redCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:52:04.394Z',
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      Reference: 'Red-2',
      Title: 'RFI 2 from Red',
      RFI: "Content of RFI-2",
      Priority: "High",
      FAO: "J2",
      ResponseRequiredBy: "Within an hour"
    },
    _id: '2020-03-25T15:08:47.525Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-ks8soryj',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: blueCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: blueCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:52:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.Released,
        response: 'Game control response to Blue-2'
      }
    },
    message: {
      Reference: 'Blue-2',
      Title: 'COA 2 from Blue',
      RFI: "Content of RFI from Blue (2)",
      Priority: "High",
      FAO: "J2",
      ResponseRequiredBy: "Within an hour"
    },
    _id: '2020-03-25T15:08:47.530Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  }
]