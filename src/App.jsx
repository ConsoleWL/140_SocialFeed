import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PostList from "./Components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <PostList />
      </div>
    </div>
  );
}

export default App;
