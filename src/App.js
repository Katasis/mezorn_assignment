// import logo from './logo.svg';
// import './App.css';
import Affiliation from "./Affilitiation";
import CompanyUrl from "./CompanyUrl";
import './Affiliation.css'
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center">
  <div className="w-100 h-100 my-10">    
        <Affiliation/>
        <CompanyUrl />
        <Intro />
        <SocialLinks/>
      
      
    </div>
    </div>
    
    
    
  );
}

export default App;
