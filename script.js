
        document.querySelector('.hamberger').addEventListener('click', function () {
            document.querySelector('.hamberger .open_hamberger').classList.toggle("open_hamberger_opening")
            document.querySelector('.hamberger .close_hamberger').classList.toggle("close_hamberger_opening")
            document.querySelector('.open_hamberger span:nth-child(1)').classList.toggle("open_span_first_opening")
            document.querySelector('.open_hamberger span:nth-child(2)').classList.toggle("open_span_second_opening")
            document.querySelector('.close_hamberger span:nth-child(1) ').classList.toggle("close_span_first_opening")
            document.querySelector('.close_hamberger span:nth-child(2)').classList.toggle("close_span_second_opening")
            document.querySelector('.hamberger_navbar_wrap .clip_wrap').classList.toggle("clip_wrap_opening")
        })

 


  
        const top_blue_right = document.querySelector('.top_blue_right');
        const original = window.innerHeight

        window.addEventListener('resize', function () {
            const scrollYposition = window.pageYOffset;
            const scrollXposition = window.pageXOffset;
            // console.log(window.innerHeight)
            if (window.pageYOffset > window.innerHeight) {
                const top_blue_right_down = document.querySelector('.top_blue_right_down');
                top_blue_right_down.style.transform = `translateY(${window.innerHeight}px) translateX(${scrollXposition - (scrollYposition) * 0.9}px)`;
                const top_blue_right = document.querySelector('.top_blue_right');
                top_blue_right.style.transform = `translateY(${window.innerHeight - 200}px) translateX(${scrollXposition - (scrollYposition) * 0.26}px) rotate(${-scrollYposition / 69}deg)`;
                console.log(top_blue_right.style.transform)
            }
        }
        )






        window.addEventListener('scroll', function () {
            // console.log(window.pageYOffset)
            const scrollYposition = window.pageYOffset;
            const scrollXposition = window.pageXOffset;
            // console.log(window.scrollY)
            const top_blue_right_down = document.querySelector('.top_blue_right_down');
            // console.log(top_blue_right_down.offsetParent)
            const top_blue_right = document.querySelector('.top_blue_right');
            //    console.log(top_blue_right.offsetTop ) 
            // console.log(top_blue_right.offsetParent)

            const screenHeight = window.innerHeight



            // console.log(scrollYposition)
            if (window.pageYOffset <= screenHeight) {
                const top_blue_right_down = document.querySelector('.top_blue_right_down');
                top_blue_right_down.style.transform = `translateY(${scrollYposition}px) translateX(${scrollXposition - (scrollYposition) * 0.9}px)`;
                console.log(top_blue_right_down.style.transform)
                //    if( top_blue_right_down.style.transform.translateY)
                const part_two_left_black = document.querySelector('.part_two_left_black')
                // part_two_left_black.style.opacity = `${scrollYposition / 500}`
                const top_blue_right = document.querySelector('.top_blue_right')


                top_blue_right.style.transform = `translateY(${scrollYposition * 1.137}px) translateX(${scrollXposition - (scrollYposition) * 0.273}px) rotate(${-scrollYposition / 67}deg)`;
                top_blue_right.style.width = `${140 + (scrollYposition) * 0.50}px`
                top_blue_right.style.height = `${299 + (scrollYposition) * 0.54}px`
                top_blue_right.style.borderWidth = `${100 - (scrollYposition) * 0.037}px`
                const part_two_shoes = document.querySelector('.part_two_shoes')
                part_two_shoes.style.transform = `translateX(${scrollXposition - (scrollYposition) * 1.3}px) rotate(-15deg)`
                const part_two_name = document.querySelector('.part_two_name')
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
                const top_blue_right_down = document.querySelector('.top_blue_right_down');
                top_blue_right_down.style.transform = `translateY(${window.innerHeight}px) translateX(${-953}px)`;
                const top_blue_right = document.querySelector('.top_blue_right')


                top_blue_right.style.transform = `translateY(${window.innerHeight + 140}px) translateX(${-300}px) rotate(${-16}deg)`;


            }



            // top_blue_right_down.style.transform = ``;
            // console.log(window.scrollY)
            if (window.pageYOffset >= screenHeight / 3) {
                const top_blue_right = document.querySelector('.top_blue_right')
                top_blue_right.style.zIndex = '3'
                const number_zero_one_span = document.querySelector('.number_zero_one span');
                number_zero_one_span.textContent = '02'
            } else {
                const number_zero_one_span = document.querySelector('.number_zero_one span');
                number_zero_one_span.textContent = '01'
            }

        })



    

        // let top_blue_right_down = document.querySelector('.top_blue_right_down')
        // const y =top_blue_right_down.getAttribute("width")

        // let position =
        // console.log(position.x)




