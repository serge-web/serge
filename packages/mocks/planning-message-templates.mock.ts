import { TemplateBody } from "@serge/custom-types"

const planningMessageTemplatesMock: TemplateBody[] = [
  {
    "lastUpdated": "2019-09-30T12:37:26.705Z",
    "title": "Adjudication Feedback",
    "details": {
      "$id": "https://example.com/arrays.schema.json",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "description": "Outcomes from a set of orders",
      "type": "object",
      "title": "Adjudication Outcomes",
      "format": "grid",
      "required": ["narrative"],
      "properties": {
        "Reference": {
          "title": "Reference",
          "type": "string"
        },
        "narrative": {
          "title": "General Feedback",
          "type": "string",
          "format": "textarea"
        },
        "location": {
          "title": "Location",
          "type": "string"
        },
        "perceptionOutcomes": {
          "type": "array",
          "title": "Perception Outcomes",
          "format": "table",
          "additionalProperties": false,
          "items": {
            "title": "Perception Outcome",
            "type": "object",
            "required": [
              "force",
              "asset"
            ],
            "properties": {
              "force": {
                "title": "By",
                "type": "string",
                "enum": [
                  "f-a",
                  "f-b",
                  "f-c",
                  "f-d"
                ],
                "options": {
                  "enum_titles": [
                    "Red",
                    "Blue",
                    "White",
                    "Green"  
                  ],
                  "grid_columns": 3
                }
              },
              "asset": {
                "title": "Asset",
                "type": "string",
                "enum": [
                  "ta",
                  "tb",
                  "tc",
                  "pa"
                ],
                "options": {
                  "enum_titles": [
                    "Tank A",
                    "Tank B",
                    "Tank C",
                    "Plane A"  
                  ],
                  "grid_columns": 3
                }
              },
              "perceivedForce": {
                "title": "Force",
                "type": "string",
                "enum": [
                  "Unknown",
                  "Blue",
                  "Red",
                  "Green",
                  "White"
                ],
                "options": {
                  "grid_columns": 3
                }
              },
              "perceivedType": {
                "title": "Platform Type",
                "type": "string",
                "enum": [
                  "Unknown",
                  "Tank",
                  "Frigate",
                  "Fighter",
                  "Destroyer"
                ],
                "options": {
                  "grid_columns": 3
                }
              },
              "health": {
                "title": "Health",
                "type": "string",
                "enum": [
                  "100",
                  "75",
                  "50",
                  "25",
                  "0"
                ],
                "options": {
                  "grid_columns": 3
                }
              },
              "perceivedName": {
                "title": "Name",
                "type": "string"
              },
              "narrative": {
                "title": "Comment",
                "type": "string",
                "format": "textarea"
              },
              "private": {
                "title": "Private",
                "type": "string",
                "format": "textarea"
              }

            }
          }
        },
        "healthOutcomes": {
          "type": "array",
          "format": "table",
          "title": "Health Outcomes",
          "additionalProperties": false,
          "items": {
            "title": "Health Outcome",
            "type": "object",
            "required": [
              "asset",
              "health"
            ],
            "properties": {
              "asset": {
                "title": "Asset",
                "type": "string",
                "enum": [
                  "ta",
                  "tb",
                  "tc",
                  "pa"
                ],
                "options": {
                  "enum_titles": [
                    "Tank A",
                    "Tank B",
                    "Tank C",
                    "Plane A"  
                  ],
                  "grid_columns": 3
                }
              },
              "health": {
                "title": "Condition",
                "type": "string",
                "enum": [
                  "100",
                  "75",
                  "50",
                  "25",
                  "0"
                ],
                "options": {
                  "grid_columns": 3
                }
              },
              "narrative": {
                "title": "Comment",
                "type": "string",
                "format": "textarea"
              },
              "private": {
                "title": "Private",
                "type": "string",
                "format": "textarea"
              }
            }
          }
        },
        "locationOutcomes": {
          "type": "array",
          "format": "table",
          "title": "Movement Outcomes",
          "additionalProperties": false,
          "items": {
            "title": "Movement Outcome",
            "type": "object",
            "required": [
              "asset",
              "location"
            ],
            "properties": {
              "asset": {
                "title": "Asset",
                "type": "string",
                "enum": [
                  "ta",
                  "tb",
                  "tc",
                  "pa"
                ],
                "options": {
                  "enum_titles": [
                    "Tank A",
                    "Tank B",
                    "Tank C",
                    "Plane A"  
                  ],
                  "grid_columns": 3
                }
              },
              "location": {
                "title": "Location",
                "type": "string",
                "enum": [
                  "Point A",
                  "Point B",
                  "Point C"
                ],
                "options": {
                  "grid_columns": 3
                }
              },
              "narrative": {
                "title": "Comment",
                "type": "string",
                "format": "textarea"
              },
              "private": {
                "title": "Private",
                "type": "string",
                "format": "textarea"
              }
            }
          }
        }
      }
    },
    "completed": false,
    "_id": "k16-adjud",
    "_rev": "1-7fa1e6dd6b4ac5b6afc45b596ee7af61"
  },
  {
    "lastUpdated": "2019-09-30T12:37:26.705Z",
    "title": "Link",
    "details": {
      "type": "object",
      "properties": {
        "Title": {
          "type": "string",
          "format": "text"
        },
        "URL": {
          "type": "string",
          "format": "url"
        }
      },
      "title": "Link",
      "format": "grid"
    },
    "completed": false,
    "_id": "k16eedkm",
    "_rev": "1-7fa1e6dd6b4ac5b6afc45b596ee7af61"
  },
  {
    "lastUpdated": "2019-09-30T12:37:26.705Z",
    "title": "Chat",
    "details": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "format": "textarea",
          "options": {
            "inputAttributes": {
              "placeholder": "type the text"
            }
          }
        }
      },
      "title": "Chat",
      "format": "grid"
    },
    "completed": false,
    "_id": "k16eedkl",
    "_rev": "1-09ab7a18ff677cec5d9a56f02a45788d"
  },
  {
    "completed": false,
    "details": {
      "title": "COA",
      "type": "object",
      "format": "grid",
      "required": [
        "Reference",
        "title",
        "LOCATION",
        "PRESCRIPTED",
        "VISIBILITY",
        "COA_SUPPORTS_AS",
        "TARGET",
        "STRAT_COMMS",
        "OBJECTIVES_TURN",
        "OBJECTIVES_OVERALL",
        "TARGET_CENTRE_OF_GRAVITY",
        "DESIRED_ENDSTATE_TURN",
        "DESIRED_ENDSTATE_OVERALL",
        "EFFECTS_AND_ACTIONS",
        "SEQUENCING_AND_PHASES",
        "ADVERSARY_UNDERSTANDING",
        "ADVERSARY_REACTION_COUNTER_ACTION",
        "ORBAT",
        "TIMINGS",
        "DEPENDENCIES",
        "AdjudicationSupport",
        "PEER_REVIEW",
        "INSIGHT"
      ],
      "properties": {
        "Reference": {
          "type": "string",
          "title": "Reference (sys generated)",
          "readonly": "readonly"
        },
        "title": {
          "type": "string",
          "title": "*COA / Op Name",
          "format": "textarea"
        },
        "LOCATION": {
          "title": "*Location of activities in this turn",
          "type": "object",
          "properties": {
            "region": {
              "title": "Region",
              "type": "string",
              "enum": [
                "Asia Pacific",
                "Europe",
                "Americas"
              ],
              "default": "Europe"
            },
            "Europe": {
              "title": "Country",
              "type": "string",
              "enum": [
                "United Kingdom",
                "Germany"
              ],
              "options": {
                "dependencies": {
                  "region": "Europe"
                }
              }
            },
            "Americas": {
              "title": "Country",
              "type": "string",
              "enum": [
                "United State of America",
                "Brazil"
              ],
              "options": {
                "dependencies": {
                  "region": "Americas"
                }
              }
            },
            "AsiaPacific": {
              "title": "Country",
              "type": "string",
              "enum": [
                "India",
                "China"
              ],
              "options": {
                "dependencies": {
                  "region": "Asia Pacific"
                }
              }
            }
          }
        },
        "PRESCRIPTED": {
          "type": "boolean",
          "format": "checkbox",
          "title": "*Is this a pre-scripted activity? E.g. DXP",
          "default": "Yes",
          "items": {
            "type": "string",
            "enum": [
              "Yes",
              "No"
            ]
          }
        },
        "VISIBILITY": {
          "type": "string",
          "title": "*Intended visibility to adversary",
          "enum": [
            "Overt",
            "Covert",
            "Clandestine",
            "Complex"
          ]
        },
        "COA_SUPPORTS_AS": {
          "type": "boolean",
          "format": "checkbox",
          "title": "*This COA supports / uses an AS plan / effect",
          "default": "Yes",
          "items": {
            "type": "string",
            "enum": [
              "Yes",
              "No"
            ]
          }
        },
        "TARGET": {
          "type": "string",
          "title": "*Target(s) – Adversary, Ally, specific audience within Adversary or allied polity etc",
          "format": "textarea",
          "notEmpty": true
        },
        "STRAT_COMMS": {
          "type": "string",
          "title": "Outline of associated Strategic Communications",
          "format": "textarea"
        },
        "OBJECTIVES_TURN": {
          "type": "string",
          "title": "Objectives in this turn",
          "format": "textarea"
        },
        "OBJECTIVES_OVERALL": {
          "type": "string",
          "title": "Overall Objectives",
          "format": "textarea"
        },
        "TARGET_CENTRE_OF_GRAVITY": {
          "type": "string",
          "title": "Target’s Centre of Gravity",
          "format": "textarea"
        },
        "DESIRED_ENDSTATE_TURN": {
          "type": "string",
          "title": "*Desired Endstate in this turn",
          "format": "textarea"
        },
        "DESIRED_ENDSTATE_OVERALL": {
          "type": "string",
          "title": "Desired Endstate Overall, if NOT in this turn",
          "format": "textarea"
        },
        "EFFECTS_AND_ACTIONS": {
          "type": "string",
          "title": "*Effects and actions",
          "format": "textarea"
        },
        "SEQUENCING_AND_PHASES": {
          "type": "string",
          "title": "Sequencing and phases",
          "format": "textarea"
        },
        "ADVERSARY_UNDERSTANDING": {
          "type": "string",
          "title": "What would my adversary see / understand of this activity / messaging?",
          "format": "textarea"
        },
        "ADVERSARY_REACTION_COUNTER_ACTION": {
          "properties": {
            "ADVERSARY_MLCOA": {
              "title": "Adversary MLCOA",
              "type": "string",
              "format": "textarea"
            },
            "MLCOA_RESPONSE": {
              "title": "Own Response",
              "type": "string",
              "format": "textarea"
            },
            "ADVERSARY_MDCOA": {
              "title": "Adversary MDCOA",
              "type": "string",
              "format": "textarea"
            },
            "MDCOA_RESPONSE": {
              "title": "Own Response",
              "type": "string",
              "format": "textarea"
            }
          },
          "title": "Adversary reaction & counter-action",
          "type": "object"
        },
        "ORBAT": {
          "type": "array",
          "format": "table",
          "minItems": 1,
          "title": "*ORBAT – FEs used (Inc logistics and enablers)",
          "items": {
            "type": "object",
            "title": "FE",
            "properties": {
              "FEName": {
                "type": "string",
                "title": "FE Name",
                "enum": [
                  "Tank",
                  "Infantry",
                  "Plane",
                  "Submarine",
                  "other"
                ]
              },
              "Readiness": {
                "type": "string",
                "enum": [
                  "Level-1",
                  "Level-2",
                  "Level-3",
                  "Level-4",
                  "Level-5"
                ]
              },
              "Number": {
                "type": "number"
              },
              "StartDate": {
                "type": "string",
                "title": "Start date",
                "format": "date",
                "options": {
                  "flatpickr": {
                    "wrap": false,
                    "time_24hr": true,
                    "dateFormat": "d/m/Y"
                  }
                }
              },
              "EndDate": {
                "type": "string",
                "title": "End date",
                "format": "date",
                "options": {
                  "flatpickr": {
                    "wrap": false,
                    "time_24hr": true,
                    "dateFormat": "d/m/Y"
                  }
                }
              }
            }
          }
        },
        "TIMINGS": {
          "properties": {
            "START_PLANNING": {
              "title": "Start planning",
              "type": "string",
              "format": "date",
              "options": {
                "flatpickr": {
                  "wrap": false,
                  "time_24hr": true,
                  "dateFormat": "d/m/Y"
                }
              }
            },
            "START_DEPLOYMENT": {
              "title": "Start deployment",
              "type": "string",
              "format": "date",
              "options": {
                "flatpickr": {
                  "wrap": false,
                  "time_24hr": true,
                  "dateFormat": "d/m/Y"
                }
              }
            },
            "START_OPERATION": {
              "title": "Start Operation",
              "type": "string",
              "format": "date",
              "options": {
                "flatpickr": {
                  "wrap": false,
                  "time_24hr": true,
                  "dateFormat": "d/m/Y"
                }
              }
            },
            "END_OPERATION": {
              "title": "End Operation",
              "type": "string",
              "format": "date",
              "options": {
                "flatpickr": {
                  "wrap": false,
                  "time_24hr": true,
                  "dateFormat": "d/m/Y"
                }
              }
            },
            "END_RECOVERY": {
              "title": "End recovery",
              "type": "string",
              "format": "date",
              "options": {
                "flatpickr": {
                  "wrap": false,
                  "time_24hr": true,
                  "dateFormat": "d/m/Y"
                }
              }
            }
          },
          "title": "Timings",
          "type": "object",
          "format": "grid"
        },
        "CONTINUES_INTO_NEXT_TURN": {
          "type": "boolean",
          "format": "checkbox",
          "title": "*Will this activity continue into next turn?",
          "default": "Yes",
          "items": {
            "type": "string",
            "enum": [
              "Yes",
              "No"
            ]
          }
        },
        "DEPENDENCIES": {
          "type": "string",
          "title": "Dependencies on Allied capability: Please indicate which allies (if any) and which of their capabilities you are dependent on. E.g. US Space capabilities, Allied ABO",
          "format": "textarea"
        },
        "AdjudicationSupport": {
          "type": "array",
          "format": "checkbox",
          "title": "Adjudication support",
          "uniqueItems": true,
          "items": {
            "type": "string",
            "enum": [
              "Space",
              "CEMA",
              "Influence",
              "Logistics"
            ]
          },
          "options": {
            "grid_columns": 12
          }
        },
        "PEER_REVIEW": {
          "type": "string",
          "title": "Peer Review by",
          "format": "textarea"
        },
        "INSIGHT": {
          "type": "string",
          "title": "Insight – What would you have done differently with other policies / permissions / risk appetite?",
          "format": "textarea"
        }
      }
    },
    "lastUpdated": "2019-09-30T12:37:26.705Z",
    "title": "COA",
    "_id": "k16eedkk",
    "_rev": "1-4c3969d57f8cf470858dd1819ee5c2e8"
  },
  {
    "lastUpdated": "2019-09-30T12:37:26.705Z",
    "title": "RFI",
    "details": {
      "format": "grid",
      "properties": {
        "Reference": {
          "readonly": "readonly",
          "title": "Reference (sys generated)",
          "options": {
            "grid_columns": 4
          },
          "type": "string"
        },
        "Title": {
          "format": "text",
          "options": {
            "grid_columns": 8
          },
          "title": "Title",
          "type": "string"
        },
        "RFI": {
          "format": "textarea",
          "options": {
            "grid_columns": 12
          },
          "title": "RFI",
          "type": "string"
        },
        "Priority": {
          "enum": [
            "High",
            "Medium",
            "Low"
          ],
          "title": "Priority",
          "type": "string"
        },
        "FAO": {
          "enum": [
            "J2",
            "SME – CEMA",
            "SME – Space",
            "SME – Logs & Med",
            "SME – IO",
            "SME – White",
            "Actor – White",
            "Actor – Red",
            "Other"
          ],
          "title": "FAO",
          "type": "string"
        },
        "ResponseRequiredBy": {
          "enum": [
            "Within an hour",
            "NLT 1300",
            "NLT 1600",
            "Not urgent"
          ],
          "title": "Response required by",
          "type": "string"
        }
      },
      "required": [
        "Reference",
        "Title",
        "FAO",
        "RFI",
        "Priority",
        "ResponseRequiredBy"
      ],
      "title": "RFI",
      "type": "object"
    },
    "completed": false,
    "_id": "k16eedkj",
    "_rev": "1-683379b9418a2ba688eb4a8dfec4de11"
  },
  {
    "lastUpdated": "2019-09-30T12:37:26.705Z",
    "title": "Message",
    "details": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "content": {
          "type": "string",
          "format": "textarea"
        }
      },
      "title": "Message",
      "format": "grid"
    },
    "completed": false,
    "_id": "k16eedki",
    "_rev": "1-7de33e447b392eeaf7164f4ec331bc57"
  },
  {
    "completed": false,
    "details": {
      "format": "grid",
      "properties": {
        "Reference": {
          "propertyOrder": 20,
          "type": "string"
        },
        "title": {
          "propertyOrder": 25,
          "type": "string"
        },
        "Activity": {
          "propertyOrder": 30,
          "type": "string"
        },
        "Date": {
          "propertyOrder": 40,
          "format": "datetime-local",
          "type": "string"
        },
        "Description": {
          "propertyOrder": 50,
          "format": "textarea",
          "type": "string"
        },
        "Status": {
          "propertyOrder": 60,
          "enum": [
            "Minor",
            "Major",
            "Critical"
          ],
          "type": "string"
        }
      },
      "title": "Maritime Activity",
      "type": "object"
    },
    "lastUpdated": "2022-08-30T11:53:02.969Z",
    "title": "Maritime Activity",
    "_id": "k16e-maritime",
    "_rev": "1-7de33e447b392eeaf7164f4ec331bc57"
  },
  {
    "completed": false,
    "details": {
      "format": "grid",
      "required": [
        "title",
        "description",
        "startDate",
        "endDate",
        "ownAssets",
        "otherAssets"
      ],
      "properties": {
        "title": {
          "type": "string",
          "title": "Title",
          "propertyOrder": 5,
          "options": {
            "grid_columns": 12
          }
        },
        "Reference": {
          "type": "string",
          "title": "Reference",
          "readonly": "readonly",
          "propertyOrder": 15,
          "options": {
            "grid_columns": 2
          }
        },
        "startDate": {
          "format": "serge-date",
          "type": "string",
          "title": "Start date",
          "propertyOrder": 30,
          "options": {
            "grid_columns": 2
          }
        },
        "endDate": {
          "format": "serge-date",
          "type": "string",
          "propertyOrder": 40,
          "title": "End date",
          "options": {
            "grid_columns": 2
          }
        },
        "activity": {
          "title": "Activity",
          "propertyOrder": 45,
          "readonly": "readonly",
          "type": "string",
          "enum": [
            "transit",
            "kinetic",
            "asymmetric"
          ],
          "options": {
            "grid_columns": 6,
            "enum_titles": [
              "Transit1",
              "Kinetic1",
              "Asymmetric1"
            ]
          }
        },
        "description": {
          "format": "textarea",
          "propertyOrder": 50,
          "options": {
            "grid_columns": 12
          },
          "type": "string"
        },
        "location": {
          "format": "textarea",
          "title": "Location",
          "id": "locationArea",
          "type": "string",
          "readonly": "readonly",
          "propertyOrder": 60,
          "options": {
            "grid_columns": 6
          }
        },
        "ownAssets": {
          "type": "array",
          "format": "table",
          "minItems": 0,
          "propertyOrder": 80,
          "title": "Own Assets",
          "grid_columns": 3,
          "items": {
            "type": "object",
            "title": "Asset",
            "required": [
              "asset",
              "number"
            ],
            "properties": {
              "asset": {
                "title": "Asset",
                "type": "string",
                "enum": [
                  "ta",
                  "tb",
                  "tc",
                  "pa"
                ],
                "options": {
                  "enum_titles": [
                    "Tank A",
                    "Tank B",
                    "Tank C",
                    "Plane A"
                  ]
                }
              },
              "number": {
                "title": "Quantity",
                "type": "string",
                "format": "number"
              }
            }
          }
        },
        "otherAssets": {
          "type": "array",
          "propertyOrder": 90,
          "format": "table",
          "minItems": 0,
          "title": "Subject(s) of orders",
          "grid_columns": 3,
          "items": {
            "title": "Asset",
            "type": "string",
            "enum": [
              "ra",
              "rb",
              "rc",
              "da"
            ],
            "options": {
              "enum_titles": [
                "Boat A",
                "Bike B",
                "Band C",
                "Plane A"
              ]
            }
          }
        }
      },
      "title": "Land Activity",
      "type": "object"
    },
    "lastUpdated": "2022-08-30T11:51:13.579Z",
    "title": "Land Activity",
    "_id": "k16e-land",
    "_rev": "1-7de33e447b392eeaf7164f4ec331bc57"
  },
  {
    "completed": false,
    "details": {
      "format": "grid",
      "properties": {
        "Date": {
          "format": "datetime-local",
          "type": "string"
        },
        "Description": {
          "format": "textarea",
          "type": "string"
        },
        "Status": {
          "enum": [
            "Minor",
            "Major",
            "Critical"
          ],
          "type": "string"
        },
        "title": {
          "type": "string"
        }
      },
      "title": "Air Activity",
      "type": "object"
    },
    "lastUpdated": "2022-08-30T11:53:17.485Z",
    "title": "Air Activity",
    "_id": "k16e-air",
    "_rev": "1-7de33e447b392eeaf7164f4ec331bc57"
  },
  {
    "completed": false,
    "details": {
      "format": "grid",
      "properties": {
        "Date": {
          "format": "datetime-local",
          "type": "string"
        },
        "Description": {
          "format": "textarea",
          "type": "string"
        },
        "Status": {
          "enum": [
            "Minor",
            "Major",
            "Critical"
          ],
          "type": "string"
        },
        "title": {
          "type": "string"
        }
      },
      "title": "Other Activity",
      "type": "object"
    },
    "lastUpdated": "2022-08-30T11:52:40.848Z",
    "title": "Other Activity",
    "_id": "k16e-other",
    "_rev": "1-7de33e447b392eeaf7164f4ec331bc57"
  }
]
export default planningMessageTemplatesMock