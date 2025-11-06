export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Chris Jordan",
      price: 29.0,
      image:
        "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop",
      description:
        "Looks amazing out of the box. I barely had to customize anything.",
    },
    {
      id: 2,
      name: "Sofia Harper",
      price: 45.5,
      image:
        "https://images.unsplash.com/photo-1606813907291-fd6b77f07b18?q=80&w=600&auto=format&fit=crop",
      description:
        "Beautiful design and perfect for any modern setup. Totally worth it.",
    },
    {
      id: 3,
      name: "Ethan Brooks",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1616627562051-4b48eb2a3d0e?q=80&w=600&auto=format&fit=crop",
      description:
        "High quality and durable product. I use it daily and love it.",
    },
    {
      id: 4,
      name: "Lara Smith",
      price: 59.0,
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=600&auto=format&fit=crop",
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
                <p className="text-slate-600">$ {product.price.toFixed(2)}</p>
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
