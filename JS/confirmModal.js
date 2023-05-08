const modalConfirm = function () {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    }    
  })

  swalWithBootstrapButtons.fire({
    title: 'Confirmar pagamento?',
    text: "Ao comfirmar o pagamento será efetuado!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, confirmar!',
    cancelButtonText: 'Não, cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {      
      swalWithBootstrapButtons.fire(
        'Pronto!',
        'Seu pagamento foi efetuado com sucesso.',
        'success'
      )
      setTimeout(() => {
        document.formulario.submit();
      }, 3000); // aguardando 2 segundos para envio do formulario.
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Poxa :(',
        'Seu pagemento foi cancelado.)',
        'error'
      )
    }
  })
};


const form = document.querySelector("form[name=formulario]");
const input = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstInput = input[0];
  if (firstInput.value.length < 16) {
    return;
  }

  const secondInput = input[1];
  const secondInputRegex = /^[A-Za-z\s]+$/; // permite letras e espaços.
  if (!secondInputRegex.test(secondInput.value)) {
    console.warn("Prencha somente letras");
    return;
  }

  const thirdInput = input[2];
  const thirdInputRegex = /^\d{3,4}$/; // permite até 4 dígitos numéricos.
  if (!thirdInputRegex.test(thirdInput.value)) {
    console.warn("Prencha todos os numeros");
    return;

  }

  // zerando o timer após envio do form

  window.onload = function () {
    var Minutes = 5 * 2,
      display = document.querySelector("#time");
    startTimer(Minutes, display);
  };

  modalConfirm();

  let changeColor = document.querySelector('.step .active');
  changeColor.style.backgroundColor = "#6ec546";
  changeColor.style.opacity = 0.8;
});
