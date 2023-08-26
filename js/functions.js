
function getElementValueById(id){
    let element = document.getElementById(id)
        let elmentString = element.innerText;
        let elementNumber = parseFloat(elmentString);
        return elementNumber;
}

function setElementValueById(id, value){
    let element = document.getElementById(id);
    element.innerText = value;
}


function getInputValueById(id){
    let element = document.getElementById(id);
    return element.value;
}


function setProductTitle(id, text){
    let boxArea = document.getElementById(id);

    let totalElementCount = boxArea.childElementCount;

    let h3 = document.createElement('h3');
    h3.innerText = (totalElementCount+1) + '.' + ' ' + text;
    h3.classList.add('text-base');
    h3.classList.add('font-medium');
    h3.classList.add('mt-1');
    boxArea.appendChild(h3);
}

