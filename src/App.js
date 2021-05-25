import Header from './Header';
import Home from './Home';

function App() {
  const title = 'Welcome to the Mandarin Grader Supplemental App';
  return (
    <div className="App">
      <h2>{title}</h2>
     <Header />
     <div className="content">
       <Home />
     </div>
    </div>
   
  );
}

export default App;
