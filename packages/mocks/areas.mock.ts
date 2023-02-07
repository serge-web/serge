import { Area } from "@serge/custom-types"

const mockAreas: Area[] = [
  {
    name: "area-1",
    usedBy: ["f-blue"],
    polygon: {
      "type": "Polygon",
      "coordinates": [
        [
          [
            42.35860,
            52.15751
          ],
          [
            42.35860,
            44.88566
          ],
          [
            53.45622,
            44.885665
          ],
          [
            53.45622,
            52.15751
          ],
          [
            42.35860,
            52.15751
          ]
        ]
      ]
    }
  },
  {
    name: "area-2",
    usedBy: ["f-blue", "f-red"],
    polygon: {
      "type": "Polygon",
      "coordinates": [
        [
          [
            32.35860,
            42.15751
          ],
          [
            32.35860,
            34.88566
          ],
          [
            43.45622,
            34.885665
          ],
          [
            43.45622,
            42.15751
          ],
          [
            32.35860,
            42.15751
          ]
        ]
      ]
    }
  },
  {
    name: "area-3",
    usedBy: ["f-blue"],
    polygon: {
      "type": "Polygon",
      "coordinates": [
        [
          [
            32.35860,
            52.15751
          ],
          [
            32.35860,
            44.88566
          ],
          [
            43.45622,
            44.885665
          ],
          [
            43.45622,
            52.15751
          ],
          [
            32.35860,
            52.15751
          ]
        ]
      ]
    }
  },
  {
    name: "area-3",
    usedBy: ["f-blue"],
    polygon: {
      "type": "Polygon",
      "coordinates": [
        [
          [
            32.3586,
            62.1575
          ],
          [
            32.35860,
            54.88566
          ],
          [
            43.45622,
            54.885665
          ],
          [
            43.45622,
            62.15751
          ],
          [
            32.3586,
            62.1575
          ]
        ]
      ]
    },
  },
  {
    name: "area-4",
    usedBy: ["f-blue"],
    polygon: {
      "type": "Polygon",
      "coordinates": [
        [
          [
            34.342709,
            41.454939
          ],
          [
            34.342709,
            35.227080
          ],
          [
            42.319515,
            35.227080
          ],
          [
            42.319515,
            41.454939
          ],
          [
            34.342709,
            41.454939
          ]
        ]
      ]
    }
  }
]

export default mockAreas
