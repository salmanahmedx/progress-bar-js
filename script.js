const buttons = document.querySelectorAll(".btn")
const bars = document.querySelectorAll(".bar")

let count = 0;

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        const btnClass = e.target.classList;
        if (btnClass.contains("next-btn") && count !== 5) {
            count++;

            console.log(count)

            for (let i = 1; i < count + 1; i++) {
                bars.forEach(bar => {
                    if (bar.classList.contains(`bar-${i}`)) {
                        let currBar = document.querySelector(`.bar-${count}`)
                        currBar.style.backgroundColor = 'green';
                    }
                })
            }


        } else if (btnClass.contains('previous-btn')) {
            if (count > 1) {
                count--;
            }

            console.log(count)

            for (let i = count; i > 0; i--) {
                bars.forEach(bar => {
                    if (bar.classList.contains(`bar-${i}`)) {
                        let currBar = document.querySelector(`.bar-${count}`)
                        currBar.style.backgroundColor = 'transparent';
                    }
                })
            }
        }





    })
})
