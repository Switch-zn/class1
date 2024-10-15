import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Pikin = ({
  Surname,
  Firstname,
  Middlename,
  Age,
  Gender,
  Status,
  YearsOfService,
  IsAmin,
}) => {
  return (
    <div>
      

      <div className="bg-cyan-100 p-4">
        <h3 className="text-red-500 font-semibold">STAFF INFORMATION</h3>
        <ul className=" mx-2">
          <li className=" my-4 font-medium">Surname: {Surname} </li>
          <li className=" my-4 font-medium">Firstname: {Firstname} </li>
          <li className=" my-4 font-medium">Middlename: {Middlename} </li>
          <li className=" my-4 font-medium">Age: {Age} </li>
          <li className=" my-4 font-medium">Gender: {Gender} </li>
          <li className=" my-4 font-medium">Status: {Status} </li>
          <li className=" my-4 font-medium">
            YearsOfService: {YearsOfService}{" "}
          </li>
          <li className=" my-4 font-medium">IsAdmin: {IsAmin} </li>
        </ul>
      </div>
    </div>
  );
};

export default Pikin;
