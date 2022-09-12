import * as yup from "yup";

const cameraTypeSchema = yup.object().shape({
  id: yup.string().nullable(),
  name: yup.string().required("Name required"),
  description: yup.string().required("Description required"),
});



export default cameraTypeSchema;
