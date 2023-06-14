window.addEventListener('load', () => {
    function S(element) {
        return document.querySelector(element)
    }
    function S_All(element) {
        return document.querySelectorAll(element)
    }

    let color_index = 0;
    // console.log( S_All('.more_shoes_deg_pic_wrap>div'))
    let deg_index = 0;
    let color_arr = ['#feda87', '#97c4ce', '#CCC']
    let active_border_style = 'black 3px solid'
    let size_index = 0
    let active_word_color = 'black'
    function get_path(color_index, deg_index) {
        return `img/shoes_more_deg/shoes0_${color_index}/pic${deg_index}.png`
    }

    function shoes_ani(element, ani_name, next_ani_name, close_time) {
        element.style.animation = ani_name;
        setTimeout(() => {
            element.style.animation = next_ani_name;
        }, close_time)
    }


    function active_borde_color(element, border_style, color_style) {
        for (let i = 0; i < element.parentNode.children.length; i++) {

            element.parentNode.children[i].style.border = `${color_arr[color_index]} 2px solid`
            console.log(element)
            // if (color_style) {
            element.parentNode.children[i].style.color = color_style;
            // }
        }
        element.parentNode.children[size_index].style.border = border_style;
        // if (color_style) {
        element.parentNode.children[size_index].style.color = active_word_color;
        // }
    }

    function change_more_deg_shoes(element) {
        for (let i = 0; i < element.length; i++) {
            element[i].src = get_path(color_index, deg_index)
        }
    }
    function color_active_borde(element, border_style) {
        for (let i = 0; i < element.parentNode.children.length; i++) {

            element.parentNode.children[i].style.border = `${color_arr[color_index]} 2px solid`
            console.log(element)
            // if (color_style) {
            // }
        }
        element.parentNode.children[color_index].style.border = active_border_style
        console.log(element)
        // if (color_style) {
    }
    // console.log(S('.more_color_pic>div:first-child'))


    // function animate(element, time, anim) {
    //     element.style.animation = anim;
    //     setTimeout(() => {
    //         element.style.animation = 'none';
    //     }, time)
    // };


    for (let i = 0; i < S_All('.more_shoes_deg_pic').length; i++) {
        S_All('.more_shoes_deg_pic')[i].addEventListener('click', function (e) {
            deg_index = i;
            setTimeout(() => {
                S('.main_shoes_show_pic .pic img').src = get_path(color_index, deg_index)
            }, 900);
            console.log(get_path(color_index, deg_index))
            // console.log(this)

            shoes_ani(S('.show_main_pic_wrap'), 'shoes_rotate 2000ms ease-in-out', 'main_shoes_move_slow', 2050)
        })
    }
    // S('.show_main_pic_wrap').style.animation ="shoes_rotate 500ms ease-in-out"

    // S('.show_main_pic_wrap').style.animation = "shoes_rotate 2000ms ease-in-out"

    // console.log(document.querySelector('.shoes_color'))
    // console.log(S('.more_color_pic'))
    for (let i = 0; i < S_All('.more_color_pic>div').length; i++) {

        S_All('.more_color_pic>div')[i].addEventListener('click', function (e) {
            color_index = i
            setTimeout(() => {
                S('.main_shoes_show_pic .pic img').src = get_path(color_index, deg_index)
            }, 900);
            shoes_ani(S('.show_main_pic_wrap'), 'shoes_rotate 2000ms ease-in-out', 'main_shoes_move_slow', 2050)
            color_active_borde(e.currentTarget, active_border_style)
            for (let i = 0; i < S_All('.size_insise>div').length; i++) {
                S_All('.size_insise>div')[i].style.border = `${color_arr[color_index]} 2px solid`
                // if (color_style) {
                S_All('.size_insise>div')[i].style.color = `${color_arr[color_index]}`;
            }
            console.log(S_All('.size_insise>div')[size_index].style.border)
            S_All('.size_insise>div')[size_index].style.border = active_border_style
            S_All('.size_insise>div')[size_index].style.color = active_word_color
            setTimeout(() => {
                S('.show_main_pic_wrap').style.borderColor = `${color_arr[color_index]}`
            }, 1600)
            for (let i = 0; i < S_All('.more_shoes_deg_pic_wrap>div').length; i++) {
                S_All('.more_shoes_deg_pic_wrap>div')[i].children[0].src = get_path(color_index, i)
            }
        })
    }

    // console.log( S_All('.more_shoes_deg_pic_wrap>div')[0].children[0])
    ///////
    console.log(S_All('.size_insise>div'))
    for (let i = 0; i < S_All('.size_insise>div').length; i++) {
        S_All('.size_insise>div')[i].addEventListener('click', (e) => {
            size_index = i
            active_borde_color(e.currentTarget, active_border_style, color_arr[color_index])

        })
    }



















})














