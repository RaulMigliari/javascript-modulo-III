document.getElementById('sessionBtn').addEventListener('click', function() {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function() {
    const info = sessionStorage.getItem('info')
    alert("A informação salva é: " + info)
})

document.getElementById('localBtn').addEventListener('click', function() {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function() {
    const t = localStorage.getItem('text')
    alert("O texto salvo no local storage é: " + t)
})

document.getElementById('cookieBtn').addEventListener('click', function() {
    const input = document.getElementById('cookie')
    //! FORMATO PARA SALVAR UM COOKIE: cookieName = value; expires=UTCStringDate; path=/
    //* 'expires' informa a data de expiração do cookie no formato UTCStringDate
    //* 'path' informa os caminhos que o cookie vai estar disponível
    // é possível declarar o cookie apenas com o nome

    //Declaração das constantes para cada parte do cookie
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date (2025,2,2) + ';'
    const path  = 'path=/;'

    //Concatenação das constantes na criação do cookie
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click',function() {

    const input = document.getElementById('cookie2')

    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date (2025,1,2) + ';'
    const path  = 'path=/;'

    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})