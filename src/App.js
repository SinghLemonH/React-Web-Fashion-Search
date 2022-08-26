import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import FationItem from './components/FationItem';
import FationPost from './components/FationPost';
import fations from './data/fation';
import { useState } from 'react';
import AppSearch from './components/AppSearch';


function App() {
  const [selectedFation, setSelectedFation] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onFationOpenClick(thefation) {
      setSelectedFation(thefation);
  }

  function onFationCloseClick(){
    setSelectedFation(null);
  }
  
  const fationElements = fations.filter((fation) => {
    return fation.title.includes(searchText);
  }).map((fation, index) => {
    return <FationItem key={index} fation={fation} onFationClick={onFationOpenClick} />;
  });

  let fationpost = null
  if (!!selectedFation) { 
    fationpost = <FationPost fation={selectedFation} onBgClick={onFationCloseClick} />
  }

  return (
    <div className="App">
      <AppHeader />
      <section className='app-section'>
        <div className='app-container'>
        <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className='app-grid'>
            {fationElements}
          </div>
        </div>
      </section>
      {fationpost}     
    </div>
  );
}

export default App;
