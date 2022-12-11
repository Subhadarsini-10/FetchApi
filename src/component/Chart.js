import React, { PureComponent, useState } from "react";
import { faker } from "@faker-js/faker";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import "./Chart.css";
import {Navigate} from 'react-router-dom';

const Chart = () => {
  const id = faker.random.numeric();
  const userName = faker.name.fullName();
  const address = faker.address.cityName();
  const streetName = faker.address.streetName();
  const streetAddress = faker.address.streetAddress();
  const state = faker.address.state();
  const street = faker.address.street();
  const city = faker.address.city();
  const country = faker.address.country();
  const phone = faker.phone.number();
  const occupation = faker.name.jobTitle();
  const vehicle = faker.vehicle.vehicle();
  const maker = faker.vehicle.manufacturer();
  const type = faker.vehicle.type();
  const vrm = faker.vehicle.vrm();

  const data01 = [
    { car: { vehicle }, value: 300, name: maker },
    { car: { vehicle }, value: 400, name: vehicle },
    { car: { vehicle }, value: 200, name: maker },
    { car: { vehicle }, value: 400, name: type },
    { car: { vehicle }, value: 200, name: vehicle },
    { car: { vehicle }, value: 250, name: vehicle },
  ];

  const data02 = [
    { user: { userName }, value: 200, name: address },
    { user: { userName }, value: 400, name: streetName },
    { user: { userName }, value: 300, name: street },
    { user: { userName }, value: 250, name: streetAddress },
    { user: { userName }, value: 100, name: state },
    { user: { userName }, value: 350, name: city },
    { user: { userName }, value: 500, name: country },
  ];

  const data03 = [
    { car: { vehicle }, value: 200, name: vrm },
    { car: { vehicle }, value: 350, name: vrm },
    { car: { vehicle }, value: 200, name: vrm },
    { car: { vehicle }, value: 400, name: type },
    { car: { vehicle }, value: 200, name: vehicle },
    { car: { vehicle }, value: 250, name: vehicle },
  ];

  const [goToPaginate, setGoToPaginate] = useState(false);

  if(goToPaginate){
    return <Navigate to="/Paginate"/>
  }

  return (
    <>
      <div>
        <Navigate to="" />
        Go to Table
        <button
          onClick={() => {
            setGoToPaginate(true);
          }}
        >
          Click me
        </button>
      </div>
      <div className="piechart">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            margin={{
              right: 20,
              left: 1,
            }}
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label="name"
          />
          <Tooltip />
        </PieChart>

        <PieChart width={400} height={400}>
          <Pie
            data={data03}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label="name"
          />
          <Tooltip />
        </PieChart>
      </div>

      <div className="barchart">
        <BarChart
          width={700}
          height={300}
          data={data02}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
};

export default Chart;
