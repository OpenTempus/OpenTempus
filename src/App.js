import './App.css';
import About from './component/about';
import Header from './component/header';
import ImageContent from './component/imageContent';
import Openlink from './component/openlink';
import Partner from './component/partner';
import Team from './component/team';
import Footer from './component/footer'

function App() {
  return (
    <div className="App">
     <div>
       <Header/>
       <About/>
       <Openlink/>
       <Partner/>
       <ImageContent/>
       <Team/>
       <Footer/>
     </div>
    </div>
  );
}

export default App;
