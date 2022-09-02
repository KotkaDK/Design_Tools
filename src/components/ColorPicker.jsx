function ColorPicker(props) {
    return (
      <div className="DivColorPicker Color" style={{ backgroundColor: props.color }}>
        <p className="PColorNumber">{props.number}</p>
      </div>
    );
  }
  
  export default ColorPicker;
  