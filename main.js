const API_CD_URL =
  "https://api.nimvio.com/cda/rest/v1/Project_2eb07e5e-2e66-4cba-b369-d8d597fb7e81/contents";

async function logJSONData() {
  const response = await fetch(API_CD_URL);
  const jsonData = await response.json();

  processData(jsonData);
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

logJSONData();
