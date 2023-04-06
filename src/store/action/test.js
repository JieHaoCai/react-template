import * as types from "../actionTypes";

export const changeName = (params) => {
    return {
      type: types.CHANGE_NAME,
      params
    };
  }