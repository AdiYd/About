import './App.css';
import HomeTest from './pages/homeTest';
// import Home from './pages/home';


function App() {
  return (
    <div className="App relative">
    <div id="blur glow" className='overflow-hidden fixed -top-[35%] -right-[18%] bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] blur-[100px] opacity-50 w-[500px] h-[500px] rounded-full'></div>
    <div id="blur glow" className='overflow-hidden fixed -bottom-[35%] -left-[18%] bg-gradient-to-r from-primary-focus to-[#7bfedd] blur-[100px] opacity-50 w-[450px] h-[450px] rounded-full'></div>
      <header className="App-header">

      </header>
      <HomeTest />
    </div>
  );
}

export default App;
