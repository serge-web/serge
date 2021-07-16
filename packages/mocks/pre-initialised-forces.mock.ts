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
                canSubmitPlans: true,
                isGameControl: true,
                isInsightViewer: true,
                isObserver: true,
                name: "Game Control",
                password: "p2311"
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
                                uniqid: "a0pra43302"
                            },
                            {
                                condition: "Full capability",
                                contactId: "C932",
                                name: "Dart 46",
                                perceptions: [
                                ],
                                platformType: "Unmanned-Airborne-Vehicle",
                                uniqid: "a0pra17943"
                            }
                        ],
                        name: "Frigate A",
                        perceptions: [
                        ],
                        platformType: "frigate",
                        uniqid: "a0prbr6441"
                    },
                    {
                        condition: "Full capability",
                        contactId: "C653",
                        name: "MCM Delta",
                        perceptions: [
                        ],
                        platformType: "MCMV",
                        uniqid: "a0traa6790"
                    }
                ],
                condition: "Full capability",
                contactId: "C713",
                name: "CTF 511",
                perceptions: [
                ],
                platformType: "task-group",
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
                        uniqid: "a0pra11002"
                    },
                    {
                        condition: "Full capability",
                        contactId: "C591",
                        name: "Dart 42",
                        perceptions: [
                        ],
                        platformType: "Unmanned-Airborne-Vehicle",
                        uniqid: "a0pra18702"
                    }
                ],
                name: "Frigate",
                perceptions: [
                ],
                platformType: "frigate",
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
                canSubmitPlans: true,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "CO",
                password: "p5543"
            },
            {
                canSubmitPlans: false,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "Logistics",
                password: "plx4l7"
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
                        uniqid: "a0pra153102"
                    }
                ],
                locationPending: LaydownTypes.ForceLaydown,
                name: "Dhow-B",
                perceptions: [
                ],
                platformType: "fishing-vessel",
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
                canSubmitPlans: true,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "CO",
                password: "p3244"
            },
            {
                canSubmitPlans: false,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "Comms",
                password: "p94vxe"
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
                locationPending: LaydownTypes.UmpireLaydown,
                uniqid: "a0pra000204"
            }
        ],
        color: "#0F0",
        controlledBy: [
            "umpire"
        ],
        dirty: false,
        iconURL: "default_img/umpireDefault.png",
        name: "Green",
        overview: "Green Shipping",
        roles: [
            {
                canSubmitPlans: true,
                isGameControl: false,
                isInsightViewer: false,
                isObserver: false,
                name: "CO",
                password: "P9454"
            }
        ],
        umpire: false,
        uniqid: "Green"
    }
];

export default forces