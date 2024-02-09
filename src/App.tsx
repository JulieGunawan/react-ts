import './App.css';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';

function App() {
  const nameList = [
    {
      first: 'Bruce',
      last:'Wayne'
    },
    {
      first: 'Clark',
      last:'Kent'
    },
    {
      first: 'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name="Julie" messageCount={10} isLogin={false}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
