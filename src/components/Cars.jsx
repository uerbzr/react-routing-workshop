import React from "react";
import { Link } from "react-router-dom";
function Cars({ cars }) {
  return (
    <>
      <h1>Car Data</h1>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Make</td>
            <td>Model</td>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>
                <Link to={`/cars/${car.id}`}>{car.id}</Link>
              </td>
              <td>{car.make}</td>
              <td>{car.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Cars;
