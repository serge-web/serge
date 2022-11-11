import { Wargame } from "@serge/custom-types";

const game: Wargame = {
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
            "selectedForce": "f-blue",
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
                    "channelType": "ChannelPlanning",
                    "name": "Planning",
                    "constraints": {
                        "bounds": [
                            [
                                55,
                                22
                            ],
                            [
                                2,
                                86
                            ]
                        ],
                        "maxNativeZoom": 7,
                        "maxZoom": 7,
                        "minZoom": 3,
                        "tileLayer": {
                            "attribution": "Generated by QTiles ./arabian_sea/{z}/{x}/{y}.png ",
                            "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    },
                    "participants": [
                        {
                            "forceUniqid": "f-blue",
                            "pType": "ParticipantPlanning",
                            "roles": [],
                            "subscriptionId": "huk3qr",
                            "templates": [
                                {
                                    "_id": "k16e-maritime",
                                    "title": "Maritime Activity"
                                },
                                {
                                    "_id": "k16e-land",
                                    "title": "Land Activity"
                                },
                                {
                                    "_id": "k16e-air",
                                    "title": "Air Activity"
                                },
                                {
                                    "_id": "k16e-other",
                                    "title": "Other Activity"
                                }
                            ]
                        },
                        {
                            "forceUniqid": "f-red",
                            "pType": "ParticipantPlanning",
                            "roles": [],
                            "subscriptionId": "h123qr",
                            "templates": [
                                {
                                    "_id": "k16e-maritime",
                                    "title": "Maritime Activity"
                                },
                                {
                                    "_id": "k16e-land",
                                    "title": "Land Activity"
                                },
                                {
                                    "_id": "k16e-air",
                                    "title": "Air Activity"
                                },
                                {
                                    "_id": "k16e-other",
                                    "title": "Other Activity"
                                }
                            ]
                        },
                        {
                            "forceUniqid": "umpire",
                            "pType": "ParticipantPlanning",
                            "roles": [
                                "rkrlw6f5f"
                            ],
                            "subscriptionId": "r4y1p",
                            "templates": []
                        }
                    ],
                    "uniqid": "channel-planning"
                },

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
        },
        "platformTypes": {
            "dirty": false,
            "name": "Platform Types",
            "platformTypes": [
                {
                    "name": "Fighter",
                    "icon": "n_blue_air_fighter.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_fighter",
                    "attributeTypes": [
                        {
                            "attrId": "b_fighter_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "name": "Bomber",
                    "icon": "n_blue_air_bomber.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_bomber_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_bomber",
                    "travelMode": "air"
                },
                {
                    "name": "SAM",
                    "icon": "n_blue_land_sam.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_sam_mez",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "MEZ Range",
                            "editableByPlayer": false,
                            "name": "MEZ"
                        },
                        {
                            "attrId": "b_sam_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "MTG",
                    "icon": "n_blue_maritime_task_force.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_mtg_units",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Members of Task Group",
                            "editableByPlayer": false,
                            "name": "Units"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mtg",
                    "travelMode": "sea"
                },
                {
                    "name": "Ship",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_ship_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_ship",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine",
                    "icon": "n_blue_maritime_submarine.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_sub_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit",
                    "icon": "n_blue_land_armed_inf.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_land_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_unit",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "blue_land_asset.png",
                    "attributeTypes": [
                        {
                            "attrId": "b_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_asset",
                    "travelMode": "sea"
                },
                {
                    "name": "SSM",
                    "icon": "n_blue_land_ssm.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_ssm_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Range of asset",
                            "editableByPlayer": false,
                            "name": "range",
                            "units": "km"
                        },
                        {
                            "attrId": "b_ssm_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "b_ssm_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_ssm",
                    "travelMode": "sea"
                },
                {
                    "name": "ISTAR",
                    "icon": "n_blue_air_recce.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_istar_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 50,
                            "description": "Detection Range of asset",
                            "editableByPlayer": false,
                            "name": "Detection Range",
                            "units": "km"
                        },
                        {
                            "attrId": "b_istar_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "b_istar_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_istar",
                    "travelMode": "sea"
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_blue_air_utility.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_air_logs_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "b_air_logs_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_air_logs",
                    "travelMode": "sea"
                },
                {
                    "name": "C2 Node",
                    "icon": "n_blue_hq.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_c2_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "C2 Connections for asset",
                            "editableByPlayer": false,
                            "name": "Connections"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC",
                    "icon": "n_blue_maritime_destroyer.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_fiac_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Minefield",
                    "icon": "n_blue_maritime_minefield.svg",
                    "attributeTypes": [
                        {
                            "attrId": "b_mine_density",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Density of minefield",
                            "editableByPlayer": false,
                            "name": "density",
                            "units": "per km2"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "blue_maritime_mine",
                    "travelMode": "sea"
                },
                {
                    "name": "Fighter",
                    "icon": "n_red_air_fighter.svg",
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_fighter",
                    "attributeTypes": [
                        {
                            "attrId": "r_fighter_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "travelMode": "air"
                },
                {
                    "name": "SAM",
                    "icon": "n_red_land_sam.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_sam_mez",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "MEZ Range",
                            "editableByPlayer": false,
                            "name": "MEZ"
                        },
                        {
                            "attrId": "r_sam_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_sam",
                    "travelMode": "land"
                },
                {
                    "name": "MTG",
                    "icon": "n_red_maritime_task_force.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_mtg_units",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Members of Task Group",
                            "editableByPlayer": false,
                            "name": "Units"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mtg",
                    "travelMode": "sea"
                },
                {
                    "name": "Submarine",
                    "icon": "n_red_maritime_submarine.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_sub_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_submarine",
                    "travelMode": "sea"
                },
                {
                    "name": "Land Unit",
                    "icon": "n_red_land_armed_inf.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_land_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_unit",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "n_red_land_sam.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_asset",
                    "travelMode": "sea"
                },
                {
                    "name": "SSM",
                    "icon": "n_red_land_ssm.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_ssm_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Range of asset",
                            "editableByPlayer": false,
                            "name": "range",
                            "units": "km"
                        },
                        {
                            "attrId": "r_ssm_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "r_ssm_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_ssm",
                    "travelMode": "sea"
                },
                {
                    "name": "ISTAR",
                    "icon": "n_red_air_recce.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_istar_range",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 50,
                            "description": "Detection Range of asset",
                            "editableByPlayer": false,
                            "name": "Detection Range",
                            "units": "km"
                        },
                        {
                            "attrId": "r_istar_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "r_istar_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_istar",
                    "travelMode": "sea"
                },
                {
                    "name": "Air LOGS",
                    "icon": "n_red_air_utility.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_air_logs_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        },
                        {
                            "attrId": "r_air_logs_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Equipment carried on asset",
                            "editableByPlayer": false,
                            "name": "Equipment"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_air_logs",
                    "travelMode": "sea"
                },
                {
                    "name": "C2 Node",
                    "icon": "n_red_hq.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_c2_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "C2 Connections for asset",
                            "editableByPlayer": false,
                            "name": "Connections"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_c2",
                    "travelMode": "land"
                },
                {
                    "name": "FIAC",
                    "icon": "n_red_maritime_missile_boat.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_fiac_number",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Number of units",
                            "editableByPlayer": false,
                            "name": "number"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_fiac",
                    "travelMode": "sea"
                },
                {
                    "name": "Minefield",
                    "icon": "n_red_maritime_minefield.svg",
                    "attributeTypes": [
                        {
                            "attrId": "r_mine_density",
                            "attrType": "AttributeTypeNumber",
                            "defaultValue": 100,
                            "description": "Density of minefield",
                            "editableByPlayer": false,
                            "name": "density",
                            "units": "per km2"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_maritime_mine",
                    "travelMode": "sea"
                },
                {
                    "name": "Fixed Asset",
                    "icon": "re_land_asset.png",
                    "attributeTypes": [
                        {
                            "attrId": "r_land_asset_equipment",
                            "attrType": "AttributeTypeString",
                            "defaultValue": "",
                            "description": "Assets held by group",
                            "editableByPlayer": false,
                            "name": "Assets"
                        }
                    ],
                    "conditions": [],
                    "states": [],
                    "uniqid": "red_land_asset",
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
