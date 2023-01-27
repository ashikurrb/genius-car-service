import React, { useState } from "react";
import { useEffect } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this Service?");
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Service deleted successfully");
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
          }
        });
    } else {
      alert("Delete Cancelled!");
    }
  };

  return (
    <div align="center">
      <h1>Manage Services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
