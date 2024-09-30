import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCarPage from "./pages/CreateCarPage";
import Cars from "./components/Cars";
import initialCarData from "./data/data.js";
import Welcome from "./components/Welcome.jsx";

function App() {
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    make: "",
    model: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      console.log("initial useEffect running");
      setCars(initialCarData);
      return () => {
        console.log("cleaning [] useEffect");
      };
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log("[cars] state changed! triggering useEffect...");
    console.log(cars);
    return () => {
      console.log("cleaning [cars] useEffect");
    };
  }, [cars]);

  const getNewId = () => {
    return cars.length + 1;
  };
  const addCarToCarState = (newCar) => {
    console.log(newCar);
    console.log(cars);
    setCars([...cars, newCar]);
  };
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let car = {
      id: getNewId(),
      make: formData.make,
      model: formData.model,
    };

    addCarToCarState(car);
  };

  return (
    <>
      <div className="container">
        <header className="header blue">Header</header>
        <div className="container-nav-main">
          <nav className="sidebar red">
            <Navigation />
          </nav>
          <main className="main green">
            <div className="yellow">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/cars" element={<Cars cars={cars} />} />
                <Route
                  path="/cars/create"
                  element={
                    <CreateCarPage
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                      formData={formData}
                    />
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
