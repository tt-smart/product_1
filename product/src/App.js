import './App.css';
import  InputField  from './Components/Inputfolder/InputField';
// import { Input } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <InputField type="password"/>
      <InputField type="text"/>
      <InputField type="email"/>
      <InputField type="number"/>
      <InputField type="radio"/>
      <InputField type="radio"/>
      <InputField type="checkbox"/>
      <InputField type="date"/>
      <InputField type="time"/>
    </div>
  );
}

export default App;
