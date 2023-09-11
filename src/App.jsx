import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <CreatePostForm />
      </div>
    </div>
  );
}

export default App;
