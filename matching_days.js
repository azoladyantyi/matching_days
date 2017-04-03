var day = document.querySelectorAll('.days');
var input = document.querySelector('.dates');
var date1 = document.querySelector('.firstDate');
var date2 = document.querySelector('.secondDate');

input.addEventListener('change', function myFunction() {
    for (var i = 0; i < day.length; i++) {

        day[i].classList.remove('green');
        day[i].classList.remove('red');
        day[i].classList.remove('blue');
    }
    var date1Obj = new Date(date1.value);
    var date2Obj = new Date(date2.value);
    var getDay1 = date1Obj.getDay();
    var getDay2 = date2Obj.getDay();

    if (getDay1 === getDay2) {
        day[getDay1].classList.add('green');
    } else {


        if (getDay1) {
            day[getDay1].classList.add('blue');

        }
        if (getDay2) {
            day[getDay2].classList.add('red');
        }
    }

});
