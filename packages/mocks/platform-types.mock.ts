import { ATTRIBUTE_TYPE_ENUM, ATTRIBUTE_TYPE_NUMBER } from "@serge/config"
import { PlatformTypeData } from "@serge/custom-types"

export const platformTypes: PlatformTypeData[] = [
  {
    name: 'Fishing vessel',
    conditions: [
      'Full capability',
      'Limited capability',
      'Illegally boarded',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'fishing-vessel.svg',
    speedKts: [
      10,
      20
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Fishing',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea',
    "uniqid": "a1",
    attributeTypes: [
      {
        attrType: ATTRIBUTE_TYPE_NUMBER,
        attrId: 'comm-fish',
        name: 'quota',
        description: 'fishing allowance',
        units: 'tonnes',
        editableByPlayer: false,
        defaultValue: 100
      },
      {
        attrType: ATTRIBUTE_TYPE_NUMBER,
        attrId: 'comm-fuel',
        name: 'fuel',
        description: 'fuel remaining',
        units: 'tonnes',
        editableByPlayer: false,
        format: '0.00',
        defaultValue: 5
      }
    ]
  },
  {
    name: 'ssn',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'ssn.svg',
    orientation: [{
      attribute: 'asdic-dir',
      origin: 'absolute'
    }, {}],
    speedKts: [
      10,
      20
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Evasive',
        mobile: true
      },
      {
        name: 'Aggressove',
        mobile: true
      }
    ],
    travelMode: 'sea',
    attributeTypes: [
      {
        attrType: ATTRIBUTE_TYPE_ENUM,
        attrId: 'asdic-dir',
        name: 'ASDIC',
        description: 'ASDIC orientation (absolute)',
        values: ['0', '60', '120', '180', '240', '300'],
        editableByPlayer: true,
        defaultValue: '0'
      },
      {
        attrType: ATTRIBUTE_TYPE_NUMBER,
        attrId: 'comm-battery',
        name: 'Battery',
        units: '%',
        editableByPlayer: false,
        defaultValue: 100
      },
      {
        attrType: ATTRIBUTE_TYPE_NUMBER,
        attrId: 'comm-fwd-torpedoes',
        name: 'Fwd Torpedoes',
        description: 'Number of forward torpedoes remaining',
        editableByPlayer: true,
        format: '0',
        defaultValue: 4
      },
      {
        attrType: ATTRIBUTE_TYPE_NUMBER,
        attrId: 'comm-aft-torpedoes',
        name: 'Aft Torpedoes',
        description: 'Number of aft torpedoes remaining',
        editableByPlayer: true,
        format: '0',
        defaultValue: 1
      },
      {
        attrType: ATTRIBUTE_TYPE_ENUM,
        name: "Depth",
        attrId: "ss-depth",
        description: "Depth of this asset",
        defaultValue: "Deep",
        values: ["Deep","PD","Shallow"],
        editableByPlayer: true
      }
    ],
    "uniqid": "a2"
  },
  {
    name: 'Frigate',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    attributeTypes: [
      {
        name: 'ASDIC',
        attrId: 'asdic-dir',
        description: 'ASDIC orientation (absolute)',
        defaultValue: 0,
        editableByPlayer: true,
        attrType: "AttributeTypeNumber"
      },
      {
        name: 'Battery Level',
        units: '%',
        attrId: 'fuelComm',
        defaultValue: 100,
        editableByPlayer: false,
        attrType: "AttributeTypeNumber"
      }
    ],
    icon: 'frigate.svg',
    orientation: [{}],
    speedKts: [
      10,
      20,
      30
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea',
    "uniqid": "a3"
  },
  {
    name: 'Boghammer',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'boghammer.svg',
    speedKts: [
      10,
      20,
      30,
      40
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea',
    "uniqid": "a4"
  },
  {
    name: 'torpedo',
    conditions: [
      'Full capability',
      'Limited capability',
      'Destroyed'
    ],
    icon: 'torpedo.svg',
    speedKts: [
      10
    ],
    states: [
      {
        name: 'Onboard',
        mobile: false
      },
      {
        name: 'Deploy',
        mobile: true,
        deploying: true
      },
      {
        name: 'Transiting',
        mobile: true
      }
    ],
    travelMode: 'sea',
    "uniqid": "a5"
  },
  {
    name: 'Fast attack craft',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'fast-attack-craft.svg',
    speedKts: [
      10,
      20,
      30,
      40,
      50
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea',
    "uniqid": "a6"
  },
  {
    name: 'MCMV',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'mcmv.svg',
    speedKts: [
      10
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea',
    "uniqid": "a7"
  },
  {
    name: 'Helicopter',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'helicopter.svg',
    speedKts: [],
    states: [
      {
        name: 'Airborne',
        mobile: true
      },
      {
        name: 'Landed',
        mobile: false
      },
      {
        name: 'Preparing for launch',
        mobile: false
      }
    ],
    travelMode: 'air',
    "uniqid": "a8"
  },
  {
    name: 'Fixed wing aircraft',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'fixed-wing-aircraft.svg',
    speedKts: [],
    states: [
      {
        name: 'Airborne',
        mobile: true
      },
      {
        name: 'Landed',
        mobile: false
      },
      {
        name: 'Preparing for launch',
        mobile: false
      }
    ],
    travelMode: 'air',
    "uniqid": "a9"
  },
  {
    name: 'Unmanned Airborne Vehicle',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'uas.svg',
    speedKts: [],
    states: [
      {
        name: 'Airborne',
        mobile: true
      },
      {
        name: 'Landed',
        mobile: false
      },
      {
        name: 'Preparing for launch',
        mobile: false
      }
    ],
    travelMode: 'air',
    "uniqid": "a10"
  },
  {
    name: 'Task Group',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'uas.svg',
    speedKts: [
      10,
      20
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea',
    "uniqid": "a11"
  },
  {
    name: 'Coastal radar site',
    conditions: [
      'Full capability',
      'Limited capability',
      'Destroyed'
    ],
    icon: 'coastal-radar-site.svg',
    speedKts: [
    ],
    states: [
      {
        name: 'Inactive',
        mobile: false
      },
      {
        name: 'Active',
        mobile: false
      },
      {
        name: 'Engaging',
        mobile: false
      }
    ],
    travelMode: 'land',
    "uniqid": "a12"
  },
  {
    name: 'Merchant vessel',
    conditions: [
      'Full capability',
      'Limited capability',
      'Illegally boarded',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'merchant-vessel.svg',
    speedKts: [
      10,
      20
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea',
    "uniqid": "a13"
  }, {
    "conditions": [
        "Working",
        "Inactive"
    ],
    "icon": "datum.svg",
    "name": "datum",
    "states": [
        {
            "mobile": true,
            "name": "Active"
        }
    ],
    "travelMode": "air",
    "uniqid": "a14"
  }
]

export default platformTypes
