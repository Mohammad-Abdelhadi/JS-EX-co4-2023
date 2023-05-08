// Get the video element from the DOM
const videoElement = document.querySelector("#video");

// Check if the browser supports the getUserMedia method
if (navigator.mediaDevices.getUserMedia) {
  // Request access to the user's camera and microphone
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      // If access is granted, set the stream as the source for the video element
      videoElement.srcObject = stream;
    })
    .catch(function (error) {
      // If access is denied, log an error message to the console
      console.log("Something went wrong");
    });
}

// Get the button element from the DOM
const buttonElement = document.querySelector(".button");

// Function to generate a random string of characters for the photo name
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Add event listener to the button element to capture the current frame of the video and download it as an image
buttonElement.addEventListener("click", function () {
  // Create a new canvas element with the same dimensions as the video element
  const canvas = document.createElement("canvas");
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  // Draw the current frame of the video onto the canvas (flipped horizontally)
  const ctx = canvas.getContext("2d");
  ctx.scale(-1, 1); // Flip the canvas horizontally
  ctx.drawImage(videoElement, -canvas.width, 0, canvas.width, canvas.height);

  // Convert the canvas to an image with the same styling as the video element
  const img = new Image();
  img.src = canvas.toDataURL();
  img.style.cssText = videoElement.style.cssText;

  // Download the image with a random name
  const folderName = "photos"; // Specify the folder name here
    const link = document.createElement("a");
    const name = `${folderName}/${generateRandomString(8)}.png`; // Include the folder name in the suggested filename
    link.download = name;
    link.href = img.src;
    link.click();
});
