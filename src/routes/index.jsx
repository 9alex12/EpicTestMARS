import { Routes, Route } from "react-router-dom";
import CamerasList from '../views/camerasList';
import CameraTypeList from '../views/cameraTypeList';
import CameraTypesDetails from "../views/cameraTypesDetails";
import CameraDetails from "../views/cameraDetails"

const Router = () =>
    <Routes>
        <Route path="/">
            <Route index element={<CamerasList />} />
            <Route path=":cameraId" element={<CameraDetails />} />
            <Route path="new" element={<CameraDetails />} />
        </Route>
        <Route path="types"  >
            <Route index element={<CameraTypeList />} />
            <Route path=":typeId" element={<CameraTypesDetails />} />
            <Route path="new" element={<CameraTypesDetails />} />
        </Route>
    </Routes>


export default Router;