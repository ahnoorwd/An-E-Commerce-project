import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { id, title, image, category, price } = gadget;
  return (
    <>
      <div className="card bg-white shadow-lg">
        <div className="p-2">
          <img
            className="rounded-xl flex justify-center items-center w-[300px] h-[200px] md:w-[350px] md:h-[200px]"
            src={image}
            alt={title}
          />
        </div>
        <div className="card-body space-y-2">
          <h2 className="card-title">{category}</h2>
          <h1 className="text-lg">{title}</h1>
          <p>Price: ${price}</p>
        </div>
        <div className="card-actions w-full p-2">
          <Link to={`gadget/${id}`} className="w-full">
            <button className="btn btn-primary bg-[#9538E2] text-white w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
  
  
};

export default Gadget;
