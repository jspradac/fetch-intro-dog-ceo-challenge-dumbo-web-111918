console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
  const dogsDiv = document.querySelector("#dog-image-container");
  const breedsUL = document.querySelector("#dog-breeds")
  const dropDown = document.getElementById("breed-dropdown")

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    let imgURLs = response.message;
    imgURLs.forEach(function(img) {
      let imgTag = document.createElement("IMG");
      imgTag.setAttribute("src", `${img}`);
      dogsDiv.append(imgTag);
      console.log(imgTag);
      console.log(dogsDiv);
    })
  })

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    const breeds = response.message
    for (const key in breeds) {
      if (breeds[key].length > 0) {
        breeds[key].forEach(function(e) {
          let breedLI = document.createElement("LI")
          breedLI.setAttribute("id", `${e}-${key}`)
          breedLI.setAttribute("class", `dog-breed`);
          breedLI.innerText = `${e} ${key}`
          breedsUL.append(breedLI);
        })
      }
      let breedLI = document.createElement("LI")
      breedLI.setAttribute("id", `${key}`)
      breedLI.setAttribute("class", `dog-breed`);
      breedLI.innerText = `${key}`
      breedsUL.append(breedLI);
    }
    console.log(breedsUL);
  });

  breedsUL.addEventListener("click", function(e) {
    console.log(e.target.tagName === "LI");
    if (e.target.tagName === "LI") {
      e.target.style.color = "gold";
    }
  });

  dropDown.addEventListener("input", function(e) {

    let dogBreedLis = document.querySelectorAll(".dog-breed")
    dogBreedLis.forEach(function(element) {
      element.hidden = false
      if (element.innerText.charAt(0) != event.target.value) {
        element.hidden = true
      }
    })
    console.log()
  });

})
