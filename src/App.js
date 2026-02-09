import React, { useState } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import QuestionPage from './components/QuestionPage';
import FinalPage from './components/FinalPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      {currentPage === 1 && <WelcomePage onNext={goToNextPage} />}
      {currentPage === 2 && <QuestionPage onNext={goToNextPage} />}
      {currentPage === 3 && <FinalPage />}
    </div>
  );
}

export default App;
