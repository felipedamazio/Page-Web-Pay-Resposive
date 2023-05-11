function audioClick() {
    const buttonPay = document.querySelector('.Pay');
    buttonPay.addEventListener('click', function () {
        const audio = document.querySelector('.audio');
        audio.play();
        console.log('Som de click');
    })

}

function audioOrder() {
    const audio = document.querySelector('.order-song');
    audio.play();
    console.log('Order enviado som');
}

audioClick();


