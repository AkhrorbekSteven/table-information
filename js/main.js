const table    = document.querySelector('.table'),
    nameInput  = document.querySelector('#nameInput'),
    ageInput   = document.querySelector('#ageInput'),
    scoreInput = document.querySelector('#scoreInput'),
    select     = document.querySelector('select'),
    sortUp     = document.querySelector('#sortUp'),
    sortDown   = document.querySelector('#sortDown'),
    form       = document.querySelector('.add-box')

function renderer (data) {
    table.innerHTML = null
    
    let sorted = data.sort(function(a, b) {
        if (select.value === '1') {
            if (sortUp.checked) {
                let textA = a.name.toUpperCase()
                let textB = b.name.toUpperCase()
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
            }
            if (sortDown.checked) {
                let textA = a.name.toUpperCase()
                let textB = b.name.toUpperCase()
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0
            } 
        }
        if (select.value === '2') {
            if (sortUp.checked) {
                return a.age - b.age
            }
            if (sortDown.checked) {
                return  b.age - a.age
            }
        }
        if (select.value === '3') {
            if (sortUp.checked) {
                return a.score - b.score
            }
            if (sortDown.checked) {
                return b.score - a.score
            } 
        }
    })

    let i = 1
    for (let element of sorted) {
        let tr = document.createElement('tr')
        let tOrder = document.createElement('td')
        let tName = document.createElement('td')
        let tAge = document.createElement('td')
        let tScore = document.createElement('td') 
    
        tOrder.classList.add('table-data')
        tName.classList.add('table-data')
        tAge.classList.add('table-data')
        tScore.classList.add('table-data')
    
        tOrder.innerText = i++
        tName.innerText = element.name
        tAge.innerText = element.age
        tScore.innerText = element.score
    
        tr.appendChild(tOrder)
        tr.appendChild(tName)
        tr.appendChild(tAge)
        tr.appendChild(tScore)
    
        table.appendChild(tr)
    }
}
renderer(database)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (Number(scoreInput.value) >= 1 && Number(scoreInput.value) <= 100) {
        let newData = {
            name: nameInput.value,
            age: ageInput.value,
            score: scoreInput.value
        } 
        database.push(newData)
        renderer(database)
        window.localStorage.setItem('database', JSON.stringify(database))
        nameInput.value = null
        ageInput.value = null
        scoreInput.value = null
        scoreInput.placeholder = 'Score'
    } else {
        scoreInput.value = null
        scoreInput.placeholder = '[1; 100]'
    }   
})

select.addEventListener('change', () => {
    renderer(database)
})
sortUp.addEventListener('click', () => {
    renderer(database)
})
sortDown.addEventListener('click', () => {
    renderer(database)
})

// cookies // cannot write a data with DOM // can write a data with server // capacity - 4KB
// localStorage // can write a data with DOM // cannot write a data with server // capacity - 5 MB
// sessionStorage // can write a data with DOM // cannot write a data with server // capacity - 5 MB