import {TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE} from './types';

export const toggleVisibleProfile = () => {
  return {type: TOGGLE_VISIBLE_PROFILE};
};

export const updateProfile = (form) => {
  return { type: UPDATE_PROFILE, payload: form };
};