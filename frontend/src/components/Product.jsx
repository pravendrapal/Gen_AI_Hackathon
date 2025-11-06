export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Wheat Grade A",
      price: 29.0,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.7IPKMmhqxR4YCCRPM1HNPwHaDt?pid=Api&P=0&h=180",
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
        "https://i.ytimg.com/vi/D-a2cIPjQNU/maxresdefault.jpg",
      description:
        "Looks amazing out of the box. I barely had to customize anything.",
    },
    {
      id: 6,
      name: "Soybean",
      price: 45.5,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.Gl7IAVjND04y9zOhzh1hHAHaE8?pid=Api&P=0&h=180",
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
      id: 4,
      name: "Potato",
      price: 59.0,
      image:
        "https://seasol.co.nz/wp-content/uploads/2021/10/AdobeStock_290848444.jpeg",
      description:
        "Elegant and stylish. Makes my workspace look amazing!",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

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
    </>
  );
}
