import Stars from './components/Stars/Stars';
import './App.css';

function App() {
  return (
    <div className = "App">
    <Stars count = {1}/>  
    <Stars count = {2}/>
		<Stars count = {5}/>
    </div>
  );
}

export default App;