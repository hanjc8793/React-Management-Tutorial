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

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '한재철',
    'birthday' : '780625',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '한준탁',
    'birthday' : '1111111',
    'gender' : '남자',
    'job' : '초등5'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '한준서',
    'birthday' : '222222',
    'gender' : '여자',
    'job' : '초등2'
  }
]
//const { classes } = this.props;

function App() {

    //
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
              {
                customers.map(c => {
                  return(
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                      >
                      </Customer>
                  )
                })
              }
            </TableBody>
          </Table>
      </Paper>
    );
 
}

//export default withStyles(styles)(App);

export default withStyles(styles)(App);