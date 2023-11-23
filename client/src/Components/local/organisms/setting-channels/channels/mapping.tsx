// import { faAt, faBorderStyle, faCaretDown, faDrawPolygon, faPlay, faSearch, faSearchMinus, faSearchPlus, faTh } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { TableFooter, TextField } from '@material-ui/core'
// import Accordion from '@material-ui/core/Accordion'
// import AccordionDetails from '@material-ui/core/AccordionDetails'
// import AccordionSummary from '@material-ui/core/AccordionSummary'
// import Paper from '@material-ui/core/Paper'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import Typography from '@material-ui/core/Typography'
// // +
// import { CONTROL_ALL } from 'src/config'
// // +
// import { Asset } from 'src/custom-types'
// // +
// import { ChannelMapping } from 'src/custom-types/channel-data'
// // +
// import { ParticipantMapping } from 'src/custom-types/participant'
// import cx from 'classnames'
// import React, { ChangeEvent, useEffect, useState } from 'react'
// // + + + + + + + + +++
// import Confirm from '../../../atoms/confirm'
// import { CustomDialog } from '../../../atoms/custom-dialog'
// import FormGroup from '../../../atoms/form-group-shadow'
// import { hexCellsInArea } from '../helpers/h3-helpers'
// import EditableRow, { EDITABLE_SELECT_ITEM, Item as RowItem } from '../../../molecules/editable-row'
// import { Option, SelectItem } from '../../../molecules/editable-row/types/props'
// import MoreInfo from '../../../molecules/more-info'
// import { defaultParticipantMapping } from '../helpers/defaultParticipant'
// import styles from '../styles.module.scss'
// import { ForceData, Role } from '../types/props'

// type MappingChannelProps = {
//   channel: ChannelMapping
//   forces: ForceData[]
//   onChange: (channel: ChannelMapping) => void
// }

// export const MappingChannel: React.FC<MappingChannelProps> = ({
//   channel,
//   forces,
//   onChange
// }) => {
//   const [localChannelUpdates, setLocalChannelUpdates] = useState(channel)
//   const [participantKey, confirmRemoveParticipant] = useState<number>(-1)
//   const [postRemoveActionConfirmed, setPostRemoveActionConfirmed] = useState<boolean>(false)
//   const [problems, setProblems] = useState<string>('')

//   useEffect(() => {
//     setLocalChannelUpdates(channel)
//   }, [channel])
  
//   console.log('mappingChannel', forces)
//   useEffect(() => {
//     onChange(localChannelUpdates)
//   }, [localChannelUpdates])

//   const renderContent = (): React.ReactNode => {
//     if (!localChannelUpdates) return null

//     const handleSaveRows = (participants: ParticipantMapping[]): void => {
//       const newChannel = { ...localChannelUpdates }
//       newChannel.participants = participants
//       setLocalChannelUpdates(newChannel)
//     }

//     const rowToParticipantMapping = (forces: ForceData[], nextItems: RowItem[], participant: ParticipantMapping): ParticipantMapping => {
//       const [force, access, controls] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]
//       const selectedForce = forces[force.active ? force.active[0] : 0]
//       const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (selectedForce.roles[key].roleId)) : []
//       const selectedControls = controls.active
//       const options = controls.options
//       const controlsValues: Array<string> | undefined = selectedControls ? selectedControls.map((key: number) => {
//         return options[key].uniqid
//       }) : []

//       return {
//         ...participant,
//         forceUniqid: selectedForce.uniqid,
//         roles,
//         controls: controlsValues
//       }
//     }

//     const generateRowItemsMapping = (forces: ForceData[], nextParticipant: ParticipantMapping, isFooter?: boolean): RowItem[] => {
//       let forceSelected: number[] = [0]
//       let roleOptions: Option[] = []
//       const additionalFields: RowItem[] = []

//       if (nextParticipant.forceUniqid) {
//         const forceIndex = forces.findIndex(force => force.uniqid === nextParticipant.forceUniqid)
//         if (forceIndex !== -1) {
//           roleOptions = forces[forceIndex].roles.map((role): Option => ({
//             name: role.name,
//             uniqid: role.name,
//             value: role
//           }))
//           forceSelected = [forceIndex]
//         }
//       }

//       const assetOptions: Option[] = []
//       /**
//        * utility function, to re-use list generation code in both cases
//        */
//       const addItem = (force: ForceData, myForce: ForceData['uniqid'], match: boolean): void => {
//         if (force.assets) {
//           if ((match && myForce === force.uniqid) || (!match && myForce !== force.uniqid)) {
//             assetOptions.push({ name: 'All unclaimed for ' + force.name, uniqid: CONTROL_ALL + force.uniqid })
//             force.assets && force.assets.forEach((asset: Asset) => {
//               assetOptions.push({ name: '- ' + force.name + ': ' + asset.name, uniqid: asset.uniqid })
//             })
//           }
//         }
//       }

//       // first own force assets
//       forces.forEach((force: ForceData) => {
//         addItem(force, nextParticipant.forceUniqid, true)
//       })

//       // now other force assets
//       forces.forEach((force: ForceData) => {
//         addItem(force, nextParticipant.forceUniqid, false)
//       })

//       // produce list of selected control entries
//       const activeControls: Array<number> = []
//       const controls = nextParticipant.controls || []
//       if (controls.length && !isFooter) {
//         assetOptions.forEach((option: Option, index: number) => {
//           if (controls.includes(option.uniqid)) {
//             activeControls.push(index)
//           }
//         })
//       }

//       // get selected roles
//       const partRoles: string[] = nextParticipant.roles
//       const activeRoles: Array<number> = partRoles && !isFooter ? partRoles.map(role => {
//         return roleOptions.findIndex(option => option.value.roleId === role)
//       }).filter(active => active !== -1) : (partRoles.length ? [0] : [])

//       // return row items
//       return [
//         {
//           active: forceSelected,
//           multiple: false,
//           options: forces,
//           uniqid: 'forces',
//           type: EDITABLE_SELECT_ITEM
//         },
//         {
//           active: activeRoles,
//           emptyTitle: 'All roles',
//           multiple: false,
//           options: roleOptions,
//           uniqid: 'access',
//           type: EDITABLE_SELECT_ITEM
//         },
//         {
//           active: activeControls,
//           emptyTitle: 'No assets',
//           multiple: true,
//           options: assetOptions,
//           uniqid: 'assets',
//           type: EDITABLE_SELECT_ITEM
//         },
//         ...additionalFields
//       ]
//     }

//     const handleChangeRow = (nextItems: RowItem[], participant: ParticipantMapping): RowItem[] => {
//       const nextParticipant = rowToParticipantMapping(forces, nextItems, participant)
//       return generateRowItemsMapping(forces, nextParticipant)
//     }

//     const handleCreateParticipant = (rowItems: RowItem[]): void => {
//       if (localChannelUpdates) {
//         handleSaveRows([
//           ...localChannelUpdates.participants,
//           rowToParticipantMapping(forces, rowItems, defaultParticipantMapping)
//         ])
//       } else {
//         console.warn('Can`t create new participant, no current channel')
//       }
//     }

//     const checkForSaveProblems = (nextItems: RowItem[]): string | undefined => {
//       const [force, roles, controls] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]
//       if (controls.active && controls.active.length > 0) {
//         // there is more than one role specified, we can't allow that
//         const entity = force.active && force.options[force.active[0]]
//         const forceName = entity ? entity.name : 'unknown force'
//         if (!roles.active || !roles.active.length) {
//           // there are zero roles provided, but we need one
//           return 'A role from ' + forceName + ' must be provided when asset control specified'
//         } else if (roles.active.length > 1) {
//           // more than one role is provided
//           return 'Only one role for ' + forceName + ' can be specified if controlling assets '
//         }
//       }
//       return undefined
//     }

//     const renderTableBody = (data: ChannelMapping): React.ReactElement[] => {
//       if (!data.participants) return [<></>]
//       return data.participants.map((participant, key) => {
//         const handleSaveRow = (row: RowItem[], pKey = -1): void => {
//           if (pKey === -1) {
//             return
//           }
//           const nextParticipants = [...data.participants]
//           const problems = checkForSaveProblems(row)
//           if (problems) {
//             return setProblems(problems)
//           } else {
//             nextParticipants[pKey] = rowToParticipantMapping(forces, row, participant)
//           }
//           handleSaveRows(nextParticipants)
//         }

//         const handleRemoveParticipant = (): void => {
//           const newItems = [...data.participants]
//           newItems.splice(participantKey, 1)
//           handleSaveRows(newItems)
//         }

//         if (postRemoveActionConfirmed && participantKey !== -1) {
//           handleRemoveParticipant()
//           setPostRemoveActionConfirmed(false)
//           confirmRemoveParticipant(-1)
//         }

//         const items = generateRowItemsMapping(forces, participant)

//         return <EditableRow
//           onRemove={(pKey = -1): void => confirmRemoveParticipant(pKey)}
//           key={participant.subscriptionId}
//           onChange={(nextItems: RowItem[]): RowItem[] => {
//             return handleChangeRow(nextItems, participant)
//           }}
//           onSave={handleSaveRow}
//           items={items}
//           defaultMode='view'
//           actions={true}
//           participantKey={key}
//           presentAsList
//         />
//       })
//     }

//     const renderTableFooter = (): React.ReactElement => {
//       const items = generateRowItemsMapping(forces, localChannelUpdates.participants[0], true)
//       return <EditableRow
//         isGenerator={true}
//         noSwitchOnReset
//         onChange={(nextItems: RowItem[]): RowItem[] => {
//           return handleChangeRow(nextItems, defaultParticipantMapping)
//         }}
//         onSave={handleCreateParticipant}
//         items={items}
//         defaultMode='edit'
//         actions
//       />
//     }

//     const renderMappingConstraints = (): React.ReactElement => {
//       const checkCellSizes = (): void => {
//         const res = localChannelUpdates.constraints.h3res
//         const bounds = localChannelUpdates.constraints.bounds
//         const numCells = hexCellsInArea(res || 5, bounds)
//         if (numCells > 100000) {
//           setProblems('Serge will struggle with more than 100,000 cells. These bounds at this res produce roughly ' + numCells + ' cells')
//         }
//       }

//       const updateMapConstraintsBounds = (value: string, key: number[]): void => {
//         const nextChannel = { ...localChannelUpdates }
//         nextChannel.constraints.bounds[key[0]][key[1]] = +value
//         setLocalChannelUpdates(nextChannel)
//         checkCellSizes()
//       }

//       const updateMapConstraintsZoom = (value: string, type: 'maxZoom' | 'minZoom' | 'maxNativeZoom'): void => {
//         const nextChannel = { ...localChannelUpdates }
//         nextChannel.constraints[type] = +value
//         setLocalChannelUpdates(nextChannel)
//       }

//       const updateMapConstraintsH3Res = (e: ChangeEvent<HTMLInputElement>): void => {
//         const nextChannel = { ...localChannelUpdates }
//         nextChannel.constraints.h3res = +e.target.value
//         setLocalChannelUpdates(nextChannel)
//         checkCellSizes()
//       }

//       const updateMapConstraintsTileLayer = (value: string, key: 'attribution' | 'url'): void => {
//         const nextChannel = { ...localChannelUpdates }
//         if (nextChannel.constraints.tileLayer) {
//           nextChannel.constraints.tileLayer[key] = value
//         }
//         setLocalChannelUpdates(nextChannel)
//       }

//       const updateMapConstraintsPolygonUrl = (e: ChangeEvent<HTMLInputElement>): void => {
//         const nextChannel = { ...localChannelUpdates }
//         nextChannel.constraints.polygonAreasURL = e.target.value
//         setLocalChannelUpdates(nextChannel)
//       }

//       const updateMapConstraintsGridCellUrl = (e: ChangeEvent<HTMLInputElement>): void => {
//         const nextChannel = { ...localChannelUpdates }
//         nextChannel.constraints.gridCellsURL = e.target.value
//         setLocalChannelUpdates(nextChannel)
//       }

//       const constraintsSummary = (): string => {
//         const tick = '\u2714'
//         const cross = '\u2717'
//         const constraints = localChannelUpdates.constraints
//         const bounds = 'Bounds:' + (constraints.bounds ? tick : cross)
//         const tiles = 'Tiles:' + (constraints.tileLayer ? tick : cross)
//         const cells = 'Cells:' + (constraints.gridCellsURL ? tick : cross)
//         return bounds + ' ' + tiles + ' ' + cells
//       }

//       const { bounds, minZoom, maxZoom, h3res, tileLayer, polygonAreasURL, gridCellsURL } = localChannelUpdates.constraints

//       return (
//         <Accordion className={styles.accordion}>
//           <AccordionSummary
//             className={styles['accordion-header']}
//             expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
//           >
//             <div className={styles['accordion-title-group']}>
//               <Typography className={styles['accordion-title']}>Proportions and Constraints</Typography>
//               <Typography className={styles['accordion-sub-title']}>{constraintsSummary()}</Typography>
//             </div>
//           </AccordionSummary>
//           <AccordionDetails className={styles['accordion-details']}>
//             <div className={styles['control-groups']}>
//               <div className={styles['mapping-item-constraints']}>
//                 <FormGroup placeholder="Bounds">
//                   <Table aria-label="Bounds">
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className={styles['constraints-cell']}></TableCell>
//                         <TableCell className={styles['constraints-cell']}>Latitude</TableCell>
//                         <TableCell className={styles['constraints-cell']}>Longtitude</TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <MoreInfo description='North West corner'><FontAwesomeIcon size='2x' icon={faBorderStyle} /></MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='number'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={bounds[0][0]}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [0, 0])}
//                           />
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='number'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={bounds[0][1]}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [0, 1])}
//                           />
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <MoreInfo description='South East corner'><FontAwesomeIcon size='2x' icon={faBorderStyle} style={{ transform: 'rotate(180deg)' }} /></MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='number'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={bounds[1][0]}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [1, 0])}
//                           />
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='number'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={bounds[1][1]}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [1, 1])}
//                           />
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </FormGroup>
//                 <FormGroup placeholder="Zoom">
//                   <Table aria-label="Zoom">
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <FontAwesomeIcon icon={faSearchMinus} />
//                         </TableCell>
//                         <TableCell className={cx(styles['constraints-cell'], styles['cell-lbl'])}>
//                           <MoreInfo description='Limit of zooming out'>Min Zoom</MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='number'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={minZoom}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsZoom(e.target.value, 'minZoom')}
//                           />
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <FontAwesomeIcon icon={faSearchPlus} />
//                         </TableCell>
//                         <TableCell className={cx(styles['constraints-cell'], styles['cell-lbl'])}>
//                           <MoreInfo description='Limit of zooming in'>Max Zoom</MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='number'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={maxZoom}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsZoom(e.target.value, 'maxZoom')}
//                           />
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <FontAwesomeIcon icon={faSearch} />
//                         </TableCell>
//                         <TableCell className={cx(styles['constraints-cell'], styles['cell-lbl'])}>
//                           <span><MoreInfo description='Maximum zoom present in tile layer. Images get scaled beyond this zoom'>Max Native</MoreInfo></span>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </FormGroup>
//                 <FormGroup placeholder="H3">
//                   <Table aria-label="H3">
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <MoreInfo description='H3 grid resolution to use. See https://h3geo.org/docs/core-library/restable/'><span style={{ fontSize: 35, display: 'block', marginBottom: 5 }}>&#x2B22;</span></MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='number'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={h3res}
//                             onInput={updateMapConstraintsH3Res}
//                           />
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </FormGroup>
//               </div>
//               <div className={cx(styles['mapping-item-constraints'], styles['col-2'])}>
//                 <FormGroup placeholder="Tile Layer">
//                   <Table aria-label="Tile Layer">
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <MoreInfo description='Tile layer attribution string (optional)'><FontAwesomeIcon size='2x' icon={faAt} /></MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='text'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={tileLayer?.attribution}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsTileLayer(e.target.value, 'attribution')}
//                           />
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <MoreInfo description='Path to tiled background images'><FontAwesomeIcon size='2x' icon={faPlay} style={{ transform: 'rotate(-90deg)' }} /></MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='text'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={tileLayer?.url}
//                             onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsTileLayer(e.target.value, 'url')}
//                           />
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </FormGroup>
//                 <FormGroup placeholder="Polygon">
//                   <Table aria-label="Polygon">
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <MoreInfo description='Path to file containing areas of coverage'><FontAwesomeIcon size='2x' icon={faDrawPolygon} /></MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='text'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={polygonAreasURL}
//                             onInput={updateMapConstraintsPolygonUrl}
//                           />
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </FormGroup>
//                 <FormGroup placeholder="Grid Cell">
//                   <Table aria-label="Grid Cell">
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
//                           <MoreInfo description='Path to file containing cell definitions (land, sea, etc)'><FontAwesomeIcon size='2x' icon={faTh} /></MoreInfo>
//                         </TableCell>
//                         <TableCell className={styles['constraints-cell']}>
//                           <TextField
//                             type='text'
//                             className={styles.input}
//                             InputProps={{ disableUnderline: true }}
//                             value={gridCellsURL}
//                             onInput={updateMapConstraintsGridCellUrl}
//                           />
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </FormGroup>
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>
//       )
//     }

//     return (
//       <div>
//         <div className={styles.row}>
//           <div className={cx(styles.col, styles.section, styles.table)}>
//             {renderMappingConstraints()}
//             <FormGroup placeholder="Participants and messages">
//               <TableContainer component={Paper}>
//                 <Table aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Force</TableCell>
//                       <TableCell align="left"><MoreInfo description='(Optionally) restrict access/control to specific roles'>Roles</MoreInfo></TableCell>
//                       <TableCell align="left"><MoreInfo description='The assets (or groups of assets) controlled by this participant'>Controls</MoreInfo></TableCell>
//                       <TableCell align="right">Actions</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {renderTableBody(localChannelUpdates)}
//                   </TableBody>
//                   <TableFooter>
//                     {renderTableFooter()}
//                   </TableFooter>
//                 </Table>
//               </TableContainer>
//             </FormGroup>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <CustomDialog
//         isOpen={!!problems}
//         header={'Error'}
//         cancelBtnText={'OK'}
//         onClose={(): void => setProblems('')}
//       >
//         <>{problems}</>
//       </CustomDialog>
//       <Confirm
//         isOpen={participantKey !== -1}
//         title="Delete Participation"
//         message="Are you sure you want to permanently delete this participation?"
//         cancelBtnText='Cancel'
//         confirmBtnText='Delete'
//         onCancel={(): void => confirmRemoveParticipant(-1)}
//         onConfirm={(): void => setPostRemoveActionConfirmed(true)}
//       />
//       {renderContent()}
//     </>
//   )
// }

// export default MappingChannel
