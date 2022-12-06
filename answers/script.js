// Setting up the HTML File

// 1. Link this JavaScript file to the index.html file.
// 2. Create an array of objects for 3 different animals, each property should include a property for the animal's name and number of legs.
let animalArray = [
    { animal: "dog", "number of legs": 4 },
    { animal: "cat", "number of legs": 4 },
    { animal: "bird", "number of legs": 2 },
  ];
  // 3.  Select the ul element using JS
  let list = document.querySelector("#myList");
  
 
 // for loop to iterate through all of the for loop
  for (i = 0; i < animalArray.length; i++) {
    string = `This animal is a ${animalArray[i].animal} and has ${animalArray[i]["number of legs"]} legs. `;
    let element = document.createElement("li");
  
    //-------------------challenge code for final challenge exercise----
    let html = `<div class="card-body" style="width: 200px">
      <h5 class="card-title">${animalArray[i].animal}</h5>
      <p class="card-text">${string}</p>
    </div>`;
    //-----

    element.innerHTML = html; //without challenge html should be string

    //unique id
    element.setAttribute("id", "item_" + i);

    // event listener added to element
    element.addEventListener("click", function (event) {
      if (event.target.style.color === "red") {
        event.target.style.color = "black";
      } else {
        event.target.style.color = "red";
      }
    });

    // element appended
    list.appendChild(element);
  }