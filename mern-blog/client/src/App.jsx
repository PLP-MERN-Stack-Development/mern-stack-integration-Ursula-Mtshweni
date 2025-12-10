import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

