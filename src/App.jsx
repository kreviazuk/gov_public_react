import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<div>共有资源页面</div>} />
          <Route path="/my" element={<div>我的页面</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
