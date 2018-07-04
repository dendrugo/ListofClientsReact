import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      active: 0,
      term: ''
    };
       this.loadData();
  }
    
     loadData() {
    load(this.props.data).then(users => {
      this.setState({
        data: JSON.parse(users)
      });
    });
  }
    
      updateData(config) {
    this.setState(config);
  }

 

  render() {
    return (<div>Hello, World!</div>)
  }
}
