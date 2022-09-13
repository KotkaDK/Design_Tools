function ColorUIElement(props) {
    const handleClick = (e) => {
      var colorClass = e.target.className.split(" ")[1];
      var element = document.querySelector('.'+colorClass);
      var style = getComputedStyle(element);
      var color = style.backgroundColor;

      var elements = document.getElementsByClassName(props.elementType);
      for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor = color;
        elements[i].style.fill = color;
        elements[i].style.color = color;
      }
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
  