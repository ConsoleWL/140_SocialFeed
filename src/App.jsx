import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from "./Components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <CreatePostForm />
        <PostList />
      </div>
    </div>
  );
}

export default App;
