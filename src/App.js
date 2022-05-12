
import Home from './pages/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout';
import Budget from './pages/Budget';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="budget" element={<Budget />} />
          
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
