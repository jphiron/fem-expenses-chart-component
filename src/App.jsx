import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <h1 class="sr-only">Expenses Chart Component</h1>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
