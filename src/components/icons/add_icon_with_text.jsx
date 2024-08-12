/* eslint-disable react/prop-types */
import { IoIosAddCircle } from "react-icons/io";

const AddIconComponent = ({ text, onClick }) => {
  return (
    <>
      <div className="add-container" onClick={onClick}>
        <IoIosAddCircle color="white" size={24} />
        <p>Add {text}</p>
      </div>
    </>
  );
};

export default AddIconComponent;
