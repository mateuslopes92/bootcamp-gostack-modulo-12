export function addTech(tech) {
  return {
    type: "ADD_TECH",
    payload: { tech }
  };
}

export function getTechsSuccess(data) {
  return {
    type: "GET_TECHS_SUCCESS",
    payload: { data }
  };
}

export function getTechsFailure(data) {
  return {
    type: "GET_TECHS_FAILURE",
    payload: { data }
  };
}
