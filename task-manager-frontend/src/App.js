import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Register  from'./pages/register';
import EditTaskPage from './pages/EditTaskPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page (no sidebar) */}
        <Route path="/" element={<Login />} />

        {/* Home page (with sidebar) */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Add Task page (with sidebar) */}
        <Route
          path="/addtask"
          element={
            <Layout>
              <AddTask />
            </Layout>
          }
        />

<Route
  path="/dashboard"
  element={
    <Layout>
      <Dashboard />
    </Layout>
  }
/>

<Route
  path="/register"
  element={
    <Layout>
      <Register />
    </Layout>
  }
/>
<Route
  path="/edittask/:taskId"
  element={
    <Layout>
      <EditTaskPage />
    </Layout>
  }
/>


      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
