import * as t from "../types";

export const firstDispatchFunction = (name) => dispatch => {
  dispatch({
    type: t.FIRST_TYPE_GOES_HERE,
    payload: name
  });
}