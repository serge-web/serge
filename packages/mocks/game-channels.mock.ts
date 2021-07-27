import { ChannelData } from "@serge/custom-types"

const GameChannels: ChannelData[] = [
  {
    name: "Channel 16",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjpfv", templates: [] },
      { force: "Red", forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjsbv", templates: [] },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pju7l", templates: [] }],
    uniqid: "channel-k63pjit0"
  },
  {
    name: "Blue Net",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk0d3", templates: [] },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o6", templates: [] }],
    uniqid: "channel-k63pjvpb"
  },
  {
    name: "Mapping",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tifeo", templates: [] },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tij98", templates: [] },
      { force: "Red", forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tiqdf", templates: [] },
      { force: "Green", forceUniqid: "Green", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tivj5", templates: [] }],
    uniqid: "channel-k53ti36p"
  },
  {
    name: "Blue RFI",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk0d3", templates: [] },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o6", templates: [
        {
          title: 'RFI',
          _id: 'k16eedkj'
        },
        {
          title: 'Weather',
          _id: 'k16eedkh'
        }
      ] 
    }],
    uniqid: "channel-BlueRFI"
  }]

export default GameChannels
