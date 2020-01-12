for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += '<div class = "block"></div>'
}

let num = 0;

document.getElementById('game').onclick = (event) => {
    if (event.target.className == 'block') {
        if (num % 2 == 0) {
            event.target.innerHTML = 'x';
        }
        else {
            event.target.innerHTML = 'O';
        }
        num++;
        checkWinner();
    }
}

function checkWinner () {
    let allblock = document.getElementsByClassName('block');

    if ( allblock[0].innerHTML== 'x' && allblock[1].innerHTML== 'x' && allblock[2].innerHTML== 'x') {alert('Winner X') } 
    if ( allblock[3].innerHTML== 'x' && allblock[4].innerHTML== 'x' && allblock[5].innerHTML== 'x') {alert('Winner X') }
    if ( allblock[6].innerHTML== 'x' && allblock[7].innerHTML== 'x' && allblock[8].innerHTML== 'x') {alert('Winner X') }
    if ( allblock[0].innerHTML== 'x' && allblock[3].innerHTML== 'x' && allblock[6].innerHTML== 'x') {alert('Winner X') }
    if ( allblock[1].innerHTML== 'x' && allblock[4].innerHTML== 'x' && allblock[7].innerHTML== 'x') {alert('Winner X') }
    if ( allblock[2].innerHTML== 'x' && allblock[5].innerHTML== 'x' && allblock[8].innerHTML== 'x') {alert('Winner X') }
    if ( allblock[0].innerHTML== 'x' && allblock[4].innerHTML== 'x' && allblock[8].innerHTML== 'x') {alert('Winner X') }
    if ( allblock[2].innerHTML== 'x' && allblock[4].innerHTML== 'x' && allblock[6].innerHTML== 'x') {alert('Winner X') }
    //  Нолики
    if ( allblock[0].innerHTML== 'O' && allblock[1].innerHTML== 'O' && allblock[2].innerHTML== 'O') {alert('Winner O') } 
    if ( allblock[3].innerHTML== 'O' && allblock[4].innerHTML== 'O' && allblock[5].innerHTML== 'O') {alert('Winner O') }
    if ( allblock[6].innerHTML== 'O' && allblock[7].innerHTML== 'O' && allblock[8].innerHTML== 'O') {alert('Winner O') }
    if ( allblock[0].innerHTML== 'O' && allblock[3].innerHTML== 'O' && allblock[6].innerHTML== 'O') {alert('Winner O') }
    if ( allblock[1].innerHTML== 'O' && allblock[4].innerHTML== 'O' && allblock[7].innerHTML== 'O') {alert('Winner O') }
    if ( allblock[2].innerHTML== 'O' && allblock[5].innerHTML== 'O' && allblock[8].innerHTML== 'O') {alert('Winner O') }
    if ( allblock[0].innerHTML== 'O' && allblock[4].innerHTML== 'O' && allblock[8].innerHTML== 'O') {alert('Winner O') }
    if ( allblock[2].innerHTML== 'O' && allblock[4].innerHTML== 'O' && allblock[6].innerHTML== 'O') {alert('Winner O') }

}
