import { deleteError } from "./errorSlice";
import { useDispatch, useSelector } from "react-redux";
import "./errorList.css";

const ErrorList = () => {
  
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.error)

  return (
    <div>
      {error.map((error) => (
        <div className="errorMessage">
          <p className="message" key={error.id}>{error.text}</p>
          {/* <button
            style={{ color: "red" }}
            onClick={() => dispatch(deleteError({ id: error.id }))}
          >
            x
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default ErrorList;