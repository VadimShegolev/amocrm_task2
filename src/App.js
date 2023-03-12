import './App.css';
import Header from "./header/header.js"
import Main from "./main/main.js"
import Footer from "./footer/footer.js"

function App() {
  return (
    <div className="App">
      <div>
        {Header()}
      </div>
      <div>
        {Main()}
      </div>
      <div>
        {Footer()}
      </div>
    </div>
  );
}

export default App;
