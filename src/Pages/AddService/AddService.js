import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { addService } from "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertId = "1") {
        alert("Service added successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-service">
      <h1 align="center">Add your SERVICES here</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />

        <textarea {...register("description")} placeholder="Description" />

        <input type="number" {...register("price")} placeholder="Price" />

        <input {...register("img")} placeholder="Image URL" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
