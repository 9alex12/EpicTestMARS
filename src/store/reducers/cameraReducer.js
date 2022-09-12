import {
  ADD_CAMERA,
  ADD_CAMERA_TYPE,
  DELETE_CAMERA,
  DELETE_CAMERA_TYPE,
  EDIT_CAMERA_TYPE,
  EDIT_CAMERA
} from '../types';
import {
  setAddCamera,
  setAddCameraType,
  setDeleteCamera,
  setDeleteCameraType,
  setEditCameraType,
  setEditCamera
} from '../resolvers/cameras.resolvers';

const initialState = {
  cameras: [],
  cameraTypes: [],
}

export function camerasReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAMERA:
      return setAddCamera(state, action.payload);
    case ADD_CAMERA_TYPE:
      return setAddCameraType(state, action.payload);
    case DELETE_CAMERA:
      return setDeleteCamera(state, action.payload);
    case DELETE_CAMERA_TYPE:
      return setDeleteCameraType(state, action.payload)
    case EDIT_CAMERA_TYPE:
      return setEditCameraType(state, action.payload)
    case EDIT_CAMERA:
      return setEditCamera(state, action.payload)
    default:
      return state;
  }
}