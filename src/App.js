import logo from './logo.svg';
import './App.css';
import Greet from './1.components/function/Greet';
import Dev from './jsx/jsxexample';
import login from './jsx/login';
import {Userform} from './formhandling/Userform';
function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Dev/> */}
{/* <login> </login> */}
<Userform/>
    </div> 
  );
}

export default App;
