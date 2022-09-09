function ColorPreview(props) {
    return (
      <div className="tooltip">
        <div className={"DivColorPicker Color" + props.number} style={{ backgroundColor: props.color }}>
          <p className="PColorNumber">{props.number}</p>
        </div>
        <span class="tooltiptext">{props.color}</span>
      </div>
    );
  }
  
  export default ColorPreview;
  