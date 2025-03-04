import './App.css';
import { Recipe } from './components/Recipe/Recipe';
import recipies from './recipies.json'

function App() {
  return <Recipe recipe={recipies}/>
}

export default App;
