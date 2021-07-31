const search = document.querySelector('.fa-search');
const input = document.querySelector('.search_input');
console.log(input.style.display)
search.addEventListener('click', () => {
if (input.style.display === ''){
    input.style.display = 'inline';
} else {
    input.style.display = '';
}
})