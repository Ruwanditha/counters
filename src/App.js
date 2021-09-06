import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import CountersV2 from "./components/countersV2";
import React from "react";
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // best solution
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });

    //console.log("counter", counter);
    //this.setState({value : this.state.value+1});
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called - Delete", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log(counters);
    this.setState({ counters: counters });
  };

  handleAddNew = () => {
    //console.log("Event Handler Called - handleAddNew", this.state.counters.length);
    let nextID = this.state.counters.length;
    this.setState({
      counters: this.state.counters.concat({ id: nextID+1, value: 5 })
    })

  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value>0).length}/>
        <main className="container">
          <CountersV2
            counters = {this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAddNew={this.handleAddNew}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
