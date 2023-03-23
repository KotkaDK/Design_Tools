import './App.sass';

import Logo from "./assets/DesignKotkaLogo.png";

import ColorPaletteTool from './components/ColorPaletteTool';
import ColorPickerTool from './components/ColorPickerTool';

function App() {
  return (
    <div className="App">
      <div id="DivHeader">
        <img id="ImgLogo" src={Logo} width="36" height="36" alt="Logo"></img>
      </div>
      <div id="DivContent">
        <ColorPaletteTool/>
        <ColorPickerTool/>
      </div>
    </div>
  );
}

export default App;
