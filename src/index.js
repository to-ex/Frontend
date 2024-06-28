import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MyPage from './pages/MyPage';
// import MyInfo from './pages/MyInfo';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mypage" element={<MyPage />} />
      {/* <Route path="/myinfo" element={<MyInfo />} /> */}
    </Routes>
  </BrowserRouter>
)