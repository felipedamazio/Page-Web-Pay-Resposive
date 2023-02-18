const modalConfirm = function () {
  const event2 = document.querySelectorAll(".Pay");
  if (event2) {
    swal({
      title: "FINALIZAR PAGAMENTO?",
      buttons: ["Não", "Sim"],
    }).then((willDelete) => {
      if (willDelete) {
        swal("PAGAMENTO COM SUCESSO !", {
          icon: "success",
        });
        setTimeout(() => {
          document.formulario.submit();
        }, 2000); // aguardando 2 segundos para envio do formulario.
      } else {
        swal("PAGAMENTO CANCELADO !", {
          icon: "warning",
        });
      }
    });
  }
};

const form = document.querySelector("form");
const input = document.querySelectorAll("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.preventDefault();
  if (Array.from(input).some((input) => !input.value)) {
    return;
  }
  modalConfirm();
});
