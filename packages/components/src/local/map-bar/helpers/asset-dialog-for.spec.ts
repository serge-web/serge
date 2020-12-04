/* global it expect */
import assetDialogFor from './asset-dialog-for'
import { Phase } from '@serge/config'
import { WorldStatePanels } from '../../world-state/helpers/enums'
import { MapBarForms } from './enums'

it('provides the correct when planning my force', () => {
  expect(assetDialogFor('Blue', 'Blue', [], [], Phase.Planning, WorldStatePanels.Control)).toEqual(MapBarForms.Planning)
})

it('provides the correct when planning my force', () => {
  expect(assetDialogFor('blue', 'Blue', [], [], Phase.Planning, WorldStatePanels.Control)).toEqual(MapBarForms.Planning)
})

it('provides the correct when planning other force I can percieve', () => {
  expect(assetDialogFor('Blue', 'Red', ['blue'], [], Phase.Planning, WorldStatePanels.Control)).toEqual(MapBarForms.Perception)
})

it('provides the correct when planning other force I cannot perceive', () => {
  expect(assetDialogFor('Blue', 'Red', [], [], Phase.Planning, WorldStatePanels.Control)).toEqual(undefined)
})

it('provides the correct when click my force in adjudication', () => {
  expect(assetDialogFor('Blue', 'Blue', [], [], Phase.Adjudication, WorldStatePanels.Control)).toEqual(MapBarForms.Planning)
})

it('provides the correct when click other force in adjudication in control tab', () => {
  expect(assetDialogFor('Blue', 'Red', [], [], Phase.Adjudication, WorldStatePanels.Control)).toEqual(MapBarForms.Perception)
})

it('provides the correct when click other force in adjudication in control tab', () => {
  expect(assetDialogFor('Blue', 'Red', [], [], Phase.Adjudication, WorldStatePanels.Visibility)).toEqual(MapBarForms.Perception)
})

// umpire in adjudication phase

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in control tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], [], Phase.Adjudication, WorldStatePanels.Control)).toEqual(MapBarForms.Adjudicaton)
})

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], [], Phase.Adjudication, WorldStatePanels.Visibility)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in controlled by tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], [], Phase.Adjudication, WorldStatePanels.ControlledBy)).toEqual(undefined)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in control tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], ['Umpire'], Phase.Adjudication, WorldStatePanels.Control)).toEqual(MapBarForms.Adjudicaton)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], ['Umpire'], Phase.Adjudication, WorldStatePanels.Visibility)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in controlled by tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], ['Umpire'], Phase.Adjudication, WorldStatePanels.ControlledBy)).toEqual(MapBarForms.Planning)
})

// umpire in planning phase

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in control tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], [], Phase.Planning, WorldStatePanels.Control)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on non-controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Red', [], [], Phase.Planning, WorldStatePanels.Visibility)).toEqual(MapBarForms.Visibility)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in control tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], ['Umpire'], Phase.Planning, WorldStatePanels.Control)).toEqual(MapBarForms.Planning)
})

it('provides the correct form when umpire clicks on controlled platform in adjudication in visibility tab', () => {
  expect(assetDialogFor('Umpire', 'Green', [], ['Umpire'], Phase.Planning, WorldStatePanels.Visibility)).toEqual(MapBarForms.Visibility)
})
