function ColorPreview(props) {
    return (
      <div className="DivTooltipColorPreview">
        <div className={"DivColorPicker Color" + props.number}>
          <p className="PColorNumber">{props.number}</p>
        </div>
        <span class="SpanTooltipColorPreviewText">{props.color}</span>
      </div>
    );
  }
  
  export default ColorPreview;
  