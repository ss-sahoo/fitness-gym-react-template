import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero';
import Join from './component/Join/Join';
import Plans from './component/plans/Plans';
import Programs from './component/Programs';
import Reason from './component/Reason/Reason';
import Textimonial from './component/Testimonial/Textimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reason/>
          <Plans/>
          <Textimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
