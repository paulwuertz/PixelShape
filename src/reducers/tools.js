import {
  SET_TOOL,
  SET_COLOR,
  SET_BASE_TEMP,
  SET_SIZE,
  SET_SELECTION_MODE
} from '../actions/tools';

const initialState = {
  tool: 'Brush',
  color: '#1B2631',
  size: 1,
  baseTemp: 25,
  selectionMode: false
};

function tools (state = initialState, action) {
  switch (action.type) {
    case SET_TOOL:
      return { ...state, tool: action.tool };
    case SET_COLOR:
      return { ...state, color: action.color };
    case SET_SIZE:
      return { ...state, size: action.size };
    case SET_BASE_TEMP:
      return { ...state, baseTemp: action.baseTemp };
    case SET_SELECTION_MODE:
      return { ...state, selectionMode: action.selectionMode };
    default:
      return state;
  }
}

export default tools;
