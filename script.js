const form = document.getElementById('addFileForm');
const fileList = document.getElementById('fileList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('fileName').value;
    const url = document.getElementById('fileUrl').value;

    const response = await fetch('https://your-backend-url.com/files', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url }),
    });

    if (response.ok) {
        const newFile = await response.json();
        displayFile(newFile);
        form.reset();
    }
});

async function loadFiles() {
    const response = await fetch('https://your-backend-url.com/files');
    const files = await response.json();
    files.forEach(displayFile);
}

function displayFile(file) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${file.url}" target="_blank">${file.name}</a>`;
    fileList.appendChild(listItem);
}

loadFiles();
