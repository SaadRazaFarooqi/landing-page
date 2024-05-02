document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchField = document.getElementById("search-field");

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault();
    searchField.classList.toggle("activeSearch");
  });

  document.addEventListener("click", function (event) {
    if (!searchIcon.contains(event.target)) {
      searchField.classList.remove("activeSearch");
    }
  });
});
