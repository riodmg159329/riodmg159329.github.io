window.addEventListener('load', () => {
    document.querySelector('.hamberger').addEventListener('click', function () {
        document.querySelector('.hamberger .open_hamberger').classList.toggle("open_hamberger_opening")
        document.querySelector('.hamberger .close_hamberger').classList.toggle("close_hamberger_opening")
        document.querySelector('.open_hamberger span:nth-child(1)').classList.toggle("open_span_first_opening")
        document.querySelector('.open_hamberger span:nth-child(2)').classList.toggle("open_span_second_opening")
        document.querySelector('.close_hamberger span:nth-child(1) ').classList.toggle("close_span_first_opening")
        document.querySelector('.close_hamberger span:nth-child(2)').classList.toggle("close_span_second_opening")
        document.querySelector('.hamberger_navbar_wrap .clip_wrap').classList.toggle("clip_wrap_opening")
    })
})

