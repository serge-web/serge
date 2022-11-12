import { PerForcePlanningActivitySet } from "@serge/custom-types"

const p9activitesMock: PerForcePlanningActivitySet[]= [
    {
        "force": "f-blue",
        "groupedActivities": [
            {
                "category": "Land",
                "activities": [
                    {
                        "name": "BMD MEZ",
                        "uniqid": "f-blue-Land-BMD MEZ",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "BMD MEZ Location",
                                "optional": false,
                                "uniqid": "BMD MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-blue-Land-Ballistic Missile Strike",
                        "template": "Land--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Cruise Missile Strike",
                        "uniqid": "f-blue-Land-Cruise Missile Strike",
                        "template": "Land--MissileStrike",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-blue-Land-EW Attack",
                        "template": "Land--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-blue-Land-ISTAR",
                        "template": "Land--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-blue-Land-Patrol",
                        "template": "Land--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-blue-Land-Provide Logistics",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-blue-Land-Resupply",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "SAM MEZ",
                        "uniqid": "f-blue-Land-SAM MEZ",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "SAM MEZ Location",
                                "optional": false,
                                "uniqid": "SAM MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-blue-Land-Transit",
                        "template": "Land--Transit"
                    }
                ]
            },
            {
                "category": "Maritime",
                "activities": [
                    {
                        "name": "ASW Barrier",
                        "uniqid": "f-blue-Maritime-ASW Barrier",
                        "template": "Maritime--ASWBarrier",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ASW Barrier-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "ASW Area",
                                "optional": false,
                                "uniqid": "ASW Barrier-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ASW Barrier-2"
                            }
                        ]
                    },
                    {
                        "name": "BMD MEZ",
                        "uniqid": "f-blue-Maritime-BMD MEZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "BMD MEZ Location",
                                "optional": false,
                                "uniqid": "BMD MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-blue-Maritime-Ballistic Missile Strike",
                        "template": "Maritime--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Cruise Missile Strike",
                        "uniqid": "f-blue-Maritime-Cruise Missile Strike",
                        "template": "Maritime--MissileStrike",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-blue-Maritime-EW Attack",
                        "template": "Maritime--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "FIAC EZ",
                        "uniqid": "f-blue-Maritime-FIAC EZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "FIAC EZ-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "FIAC EZ Location",
                                "optional": false,
                                "uniqid": "FIAC EZ-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "FIAC EZ-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-blue-Maritime-ISTAR",
                        "template": "Maritime--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Mine Clearance",
                        "uniqid": "f-blue-Maritime-Mine Clearance",
                        "template": "Maritime--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Mine Clearance-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Mine Clearance Area Area",
                                "optional": false,
                                "uniqid": "Mine Clearance-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Mine Clearance-2"
                            }
                        ]
                    },
                    {
                        "name": "Mine Laying",
                        "uniqid": "f-blue-Maritime-Mine Laying",
                        "template": "Maritime--MineLaying",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Mine Laying-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Mine Area",
                                "optional": false,
                                "uniqid": "Mine Laying-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Mine Laying-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-blue-Maritime-Patrol",
                        "template": "Maritime--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-blue-Maritime-Provide Logistics",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-blue-Maritime-Resupply",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "SAM MEZ",
                        "uniqid": "f-blue-Maritime-SAM MEZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "SAM MEZ Location",
                                "optional": false,
                                "uniqid": "SAM MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-blue-Maritime-Transit",
                        "template": "Maritime--Transit"
                    }
                ]
            },
            {
                "category": "Air",
                "activities": [
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-blue-Air-Ballistic Missile Strike",
                        "template": "Air--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Defensive Counter Air",
                        "uniqid": "f-blue-Air-Defensive Counter Air",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "DCA Area",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-blue-Air-EW Attack",
                        "template": "Air--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-blue-Air-ISTAR",
                        "template": "Air--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Offensive Counter Air",
                        "uniqid": "f-blue-Air-Offensive Counter Air",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "OCA Area",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-blue-Air-Patrol",
                        "template": "Air--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-blue-Air-Provide Logistics",
                        "template": "Air--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-blue-Air-Resupply",
                        "template": "Air--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "Stand Off Strike",
                        "uniqid": "f-blue-Air-Stand Off Strike",
                        "template": "Air--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Stand Off Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Stand Off Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Stand Off Strike-2"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Stand Off Strike-3"
                            }
                        ]
                    },
                    {
                        "name": "Suppression of Air Defences (SEAD)",
                        "uniqid": "f-blue-Air-Suppression of Air Defences (SEAD)",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "TST Area",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-2"
                            }
                        ]
                    },
                    {
                        "name": "Time Sensitive Targeting (TST)",
                        "uniqid": "f-blue-Air-Time Sensitive Targeting (TST)",
                        "template": "Air--TST",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "TST Area",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-2"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-blue-Air-Transit",
                        "template": "Air--Transit"
                    }
                ]
            },
            {
                "category": "Other",
                "activities": [
                    {
                        "name": "Cyber/Space Activity",
                        "uniqid": "f-blue-Other-Cyber/Space Activity",
                        "template": "Other--Cyber",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Activity Location",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-2"
                            }
                        ]
                    },
                    {
                        "name": "SOF Activity",
                        "uniqid": "f-blue-Other-SOF Activity",
                        "template": "Other--SOFAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "SOF Activity-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Activity Location",
                                "optional": false,
                                "uniqid": "SOF Activity-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Efect Location",
                                "optional": false,
                                "uniqid": "SOF Activity-2"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "SOF Activity-3"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "force": "f-red",
        "groupedActivities": [
            {
                "category": "Land",
                "activities": [
                    {
                        "name": "BMD MEZ",
                        "uniqid": "f-red-Land-BMD MEZ",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "BMD MEZ Location",
                                "optional": false,
                                "uniqid": "BMD MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-red-Land-Ballistic Missile Strike",
                        "template": "Land--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Cruise Missile Strike",
                        "uniqid": "f-red-Land-Cruise Missile Strike",
                        "template": "Land--MissileStrike",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-red-Land-EW Attack",
                        "template": "Land--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-red-Land-ISTAR",
                        "template": "Land--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-red-Land-Patrol",
                        "template": "Land--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-red-Land-Provide Logistics",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-red-Land-Resupply",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "SAM MEZ",
                        "uniqid": "f-red-Land-SAM MEZ",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "SAM MEZ Location",
                                "optional": false,
                                "uniqid": "SAM MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-red-Land-Transit",
                        "template": "Land--Transit"
                    }
                ]
            },
            {
                "category": "Maritime",
                "activities": [
                    {
                        "name": "ASW Barrier",
                        "uniqid": "f-red-Maritime-ASW Barrier",
                        "template": "Maritime--ASWBarrier",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ASW Barrier-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "ASW Area",
                                "optional": false,
                                "uniqid": "ASW Barrier-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ASW Barrier-2"
                            }
                        ]
                    },
                    {
                        "name": "BMD MEZ",
                        "uniqid": "f-red-Maritime-BMD MEZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "BMD MEZ Location",
                                "optional": false,
                                "uniqid": "BMD MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-red-Maritime-Ballistic Missile Strike",
                        "template": "Maritime--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Cruise Missile Strike",
                        "uniqid": "f-red-Maritime-Cruise Missile Strike",
                        "template": "Maritime--MissileStrike",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-red-Maritime-EW Attack",
                        "template": "Maritime--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "FIAC EZ",
                        "uniqid": "f-red-Maritime-FIAC EZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "FIAC EZ-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "FIAC EZ Location",
                                "optional": false,
                                "uniqid": "FIAC EZ-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "FIAC EZ-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-red-Maritime-ISTAR",
                        "template": "Maritime--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Mine Clearance",
                        "uniqid": "f-red-Maritime-Mine Clearance",
                        "template": "Maritime--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Mine Clearance-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Mine Clearance Area Area",
                                "optional": false,
                                "uniqid": "Mine Clearance-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Mine Clearance-2"
                            }
                        ]
                    },
                    {
                        "name": "Mine Laying",
                        "uniqid": "f-red-Maritime-Mine Laying",
                        "template": "Maritime--MineLaying",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Mine Laying-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Mine Area",
                                "optional": false,
                                "uniqid": "Mine Laying-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Mine Laying-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-red-Maritime-Patrol",
                        "template": "Maritime--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-red-Maritime-Provide Logistics",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-red-Maritime-Resupply",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "SAM MEZ",
                        "uniqid": "f-red-Maritime-SAM MEZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "SAM MEZ Location",
                                "optional": false,
                                "uniqid": "SAM MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-red-Maritime-Transit",
                        "template": "Maritime--Transit"
                    }
                ]
            },
            {
                "category": "Air",
                "activities": [
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-red-Air-Ballistic Missile Strike",
                        "template": "Air--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Defensive Counter Air",
                        "uniqid": "f-red-Air-Defensive Counter Air",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "DCA Area",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-red-Air-EW Attack",
                        "template": "Air--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-red-Air-ISTAR",
                        "template": "Air--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Offensive Counter Air",
                        "uniqid": "f-red-Air-Offensive Counter Air",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "OCA Area",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-red-Air-Patrol",
                        "template": "Air--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-red-Air-Provide Logistics",
                        "template": "Air--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-red-Air-Resupply",
                        "template": "Air--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "Stand Off Strike",
                        "uniqid": "f-red-Air-Stand Off Strike",
                        "template": "Air--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Stand Off Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Stand Off Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Stand Off Strike-2"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Stand Off Strike-3"
                            }
                        ]
                    },
                    {
                        "name": "Suppression of Air Defences (SEAD)",
                        "uniqid": "f-red-Air-Suppression of Air Defences (SEAD)",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "TST Area",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-2"
                            }
                        ]
                    },
                    {
                        "name": "Time Sensitive Targeting (TST)",
                        "uniqid": "f-red-Air-Time Sensitive Targeting (TST)",
                        "template": "Air--TST",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "TST Area",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-2"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-red-Air-Transit",
                        "template": "Air--Transit"
                    }
                ]
            },
            {
                "category": "Other",
                "activities": [
                    {
                        "name": "Cyber/Space Activity",
                        "uniqid": "f-red-Other-Cyber/Space Activity",
                        "template": "Other--Cyber",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Activity Location",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-2"
                            }
                        ]
                    },
                    {
                        "name": "SOF Activity",
                        "uniqid": "f-red-Other-SOF Activity",
                        "template": "Other--SOFAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "SOF Activity-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Activity Location",
                                "optional": false,
                                "uniqid": "SOF Activity-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Efect Location",
                                "optional": false,
                                "uniqid": "SOF Activity-2"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "SOF Activity-3"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "force": "f-green",
        "groupedActivities": [
            {
                "category": "Land",
                "activities": [
                    {
                        "name": "BMD MEZ",
                        "uniqid": "f-green-Land-BMD MEZ",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "BMD MEZ Location",
                                "optional": false,
                                "uniqid": "BMD MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-green-Land-Ballistic Missile Strike",
                        "template": "Land--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Cruise Missile Strike",
                        "uniqid": "f-green-Land-Cruise Missile Strike",
                        "template": "Land--MissileStrike",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-green-Land-EW Attack",
                        "template": "Land--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-green-Land-ISTAR",
                        "template": "Land--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-green-Land-Patrol",
                        "template": "Land--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-green-Land-Provide Logistics",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-green-Land-Resupply",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "SAM MEZ",
                        "uniqid": "f-green-Land-SAM MEZ",
                        "template": "Land--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "SAM MEZ Location",
                                "optional": false,
                                "uniqid": "SAM MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-green-Land-Transit",
                        "template": "Land--Transit"
                    }
                ]
            },
            {
                "category": "Maritime",
                "activities": [
                    {
                        "name": "ASW Barrier",
                        "uniqid": "f-green-Maritime-ASW Barrier",
                        "template": "Maritime--ASWBarrier",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ASW Barrier-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "ASW Area",
                                "optional": false,
                                "uniqid": "ASW Barrier-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ASW Barrier-2"
                            }
                        ]
                    },
                    {
                        "name": "BMD MEZ",
                        "uniqid": "f-green-Maritime-BMD MEZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "BMD MEZ Location",
                                "optional": false,
                                "uniqid": "BMD MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-green-Maritime-Ballistic Missile Strike",
                        "template": "Maritime--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Cruise Missile Strike",
                        "uniqid": "f-green-Maritime-Cruise Missile Strike",
                        "template": "Maritime--MissileStrike",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Cruise Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-green-Maritime-EW Attack",
                        "template": "Maritime--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "FIAC EZ",
                        "uniqid": "f-green-Maritime-FIAC EZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "FIAC EZ-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "FIAC EZ Location",
                                "optional": false,
                                "uniqid": "FIAC EZ-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "FIAC EZ-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-green-Maritime-ISTAR",
                        "template": "Maritime--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Mine Clearance",
                        "uniqid": "f-green-Maritime-Mine Clearance",
                        "template": "Maritime--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Mine Clearance-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Mine Clearance Area Area",
                                "optional": false,
                                "uniqid": "Mine Clearance-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Mine Clearance-2"
                            }
                        ]
                    },
                    {
                        "name": "Mine Laying",
                        "uniqid": "f-green-Maritime-Mine Laying",
                        "template": "Maritime--MineLaying",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Mine Laying-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Mine Area",
                                "optional": false,
                                "uniqid": "Mine Laying-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Mine Laying-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-green-Maritime-Patrol",
                        "template": "Maritime--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-green-Maritime-Provide Logistics",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-green-Maritime-Resupply",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "SAM MEZ",
                        "uniqid": "f-green-Maritime-SAM MEZ",
                        "template": "Maritime--Standard",
                        "geometries": [
                            {
                                "aType": "Point",
                                "name": "SAM MEZ Location",
                                "optional": false,
                                "uniqid": "SAM MEZ-0"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-green-Maritime-Transit",
                        "template": "Maritime--Transit"
                    }
                ]
            },
            {
                "category": "Air",
                "activities": [
                    {
                        "name": "Ballistic Missile Strike",
                        "uniqid": "f-green-Air-Ballistic Missile Strike",
                        "template": "Air--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Ballistic Missile Strike-2"
                            }
                        ]
                    },
                    {
                        "name": "Defensive Counter Air",
                        "uniqid": "f-green-Air-Defensive Counter Air",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "DCA Area",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Defensive Counter Air-2"
                            }
                        ]
                    },
                    {
                        "name": "EW Attack",
                        "uniqid": "f-green-Air-EW Attack",
                        "template": "Air--EWAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "EW Attack-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "EW Target",
                                "optional": false,
                                "uniqid": "EW Attack-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "EW Attack-2"
                            }
                        ]
                    },
                    {
                        "name": "ISTAR",
                        "uniqid": "f-green-Air-ISTAR",
                        "template": "Air--ISTAR",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "ISTAR-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Observation Area",
                                "optional": false,
                                "uniqid": "ISTAR-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "ISTAR-2"
                            }
                        ]
                    },
                    {
                        "name": "Offensive Counter Air",
                        "uniqid": "f-green-Air-Offensive Counter Air",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "OCA Area",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Offensive Counter Air-2"
                            }
                        ]
                    },
                    {
                        "name": "Patrol",
                        "uniqid": "f-green-Air-Patrol",
                        "template": "Air--Patrol",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Patrol-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Patrol Area",
                                "optional": false,
                                "uniqid": "Patrol-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Patrol-2"
                            }
                        ]
                    },
                    {
                        "name": "Provide Logistics",
                        "uniqid": "f-green-Air-Provide Logistics",
                        "template": "Air--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Provide Logistics-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "LOGS Destination",
                                "optional": false,
                                "uniqid": "Provide Logistics-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Provide Logistics-2"
                            }
                        ]
                    },
                    {
                        "name": "Resupply",
                        "uniqid": "f-green-Air-Resupply",
                        "template": "Air--Standard",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Resupply-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Resupply Destingation",
                                "optional": false,
                                "uniqid": "Resupply-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Resupply-2"
                            }
                        ]
                    },
                    {
                        "name": "Stand Off Strike",
                        "uniqid": "f-green-Air-Stand Off Strike",
                        "template": "Air--Transit",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Stand Off Strike-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Asset Location",
                                "optional": false,
                                "uniqid": "Stand Off Strike-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Strike Target",
                                "optional": false,
                                "uniqid": "Stand Off Strike-2"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Stand Off Strike-3"
                            }
                        ]
                    },
                    {
                        "name": "Suppression of Air Defences (SEAD)",
                        "uniqid": "f-green-Air-Suppression of Air Defences (SEAD)",
                        "template": "Air--Duration",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "TST Area",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Suppression of Air Defences (SEAD)-2"
                            }
                        ]
                    },
                    {
                        "name": "Time Sensitive Targeting (TST)",
                        "uniqid": "f-green-Air-Time Sensitive Targeting (TST)",
                        "template": "Air--TST",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "TST Area",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Time Sensitive Targeting (TST)-2"
                            }
                        ]
                    },
                    {
                        "name": "Transit",
                        "uniqid": "f-green-Air-Transit",
                        "template": "Air--Transit"
                    }
                ]
            },
            {
                "category": "Other",
                "activities": [
                    {
                        "name": "Cyber/Space Activity",
                        "uniqid": "f-green-Other-Cyber/Space Activity",
                        "template": "Other--Cyber",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Activity Location",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-1"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "Cyber/Space Activity-2"
                            }
                        ]
                    },
                    {
                        "name": "SOF Activity",
                        "uniqid": "f-green-Other-SOF Activity",
                        "template": "Other--SOFAttack",
                        "geometries": [
                            {
                                "aType": "Polyline",
                                "name": "Route out",
                                "optional": false,
                                "uniqid": "SOF Activity-0"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Activity Location",
                                "optional": false,
                                "uniqid": "SOF Activity-1"
                            },
                            {
                                "aType": "Polygon",
                                "name": "Efect Location",
                                "optional": false,
                                "uniqid": "SOF Activity-2"
                            },
                            {
                                "aType": "Polyline",
                                "name": "Route back",
                                "optional": false,
                                "uniqid": "SOF Activity-3"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
export default p9activitesMock