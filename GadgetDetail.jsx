import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToFavList, getFavList } from "../utils/addToFav";
import { addToCartList, getCartList } from "../utils/addToCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GadgetDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const gadget = data.find((gadget) => gadget.id === id);

  const {
    title,
    price,
    availability,
    description,
    image,
    Specification,
    rating,
  } = gadget;

  const roundedRating = Math.round(rating * 2) / 2;

  const [favDisabled, setFavDisabled] = useState(false);
  const [cartDisabled, setCartDisabled] = useState(false);

  useEffect(() => {
    const favList = getFavList();
    const cartList = getCartList();

    setFavDisabled(favList.includes(id));
    setCartDisabled(cartList.includes(id) || !availability);
  }, []);

  const addToFav = (id) => {
    addToFavList(id);
    setFavDisabled(true);
    toast.success("Added to favorites!", { position: "top-center" });
  };

  const addToCart = (id) => {
    addToCartList(id);
    setCartDisabled(true);
    toast.success("Added to cart!", { position: "top-center" });
  };

  return (
    <>
      <ToastContainer />
      <div className="relative">
        <div className="text-center bg-[#9538E2] p-10 pb-80">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">
              Product Details
            </h1>
            <p className="text-lg text-white mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row max-w-4xl mx-auto bg-white p-10 gap-12 rounded-lg shadow-lg -mt-72 mb-32">
          <div className="max-w-[350px] rounded-lg p-4">
            <img
              src={image}
              alt="Gadget"
              className="w-[500px] h-[300px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-semibold">{title}</h1>
              <p className="text-xl font-semibold text-gray-700 mt-2">
                Price: ${price}
              </p>
            </div>
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border  ${
                availability
                  ? "bg-green-100 text-green-800 border-green-400 w-[70px]"
                  : "bg-red-100 text-red-800 border-red-400 w-[95px]"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </div>
            <p className="text-gray-600">{description}</p>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Specification:
              </h2>
              <ul className="list-decimal list-inside text-gray-700 ml-4">
                {Specification.map((specs, index) => (
                  <li key={index}>{specs}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Rating: {rating}
              </h2>
              <div className="rating rating-lg rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-yellow-500"
                  defaultChecked={roundedRating >= 0.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-yellow-500"
                  defaultChecked={roundedRating >= 1}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-yellow-500"
                  defaultChecked={roundedRating >= 1.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-yellow-500"
                  defaultChecked={roundedRating >= 2}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-yellow-500"
                  defaultChecked={roundedRating >= 2.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-yellow-500"
                  defaultChecked={roundedRating >= 3}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-yellow-500"
                  defaultChecked={roundedRating >= 3.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-yellow-500"
                  defaultChecked={roundedRating >= 4}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-yellow-500"
                  defaultChecked={roundedRating >= 4.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-yellow-500"
                  defaultChecked={roundedRating >= 5}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => addToCart(id)}
                disabled={cartDisabled}
                className={`px-6 py-2 text-white rounded-lg flex items-center gap-2 ${
                  cartDisabled || !availability
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {availability
                  ? cartDisabled
                    ? "Already in Cart"
                    : "Add to Cart"
                  : "Out of Stock"}
              </button>
              <button
                onClick={() => addToFav(id)}
                disabled={favDisabled}
                className={`btn btn-circle bg-pink-100 border rounded-full ${
                  favDisabled
                    ? "bg-gray-900 cursor-not-allowed"
                    : "text-purple-600 border-purple-600 hover:bg-purple-100"
                }`}
              >
                <img className="w-3/5" src="/heart.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetDetail;
