const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const helperText = document.getElementById("helper-text");

function updateImageDisplay(animal){
    for (let i = 0; i < images.length; i++){
        var imageElement = images[i];

        if (animal === "all" || imageElement.classList.contains(animal)){
            imageElement.style.display = "block";
        } else {
            imageElement.style.display = "none";
        }   
    }
}

function updateClickedButton(selectedButton) {
    for (let i = 0; i < button.length; i++) {
        if (button[i] === selectedButton) {
            button[i].classList.add('selected');
        } else {
            button[i].classList.remove('selected');
        }
    }
}
function updateHelperText(animal) {
    helperText.innerHTML = "You're looking at pictures of " + animal;
}

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(event){
        event.preventDefault();
        var animal = button[i].dataset.animal;
        console.log(animal);
        updateImageDisplay(animal);
        updateClickedButton(button[i]);
        updateHelperText(animal);
        });
}

function updateHelperText(animal){
    switch(animal) {
        case "dog":
            helperText.innerHTML = "What kind of dog doesn't bark? A hush puppy!"
          break;
        case "flamingo":
            helperText.innerHTML = "Yesterday, my wife finally told me I had to stop acting like a flamingo. Reluctantly, I had to put my foot down!"
          break;
          case "gecko":
            helperText.innerHTML = "I was once with a friend who saw a gecko in the wild and proceeded to take more than 300 pictures of it. Sadly, the doctor later told him that he had a reptile dysfunction!"
          break;
          case "sheep":
            helperText.innerHTML = "What do sheep wear to the beach? A baa-kini!"
          break;
        default:
          helperText.innerHTML = "Please select an animal above.";
      }
      return helperText;
}