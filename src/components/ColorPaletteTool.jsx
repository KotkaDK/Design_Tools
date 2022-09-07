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
          
        </div>
        <div className="DivPhone PreviewBackgroundRoot">

        </div>
      </div>
    </div>
  );
}

export default ColorPaletteTool;
