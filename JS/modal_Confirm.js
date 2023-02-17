const modalConfirm = function () {
  const event2 = document.querySelectorAll(".Pay");

  if (event2) {  
    
    // Método swal para criar os alertas dos dowloads (biblioteca sweetalert) -----------
  
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
const input = document.querySelectorAll("input");
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();  
  if (/!input[0-9]/.value) {
    return;
  }
  modalConfirm();
});
