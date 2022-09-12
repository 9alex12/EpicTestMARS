import {
    ADD_CAMERA,
    EDIT_CAMERA,
    DELETE_CAMERA,
    ADD_CAMERA_TYPE,
    DELETE_CAMERA_TYPE,
    EDIT_CAMERA_TYPE,
} from '../types'

export const addCameraAction = (payload) => ({
    type: ADD_CAMERA,
    payload,
});

export const editCameraAction = (payload) => ({
    type: EDIT_CAMERA,
    payload
})

export const deleteCameraAction = (cameraId) => ({
    type: DELETE_CAMERA,
    payload: cameraId,
});

export const addCameraTypeAction = (payload) => ({
    type: ADD_CAMERA_TYPE,
    payload,
});

export const deleteCameraTypeAction = (cameraTypeId) => ({
    type: DELETE_CAMERA_TYPE,
    payload: cameraTypeId,
});

export const editCameraTypeAction = (payload) => ({
    type: EDIT_CAMERA_TYPE,
    payload,
})

