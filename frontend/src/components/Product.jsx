import { useState } from "react";

export default function ProductGrid() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wheat Grade A",
      price: 29.0,
      image:
        "https://plantix.net/en/library/assets/custom/crop-images/wheat.jpeg",
      description:
        "Looks amazing out of the box. I barely had to customize anything.",
    },
    {
      id: 2,
      name: "Paddy Crop",
      price: 45.5,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.2Pdff2T3hzJGiRZHzNwLWgHaE7?pid=Api&P=0&h=180",
      description:
        "Beautiful design and perfect for any modern setup. Totally worth it.",
    },
    {
      id: 3,
      name: "Maiz Crop",
      price: 19.99,
      image:
        "https://www.wynnstay.co.uk/media/wysiwyg/Blog_images/_YieldON_Crop_Update.png",
      description:
        "High quality and durable product. I use it daily and love it.",
    },
    {
      id: 4,
      name: "Sugarcane",
      price: 59.0,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.arVKLrCp_OZ3Mic57GHIHgHaCf?pid=Api&P=0&h=180",
      description:
        "Elegant and stylish. Makes my workspace look amazing!",
    },
    {
      id: 5,
      name: "Mustard",
      price: 29.0,
      image:
        "https://t4.ftcdn.net/jpg/03/80/47/69/360_F_380476979_o0mtDd5yCwgvLcUeepuFXZSeY1FPoxRS.jpg",
      description:
        "Looks amazing out of the box. I barely had to customize anything.",
    },
    {
      id: 6,
      name: "Soybean",
      price: 45.5,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.GQB5IpbBWnQucUqz8fnVoAHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Beautiful design and perfect for any modern setup. Totally worth it.",
    },
    {
      id: 7,
      name: "Ground Nuts",
      price: 19.99,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.n1pEtv37q2dA4zFNU-v0vwHaE7?pid=Api&P=0&h=180",
      description:
        "High quality and durable product. I use it daily and love it.",
    },
    {
      id: 8,
      name: "Potato",
      price: 59.0,
      image:
        "https://seasol.co.nz/wp-content/uploads/2021/10/AdobeStock_290848444.jpeg",
      description:
        "Elegant and stylish. Makes my workspace look amazing!",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const handleAddProduct = (e) => {
    e.preventDefault();

    const productToAdd = {
      id: products.length + 1,
      ...newProduct,
      price: parseFloat(newProduct.price),
    };

    setProducts([...products, productToAdd]);

    alert("Product added!");

    setNewProduct({ name: "", price: "", image: "", description: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Product Grid */}
      <div className="min-h-screen bg-slate-100 flex items-center justify-center py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow-md w-72 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-72 h-48 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4 text-sm">
                <p className="text-slate-600">₹ {product.price.toFixed(2)}</p>
                <p className="text-slate-800 text-base font-medium my-1.5">
                  {product.name}
                </p>
                <p className="text-slate-500 text-[13px] leading-snug">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button className="bg-slate-100 text-slate-600 py-2 rounded-md hover:bg-slate-200 transition">
                    Add to cart
                  </button>
                  <button className="bg-slate-800 text-white py-2 rounded-md hover:bg-slate-900 transition">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Product Section */}
      <div className="max-w-md mx-auto my-12 p-6 bg-white shadow-xl rounded-xl">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleAddProduct} className="space-y-3">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="w-full border p-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="w-full border p-2 rounded-md"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="w-full border p-2 rounded-md"
          />

          <textarea
            placeholder="Short Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="w-full border p-2 rounded-md h-24"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2 rounded-md hover:bg-slate-900 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
