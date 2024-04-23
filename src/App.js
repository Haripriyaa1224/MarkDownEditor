import logo from './logo.svg';
import './App.css';
import LandingScreen from './Screen/LandingScreen';
import { OnChangeHandler } from './Screen/OnChangeHandler';
import { ModifyArray } from './Screen/ModifyArray';
import { UseEffect } from './Screen/UseEffect';
import MarkDownEditorr from './Component/MarkDownEditorr';
import Notes from './Screen/Notes';

function App() {
  return (
    <div className="App">
     {/* <LandingScreen /> */}
     {/* <OnChangeHandler /> */}
     {/* <ModifyArray /> */}
     {/* <UseEffect /> */}
     {/* <MarkDownEditorr /> */}
     <Notes />
    </div>
  );
}

export default App;
