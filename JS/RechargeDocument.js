// function rechargePage() {
//     let timerInterval
//     zeraTime();
//     Swal.fire({                
//         icon: 'error',
//         title: 'Seu pagamento expirou!',
//         html: 'Reiniciando sua pagina em <b></b> millisegundos.',
//         timer: 3000,
//         timerProgressBar: true,
        
//         didOpen: () => {
//             Swal.showLoading()
//             const b = Swal.getHtmlContainer().querySelector('b')
//             timerInterval = setInterval(() => {
//                 b.textContent = Swal.getTimerLeft()
//             }, 100)
//         },
//         willClose: () => {
//             clearInterval(timerInterval)
//         }
//     }).then((result) => {        
//         /* Read more about handling dismissals below */
//         if (result.dismiss === Swal.DismissReason.timer) {
//             console.log('I was closed by the timer')
//             window.location.reload(1);
//         }
//     })
// }

// function zeraTime(){
//     let timer = document.querySelector('#time');
//         timer.remove();
//         let zeraTime = document.querySelector('.time-left');         
//         let newLi = document.createElement('div');
//         newLi.setAttribute('class', 'loading');
//         newLi.innerText = 'CARREGANDO...';
//         zeraTime.prepend(newLi);
// }

