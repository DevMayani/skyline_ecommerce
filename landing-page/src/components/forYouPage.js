import { useEffect, useState } from "react";

import { useCart } from "../context/CartContext"; // Access Cart context
import { RiDeleteBin6Line } from "react-icons/ri";
import ProductCard from "./productCard";

const ForYouPage = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useCart(); // Cart context

  // Fetch product data
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  // Handle Deleting Product from Cart
  const handleDelete = (productId) => {
    removeFromCart(productId); // Use removeFromCart from Cart context
  };

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-16 bg-white">
      <div>
        <div className="flex items justify-between py-5">
          <div className="flex gap-2 md:gap-4 items-center py-6">
            <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh] "></div>
            <p className="text-black text-sm md:text-lg lg:text-base xl:text-lg font-medium">
              Just For You
            </p>
          </div>
          <div>
            <button className="text-xs md:text-lg lg:text-sm px-8 py-2 md:py-3 border rounded">
              See All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onDelete={handleDelete} // Pass the handleDelete function
              showDelete={true} // Show delete button in the For You page
              showDiscount={true} // Show discount on the For You page
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForYouPage;
