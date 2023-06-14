window.addEventListener('load', () => {
    document.querySelector('.sidebar_nav').addEventListener('click', function (e) {
        if (e.eventPhase === 2) {
            document.querySelector('.sidebar_body').classList.toggle('sidebar_body_open')
        }
    })
    document.querySelector('.sidebar_button').addEventListener('click', () => {
        document.querySelector('.sidebar_body').classList.toggle('sidebar_body_open')
    })


})


