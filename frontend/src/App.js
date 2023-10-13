import "./App.css";
import MainMenuPanel from "./components/MainMenuPanel";
import CustomHeader from "./components/CustomHeader";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <CustomHeader />
      </div>
      <div className="mainMenu"> 
        <MainMenuPanel className="menuItems"/>
      </div>
    </div>
  );
}

export default App;
