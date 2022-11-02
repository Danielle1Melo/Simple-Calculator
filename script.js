(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.bnt');
    let clear = document.querySelector('.bnt-clear');
    let equal = document.querySelector('.bnt-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === '') {
            screen.value = "PLease enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})();