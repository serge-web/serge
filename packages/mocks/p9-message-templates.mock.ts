import { TemplateBody } from "@serge/custom-types"

const p9MessageTemplatesMock: TemplateBody[] = [
  {
      "lastUpdated": "2022-11-12T19:21:12.283Z",
      "title": "Land-Transit",
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
          "title": "Land-Transit",
          "type": "object"
      },
      "completed": true,
      "_id": "Land-Transit",
      "_rev": "2022-11-12T19:21:12.283Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.284Z",
      "title": "Maritime-Transit",
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
          "title": "Maritime-Transit",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-Transit",
      "_rev": "2022-11-12T19:21:12.284Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.284Z",
      "title": "Air-Transit",
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
          "title": "Air-Transit",
          "type": "object"
      },
      "completed": true,
      "_id": "Air-Transit",
      "_rev": "2022-11-12T19:21:12.284Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.284Z",
      "title": "Land-Cruise Missile Strike",
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
          "title": "Land-Cruise Missile Strike",
          "type": "object"
      },
      "completed": true,
      "_id": "Land-Cruise Missile Strike",
      "_rev": "2022-11-12T19:21:12.284Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.284Z",
      "title": "Maritime-Cruise Missile Strike",
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
          "title": "Maritime-Cruise Missile Strike",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-Cruise Missile Strike",
      "_rev": "2022-11-12T19:21:12.284Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.284Z",
      "title": "Land-Patrol",
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
          "title": "Land-Patrol",
          "type": "object"
      },
      "completed": true,
      "_id": "Land-Patrol",
      "_rev": "2022-11-12T19:21:12.284Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.284Z",
      "title": "Maritime-Patrol",
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
          "title": "Maritime-Patrol",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-Patrol",
      "_rev": "2022-11-12T19:21:12.284Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.284Z",
      "title": "Air-Patrol",
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
          "title": "Air-Patrol",
          "type": "object"
      },
      "completed": true,
      "_id": "Air-Patrol",
      "_rev": "2022-11-12T19:21:12.284Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Land-SAM MEZ",
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
          "title": "Land-SAM MEZ",
          "type": "object"
      },
      "completed": true,
      "_id": "Land-SAM MEZ",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Maritime-SAM MEZ",
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
          "title": "Maritime-SAM MEZ",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-SAM MEZ",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Land-ISTAR",
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
          "title": "Land-ISTAR",
          "type": "object"
      },
      "completed": true,
      "_id": "Land-ISTAR",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Maritime-ISTAR",
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
          "title": "Maritime-ISTAR",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-ISTAR",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Air-ISTAR",
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
          "title": "Air-ISTAR",
          "type": "object"
      },
      "completed": true,
      "_id": "Air-ISTAR",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Air-Offensive Counter Air",
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
          "title": "Air-Offensive Counter Air",
          "type": "object"
      },
      "completed": true,
      "_id": "Air-Offensive Counter Air",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Air-Time Sensitive Targeting (TST)",
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
          "title": "Air-Time Sensitive Targeting (TST)",
          "type": "object"
      },
      "completed": true,
      "_id": "Air-Time Sensitive Targeting (TST)",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Maritime-Mine Laying",
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
          "title": "Maritime-Mine Laying",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-Mine Laying",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Maritime-Mine Clearance",
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
          "title": "Maritime-Mine Clearance",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-Mine Clearance",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.285Z",
      "title": "Maritime-ASW Barrier",
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
          "title": "Maritime-ASW Barrier",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-ASW Barrier",
      "_rev": "2022-11-12T19:21:12.285Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.286Z",
      "title": "Land-EW Attack",
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
          "title": "Land-EW Attack",
          "type": "object"
      },
      "completed": true,
      "_id": "Land-EW Attack",
      "_rev": "2022-11-12T19:21:12.286Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.286Z",
      "title": "Maritime-EW Attack",
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
          "title": "Maritime-EW Attack",
          "type": "object"
      },
      "completed": true,
      "_id": "Maritime-EW Attack",
      "_rev": "2022-11-12T19:21:12.286Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.286Z",
      "title": "Air-EW Attack",
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
          "title": "Air-EW Attack",
          "type": "object"
      },
      "completed": true,
      "_id": "Air-EW Attack",
      "_rev": "2022-11-12T19:21:12.286Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.286Z",
      "title": "Other-SOF Activity",
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
          "title": "Other-SOF Activity",
          "type": "object"
      },
      "completed": true,
      "_id": "Other-SOF Activity",
      "_rev": "2022-11-12T19:21:12.286Z"
  },
  {
      "lastUpdated": "2022-11-12T19:21:12.286Z",
      "title": "Other-Cyber/Space Activity",
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
          "title": "Other-Cyber/Space Activity",
          "type": "object"
      },
      "completed": true,
      "_id": "Other-Cyber/Space Activity",
      "_rev": "2022-11-12T19:21:12.286Z"
  }
]
export default p9MessageTemplatesMock