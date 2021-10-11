document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById('image');
    let btn = document.getElementById('pic');

    input.addEventListener('change', updateValue);
    function updateValue(e) {
        console.log(input.value)
            if (input.value !== '') {
                btn.disabled = false;
            }
            else {
                btn.disabled = true;
            }
                }
    

});

console.log('Outside function')