import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Tables from './pages/Tables';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/table" element={<Tables />} />
        <Route path="/" element={<Navigate to="/auth/signup" replace />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
