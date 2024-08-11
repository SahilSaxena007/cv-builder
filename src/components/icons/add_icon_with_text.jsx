/* eslint-disable react/prop-types */
import { IoIosAddCircle } from "react-icons/io";

const AddIconComponent = ({ text }) => {
  return (
    <>
      <div className="add-container">
        <IoIosAddCircle color="white" size={24} />
        <p>Add {text}</p>
      </div>
    </>
  );
};

export default AddIconComponent;
