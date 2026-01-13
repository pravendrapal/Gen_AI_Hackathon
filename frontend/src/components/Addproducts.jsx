import { useState } from "react";
import API from "../api";

export default function Addproducts() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/products", product); 
      alert("Product added successfully!");
    } catch (err) {
      alert("Error: " + err.response?.data?.msg);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-xl font-semibold text-slate-800 mb-4 text-center">
        Add New Product
      </h2>

      <form onSubmit={submit} className="space-y-3">

        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
          className="w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-slate-500"
        />

        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: e.target.value })
          }
          className="w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-slate-500"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={product.image}
          onChange={(e) =>
            setProduct({ ...product, image: e.target.value })
          }
          className="w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-slate-500"
        />

        <textarea
          placeholder="Short Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="w-full border p-2 rounded-md h-24 outline-none focus:ring-2 focus:ring-slate-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-slate-800 text-white py-2 rounded-md hover:bg-slate-900 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
