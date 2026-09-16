import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName' 
import Pessoa from './components/Pessoa'    


function App() {
  
  const name = "Maria"

  return (
    <div  className="App">
      <HelloWorld/>
      <SayMyName name="Matheus"/>
      <SayMyName name="João"/>
      <SayMyName name={name}/>
      <Pessoa nome="Rodrigo" 
      idade={30} 
      profissao="Designer" 
      foto="https://i.pinimg.com/736x/f4/6f/14/f46f1403d4d1e6fd240a868bd4aaa6bc.jpg"/>
    </div>
  );
}

export default App;
