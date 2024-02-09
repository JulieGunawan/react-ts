import './App.css';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import {Oscar} from './components/Oscar';
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
      <PersonList names={nameList}/>
      <Status status="success"/>
      <Heading>PlaceHolder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Julie" messageCount={10}isLogin={true}/>
    </div>
  );
}

export default App;
