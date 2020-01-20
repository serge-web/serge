/* global it expect */

import plannedModePopupFor from '../../Components/Mapping/helpers/plannedModePopupFor'

const assetMock = {
  name: 'name test',
  state: 'state test',
  platformTypeDetail: 'type test',
  platformSpeeds: [1, 2, 3]
}
it('Outputs the correct name for the asset', () => {
  expect(plannedModePopupFor(assetMock)).toEqual('<b>name test</b><br/>Proposed State:<fieldset id="state"><ul></ul>Proposed Speed:<ul><li><input name="speed" type="radio" name="vehicle3" >1</input><br/></li><li><input name="speed" type="radio" name="vehicle3" >2</input><br/></li><li><input name="speed" type="radio" name="vehicle3" >3</input><br/></li></ul><hr/><input type="button" value="Reset Planned Route"><input type="button" value="Save">')
})
