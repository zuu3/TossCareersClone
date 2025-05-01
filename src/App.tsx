import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}