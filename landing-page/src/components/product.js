import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../context/CartContext";  // Importing the custom hook

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useCart();  // Accessing cart functions from context

  // Fetch product data
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-16 bg-white">
      <div>
        <div className="flex items-center justify-between py-5 md:py-10">
          <p className="text-sm md:text-xl lg:text-base">Wishlist</p>
          <button className="text-xs md:text-lg lg:text-sm border px-4 py-2 rounded">
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          {products.map((product) => (
            <div key={product.id} className="relative">
              <div className="bg-[#F5F5F5] relative">

                {/* Discount Tag */}
                {product.discountPercentage && (
                  <span className="absolute top-2 right-2 bg-[#8644DB] text-white text-xs md:text-sm px-2 py-1 rounded">
                    -{product.discountPercentage.toFixed(0)}%
                  </span>
                )}

                {/* Delete Wishlist Button */}
                <button
                  onClick={() => removeFromCart(product.id)}  // Using removeFromCart from CartContext
                  className="absolute top-2 left-2 bg-white rounded-full p-1 shadow"
                  title="Delete from Wishlist"
                >
                  <RiDeleteBin6Line className="text-black w-4 h-4" />
                </button>
                
                {/* Image */}
                <div className="relative w-full h-[25vh]">
                  <Image
                    src={product.images[0]} 
                    alt={product.title} 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-md"
                    priority
                  />
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product)}  // Using addToCart from CartContext
                  className="bg-black rounded text-white px-4 py-2 lg:py-3 mt-2 w-full text-xs md:text-lg lg:text-sm flex items-center gap-2 justify-center"
                >
                  <IoCartOutline color="white" className="h-4 w-4 md:h-6 md:w-6 lg:w-4 lg:h-4" />
                  Add to Cart
                </button>
              </div>

              {/* Product Title and Price */}
              <div className="py-5 space-y-2">
                <h3 className="text-xs md:text-lg lg:text-sm font-normal line-clamp-1">{product.title}</h3>
                <div className="flex items-center gap-3">
                  <p className="text-[#8644DB] font-medium text-xs md:text-lg lg:text-sm">
                    ${product.price}
                  </p>
                  {product.discountPercentage && (
                    <p className="text-gray-400 line-through text-xs md:text-lg lg:text-sm">
                      ${Math.round(
                        product.price / (1 - product.discountPercentage / 100)
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
