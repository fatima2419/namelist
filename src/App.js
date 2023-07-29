
import './App.css';

function App() {
  const names=['aya','luma','ali','ahmed'];

  const newname = names.map((name, index) => (
    <li key={index}>{name} <button onClick={() => alert(`Hi ${name} here!`)}>{`hi ${name} is here`}</button></li>
    
  ));
  return (
    <>
   <ul>
   {newname}
   </ul>
   </>
  );
}

export default App;
