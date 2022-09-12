import * as yup from "yup";


const cameraSchema = yup.object().shape({
  id: yup.string().nullable(),
  name: yup
    .string()
    .min(2, "Too short to be a camera name")
    .max(240, "Too long to be a camera name")
    .required("Camera name required"),
  cameraType: yup.string().nullable(),
  location: yup.string().nullable(),
  latitude: yup.string().nullable(),
  longitude: yup.string().nullable(),
  mark: yup
    .string()
    .min(5, "Too short to be a mark")
    .max(75, "Too long to be a mark")
    .required("Mark required"),
  model: yup
    .string()
    .min(5, "Too short to be a model")
    .max(75, "Too long to be a model")
    .required("Model required"),

});

export default cameraSchema;
