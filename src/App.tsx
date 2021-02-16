import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import SignIn from './pages/SignIn';
import ToastContainer from './components/ToastContainer';
// import SignUp from './pages/SignUp';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

export default App;
