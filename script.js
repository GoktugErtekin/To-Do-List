const bar = document.querySelector('input');
const buton = document.querySelector('button');
const ul = document.querySelector('ul');


buton.addEventListener('click', (e)=> {
    const newList = document.createElement('li');
    const newListOrder = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'sil';
    deleteButton.onclick = () => {
        newList.remove();
    }
    newListOrder.innerHTML = bar.value;
    ul.prepend(newList);
    newList.prepend(newListOrder);
    newList.appendChild(deleteButton);
    bar.value = '';
    e.preventDefault();
})

