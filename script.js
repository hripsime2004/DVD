const slider = document.getElementById("myRange");
const slider2 = document.getElementById("nestRange");
const container = document.querySelector('.container');
const outlineContainer = document.querySelector(".container-outlines");
let currentBackground = '';

const clearDivs = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };
  
  const createNestedDivs = (parent, levels) => {
    let currentParent = parent;
    for (let i = 0; i < levels; i++) {
      const newDiv = document.createElement('div');
      newDiv.style.width = `calc(${ levels - i} * var(--_size) / ${levels})`; 
      newDiv.style.height = `calc(${ levels - i} * var(--_size) / ${levels})`;
      currentParent.appendChild(newDiv);
      currentParent = newDiv;
    }
  };
  
  const rotateDivs = () => {
    const rotatingDivs = container.querySelectorAll("div");
    let rotation = slider.value;
    rotatingDivs.forEach((div, index) => {
      div.style.transform = `rotate(${rotation * (index + 1)}deg)`;
    });
  };
  
  const updateNestedDivs = () => {
    const levels = slider2.value;
    clearDivs(container);
    clearDivs(outlineContainer);
    createNestedDivs(container, levels);
    createNestedDivs(outlineContainer, levels);
    rotateDivs();
  };
  
  slider.oninput = rotateDivs;
  slider2.oninput = updateNestedDivs;
  
  updateNestedDivs();
  
  let optionElems = document.querySelectorAll('.options div');
  optionElems.forEach((elem, index) => {
    elem.addEventListener('click', function() {
        container.className = 'container'; 
        if (index === 1) container.classList.add('alt1');
        if (index === 2) container.classList.add('alt2');
    });
  });