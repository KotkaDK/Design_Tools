function ColorUIElement(props) {
    const handleClick = (e) => {
      var colorClass = e.target.className.split(" ")[1];
      var element = document.querySelector('.'+colorClass);
      var style = getComputedStyle(element);
      var color = style.backgroundColor;
      var targetClass = '.'+props.elementType;

      document.querySelector(targetClass).style.backgroundColor = color;
      document.querySelector(targetClass).style.fill = color;
      document.querySelector(targetClass).style.color = color;
    }

    return (
      <div className="DivUIElementContainer">
        <div className={"DivUIElementColor " + props.elementType}></div>
        <div className="DivUIElementNameContainer">
          <p className="PivUIElementName">{props.name}</p>
        </div>
        <div className="DivUIElementColorSelectorBox">
          <div className="DivUIElementColorSelector">
            <div onClick={(event) => handleClick(event)} className="DivUIElementColorSelectorOption Color1"></div>
            <div onClick={(event) => handleClick(event)} className="DivUIElementColorSelectorOption Color2"></div>
            <div onClick={(event) => handleClick(event)} className="DivUIElementColorSelectorOption Color3"></div>
            <div onClick={(event) => handleClick(event)} className="DivUIElementColorSelectorOption Color4"></div>
            <div onClick={(event) => handleClick(event)} className="DivUIElementColorSelectorOption Color5"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ColorUIElement;
  