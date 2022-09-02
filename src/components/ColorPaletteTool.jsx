import ColorPicker from "./ColorPicker";

function ColorPaletteTool() {
  return (
    <div className="DivToolContainer">
      <div className="DivToolContainerSide left">
        <div className="DivToolSettingsContainer">
          <div className="DivToolSettingsMain">
            <div className="DivToolSettingsColors">
              <ColorPicker color="#FEAE49" number="1"/>
              <ColorPicker color="#3D424A" number="2"/>
              <ColorPicker color="#57BEE6" number="3"/>
              <ColorPicker color="#C0C0BE" number="4"/>
              <ColorPicker color="#E6E5DE" number="5"/>
            </div>
            
          </div>
        </div>
      </div>
      <div className="DivToolContainerSide right DivPhonePreview">
        <div className="DivPhone">

        </div>
        <div className="DivPhone">
          
        </div>
      </div>
    </div>
  );
}

export default ColorPaletteTool;
