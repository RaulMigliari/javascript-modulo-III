function useLightTheme() {
    document.body.style.backgroundColor = '#f1f1f1'
    document.body.style.color = '#212529'
}


function useDarkTheme() {
    document.body.style.backgroundColor = '#212529'
    document.body.style.color = '#f1f1f1'
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)