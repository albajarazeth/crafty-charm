import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import UploadItem from "../pages/UploadItem";
import ItemView from "../pages/ItemView";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="upload" element={<UploadItem />} />
        <Route path="item" element={<ItemView />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
