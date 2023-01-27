import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div align="center">
      <h1> Details of 
        <br />
        {service.name}</h1>
      <br />
      <h3>ID: {serviceId}</h3>
      <h3>Price: ${service.price}</h3>
      <br />
      <img src={service.img} alt="" />
      <br />
      <br />
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
