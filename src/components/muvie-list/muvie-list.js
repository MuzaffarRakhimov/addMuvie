import "./muvie-list.css";
import MuvieListItem from "../muvie-list-aitem/muvie-list-item";

const MuvieList = ({ data, onDelete, onToogleProp }) => {
  return (
    <ul className="muvie-list">
      {data.map((item) => (
        <MuvieListItem
          key={item.id}
          {...item}
          onDelete={() => onDelete(item.id)}
          onToogleProp={(e) =>
            onToogleProp(item.id, e.currentTarget.getAttribute("data-toogle"))
          }
        />
      ))}
    </ul>
  );
};

export default MuvieList;
