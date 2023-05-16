const API_CD_URL =
  "https://api.nimvio.com/cda/rest/v1/Project_2eb07e5e-2e66-4cba-b369-d8d597fb7e81/contents";

// Fetch json data from Nimvio API CD and return it
async function logJSONData() {
  const response = await fetch(API_CD_URL);
  const jsonData = await response.json();

  return jsonData;
}

// Processes the retrieved data and displays it on the page.
function processData(response) {
  const { Data } = response.data[0];
  const bodyText = Data.bodyText;
  const headline = Data.headline;
  const picture = Data.picture.MediaUrl;

  document.getElementById("bodyText").innerHTML = bodyText;
  document.getElementById("headline").append(headline);
  document.getElementById("banner").src = picture;
}

// Render function
async function render() {
  const data = await logJSONData();
  processData(data);
}

// Call render function
render();
