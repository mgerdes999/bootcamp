import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(employees => {
      console.log(employees)
      this.setState({
        employees:employees
      })
    })
    .catch(err => console.log(err))
  }


  render(){
    return (
      <div className="App">
        <h1>Sogeti Employee Directory</h1>
        <div className="row">

        {this.state.employees.map((employee,index) => {
          return ( 
            <div class="media col-12 mb-4 p-3 directory-entry">
              <img src={employee.image} class=" directory-image" alt="..."/>
                <div class="media-body">
                  <h5 class="mt-0">{employee.name}</h5>
                  <div>
                    {employee.from}
                  </div>
                  {employee.phone}    
                </div>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
