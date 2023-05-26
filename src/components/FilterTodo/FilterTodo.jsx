import { useDispatch, useSelector } from "react-redux";
import Button from "../../modules/Button/Button";
import { updateFilter } from "../../redux/todoSlice";
import "../../assets/css/style.css";

const FilterTodo = () => {
  const filterBy = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch();
  const selectFilter = [
    {
      id: 1,
      filter: "ALL",
    },
    {
      id: 2,
      filter: "ACTIVE",
    },
    {
      id: 3,
      filter: "COMPLETED",
    },
  ];

  const handleClick = (id, filter) => {
    selectFilter.map((el) =>
      el.id == id ? (el.isSelected = true) : (el.isSelected = false)
    );
    dispatch(
      updateFilter({
        filterBy: filter,
      })
    );
  };
  return (
    <>
      <div className="d-flex flex-col gap-2">
        {selectFilter.map((el, i) => (
          <Button
            key={i}
            text={el.filter}
            style={`fs-6 font-bold py-1 px-2 my-3 rounded text-white ${
              el.filter == filterBy ? `bg-filter-active` : `bg-filter-inactive`
            }`}
            handleClick={() => {
              handleClick(el.id, el.filter);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FilterTodo;
