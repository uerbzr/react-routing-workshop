import React from "react";
import { useParams } from "react-router-dom";
function Car({ cars }) {
  const { id } = useParams();
  let item = {
    id: 0,
    make: "",
    model: "",
  };
  item = cars.find((x) => x.id === Number(id));

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Make</td>
            <td>Model</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.make}</td>
            <td>{item.model}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Car;
