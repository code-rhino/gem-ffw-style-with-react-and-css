import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div className="app-container">
      <Greeting name="Alex" mood="happy" />
      <Greeting name="Jordan" mood="thoughtful" />
    </div>
  );
}

export default App;
