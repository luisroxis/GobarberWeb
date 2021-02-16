import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
};

export default App;
