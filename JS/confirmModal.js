const modalConfirm = function () {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
  });

  swalWithBootstrapButtons
    .fire({
      title: "Confirmar pagamento?",
      text: "Ao confirmar... O pagamento será efetuado!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, confirmar!",
      cancelButtonText: "Não, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "Processando pagamento",
          icon: "success",
          html: "Seu Pedido será concluido em <b></b>.",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            placeOrder(); // chama função da animação do caminhão som de confirmação e envio do formulario ...
          }
        });

        const changeColor = document.querySelector(".step .active");
        changeColor.style.backgroundColor = "#6ec546";
        changeColor.style.opacity = 0.8;
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Poxa :(",
          "Seu pagamento foi cancelado.)",
          "error"
        );
      }
    });
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
});
