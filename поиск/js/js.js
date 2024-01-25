
var words = [
  "яблоко",
  "банан",
  "апельсин",
  "виноград",
  "слива",
  "персик",
];

document.getElementById("search").addEventListener("input", function () {
  var searchValue = this.value.toLowerCase();
  var results = words.filter(function (word) {
    return word.toLowerCase().includes(searchValue);
  });

  var searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";
  if (searchValue.length > 0) {
    results.forEach(function (result) {
      var resultItem = document.createElement("div");
      resultItem.textContent = result;
      resultItem.addEventListener("click", function () {
        document.getElementById("search").value = this.textContent;
        searchResults.style.display = "none";
      });
      searchResults.appendChild(resultItem);
    });

    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (e.target.id !== "search") {
    document.getElementById("searchResults").style.display = "none";
  }
});