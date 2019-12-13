const form = document.getElementById('vote-form');

form.addEventListener('submit', (e) => {
    const choice = document.querySelector('input[name=flavour]:checked').value;
    const data = { flavour: choice };

    e.preventDefault();
});