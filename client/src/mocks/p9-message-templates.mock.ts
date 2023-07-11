import { TemplateBody } from "src/custom-types"

const p9MessageTemplatesMock: TemplateBody[] = [
  {
      "lastUpdated": "2022-11-12T19:56:51.409Z",
      "title": "Land--Transit",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "transitSpeed",
              "transitDuration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "transitSpeed": {
                  "type": "integer",
                  "title": "Transit Speed",
                  "propertyOrder": 300,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "transitDuration": {
                  "type": "string",
                  "title": "Transit Duration",
                  "propertyOrder": 301,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Land--Transit",
          "type": "object"
      },
      "completed": true,
      "_id": "Land--Transit",
      "_rev": "2022-11-12T19:56:51.409Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.409Z",
      "title": "Maritime--Transit",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "transitSpeed",
              "transitDuration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "transitSpeed": {
                  "type": "integer",
                  "title": "Transit Speed",
                  "propertyOrder": 300,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "transitDuration": {
                  "type": "string",
                  "title": "Transit Duration",
                  "propertyOrder": 301,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--Transit",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--Transit",
      "_rev": "2022-11-12T19:56:51.409Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.409Z",
      "title": "Air--Transit",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "transitSpeed",
              "transitDuration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "transitSpeed": {
                  "type": "integer",
                  "title": "Transit Speed",
                  "propertyOrder": 300,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "transitDuration": {
                  "type": "string",
                  "title": "Transit Duration",
                  "propertyOrder": 301,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Air--Transit",
          "type": "object"
      },
      "completed": true,
      "_id": "Air--Transit",
      "_rev": "2022-11-12T19:56:51.409Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.410Z",
      "title": "Land--MissileStrike",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "missileType",
              "missilesFired",
              "targetType",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "missileType": {
                  "type": "string",
                  "title": "Missile Type",
                  "propertyOrder": 302,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "missilesFired": {
                  "type": "integer",
                  "title": "Missiles Fired",
                  "propertyOrder": 303,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "targetType": {
                  "type": "string",
                  "title": "Target Type",
                  "propertyOrder": 304,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Land--MissileStrike",
          "type": "object"
      },
      "completed": true,
      "_id": "Land--MissileStrike",
      "_rev": "2022-11-12T19:56:51.410Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.411Z",
      "title": "Maritime--MissileStrike",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "missileType",
              "missilesFired",
              "targetType",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "missileType": {
                  "type": "string",
                  "title": "Missile Type",
                  "propertyOrder": 302,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "missilesFired": {
                  "type": "integer",
                  "title": "Missiles Fired",
                  "propertyOrder": 303,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "targetType": {
                  "type": "string",
                  "title": "Target Type",
                  "propertyOrder": 304,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--MissileStrike",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--MissileStrike",
      "_rev": "2022-11-12T19:56:51.411Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.412Z",
      "title": "Land--Patrol",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "patrolType",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "patrolType": {
                  "type": "string",
                  "title": "Patrol Type",
                  "propertyOrder": 305,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Land--Patrol",
          "type": "object"
      },
      "completed": true,
      "_id": "Land--Patrol",
      "_rev": "2022-11-12T19:56:51.412Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.412Z",
      "title": "Maritime--Patrol",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "patrolType",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "patrolType": {
                  "type": "string",
                  "title": "Patrol Type",
                  "propertyOrder": 305,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--Patrol",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--Patrol",
      "_rev": "2022-11-12T19:56:51.412Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.412Z",
      "title": "Air--Patrol",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "patrolType",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "patrolType": {
                  "type": "string",
                  "title": "Patrol Type",
                  "propertyOrder": 305,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Air--Patrol",
          "type": "object"
      },
      "completed": true,
      "_id": "Air--Patrol",
      "_rev": "2022-11-12T19:56:51.412Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.415Z",
      "title": "Land--Standard",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Land--Standard",
          "type": "object"
      },
      "completed": true,
      "_id": "Land--Standard",
      "_rev": "2022-11-12T19:56:51.415Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.415Z",
      "title": "Maritime--Standard",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--Standard",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--Standard",
      "_rev": "2022-11-12T19:56:51.415Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.417Z",
      "title": "Land--ISTAR",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "method",
              "duration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "method": {
                  "type": "string",
                  "title": "Observation Method",
                  "propertyOrder": 306,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 307,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Land--ISTAR",
          "type": "object"
      },
      "completed": true,
      "_id": "Land--ISTAR",
      "_rev": "2022-11-12T19:56:51.417Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.417Z",
      "title": "Maritime--ISTAR",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "method",
              "duration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "method": {
                  "type": "string",
                  "title": "Observation Method",
                  "propertyOrder": 306,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 307,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--ISTAR",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--ISTAR",
      "_rev": "2022-11-12T19:56:51.417Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.417Z",
      "title": "Air--ISTAR",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "method",
              "duration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "method": {
                  "type": "string",
                  "title": "Observation Method",
                  "propertyOrder": 306,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 307,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Air--ISTAR",
          "type": "object"
      },
      "completed": true,
      "_id": "Air--ISTAR",
      "_rev": "2022-11-12T19:56:51.417Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.418Z",
      "title": "Air--Duration",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "duration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 308,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Air--Duration",
          "type": "object"
      },
      "completed": true,
      "_id": "Air--Duration",
      "_rev": "2022-11-12T19:56:51.418Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.419Z",
      "title": "Air--TST",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "duration",
              "targetPriority",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 309,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "targetPriority": {
                  "type": "string",
                  "format": "textarea",
                  "title": "Target Type Priority",
                  "propertyOrder": 310,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Air--TST",
          "type": "object"
      },
      "completed": true,
      "_id": "Air--TST",
      "_rev": "2022-11-12T19:56:51.419Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.420Z",
      "title": "Maritime--MineLaying",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "duration",
              "density",
              "covert",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 311,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "density": {
                  "type": "integer",
                  "title": "Minefield Priority",
                  "propertyOrder": 312,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "covert": {
                  "type": "boolean",
                  "title": "Covert",
                  "format": "checkbox",
                  "propertyOrder": 313,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--MineLaying",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--MineLaying",
      "_rev": "2022-11-12T19:56:51.420Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.420Z",
      "title": "Maritime--Duration",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "duration",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 308,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--Duration",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--Duration",
      "_rev": "2022-11-12T19:56:51.420Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.421Z",
      "title": "Maritime--ASWBarrier",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "duration",
              "active",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "duration": {
                  "type": "integer",
                  "title": "Duration (hrs)",
                  "propertyOrder": 314,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "active": {
                  "type": "boolean",
                  "title": "Active?",
                  "format": "checkbox",
                  "propertyOrder": 315,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--ASWBarrier",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--ASWBarrier",
      "_rev": "2022-11-12T19:56:51.421Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.421Z",
      "title": "Air--Standard",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Air--Standard",
          "type": "object"
      },
      "completed": true,
      "_id": "Air--Standard",
      "_rev": "2022-11-12T19:56:51.421Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.423Z",
      "title": "Land--EWAttack",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "effect",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "effect": {
                  "type": "string",
                  "title": "Effect Type",
                  "propertyOrder": 316,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Land--EWAttack",
          "type": "object"
      },
      "completed": true,
      "_id": "Land--EWAttack",
      "_rev": "2022-11-12T19:56:51.423Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.423Z",
      "title": "Maritime--EWAttack",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "effect",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "effect": {
                  "type": "string",
                  "title": "Effect Type",
                  "propertyOrder": 316,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Maritime--EWAttack",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime--EWAttack",
      "_rev": "2022-11-12T19:56:51.423Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.423Z",
      "title": "Air--EWAttack",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "effect",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "effect": {
                  "type": "string",
                  "title": "Effect Type",
                  "propertyOrder": 316,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Air--EWAttack",
          "type": "object"
      },
      "completed": true,
      "_id": "Air--EWAttack",
      "_rev": "2022-11-12T19:56:51.423Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.425Z",
      "title": "Other--SOFAttack",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "activityType",
              "intendedEffect",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "activityType": {
                  "enum": [
                      "Raid",
                      "Capture/Kill",
                      "Gather Int",
                      "Deliver Errect"
                  ],
                  "title": "Activity Type",
                  "type": "string",
                  "propertyOrder": 317,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "intendedEffect": {
                  "type": "string",
                  "format": "textarea",
                  "title": "Intended Effect",
                  "propertyOrder": 318,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Other--SOFAttack",
          "type": "object"
      },
      "completed": true,
      "_id": "Other--SOFAttack",
      "_rev": "2022-11-12T19:56:51.425Z"
  },
  {
      "lastUpdated": "2022-11-12T19:56:51.425Z",
      "title": "Other--Cyber",
      "details": {
          "format": "grid",
          "required": [
              "Reference",
              "title",
              "startDate",
              "endDate",
              "activity",
              "intent",
              "ownAssets",
              "otherAssets",
              "actionsOn",
              "synchronisedWith",
              "supports",
              "activityCard",
              "activityDescription",
              "activityType",
              "intendedEffect",
              "location"
          ],
          "properties": {
              "Reference": {
                  "type": "string",
                  "title": "Reference (locked)",
                  "readonly": "readonly",
                  "propertyOrder": 10,
                  "options": {
                      "grid_columns": 2
                  }
              },
              "title": {
                  "type": "string",
                  "title": "Title",
                  "propertyOrder": 20,
                  "options": {
                      "grid_columns": 10
                  }
              },
              "startDate": {
                  "format": "serge-date",
                  "type": "string",
                  "title": "Start date",
                  "propertyOrder": 30,
                  "options": {
                      "grid_columns": 3
                  }
              },
              "endDate": {
                  "format": "serge-date",
                  "type": "string",
                  "propertyOrder": 40,
                  "title": "End date",
                  "options": {
                      "grid_columns": 3
                  }
              },
              "activity": {
                  "title": "Activity",
                  "propertyOrder": 50,
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
              "intent": {
                  "format": "textarea",
                  "title": "Intent",
                  "propertyOrder": 60,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "ownAssets": {
                  "type": "array",
                  "format": "table",
                  "minItems": 0,
                  "propertyOrder": 70,
                  "title": "Own Assets",
                  "options": {
                      "grid_columns": 6
                  },
                  "items": {
                      "type": "object",
                      "format": "grid",
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
                                  "grid_columns": 3,
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
                              "options": {
                                  "grid_columns": 2
                              },
                              "format": "number"
                          }
                      }
                  }
              },
              "otherAssets": {
                  "type": "array",
                  "propertyOrder": 80,
                  "format": "table",
                  "minItems": 0,
                  "title": "Subject(s) of orders",
                  "options": {
                      "grid_columns": 6
                  },
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
              },
              "actionsOn": {
                  "format": "textarea",
                  "title": "Actions on",
                  "propertyOrder": 90,
                  "options": {
                      "grid_columns": 12
                  },
                  "type": "string"
              },
              "synchronisedWith": {
                  "format": "text",
                  "title": "Sync with",
                  "propertyOrder": 68,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "supports": {
                  "format": "textarea",
                  "title": "Supports High-Level",
                  "propertyOrder": 110,
                  "options": {
                      "grid_columns": 6
                  },
                  "type": "string"
              },
              "activityCard": {
                  "format": "text",
                  "title": "Activity Card",
                  "propertyOrder": 120,
                  "options": {
                      "grid_columns": 4
                  },
                  "type": "string"
              },
              "activityDescription": {
                  "format": "textarea",
                  "title": "Activity Description",
                  "propertyOrder": 130,
                  "options": {
                      "grid_columns": 8
                  },
                  "type": "string"
              },
              "activityType": {
                  "type": "string",
                  "title": "Activity Type",
                  "propertyOrder": 319,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "intendedEffect": {
                  "type": "string",
                  "format": "textarea",
                  "title": "Intended Effect",
                  "propertyOrder": 320,
                  "options": {
                      "grid_columns": 4
                  }
              },
              "location": {
                  "format": "textarea",
                  "title": "Location",
                  "id": "locationArea",
                  "type": "string",
                  "readonly": "readonly",
                  "propertyOrder": 55,
                  "options": {
                      "grid_columns": 6
                  }
              }
          },
          "title": "Other--Cyber",
          "type": "object"
      },
      "completed": true,
      "_id": "Other--Cyber",
      "_rev": "2022-11-12T19:56:51.425Z"
  }
]
export default p9MessageTemplatesMock