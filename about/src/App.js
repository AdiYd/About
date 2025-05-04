import './App.css';
import FireDots from './components/fireFlies/firedots';
import Home from './pages/home';
// import './components/fireDots.scss';
// import Home from './pages/home';


function App() {
  return (
    <div className="App relative">
    {/* <div id="blur glow" className='overflow-hidden fixed -bottom-[40%] -left-[20%] bg-gradient-to-r from-[#ff7f5fad] to-[#feb47ba2] blur-[100px] opacity-50 w-[40vw] h-[40vh] rounded-full'></div> */}
    <div id="blur_glow" className='overflow-hidden animate-spin* fixed -bottom-[40%] -left-[20%] bg-gradient-to-r from-accent-focus/90 to-accent-focus/80 blur-[200px]* opacity-50 w-[40vw] h-[65vh] rounded-full'></div>
    <div id="blur_glow" className='overflow-hidden animate-spin* fixed -top-[40%] -right-[20%] bg-gradient-to-r from-primary-focus/90 to-primary-focus/80 blur-[200px]* opacity-50 w-[40vw] h-[65vh] rounded-full'></div>
      <header className="App-header">

      </header>
      <Home />
      <FireDots />

    </div>
  );
}

export default App;
