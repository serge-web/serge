import { Wargame } from "@serge/custom-types";

const p9bgame: Wargame = {
    "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
    "wargameList": [],
    "data": {
        "overview": {
            "name": "Overview - settings",
            "gameDescription": "",
            "gameTurnTime": { "unit": "millis", "millis": 43200000},
            "realtimeTurnTime": 300000,
            "timeWarning": 60000,
            "gameDate": "2022-11-11T08:43:01+01:00",
            "showAccessCodes": true,
            "logPlayerActivity": true,
            "dirty": false
        },
        "forces": {
            "selectedForce": undefined,
            "name": "Forces",
            "forces": [
                {
                    "name": "Umpire",
                    "uniqid": "umpire",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "Game Designer",
                            "roleId": "plac754x9",
                            "isGameControl": true,
                            "isObserver": true,
                            "isInsightViewer": true
                        },
                        {
                            "roleId": "adjud-1",
                            "name": "Adjudicator 1",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": true
                        },
                        {
                            "roleId": "adjud-2",
                            "name": "Adjudicator 2",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": true
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#000000",
                    "umpire": true,
                    "dirty": false
                },
                {
                    "name": "Green",
                    "uniqid": "f-green",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "CO",
                            "roleId": "green-co",
                            "isGameControl": false,
                            "isObserver": false,
                            "isInsightViewer": false
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#7ed321",
                    "umpire": false,
                    "dirty": false
                },
                {
                    "name": "Red",
                    "uniqid": "f-red",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "CO",
                            "roleId": "red-CO",
                            "isGameControl": false,
                            "isObserver": false,
                            "isInsightViewer": false
                        },
                        {
                            "roleId": "red-mar",
                            "name": "MAR",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-land",
                            "name": "Land & Fires",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-air",
                            "name": "Air & AD",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-direct",
                            "name": "Direct Action",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "red-threat",
                            "name": "Threat Network",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#ff3d43",
                    "umpire": false,
                    "dirty": false
                },
                {
                    "name": "Blue",
                    "uniqid": "f-blue",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "name": "MTG 1",
                            "roleId": "blue-mtg-1",
                            "isGameControl": false,
                            "isObserver": false,
                            "isInsightViewer": false
                        },
                        {
                            "roleId": "blue-mtg-2",
                            "name": "MTG 2",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-mtg-3",
                            "name": "MTG 3",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-sub",
                            "name": "Sub-Surface",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-aew-1",
                            "name": "AEW 1",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        },
                        {
                            "roleId": "blue-aew-2",
                            "name": "AEW 2",
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isRFIManager": false,
                            "isObserver": false
                        }
                    ],
                    "iconURL": "default_img/forceDefault.png",
                    "color": "#3dd0ff",
                    "umpire": false,
                    "dirty": false
                },
                {
                    "name": "White",
                    "uniqid": "f-white",
                    "overview": "Umpire force.",
                    "roles": [
                        {
                            "name": "CO",
                            "roleId": "white-co",
                            "isGameControl": true,
                            "isObserver": true,
                            "isInsightViewer": true
                        }
                    ],
                    "iconURL": "default_img/umpireDefault.png",
                    "color": "#FCFBEE",
                    "umpire": false,
                    "dirty": false
                }
            ],
            "dirty": false
        },
        "channels": {
            "name": "Channels",
            "channels": [
                {
                    "uniqid": "red-sme",
                    "name": "Red & SME",
                    "channelType": "ChannelChat",
                    "participants": [
                        {
                            "forceUniqid": "f-green",
                            "roles": [],
                            "subscriptionId": "hndha",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "f-red",
                            "roles": [],
                            "subscriptionId": "",
                            "pType": "ParticipantChat"
                        }
                    ]
                },
                {
                    "uniqid": "blue-sme",
                    "name": "Blue & SME",
                    "channelType": "ChannelChat",
                    "participants": [
                        {
                            "forceUniqid": "f-green",
                            "roles": [],
                            "subscriptionId": "vk8l",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "umpire",
                            "roles": [],
                            "subscriptionId": "asdf",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "umpire",
                            "roles": [
                                "adjud-1",
                                "adjud-2"
                            ],
                            "subscriptionId": "gfda",
                            "pType": "ParticipantChat"
                        },
                        {

                            "forceUniqid": "f-blue",
                            "roles": [],
                            "subscriptionId": "dsfg",
                            "pType": "ParticipantChat"
                        }
                    ]
                },
                {
                    "uniqid": "red-chat",
                    "name": "Red Chat",
                    "channelType": "ChannelChat",
                    "participants": [
                        {

                            "forceUniqid": "f-red",
                            "roles": [],
                            "subscriptionId": "asfes",
                            "pType": "ParticipantChat"
                        }
                    ]
                },
                {
                    "uniqid": "blue-chat",
                    "name": "Blue Chat",
                    "channelType": "ChannelChat",
                    "participants": [
                        {

                            "forceUniqid": "f-blue",
                            "roles": [],
                            "subscriptionId": "adst",
                            "pType": "ParticipantChat"
                        }
                    ]
                }
            ],
            "selectedChannel": "",
            "dirty": false
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
export default p9bgame;
