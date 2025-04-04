import React, { useEffect } from "react";
import axios from "axios";
import { Button, Input } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import { Link } from "react-router-dom";
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

const Statistics = () => {
  const basicAuth =
    "Basic " + btoa(`${getCookie("username")}:${getCookie("password")}`);

  const [totalActiveEmployees, setTotalActiveEmployees] = React.useState(0);

  const [employeeData, setEmployeeData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:8080/employees/all", {
          headers: {
            Authorization: basicAuth,
          },
        })
        .then((response) => {
          const data = response.data;
          setTotalActiveEmployees(data.length);
          setEmployeeData(data);
          console.log(data);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-[99vw] text-3xl text-cyan-800 font-extrabold">
        Total Active Employees : {totalActiveEmployees}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-10">
        {employeeData.map((employee) => (
          <Link to={`/employee/${employee.id}`}>
            <Card key={employee.id} className="m-2" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png"
                  alt="employee image"
                />
                <CardContent>
                  <Typography variant="h4" component="div">
                    {employee.name}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {employee.job}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Statistics;
