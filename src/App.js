
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './page/Main';

import { LayoutComponent } from './components/layouts/LayoutComponent';
import { Board } from './components/Board';
import { AuthProvider } from "./hooks/useAuth";
import Auth from "./page/auth/Auth";
import RegisterPage from "./page/auth/RegisterPage";
import ProjectsPage from "./page/projects/ProjectsPage";
import Project from "./components/project/Project";

import { useEffect } from "react";


function App() {

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
    link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';

    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>

            <Route index element={<Main />} />

            <Route path='/projects' element={<ProjectsPage/>} />

            <Route path="/board/:projectId" element={<Board />} />

            <Route path="/project/:projectId" element={< Project/>} />

            <Route path="/login" element={<Auth />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="*" element={<div>Page not found</div>} />

          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
