import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import CameraForm from '../../components/cameraForm';
import { cameraSchema } from '../../utils/schemas';

const CameraDetails = () => {
    const { cameraId } = useParams();
    const cameraData = useSelector((state) => state.camerasReducer.cameras.find(({ id }) => id === cameraId));

    const form = useForm({
        mode: "onBlur",
        resolver: yupResolver(cameraSchema),
        defaultValues: cameraData,
    });

    return (
        <CameraForm form={form} />
    )
}

export default CameraDetails;