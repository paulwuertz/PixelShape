export function getTool (state) {
  return state.tools.tool;
}

export function getToolSettings (state) {
  return state.tools;
}

export function getSelectionMode (state) {
  return state.tools.selectionMode;
}

export function getCurrentColor (state) {
  return state.tools.color;
}
