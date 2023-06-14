window.addEventListener('load', () => {
    function S(element) {
        return document.querySelector(element)
    }
    function S_All(element) {
        return document.querySelectorAll(element)
    }
    let index = 0
    let shoes_name = ['Nike Air Max Impact 4', 'Nike ACG Mountain Fly 2', 'Jordan One Take 4 PF']
    let word_color = ['#dfb45e', '#1b1d21', '#dfc445']
    function get_path() {
        return `img/shoes_main/shoes${index}_0/pic0.png`
    }

    function shoes_name_ani() {


        for (let i = 0; i <= (shoes_name[index].length + 2); i++) {
            setTimeout(() => {
                S('.word_ani').innerText = `${shoes_name[index].substring(0, i)}`
            }, (250 * i) + 1000)
        }


    }
    function backgroundColor_change() {
        for (let i = 0; i < S_All('.shoes_index .little_shoes_pic').length; i++) {
            S_All('.shoes_index .little_shoes_pic')[i].style.backgroundColor = ''
        }

        S_All('.shoes_index .little_shoes_pic')[index].style.backgroundColor = '#7f00ff'
    }


    function get_path_ani(time) {
        setTimeout(() => {
            S('.shoes_pic_area img').src = get_path()
        }, time)
    }
    function word_color_change() {
        S('.word_ani').style.color = word_color[index]
    }
    let name_reduce = function () {
        let i = shoes_name[index].length
        let y = shoes_name[index].length + 2
        for (let q = 0; q <= (shoes_name[index].length); q++) {
            setTimeout(() => {
                console.log(`${shoes_name[index].substring(0, (i))}`)
                S('.word_ani').innerText = `${shoes_name[index].substring(0, (i))}`
                i--
            }, (100 * q) + (250 * y) + 1000)
        }
    }
    // word_color_change()
    shoes_name_ani()
    name_reduce()
    backgroundColor_change()
    setInterval(() => {
        index++
        if (index > 2) {
            index = 0
        }
        change_ani(S('.shoes_pic_area img'), 1050, 'change_shoes 1000ms ease-in-out')
        // word_color_change()
        shoes_name_ani()
        name_reduce()
        backgroundColor_change()
        get_path_ani(700)


    }, 10000)

})



function change_ani(element, time, ani_name) {
    element.style.animation = ani_name;
    setTimeout(() => {
        element.style.animation = 'move_slow 4s linear infinite'
    }, time)
}





