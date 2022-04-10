import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { mergeClasses } from '@material-ui/styles';
import React from 'react';


const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing(3),
    overflowX:"auto"
  },
  table: {
    minWidth:1080
  }
})


//const { classes } = this.props;

//function App() {
  class App extends Component {

    state = {
      customers: ""
    }

    componentDidMount() {
      //this.timer = setInterval(this.progress, 20);
      this.callApi()
        .then(res => this.setState({customers: res}))
        //.then(res => this.setState({response: res.express}))
        .then((json) => console.log(json));
        //.catch(err => console.log(err));

        //fetch("https://jsonplaceholder.typicode.com/posts/1")
        //fetch('http://localhost:3000/api/customers')
      //fetch('/api/customers')

        //.then((response) => console.log("response:", response))
        //.catch((error) => console.log("error:", error));
        //.then((response) => response.json())
        //.then((data) => console.log(data));

     }

    
    callApi = async () => {
      const response = await fetch('/api/customers');
      const body = await response.json();
      //console.log(body);
      return body;
    }

   

    render() {
    return (
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => {
                  return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); 
                }) : "1234" }
            </TableBody>
          </Table>
      </Paper>
    );
 
}
}
//export default withStyles(styles)(App);

export default withStyles(styles)(App);