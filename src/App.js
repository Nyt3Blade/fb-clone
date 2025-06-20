import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
