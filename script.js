const fileList = document.getElementById("fileList");

myFiles.forEach(file => {
    const div = document.createElement("div");
    div.classList.add('file-item');
    div.setAttribute('data-name', file.name.toLowerCase());
    div.textContent = file.name;
    fileList.appendChild(div);
});

const searchBar = document.getElementById('search_bar');
const searchIcon = document.getElementById('search_icon');
const items = document.querySelectorAll('.file-item');

function search() {
  const query = searchBar.value.toLowerCase();
  let found = false;

  items.forEach(item => {
    const match = item.getAttribute('data-name').includes(query);
    item.style.display = match ? 'block' : 'none';
    if (match) found = true;
  });

  const noResults = document.getElementById('noResults');
  noResults.style.display = found ? 'none' : 'block';
}

searchIcon.addEventListener('click', search);
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') search();
});