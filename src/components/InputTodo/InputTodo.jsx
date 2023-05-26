import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../modules/Button/Button";
import TextField from "../../modules/Textfield/Textfield";
import { addTodo, updateTodo } from "../../redux/todoSlice";
import PropTypes from "prop-types";

const InputTodo = ({ id, todoUpdate, isUpdate, done }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () =>
    value != "" &&
    (dispatch(
      addTodo({
        todo: value,
      })
    ),
    setValue(""));

  const handleUpdate = () =>
    value != "" &&
    (dispatch(
      updateTodo({
        id: id,
        todo: value,
      })
    ),
    setValue(""),
    done());

  useEffect(() => {
    setValue(todoUpdate);
  }, [todoUpdate]);
  return (
    <>
      <div className="d-flex flex-row w-100 gap-2 gap-md-4">
        <TextField
          name="inputTodo"
          text="What to do"
          value={value}
          handleChange={(e) => setValue(e.target.value)}
        />
        <Button
          text={`${isUpdate ? "Update" : "Add"}`}
          style="fs-6 button-add text-white p-2 rounded outline-none"
          handleClick={isUpdate ? handleUpdate : handleSubmit}
        />
      </div>
    </>
  );
};

InputTodo.propTypes = {
  id: PropTypes.number,
  todoUpdate: PropTypes.string,
  isUpdate: PropTypes.bool,
  done: PropTypes.func,
};

export default InputTodo;
