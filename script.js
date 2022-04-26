const buttons = document.querySelectorAll(".btn")
const bars = document.querySelectorAll(".bar")

let count = 0;

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        const btnClass = e.target.classList;
        if (btnClass.contains("next-btn") && count !== 5) {
            count++;

            console.log(count)

            // Updating progress bar - Next 
            bars.forEach(bar => {
                if (bar.classList.contains(`bar-${count}`)) {
                    let currBar = document.querySelector(`.bar-${count}`)
                    currBar.style.backgroundColor = 'green';
                }
            })

        } else if (btnClass.contains('previous-btn')) {
            if (count !== 0) {
                count--;
            }

            console.log(count)

            // Updating progress bar - Previous

            bars.forEach(bar => {
                if (bar.classList.contains(`bar-${count + 1}`)) {
                    let currBar = document.querySelector(`.bar-${count + 1}`)
                    currBar.style.backgroundColor = 'transparent';
                }
            })
        }
    })
})
