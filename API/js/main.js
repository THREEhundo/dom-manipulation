const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=TTPK7P11uRgFfmdAs7bY9dAcBfJaXjkH&s=spongebob",
  { mode: "cors" }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res.data.images.original.url);
    return (img.src = res.data.images.original.url);
  })
  .catch((err) => {
    console.log(err);
  });
