import { useDispatch, useSelector } from "react-redux";
import { compledeTodo, deleteTodo } from "../../redux/todoSlice";
import FilterTodo from "../FilterTodo/FilterTodo";
import { TbTrashXFilled } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import { PropTypes } from "prop-types";
import Checkbox from "../../modules/Checkbox/Checkbox";

const ListTodo = ({ getTodo }) => {
  const todos = useSelector((state) => state.todos.todos);
  const filterBy = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch();
  const handleCheckbox = (id) =>
    dispatch(
      compledeTodo({
        id: id,
      })
    );

  const handleDelete = (id) =>
    dispatch(
      deleteTodo({
        id: id,
      })
    );

  const handleGetData = (id, todo) => getTodo(id, todo);

  const filteredTodo = () => {
    if (filterBy === "COMPLETED") {
      return todos.filter((todo) => todo.completed);
    }
    if (filterBy === "ACTIVE") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  return (
    <>
      <div className="d-flex flex-column gap-2">
        <FilterTodo />
        <div className="d-flex flex-column gap-2">
          {filteredTodo().map((el, i) => (
            <div
              key={i}
              className="border border-secondary d-flex justify-content-between align-items-center px-4 text-secondary w-100"
            >
              <div className="d-flex align-items-center gap-2">
                <Checkbox
                  handleChange={() => handleCheckbox(el.id)}
                  value={el.todo}
                  isChecked={el.completed}
                />
                <h1
                  className={`font-weight-semibold fs-3 d-flex align-items-center py-2 text-capitalize w-200 line-clamp-1  ${
                    el.completed && `text-decoration-line-through`
                  } `}
                >
                  {el.todo}
                </h1>
              </div>
              <div className="d-flex gap-1 align-items-center">
                {!el.completed && (
                  <RiPencilFill
                    onClick={() => handleGetData(el.id, el.todo)}
                    className="text-23 cursor-pointer"
                  />
                )}
                <TbTrashXFilled
                  onClick={() => handleDelete(el.id)}
                  className="text-23 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ListTodo.propTypes = {
  getTodo: PropTypes.func,
};

export default ListTodo;
