import React, { useState, useEffect } from "react";
import "./Paginate.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

function Paginate() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const sortOption = ["age", "name", "email", "car"];

  useEffect(() => {
    loadUserSever(0, 4, 0);
  }, []);

  const loadUserSever = async () => {
    return await axios
      .get(`http://localhost:5000/comments?`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  console.log("data", data);

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get(`http://localhost:5000/comments?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MDBContainer>
        <div style={{ marginTop: "100px" }}>
          <u>
            <h2 className="text-center">
              Filter, Sort using JSON fake react api
            </h2>
          </u>
          <br></br>,<br></br>
          <MDBRow>
            <MDBCol size={4}>
              <h5>Sort/Filter by Car name:</h5>
              <select
                style={{ width: "50%", borderRadius: "2px", height: "35px" }}
                onChange={handleSort}
                value={sortValue}
              >
                <option>Please select value</option>
                {sortOption.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">Sl. No</th>
                    <th scope="col">Age</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Car</th>
                  </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                  <MDBTableBody className="align center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No data found
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.age}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.car}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </>
  );
}

export default Paginate;
