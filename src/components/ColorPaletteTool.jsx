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
              <ColorPicker color="#F1F1F1" number="5"/>
            </div>
          </div>
        </div>
      </div>
      <div className="DivToolContainerSide right DivPhonePreview">
        <div className="DivPhone PreviewBackgroundRoot">
          <svg width="74.414mm" height="161.13mm" version="1.1" viewBox="0 0 74.414 161.13" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(196.32 -57.89)">
              <path d="m-196.32 57.89v45.694c9.7632 0.735 23.671-1.7214 33.664-18.007 7.363-11.999 24.122-17.788 40.75-20.502v-7.1851h-74.414z" className="PreviewBackgroundPrimary"/>
              <path d="m-121.91 152.71c-7.9369 10.099-18.701 23.044-26.907 30.083-9.696 8.3177-30.058 16.045-47.507 23.01v13.218h74.414v-66.311z" className="PreviewBackgroundSecondary"/>
            </g>
          </svg>
        </div>
        <div className="DivPhone PreviewBackgroundRoot">

        </div>
      </div>
    </div>
  );
}

export default ColorPaletteTool;
