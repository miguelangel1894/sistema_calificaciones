import logo from './logo.svg';
import './App.css';

import LoginForm from "./components/ReactiveForm/LoginForm"
import { NavBar } from './components/NavBar/NavBar';
import { Sidebar } from './components/Sidebar/Sidebar';
import {Dashboard} from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavBar />
      </nav>
      <aside>
        <Sidebar/>
      </aside>
      <section>
      <Dashboard/>
      </section>
    </div>
  );
}

export default App;
