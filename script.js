const bar = document.querySelector('input');
const buton = document.querySelector('button');
const ul = document.querySelector('ul');


buton.addEventListener('click', (e)=> {
    const newList = document.createElement('li');
    const newListOrder = document.createElement('p');
    const deleteButton = document.createElement('button');
    newList.style.display = 'flex';
    newList.style.justifyContent = 'space-between';
    newList.style.border = '1px solid #6d8eb4';
    newList.style.borderRadius = '15px';
    newList.style.marginBottom = '2rem';
    newList.style.textDecoration = 'none';
    newList.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    newListOrder.style.width = '35vw';
    newListOrder.style.wordBreak = 'break-word';
    newListOrder.style.padding = '20px';
    deleteButton.style.padding = '7px';
    deleteButton.style.fontSize = 'medium';
    deleteButton.style.width = '80px';
    deleteButton.style.borderRadius = '0 15px 15px 0';
    deleteButton.style.border = 'none';
    deleteButton.style.color = '#6d8eb4';
    deleteButton.style.transition = '.3s';
    deleteButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        newList.remove();
    }
    deleteButton.addEventListener('mouseenter', () => {
        deleteButton.style.backgroundColor = '#ffffff40';
    })
    deleteButton.addEventListener('mouseleave', () => {
        deleteButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    })
    newListOrder.innerHTML = bar.value;
    ul.prepend(newList);
    newList.appendChild(deleteButton);
    newList.prepend(newListOrder);
    bar.value = '';
    e.preventDefault();
})

