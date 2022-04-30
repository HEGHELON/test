function AgeInDays() {
  let birthyear = prompt('What is yor birthyear?');
  let birthday = (2022-birthyear)*365;
  console.log(birthday);

  let h1 = document.createElement("h1")
  let outputText = document.createTextNode("You are " + birthday + " days old")
  h1.setAttribute('id', 'birthdays')
  h1.appendChild(outputText);
  document.getElementById('output').appendChild(h1);
} 

function Reset() {
 document.getElementById('birthdays').remove();
 
}

function generateCat() {
  let div = document.getElementById('generateImage');
  let image = document.createElement('img');
  let randomNumber = Math.floor(Math.random()*90)+10;
  console.log(randomNumber);
  image.src = 'https://picsum.photos/2' + randomNumber;
  image.setAttribute('width','150px');
  image.setAttribute('height','150px');
  image.addEventListener('click', ()=>{image.setAttribute('id','imgMouseEnter');
  image.addEventListener('mouseout', ()=>{
    image.removeAttribute('id','imgMouseEnter')
    /**/
  });});
  image.addEventListener('dblclick', ()=>{
    document.getElementById('imgMouseEnter').remove();
  })
  image.removeAttribute
  div.appendChild(image);
  
}