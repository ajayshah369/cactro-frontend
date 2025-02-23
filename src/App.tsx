import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./containers/header";
import Home from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className='pt-16'>
        <Header />
        <div
          className='overflow-auto'
          style={{
            height: "calc(100vh - 4rem)",
            width: "100vw",
            backgroundColor: "var(--primary-bg-color)",
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
