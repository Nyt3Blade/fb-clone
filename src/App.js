import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed.js";
import Login from "./Login.js";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (<Login />) : (
        <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
  
        </div>  
      </>
      )}
    </div>
  );
}

export default App;
