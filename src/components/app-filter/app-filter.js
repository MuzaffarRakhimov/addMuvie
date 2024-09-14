import "./app-filter.css";

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          type="button"
          onClick={() => updateFilterHandler(btn.name)}
        >
          {btn.labell}
        </button>
      ))}
    </div>
  );
};

const btnArr = [
  { name: "all", labell: "Barcha kinolar" },
  { name: "popular", labell: "Mashhur kinolar" },
  { name: "mostViewers", labell: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
