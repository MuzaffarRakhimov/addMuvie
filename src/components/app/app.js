import { Component } from "react";
import "./app.css";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MuvieList from "../muvie-list/muvie-list";
import MuvieAddForm from "../muvie-add-form/muvie-add-form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Jumong", views: 885, favourite: false, like: false },
        { id: 2, name: "Temur", views: 805, favourite: false, like: false },
        { id: 3, name: "Texno", views: 585, favourite: false, like: false },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      // const index= data.findIndex(c=>c.id===id)   //Mutibil
      // data.splice(index,1)                        //Mutibil

      return {
        data: data.filter((c) => c.id !== id), // Imutibl  yani yangi o'zaruvchi ochib o'zgartirish
      };
    });
  };

  addForm = (item) => {
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          { ...item, id: uuidv4(), favourite: false, like: false },
        ],
      };
    });
  };

  onToogleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return {
        data: newArr,
      };
    });
  };

  searchHendler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  filterHandlar = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.views > 800);
      default:
        return arr;
    }
  };

  updateTermHendler = (term) => {
    this.setState({ term });
  };

  updateFilterHandler = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const allMuvieKount = data.length;
    const favouriteMuvieKount = data.filter((c) => c.favourite).length;
    const visibileData = this.filterHandlar(
      this.searchHendler(data, term),
      filter
    );
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMuvieKount={allMuvieKount}
            favouriteMuvieKount={favouriteMuvieKount}
          />
          <div className="search-panel">
            <SearchPanel updateTermHendler={this.updateTermHendler} />
            <AppFilter
              filter={filter}
              updateFilterHandler={this.updateFilterHandler}
            />
          </div>
          <MuvieList
            data={visibileData}
            onDelete={this.onDelete}
            onToogleProp={this.onToogleProp}
          />
          <MuvieAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
