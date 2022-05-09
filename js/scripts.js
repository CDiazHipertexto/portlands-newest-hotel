(function (){
    "use strict";

    // star script form

    const resultThurs = document.querySelector('.result--thurs');
    const resultSat = document.querySelector('.result--sat');
    const adultAmount = document.querySelector('.adult');
    const childAmount = document.querySelector('.child');
    const resultAdult = document.querySelector('.result--adult');
    const resultChild = document.querySelector('.result--child');

    document.querySelector(".date-arrival").addEventListener("input",function(){
        const date = new Date(this.value);
        resultThurs.textContent = date.toLocaleString();
    })

    document.querySelector(".date-departure").addEventListener("input",function(){
        const date = new Date(this.value);
        resultSat.textContent = date.toLocaleString();
    })

    adultAmount.addEventListener('change', (event) => {
        resultAdult.textContent = ` ${event.target.value}`;
    });

    childAmount.addEventListener('change', (event) => {
        resultChild.textContent = ` ${event.target.value}`;
    });

    // end script form


    // start script toggle form book now

    let bookNow = document.getElementById('booknow');
    let bgBookNow = document.getElementById('booknow-bg');

    document.getElementById('close').addEventListener('click', function () {
        bookNow.classList.remove('active');
        bgBookNow.classList.remove('show');
        document.body.classList.remove("overflow-y");
    });
    document.getElementById('open').addEventListener('click', function () {
        bgBookNow.classList.toggle('show');
        bookNow.classList.toggle('active');
        document.body.classList.toggle("overflow-y");

        if (bgBookNow.classList.contains('show')) {
            bgBookNow.addEventListener('click', function () {
                bookNow.classList.remove('active');
                this.classList.remove('show');
                document.body.classList.remove("overflow-y");
            });
        } else {
            console.log("OK!");
        }
    });
    // end script toggle form book now

    let scrollV = window.scrollY
    const header = document.querySelector("header")
    const header_height = header.offsetHeight

    const addClassScroll = () => header.classList.add("fixed")
    const removeClassScroll = () => header.classList.remove("fixed")

    window.addEventListener('scroll', function() {
        scrollV = window.scrollY;
        if (scrollV >= header_height) {
            addClassScroll()
        } else {
            removeClassScroll()
        }
        console.log(scrollV)
    })

    // end script scroll menu fixed

}());


