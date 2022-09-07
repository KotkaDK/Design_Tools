function ColorPreview(props) {
    return (
      <div className={"DivColorPicker Color" + props.number} style={{ backgroundColor: props.color }}>
        <p className="PColorNumber">{props.number}</p>
      </div>
    );
  }
  
  export default ColorPreview;
  