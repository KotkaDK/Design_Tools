import ColorPreview from "./ColorPreview";
import ColorUIElement from "./ColorUIElement";

function ColorPaletteTool() {
  return (
    <div className="DivToolContainer">
      <div className="DivToolContainerSide left">
        <div className="DivToolSettingsContainer">
          <div className="DivToolSettingsMain">
            <div className="DivToolSettingsColors">
              <ColorPreview color="#FEAE49" number="1"/>
              <ColorPreview color="#3D424A" number="2"/>
              <ColorPreview color="#57BEE6" number="3"/>
              <ColorPreview color="#C0C0BE" number="4"/>
              <ColorPreview color="#F1F1F1" number="5"/>
            </div>
            <div className="DivToolSettingsElements">
              <ColorUIElement elementType="PreviewBackgroundRoot" name="Background"/>
              <ColorUIElement elementType="PreviewIcon" name="Icon"/>
              <ColorUIElement elementType="PreviewBackgroundPrimary" name="Extras 1"/>
              <ColorUIElement elementType="PreviewTextTitle" name="Title"/>
              <ColorUIElement elementType="PreviewBackgroundSecondary" name="Extras 2"/>
              <ColorUIElement elementType="PreviewTextSubtitle" name="Subtitle"/>
              <ColorUIElement elementType="PreviewForegroundRoot" name="Foreground"/>
              <ColorUIElement elementType="PreviewTextRoot" name="Text"/>
            </div>
          </div>
        </div>
      </div>
      <div className="DivToolContainerSide right DivPhonePreview">
        <div className="DivPhone PreviewBackgroundRoot">
          <svg width="793.7" height="1122.5" version="1.1" viewBox="0 0 210 297" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <g stroke-linecap="round" stroke-linejoin="round">
              <path d="m0 0v37.207a37.207 37.207 0 0 0 37.207-37.207h-37.207z" className="PreviewBackgroundPrimary" stroke-width=".265"/>
              <path d="m74.414 161.13v-37.207a37.207 37.207 0 0 0-37.207 37.207z" className="PreviewBackgroundSecondary" stroke-width=".265"/>
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
