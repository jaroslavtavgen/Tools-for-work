function createElement(name, parent1)
{
  return parent1.appendChild(document.createElement(name));
}
let tags = what => document.getElementsByTagName(what);

createElement(`textarea`, document.body);
createElement(`button`, document.body);
createElement(`div`, document.body);
tags(`div`)[0].style.display = `inline-block`;
tags(`div`)[0].style.height = `1000px`;
tags(`div`)[0].style.width = `1000px`;
tags(`textarea`)[0].style.height = `400px`;
tags(`textarea`)[0].style.width = `1000px`;
tags(`button`)[0].innerHTML = `OK`;
tags(`button`)[0].addEventListener(`click`, a1);
let index = 0;
let sentences = [];
let words = [];
tags(`textarea`)[0].focus();
function a1(event)
{
  words = tags(`textarea`)[0].value.split(` `);
  tags(`textarea`)[0].value = ``;
  document.removeEventListener(`keyup`, a2);
  document.addEventListener(`keyup`, a2);
  index = 0;
}
function a2(event)
{
  if (document.activeElement.tagName.toLowerCase() === 'textarea') {
    return; // Do nothing if a textarea is focused
  }
  console.log(event.keyCode)
  if(event.keyCode == 37)
  {
    if ( index > 0 ) index--;  
  }
  if(event.keyCode == 39)
  {
    if ( index < (words.length-1) ) index++;  
  }
  tags(`textarea`)[0].value = words[index];
}