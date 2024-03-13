function fetchImage() {
  fetch("https://http.dog/101.jpg")
    .then((response) => response.blob())
    .then((data) => {
      // Corrected from blob to data
      const imageUrl = URL.createObjectURL(data);
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      const container = document.getElementById("image-container"); // Make sure this ID matches your HTML container
      container.appendChild(imageElement);
    })
    .catch((error) => console.error(error));
}

const downloadBtn = document.getElementById("btn_data");
// Changed from fetchImage() to fetchImage to correctly pass a function reference
downloadBtn.addEventListener("click", fetchImage);
