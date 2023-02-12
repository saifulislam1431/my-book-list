let count = 0;
document.getElementById('btn').addEventListener('click', function() {
    count += 1;
    const bookName = document.getElementById('book-name');
    const book = bookName.value;
    const authorName = document.getElementById('author-name');
    const author = authorName.value;

    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${count}</td>
        <td>${book}</td>
        <td>${author}</td>
        <td>
        <button id="btn-01">Delete</button>
        <button id="btn-02">Awesome</button>
        </td>
    `
    tableBody.appendChild(tr);
    bookName.value = '';
    authorName.value = '';

    const deleteButtons = document.querySelectorAll('#btn-01')
    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', function(event) {
            event.target.parentNode.parentNode.style.display = 'none'
        })
    }


})