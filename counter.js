// Make The Counter
let count = 0;

// Find The Document

const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn")

// Event On Buttons

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if(styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        };

        if (count > 0){
            value.style.color ="blue";
        }
        else if(count < 0) {
            value.style.color ="red";
        }
        else{
            value.style.color =" rgb(0, 0, 0)";
        }
        value.textContent = count;
    });
});

