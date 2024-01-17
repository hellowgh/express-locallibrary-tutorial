import './App.css';
import { Button } from 'antd';
import libraryApi from './api/libraryApi.js';

function App () {
  const onClick = (e) => {
    libraryApi.get();
  };

  return (
    <>
      <Button onClick={onClick} type="primary">primary button</Button>
    </>
  );
}

export default App;
