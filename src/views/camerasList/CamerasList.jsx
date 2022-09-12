import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { deleteCameraAction } from '../../store/actions';
import ListWithSearch from '../../components/listWithSearch/ListWithSearch';

const columns = [
    { title: 'id', key: "id" },
    { title: 'Name', key: "name" },
    { title: 'Type', key: "cameraType" },
    { title: 'Mark', key: "mark" },
    { title: 'Model', key: "model" }
]

const CameraList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const camerasData = useSelector((state) => state.camerasReducer.cameras);

    const handleAdd = () => navigate("/new")

    const handleEdit = ({ id }) => navigate(`/${id}`)

    const handleDelete = ({ id }) => dispatch(deleteCameraAction(id))


    return (
        <>
            <h2>Cameras List</h2>
            <ListWithSearch
                columns={columns}
                data={camerasData}
                filters={['name', 'mark', 'model']}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </>
    );
}

export default CameraList;