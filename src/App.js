import './App.css';
import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import  Header  from "./components/Header";
import Hero from './components/Hero';
import ScheduleForm from './components/userInfo/ScheduleForm';
import Search from './components/Search';
import { FetchingData } from './components/userInfo/FetchingData';
import DisplayPlaylistTable from './components/suggestedPlaylist/DisplayPlaylistTable';


function App() {
  return (
    <div className="App overflow-hidden">
      
      <DisplayPlaylistTable />
      {/* <ScheduleForm /> */}
      {/* <FetchingData /> */}
      {/* <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer /> */}
    </div>
  );
}

export default App;
