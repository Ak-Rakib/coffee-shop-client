// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const loaderData = useLoaderData();

  const { _id, name, chef, supplier, Details, taste, category, photoURL } =
    loaderData;

  const updateCoffeeHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const Details = form.Details.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photoURL = form.photoURL.value;

    const updatedFormData = {
      name,
      chef,
      supplier,
      Details,
      taste,
      category,
      photoURL,
    };
    console.log(updatedFormData);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#ede2db] md:p-20 p-10">
      <h1 className="text-center text-3xl pb-5 font-bold">
        Please Update Coffee here
      </h1>
      <h1 className="text-center text-xl pb-5 font-bold">{name}</h1>
      <form onSubmit={updateCoffeeHandler} className=" rounded">
        <div className="md:flex md:justify-around">
          <div className="">
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="item name"
                className="w-full p-2 border rounded-md"
                defaultValue={name}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">Chef</label>
              <input
                type="text"
                id="chef"
                name="chef"
                placeholder="your name"
                className="w-full p-2 border rounded-md"
                defaultValue={chef}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                placeholder="supplier"
                className="w-full p-2 border rounded-md"
                defaultValue={supplier}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">
                Details
              </label>
              <textarea
                type="text"
                id="Details"
                name="Details"
                placeholder="Details"
                className="w-full p-2 border rounded-md"
                defaultValue={Details}
              />
            </div>
          </div>
          <div className="">
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">
                Taste
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                placeholder="taste"
                className="w-full p-2 border rounded-md"
                defaultValue={taste}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">
                Category
              </label>
              <input
                id="category"
                name="category"
                placeholder="category"
                className="w-full p-2 border rounded-md"
                defaultValue={category}
              ></input>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                placeholder="item photo"
                className="w-full p-2 border rounded-md"
                defaultValue={photoURL}
              />
            </div>
          </div>
        </div>
        <div className="mb-4 text-center">
          <button type="submit" className="btn btn-outline w-1/4">
            Submit
          </button>
        </div>
      </form>
      <div className="mb-4 text-center">
        <Link to='/'>
          <button type="submit" className="btn btn-outline w-1/4">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateItem;
