import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

const EmployeeProfilePage = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = React.useState([]);
  const basicAuth =
    "Basic " + btoa(`${getCookie("username")}:${getCookie("password")}`);
  async function handleSearchEmployeeById(employeeSearchId) {
    await axios
      .get(`http://localhost:8080/employees/${employeeSearchId}`, {
        headers: {
          Authorization: basicAuth,
        },
      })
      .then((response) => {
        const data = response.data;
        setEmployeeData(data);
        console.log(data);
      });
  }
  useEffect(() => {
    handleSearchEmployeeById(id);
  }, []);
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-row items-center gap-20 justify-center mt-36 w-[50vw]">
        <div>
          <img
            className="w-70"
            src="https://png.pngtree.com/png-clipart/20221231/original/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_8836451.png"
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <div className="text-2xl font-bold text-gray-600">
            Employee Name - {employeeData.name}
          </div>
          <div className="text-2xl font-bold text-gray-600">
            Job Type - {employeeData.job}
          </div>
          <div className="text-2xl font-bold text-gray-600">
            Department - {employeeData.department}
          </div>
          <div className="text-2xl font-bold text-gray-600">
            Employee ID - {employeeData.id}
          </div>
          <div className="text-2xl font-bold text-gray-600">
            Date of Joining - {employeeData.joining_date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;
