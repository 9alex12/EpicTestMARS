import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import CameraTypeForm from '../../components/cameraTypeForm/CameraTypeForm.jsx';
import { cameraTypeSchema } from '../../utils/schemas'

const CameraTypesDetails = () => {
    const { typeId } = useParams();
    const typeData = useSelector((state) => state.camerasReducer.cameraTypes.find(({ id }) => id === typeId));

    const form = useForm({
        mode: "onBlur",
        resolver: yupResolver(cameraTypeSchema),
        defaultValues: typeData,
    });

    return (
        <CameraTypeForm form={form} />
    )
}

export default CameraTypesDetails;