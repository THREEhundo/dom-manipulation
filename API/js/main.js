const img = document.querySelector("img");
const searchVal = document.querySelector("input[type=text]");
const submitSearch = document.querySelector("input[type=submit]");

async function requestGif(searchTerm) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=TTPK7P11uRgFfmdAs7bY9dAcBfJaXjkH&s=${searchTerm}`,
      { mode: "cors" }
    );
    const searchData = await response.json();
    img.src = searchData.data.images.original.url;
  } catch (err) {
    console.log(err);
  }
}

submitSearch.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(searchVal.value);
  requestGif(searchVal.value);
  searchVal.value = "";
});

requestGif("spongebob");
