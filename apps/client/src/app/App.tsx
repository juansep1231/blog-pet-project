import RegisterForm from '../register/components/registerForm';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
      {/* END: routes */}
    </BrowserRouter>
  );
}

export default App;
