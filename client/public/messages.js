export const messages = [
  {
    name: 'Force Laydown',
    comment: 'After red has laid out its forces',
    detail: {
      type: 'ForceLaydown',
      data: {
        Red2: [
          { name: 'Dhow-A', location: 'N11' },
          { name: 'Dhow-B', location: 'N12' },
          { name: 'Dhow-C', location: 'O06' },
          { name: 'Missile-A', location: 'O07' }
        ]
      }
    }
  },
  {
    name: 'State of World 1',
    detail: {
      type: 'StateOfWorld',
      comment: 'this is the state of the world after Red force laydown has happened, and after white has sorted out initial visibility',
      data: {
        Green: [
          { name: 'Tanker-1', visibleTo: { Blue2: true, Red2: false } },
          { name: 'Tanker-2', visibleTo: { Blue2: true, Red2: false } }
        ],
        Red2: [
          { name: 'Dhow-A', location: 'N11', visibleTo: { Blue2: false } },
          { name: 'Dhow-B', location: 'N12', visibleTo: { Blue2: true } },
          { name: 'Dhow-C', location: 'O06', visibleTo: { Blue2: false } },
          { name: 'Missile-A', location: 'O07', visibleTo: { Blue2: false } }
        ],
        Blue2: [
          { name: 'Frigate', visibleTo: { Red2: true } },
          { name: 'Tanker', visibleTo: { Red2: true } }
        ]
      }
    }
  },
  {
    name: 'Blue Orders 1',
    comment: '',
    detail: {
      type: 'Orders',
      data: {
        name: 'Blue2'
      }
    }
  },
  {
    name: 'Red Orders 1',
    comment: '',
    detail: {
      type: 'Orders',
      data: {
        name: 'Red2'
      }
    }
  },
  {
    name: 'State of World 2',
    comment: 'This is after the first real resolution phase',
    detail: {
      type: 'StateOfWorld',
      data: {
        Green: [
          {
            name: 'Tanker-1',
            history: { T01: { state: 'Transitting', speed: 20, route: ['H00', 'H01', 'H02', 'H03'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 20, route: ['I04', 'I05', 'I06', 'I06'] },
              T03: { state: 'Transitting', speed: 20, route: ['I07', 'I08', 'I09', 'I10'] },
              T04: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
              T05: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
              T06: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
              T07: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
              T08: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
              T09: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
              T1O: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] }
            }
          },
          {
            name: 'Tanker-2',
            history: { T01: { state: 'Moored', speed: 0, route: ['C00'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 20, route: ['C00', 'C01', 'C02', 'C03'] },
              T03: { state: 'Transitting', speed: 20, route: ['C04', 'C05', 'C06', 'C07'] },
              T04: { state: 'Transitting', speed: 20, route: ['D07', 'E08', 'F08', 'G08'] },
              T05: { state: 'Transitting', speed: 20, route: ['H08', 'H09', 'I09', 'I10'] },
              T06: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
              T07: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
              T08: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
              T09: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
              T10: { state: 'Transitting', speed: 20, route: ['R22', 'S22', 'T22', 'U23'] }
            }
          },
          {
            name: 'Fisher-A',
            history: { T01: { state: 'Transitting', speed: 10, route: ['L02', 'K03'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 20, route: ['J03', 'I04'] },
              T03: { state: 'Fishing', speed: 0 },
              T04: { state: 'Transitting', speed: 10, route: ['I05', 'I06'] },
              T05: { state: 'Transitting', speed: 10, route: ['I07', 'I08'] },
              T06: { state: 'Fishing', speed: 0 },
              T07: { state: 'Transitting', speed: 10, route: ['J07', 'K07'] },
              T08: { state: 'Transitting', speed: 10, route: ['L06', 'M06'] },
              T09: { state: 'Fishing', speed: 0 },
              T10: { state: 'Transitting', speed: 10, route: ['M05', 'M04'] }
            }
          },
          {
            name: 'Fisher-B',
            history: { T01: { state: 'Transitting', speed: 10, route: ['M09', 'L09'] } },
            plannedTurns: {
              T02: { state: 'Fishing', speed: 0 },
              T03: { state: 'Transitting', speed: 10, route: ['K10', 'K09'] },
              T04: { state: 'Transitting', speed: 10, route: ['K08', 'K07'] },
              T05: { state: 'Transitting', speed: 10, route: ['K06', 'M06'] },
              T06: { state: 'Fishing', speed: 0 },
              T07: { state: 'Transitting', speed: 10, route: ['N06', 'N07'] },
              T08: { state: 'Transitting', speed: 10, route: ['M08', 'L08'] },
              T10: { state: 'Fishing', speed: 0 },
              T11: { state: 'Fishing', speed: 0 }
            }
          },
          {
            name: 'Fisher-C',
            history: { T01: { state: 'Transitting', speed: 10, route: ['M11', 'L10'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 20, route: ['K10', 'J09'] },
              T03: { state: 'Fishing', speed: 0 },
              T04: { state: 'Transitting', speed: 10, route: ['K08', 'K07'] },
              T05: { state: 'Transitting', speed: 10, route: ['K06', 'M06'] },
              T06: { state: 'Fishing', speed: 0 },
              T07: { state: 'Transitting', speed: 10, route: ['N06', 'N07'] },
              T08: { state: 'Transitting', speed: 10, route: ['M08', 'L08'] },
              T09: { state: 'Fishing', speed: 0 },
              T10: { state: 'Transitting', speed: 10, route: ['M09', 'N08'] }
            }
          }
        ],
        Red2: [
          {
            name: 'Dhow-A',
            history: { T01: { state: 'Transitting', speed: 10, route: ['M10', 'L10'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 10, route: ['K11', 'J11'] },
              T03: { state: 'Transitting', speed: 10, route: ['J12', 'K13'] }
            }
          },
          {
            name: 'Dhow-B',
            history: { T01: { state: 'Transitting', speed: 10, route: ['N13', 'N14'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 10, route: ['N15', 'N16'] },
              T03: { state: 'Transitting', speed: 10, route: ['N17', 'N18'] }
            }
          },
          {
            name: 'Dhow-C',
            history: { T01: { state: 'Transitting', speed: 10, route: ['N06', 'M06'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 10, route: ['L05', 'K05'] },
              T03: { state: 'Transitting', speed: 10, route: ['J05', 'IO5'] }
            }
          }
        ],
        Blue2: [
          {
            name: 'Frigate',
            history: { T01: { state: 'Transitting', speed: 20, route: ['P12', 'O21', 'O20', 'N19'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 20, route: ['019', '018', '017', 'N17'] },
              T03: { state: 'Transitting', speed: 20, route: ['M17', 'L16', 'L15', 'L14'] }
            }
          },
          {
            name: 'Tanker',
            history: { T01: { state: 'Transitting', speed: 10, route: ['S23', 'R22'] } },
            plannedTurns: {
              T02: { state: 'Transitting', speed: 10, route: ['Q22', 'P21'] },
              T03: { state: 'Transitting', speed: 10, route: ['O21', 'O20'] }
            }
          }
        ]
      }
    }
  },
  {
    name: 'Blue Orders 2',
    comment: 'Second set of blue orders, extends planned routes',
    detail: {
      type: 'Orders',
      data: {
        name: 'Blue2'
      }
    }
  },
  {
    name: 'Red Orders 2',
    comment: 'First set of red orders',
    detail: {
      type: 'Orders',
      data: {
        name: 'Red2'
      }
    }
  },
  {
    name: 'State of the World 3',
    comment: 'After the second real resolution phase',
    detail: {
      type: 'StateOfWorld',
      data: {
        Green: [
          {
            name: 'Tanker-1',
            history: {
              T01: { state: 'Transitting', speed: 20, route: ['H00', 'H01', 'H02', 'H03'] },
              T02: { state: 'Transitting', speed: 20, route: ['I04', 'I05', 'I06', 'I06'] }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 20, route: ['I07', 'I08', 'I09', 'I10'] },
              T04: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
              T05: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
              T06: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
              T07: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
              T08: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
              T09: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
              T1O: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] }
            }
          },
          {
            name: 'Tanker-2',
            history: {
              T01: { state: 'Moored', speed: 0, route: ['C00'] },
              T02: { state: 'Transitting', speed: 20, route: ['C00', 'C01', 'C02', 'C03'] }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 20, route: ['C04', 'C05', 'C06', 'C07'] },
              T04: { state: 'Transitting', speed: 20, route: ['D07', 'E08', 'F08', 'G08'] },
              T05: { state: 'Transitting', speed: 20, route: ['H08', 'H09', 'I09', 'I10'] },
              T06: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
              T07: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
              T08: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
              T09: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
              T10: { state: 'Transitting', speed: 20, route: ['R22', 'S22', 'T22', 'U23'] }
            }
          },
          {
            name: 'Fisher-A',
            history: {
              T01: { state: 'Transitting', speed: 10, route: ['L02', 'K03'] },
              T02: { state: 'Transitting', speed: 20, route: ['J03', 'I04'] }
            },
            plannedTurns: {
              T03: { state: 'Fishing', speed: 0 },
              T04: { state: 'Transitting', speed: 10, route: ['I05', 'I06'] },
              T05: { state: 'Transitting', speed: 10, route: ['I07', 'I08'] },
              T06: { state: 'Fishing', speed: 0 },
              T07: { state: 'Transitting', speed: 10, route: ['J07', 'K07'] },
              T08: { state: 'Transitting', speed: 10, route: ['L06', 'M06'] },
              T09: { state: 'Fishing', speed: 0 },
              T10: { state: 'Transitting', speed: 10, route: ['M05', 'M04'] }
            }
          },
          {
            name: 'Fisher-B',
            history: {
              T01: { state: 'Transitting', speed: 10, route: ['M09', 'L09'] },
              T02: { state: 'Fishing', speed: 0 }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 10, route: ['K10', 'K09'] },
              T04: { state: 'Transitting', speed: 10, route: ['K08', 'K07'] },
              T05: { state: 'Transitting', speed: 10, route: ['K06', 'M06'] },
              T06: { state: 'Fishing', speed: 0 },
              T07: { state: 'Transitting', speed: 10, route: ['N06', 'N07'] },
              T08: { state: 'Transitting', speed: 10, route: ['M08', 'L08'] },
              T10: { state: 'Fishing', speed: 0 },
              T11: { state: 'Fishing', speed: 0 }
            }
          },
          {
            name: 'Fisher-C',
            history: {
              T01: { state: 'Transitting', speed: 10, route: ['M11', 'L10'] },
              T02: { state: 'Transitting', speed: 20, route: ['K10', 'J09'] }
            },
            plannedTurns: {
              T03: { state: 'Fishing', speed: 0 },
              T04: { state: 'Transitting', speed: 10, route: ['K08', 'K07'] },
              T05: { state: 'Transitting', speed: 10, route: ['K06', 'M06'] },
              T06: { state: 'Fishing', speed: 0 },
              T07: { state: 'Transitting', speed: 10, route: ['N06', 'N07'] },
              T08: { state: 'Transitting', speed: 10, route: ['M08', 'L08'] },
              T09: { state: 'Fishing', speed: 0 },
              T10: { state: 'Transitting', speed: 10, route: ['M09', 'N08'] }
            }
          }
        ],
        Red2: [
          {
            name: 'Dhow-A',
            history: {
              T01: { state: 'Transitting', speed: 10, route: ['M10', 'L10'] },
              T02: { state: 'Transitting', speed: 10, route: ['K11', 'J11'] }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 10, route: ['J12', 'K13'] },
              T04: { state: 'Transitting', speed: 10, route: ['L13', 'L14'] }
            }
          },
          {
            name: 'Dhow-B',
            history: {
              T01: { state: 'Transitting', speed: 10, route: ['N13', 'N14'] },
              T02: { state: 'Transitting', speed: 10, route: ['N15', 'N16'] }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 10, route: ['N17', 'N18'] },
              T04: { state: 'Transitting', speed: 10, route: ['N19', 'N20'] }
            }
          },
          {
            name: 'Dhow-C',
            history: {
              T01: { state: 'Transitting', speed: 10, route: ['N06', 'M06'] },
              T02: { state: 'Transitting', speed: 10, route: ['L05', 'K05'] }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 10, route: ['J05', 'IO5'] },
              T04: { state: 'Transitting', speed: 10, route: ['H04', 'G04'] }
            }
          }
        ],
        Blue2: [
          {
            name: 'Frigate',
            history: {
              T01: { state: 'Transitting', speed: 20, route: ['P12', 'O21', 'O20', 'N19'] },
              T02: { state: 'Transitting', speed: 20, route: ['019', '018', '017', 'N17'] }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 20, route: ['M17', 'L16', 'L15', 'L14'] },
              T04: { state: 'Transitting', speed: 20, route: ['K15', 'L14', 'L14', 'L12'] }
            }
          },
          {
            name: 'Tanker',
            history: {
              T01: { state: 'Transitting', speed: 10, route: ['S23', 'R22'] },
              T02: { state: 'Transitting', speed: 10, route: ['Q22', 'P21'] }
            },
            plannedTurns: {
              T03: { state: 'Transitting', speed: 10, route: ['O21', 'O20'] },
              T04: { state: 'Transitting', speed: 10, route: ['019', '018'] }
            }
          }
        ]
      }
    }
  }
]
