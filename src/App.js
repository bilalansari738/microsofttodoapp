import './App.css';
import Navbar from './components/navBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Myday from './pages/myDay/Myday';
import SideNavbar from './components/body/SideNavbar';
import RightOptions from './components/body/RightOptions'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='body-container'>
        <SideNavbar />
        <Myday />
        <RightOptions />
      </div>
    </div>
  )
}

export default App;
