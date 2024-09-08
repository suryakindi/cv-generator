import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodySession from './component/BodySession';
import FormSession from './component/FormSession';
import PdfSession from './component/PdfSession';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<BodySession />} />
        <Route path="/form-session" element={<FormSession />} />
        <Route path="/pdf-session" element={<PdfSession />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
