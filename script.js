const buttons = document.querySelectorAll(".btn")
const bars = document.querySelectorAll(".bar")
const progressBars = document.querySelector(".progress-bar")

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
                    currBar.style.borderColor = 'green';
                    currBar.style.color = 'green';
                }
            })

            // progress bar update
            progressBars.style.width = `${(count / 5) * 100}%`

        } else if (btnClass.contains('previous-btn')) {
            if (count !== 0) {
                count--;
            }

            console.log(count)

            // Updating progress bar - Previous

            bars.forEach(bar => {
                if (bar.classList.contains(`bar-${count + 1}`)) {
                    let currBar = document.querySelector(`.bar-${count + 1}`)
                    currBar.style.borderColor = 'black';
                    currBar.style.color = 'black';
                }
            })

            // progress bar update
            progressBars.style.width = `${(count / 5) * 100}%`
        }
    })
})
