import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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

function App() {
  return (
      <div>
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
    </div>
  );
}

export default App;
