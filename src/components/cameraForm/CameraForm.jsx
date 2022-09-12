import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { addCameraAction, editCameraAction } from '../../store/actions';
import { ContainerCss } from './CameraForm.styles';


const CameraForm = ({ form }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { control, handleSubmit, getValues } = form
  const { id, name } = getValues();
  const isNew = !id;

  const cameraTypes = useSelector((state) => state.camerasReducer.cameraTypes);

  const onSubmitCamera = async (data) => {
    dispatch(isNew ? addCameraAction(data) : editCameraAction(data));
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit(onSubmitCamera)}>
      <ContainerCss>
        <h2>{isNew ? "New Camera" : `Edit Camera: ${name}`}</h2>
        <Controller
          required
          name="name"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              variant="standard"
              label="Camera name"
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            />
          }
          control={control}
        />
        <Controller
          required
          name="cameraType"
          render={({ field, fieldState: { error } }) =>
            <TextField
              variant="standard"
              select
              label="Camera type"
              {...field}
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {cameraTypes.map((cameraType) => (
                <MenuItem
                  key={`${cameraType.id}`}
                  value={cameraType.id}
                >{`${cameraType.name} - ${cameraType.description}`}</MenuItem>
              ))}
            </TextField>
          }
          control={control}
        />
        <Controller
          required
          name="location"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              variant="standard"
              label="Location"
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            />
          }
          control={control}
        />
        <Controller
          required
          name="latitude"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              variant="standard"
              label="Latitude"
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            />
          }
          control={control}
        />
        <Controller
          required
          name="longitude"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              variant="standard"
              label="Longitude"
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            />
          }
          control={control}
        />
        <Controller
          required
          name="mark"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              variant="standard"
              label="Mark"
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            />
          }
          control={control}
        />
        <Controller
          required
          name="model"
          render={({ field, fieldState: { error } }) =>
            <TextField
              {...field}
              variant="standard"
              label="Model"
              value={field.value || ''}
              error={!!error}
              helperText={error?.message}
            />
          }
          control={control}
        />
        <div className='buttonContainer'>
          <Button
            className="submit-button"
            type="button"
            onClick={() => navigate("/")}
            variant="contained"
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {isNew ? "Add " : "Save "} camera
          </Button>
        </div>
      </ContainerCss>
    </form>
  );
};

export default CameraForm;