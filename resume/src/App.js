import './App.css';
import FireDots from './components/fireFlies/firedots';
import HomeTest from './pages/homeTest';
// import './components/fireDots.scss';
// import Home from './pages/home';


function App() {
  return (
    <div className="App relative">
    <div id="blur glow" className='overflow-hidden fixed -bottom-[40%] -left-[20%] bg-gradient-to-r from-[#ff7f5fad] to-[#feb47ba2] blur-[100px] opacity-50 w-[500px] h-[500px] rounded-full'></div>
    <div id="blur glow" className='overflow-hidden fixed -top-[40%] right-[-20%] bg-gradient-to-r from-primary-focus to-[#7bfedd] blur-[100px] opacity-50 w-[450px] h-[450px] rounded-full'></div>
      <header className="App-header">

      </header>
      <HomeTest />
      <FireDots />

    </div>
  );
}

export default App;
