import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}