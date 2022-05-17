/* global it expect */
import assetDialogFor from './asset-dialog-for'
import { Phase } from '@serge/config'
import { WorldStatePanels } from '../../world-state/helpers/enums'
import { MapBarForms } from './enums'

// TODO: test logic when assetDestroyed is 'true' (last field)

it('provides the correct when planning my force', () => {
  expect(assetDialogFor('Blue', 'Blue', [], undefined, Phase.Planning, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Planning)
})

it('provides the correct when planning my force', () => {
  expect(assetDialogFor('blue', 'Blue', [], undefined, Phase.Planning, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Planning)
})

it('provides the correct when planning other force I can percieve', () => {
  expect(assetDialogFor('Blue', 'Red', ['blue'], undefined, Phase.Planning, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Perception)
})

it('provides the correct when planning other force I cannot perceive', () => {
  expect(assetDialogFor('Blue', 'Red', [], undefined, Phase.Planning, WorldStatePanels.Control, 1, false)).toEqual(undefined)
})

it('provides the correct when click my force in adjudication', () => {
  expect(assetDialogFor('Blue', 'Blue', [], undefined, Phase.Adjudication, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Planning)
})

it('provides the correct when click other force in adjudication in control tab', () => {
  expect(assetDialogFor('Blue', 'Red', [], undefined, Phase.Adjudication, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Perception)
})

it('provides the correct when click other force in adjudication in control tab', () => {
  expect(assetDialogFor('Blue', 'Red', [], undefined, Phase.Adjudication, WorldStatePanels.Visibility, 1, false)).toEqual(MapBarForms.Perception)
})

// umpire in adjudication phase

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in control tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], undefined, Phase.Adjudication, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Adjudicaton)
})

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], undefined, Phase.Adjudication, WorldStatePanels.Visibility, 1, false)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in controlled by tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], undefined, Phase.Adjudication, WorldStatePanels.ControlledBy, 1, false)).toEqual(undefined)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in turn 1 for control tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], 'Umpire', Phase.Adjudication, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Adjudicaton)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in turn zero control tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], 'Umpire', Phase.Adjudication, WorldStatePanels.Control, 0, false)).toEqual(undefined)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], 'Umpire', Phase.Adjudication, WorldStatePanels.Visibility, 1, false)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in controlled by tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], 'Umpire', Phase.Adjudication, WorldStatePanels.ControlledBy, 1, false)).toEqual(MapBarForms.Planning)
})

// umpire in planning phase

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in control tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], undefined, Phase.Planning, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], undefined, Phase.Planning, WorldStatePanels.Visibility, 1, false)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in control tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], 'Umpire', Phase.Planning, WorldStatePanels.Control, 1, false)).toEqual(MapBarForms.Planning)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], 'Umpire', Phase.Planning, WorldStatePanels.Visibility, 1, false)).toEqual(MapBarForms.Visibility)
})
