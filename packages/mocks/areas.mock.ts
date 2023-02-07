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
    name: "area-4",
    usedBy: ["f-blue"],
    polygon: {
      "type": "Polygon",
      "coordinates": [
        [
          [
            22.3586,
            52.1575
          ],
          [
            22.35860,
            44.88566
          ],
          [
            33.45622,
            44.885665
          ],
          [
            33.45622,
            52.15751
          ],
          [
            22.3586,
            52.1575
          ]
        ]
      ]
    },
  },
  {
    name: "area-5",
    usedBy: ["f-blue"],
    polygon: {
      "type": "Polygon",
      "coordinates": [
        [
          [
            44.342709,
            41.454939
          ],
          [
            44.342709,
            35.227080
          ],
          [
            52.319515,
            35.227080
          ],
          [
            52.319515,
            41.454939
          ],
          [
            44.342709,
            41.454939
          ]
        ]
      ]
    }
  }
]

export default mockAreas
