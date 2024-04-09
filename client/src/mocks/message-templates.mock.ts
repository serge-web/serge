import { TemplateBody } from 'src/custom-types'

const messageTemplatesMock: TemplateBody[] = [
  {
    completed: false,
    details: {
      schema: '{"title":"State of World (laydown 2)","type":"object","properties":{"completed":{"type":"boolean","title":"Completed"},"Reference":{"type":"string","title":"Reference","format":"text"},"Title":{"type":"string","title":"Title","format":"text"},"Forces":{"type":"array","title":"Forces","minItems":1,"items":{"type":"object","properties":{"force":{"type":"string","enum":["Blue","Red","Green"]}}}},"newInput1":{"title":"New Input 1","type":"string"}},"dependencies":{},"required":[]}',
      uischema: '{"completed":{"ui:widget":"checkbox"},"Reference":{"ui:placeholder":"Enter reference"},"Title":{"ui:placeholder":"Enter title"},"Forces":{"ui:options":{"orderable":false},"items":{"force":{"ui:widget":"select"}}},"ui:order":["completed","Reference","Title","Forces","newInput1"]}',
      title: 'State of World L'
    },
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'State of World L',
    _id: 'k16eedkp',
    _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Chats',
    details: {
      schema: '{"type":"object","properties":{"Chat":{"title":"Chat","type":"string"}},"dependencies":{},"required":[]}',
      uischema: '{"ui:order":["Chat"]}',
      title: 'Chat'
    },
    completed: false,
    _id: 'k16eedkl',
    _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Daily intentions',
    details: {
      schema: '{"title":"Your Form Title","type":"object","properties":{"TurnNumber":{"title":"Turn","type":"string","format":"number"},"OverallIntentions":{"title":"Overall intentions","type":"string","format":"textarea"},"Orders":{"type":"array","title":"Orders","format":"table","minItems":1,"items":{"type":"object","properties":{"Unit":{"title":"Unit","type":"string","format":"text"},"Tasking":{"title":"Tasking","type":"string","format":"textarea"},"SearchPolicy":{"title":"Search Policy","type":"string","format":"textarea"},"ActionOnContact":{"title":"Action on Contact","type":"string","enum":["Ignore","Evade","Covert Trail","Overt Trail","Harass"]},"AnyOtherComments":{"title":"Any other comments","type":"string","format":"textarea"}}}}}}',
      uischema: ' {"TurnNumber":{"ui:placeholder":"Enter turn number"},"OverallIntentions":{"ui:placeholder":"Enter overall intentions"},"Orders":{"ui:options":{"orderable":false},"items":{"Unit":{"ui:placeholder":"Enter unit"},"Tasking":{"ui:placeholder":"Enter tasking"},"SearchPolicy":{"ui:placeholder":"Enter search policy"},"ActionOnContact":{"ui:placeholder":"Select action on contact"},"AnyOtherComments":{"ui:placeholder":"Enter any other comments"}}}}',
      title: 'Daily Intent'
    },
    completed: false,
    _id: 'k16eedkn',
    _rev: '1-cc8e8cdb01447959c266761066448382'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Link',
    details: {
      title: 'Link',
      schema: '{"title":"Link","type":"object","properties":{"lastUpdated":{"type":"string","format":"date-time"},"details":{"type":"object","title":"Link","properties":{"Title":{"type":"string","format":"text"},"URL":{"type":"string","format":"url"}},"format":"grid"},"completed":{"type":"boolean"},"_id":{"type":"string"},"_rev":{"type":"string"}}}',
      uischema: '{"lastUpdated":{"ui:widget":"datetime"},"details":{"Title":{"ui:placeholder":"Enter title"},"URL":{"ui:placeholder":"Enter URL"}}}'
    },
    completed: false,
    _id: 'k16eedkm',
    _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
  },

  {
    completed: false,
    details: {
      title: 'COA',
      schema: '{"type":"object","properties":{"Reference":{"type":"string","title":"Reference (sys generated)","readonly":true},"Title":{"type":"string","title":"*COA / Op Name","format":"textarea"},"LOCATION":{"title":"*Location of activities in this turn","type":"object","properties":{"region":{"title":"Region","type":"string","enum":["Asia Pacific","Europe","Americas"],"default":"Europe"},"Europe":{"title":"Country","type":"string","enum":["United Kingdom","Germany"],"options":{"dependencies":{"region":"Europe"}}},"Americas":{"title":"Country","type":"string","enum":["United States of America","Brazil"],"options":{"dependencies":{"region":"Americas"}}},"AsiaPacific":{"title":"Country","type":"string","enum":["India","China"],"options":{"dependencies":{"region":"Asia Pacific"}}}}},"PRESCRIPTED":{"type":"boolean","title":"*Is this a pre-scripted activity? E.g. DXP","default":true,"format":"checkbox"},"VISIBILITY":{"type":"string","title":"*Intended visibility to adversary","enum":["Overt","Covert","Clandestine","Complex"]},"COA_SUPPORTS_AS":{"type":"boolean","title":"*This COA supports / uses an AS plan / effect","default":true,"format":"checkbox"},"TARGET":{"type":"string","title":"*Target(s) – Adversary, Ally, specific audience within Adversary or allied polity etc","format":"textarea"},"STRAT_COMMS":{"type":"string","title":"Outline of associated Strategic Communications","format":"textarea"},"OBJECTIVES_TURN":{"type":"string","title":"Objectives in this turn","format":"textarea"},"OBJECTIVES_OVERALL":{"type":"string","title":"Overall Objectives","format":"textarea"},"TARGET_CENTRE_OF_GRAVITY":{"type":"string","title":"Target’s Centre of Gravity","format":"textarea"},"DESIRED_ENDSTATE_TURN":{"type":"string","title":"*Desired Endstate in this turn","format":"textarea"},"DESIRED_ENDSTATE_OVERALL":{"ui:placeholder":"Enter Desired Endstate Overall, if NOT in this turn"},"EFFECTS_AND_ACTIONS":{"ui:placeholder":"Enter Effects and actions"},"SEQUENCING_AND_PHASES":{"ui:placeholder":"Enter Sequencing and phases"},"ADVERSARY_UNDERSTANDING":{"ui:placeholder":"Enter What would my adversary see / understand of this activity / messaging?"},"ADVERSARY_REACTION_COUNTER_ACTION":{"ADVERSARY_MLCOA":{"ui:placeholder":"Enter Adversary MLCOA"},"MLCOA_RESPONSE":{"ui:placeholder":"Enter Own Response"},"ADVERSARY_MDCOA":{"ui:placeholder":"Enter Adversary MDCOA"},"MDCOA_RESPONSE":{"ui:placeholder":"Enter Own Response"}},"ORBAT":{"items":{"FEName":{"ui:placeholder":"Enter FE Name"}}},"TIMINGS":{"START_PLANNING":{"ui:placeholder":"Select Start planning date"},"START_DEPLOYMENT":{"ui:placeholder":"Select Start deployment date"},"START_OPERATION":{"ui:placeholder":"Select Start Operation date"},"END_OPERATION":{"ui:placeholder":"Select End Operation date"},"END_RECOVERY":{"ui:placeholder":"Select End recovery date"}},"DEPENDENCIES":{"ui:placeholder":"Enter Dependencies on Allied capability"},"PEER_REVIEW":{"ui:placeholder":"Enter Peer Review by"},"INSIGHT":{"ui:placeholder":"Enter Insight"}}}',
      uischema: ' {"Reference":{"ui:widget":"hidden"},"Title":{"ui:placeholder":"Enter COA / Op Name"},"LOCATION":{"region":{"ui:widget":"select"}},"PRESCRIPTED":{"ui:widget":"radio"},"VISIBILITY":{"ui:widget":"select"},"COA_SUPPORTS_AS":{"ui:widget":"radio"},"TARGET":{"ui:placeholder":"Enter Target(s)"},"STRAT_COMMS":{"ui:placeholder":"Enter Outline of associated Strategic Communications"},"OBJECTIVES_TURN":{"ui:placeholder":"Enter Objectives in this turn"},"OBJECTIVES_OVERALL":{"ui:placeholder":"Enter Overall Objectives"},"TARGET_CENTRE_OF_GRAVITY":{"ui:placeholder":"Enter Target’s Centre of Gravity"},"DESIRED_ENDSTATE_TURN":{"ui:placeholder":"Enter Desired Endstate in this turn"},"DESIRED_ENDSTATE_OVERALL":{"ui:placeholder":"Enter Desired Endstate Overall, if NOT in this turn"},"EFFECTS_AND_ACTIONS":{"ui:placeholder":"Enter Effects and actions"},"SEQUENCING_AND_PHASES":{"ui:placeholder":"Enter Sequencing and phases"},"ADVERSARY_UNDERSTANDING":{"ui:placeholder":"Enter What would my adversary see / understand of this activity / messaging?"},"ADVERSARY_REACTION_COUNTER_ACTION":{"ADVERSARY_MLCOA":{"ui:placeholder":"Enter Adversary MLCOA"},"MLCOA_RESPONSE":{"ui:placeholder":"Enter Own Response"},"ADVERSARY_MDCOA":{"ui:placeholder":"Enter Adversary MDCOA"},"MDCOA_RESPONSE":{"ui:placeholder":"Enter Own Response"}},"ORBAT":{"items":{"FEName":{"ui:placeholder":"Enter FE Name"}}},"TIMINGS":{"START_PLANNING":{"ui:widget":"datetime"},"START_DEPLOYMENT":{"ui:widget":"datetime"},"START_OPERATION":{"ui:widget":"datetime"},"END_OPERATION":{"ui:widget":"datetime"},"END_RECOVERY":{"ui:widget":"datetime"}},"CONTINUES_INTO_NEXT_TURN":{"ui:widget":"radio"},"DEPENDENCIES":{"ui:placeholder":"Enter Dependencies on Allied capability"},"AdjudicationSupport":{"ui:widget":"checkboxes"},"PEER_REVIEW":{"ui:placeholder":"Enter Peer Review by"},"INSIGHT":{"ui:placeholder":"Enter Insight"}}'
    },
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'COA',
    _id: 'k16eedkk',
    _rev: '1-4c3969d57f8cf470858dd1819ee5c2e8'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'RFI',
    details: {
      schema: '{"type":"object","properties":{"Reference":{"type":"string","title":"Reference (sys generated)","readonly":true},"Title":{"type":"string","format":"text","title":"Title"},"RFI":{"type":"string","format":"textarea","title":"RFI"},"Priority":{"type":"string","title":"Priority","enum":["High","Medium","Low"]},"FAO":{"type":"string","title":"FAO","enum":["J2","SME – CEMA","SME – Space","SME – Logs & Med","SME – IO","SME – White","Actor – White","Actor – Red","Other"]},"ResponseRequiredBy":{"type":"string","title":"Response required by","enum":["Within an hour","NLT 1300","NLT 1600","Not urgent"]}}}',
      uischema: '{"Reference":{"ui:options":{"grid_columns":4}},"Title":{"ui:options":{"grid_columns":8}},"RFI":{"ui:options":{"grid_columns":12}}}',
      title: 'RFI'
    },
    completed: false,
    _id: 'k16eedkj',
    _rev: '1-683379b9418a2ba688eb4a8dfec4de11'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Message',
    details: {
      schema: '{"type":"object","properties":{"title":{"type":"string"},"content":{"type":"string","format":"textarea"}}}',
      uischema: '{"title":{"ui:placeholder":"Enter title"},"content":{"ui:placeholder":"Enter content"}}',
      title: 'Message'
    },
    completed: false,
    _id: 'k16eedki',
    _rev: '1-7de33e447b392eeaf7164f4ec331bc57'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Weather forecast',
    details: {
      schema: '{"type":"object","properties":{"title":{"type":"string","title":"Title"},"Location":{"type":"object","properties":{"Lat":{"type":"number"},"Lat Hemi":{"type":"string","enum":["N","S"]},"Long":{"type":"number"},"Long Hemi":{"type":"string","enum":["E","W"]}},"format":"grid"},"Valid from":{"type":"string","format":"datetime-local","options":{"flatpickr":{"wrap":true,"time_24hr":true,"allowInput":true}}},"Valid until":{"type":"string","format":"datetime-local","options":{"flatpickr":{"wrap":true,"time_24hr":true,"allowInput":true}}},"Forecast":{"type":"string","format":"textarea"}}}',
      uischema: '{"title":{"ui:placeholder":"Enter title"},"Location":{"Lat":{"ui:placeholder":"Enter latitude"},"Lat Hemi":{"ui:placeholder":"N/S"},"Long":{"ui:placeholder":"Enter longitude"},"Long Hemi":{"ui:placeholder":"E/W"}},"Valid from":{"ui:placeholder":"Select valid from date and time"},"Valid until":{"ui:placeholder":"Select valid until date and time"},"Forecast":{"ui:placeholder":"Enter forecast"}}',
      title: 'Weather Forecast'
    },
    completed: false,
    _id: 'k16eedkh',
    _rev: '1-f332e0104a371b590346b66dc8e9fa2b'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.704Z',
    title: 'Machinery failure',
    details: {
      schema: ' {"type":"object","properties":{"title":{"type":"string","title":"Title"},"Date":{"type":"string","format":"datetime-local","options":{"flatpickr":{"wrap":true,"time_24hr":true,"allowInput":true}}},"Status":{"type":"string","enum":["Minor","Major","Critical"]},"Description":{"type":"string","format":"textarea"}}}',
      uischema: '{"title":{"ui:placeholder":"Enter title"},"Date":{"ui:placeholder":"Select date and time"},"Status":{"ui:placeholder":"Select status"},"Description":{"ui:placeholder":"Enter description"}}',
      title: 'Machinery Failure'
    },
    completed: false,
    _id: 'k16eedkg',
    _rev: '1-80fc0c1feca8eb6d812d3fa2068ffe89'
  },
  {
    completed: false,
    details: {
      schema: '{"title":"State of World (Full 2)","type":"object","properties":{"force":{"type":"array","minItems":1,"items":{"type":"object","properties":{"force":{"type":"string","enum":["Blue","Red","Green"],"propertyOrder":100}}}}}}',
      uischema: ' {"force":{"items":{"force":{"ui:widget":"select"}}}}',
      title: 'State of World (Full 2)'
    },
    lastUpdated: '2019-12-20T15:57:11.519Z',
    title: 'State of world (full 2)',
    _id: '2019-12-20T15:57:11.519Z',
    _rev: '1-4bd7b0b5488182f39f10d5203bb1fad8'
  }
]

export default messageTemplatesMock
