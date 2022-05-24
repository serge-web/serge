import { LaydownTypes } from "@serge/config";
import { ForceData } from "@serge/custom-types"

const forces: ForceData[] = [
    {
        color: "#FCFBEE",
        dirty: false,
        iconURL: "default_img/umpireDefault.png",
        name: "White",
        overview: "Umpire force.",
        roles: [
          {
                roleId: 'rkr776f5e',
                canSubmitPlans: true,
                isGameControl: true,
                isInsightViewer: true,
                isObserver: true,
                name: "Game Control"
            }
        ],
        umpire: true,
        uniqid: "umpire"
    },
    {
        assets: [
            {
                comprising: [
                    {
                        condition: "Full capability",
                        contactId: "C964",
                        hosting: [
                            {
                                condition: "Full capability",
                                contactId: "C721",
                                name: "Dart 45",
                                perceptions: [
                                ],
                                platformType: "Unmanned-Airborne-Vehicle",
                                platformTypeId : 'a10',
                                uniqid: "a0pra43302"
                            },
                            {
                                condition: "Full capability",
                                contactId: "C932",
                                name: "Dart 46",
                                perceptions: [
                                ],
                                platformType: "Unmanned-Airborne-Vehicle",
                                platformTypeId : 'a10',
                                uniqid: "a0pra17943"
                            }
                        ],
                        name: "Frigate A",
                        perceptions: [
                        ],
                        platformType: "frigate",
                        platformTypeId : 'a3',
                        uniqid: "a0prbr6441"
                    },
                    {
                        condition: "Full capability",
                        contactId: "C653",
                        name: "MCM Delta",
                        perceptions: [
                        ],
                        platformType: "MCMV",
                        platformTypeId : 'a7',
                        uniqid: "a0traa6790"
                    }
                ],
                condition: "Full capability",
                contactId: "C713",
                name: "CTF 511",
                perceptions: [
                ],
                platformType: "task-group",
                platformTypeId : 'a11',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra5431"
            },
            {
                condition: "Full capability",
                contactId: "C043",
                hosting: [
                    {
                        condition: "Full capability",
                        contactId: "C572",
                        name: "Merlin",
                        perceptions: [
                        ],
                        platformType: "helicopter",
                        platformTypeId : 'a8',
                        uniqid: "a0pra11002"
                    },
                    {
                        condition: "Full capability",
                        contactId: "C591",
                        name: "Dart 42",
                        perceptions: [
                        ],
                        platformType: "Unmanned-Airborne-Vehicle",
                        platformTypeId : 'a10',
                        uniqid: "a0pra18702"
                    }
                ],
                name: "Frigate",
                perceptions: [
                ],
                platformType: "frigate",
                platformTypeId : 'a3',

                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra00001"
            },
            {
                condition: "Full capability",
                contactId: "C072",
                name: "MPA",
                perceptions: [
                ],
                platformType: "fixed-wing-aircraft",
                platformTypeId : 'a9',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra00002"
            },
            {
                condition: "Full capability",
                contactId: "C012",
                name: "Tanker",
                perceptions: [
                ],
                platformType: "merchant-vessel",
                platformTypeId : 'a13',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra00003"
            }
        ],
        color: "#00F",
        dirty: false,
        iconURL: "default_img/umpireDefault.png",
        name: "Blue",
        overview: "Blue force.",
        roles: [
          {
                roleId: 'rkr886f5e',
                canSubmitPlans: true,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "CO"
            },
          {
                roleId: 'rk888w6f6e',
                canSubmitPlans: false,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "Logistics"
            }
        ],
        umpire: false,
        uniqid: "Blue"
    },
    {
        assets: [
            {
                condition: "Full capability",
                contactId: "C065",
                locationPending: LaydownTypes.ForceLaydown,
                name: "Dhow-A",
                perceptions: [
                ],
                platformType: "fishing-vessel",
                platformTypeId : 'a1',
                uniqid: "a0pra000100"
            },
            {
                condition: "Full capability",
                contactId: "C105",
                hosting: [
                    {
                        condition: "Full capability",
                        contactId: "C158",
                        name: "Bog Draft",
                        perceptions: [
                        ],
                        platformType: "boghammer",
                        platformTypeId : 'a4',
                        uniqid: "a0pra153102"
                    }
                ],
                locationPending: LaydownTypes.ForceLaydown,
                name: "Dhow-B",
                perceptions: [
                ],
                platformType: "fishing-vessel",
                platformTypeId : 'a1',
                uniqid: "a0pra000101"
            },
            {
                condition: "Full capability",
                contactId: "C008",
                locationPending: LaydownTypes.ForceLaydown,
                name: "Dhow-C",
                perceptions: [
                ],
                platformType: "fishing-vessel",
                platformTypeId : 'a1',
                uniqid: "a0pra000102"
            },
            {
                condition: "Full capability",
                contactId: "C076",
                locationPending: LaydownTypes.ForceLaydown,
                name: "Missile-A",
                perceptions: [
                ],
                platformType: "coastal-radar-site",
                platformTypeId : 'a12',
                uniqid: "a0pra000103"
            }
        ],
        color: "#F00",
        dirty: false,
        iconURL: "default_img/umpireDefault.png",
        name: "Red",
        overview: "Red force.",
        roles: [
          {
                roleId: 'rkrlw6f99e',
                canSubmitPlans: true,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "CO"
            },
          {
                roleId: 'rkr996f5emms',
                canSubmitPlans: false,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "Comms"
            }
        ],
        umpire: false,
        uniqid: "Red"
    },
    {
        assets: [
            {
                condition: "Full capability",
                contactId: "C015",
                name: "Tanker-1",
                perceptions: [
                ],
                platformType: "merchant-vessel",
                platformTypeId : 'a13',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra000200"
            },
            {
                condition: "Full capability",
                contactId: "C081",
                name: "Tanker-2",
                perceptions: [
                ],
                platformType: "merchant-vessel",
                platformTypeId : 'a13',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra000201"
            },
            {
                condition: "Full capability",
                contactId: "C116",
                name: "Fisher-A",
                perceptions: [
                ],
                platformType: "fishing-vessel",
                platformTypeId : 'a8',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra000202"
            },
            {
                condition: "Full capability",
                contactId: "C026",
                name: "Fisher-B",
                perceptions: [
                ],
                platformType: "fishing-vessel",
                platformTypeId : 'a8',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra000203"
            },
            {
                condition: "Full capability",
                contactId: "C115",
                name: "Fisher-C",
                perceptions: [
                ],
                platformType: "fishing-vessel",
                platformTypeId : 'a8',
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra000204"
            }
        ],
        color: "#0F0",
        dirty: false,
        iconURL: "default_img/umpireDefault.png",
        name: "Green",
        overview: "Green Shipping",
        roles: [
          {
                roleId: 'rkrlaaf5e',
                canSubmitPlans: true,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "CO"
            }
        ],
        umpire: false,
        uniqid: "Green"
    }
];

export default forces