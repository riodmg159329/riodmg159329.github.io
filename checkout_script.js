window.addEventListener('load', function () {


    function S(element) {
        return document.querySelector(element)
    }

    function S_All(element) {
        return document.querySelectorAll(element)
    }

    let wrap_style = S('.creditcard_wrap').style

    S('.creditcard_touch').addEventListener('click', function () {
        if (wrap_style.transform != 'rotateY(180deg)') {
            wrap_style.transform = 'rotateY(180deg)'
        } else {
            wrap_style.transform = 'rotateY(0deg)'
        }
    })


    const reg_num = /^[0-9]*$/;
    const reg_eng = /^[A-Z]*$/;
    S('#card_number').addEventListener('input', e => {
        if (e.target.value.substr(0, 1) == 4) {
            S('.card_type img').src = 'img/bank_logo_1.png'
            S('.bank_footer_wrap img').src = 'img/bank_logo_1.png'
        } else {
            S('.card_type img').src = 'img/bank_logo_0.png'
            S('.bank_footer_wrap img').src = 'img/bank_logo_0.png'
        }


        let temp = [...e.target.value]
        for (let i = 0; i < temp.length; i++) {
            if ((i + 1) % 5 == 0) {
                temp[i] = '';
            }
        }

        S('.verify').innerText = '';
        if (!reg_num.test(temp.join(''))) {
            S('.verify').innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>請輸入數字0~9`;
        };

        let sum = '';
        for (let i = 0; i < (19 - e.target.value.length); i++) {
            sum += '?'
        }
        let total = e.target.value + sum;
        total = total.split('');
        for (let i = 0; i < total.length; i++) {
            if ((i + 1) % 5 == 0) {
                total[i] = '-';
                total[i] = total[i].fontcolor('#037ff3')

            }
        }
        S('.card_number_word').innerHTML = total.join('');


    })


    S('#card_number').addEventListener('keypress', e => {

        if ((e.currentTarget.value.length + 1) % 5 == 0 && e.currentTarget.value.length != 19) {
            e.currentTarget.value += '-';
        }
    })

    S('#card_holder').addEventListener('input', e => {
        S('.eng_name').innerHTML = ''
        if (e.target.value) {
            if (!reg_eng.test(e.target.value.toUpperCase())) {
                console.log(S('.eng_name'))
                S('.eng_name').innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>請輸入a~z英文大小寫`;
            };
            S('.card_holder_name').innerText = e.target.value
        } else {
            S('.card_holder_name').innerText = 'Full Name'
        }
        S('.company_ccv_wrap .company').innerText = `${e.currentTarget.value}`;
    }
    )




    S('#month_select').addEventListener('change', e => {
        S('.exp_month').innerText = e.target.value
    })


    S('#year_select').addEventListener('change', e => {
        S('.exp_year').innerText = e.target.value
    })


    S('#ccv').addEventListener('input', e => {
        S('.ccv_check').innerHTML = ''
        if (!reg_num.test(e.target.value)) {
            S('.ccv_check').innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>請輸入數字0~9`;
        };
        S('.ccv_number_area').innerText = e.target.value
    })

    function invertedFront_num() {
        if (wrap_style.transform != 'rotateY(0deg)') {
            wrap_style.transform = 'rotateY(0deg)'
        }
        S('.card_number_word').classList.add('addborder')
        S('.input_area label[for="card_number"]').style.color = 'white'
    }
    function invertedFront_holder() {
        if (wrap_style.transform != 'rotateY(0deg)') {
            wrap_style.transform = 'rotateY(0deg)'
        }
        S('.input_area label[for="card_holder"]').style.color = 'white'
        S('.card_holder').classList.add('addborder')
    }
    function invertedFront_select_month() {
        if (wrap_style.transform != 'rotateY(0deg)') {
            wrap_style.transform = 'rotateY(0deg)'
        }
        S('.input_area label[for="month_select"]').style.color = 'white'
        S('.card_month_year').classList.add('addborder')
    }
    function invertedFront_select_year() {
        if (wrap_style.transform != 'rotateY(0deg)') {
            wrap_style.transform = 'rotateY(0deg)'
        }
        S('.input_area label[for="year_select"]').style.color = 'white'
        S('.card_month_year').classList.add('addborder')
    }

    function invertedBack_ccv() {
        if (wrap_style.transform != 'rotateY(180deg)') {
            wrap_style.transform = 'rotateY(180deg)'
        }
        S('.input_area label[for="ccv"]').style.color = 'white'
        S('.ccv_number_area').classList.add('addborder')
    }


    function turnBack_num() {
        S('.input_area label[for="card_number"]').style.color = ''
        S('.card_number_word').classList.remove('addborder')
    }
    function turnBack_holder() {
        S('.input_area label[for="card_holder"]').style.color = ''
        S('.card_holder').classList.remove('addborder')
    }
    function turnBack_select_month() {
        S('.input_area label[for="month_select"]').style.color = ''
        S('.card_month_year').classList.remove('addborder')
    }
    function turnBack_select_year() {
        S('.input_area label[for="year_select"]').style.color = ''
        S('.card_month_year').classList.remove('addborder')
    }
    function turnBack_ccv() {
        S('.input_area label[for="ccv"]').style.color = ''
        S('.ccv_number_area').classList.remove('addborder')
    }


    S('.ccv').addEventListener('focus', invertedBack_ccv)
    S('#card_number').addEventListener('focus', invertedFront_num)
    S('#card_holder').addEventListener('focus', invertedFront_holder)
    S('#month_select').addEventListener('focus', invertedFront_select_month)
    S('#year_select').addEventListener('focus', invertedFront_select_year)



    S('.ccv').addEventListener('blur', turnBack_ccv)
    S('#card_number').addEventListener('blur', turnBack_num)
    S('#card_holder').addEventListener('blur', turnBack_holder)
    S('#month_select').addEventListener('blur', turnBack_select_month)
    S('#year_select').addEventListener('blur', turnBack_select_year)




    //   S('.card_number_word').innerHTML= sum;
    //      for( let i=1;i<=S('#card_number').value.length;i++){
    //      if(i%4==0 && i!=16){
    //             sum+=S('#card_number').value[i-1]+'-';
    //     }else{
    //         sum+= S('#card_number').value[i-1];
    //     }
    //  S('.card_number_word').innerHTML=sum;
    //



    // 鞋子動畫




    let index = 0
    let color = 0
    let deg = 0
    let dot_index = S_All('.dot_index');
    let shoes_title_span = S_All('.shoes_title span:nth-child(1)')
    let shoes_title = ['Nike Air Max Impact 4(GOLD)', 'Nike ACG Mountain Fly 2(WHITE)', 'Jordan One Take 4 PF(YELLOW)'];
    // console.log(more_deg_pic[0].children[0].children[0].children[0].src)
    // console.log(S_All('.prev_next_bar .prev'))
    // console.log(S_All('.prev_next_bar .next'))
    // S_All('prev_next_bar .next')
    // S_All('prev_next_bar .next')
    function more_deg_pic_func() {

    }


    function ani(select, ani_name, close_time) {
        select.style.animation = ani_name;
        setTimeout(() => {
            select.style.animation = 'none';
        }, close_time);
    }

    function transition_ani() {
        setTimeout(() => {
            for (let q = 0; q < S_All('.showpic img').length; q++) {
                S_All('.showpic img')[q].src = get_path('shoes_main', index, color, deg, 'png')
            }
            for (let i = 0; i < S_All('.more_deg_pic').length; i++) {
                for (let deg = 0; deg < S_All('.more_deg_pic')[i].children.length; deg++) {
                    S_All('.more_deg_pic')[i].children[deg].children[0].children[0].src = get_path('shoes_more_deg', index, color, deg, 'png');
                }
            }
        }, 700)
        for (let i = 0; i < S_All('.showpic img').length; i++) {
            ani(S_All('.showpic img')[i], `shoes_move_up  1.6s ease-in`, 1650);
            ani(S_All('.shadow')[i], `shoes_move_up_shadow 1.6s ease-in`, 1650);
        }
    }

    function get_path(main_moredeg, main_order, color_order, shoeslist_index, file_type) {
        return `img/${main_moredeg}/shoes${main_order}_${color_order}/pic${shoeslist_index}.${file_type}`
    }

    function dot_change() {
        for (let y = 0; y < dot_index.length; y++) {
            for (let w = 0; w < dot_index[0].children.length; w++) {
                dot_index[y].children[w].classList.remove('dot_index_active');
            }
            dot_index[y].children[index].classList.add('dot_index_active')
        }
    }

    function span_change() {
        for (let i = 0; i < shoes_title_span.length; i++) {
            ani(S_All('.cover_animation')[i], 'span_ani 800ms ease', 850)
            setTimeout(() => {
                shoes_title_span[i].innerText = `${shoes_title[index]}`
            }, 700)
            // animate(titleOverlay, 850, 'title 800ms ease')
        }
    }





    for (let i = 0; i < S_All('.more_deg_pic').length; i++) {
        for (let p = 0; p < S_All('.more_deg_pic')[i].children.length; p++) {
            S_All('.more_deg_pic')[i].children[p].children[0].addEventListener('click', function () {
                deg = p;
                for (let t = 0; t < S_All('.more_deg_pic').length; t++) {
                    for (let u = 0; u < S_All('.more_deg_pic')[t].children.length; u++) {
                        S_All('.more_deg_pic')[t].children[u].children[1].classList.remove('active_background_color')
                        S_All('.more_deg_pic')[t].children[u].children[0].classList.remove('active_border_color')
                    }
                    S_All('.more_deg_pic')[t].children[p].children[1].classList.add('active_background_color')
                    S_All('.more_deg_pic')[t].children[p].children[0].classList.add('active_border_color')
                }

                setTimeout(() => {
                    for (let q = 0; q < S_All('.showpic img').length; q++) {
                        S_All('.showpic img')[q].src = get_path('shoes_main', index, color, deg, 'png');
                    }
                }, 450)
                for (let i = 0; i < S_All('.showpic img').length; i++) {
                    ani(S_All('.showpic img')[i], 'shake 500ms ease-in-out', 550)
                    ani(S_All('.shadow')[i], 'shoes_more_deg_shadow 500ms ease-in-out', 550)
                    // ani(S_All('.showpic img')[i],"more_deg  500ms ease-in-out",550)
                }
            })
        }
    }



    
    for (let i = 0; i < S_All('.prev_next_bar .prev').length; i++) {  
        S_All('.prev_next_bar .prev')[i].addEventListener('click', () => {
                index--;
                if (index < 0) {
                    index = shoes_title.length - 1;
                }
                transition_ani()
                dot_change()
                span_change()
            })
        
        }
    for (let i = 0; i < S_All('.prev_next_bar .next').length; i++) {
        S_All('.prev_next_bar .next')[i].addEventListener('click', () => {
            index++
            if (index > shoes_title.length - 1) {
                index = 0;
            }
            // for (let y = 0; y < dot_index.length; y++) {
            //     for (let w = 0; w < dot_index[0].children.length; w++) {
            //         dot_index[y].children[w].classList.remove('dot_index_active');
            //     }
            //     dot_index[y].children[index].classList.add('dot_index_active')
            // }
            transition_ani()
            dot_change()
            span_change()
        })
    }

    // console.log(dot_index[0].children)
    for (let z = 0; z < dot_index.length; z++) {
        for (let i = 0; i < (dot_index[z].children.length); i++) {
            dot_index[z].children[i].addEventListener('click', function () {
                index = i
                transition_ani()
                dot_change()
                span_change()
            })
        }
    }


























    // let dot_index_phone = document.querySelectorAll('.font_wrap .dot_index span')
    // let dot_index_xl = document.querySelectorAll('.form_product_wrap .dot_index span')
    // for (let i = 0; i < (dot_index_phone.length); i++) {
    //     dot_index_phone[i].addEventListener('click', function () {
    //         setTimeout(() => {
    //             for (let q = 0; q < S_All('.showpic img').length; q++) {
    //                 console.log(get_path('cartshoes', i, 'webp'))
    //                 S_All('.showpic img')[q].src = get_path('cartshoes', i, 'webp')
    //             }
    //         }, 600)
    //         for (let i = 0; i < S_All('.showpic img').length; i++) {
    //             ani(S_All('.showpic img')[i], `shoes_move_up  1.5s ease-in`, 1550);
    //             ani(S_All('.shadow')[i], `shoes_move_up_shadow 1.5s ease-in`, 1550);


    //         }


    //     })
    // }


    // for (let i = 0; i < (dot_index_xl.length); i++) {
    //     dot_index_xl[i].addEventListener('click', function () {
    //         console.log(dot_index_xl.length)
    //         setTimeout(() => {
    //             for (let q = 0; q < S_All('.showpic img').length; q++) {
    //                 console.log(get_path('cartshoes', i, 'webp'))
    //                 S_All('.showpic img')[q].src = get_path('cartshoes', i, 'webp')
    //             }
    //         }, 600)
    //         for (let i = 0; i < S_All('.showpic img').length; i++) {
    //             ani(S_All('.showpic img')[i], `shoes_move_up  1.5s ease-in`, 1550);
    //             ani(S_All('.shadow')[i], `shoes_move_up_shadow 1.5s ease-in`, 1550);
    //         }

    //     })

    // }



























































})