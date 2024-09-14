import "./app-info.css";
const AppInfo = ({ allMuvieKount, favouriteMuvieKount }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni:{allMuvieKount}{" "}
      </p>
      <p className="fs-4 text-uppercase">
        {" "}
        Sevimli filmlar:{favouriteMuvieKount}{" "}
      </p>
    </div>
  );
};

export default AppInfo;
