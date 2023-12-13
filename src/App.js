import './App.scss';
import { SideBar } from './components/sideBar-section/SideBar';
import { Body } from './components/body-section/Body';

function App() {
  return (
    <div className="container">
     <SideBar />
      <Body />
    </div>
  );
}

export default App;
