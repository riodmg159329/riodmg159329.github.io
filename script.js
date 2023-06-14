
window.addEventListener('load',()=>{

// document.querySelector('.hamberger').addEventListener('click', function () {
//     document.querySelector('.hamberger .open_hamberger').classList.toggle("open_hamberger_opening")
//     document.querySelector('.hamberger .close_hamberger').classList.toggle("close_hamberger_opening")
//     document.querySelector('.open_hamberger span:nth-child(1)').classList.toggle("open_span_first_opening")
//     document.querySelector('.open_hamberger span:nth-child(2)').classList.toggle("open_span_second_opening")
//     document.querySelector('.close_hamberger span:nth-child(1) ').classList.toggle("close_span_first_opening")
//     document.querySelector('.close_hamberger span:nth-child(2)').classList.toggle("close_span_second_opening")
//     document.querySelector('.hamberger_navbar_wrap .clip_wrap').classList.toggle("clip_wrap_opening")
// })


let top_blue_right = document.querySelector('.top_blue_right');
let top_blue_right_down = document.querySelector('.top_blue_right_down');
let original = window.innerHeight
let shoes_part_one = document.querySelector('.shoes_part_one')
let shoes_part_one_height = document.querySelector('.shoes_part_one').clientHeight
let part_two_shoes = document.querySelector('.part_two_shoes')
let shoes_part_one_two_wrap = document.querySelector('.shoes_part_one_two_wrap')
let shoes_part_one_two_wrap_height = document.querySelector('.shoes_part_one_two_wrap').clientHeight
// console.log(window.innerWidth + 'pppppppppppppp')
let scrollYposition = window.pageYOffset;
let scrollXposition = window.pageXOffset;
let progress = document.querySelectorAll('.progress_bar ul a')
const screenHeight = window.innerHeight


window.addEventListener('resize', function () {
    if (window.innerWidth <= 1800) {
        this.removeEventListener('scroll', scrolling);
        top_blue_right.style.transform = '';
        top_blue_right.style.width = `10.515247108%`
        top_blue_right.style.backgroundColor = '#0352fa'
        top_blue_right.style.height = `15.720294426vw`
        top_blue_right.style.borderWidth = '0px';
        top_blue_right_down.style.transform = '';
        part_two_shoes.style.transform = '';
        const number_zero_one_span = document.querySelector('.number_zero_one span');
        number_zero_one_span.textContent = '01'
    } else {
        this.addEventListener('scroll', scrolling);
    }
    shoes_part_one_two_wrap_height = document.querySelector('.shoes_part_one_two_wrap').clientHeight
    shoes_part_one_height = document.querySelector('.shoes_part_one').clientHeight

    //  scrollYposition = window.pageYOffset;
    // scrollXposition = window.pageXOffset;
    // console.log(window.innerHeight)
    // if (window.pageYOffset > part_two_shoes.clientHeight) {
    //     const top_blue_right_down = document.querySelector('.top_blue_right_down');
    //     top_blue_right_down.style.transform = `translateY(${window.innerHeight}px) translateX(${scrollXposition - (scrollYposition) * 0.9}px)`;
    //     const top_blue_right = document.querySelector('.top_blue_right');
    //     top_blue_right.style.transform = `translateY(${window.innerHeight - 200}px) translateX(${scrollXposition - (scrollYposition) * 0.26}px) rotate(${-scrollYposition / 69}deg)`;
    // }
}
)



// console.log(document.body.clientWidth)
// let scrollbarWidth = window.innerWidth - document.body.clientWidth
// console.log(window.innerHeight)
// console.log(scrollbarWidth)
// console.log( window.)

if (window.innerWidth <= 1800) {
    window.removeEventListener('scroll', scrolling);
} else {
    window.addEventListener('scroll', scrolling);
}

if (window.pageYOffset >= (shoes_part_one_two_wrap_height) * 0.9) {
    progress[1].classList.add('progress_bar_color')
    progress[2].classList.add('progress_bar_color')
} else if (window.pageYOffset > shoes_part_one_height * 0.7) {
    progress[1].classList.add('progress_bar_color')
}
// let fake = document.querySelectorAll('.progress_bar ul li+li')
// let fake_style = window.getComputedStyle(fake[0], '::before')
// console.log(fake_style.color)
// let css = document.querySelector('#css')
// let d = css.sheet
// let q = document.querySelector("#q")
// console.log(q)
// d.insertRule("#q#q::before{color:blue;}", 0)
window.addEventListener('scroll', dot);
// let shoes_part_one_two_wrap_height = document.querySelector('.shoes_part_one_two_wrap')
shoes_part_one_height = document.querySelector('.shoes_part_one').clientHeight
function dot() {
    if (window.pageYOffset >= shoes_part_one_two_wrap_height * 0.9) {
        // console.log(33333)
        progress[2].classList.add('progress_bar_color')
        progress[1].classList.add('progress_bar_color')
    } else if (shoes_part_one_two_wrap_height * 0.9 > window.pageYOffset && window.pageYOffset > shoes_part_one_height * 0.7) {
        // console.log(2222222)
        progress[1].classList.add('progress_bar_color')
        progress[2].classList.remove('progress_bar_color')
    } else {
        // console.log(11111111)
        progress[2].classList.remove('progress_bar_color')
        progress[1].classList.remove('progress_bar_color')
    }
}
function scrolling() {


    // console.log(window.pageYOffset)
    scrollYposition = window.pageYOffset;
    scrollXposition = window.pageXOffset;

    // console.log(window.scrollY)
    // const top_blue_right_down = document.querySelector('.top_blue_right_down');
    // console.log(top_blue_right_down.offsetParent)
    // const top_blue_right = document.querySelector('.top_blue_right');
    //    console.log(top_blue_right.offsetTop ) 
    // console.log(top_blue_right.offsetParent)

    
    // console.log(shoes_part_one_height + '5555555555')
    // console.log(part_two_shoes.clientHeight + ':666666666666')
    // console.log(screenHeight + ':77777777')
    // console.log(scrollYposition)
    if (window.pageYOffset <= screenHeight) {
        // const top_blue_right_down = document.querySelector('.top_blue_right_down');
        top_blue_right_down.style.transform = `translateY(${scrollYposition}px) translateX(${scrollXposition - (scrollYposition) * 0.9}px)`;
        // console.log(top_blue_right_down.style.transform)
        //    if( top_blue_right_down.style.transform.translateY)
        // const part_two_left_black = document.querySelector('.part_two_left_black')
        // part_two_left_black.style.opacity = `${scrollYposition / 500}`
        // const top_blue_right = document.querySelector('.top_blue_right')


        top_blue_right.style.transform = `translateY(${scrollYposition * 1.137}px) translateX(${scrollXposition - (scrollYposition) * 0.273}px) rotate(${-scrollYposition / 67}deg)`;
        top_blue_right.style.width = `${144 + (scrollYposition) * 0.50}px`
        top_blue_right.style.backgroundColor = 'transparent'
        top_blue_right.style.height = `${299 + (scrollYposition) * 0.54}px`
        top_blue_right.style.borderWidth = `${100 - (scrollYposition) * 0.037}px`

        part_two_shoes.style.transform = `translateX(${scrollXposition - (scrollYposition) * 1.3}px) rotate(-15deg)`
        // const part_two_name = document.querySelector('.part_two_name');
        // console.log('width:' + top_blue_right.style.width);
        // console.log('height:' + top_blue_right.style.height);
        // console.log('borderWidth:' + top_blue_right.style.borderWidth)
        // part_two_name.style.opacity = `${scrollYposition / 600}`
        //     function getPosition(element) {
        //     var x = 0;
        //     var y = 0;
        //     while (element) {
        //         x += element.offsetLeft - element.scrollLeft + element.clientLeft;
        //         y += element.offsetTop - element.scrollLeft + element.clientTop;
        //         element = element.offsetParent;
        //     }

        //     return { x: x, y: y };
        // }

        // const top_blue_right_down_position = getPosition(top_blue_right_down)
        // console.log(top_blue_right_down_position)
    } else {
        // const top_blue_right_down = document.querySelector('.top_blue_right_down');
        top_blue_right_down.style.transform = `translateY(${window.innerHeight}px) translateX(${-953}px)`;
        // const top_blue_right = document.querySelector('.top_blue_right')
        top_blue_right.style.transform = `translateY(${window.innerHeight + 140}px) translateX(${-300}px) rotate(${-16}deg)`;


    }



    // top_blue_right_down.style.transform = ``;
    // console.log(window.scrollY)
    if (window.pageYOffset >= shoes_part_one_height / 3) {
        // const top_blue_right = document.querySelector('.top_blue_right')
        top_blue_right.style.zIndex = '3'
        const number_zero_one_span = document.querySelector('.number_zero_one span');
        number_zero_one_span.textContent = '02'
    } else {
        const number_zero_one_span = document.querySelector('.number_zero_one span');
        number_zero_one_span.textContent = '01'
    }

    // let top_blue_right_down = document.querySelector('.top_blue_right_down')
    // const y =top_blue_right_down.getAttribute("width")

    // let position =
    // console.log(position.x)
}

})