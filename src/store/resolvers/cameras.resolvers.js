import { v4 as uuidv4 } from "uuid";


export const setAddCameraType = (state, camera) => {
  const id = uuidv4();
  return {
    ...state,
    cameraTypes: [...state.cameraTypes, { id, ...camera }],
  };
};

export const setAddCamera = (state, camera) => {
  const id = uuidv4();
  return {
    ...state,
    cameras: [...state.cameras, { id, ...camera }],
  };
};

export const setDeleteCamera = (state, cameraId) => {
  const filteredCameras = state.cameras.filter(
    (camera) => camera.id !== cameraId
  );

  return {
    ...state,
    cameras: filteredCameras,
  };
};

export const setDeleteCameraType = (state, cameraTypeId) => {
  const filteredCameraTypes = state.cameraTypes.filter(
    (cameraType) => cameraType.id !== cameraTypeId
  );

  return {
    ...state,
    cameraTypes: filteredCameraTypes,
  };
};

export const setEditCameraType = (state, payload) => {
  const editTypes = state.cameraTypes.map(type => type.id === payload.id ? payload : type)
  return {
    ...state,
    cameraTypes: editTypes,
  };
}

export const setEditCamera = (state, payload) => {
  const editCamera = state.cameras.map(camera => camera.id === payload.id ? payload : camera)
  return {
    ...state,
    cameras: editCamera
  }
}
