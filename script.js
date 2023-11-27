const bar = document.querySelector('input');
const buton = document.querySelector('button');
const ul = document.querySelector('#notlar');
const pinnedUl = document.querySelector('#kayıtlı-notlar');
const localNotes = JSON.parse(localStorage.getItem('pinned notes')) || [];

const ToggleList = (newList, pinnedButton, newListOrder) => {
    if (newList.getAttribute('class')) {
        pinnedUl.removeChild(newList);
        ul.appendChild(newList);
        newList.removeAttribute("class");
        pinnedButton.textContent = 'Pin note';
        const pinnedNotes = newListOrder.textContent;
            let founded = localNotes.indexOf(pinnedNotes)
            if (founded !== -1) {
                localNotes.splice(founded, 1);
                localStorage.setItem("pinned notes", JSON.stringify(localNotes));
            }
    } else {
        newList.setAttribute('class', 'pinned');
        pinnedUl.appendChild(newList);
        pinnedButton.textContent = 'Pinned';
        const pinnedNotes = newListOrder.textContent;
            let founded = localNotes.indexOf(pinnedNotes)
            if (founded !== -1) {
                localNotes.splice(founded, 1);
                localStorage.setItem("pinned notes", JSON.stringify(localNotes));
            } else {
            localNotes.push(pinnedNotes);
            localStorage.setItem("pinned notes", JSON.stringify(localNotes));
        }
    }
}


//kayıtlı notlar
if (localNotes) {
    localNotes.map((pinnedNote) => {
        const newList = document.createElement('li');
        const pinnedButton = document.createElement('button');
        const newListOrder = document.createElement('p');
        const deleteButton = document.createElement('button');
        pinnedButton.style.padding = '7px';
        pinnedButton.style.fontSize = 'medium';
        pinnedButton.style.width = '80px';
        pinnedButton.style.borderRadius = '15px 0 0 15px ';
        pinnedButton.style.border = 'none';
        pinnedButton.style.color = '#6d8eb4';
        pinnedButton.style.transition = '.3s';
        pinnedButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        pinnedButton.textContent = 'Pinned';
        pinnedButton.addEventListener('mouseenter', () => {
            pinnedButton.style.backgroundColor = '#ffffff40';
            pinnedButton.style.cursor = 'pointer';
        })
        pinnedButton.addEventListener('mouseleave', () => {
            pinnedButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            pinnedButton.style.cursor = 'default';
        })
        newList.setAttribute('class', 'pinned');
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
        newListOrder.style.transition = '.3s';
        newListOrder.addEventListener('mouseenter', () => {
            newListOrder.style.backgroundColor = '#ffffff40';
            newListOrder.style.cursor = 'pointer';
        })
        newListOrder.addEventListener('mouseleave', () => {
            newListOrder.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            newListOrder.style.cursor = 'default';
        })
        newListOrder.onclick = () => {
            if (newListOrder.style.textDecoration !== 'line-through') {
                newListOrder.style.textDecoration = 'line-through';
            } else {
                newListOrder.style.textDecoration = 'none';
            }
        }
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
            const pinnedNotes = newListOrder.textContent;
            if (localNotes.includes(pinnedNotes)) {
                let founded = localNotes.indexOf(pinnedNotes)
                if (founded !== -1) {
                    localNotes.splice(founded, 1);
                    localStorage.setItem("pinned notes", JSON.stringify(localNotes));
                }
            } else {
                localNotes.push(pinnedNotes);
                localStorage.setItem("pinned notes", JSON.stringify(localNotes));
            }
        }
        deleteButton.addEventListener('mouseenter', () => {
            deleteButton.style.backgroundColor = '#ffffff40';
            deleteButton.style.cursor = 'pointer';
        })
        deleteButton.addEventListener('mouseleave', () => {
            deleteButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            deleteButton.style.cursor = 'default';
        })
        newListOrder.innerHTML = pinnedNote;
        pinnedUl.prepend(newList);
        newList.prepend(pinnedButton);
        newList.appendChild(newListOrder);
        newList.appendChild(deleteButton);
        pinnedButton.addEventListener('click', () => {
            ToggleList(newList, pinnedButton, newListOrder);
        }
        )
    })
}

//oluşturulan notlar
buton.addEventListener('click', (e) => {
    const newList = document.createElement('li');
    const pinnedButton = document.createElement('button');
    const newListOrder = document.createElement('p');
    const deleteButton = document.createElement('button');
    pinnedButton.style.padding = '7px';
    pinnedButton.style.fontSize = 'medium';
    pinnedButton.style.width = '80px';
    pinnedButton.style.borderRadius = '15px 0 0 15px ';
    pinnedButton.style.border = 'none';
    pinnedButton.style.color = '#6d8eb4';
    pinnedButton.style.transition = '.3s';
    pinnedButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    pinnedButton.textContent = 'Pin note';
    pinnedButton.addEventListener('mouseenter', () => {
        pinnedButton.style.backgroundColor = '#ffffff40';
        pinnedButton.style.cursor = 'pointer';
    })
    pinnedButton.addEventListener('mouseleave', () => {
        pinnedButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        pinnedButton.style.cursor = 'default';
    })
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
    newListOrder.style.transition = '.3s';
    newListOrder.addEventListener('mouseenter', () => {
        newListOrder.style.backgroundColor = '#ffffff40';
        newListOrder.style.cursor = 'pointer';
    })
    newListOrder.addEventListener('mouseleave', () => {
        newListOrder.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        newListOrder.style.cursor = 'default';
    })
    newListOrder.onclick = () => {
        if (newListOrder.style.textDecoration !== 'line-through') {
            newListOrder.style.textDecoration = 'line-through';
        } else {
            newListOrder.style.textDecoration = 'none';
        }
    }
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
        const pinnedNotes = newListOrder.textContent;
        if (localNotes.includes(pinnedNotes)) {
            let founded = localNotes.indexOf(pinnedNotes)
            if (founded !== -1) {
                localNotes.splice(founded, 1);
                localStorage.setItem("pinned notes", JSON.stringify(localNotes));
            }
        } else {
            localNotes.push(pinnedNotes);
            localStorage.setItem("pinned notes", JSON.stringify(localNotes));
        }
    }
    deleteButton.addEventListener('mouseenter', () => {
        deleteButton.style.backgroundColor = '#ffffff40';
        deleteButton.style.cursor = 'pointer';
    })
    deleteButton.addEventListener('mouseleave', () => {
        deleteButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        deleteButton.style.cursor = 'default';
    })
    newListOrder.innerHTML = bar.value;
    ul.prepend(newList);
    newList.prepend(pinnedButton);
    newList.appendChild(newListOrder);
    newList.appendChild(deleteButton);
    bar.value = '';
    pinnedButton.addEventListener('click', () => {
        ToggleList(newList, pinnedButton, newListOrder);
    }
    )
    e.preventDefault();
})

