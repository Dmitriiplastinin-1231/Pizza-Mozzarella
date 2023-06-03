import './scss/app.scss';
import Wrapper from './Components/Wrapper';
import getPizzas from './Api/Api';


function App() {
  return (
    <div className="App">
      <Wrapper getPizzas={getPizzas} />
    </div>
  );
}

export default App;
