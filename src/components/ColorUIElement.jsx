function ColorUIElement(props) {
    return (
      <div className="DivUIElementContainer">
        <div className={"DivUIElementColor " + props.elementType}>

        </div>
        <div className="DivUIElementNameContainer">
          <p className="PivUIElementName">{props.name}</p>
        </div>
      </div>
    );
  }
  
  export default ColorUIElement;
  