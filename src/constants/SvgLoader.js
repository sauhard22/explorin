// svgLoader.js
export const drawLineBetweenCheckboxes = (parentCheckboxId, childCheckboxId) => {
    const parentCheckbox = document.getElementById(parentCheckboxId);
    const childCheckbox = document.getElementById(childCheckboxId);
    
    if (parentCheckbox && childCheckbox) {
      const parentRect = parentCheckbox.getBoundingClientRect();
      const childRect = childCheckbox.getBoundingClientRect();
  
      const svg = document.getElementById("connector-svg");
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
      // Set line attributes
      line.setAttribute("x1", parentRect.right);
      line.setAttribute("y1", parentRect.top + parentRect.height / 2);
      line.setAttribute("x2", childRect.right);
      line.setAttribute("y2", childRect.top + childRect.height / 2);
      line.setAttribute("stroke", "#efefef");
      line.setAttribute("stroke-width", "2");
  
      svg.appendChild(line);
    }
  };
  
  export const clearLines = () => {
    const svg = document.getElementById("connector-svg");
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
  };
  