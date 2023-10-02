import { Route, Routes } from "react-router-dom";
import Show from "./Show";
import Edit from "./Edit";
import Create from "./Create";

const FireBaseCRUD = () => {
  return (
    <>
      <Show />
      <Routes>
        <Route path="/Material-UI/FireBaseCRUD/edit/id:" element={<Edit />} />
        <Route path="/Material-UI/FireBaseCRUD/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default FireBaseCRUD;
