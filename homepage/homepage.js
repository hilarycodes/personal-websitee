// const paragraph = document.querySelector('p');
// const description = document.querySelectorAll('span');

// const title = document.getElementById('header');
// title.style.color = 'rgb(165, 81, 40)';

// function redirectToAnotherPage() {
//   alert("You are about to leave this window");
//   window.location.href = "https://www.instagram.com/fdontcaree";
// }
// function redirectToEcommercePage() {
//   alert("You are about to leave this window");
//   window.location.href = "CartQuantity.html";
// }

// function changeColorTheme () {
//   if(document.body.style.backgroundColor = 'white'){
//   document.body.style.backgroundColor = "rgb(50, 50, 50)";  
//   paragraph.style.color = 'rgb(255, 255, 255)';
//   description[0].style.color = 'rgb(255, 255, 255)';
//   description[1].style.color ='rgb(255, 255, 255)';
//   description[2].style.color = 'rgb(255, 255, 255)';
//   description[3].style.color = 'rgb(255, 255, 255)';
//   }
// }

// function changeColorTheme2 () {
//   if(document.body.style.backgroundColor = 'rgb(50, 50, 50)'){
//     document.body.style.backgroundColor = 'white';
//     paragraph.style.color = 'rgb(0, 0, 0)';
//     description[0].style.color = 'rgb(0, 0, 0)';
//     description[1].style.color ='rgb(0, 0, 0)';
//     description[2].style.color = 'rgb(0, 0, 0)';
//     description[3].style.color = 'rgb(0, 0, 0)';
//   }
// }

//console.log(document.querySelectorAll(".link"));

// const student = {
//   name: 'Hilary',
//   age: 19
// };
// student.name = 'James';
// console.log(student.name);

// const createBio = (bio) => {
//   return{
//     getBio: () => bio,
//     setBio: (newBio) => {
//       bio = newBio;
//     },
//   };
// };

// const myBio = createBio('My name is Chukwubuikem');
// console.log(myBio.getBio());

// myBio.setBio('My name is Chukwubuikem Hilary Modilim');
// console.log(myBio.getBio());

// let greeting = 'hello'
// let length = greeting.length;
// console.log(length);
// let upper = greeting.toUpperCase();
// let lower = greeting.toLowerCase();
// console.log(upper);
// console.log(lower);

// const message = {
//   firstMessage: 'howdy'
// };

// const message2 = {
//   firstMessage
// };

// console.log(message2);

//document.body.innerHTML = '<h1>My work is gone</h1>';

// const Console = {
//   WriteLine: function method(param){
//     console.log(param);
//   }
// };

// Console.WriteLine('hi');
// console.log('hi');


const subtract = (d, f) => d - f;

const result = subtract(5, 2);
console.log(result);

let day = "MOND   AY ";
		switch (day.trim().toLowerCase().replace(/\s/g, '')) {
		    case "monday":
		        console.log("Start of the workweek.");
		        break;
		    case "friday":
		        console.log("Weekend is near!");
		        break;
		    default:
		        console.log("It's a regular day.");
}

let colors = ["Blue", "Red", "Purple", "Black"];
let longColors = colors.filter(function(color) {
  return color.length > 3;
});
console.log(colors);
//console.log(color);
console.log(longColors);
let joinedColors = colors.join('@');
console.log(joinedColors);

const c = new Array(5);
c[0] = 3;
c[1] = 42;
c[2] = 32;
c[3] = 94;
c[4] = 26;
c[5] = 53;
console.log(c.sort((a,b) => a-b));
