/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from "react";

const HOC = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      text: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        // eslint-disable-next-line no-unused-vars
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }
    render() {
      let { text, data } = this.state;
      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.toLowerCase().indexOf(text) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.toLowerCase().indexOf(text) >= 0;
        }
      });
      return (
        <div>
          <h2>{entity}</h2>
          <input
            type="text"
            value={text}
            onChange={(e) =>
              this.setState({ ...this.state, text: e.target.value })
            }
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HOC;
