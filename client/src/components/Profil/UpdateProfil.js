import React from "react";
import LeftNav from "../LeftNav";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <div className="profil-container">
      <LeftNav />
      <h1> Profil de {userData.tel}</h1>
      <img src={userData.picture} alt="user-pic"/>
      <UploadImg/>
    </div>
  );
};

export default UpdateProfil;
