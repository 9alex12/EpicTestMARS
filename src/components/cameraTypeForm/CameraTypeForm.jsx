import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Controller } from "react-hook-form";
import { TextField } from '@mui/material';
import { Button } from "@material-ui/core";
import { addCameraTypeAction, editCameraTypeAction } from '../../store/actions';
import { ContainerCss } from './CameraTypeForm.styles';


const CameraTypeForm = ({ form }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { control, handleSubmit, getValues } = form

  const { id, name } = getValues()
  const isNew = !id

  const onSubmitCamera = async (data) => {
    dispatch(isNew ? addCameraTypeAction(data) : editCameraTypeAction(data));
    navigate("/types")
  };

  return (
    <form onSubmit={handleSubmit(onSubmitCamera)}>
      <ContainerCss>
        <h2> {isNew ? 'New Camera Type' : `Edit Type: ${name}`} </h2>
        <Controller
          required
          name="name"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              variant="standard"
              label="Name"
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            />
          }
          control={control}
        />
        <Controller
          required
          name="description"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              value={field.value || ''}
              variant="standard"
              label="Description"
              multiline
              maxRows={4}
              error={!!error}
              helperText={error?.message}
            />}
          control={control}
        />
        <div className='buttonContainer'>
          <Button
            className="submit-button"
            type="button"
            onClick={() => navigate("/types")}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            className="submit-button"
            color="primary"
            type="submit"
            variant="contained"
          >
            {isNew ? 'Add' : 'Save'} Camera type
          </Button>
        </div>
      </ContainerCss>
    </form>
  );
};

export default CameraTypeForm;