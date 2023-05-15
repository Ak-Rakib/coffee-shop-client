/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const AdminSelectedItemCard = ({ data, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, Details, taste, category, photoURL } =
    data;

  const deleteItem = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if(result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: "DELETE"
              })
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  }
                });
        }

        const remaining = coffees.filter(cof => cof._id !== _id);
        setCoffees(remaining);
    });
  };

  return (
    <div>
      <div className="card card-side bg-[#ede2db] shadow-xl">
        <figure>
          <img src={photoURL} alt="Movie" className="w-1/2" />
        </figure>
        <div className="flex w-full justify-between">
          <div className="py-3">
            <h2 className="card-title">Name: {name}</h2>
            <p className="font-bold">Chef: {chef}</p>
            <p className="font-bold">Supplier: {supplier}</p>
            <p className="font-bold">Details: {Details}</p>
            <p className="font-bold">Taste: {taste}</p>
            <p className="font-bold">Category: {category}</p>
          </div>
          <div className="btn-group btn-group-vertical my-4 pe-3 space-y-4">
            <button className="btn btn-outline">View</button>
            <Link to={`updateItem/${_id}`}>
            <button className="btn btn-outline">Edit</button>
            </Link>
            <button onClick={() => deleteItem(_id)} className="btn btn-outline">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSelectedItemCard;
