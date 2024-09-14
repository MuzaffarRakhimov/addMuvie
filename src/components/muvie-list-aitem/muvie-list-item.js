import "./muvie-list-item.css";

const MuvieListItem = (props) => {
  const { name, views, onDelete, favourite, like, onToogleProp } = props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite && "favourite"
      }  ${like && "like"} `}
    >
      <span
        className="list-group-item-label"
        onClick={onToogleProp}
        data-toogle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={views}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToogleProp}
          data-toogle="favourite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-cookie btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MuvieListItem;
