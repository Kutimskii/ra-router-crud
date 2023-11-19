import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CreatePostPage from './components/pages/CreatePostPage';
import ViewPage from './components/pages/ViewPage';
import './App.css';
import ChangePostPage from './components/pages/ChangePostPage';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path='/posts/new' exact element={<CreatePostPage/>}></Route>
        <Route path='/posts/:id' exact element={<ViewPage/>}></Route>
        <Route path='/posts/change/:id' exact element={<ChangePostPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
