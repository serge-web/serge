import uniqId from "uniqid";
import moment from "moment";
import ExpiredStorage from "expired-storage";

export const serverPath = (window.G_CONFIG.REACT_APP_SERVER_PATH || process.env.REACT_APP_SERVER_PATH).replace(/\/?$/, '/');
// export const serverPath = 'http://localhost:8080/';
/*
for development just create .env.local file in client folder and add line,
it's under gitignore and you don't need change this value before every deployment:
REACT_APP_SERVER_PATH='http://localhost:8080/'
*/

export const databasePath = `${serverPath}db/`;

export const DEFAULT_SERVER = "Nelson";
export const DEFAULT_PORT = "8080";

export const MSG_STORE = "messages";
export const MSG_TYPE_STORE = "message_types";
export const SERGE_INFO = "serge_info";
export const CHAT_CHANNEL_ID = "game-admin";

export const PLANNING_PHASE = 'planning';
export const ADJUDICATION_PHASE = 'adjudication';

export const ADMIN_ROUTE = '/serge/admin';
export const MESSAGE_TEMPLATE_ROUTE = '/serge/messageTemplates';
export const MESSAGE_LIBRARY_ROUTE = '/serge/messageLibrary';
export const MESSAGE_CREATOR_BASE_ROUTE = '/serge/messageCreator';
export const CREATE_TEMPLATE_ROUTE = '/create/template';
export const EDIT_TEMPLATE_ROUTE = '/edit/template';
export const CREATE_MESSAGE_ROUTE = '/create/message';
export const EDIT_MESSAGE_ROUTE = '/edit/message';
export const GAME_SETUP_ROUTE = '/serge/gameSetup';
export const WELCOME_SCREEN_EDIT_ROUTE = '/serge/editWelcomeScreen';
export const EXPORT_ROUTE = '/serge/export';
export const EXPORT_MESSAGES_SUBROUTE = '/messages';
export const EXPORT_FORCES_SUBROUTE = '/foeces';
export const EXPORT_PRINT_SUBROUTE = '/print/:id';
export const PLAYERUI_ROUTE = '/serge/player';
export const DEMO_ROUTE = '/serge/demo';

export const expiredStorage = new ExpiredStorage();
export const LOCAL_STORAGE_TIMEOUT = 2592000; // one month

export const MAX_LISTENERS = 82;

export const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Authorization, Lang'
};

export const defaultGameInfo = {
  imageUrl: '/default_img/sergeDefault.png',
  title: "Serge",
  description: `Welcome you have arrived at the development centre gaming facility.\n
  You will use this web-based application to interact with players from other forces, together with the umpires in the White Cell.\n
  At any point during your time here you can submit insights via the Insights button at the top-right of the gaming page.
  These insights could relate to the current doctrine being explored, the performance of your force, or how the game is being organised / facilitated.\n
  Thanks in advance for your participation.\n
  Maj Duncan Dare, PO1 Gaming`,
  showAccessCodes: false,
};

export const forceTemplate = {
  name: '',
  uniqid: null,
  overview: 'An overview written here..',
  roles: [{
    name: 'CO',
    password: `p${uniqId.time()}`,
    control: false,
    isObserver: false,
    isInsightViewer: false,
  }],
  icon: serverPath+'default_img/forceDefault.png',
  color: '#3dd0ff',
  umpire: false,
  dirty: false,
};

export const umpireForceTemplate = {
  name: 'White',
  uniqid: 'umpire',
  overview: 'Umpire force.',
  roles: [{
    name: 'Game Control',
    password: `p${uniqId.time()}`,
    control: true,
    isObserver: true,
    isInsightViewer: true,
  }],
  icon: serverPath+'default_img/umpireDefault.png',
  color: '#FCFBEE',
  umpire: true,
  dirty: false,
};

export const channelTemplate = {
  name: '',
  uniqid: '',
  participants: [],
};

export const dbDefaultSettings = {
  _id: '_local/settings',
  wargameTitle: '',
  data: {
    overview: {
      name: "Overview - settings",
      gameDescription: '',
      // spatialRepresentation: '',
      gameTurnTime: 43200000,
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      // turnStrategy: '',
      gameDate: moment(new Date(), moment.ISO_8601).format(),
      showAccessCodes: false,
      complete: false,
      dirty: false,
    },
    forces: {
      name: "Forces",
      forces: [umpireForceTemplate],
      selectedForce: '',
      complete: false,
      dirty: false,
    },
    channels: {
      name: "Channels",
      channels: [],
      selectedChannel: '',
      complete: false,
      dirty: false,
    }
  },
  wargameInitiated: false,
  gameTurn: 0,
  phase: ADJUDICATION_PHASE,
  turnEndTime: null,
  adjudicationStartTime: moment().format(),
};
