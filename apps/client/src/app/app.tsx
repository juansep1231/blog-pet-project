import RegisterForm from '../register/components/registerForm';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
