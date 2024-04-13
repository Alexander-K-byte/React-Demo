import './App.css';
import { ClickHandler } from './components/ClickHandler';
//import { Greet } from './components/Greet'
//import { Message } from './components/Message'
function App() {
  return (
    <div className="App">
      {/* <Greet name='John' heroName='Batman' />
      <Greet name='Jim' heroName='Superman'>
        <button>Action</button>      
      </Greet>
      <Greet name='Clare' heroName='Wonder Woman'>
       <p>
        Children of props
       </p>
      </Greet> */}
      {/* <Message /> */}
      <ClickHandler />
    </div>
  );
}

export default App;
