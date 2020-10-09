/* global it expect */
import assetDialogFor from './asset-dialog-for'
import { Phase } from '@serge/config'

it('provides the correct when planning my force', () => {
  expect(assetDialogFor('Blue', 'Blue', [], [], Phase.Planning)).toEqual('Planning')
})

it('provides the correct when planning my force', () => {
  expect(assetDialogFor('blue', 'Blue', [], [], Phase.Planning)).toEqual('Planning')
})

it('provides the correct when planning other force I can percieve', () => {
  expect(assetDialogFor('Blue', 'Red', ['blue'], [], Phase.Planning)).toEqual('PerceivedAs')
})

it('provides the correct when planning other force I cannot perceive', () => {
  expect(assetDialogFor('Blue', 'Red', [], [], Phase.Planning)).toEqual('')
})

it('provides the correct when planning other force I can control', () => {
  expect(assetDialogFor('Umpire', 'Blue', [], ['Umpire'], Phase.Planning)).toEqual('Planning')
})

it('provides the correct when planning other force umpire cant control', () => {
  expect(assetDialogFor('Umpire', 'Blue', [], [], Phase.Planning)).toEqual('')
})

it('provides the correct when click my force in adjudication', () => {
  expect(assetDialogFor('Blue', 'Blue', [], [], Phase.Adjudication)).toEqual('')
})

it('provides the correct when click my force in adjudication', () => {
  expect(assetDialogFor('Blue', 'blue', [], [], Phase.Adjudication)).toEqual('')
})

it('provides the correct when click my force in adjudication', () => {
  expect(assetDialogFor('blue', 'Blue', [], [], Phase.Adjudication)).toEqual('')
})

it('provides the correct when click my force in adjudication', () => {
  expect(assetDialogFor('Blue', 'Red', [], [], Phase.Adjudication)).toEqual('PerceivedAs')
})

it('provides the correct when umpire clicks on any platform in adjudication', () => {
  expect(assetDialogFor('Umpire', 'Red', [], [], Phase.Adjudication)).toEqual('Adjudication')
})
