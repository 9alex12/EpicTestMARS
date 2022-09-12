import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from '@mui/material';
import { deleteCameraTypeAction } from '../../store/actions';
import ListWithSearch from "../../components/listWithSearch/ListWithSearch";

const columns = [
    { title: 'id', key: "id" }, { title: 'Name', key: "name" }, { title: 'Description', key: "description" }
];

const CameraTypeList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cameraTypeData = useSelector((state) => state.camerasReducer.cameraTypes);
    const cameraData = useSelector((state) => state.camerasReducer.cameras);

    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const handleCloseErrorMsg = () => setShowErrorMsg(false)

    const handleAdd = () => navigate("/types/new");

    const handleEdit = ({ id }) => navigate(`/types/${id}`);

    const checkTypeIsUsed = (typeUsed) => cameraData.some((camera) => camera.cameraType === typeUsed)

    const handleDelete = ({ id }) => checkTypeIsUsed(id) ?
        setShowErrorMsg(true) :
        dispatch(deleteCameraTypeAction(id));

    return (
        <>
            <h2>Camera Types List</h2>
            <ListWithSearch
                columns={columns}
                data={cameraTypeData}
                filters={['name', 'description']}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Snackbar open={showErrorMsg}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleCloseErrorMsg}
            >
                <Alert onClose={handleCloseErrorMsg} severity="error" sx={{ width: '100%' }}>
                    Cannot be deleted, this type is in use.
                </Alert>
            </Snackbar>
        </>
    );
}

export default CameraTypeList;